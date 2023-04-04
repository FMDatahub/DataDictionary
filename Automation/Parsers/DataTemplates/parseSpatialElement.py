
import requests
import pprint
import json
import re

pp = pprint.PrettyPrinter(indent=4, sort_dicts=False)


def InsertSpatialElementIntoDB(JsonObject):

    # Opret SpatialElement
    title = JsonObject["title"]
    print(title)
    description = JsonObject["sections"][0]["text"]
    print(description)

    # Tilføj predefined values
    PredefinedValues = JsonObject["sections"][1]["content"]
    for PredefinedValue in PredefinedValues[0]:
        print(PredefinedValue["name"])
        print(PredefinedValue["link"])

    # Opret attributesets
    Attributesets = JsonObject["sections"][2]["content"][0]
    for Attributeset in Attributesets["content"]:
        print(Attributeset["name"])
        print(Attributeset["link"])

    # Opret propertysets
    Propertysets = JsonObject["sections"][2]["content"][1]
    for Propertyset in Propertysets["content"]:
        print(Propertyset["name"])
        print(Propertyset["link"])

    # Opret quantitysets
    Quantitysets = JsonObject["sections"][2]["content"][2]
    for Quantityset in Quantitysets["content"]:
        print(Quantityset["name"])
        print(Quantityset["link"])

    # Opret documents
    Documents = JsonObject["sections"][3]["content"]
    print(Documents)


# Konverter md fil til json
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


# Konvert md filen til et json objekt
def parseSpatialElement():

    URL = "https://raw.githubusercontent.com/FMDatahub/Datadictionary/main/docs/DataTemplates/SpatialElement/Building.md"
    response = requests.get(URL, stream=True)

    with open("currentFile.md", "wb") as currentFile:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                currentFile.write(chunk)

    with open('currentFile.md', 'r', encoding='utf-8') as file:
        md_content = file.read()

    json_data = md_to_json(md_content)
    #print(json.dumps(json_data, indent=2, ensure_ascii=False))

    InsertSpatialElementIntoDB(json_data)


parseSpatialElement()
