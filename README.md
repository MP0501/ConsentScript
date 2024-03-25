# Consent Script
In diesem Repository wird das Skript implentiert, welches beim Endnutzer im Browser ausgeführt wird.
Es verwaltet die Einwilligungen der Nutzer und implementiert die __tcapi().

## Ordner lib
Hier wird das Skript nach dem Build Prozess gespeichert. (yarn build)

## Ordner src
In diesem Ordner befindet sich das Consent Skript.

### Funktionsweise
Nach dem Laden des Skripts im Website-Head wird zunächst ein neues ConsentFlow() Objekt erstellt. Das ConsentFlow Objekt implementiert zunächst die __tcapi(), welche durch den IAB TCF 2.2 Standard gefordert ist. Im nächsten Schritt wird überprüft, ob bereits eine Einwilligung vorliegt. Hierfür wird der Cookie cst_consent ausgelesen. Liegt eine Einwilligung vor, wird die __tcapi() aktualisiert, sodass Vendors den aktuellen Einwilligungsstatus auslesen können. Sollte ein Script/Cookie nicht den TCF Standard implementieren, wird es anschließend manuell in den Website Head eingefügt. Liegt keine Einwilligung vor, werden zunächst das Consent und die CSS-Styles generiert und auf der Website angezeigt. Im nächsten Schritt werden EventListener implementiert, welche auf eine Interaktion mit dem Consent warten und anschließend die Methoden acceptAll(), rejectAll() oder saveSettings aufrufen. Nach einer erfolgreichen Einwilligung wird ein Statusupdate an die URL "https://consentflow.de/api/consents_api" gesendet. Für den Fall, dass ein Nutzer seine Einwilligung ändern möchte, wird am Ende der Website ein Button eingefügt, mit welchem das Consent erneut angezeigt wird.
### Packages
Für die Implementation werden folgende Packages genutzt:
- @iabtcf/cmpapi
- @iabtcf/core
- @iabtcf/stub

## ScriptGenerator
Diese PHP Klasse erstellt ein nutzerspezifisches Consent Skript. Implentiert wird es im Admin Panel im Ordner app/ScriptGenerator.
Der Klasse wird ein Array mit allen Vendors und Einstellungen übergeben.
Die Einstellungen werden anschließend mit Hilfe der Template-Tags in das Consent Script eingefügt. Wurde eine Einstellung nicht vom Nutzer überschrieben, wird ein Standardwert eingefügt.
Nach der Generierung wird das Skript in einem Object Storage bei bunny.net gespeichert. Damit keine API-Keys veröffentlicht werden müssen, wird die Funktionalität im Admin Panel auskommentiert und hier alle API-Keys durch Platzhalter entfernt.

## __tcapi()
Die __tcapi() ermöglicht es Vendors, die auf der Website implementiert wurden, den Status der Einwilligung abzurufen und somit zu überprüfen, ob eingewilligt wurde, dass sie Daten erheben und verarbeiten dürfen.
Mehr Infos: https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md
