<?php
    class ScriptGenerator{

        private $vendors;
        private $setting;
        private $script;

        public function __construct($vendors, $settings)
        {
            $this->vendors = $vendors;
            $this->setting = $settings;
        }

        public function generateScript(){
            $template = file_get_contents("./out.js");

            $template = $this->insertSettings($template);

            $template = $this->insertDefaultSettings($template);

            $this->script = $template;
        }

        public function getScript(){
            file_put_contents("./test.js", $this->script);
        }

        private function insertDefaultSettings($template){
            $defaultValues = [
                'design_choice' => '1',
                'banner_width' => '500',
                'banner_max_height' => '800',
                'banner_background' => 'rgb(255, 255, 255);',
                'banner_border_radius' => '20',
                'headline_text' => 'Wir nutzen Cookies',
                'headline_size' => '25',
                'headline_color' => 'rgb(0,0,0)',
                'paragraph_text' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum sapien eu odio tempor, vel vehicula magna pulvinar. Suspendisse efficitur finibus tellus, pellentesque maximus mi sollicitudin et. Sed sollicitudin purus quis sapien tempus, ac aliquam eros elementum. Cras id nisi quis libero ultrices placerat. Nunc posuere ligula vitae risus dictum, vel placerat diam ornare. Praesent dignissim sagittis condimentum. Pellentesque finibus mauris dui, a ullamcorper risus varius ut. Duis vulputate mi id condimentum ultrices.',
                'paragraph_size' => '14',
                'paragraph_color' => 'rgb(31, 31, 31)',
                'accept_text' => 'Alle Akzeptieren',
                'accept_color' => 'rgb(255, 255, 255)',
                'accept_border_color' => 'rgb(15, 83, 200)',
                'accept_border_width' => '2',
                'accept_border_radius' => '20',
                'accept_background_color' => 'rgb(15, 83, 200)',
                'reject_text' => 'Ablehnen',
                'reject_color' => 'rgb(15, 83, 200)',
                'reject_border_color' => 'rgb(15, 83, 200)',
                'reject_border_width' => '2',
                'reject_border_radius' => '20',
                'reject_background_color' => 'rgb(15, 83, 200, 0)',
                'settings_text' => 'Einstellungen',
                'settings_color' => 'rgb(15, 83, 200)',
                'settings_border_color' => 'rgb(15, 83, 200)',
                'settings_border_width' => '2',
                'settings_border_radius' => '20',
                'settings_background_color' => 'rgb(15, 83, 200, 0)',
                'link_color' => 'rgb(0,0,0)',
                'link_font_size' => '14',
                'infos' => "#",
                'imprint' => "#",
                'privacy_url' => "#",
                'vendor_setting' => "Anbieter verwalten",
                'vendor_headline' => "Anbieter verwalten",
                'purpose_settings' => "Zwecke verwalten",
                'settings_headline' => "Zwecke verwalten",
                'save_settings' => "Speichern",
                'setting_icon' => "https://brawltown.net/img/BT-Logo.webp",
                'icon' => "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Universität_Würzburg_Logo.svg/200px-Universität_Würzburg_Logo.svg.png",
            ];

            foreach($defaultValues as $key => $value){
                $template = $this->insertValue($template, $key, $value);
            }
            return $template;
        }   

        private function insertSettings($template){
            $template = str_replace('"insert_vendors"', json_encode($this->vendors), $template);
            $template = str_replace('"insert_date"', time(), $template);

            foreach($this->setting as $key => $value){
                $template = $this->insertValue($template, $key, $value);
            }

            return $template;
        }


        function insertValue($template, $key, $value){
            switch(strtolower($key)){
                case "banner_max_hight":
                    $template = str_replace('%banner_max_hight%', $value, $template);
                    break;
                case "banner_width":
                    $template = str_replace('%banner_width%', $value, $template);
                    break;
                case "banner_background":
                    $template = str_replace('%banner_background%', $value, $template);
                    break;
                case "banner_border_radius":
                    $template = str_replace('%banner_border_radius%', $value, $template);
                    break;
                case "headline_text":
                    $template = str_replace('%headline%', $value, $template);
                    break;
                case "headline_size":
                    $template = str_replace('%headline_size%', $value, $template);
                    break;
                case "headline_color":
                    $template = str_replace('%headline_color%', $value, $template);
                    break;
                case "paragraph_text":
                    $template = str_replace('%info_text%', $value, $template);
                    break;
                case "paragraph_size":
                    $template = str_replace('%paragraph_size%', $value, $template);
                    break;
                case "paragraph_color":
                    $template = str_replace('%paragraph_color%', $value, $template);
                    break;
                case "accept_text":
                    $template = str_replace('%accept%', $value, $template);
                    break;
                case "accept_color":
                    $template = str_replace('%accept_color%', $value, $template);
                    break;
                case "accept_border_color":
                    $template = str_replace('%accept_border_color%', $value, $template);
                    break;
                case "accept_border_width":
                    $template = str_replace('%accept_border_width%', $value, $template);
                    break;
                case "accept_border_radius":
                    $template = str_replace('%accept_border_radius%', $value, $template);
                    break;
                case "accept_background_color":
                    $template = str_replace('%accept_background_color%', $value, $template);
                    break;
                case "reject_text":
                    $template = str_replace('%reject%', $value, $template);
                    break;
                case "reject_color":
                    $template = str_replace('%reject_color%', $value, $template);
                    break;
                case "reject_border_color":
                    $template = str_replace('%reject_border_color%', $value, $template);
                    break;
                case "reject_border_width":
                    $template = str_replace('%reject_border_width%', $value, $template);
                    break;
                case "reject_border_radius":
                    $template = str_replace('%reject_border_radius%', $value, $template);
                    break;
                case "reject_background_color":
                    $template = str_replace('%reject_background_color%', $value, $template);
                    break;
                case "settings_text":
                    $template = str_replace('%settings%', $value, $template);
                    break;
                case "settings_color":
                    $template = str_replace('%settings_color%', $value, $template);
                    break;
                case "settings_border_color":
                    $template = str_replace('%settings_border_color%', $value, $template);
                    break;
                case "settings_border_width":
                    $template = str_replace('%settings_border_width%', $value, $template);
                    break;
                case "settings_border_radius":
                    $template = str_replace('%settings_border_radius%', $value, $template);
                    break;
                case "settings_background_color":
                    $template = str_replace('%settings_background_color%', $value, $template);
                    break;
                case "link_color":
                    $template = str_replace('%link_color%', $value, $template);
                    break;
                case "link_font_size":
                    $template = str_replace('%link_font_size%', $value, $template);
                    break;
                case "infos":
                    $template = str_replace('%infos%', $value, $template);
                    break;
                case "imprint":
                    $template = str_replace('%imprint%', $value, $template);
                    break;
                case "vendor_setting":
                    $template = str_replace('%vendor_setting%', $value, $template);
                    break;
                case "vendor_headline":
                    $template = str_replace('%vendor_headline%', $value, $template);
                    break;
                case "purpose_settings":
                    $template = str_replace('%purpose_settings%', $value, $template);
                    break;
                case "settings_headline":
                    $template = str_replace('%settings_headline%', $value, $template);
                    break;
                case "save_settings":
                    $template = str_replace('%save_settings%', $value, $template);
                    break;
                case "setting_icon":
                    $template = str_replace('%setting_icon%', $value, $template);
                    break;
                case "icon":
                    $template = str_replace('%icon%', $value, $template);
                    break;
            }

            return $template;
        }

    }
?>