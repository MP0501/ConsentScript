import{CmpApi}from"@iabtcf/cmpapi";
import{TCModel,TCString,GVL,Segment}from"@iabtcf/core";
const cmpstub = require('@iabtcf/stub');

function getUnixDate(){
    return new Date().getTime();
}

let CookieBlocker = () => {

    function isSameSite(url){
        const site = window.location.origin;
        if (url.startsWith('/') || url.startsWith('./')) {
          return true;
        } else if (url.startsWith('http://') || url.startsWith('https://')) {
          return new URL(url).origin === site; 
        } else {
          return false;
        }
    }

    function isAllowed(element){
        if(element != null){
            if(element.hasAttribute("cookie_status")){
                return element.getAttribute("cookie_status") == "true";
            }
        }
        return false;
    }

    //Block External Images
    let images = document.querySelectorAll("img")
    Array.from(images).forEach( e => {
        if (!isSameSite(e.src) && !isAllowed(e)){
            e.removeAttribute("src")
        }
    })

    //Block External Scripts
    let scripts = document.querySelectorAll("script")
    Array.from(scripts).forEach( e => {
        if (!isSameSite(e.src) && !isAllowed(e)){
            e.removeAttribute("src")
        }
    })

    //Block External Links
    let links = document.querySelectorAll("link")
    Array.from(links).forEach( e => {
        if (!isSameSite(e.href) && !isAllowed(e)){
            e.parentNode.removeChild(e)
        }
    })

    //Block Iframes
    let iframes = document.querySelectorAll("iframe")
    Array.from(iframes).forEach( e => {
        if (!isSameSite(e.src) && !isAllowed(e)){
            e.removeAttribute("src")
        }
    })

    //Block Embeds
    let embeds = document.querySelectorAll("embed")
    Array.from(embeds).forEach( e => {
        if (isSameSite(e.src) && !isAllowed(e)){
            e.removeAttribute("src")
        }
    })

    //Block External Links
    let Elinks = document.querySelectorAll("a")
    Array.from(Elinks).forEach( e => {
        if (isSameSite(e.href) && !isAllowed(e)){
            e.removeAttribute("href")
        }
    })
}

