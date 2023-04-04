import {createRequire} from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");
const path = require("path");

const sortOrder = [
  "DataTemplates",
  "Attributesets",
  "Attributes",
  "Propertysets",
  "Properties",
  "Quantitysets",
  "Quantities",
  "Documents",
  "ValueLists",
];

function sortEntries(a, b) {
  const aIndex = sortOrder.indexOf(a.name);
  const bIndex = sortOrder.indexOf(b.name);

  if (aIndex > -1 && bIndex > -1) {
    return aIndex - bIndex;
  } else if (aIndex > -1) {
    return -1;
  } else if (bIndex > -1) {
    return 1;
  }

  if (a.isDirectory() && b.isDirectory()) {
    return a.name.localeCompare(b.name);
  }
  return a.isDirectory()
    ? -1
    : b.isDirectory()
    ? 1
    : a.name.localeCompare(b.name);
}

function generateSidebar(dir = "../../docs", basePath = "/") {
  const docsDir = path.resolve(__dirname, dir);
  let entries = [];

  try {
    entries = fs.readdirSync(docsDir, {withFileTypes: true});
  } catch (err) {
    console.error(`Error reading directory "${docsDir}":`, err.message);
    return [];
  }

  entries.sort(sortEntries);

  const sidebar = entries
    .filter((entry) => !entry.name.startsWith("."))
    .map((entry) => {
      if (entry.isDirectory()) {
        const folderPath = path.join(basePath, entry.name);
        const indexPath = path.join(folderPath, "index");
        const children = generateSidebar(
          path.join(dir, entry.name),
          folderPath
        );

        return {
          text: entry.name,
          link: indexPath,
          items: children,
          collapsed: true,
        };
      } else {
        const fileWithoutExtension = entry.name.replace(/.md$/, "");
        const filePath = path.join(basePath, fileWithoutExtension);

        if (fileWithoutExtension !== "index") {
          return {
            text: fileWithoutExtension,
            link: filePath,
          };
        }
      }
    })
    .filter((entry) => entry !== undefined);

  return sidebar;
}

export default {
  title: "Dataordbog",
  description: "Metadata",
  srcDir: "./",
  base: "/Datadictionary/",
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    algolia: {
      appId: "NB8YD78IXW",
      apiKey: "2c6fb5d1b5c1ebabbe022f9d3900a053",
      indexName: "datadictionary",
    },
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "Søg...",
    editLink: {
      pattern:
        "https://github.com/FMDatahub/Datadictionary/tree/main/docs/:path",
      text: "Rediger denne side på GitHub",
    },
    sidebar: generateSidebar(),
  },
};
