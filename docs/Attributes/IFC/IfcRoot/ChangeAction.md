# ChangeAction

## Beskrivelse

Bruges til at spore historikken om ændringer, der er foretaget i en IFC-model. Det indeholder oplysninger om, hvad der er ændret, hvornår ændringen blev foretaget, hvem der foretog ændringen, og eventuelle bemærkninger eller kommentarer, der er relevante for ændringen. Dette hjælper med at opretholde en præcis og opdateret version af modellen og muliggør nem kommunikation og samarbejde mellem forskellige interessenter i byggeprojektet.

ChangeAction er en vigtig del af IFC-standarden, da det understøtter den generelle proces med at dele og synkronisere digitale bygningsmodeller og opretholde en høj kvalitet af de digitale data i hele byggeprojektets livscyklus.

## Predefined

| Column                                                              | Value           |
| ------------------------------------------------------------------- | --------------- |
| [ValCode](../../Attributes/ValCode.md)                              |                 |
| [Domain](../../Attributes/Domain.md)                                |                 |
| [DomainVersion](../../Attributes/DomainVersion.md)                  |                 |
| [Owner](../../Attributes/Owner.md)                                  | KEID            |
| [DataType](../../Attributes/DataType.md)                            |                 |
| [LOI](../../Attributes/LOI.md)                                      |                 |
| [Purposes](../../Attributes/LOI.md)                                 |                 |
| [IFCName](../../Attributes/IFCName.md)                              | IfcBuilding     |
| [IFDGuid](../../Attributes/IFDGuid.md)                              |                 |
| [IFCDef](../../Attributes/IFCDef.md)                                |                 |
| [IFCDataType](../../Attributes/IFCDataType.md)                      |                 |
| [ParentClassification](../../Attributes/IFCParentClassification.md) | IfcOwnerHistory |

## Værdiliste

- [ChangeAction](../Values/IFC/ChangeAction/)

## DataType

[IfcText](../DataTypes/IfcText.md)
