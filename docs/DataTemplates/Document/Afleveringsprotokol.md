# Afleveringsprotokol

## Beskrivelse

En afleveringsprotokol er et dokument, der viser, at et byggeprojekt er færdigt og godkendt. Det bruges til at tjekke, at alt er lavet korrekt, og at kunden får, hvad de har betalt for.

## Attributesæt

- [Base](../../GroupsOfAttributes/Base.md)
- [IfcRoot](../../GroupsOfAttributes/IfcRoot.md)
- [IfcOwnerHistory](../../GroupsOfAttributes/IfcOwnerHistory.md)
- [lIfcDocumentInformation](../../GroupsOfAttributes/IfcDocumentInformation.md)
- [A104](../../GroupsOfAttributes/A104.md)

## Egenskabssæt

Egenskabssæt som tilsvare joined tabeller, hvad skal der til at opbygge dokumentet?

AI: Hvad vil vi undersøge i dokumentet? Sit eget sæt?

## Predefineret værdier

Bruges til at kunne generer mappestrukturen

### Fagområder

Link til værdi ?

### Vidensområder

Link til værdi ?

### Proces type

Link til værdi ?

### Dokument form

Link til værdi ?

### Dokument indhold

Link til værdi ?

### Filtype

- [PDF](../../FileExtensions/PDF.md)

## JSON

```json
{
  "Id": "",
  "GlobalId": "", // Globalt unikt id
  "NameDK": "", // Dansk navn
  "DefDK": "", // Defination på dansk
  "ValCode": "", // Kort form af navnet
  "IFDGUID": "", // GUID i BSDD
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
  "Attributesets": "", // Tilknyttet attributesets
  "Propertysets": [], // Tilknyttet propertysets
  "Documents": [], // Tilknyttet dokumenter
  "PredefinedValues": [{"key:value"}], // Værdier som indsættes ved oprettelse
}
```
