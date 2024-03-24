import{CmpApi}from"@iabtcf/cmpapi";
import{TCModel,TCString,GVL,Segment}from"@iabtcf/core";
const cmpstub = require('@iabtcf/stub');

cmpstub();

function getUnixDate(){
    return new Date().getTime();
}

function setCookieValue(key, val){
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    val.path = "/"
    val.expires = expires
    val.createDate = getUnixDate();
    document.cookie = key + "=" +JSON.stringify(val);
}

function getCookieValue(kea){
    let name = kea + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return JSON.parse(c.substring(name.length, c.length));
      }
    }
    return null;
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

    let generateDate = "insert_date";
    
    const vendors = "insert_vendors"

    let vendorsAllowed = []

    let purposes = {}

    let purposesAllowed = []

    GVL.baseUrl  = "/"
    let gvl_obj = new GVL();
    let cloed_gvl = gvl_obj.clone();
    let tcModel = new TCModel(gvl_obj);
    tcModel.cmpId = 99;
    tcModel.cmpVersion = 2;
    tcModel.consentScreen = 1;
    tcModel.isServiceSpecific = true;
    tcModel.UseNonStandardStacks = 0;
    const tcfCmpApi = new CmpApi(tcModel.cmpId, tcModel.cmpVersion, tcModel.isServiceSpecific);


    tcModel.gvl.readyPromise.then(() => {    
        let allVendors = tcModel.gvl.getJson().vendors;
        let allePurposes = tcModel.gvl.getJson().purposes;
        purposes = allePurposes
        
        if(!consentStatus()){
             showBanner();
        }else{
            tcfCmpApi.update(getTcString(),false)
            loadPreferences();
            addScripts();
            //insertSettingIcon()
        }
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
                           '<img src="%icon%" class="cst_image">'+
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
                                '<a class="cst_link">Mehr Infos</a>'+
                                '<a class="cst_link" href="%imprint%">Impressum</a>'+
                                '<a class="cst_link" href="%privacy%">Datenschutz</a>'+
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
                                '<a class="cst_link">Mehr Infos</a>'+
                                '<a class="cst_link" href="%imprint%">Impressum</a>'+
                                '<a class="cst_link" href="%privacy%">Datenschutz</a>'+
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
                                '<a class="cst_link">Mehr Infos</a>'+
                                '<a class="cst_link" href="%imprint%">Impressum</a>'+
                                '<a class="cst_link" href="%privacy%">Datenschutz</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="cst_cookie_settings">'+
                    '<img src="https://brawltown.net/img/BT-Logo.webp">'+
                '</div>'+
            '</div>';

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
            insertCssClasses();
            body[0].innerHTML = consentText + body[0].innerHTML;
            addEventListeners();
        }
    }

    function insertCssClasses(){
        let cssText = `
        :root {
            --cst_banner_width: %banner_width%px;
            --cst_banner_max_height: %banner_max_hight%px;
            --cst_banner_background: %banner_background%;
            --cst_banner_overlap_color: rgb(0, 0, 0, 0.2);
            --cst_banner_border_radius: %banner_border_radius%px;
            --cst_banner_border_color: transparent;
            --cst_banner_border_width:  0px;
            --cst_banner_border_sytle:  solid;
            --cst_banner_position_left: 50%;
            --cst_banner_position_right: 50%;
            --cst_headline_size: %headline_size%px;
            --cst_headline_color: %headline_color%;
            --cst_headline2_size: %paragraph_size%px;
            --cst_headline2_color: %paragraph_color%;
            --cst_paragraph_size: %paragraph_size%px;
            --cst_paragraph_color: %paragraph_color%;
            --cst_accept_button_backround_color: %accept_background_color%;
            --cst_accept_button_border_color: %accept_border_color%;
            --cst_accept_button_color: %accept_color%;
            --cst_accept_button_font_size: 18px;
            --cst_accept_button_font_weight: bold;
            --cst_accept_button_width: 25%;
            --cst_accept_border_radius: %accept_border_radius%px;
            --cst_accept_border_width: %accept_border_width%px;
            --cst_reject_button_backround_color: %reject_background_color%;
            --cst_reject_button_border_color: %reject_border_color%;
            --cst_reject_button_color: %reject_color%;
            --cst_reject_button_font_size: 18px;
            --cst_reject_button_font_weight: normal;
            --cst_reject_button_width: 25%;
            --cst_reject_border_radius: %reject_border_radius%px;
            --cst_reject_border_width: %reject_border_width%px;
            --cst_settings_button_backround_color: %settings_background_color%;
            --cst_settings_button_border_color: %settings_border_color%;
            --cst_settings_button_color:  %settings_color%;
            --cst_settings_button_font_size: 18px;
            --cst_setttings_button_font_weight: normal;
            --cst_settings_button_width: 25%;
            --cst_settings_border_radius: %settings_border_radius%px;
            --cst_settings_border_width: %settings_border_width%px;
            --cst_link_color: %link_color%;
            --cst_link_font_size: %link_font_size%px;
            --cst_link_decoration: underline;
        }
        
        .cst_container{
            margin: 0;
            padding: 0;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            position: fixed;
            background-color: var(--cst_banner_overlap_color);
            z-index: 999;
        }
        
        .cst_container .cst_cookie_settings{
            position: fixed;
            width: 50px;
            height: 50px;
            max-width: 10%;
            border-radius: 100px;
            background-color: rgb(0, 0, 0);
            left: 3%;
            bottom: 5%;
        }
        
        .cst_container .cst_cookie_settings img{
            height: 50%;
        }
        
        .cst_container .cst_banner{
            background-color: var(--cst_banner_background);
            border-radius: var(--cst_banner_border_radius);
            max-height: 90%;
            overflow: scroll;
            padding: 35px;
            max-width: 90%;
            width: var(--cst_banner_width);
            position: fixed;
            left: var(--cst_banner_position_left);
            top: var(--cst_banner_position_right);
            transform: translateX(-50%) translateY(-50%);
            display: block;
        }
        
        .cst_container .cst_banner .cst_main_container{
            display: block;
        }
        
        .cst_container .cst_banner .cst_settings_container{
            display: none;
        }
        
        .cst_container .cst_banner .cst_vendors_container{
            display: none;
        }
        
        .cst_container .cst_banner .cst_head{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .cst_container .cst_banner .cst_head .cst_image{
            max-width: 20%;
        }
        
        .cst_container .cst_banner .cst_head .cst_headline{
            font-weight: bold;
            font-size: var(--cst_headline_size);
            margin: 0px;
            margin-top: 10px;
            color: var(--cst_headline_color);
        }
        
        .cst_container .cst_banner .cst_body {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .cst_container .cst_banner .cst_body .cst_text{
            font-weight: normal;
            font-size: var(--cst_paragraph_size);
            margin: 10px;
            color: var(--cst_paragraph_color);
        }
        
        .cst_container .cst_banner .cst_body .cst_button_wrap{
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            width: 100%;
        }
        
        .cst_container .cst_banner .cst_body .cst_button_wrap .cst_reject{
            min-width: var(--cst_reject_button_width);
            padding: 10px;
            text-align: center;
            margin: 5px;
            background-color: var(--cst_reject_button_backround_color);
            color: var(--cst_reject_button_color);
            font-weight: normal;
            font-size: var(--cst_reject_button_font_size);
            border-radius: var(--cst_reject_border_radius);
            border-color: var(--cst_reject_button_border_color);
            border-width: var(--cst_reject_border_width);
            border-style: solid;
            text-decoration: none;
        }
        
        .cst_container .cst_banner .cst_body .cst_button_wrap .cst_settings{
            min-width: var(--cst_setting_button_width);
            padding: 10px;
            text-align: center;
            margin: 5px;
            background-color: var(--cst_settings_button_backround_color);
            color: var(--cst_settings_button_color);
            font-weight: normal;
            font-size: var(--cst_settings_button_font_size);
            border-radius: var(--cst_settings_border_radius);
            border-color: var(--cst_settings_button_border_color);
            border-width: var(--cst_settings_border_width);
            border-style: solid;
            text-decoration: none;
        }
        
        .cst_container .cst_banner .cst_body .cst_button_wrap .cst_accept{
            min-width: var(--cst_accept_button_width);
            padding: 10px;
            text-align: center;
            margin: 5px;
            background-color: var(--cst_accept_button_backround_color);
            color: var(--cst_accept_button_color);
            font-weight: normal;
            font-size: var(--cst_accept_button_font_size);
            border-radius: var(--cst_accept_border_radius);
            border-color: var(--cst_accept_button_border_color);
            border-width: var(--cst_accept_border_width);
            border-style: solid;
            text-decoration: none;
        }
        
        .cst_container .cst_banner .cst_body .cst_button_wrap .cst_link{
            text-decoration: underline;
            margin: 5px;
            font-size: 16px;
        }
        
        .cst_container .cst_banner .cst_body .cst_scroll{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 400px;
            max-height: 60%;
            overflow: scroll;
            padding-bottom: 20px;
        }
        
        .cst_container .cst_banner .cst_body .cst_reason_h{
            font-weight: bold;
            font-size: var(--cst_headline2_size);
            margin: 5px;
            color: var(--cst_headline2_color);
        }
        
        .cst_container .cst_banner .cst_body .cst_reason_p{
            font-weight: normal;
            font-size: var(--cst_paragraph_size);
            margin: 5px;
            color: var(--cst_paragraph_color);
        }
        
        .cst_container .cst_banner .cst_body .cst_reason_table{
            margin: 5px;
            width:90%;
            padding: 10px
        }
        
        .cst_container .cst_banner .cst_body .cst_reason_table td, th, tr, table{
            border-width: 1px;
            border-color: rgb(0, 0, 0, 0.5);
            border-style: solid;
            border-collapse: collapse;
            margin: 0;
        }
        
        .cst_container .cst_banner .cst_body .cst_reason_table th{
            padding: 4px;
            text-align: start;
            font-size: 16px;
            font-weight: bold;
            color: rgb(0, 0, 0);
            background-color: rgb(0, 0, 0, 0.1);
        }
        
        .cst_container .cst_banner .cst_body .cst_reason_table td{
            padding: 4px;
            text-align: start;
            font-size: 14px;
            font-weight: normal;
            color: rgb(0, 0, 0);
        }
        
        .cst_container .cst_banner .cst_body .cst_link{
            text-decoration: var(--cst_link_decoration);
            margin: 5px;
            font-size: var(--cst_link_font_size);
            color: var(--cst_link_color);
        }
        
        .cst_reason_consent_switch {
            margin: 5px;
            position: relative;
            display: inline-block;
            width: 45px;
            height: 26px;
          }
          
         .cst_reason_consent_checkbox {
            opacity: 0;
            width: 0;
            height: 0;
          }
          
          .cst_reason_consent_slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
          }
          
          .cst_reason_consent_slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 4px;
            bottom: 3px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
          }
          
          .cst_reason_consent_checkbox:checked + .cst_reason_consent_slider {
            background-color: #2196F3;
          }
          
          .cst_reason_consent_checkbox:focus + .cst_reason_consent_slider {
            box-shadow: 0 0 1px #2196F3;
          }
          
          .cst_reason_consent_checkbox:checked + .cst_reason_consent_slider:before {
            -webkit-transform: translateX(17px);
            -ms-transform: translateX(17px);
            transform: translateX(17px);
          }        
        `

        document.head.innerHTML = document.head.innerHTML + "<style>"+cssText+"</style>"

    }

    function insertSettingIcon(){

        let body = document.getElementsByTagName("body")

        let consentText = ''+
            '<div class="cst_container">'
            '        <div class="cst_cookie_settings">'
            '        <img src="%settigns_icon%">'
            '    </div>'
            '</div>';

        if(body.length >= 1){
            body[0].innerHTML = consentText + body[0].innerHTML;
            addEventListeners();
        }
    }

    function hideBanner(){
        let cookiebanners = document.getElementsByClassName("cst_banner")
        Array.from(cookiebanners).forEach( e => e.remove());

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

        setCookieValue('cf_tcf_string', newTcString)
        setCookieValue("cst_consent", {allowedPurposes: purposesAllowed, allowedVendors: vendorsAllowed})

        addScripts();
        hideBanner();
    }

    function rejectAll(){
        purposesAllowed = []
        vendorsAllowed = []

        tcModel.vendorConsents.empty();        
        tcModel.purposeConsents.empty();

        let newTcString = createTcString()
        tcfCmpApi.update(newTcString, false)

        setCookieValue('cf_tcf_string', newTcString)
        setCookieValue("cst_consent", {allowedPurposes: purposesAllowed, allowedVendors: vendorsAllowed})
        
        addScripts();
        hideBanner();
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

        setCookieValue('cf_tcf_string', newTcString)
        setCookieValue("cst_consent", {allowedPurposes: purposesAllowed, allowedVendors: vendorsAllowed})
        
        addScripts();
        hideBanner();
    }

    function consentStatus(){
        let consent_string = getCookieValue("cst_consent");

        if(!consent_string || !consent_string.createDate){
            return false;
        }
        if(consent_string.createDate > generateDate){
            return true;
        }
    }

    function loadPreferences(){
        let consent_string = getCookieValue("cst_consent");

        if(consent_string.allowedPurposes){
            purposesAllowed = consent_string.allowedPurposes
        }

        if(consent_string.allowedVendors){
            vendorsAllowed = consent_string.allowedVendors
        }
    }

    function getTcString(){
        let tcfstring = getCookieValue("cf_tcf_string");

        if(tcfstring) return tcfstring;

        showBanner();
        return ""
    }

    function addScripts(){
        vendorsAllowed.forEach( id => {
            let vendor_obj = vendors.find( v => {
                return v.id == id
            })

            if(vendor_obj.script){
                document.head.innerHTML = document.head.innerHTML + vendor_obj.script
            }
        })
    }
    

    let consentFlowURL = "https://consentflow.de"
    function send_analytics(){

    }

    function addEventListeners(){
        //Initalisierung der Alle Akzeptieren Buttons
        let acceptAllButtons = document.getElementsByClassName("cst_accept");
        Array.from(acceptAllButtons).forEach(e => {
            e.addEventListener("click", () => {
                acceptAll()
            })
        })

        //Initalisierung der Ablehnen Buttons
        let rejectAllButtons = document.getElementsByClassName("cst_reject");
        Array.from(rejectAllButtons).forEach(e => {
            e.addEventListener("click", () => {
                rejectAll()
            })
        })

        //Initalisierung der Speichern Buttons
        let saveSettingsAllButtons = document.getElementsByClassName("cst_save_settings");
        Array.from(saveSettingsAllButtons).forEach(e => {
            e.addEventListener("click", () => {
                saveSettings();
            })
        })

        //Settings Button deaktiviert die Main Page und Zeigt die Zwecke Page
        let settingsButton = document.getElementById("cst_settings");
        settingsButton.addEventListener("click", () => {
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