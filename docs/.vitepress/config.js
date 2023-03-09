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
    editLink: {
      pattern:
        "https://github.com/FMDatahub/Datadictionary/tree/main/docs/:path",
      text: "Rediger denne side på GitHub",
    },
    sidebar: [
      {
        text: "Beskrivelser",
        items: [
          // Formål
          {
            text: "Formål",
            collapsed: true,
            link: "/Purposes/",
            items: [
              {
                text: "Afventer",
                collapsed: true,
                link: "/Templates/Product/Element/DistributionElement/Flow/AirTerminalBox",
              },
            ],
          },
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
                text: "Element",
                collapsed: true,
                link: "/Templates/Product/",

                // SpatialElements
                items: [
                  {
                    text: "Struktur",
                    collapsed: true,
                    link: "/Templates/Product/SpatialElement/",
                    items: [
                      {
                        text: "Grund",
                        collapsed: true,
                        link: "/Templates/Product/SpatialElement/Site",
                        items: [
                          {
                            text: "Jordstykke",
                            link: "/Templates/Product/SpatialElement/Jordstykke",
                          },
                        ],
                      },
                      {
                        text: "Bygning",
                        link: "/Templates/Product/SpatialElement/Building",
                      },
                      {
                        text: "Etage",
                        link: "/Templates/Product/SpatialElement/BuildingStorey",
                      },
                      {
                        text: "Zone",
                        collapsed: true,
                        link: "/Templates/Product/SpatialElement/Zone",
                        items: [
                          {
                            text: "Opgang",
                            link: "/Templates/Product/SpatialElement/Opgang",
                          },
                          {
                            text: "Enhed",
                            link: "/Templates/Product/SpatialElement/Enhed",
                          },
                        ],
                      },
                      {
                        text: "Rum",
                        link: "/Templates/Product/SpatialElement/Space",
                      },
                    ],
                  },
                  {
                    text: "Bygget",
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
                  {
                    // FurnishingElement
                    text: "Indretning",
                    collapsed: true,
                    link: "/Templates/Product/Element/FurnishingElement/",
                    items: [
                      {
                        text: "Inventar",
                        link: "/Templates/Product/Element/FurnishingElement/Furniture",
                      },
                    ],
                  },
                  {
                    // DistributionElement control
                    text: "Distribution: Control",
                    collapsed: true,
                    link: "/Templates/Product/Element/DistributionElement/",
                    items: [
                      {
                        text: "DistributionElementChamber",
                        link: "/Templates/Product/Element/DistributionElement/Flow/DistributionElementChamber/",
                      },
                      {
                        text: "EnergyConversionDevice",
                        link: "/Templates/Product/Element/DistributionElement/Flow/EnergyConversionDevice/",
                        items: [
                          {
                            text: "AirToAirHeatRecovery",
                            link: "/Templates/Product/Element/DistributionElement/Flow/AirToAirHeatRecovery",
                          },
                          {
                            text: "Boiler",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Boiler",
                          },
                          {
                            text: "Burner",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Burner",
                          },
                          {
                            text: "Chiller",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Chiller",
                          },
                          {
                            text: "Coil",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Coil",
                          },
                          {
                            text: "Condenser",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Condenser",
                          },
                          {
                            text: "CooledBeam",
                            link: "/Templates/Product/Element/DistributionElement/Flow/CooledBeam",
                          },
                          {
                            text: "CoolingTower",
                            link: "/Templates/Product/Element/DistributionElement/Flow/CoolingTower",
                          },
                          {
                            text: "ElectricGenerator",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ElectricGenerator",
                          },
                          {
                            text: "ElectricMotor",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ElectricMotor",
                          },
                          {
                            text: "Engine",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Engine",
                          },
                          {
                            text: "EvaporativeCooler",
                            link: "/Templates/Product/Element/DistributionElement/Flow/EvaporativeCooler",
                          },
                          {
                            text: "Evaporator",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Evaporator",
                          },
                          {
                            text: "HeatExchanger",
                            link: "/Templates/Product/Element/DistributionElement/Flow/HeatExchanger",
                          },
                          {
                            text: "Humidifier",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Humidifier",
                          },
                          {
                            text: "MotorConnection",
                            link: "/Templates/Product/Element/DistributionElement/Flow/MotorConnection",
                          },
                          {
                            text: "SolarDevice",
                            link: "/Templates/Product/Element/DistributionElement/Flow/SolarDevice",
                          },
                          {
                            text: "Transformer",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Transformer",
                          },
                          {
                            text: "TubeBundle",
                            link: "/Templates/Product/Element/DistributionElement/Flow/TubeBundle",
                          },
                          {
                            text: "UnitaryEquipment",
                            link: "/Templates/Product/Element/DistributionElement/Flow/UnitaryEquipment",
                          },
                        ],
                      },
                      {
                        text: "FlowController",
                        collapsed: true,
                        link: "/Templates/Product/Element/DistributionElement/Flow/FlowController/",
                        items: [
                          {
                            text: "AirTerminalBox",
                            link: "/Templates/Product/Element/DistributionElement/Flow/AirTerminalBox",
                          },
                          {
                            text: "Damper",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Damper",
                          },
                          {
                            text: "DistributionElementBoard",
                            link: "/Templates/Product/Element/DistributionElement/Flow/DistributionElementBoard",
                          },
                          {
                            text: "ElectricDistributionElementBoard",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ElectricDistributionElementBoard",
                          },
                          {
                            text: "ElectricTimeControl",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ElectricTimeControl",
                          },
                          {
                            text: "FlowMeter",
                            link: "/Templates/Product/Element/DistributionElement/Flow/FlowMeter",
                          },
                          {
                            text: "ProtectiveDevice",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ProtectiveDevice",
                          },
                          {
                            text: "SwitchingDevice",
                            link: "/Templates/Product/Element/DistributionElement/Flow/SwitchingDevice",
                          },
                          {
                            text: "Valve",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Valve",
                          },
                        ],
                      },
                      {
                        text: "FlowFitting",
                        collapsed: true,
                        link: "/Templates/Product/Element/DistributionElement/Flow/FlowFitting/",
                        items: [
                          {
                            text: "CableCarrierFitting",
                            link: "/Templates/Product/Element/DistributionElement/Flow/CableCarrierFitting",
                          },
                          {
                            text: "CableFitting",
                            link: "/Templates/Product/Element/DistributionElement/Flow/CableFitting",
                          },
                          {
                            text: "DuctFitting",
                            link: "/Templates/Product/Element/DistributionElement/Flow/DuctFitting",
                          },
                          {
                            text: "JunctionBox",
                            link: "/Templates/Product/Element/DistributionElement/Flow/JunctionBox",
                          },
                          {
                            text: "PipeFitting",
                            link: "/Templates/Product/Element/DistributionElement/Flow/PipeFitting",
                          },
                        ],
                      },
                      {
                        text: "FlowMovingDevice",
                        collapsed: true,
                        link: "/Templates/Product/Element/DistributionElement/Flow/FlowMovingDevice/",
                        items: [
                          {
                            text: "Compressor",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Compressor",
                          },
                          {
                            text: "Fan",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Fan",
                          },
                          {
                            text: "Pump",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Pump",
                          },
                        ],
                      },
                      {
                        text: "FlowStorageDevice",
                        collapsed: true,
                        link: "/Templates/Product/Element/DistributionElement/Flow/FlowStorageDevice/",
                        items: [
                          {
                            text: "ElectricFlowStorageDevice",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ElectricFlowStorageDevice",
                          },
                          {
                            text: "Tank",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Tank",
                          },
                        ],
                      },
                      {
                        text: "FlowTerminal",
                        collapsed: true,
                        link: "/Templates/Product/Element/DistributionElement/Flow/FlowTerminal/",
                        items: [
                          {
                            text: "AirTerminal",
                            link: "/Templates/Product/Element/DistributionElement/Flow/AirTerminal",
                          },
                          {
                            text: "AudioVisualAppliance",
                            link: "/Templates/Product/Element/DistributionElement/Flow/AudioVisualAppliance",
                          },
                          {
                            text: "CommunicationsAppliance",
                            link: "/Templates/Product/Element/DistributionElement/Flow/CommunicationsAppliance",
                          },
                          {
                            text: "ElectricAppliance",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ElectricAppliance",
                          },
                          {
                            text: "FireSuppressionTerminal",
                            link: "/Templates/Product/Element/DistributionElement/Flow/FireSuppressionTerminal",
                          },
                          {
                            text: "Lamp",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Lamp",
                          },
                          {
                            text: "LightFixture",
                            link: "/Templates/Product/Element/DistributionElement/Flow/LightFixture",
                          },
                          {
                            text: "LiquidTerminal",
                            link: "/Templates/Product/Element/DistributionElement/Flow/LiquidTerminal",
                          },
                          {
                            text: "MedicalDevice",
                            link: "/Templates/Product/Element/DistributionElement/Flow/MedicalDevice",
                          },
                          {
                            text: "MobileTelecommunicationsAppliance",
                            link: "/Templates/Product/Element/DistributionElement/Flow/MobileTelecommunicationsAppliance",
                          },
                          {
                            text: "Outlet",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Outlet",
                          },
                          {
                            text: "SanitaryTerminal",
                            link: "/Templates/Product/Element/DistributionElement/Flow/SanitaryTerminal",
                          },
                          {
                            text: "Signal",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Signal",
                          },
                          {
                            text: "SpaceHeater",
                            link: "/Templates/Product/Element/DistributionElement/Flow/SpaceHeater",
                          },
                          {
                            text: "StackTerminal",
                            link: "/Templates/Product/Element/DistributionElement/Flow/StackTerminal",
                          },
                          {
                            text: "WasteTerminal",
                            link: "/Templates/Product/Element/DistributionElement/Flow/WasteTerminal",
                          },
                        ],
                      },
                      {
                        text: "FlowTreatmentDevice",
                        collapsed: true,
                        link: "/Templates/Product/Element/DistributionElement/Flow/FlowTreatmentDevice/",
                        items: [
                          {
                            text: "DuctSilencer",
                            link: "/Templates/Product/Element/DistributionElement/Flow/DuctSilencer",
                          },
                          {
                            text: "ElectricFlowTreatmentDevice",
                            link: "/Templates/Product/Element/DistributionElement/Flow/ElectricFlowTreatmentDevice",
                          },
                          {
                            text: "Filter",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Filter",
                          },
                          {
                            text: "Interceptor",
                            link: "/Templates/Product/Element/DistributionElement/Flow/Interceptor",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    // DistributionElement flow
                    text: "Distribution: Flow",
                    collapsed: true,
                    link: "/Templates/Product/Element/DistributionElement/",
                    items: [
                      {
                        text: "Actuator",
                        link: "/Templates/Product/Element/DistributionElement/Control/Actuator",
                      },
                      {
                        text: "Alarm",
                        link: "/Templates/Product/Element/DistributionElement/Control/Alarm",
                      },
                      {
                        text: "Controller",
                        link: "/Templates/Product/Element/DistributionElement/Control/Controller",
                      },
                      {
                        text: "FlowInstrument",
                        link: "/Templates/Product/Element/DistributionElement/Control/FlowInstrument",
                      },
                      {
                        text: "Sensor",
                        link: "/Templates/Product/Element/DistributionElement/Control/Sensor",
                      },
                      {
                        text: "UnitaryControl",
                        link: "/Templates/Product/Element/DistributionElement/Control/UnitaryControl",
                      },
                    ],
                  },

                  {
                    // Træer og lign
                    text: "Geografisk",
                    collapsed: true,
                    link: "/Templates/Product/Element/Geographic/",
                    items: [
                      {
                        text: "Træ",
                        link: "/Templates/Product/Element/Geographic/Tree",
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
          {
            text: "Attributer",
            collapsed: true,
            link: "/Attributes/",
            items: [
              {
                text: "KEID",
                collapsed: true,
                link: "Attributes/KEID/",
                items: [
                  {text: "Id", link: "Attributes/KEID/Id"},
                  {
                    text: "ParentContext",
                    link: "Attributes/KEID/ParentContext",
                  },
                  {
                    text: "ParentProject",
                    link: "Attributes/KEID/ParentProject",
                  },
                  {
                    text: "Lat",
                    link: "Attributes/KEID/Lat",
                  },
                  {
                    text: "Lng",
                    link: "Attributes/KEID/Lng",
                  },
                  {
                    text: "Polygon",
                    link: "Attributes/KEID/Polygon",
                  },
                ],
              },
              {
                text: "Standard",
                collapsed: true,
                link: "Attributes/IFC/",
                items: [
                  {
                    text: "CompositionType",
                    link: "Attributes/IFC/CompositionType",
                  },
                  {
                    text: "ContainsElements",
                    link: "Attributes/IFC/ContainsElements",
                  },
                  {
                    text: "Decomposes",
                    link: "Attributes/IFC/Decomposes",
                  },
                  {
                    text: "Description",
                    link: "Attributes/IFC/Description",
                  },
                  {
                    text: "GlobalId",
                    link: "Attributes/IFC/GlobalId",
                  },
                  {
                    text: "IsDecomposedBy",
                    link: "Attributes/IFC/IsDecomposedBy",
                  },
                  {
                    text: "LongName",
                    link: "Attributes/IFC/LongName",
                  },
                  {
                    text: "Name",
                    link: "Attributes/IFC/Name",
                  },
                  {
                    text: "ObjectType",
                    link: "Attributes/IFC/ObjectType",
                  },
                  {
                    text: "Representation",
                    link: "Attributes/IFC/Representation",
                  },
                  {
                    text: "Type",
                    link: "Attributes/IFC/Type",
                  },
                ],
              },
              {
                text: "OwnerHistory",
                collapsed: true,
                link: "Attributes/OwnerHistory/",
                items: [
                  {
                    text: "ChangeAction",
                    link: "Attributes/OwnerHistory/ChangeAction",
                  },
                  {
                    text: "CreationDate",
                    link: "Attributes/OwnerHistory/CreationDate",
                  },
                  {
                    text: "LastModifiedDate",
                    link: "Attributes/OwnerHistory/LastModifiedDate",
                  },
                  {
                    text: "LastModifyingApplication",
                    link: "Attributes/OwnerHistory/LastModifyingApplication",
                  },
                  {
                    text: "LastModifyingUser",
                    link: "Attributes/OwnerHistory/LastModifyingUser",
                  },
                  {
                    text: "OwningApplication",
                    link: "Attributes/OwnerHistory/OwningApplication",
                  },
                  {
                    text: "OwningUser",
                    link: "Attributes/OwnerHistory/OwningUser",
                  },
                  {
                    text: "State",
                    link: "Attributes/OwnerHistory/State",
                  },
                  {
                    text: "Version",
                    link: "Attributes/OwnerHistory/Version",
                  },
                ],
              },
            ],
          },

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
          {
            text: "Opgaver",
            collapsed: true,
            link: "/Tasks/",
            items: [
              {
                text: "Afventer",
                collapsed: true,
                link: "/Templates/Product/Element/DistributionElement/Flow/AirTerminalBox",
              },
            ],
          },
        ],
      },
      {
        text: "API",
        items: [
          {
            text: "Documentation",
            link: "/API/",
          },
        ],
      },
      {
        text: "Links",
        items: [
          {
            text: "Portal",
            link: "https://fmdatahub.github.io/Portal/",
          },
        ],
      },
    ],
  },
};
