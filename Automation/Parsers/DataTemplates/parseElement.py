
import requests
import pprint
import json
import re


# Skal køre ved commit
pp = pprint.PrettyPrinter(indent=4, sort_dicts=False)


def md_to_json(md_content):
    lines = md_content.split('\n')
    data = {}
    current_section = None
    current_subsection = None
    current_table = None
    current_table_keys = None

    for line in lines:
        # Match main title
        if re.match(r'^# ', line):
            data['title'] = re.sub(r'^# ', '', line)
            data['sections'] = []
        # Match section titles
        elif re.match(r'^## ', line):
            current_section = {'title': re.sub(
                r'^## ', '', line), 'content': []}
            data['sections'].append(current_section)
            current_subsection = None
        # Match subsection titles
        elif re.match(r'^### ', line):
            current_subsection = {'title': re.sub(
                r'^### ', '', line), 'content': []}
            current_section['content'].append(current_subsection)
            current_table = None
        # Match list items with a link
        elif re.match(r'^- \[', line):
            if current_subsection is not None:
                name, link = re.match(r'- \[(.+)\]\((.+)\)', line).groups()
                current_subsection['content'].append({
                    'name': name.strip(),
                    'link': link.strip()
                })
        # Match table rows
        elif re.match(r'^\|', line):
            if current_table is None:
                current_table = []
                if current_subsection is not None:
                    current_subsection['content'].append(current_table)
                else:
                    current_section['content'].append(current_table)
                header = re.findall(r'\|([^|]+)', line)
                current_table_keys = [col.strip() for col in header]
            else:
                row = re.findall(r'\|([^|]+)', line)
                if len(row) > 1:
                    row_dict = {}
                    for i, col in enumerate(row):
                        if current_table_keys[i] == 'Column':
                            match = re.match(r'\[(.+)\]\((.+)\)', col.strip())
                            if match:
                                name, link = match.groups()
                                row_dict['name'] = name.strip()
                                row_dict['link'] = link.strip()
                        elif current_table_keys[i] == 'Value':
                            row_dict['value'] = col.strip()
                    # Check if row_dict is not empty and skip the row with "-----"
                    if row_dict and row_dict['value'] != '-----':
                        current_table.append(row_dict)
        # Match any other text content
        elif not line.strip() == '':
            if current_table is not None:
                current_table = None
            if current_subsection is not None:
                if 'text' not in current_subsection:
                    current_subsection['text'] = ''
                current_subsection['text'] += line + ' '
            elif current_section is not None:
                if 'text' not in current_section:
                    current_section['text'] = ''
                current_section['text'] += line + ' '

    return data


def parseElement():

    URL = "https://raw.githubusercontent.com/FMDatahub/Datadictionary/main/docs/DataTemplates/Element/BuiltElement/Column.md"
    response = requests.get(URL, stream=True)

    with open("currentFile.md", "wb") as currentFile:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                currentFile.write(chunk)

    with open('currentFile.md', 'r', encoding='utf-8') as file:
        md_content = file.read()

    json_data = md_to_json(md_content)
    print(json.dumps(json_data, indent=2, ensure_ascii=False))


parseElement()
