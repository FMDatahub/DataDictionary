# DataTemplate

## Beskrivelse

En skabelon, der beskriver, hvordan data skal struktureres og præsenteres inden for bygge- og anlægsbranchen. En datatemplate inkluderer specifikke datafelter og attributter, der er nødvendige for at beskrive et produkt eller en bygningsdel korrekt og i overensstemmelse med gældende standarder og regulativer. Det gør det muligt for branchens aktører at udveksle og arbejde med data på en ensartet og standardiseret måde.

## Endpoint

## JSON

```json
{
  "Id": "",
  "GlobalId": "", // Globalt unikt id
  "NameDK": "", // Dansk navn
  "DefDK": "", // Defination på dansk
  "ValCode": "", // Kort form af navnet
  "IFCClassName" // IFCClass name
  "IFDGuid": "", // GUID i BSDD
  "IFCName": "", // Navn ifølge IFC
  "IFCDef": "", // Defination ifølge IFC
  "IFCDataType": "", // Datatype ifølge IFC
  "IFCParentClassification": "", // ParentClassification ifølge IFC
  "Domain": "", // Domæne
  "DomainVersion": "", // Domæne version
  "Owner": "", // Udgiver
  "DataType": "", // Data type
  "URI": "", // Link til dette json objekt
  "LOI": "", // I hvilke LOI er dette objekt relevant?
  "Purposes": "", // I hvilke formål er dette objekt relevant?
  "Attributesets": "", // Tilknyttet attributesets
  "Propertysets": [], // Tilknyttet propertysets
  "Documents": [], // Tilknyttet dokumenter
  "PredefinedValues": [{"key:value"}], // Værdier som indsættes ved oprettelse
}
```