let ConsentFlow = () => {
    
    const vendors = [
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

    let vendorsAllowed = []

    let purposes = {}

    let purposesAllowed = []

    let tcfCmpApi;
    let tcModel;
    GVL.baseUrl  = "/"
    const gvl = new GVL();

    gvl.readyPromise.then(() => {
        tcModel = new TCModel(new GVL());
        tcModel.cmpId = 99;
        tcModel.cmpVersion = 2;
        tcModel.consentScreen = 1;
        tcModel.isServiceSpecific = true;
    
        let allVendors = tcModel.gvl.getJson().vendors;
        let allePurposes = tcModel.gvl.getJson().purposes;

        purposes = allePurposes

        //Filter Vendors for Accepted Purposes
      
        let encodedString = TCString.encode(tcModel);

        tcfCmpApi = new CmpApi(tcModel.cmpId, tcModel.cmpVersion, tcModel.isServiceSpecific);
        cmpstub();

        tcfCmpApi.update(encodedString, false);
      
        
        showBanner()
    });

    
    function createTcString(){
        if(tcModel){
            return TCString.encode(tcModel)
        }
    }

    function showBanner(){
        tcfCmpApi.update("", true);

        let body = document.getElementsByTagName("body")

        let consentText = ''+
           ' <div class="cst_container">'+
                '<div class="cst_banner">'+
                    '<div class="cst_main_container">'+
                        '<div class="cst_head">'+
                           '<img src="%logo%" class="cst_image">'+
                            '<h4 class="cst_headline">%headline%</h4>'+
                        '</div>'+
                        '<div class="cst_body">'+
                            '<p class="cst_text">%info_text%</p>' +                               
                            '<div class="cst_button_wrap">'+
                                '<a class="cst_accept">%accept%</a>'+
                                '<a class="cst_reject">%reject%</a>'+
                                '<a id="cst_settings" class="cst_settings">%settings%</a>'+
                            '</div>'+
                            '<div class="cst_button_wrap">'+
                                '<a class="cst_link">%infos%</a>'+
                                '<a class="cst_link">%imprint%</a>'+
                                '<a class="cst_link">%privacy%</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="cst_settings_container">'+
                        '<div class="cst_head">'+
                            '<h4 class="cst_headline">%settings_headline%</h4>'+
                        '</div>'+
                        '<div class="cst_body">'+
                            '<div class="cst_scroll">%purposes%'+
                                //Purposes
                                '<div class="cst_reason_container">'+
                                    '<div class="cst_reason_info">'+
                                        '<h5 class="cst_reason_h">Erforderlich</h5>'+
                                        '<p class="cst_reason_p">Die technische Speicherung oder der Zugang ist unbedingt erforderlich für den rechtmäßigen Zweck, die Nutzung eines bestimmten Dienstes zu ermöglichen, der vom Teilnehmer oder Nutzer ausdrücklich gewünscht wird, oder für den alleinigen Zweck, die Übertragung einer Nachricht über ein elektronisches Kommunikationsnetz durchzuführen.</p>'+
                                    '</div>'+
                                '</div>'+
                                '<a class="cst_link" id="cst_vendor_settings">%vendor_settings%</a>'+
                            '</div>'+
                            '<div class="cst_button_wrap">'+
                                '<a class="cst_accept">%accept%</a>'+
                                '<a class="cst_reject">%reject%</a>'+
                                '<a id="cst_settings" class="cst_settings cst_save_settings">%save_settings%</a>'+
                            '</div>'+
                            '<div class="cst_button_wrap">'+
                                '<a class="cst_link">%infos%</a>'+
                                '<a class="cst_link">%imprint%</a>'+
                                '<a class="cst_link">%privacy%</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    '<div class="cst_vendors_container">'+
                        '<div class="cst_head">'+
                            '<h4 class="cst_headline">%vendor_headline%</h4>'+
                        '</div>'+
                        '<div class="cst_body">'+
                            '<div class="cst_scroll">%vendors%'+
                            //Vendors
                                '<a class="cst_link" id="cst_reason_settings">%purpose_settings%</a>'+
                            '</div>'+
                            '<div class="cst_button_wrap">'+
                                '<a class="cst_accept">%accept%</a>'+
                                '<a class="cst_reject">%reject%</a>'+
                                '<a id="cst_settings" class="cst_settings cst_save_settings">%save_settings%</a>'+
                            '</div>'+
                            '<div class="cst_button_wrap">'+
                                '<a class="cst_link">%infos%</a>'+
                                '<a class="cst_link">%imprint%</a>'+
                                '<a class="cst_link">%privacy%</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="cst_cookie_settings">'+
                    '<img src="https://brawltown.net/img/BT-Logo.webp">'+
                '</div>'+
            '</div>';

        consentText = consentText.replaceAll("%logo%", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Universität_Würzburg_Logo.svg/200px-Universität_Würzburg_Logo.svg.png");
        consentText = consentText.replaceAll("%info_text%", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum sapien eu odio tempor, vel vehicula magna pulvinar. Suspendisse efficitur finibus tellus, pellentesque maximus mi sollicitudin et. Sed sollicitudin purus quis sapien tempus, ac aliquam eros elementum. Cras id nisi quis libero ultrices placerat. Nunc posuere ligula vitae risus dictum, vel placerat diam ornare. Praesent dignissim sagittis condimentum. Pellentesque finibus mauris dui, a ullamcorper risus varius ut. Duis vulputate mi id condimentum ultrices.");
        consentText = consentText.replaceAll("%headline%", "Wir nutzen Cookies");
        consentText = consentText.replaceAll("%accept%", "Alle Akzeptieren");
        consentText = consentText.replaceAll("%reject%", "Ablehnen");
        consentText = consentText.replaceAll("%settings%", "Einstellungen");
        consentText = consentText.replaceAll("%infos%", "Mehr Infos");
        consentText = consentText.replaceAll("%imprint%", "Impressum");
        consentText = consentText.replaceAll("%privacy%", "Datenschutz");
        consentText = consentText.replaceAll("%settings_headline%", "Einstellungen");
        consentText = consentText.replaceAll("%vendor_settings%", "Anbieter Verwalten");
        consentText = consentText.replaceAll("%vendor_headline%", "Anbieter Verwalten");
        consentText = consentText.replaceAll("%purpose_settings%", "Zwecke verwalten");
        consentText = consentText.replaceAll("%setting_icon%", "https://brawltown.net/img/BT-Logo.webp");
        consentText = consentText.replaceAll("%save_settings%", "Speichern");
        
        let purposeText = "";

        for (const [key, value] of Object.entries(purposes)) {
            purposeText = purposeText + '<div class="cst_reason_container">'+
                '<div class="cst_reason_info">'+
                    '<h5 class="cst_reason_h">'+value.name+'</h5>'+
                    '<p class="cst_reason_p">'+value.description+'</p>'+
                '</div>'+
                '<div class="cst_reason_consent_container">'+
                    '<label class="cst_reason_consent_switch">'+
                        '<input type="checkbox" class="cst_reason_consent_checkbox" value_id="'+value.id+' purpose">'+
                        '<span class="cst_reason_consent_slider"></span>'+
                    '</label>'+
                '</div>'+
            '</div>';
        }

        consentText = consentText.replace("%purposes%", purposeText);

        let vendorsText = "";

        for (const value of vendors) {
            vendorsText = vendorsText +
                '<div class="cst_reason_container">'+
                    '<div class="cst_reason_info">'+
                        '<h5 class="cst_reason_h">'+value.name+'</h5>'+
                        '<p class="cst_reason_p"><b>Privacy Policy:</b> '+value.policyUrl+'<p>'+
                        '<p class="cst_reason_p"><b>Ablaufdatum:</b> '+Math.round(value.cookieMaxAgeSeconds / (60*60*24))+'d<p>'+
                        '<p class="cst_reason_p"><b>Zwecke:</b> '+getPurposenames(value.purposes)+'<p>'+
                    '</div>'+
                    '<div class="cst_reason_consent_container">'+
                        '<label class="cst_reason_consent_switch">'+
                            '<input type="checkbox" class="cst_reason_consent_checkbox" value_id="'+value.id+' vendor">'+
                            '<span class="cst_reason_consent_slider"></span>'+
                        '</label>'+
                    '</div>'+
                '</div>';
        }

        consentText = consentText.replace("%vendors%", vendorsText);

        if(body.length >= 1){
            body[0].innerHTML = consentText + body[0].innerHTML;
            addEventListeners();
        }

        tcfCmpApi.update('', true)
    }

    function getPurposenames(inputPurpose){
        let purposeString = "";
        inputPurpose.forEach(p => {
            for (const [key, value] of Object.entries(purposes)) {
                if(p == value.id){
                    purposeString = purposeString + value.name+ "; ";
                }
            }
        })

        return purposeString;
    }

    function acceptAll(){
        for (const [key, value] of Object.entries(purposes)) {
            if(!purposesAllowed.includes(value.id)){
                purposesAllowed.push(value.id)
            }
        }
        for (const value of vendors) {
            if(value.id != null && !vendorsAllowed.includes(value.id)){
                vendorsAllowed.push(value.id)
            }
        }

        let iabvendorids = vendors.filter((item) => item.iab_id !== null && vendorsAllowed.includes(item.iab_id)).map((item) => item.iab_id);

        tcModel.vendorConsents.set(iabvendorids);        
        tcModel.purposeConsents.set(purposesAllowed);

        let newTcString = createTcString()
        tcfCmpApi.update(newTcString, false)
        window.localStorage.setItem('cf_tcf_string', newTcString);

        //setCookieValue("cst_consent", JSON.stringify({"date": getUnixDate, }))

        //console.log(TCString.decode(newTcString))

        __tcfapi('getVendorList', 2, (gvl, success) => {

            console.log(success)

            if(success) {
                
            console.log(gvl)
              // do something with gvl
          
            } else {
          
              // do something else
          
            }
          
          }, 'LATEST');
    }

    function rejectAll(){
        purposesAllowed = []
        vendorsAllowed = []

        tcModel.vendorConsents.empty();        
        tcModel.purposeConsents.empty();

        let newTcString = createTcString()
        tcfCmpApi.update(newTcString, false)
        window.localStorage.setItem('cf_tcf_string', newTcString);
    }

    function togglePreference(value_type, value_number){
        if(value_type.toLowerCase() == "vendor"){
            if(!vendorsAllowed.includes(parseInt(value_number))){
                vendorsAllowed.push(parseInt(value_number))
            }
        }else if(value_type.toLowerCase() == "purpose"){
            if(!purposesAllowed.includes(parseInt(value_number))){
                purposesAllowed.push(parseInt(value_number))
            }
        }
    }


    function saveSettings(){
        let iabvendorids = vendors.filter((item) => item.iab_id !== null && vendorsAllowed.includes(item.iab_id)).map((item) => item.iab_id);

        tcModel.vendorConsents.set(iabvendorids);        
        tcModel.purposeConsents.set(purposesAllowed);

        let newTcString = createTcString()
        tcfCmpApi.update(newTcString, false)
        window.localStorage.setItem('cf_tcf_string', newTcString);

    }
    

    let cookies = [
        {

        },
        {

        }
    ]

    function setCookies(){

    }

    let consentFlowURL = "https://consentflow.de"
    function send_analytics(){

    }

    function addEventListeners(){
        //Initalisierung der Alle Akzeptieren Buttons
        let acceptAllButtons = document.getElementsByClassName("cst_accept");
        Array.from(acceptAllButtons).forEach(e => {
            e.addEventListener("click", () => {
                console.log("Accepted all")
                acceptAll()
            })
        })

        //Initalisierung der Ablehnen Buttons
        let rejectAllButtons = document.getElementsByClassName("cst_reject");
        Array.from(rejectAllButtons).forEach(e => {
            e.addEventListener("click", () => {
                console.log("Rejected all")
                rejectAll()
            })
        })

        //Initalisierung der Speichern Buttons
        let saveSettingsAllButtons = document.getElementsByClassName("cst_save_settings");
        Array.from(saveSettingsAllButtons).forEach(e => {
            e.addEventListener("click", () => {
                console.log("Settings saved")
                saveSettings();
            })
        })

        //Settings Button deaktiviert die Main Page und Zeigt die Zwecke Page
        let settingsButton = document.getElementById("cst_settings");
        settingsButton.addEventListener("click", () => {
            console.log("pressed")
            let mainContainer = document.getElementsByClassName("cst_main_container");
            Array.from(mainContainer).forEach(e => {
                e.style.display = "none"
            })
            let settingsContainer = document.getElementsByClassName("cst_settings_container");
            Array.from(settingsContainer).forEach(e => {
                e.style.display = "block"
            })
        })

        //Anbieter verwalten Button deaktiviert die Zwecke Page und Zeigt die Vendors Page
        let vendorSettingsButton = document.getElementById("cst_vendor_settings");
        vendorSettingsButton.addEventListener("click", () => {
            let settingsContainer = document.getElementsByClassName("cst_settings_container");
            Array.from(settingsContainer).forEach(e => {
                e.style.display = "none"
            })
            let vendorContainer = document.getElementsByClassName("cst_vendors_container");
            Array.from(vendorContainer).forEach(e => {
                e.style.display = "block"
            })
        })

        //Zwecke verwalten Button deaktiviert die Vendors Page und Zeigt die Zwecke Page
        let reasonSettingsButton = document.getElementById("cst_reason_settings");
        reasonSettingsButton.addEventListener("click", () => {
            let vendorContainer = document.getElementsByClassName("cst_vendors_container");
            Array.from(vendorContainer).forEach(e => {
                e.style.display = "none"
            })
            let settingsContainer = document.getElementsByClassName("cst_settings_container");
            Array.from(settingsContainer).forEach(e => {
                e.style.display = "block"
            })
        })

        let consentCheckBoxInput = document.getElementsByClassName("cst_reason_consent_checkbox");
        Array.from(consentCheckBoxInput).forEach(e => {
            e.addEventListener("input", (i) => {
                let value_id = i.target.getAttribute("value_id");
                if(value_id){
                    let value_type = value_id.split(" ")[1];
                    let value_number = value_id.split(" ")[0];

                    togglePreference(value_type, value_number);
                }
            })
        })
    }
}

document.addEventListener('readystatechange', event => {  
    if (event.target.readyState === "interactive") {
        let blocker = CookieBlocker();
    }   
    if (event.target.readyState === "complete") {
        let consent = ConsentFlow();
    }
});