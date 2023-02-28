export default {
  title: "Dataordbog",
  description: "Just playing around.",
  srcDir: "./",
  base: "/DataDictionary/",
  //cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        text: "Oversigt",

        items: [
          // Formål
          {text: "Formål", link: "/Purposes/"},

          // Templates
          {
            text: "Templates",
            collapsed: true,
            link: "/Templates/",
            items: [
              {text: "Aktør", link: "/Templates/Product/"},
              {text: "Kontekst", link: "/Templates/Context/"},
              {text: "Kontrol", link: "/Templates/Control/"},
              {text: "Gruppe", link: "/Templates/Group/"},
              {text: "Proces", link: "/Templates/Process/"},
              {
                text: "Produkt",
                collapsed: true,
                link: "/Templates/Product/",

                // SpatialElements
                items: [
                  {
                    text: "SpatialElement",
                    collapsed: true,
                    link: "/Templates/Product/",
                    items: [
                      {
                        text: "Grund",
                        link: "/Templates/Product/SpatialElement/Site",
                      },
                      {
                        text: "Jordstykke",
                        link: "/Templates/Product/SpatialElement/Jordstykke",
                      },
                      {
                        text: "Bygninger",
                        link: "/Templates/Product/SpatialElement/Building",
                      },
                      {
                        text: "Etager",
                        link: "/Templates/Product/SpatialElement/BuildingStorey",
                      },
                      {
                        text: "Opgange",
                        link: "/Templates/Product/SpatialElement/Opgang",
                      },
                      {
                        text: "Enheder",
                        link: "/Templates/Product/SpatialElement/Enhed",
                      },
                      {
                        text: "Zoner",
                        link: "/Templates/Product/SpatialElement/Zone",
                      },
                      {
                        text: "Rum",
                        link: "/Templates/Product/SpatialElement/Space",
                      },
                    ],
                  },

                  // Elements
                  {
                    text: "Element",
                    collapsed: true,
                    link: "/Templates/Product/Element/",
                    items: [
                      {
                        text: "BuiltElement",
                        collapsed: true,
                        link: "/Templates/Product/Element/BuiltElement/",
                        items: [
                          {
                            text: "Søjle",
                            link: "/Templates/Product/Element/BuiltElement/Column",
                          },
                          {
                            text: "Dør",
                            link: "/Templates/Product/Element/BuiltElement/Door",
                          },
                          {
                            text: "Tag",
                            link: "/Templates/Product/Element/BuiltElement/Roof",
                          },
                          {
                            text: "Trappe",
                            link: "/Templates/Product/Element/BuiltElement/Stair",
                          },
                          {
                            text: "Væg",
                            link: "/Templates/Product/Element/BuiltElement/Wall",
                          },
                          {
                            text: "Vindue",
                            link: "/Templates/Product/Element/BuiltElement/Window",
                          },
                        ],
                      },

                      // FurnishingElement
                      {
                        text: "FurnishingElement",
                        collapsed: true,
                        link: "/Templates/Product/Element/FurnishingElement/",
                        items: [
                          {
                            text: "Møbler",
                            link: "/Templates/Product/Element/FurnishingElement/Furniture",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Ressources
              {text: "Ressource", link: "/Templates/Resource/"},
            ],
          },

          // Attributes
          {text: "Attributer", link: "/Attributes/"},

          // PropertySets
          {
            text: "Egenskabssæt",
            collapsed: true,
            link: "/PropertySets/",
            items: [{text: "Egenskaber", link: "/Properties/"}],
          },

          // QuantitySets
          {
            text: "MængdeSæt",
            collapsed: true,
            link: "/QuantitySets/",
            items: [{text: "Mængder", link: "/Quantities/"}],
          },

          // Enumerations
          {
            text: "Værdilister",
            collapsed: true,
            link: "/Enumerations/",
            items: [{text: "Værdier", link: "/Values/"}],
          },

          // Tasks
          {text: "Opgaver", link: "/Tasks/"},
        ],
      },
    ],
  },
};
