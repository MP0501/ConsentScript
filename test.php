<?php
require("./ScriptGenerator.php");

$vendors = json_decode('
[
    {
        "id": 1,
        "iab_id": 755,
        "name": "Google Advertising Products",
        "purposes": [1,3,4],
        "legIntPurposes": [2,5,6,7,9,10],
        "flexiblePurposes": [2,5,6,7,9,10],
        "specialPurposes": [1],
        "features": [1,2],
        "specialFeatures": [],
        "policyUrl": "https://policies.google.com/privacy",
        "cookieMaxAgeSeconds": 34190000,
        "usesCookies": true,
        "cookieRefresh": false,
        "usesNonCookieAccess": true,
        "deviceStorageDisclosureUrl": "https://www.gstatic.com/iabtcf/deviceStorageDisclosure.json"
},
{
        "id": 2,
        "iab_id": 25,
        "name": "Yahoo EMEA Limited",
        "purposes": [1,3,4,5,6],
        "legIntPurposes": [2,7,8,9,10],
        "flexiblePurposes": [2,7,8,9,10],
        "specialPurposes": [1,2],
        "features": [1,2,3],
        "specialFeatures": [1],
        "policyUrl": "https://legal.yahoo.com/ie/en/yahoo/privacy/index.html",
        "cookieMaxAgeSeconds": 34300800,
        "usesCookies": true,
        "cookieRefresh": true,
        "usesNonCookieAccess": false
},
{
        "id": 3,
        "iab_id": null,
        "name": "Custom Cookie",
        "purposes": [1,5,6],
        "legIntPurposes": [2,7,8,9,10],
        "flexiblePurposes": [2,7,8,9,10],
        "specialPurposes": [1,2],
        "features": [1,2,3],
        "specialFeatures": [1],
        "policyUrl": "",
        "cookieMaxAgeSeconds": 34300800,
        "usesCookies": true,
        "cookieRefresh": true,
        "usesNonCookieAccess": false
}
]
');

$sg = new ScriptGenerator($vendors, []);

$sg->generateScript();

$sg->getScript();