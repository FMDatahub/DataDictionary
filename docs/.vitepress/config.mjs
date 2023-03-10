import {generateSidebar} from "vitepress-sidebar";

export default {
  title: "Dataordbog",
  description: "Just playing around.",
  srcDir: "./",
  base: "/Datadictionary/",
  //cleanUrls: true,
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
    sidebar: generateSidebar({
      root: "/docs",
      rootGroupText: "Opslag",
      useTitleFromFileHeading: true,
      hyphenToSpace: true,
      // underscoreToSpace: true,
      collapsed: true,

      sortByFileName: [
        "Purposes",
        "Templates",
        "Attributes",
        "GroupsOfProperties",
        "Properties",
        "Values",
        "Documents",
        "Quantities",
        "DataTypes",
        "Tasks",
        "API",
        "Guide",
      ],
      withIndex: false,
      // includeEmptyGroup: false
    }),
  },
};
