# Consent Script
In diesem Repository wird das Skript implentiert, welches beim Endnutzer im Browser ausgeführt wird.
Es verwaltet die Einwilligungen der Nutzer und implementiert die __tcapi().

## Ordner lib
Hier wird das Skript nach dem Build Prozess gespeichert. (yarn build)

## Ordner src
In diesem Ordner befindet sich das Consent Skript.

### Funktionsweise
Nach dem Laden des Skripts im Website Head wird zunächst ein neues ConsentFlow() Objekt erstellt.
Das ConsentFlow Objekt implementiert zunächst die __tcapi(), welche durch den IAB TCF 2.2 Standard gefordert ist.
Im nächsten Schritt wird überprüft, ob bereits eine Einwilligung vorliergt. Hierfür wird der Cookie cst_consent ausgelesen.
Liegt eine Einwilligung vor wird die __tcapi() aktualisiert, sodass Vendors den aktuellen Einwilligungsstatus auslesen können.
Sollte ein Script/Cookie nicht den TCF Standard implementieren wird es anschließend manuell in Website Head eingefügt.
Liegt keine Einwilligung vor wird zunächst, das Consent und die CSS Styles generiert und auf der Website angezeigt.
Im nächsten Schritt werden eventListener implenetiert, welche auf eine Interaktion mit dem Consent warten und anschließen, die Methoden acceptAll(), rejectAll() oder saveSettings aufrifen.
Nach einer erfolgreichen Einwilligung wird ein Statusupdate an die URL "https://consentflow.de/api/consents_api" gesendet.
Für den Fall, dass ein Nutzer sein Einwilligung ändern möchte wird am Ende der Website ein Button eingefügt, mit welchem das Consent erneut angezeigt wird.

### Packages
Für die Implementation werden folgende Packages genutzt:
- @iabtcf/cmpapi
- @iabtcf/core
- @iabtcf/stub

## ScriptGenerator
Diese PHP Klasse erstellt ein nutzerspezifisches Consent Skript. Implentiert wird es im Admin Panel im Ordner app/ScriptGenerator.
Der Klasse wird ein Array mit allen Vendors und Einstellungen übergeben.
Die Einstellungen werden anschließen mit Hilfe der Template Taggs in das Consent Script eingefügt. Wurde eine Einstellung nicht vom Nutzer überschrieben wird ein Standardwert eingefügt.
Nach der Generierung wird das Skript in einem Object Storage bei bunny.net gespeichert. Damit keine API-Keys veröffentlicht werden müssen, wurd die Funktionaltität im Admin Panel auskommentiert und hier alle API-Keys durch Platzhalter entfernt.