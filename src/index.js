import{CmpApi}from"@iabtcf/cmpapi";
import{TCModel,TCString,GVL,Segment}from"@iabtcf/core";
import*as cmpstub from"@iabtcf/stub";

function setCookieValue(key, vad){

}

function getCookieValue(){

}

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

    function acceptAll(){
        setCookieValue("cst_consent", JSON.stringify({"date": getUnixDate, }))
    }

    function acceptReason(){

    }

    function acceptVendor(){

    }

    function rejectAll(){

    }

    function saveSettings(){

    }

    let reasons = [
        {

        },
        {

        }
    ]

    function insertConsent(){

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

    //Initalisierung der Alle Akzeptieren Buttons
    let acceptAllButtons = document.getElementsByClassName("cst_accept");
    Array.from(acceptAllButtons).forEach(e => {
        e.addEventListener("click", () => {
            console.log("Accepted all")
        })
    })

    //Initalisierung der Ablehnen Buttons
    let rejectAllButtons = document.getElementsByClassName("cst_reject");
    Array.from(rejectAllButtons).forEach(e => {
        e.addEventListener("click", () => {
            console.log("Rejected all")
        })
    })

    //Initalisierung der Speichern Buttons
    let saveSettingsAllButtons = document.getElementsByClassName("cst_save_settings");
    Array.from(saveSettingsAllButtons).forEach(e => {
        e.addEventListener("click", () => {
            console.log("Settings saved")
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
}

document.addEventListener('readystatechange', event => {  
    if (event.target.readyState === "interactive") {
        //let blocker = CookieBlocker();
    }   
    if (event.target.readyState === "complete") {
        consent = ConsentFlow();
        tcfClient = ConsentFlowTFCClient();
    }
});

cmpstub();
