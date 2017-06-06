/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['\'Adobe Devanagari\'']='';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'audioControl',
            type:'rect',
            rect:['895','4','auto','auto','auto','auto']
         },
         {
            id:'menu_bg',
            type:'image',
            rect:['0px','0px','1014px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_bg.jpg",'0px','0px']
         },
         {
            id:'menu_btn_1',
            type:'rect',
            rect:['111px','71','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'menu_btn_2',
            type:'rect',
            rect:['307','71','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'menu_btn_3',
            type:'rect',
            rect:['689','286','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'menu_btn_4',
            type:'rect',
            rect:['866','393','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'btn_LAUNCH',
            type:'rect',
            rect:['359px','562','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCHCopy',
            display:'none',
            type:'rect',
            rect:['759px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCHCopy2',
            type:'rect',
            rect:['559px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCH1',
            type:'rect',
            rect:['163px','562','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_Continue',
            display:'none',
            type:'rect',
            rect:['163px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"mmenu mainSND"
         },
         {
            id:'btn_ContinueCopy',
            display:'none',
            type:'rect',
            rect:['359px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"mmenu mainSND"
         },
         {
            id:'btn_ContinueCopy2',
            display:'none',
            type:'rect',
            rect:['559px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"mmenu mainSND"
         },
         {
            id:'btn_ContinueCopy3',
            display:'none',
            type:'rect',
            rect:['759px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"mmenu mainSND"
         },
         {
            id:'Mission_01',
            display:'none',
            type:'rect',
            rect:['478','253','auto','auto','auto','auto'],
            userClass:"menuIntro"
         },
         {
            id:'Mission_02',
            display:'none',
            type:'rect',
            rect:['0px','0','auto','auto','auto','auto'],
            userClass:"menuIntro"
         },
         {
            id:'Mission_03',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"menuIntro"
         },
         {
            id:'Mission_04',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"menuIntro"
         }],
         symbolInstances: [
         {
            id:'btn_ContinueCopy2',
            symbolName:'btn_Continue'
         },
         {
            id:'btn_ContinueCopy3',
            symbolName:'btn_Continue'
         },
         {
            id:'btn_Continue',
            symbolName:'btn_Continue'
         },
         {
            id:'Mission_02',
            symbolName:'Mission_02'
         },
         {
            id:'menu_btn_3',
            symbolName:'menu_btn_3'
         },
         {
            id:'audioControl',
            symbolName:'audioControl'
         },
         {
            id:'Mission_01',
            symbolName:'Mission_01_1'
         },
         {
            id:'btn_ContinueCopy',
            symbolName:'btn_Continue'
         },
         {
            id:'menu_btn_2',
            symbolName:'menu_btn_2'
         },
         {
            id:'menu_btn_1',
            symbolName:'menu_btn_1'
         },
         {
            id:'Mission_04',
            symbolName:'Mission_04_1'
         },
         {
            id:'btn_LAUNCHCopy',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'Mission_03',
            symbolName:'Mission_03_1'
         },
         {
            id:'btn_LAUNCHCopy2',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'btn_LAUNCH1',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'btn_LAUNCH',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'menu_btn_4',
            symbolName:'menu_btn_4'
         }
         ]
      },
   states: {
      "Base State": {
         "${_btn_Continue}": [
            ["style", "top", '562px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '163px']
         ],
         "${_menu_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btn_LAUNCH1}": [
            ["style", "top", '542px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '163px']
         ],
         "${_Mission_03}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_btn_ContinueCopy}": [
            ["style", "top", '562px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '359px']
         ],
         "${_btn_ContinueCopy3}": [
            ["style", "top", '562px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '759px']
         ],
         "${_Mission_01}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_btn_LAUNCHCopy2}": [
            ["style", "top", '562px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '559px']
         ],
         "${_Mission_02}": [
            ["style", "display", 'none'],
            ["style", "left", '0px']
         ],
         "${_btn_ContinueCopy2}": [
            ["style", "top", '562px'],
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '559px']
         ],
         "${_audioControl}": [
            ["style", "overflow", 'visible']
         ],
         "${_menu_btn_1}": [
            ["style", "top", '671px'],
            ["style", "opacity", '1'],
            ["style", "left", '111px']
         ],
         "${_btn_LAUNCH}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '542px']
         ],
         "${_btn_LAUNCHCopy}": [
            ["style", "top", '562px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '759px']
         ],
         "${_Mission_04}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1014px'],
            ["style", "height", '650px'],
            ["style", "overflow", 'hidden']
         ],
         "${_menu_btn_4}": [
            ["style", "top", '671px'],
            ["style", "opacity", '1'],
            ["style", "left", '708px']
         ],
         "${_menu_btn_3}": [
            ["style", "top", '671px'],
            ["style", "opacity", '1'],
            ["style", "left", '507px']
         ],
         "${_menu_btn_2}": [
            ["style", "top", '671px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: false,
         labels: {
            "Label 1": 0
         },
         timeline: [
            { id: "eid33", tween: [ "style", "${_btn_LAUNCH}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 375, easing: "easeOutBack" },
            { id: "eid100", tween: [ "style", "${_btn_ContinueCopy2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_btn_ContinueCopy2}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid21", tween: [ "style", "${_menu_btn_3}", "top", '71px', { fromValue: '671px'}], position: 500, duration: 500, easing: "easeOutBack" },
            { id: "eid24", tween: [ "style", "${_btn_LAUNCH}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid49", tween: [ "style", "${_btn_LAUNCH}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid30", tween: [ "style", "${_btn_LAUNCH}", "top", '562px', { fromValue: '542px'}], position: 1250, duration: 375, easing: "easeOutBack" },
            { id: "eid111", tween: [ "style", "${_Mission_01}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Mission_01}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid99", tween: [ "style", "${_btn_ContinueCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_btn_ContinueCopy}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid55", tween: [ "style", "${_btn_LAUNCH1}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid56", tween: [ "style", "${_btn_LAUNCH1}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Mission_03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_Mission_03}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid54", tween: [ "style", "${_btn_LAUNCH1}", "top", '562px', { fromValue: '542px'}], position: 1250, duration: 375, easing: "easeOutBack" },
            { id: "eid59", tween: [ "style", "${_btn_LAUNCH1}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid58", tween: [ "style", "${_btn_LAUNCH1}", "opacity", '1', { fromValue: '1'}], position: 1625, duration: 0, easing: "easeOutBack" },
            { id: "eid112", tween: [ "style", "${_Mission_02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "style", "${_Mission_02}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid98", tween: [ "style", "${_btn_Continue}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid97", tween: [ "style", "${_btn_Continue}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid23", tween: [ "style", "${_menu_btn_1}", "top", '71px', { fromValue: '671px'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid60", tween: [ "style", "${_btn_LAUNCHCopy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutBack" },
            { id: "eid61", tween: [ "style", "${_btn_LAUNCHCopy}", "display", 'block', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid85", tween: [ "style", "${_btn_LAUNCHCopy2}", "opacity", '1', { fromValue: '0.000000'}], position: 1667, duration: 83 },
            { id: "eid82", tween: [ "style", "${_btn_LAUNCHCopy}", "opacity", '0', { fromValue: '0'}], position: 1250, duration: 0 },
            { id: "eid83", tween: [ "style", "${_btn_LAUNCHCopy}", "opacity", '1', { fromValue: '1'}], position: 1625, duration: 0 },
            { id: "eid101", tween: [ "style", "${_btn_ContinueCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid94", tween: [ "style", "${_btn_ContinueCopy3}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid20", tween: [ "style", "${_menu_btn_4}", "top", '71px', { fromValue: '671px'}], position: 750, duration: 500, easing: "easeOutBack" },
            { id: "eid114", tween: [ "style", "${_Mission_04}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_Mission_04}", "display", 'none', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid22", tween: [ "style", "${_menu_btn_2}", "top", '71px', { fromValue: '671px'}], position: 250, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"audioControl": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'audioControl_bg',
      type: 'image',
      rect: ['40px','0px','75px','23px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/audioControl_bg.svg','0px','0px']
   },
   {
      rect: ['86px','4px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',10,'rgba(239,96,0,1.00)','700','none','normal'],
      id: 'txt_OFF',
      text: 'OFF',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['52px','4px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',10,'rgba(147,215,0,1.00)','700','none','normal'],
      id: 'txt_ON',
      text: 'ON',
      align: 'right',
      type: 'text'
   },
   {
      id: 'audioControl_switch',
      type: 'image',
      rect: ['42px','2px','36px','20px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/audioControl_switch.svg','0px','0px']
   },
   {
      rect: ['0px','3px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'txt_Audio',
      text: 'Audio',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_audioControl_bg}": [
            ["style", "top", '0px'],
            ["style", "left", '40px']
         ],
         "${_audioControl_switch}": [
            ["style", "left", '42px'],
            ["style", "top", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '115px']
         ],
         "${_txt_Audio}": [
            ["style", "top", '3px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_txt_OFF}": [
            ["style", "top", '4px'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(239,96,0,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '86px'],
            ["style", "font-size", '10px']
         ],
         "${_txt_ON}": [
            ["style", "top", '4px'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(147,215,0,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '52px'],
            ["style", "font-size", '10px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 250,
         autoPlay: false,
         labels: {
            "Audio_ON": 0,
            "Audio_OFF": 250
         },
         timeline: [
            { id: "eid6", tween: [ "style", "${_audioControl_switch}", "left", '75px', { fromValue: '42px'}], position: 0, duration: 250 }         ]
      }
   }
},
"menu_btn_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'menu_button1_up',
      type: 'image',
      rect: ['1px','1px','212px','528px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button1_up.png','0px','0px']
   },
   {
      rect: ['25px','419px','163px','54px','auto','auto'],
      font: ['Adobe Devanagari',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'क्रिस्टल केस<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4',
      text: '1',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','25px','22px','32px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy',
      text: 'ला ',
      align: 'center',
      type: 'text'
   },
   {
      font: ['\'Adobe Devanagari\'',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      transform: [[0,0],['90']],
      align: 'center',
      id: 'Text5',
      text: 'मिशन',
      type: 'text',
      rect: ['145px','54px','62px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button1_up}": [
            ["style", "left", '1px'],
            ["style", "top", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '419px'],
            ["style", "text-align", 'center'],
            ["style", "width", '163px'],
            ["style", "height", '54px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '25px'],
            ["style", "font-size", '35px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '25px'],
            ["style", "font-size", '20px'],
            ["style", "height", '32px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '166px'],
            ["style", "width", '22px']
         ],
         "${_Text5}": [
            ["style", "top", '54px'],
            ["style", "width", '62px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "left", '145px'],
            ["style", "font-size", '25px']
         ],
         "${_Text4}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"menu_btn_2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'menu_button2_up',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button2_up.png','0px','0px']
   },
   {
      rect: ['48px','419px','114px','auto','auto','auto'],
      font: ['Adobe Devanagari',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'पानी चोर',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy',
      text: '2',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','25px','22px','32px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'रा',
      align: 'center',
      type: 'text'
   },
   {
      font: ['\'Adobe Devanagari\'',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      transform: [[0,0],['90']],
      align: 'center',
      id: 'Text5',
      text: 'मिशन',
      type: 'text',
      rect: ['145px','54px','62px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button2_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '419px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '35px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '48px'],
            ["style", "width", '114px']
         ],
         "${_Text4}": [
            ["style", "top", '25px'],
            ["style", "width", '22px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '32px'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "left", '166px'],
            ["style", "font-size", '20px']
         ],
         "${_Text5}": [
            ["style", "top", '54px'],
            ["style", "font-size", '25px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "left", '145px'],
            ["style", "width", '62px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"menu_btn_3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'menu_button_bg',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button3_up.png','0px','0px']
   },
   {
      rect: ['49px','419px','114px','auto','auto','auto'],
      font: ['Adobe Devanagari',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'जासूस',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy3',
      text: '3',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','25px','22px','32px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy2',
      text: 'रा',
      align: 'center',
      type: 'text'
   },
   {
      font: ['\'Adobe Devanagari\'',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      transform: [[0,0],['90']],
      align: 'center',
      id: 'Text5Copy',
      text: 'मिशन',
      type: 'text',
      rect: ['145px','54px','62px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '419px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '35px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '49px'],
            ["style", "width", '114px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '25px'],
            ["style", "font-size", '20px'],
            ["style", "height", '32px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "left", '166px'],
            ["style", "width", '22px']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '54px'],
            ["style", "width", '62px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "left", '145px'],
            ["style", "font-size", '25px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"menu_btn_4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'menu_button_bg',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button_bg.png','0px','0px']
   },
   {
      rect: ['19px','419px','173px','50px','auto','auto'],
      font: ['Adobe Devanagari',35,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'आख़री लड़ाई',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy5',
      text: '4',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','25px','22px','32px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy4',
      text: 'था ',
      align: 'center',
      type: 'text'
   },
   {
      font: ['\'Adobe Devanagari\'',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      transform: [[0,0],['90']],
      align: 'center',
      id: 'Text5Copy2',
      text: 'मिशन',
      type: 'text',
      rect: ['145px','54px','62px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text4Copy5}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '419px'],
            ["style", "text-align", 'center'],
            ["style", "width", '173px'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '19px'],
            ["style", "font-size", '35px']
         ],
         "${_Text5Copy2}": [
            ["style", "top", '54px'],
            ["style", "font-size", '25px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "left", '145px'],
            ["style", "width", '62px']
         ],
         "${_Text4Copy4}": [
            ["style", "top", '25px'],
            ["style", "width", '22px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '32px'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "left", '166px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn_LAUNCH": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-32px','-473px','172px','490px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      id: 'btn_LAUNCH_up',
      type: 'image',
      rect: ['0px','0px','109px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_LAUNCH_up.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['8px','0px','89px','33px','auto','auto'],
      id: 'Text6',
      text: 'शुरु करें',
      align: 'center',
      font: ['Adobe Devanagari',25,'rgba(0,0,0,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '0px'],
            ["style", "width", '89px'],
            ["style", "height", '33px'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '8px'],
            ["style", "font-size", '25px']
         ],
         "${_Rectangle}": [
            ["style", "height", '490px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)']
         ],
         "${_btn_LAUNCH_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '109px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn_back": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','-8px','66px','66px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'btn_back',
      type: 'image',
      rect: ['0px','0px','49px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_back_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,0,0,1)'],
            ["style", "height", '66px'],
            ["style", "width", '66px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '49px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"btn_next": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','-8px','66px','66px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'btn_next',
      type: 'image',
      rect: ['0px','0px','49px','49px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_next_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '49px']
         ],
         "${_Ellipse}": [
            ["style", "height", '66px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '66px']
         ],
         "${_btn_next}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"BG11": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','277px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['155px','284px','288px','136px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'जी2 से सवाल पूछें और जवाबों की मदद से बेकसूरों को छोड़ें और अपराधी को पहचानें।<br><br>केस पर जाने के लिए बटन पर क्लिक करें।<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['149px','227px','304px','50px','auto','auto'],
      font: ['Adobe Devanagari',35,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: 'मिशन का विवरण',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '284px'],
            ["style", "width", '288px'],
            ["style", "text-align", 'left'],
            ["style", "height", '136px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '155px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "font-size", '35px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '149px'],
            ["style", "width", '304px']
         ],
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"BG10": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG10',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M2_BG10.jpg','0px','0px']
   },
   {
      rect: ['56px','34px','352px','131px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['262px','47px','35px','120px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['-206'],[],['0.745','1.454']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['73px','47px','324px','118px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text5',
      text: 'मैंने एरिया के सभी ज्युडिक्स को हिरासत में ले लिया है। ड्यूटी पर तैनात रोबोट जी2 चोरी का गवाह है। सवालों का जवाब देने के लिए मैंने जी2 को बुलाया है। लेकिन वह केवल “हाँ”, “ना” और “पता नहीं” में ही जवाब दे सकता है। तुम्हें मालूम है न?',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['169px','116px','35px','120px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['-160'],[],['0.745','1.092']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['117px','196px','101px','38px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      transform: [],
      align: 'center',
      id: 'Text5Copy',
      text: 'जी हाँ, सर।',
      type: 'text',
      rect: ['117px','203px','101px','28px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "top", '196px'],
            ["style", "height", '38px'],
            ["style", "left", '117px'],
            ["style", "width", '101px']
         ],
         "${_RoundRect}": [
            ["style", "height", '131px'],
            ["style", "top", '34px'],
            ["style", "left", '56px'],
            ["style", "width", '352px']
         ],
         "${_BG10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_pointer}": [
            ["style", "top", '47px'],
            ["transform", "scaleY", '1.45422'],
            ["transform", "rotateZ", '-206deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "height", '120px'],
            ["style", "left", '262px'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text5Copy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '117px'],
            ["style", "width", '101px'],
            ["style", "top", '203px'],
            ["style", "font-size", '20px'],
            ["transform", "scaleY", '1'],
            ["style", "font-style", 'normal'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '1']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '73px'],
            ["style", "font-size", '20px'],
            ["style", "top", '47px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '118px'],
            ["style", "width", '324px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '116px'],
            ["transform", "scaleY", '1.09167'],
            ["transform", "rotateZ", '-160deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '169px'],
            ["style", "height", '120px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Mission_02": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'BG10',
      type: 'rect',
      rect: ['-2px','0px','auto','auto','auto','auto']
   },
   {
      id: 'BG12',
      type: 'rect',
      rect: ['-2px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['0','0','auto','auto','auto','auto'],
      id: 'Stage_transition_2',
      userClass: ' trnasStage',
      display: 'none',
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      userClass: 'mainSND btnClick',
      id: 'btn_nextCopy',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['8px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick',
      id: 'btn_back',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'BG12',
      symbolName: 'BG11'
   },
   {
      id: 'BG09',
      symbolName: 'BG09'
   },
   {
      id: 'BG10',
      symbolName: 'BG10'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'Stage_transition_2',
      symbolName: 'Stage_transition_2'
   }   ]
   },
   states: {
      "Base State": {
         "${_BG10}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_Stage_transition_2}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_BG12}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "display", 'none'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_nextCopy}": [
            ["style", "top", '304px'],
            ["style", "display", 'none'],
            ["style", "left", '461px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px'],
            ["style", "top", '593px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid118", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid40", tween: [ "style", "${_BG12}", "left", '-2px', { fromValue: '1012px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid41", tween: [ "style", "${_BG10}", "left", '-2px', { fromValue: '1012px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid116", tween: [ "style", "${_Stage_transition_2}", "display", 'block', { fromValue: 'none'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid117", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 },
            { id: "eid119", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transition_2}', [] ], ""], position: 0 },
            { id: "eid120", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transition_2}', [] ], ""], position: 792 }         ]
      }
   }
},
"BG09": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M2_BG09.jpg','0px','0px']
   },
   {
      rect: ['29px','27px','207px','27px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['515px','24px','276px','30px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['36px','31px','191px','23px','auto','auto'],
      id: 'Text',
      text: 'जियो अब इंसपेक्टर बन गया है।',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text'
   },
   {
      rect: ['525px','29px','276px','25px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2',
      text: 'इस दौरान कुछ चोरियां लगातार हुई है।',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['523px','581px','301px','46px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','normal','none','italic'],
      id: 'Text3',
      text: 'ज्युडिक्स की एक गैंग दुकानों, ऑफिसेस और घरों से पानी के कैन चुरा रही है।',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['240px','51px','191px','115px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['193px','171px','22px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['219px','144px','33px','30px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['240px','65px','191px','115px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'जियो अच्छा है, <br>लेकिन हमारे पास अब नए <br>केसेस हैं। क्या वह अच्छा काम <br>जारी रख पाएगा?',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['173px','188px','11px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "left", '173px'],
            ["style", "top", '188px']
         ],
         "${_Text3}": [
            ["style", "top", '581px'],
            ["style", "font-size", '20px'],
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '523px'],
            ["style", "width", '301px']
         ],
         "${_Text2}": [
            ["style", "top", '29px'],
            ["style", "font-size", '20px'],
            ["style", "line-height", '20px'],
            ["style", "height", '25px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '525px'],
            ["style", "width", '276px']
         ],
         "${_Ellipse}": [
            ["style", "top", '51px'],
            ["style", "left", '240px'],
            ["style", "width", '191px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '30px'],
            ["style", "top", '24px'],
            ["style", "left", '515px'],
            ["style", "width", '276px']
         ],
         "${_Text}": [
            ["style", "top", '31px'],
            ["style", "font-size", '20px'],
            ["style", "line-height", '20px'],
            ["style", "height", '23px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '36px'],
            ["style", "width", '191px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '20px'],
            ["style", "top", '171px'],
            ["style", "left", '193px'],
            ["style", "width", '22px']
         ],
         "${_Rectangle}": [
            ["style", "height", '27px'],
            ["style", "width", '207px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '144px'],
            ["style", "height", '30px'],
            ["style", "left", '219px'],
            ["style", "width", '33px']
         ],
         "${_Text4}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '240px'],
            ["style", "width", '191px'],
            ["style", "top", '65px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px'],
            ["style", "height", '115px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Mission_01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'M1_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M1_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M1_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick',
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'mainSND btnClick',
      type: 'rect',
      display: 'none',
      id: 'btn_nextCopy',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick',
      type: 'rect',
      display: 'none',
      id: 'btn_back',
      cursor: ['pointer'],
      rect: ['8px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'M1_BG02',
      symbolName: 'M1_BG02'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M1_BG01',
      symbolName: 'M1_BG01'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M1_BG03',
      symbolName: 'M1_BG03'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px'],
            ["style", "top", '593px']
         ],
         "${_M1_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M1_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M1_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '461px'],
            ["style", "top", '304px']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid78", tween: [ "style", "${_M1_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid79", tween: [ "style", "${_M1_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 }         ]
      }
   }
},
"M1_BG01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M1_BG01.jpg','0px','0px']
   },
   {
      rect: ['29px','27px','282px','55px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['26px','335px','285px','46px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text',
      text: 'Geo starts assisting Inspector Kata. But there is trouble brewing…',
      type: 'text',
      rect: ['44px','36px','261px','46px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'The Judics have brought a few of the wonderful crystal trees from Planus.',
      align: 'left',
      rect: ['34px','341px','277px','33px','auto','auto']
   },
   {
      rect: ['411px','335px','285px','30px','auto','auto'],
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['713px','335px','191px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [[0,0],['160'],[],['0.571','0.529']],
      id: 'pointer',
      type: 'image',
      rect: ['730px','351px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy',
      text: 'Soon, everybody wants these crystals.',
      align: 'left',
      rect: ['419px','341px','277px','17px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2Copy3',
      text: 'The crystals of the tree help purify water. ',
      align: 'center',
      rect: ['724px','347px','170px','32px','auto','auto']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['779px','441px','249','147','auto','auto'],
      c: [
      {
         rect: ['72px','17px','144px','115px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['82px','2px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['66px','-9px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
         type: 'text',
         id: 'Text4',
         text: 'They also have many properties, but I’m not going to tell you about those.',
         align: 'center',
         rect: ['88px','34px','113px','87px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '46px'],
            ["style", "top", '335px'],
            ["style", "left", '26px'],
            ["style", "width", '285px']
         ],
         "${_Text2Copy}": [
            ["style", "height", '17px'],
            ["style", "top", '341px'],
            ["style", "left", '419px'],
            ["style", "width", '277px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '347px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '724px'],
            ["style", "width", '170px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '23px'],
            ["style", "top", '2px'],
            ["style", "left", '82px'],
            ["style", "width", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["style", "height", '55px'],
            ["style", "width", '282px']
         ],
         "${_Text4}": [
            ["style", "top", '34px'],
            ["style", "width", '113px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '87px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '88px'],
            ["style", "font-size", '13px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '55px'],
            ["style", "top", '335px'],
            ["style", "left", '713px'],
            ["style", "width", '191px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '-9px'],
            ["style", "height", '14px'],
            ["style", "left", '66px'],
            ["style", "width", '15px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '335px'],
            ["style", "height", '30px'],
            ["style", "left", '411px'],
            ["style", "width", '285px']
         ],
         "${_Group}": [
            ["style", "top", '441px'],
            ["style", "left", '779px']
         ],
         "${_Ellipse}": [
            ["style", "top", '17px'],
            ["style", "left", '72px'],
            ["style", "width", '144px']
         ],
         "${_Text}": [
            ["style", "top", '36px'],
            ["style", "width", '261px'],
            ["style", "height", '46px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '44px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "font-style", ''],
            ["style", "height", '17px'],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_pointer}": [
            ["style", "top", '351px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '160deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "left", '730px']
         ],
         "${_Text2}": [
            ["style", "top", '341px'],
            ["style", "height", '33px'],
            ["style", "left", '34px'],
            ["style", "width", '277px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M1_BG02": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M1_BG02.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['29px','27px','191px','32px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      id: 'Text',
      text: 'At the police station…',
      rect: ['37px','34px','180px','19px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['411px','227px','246px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['287px','71px','35px','104px','auto','auto'],
      transform: [[0,0],['277'],['0','-19'],['0.571','1.227']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['300px','274px','35px','104px','auto','auto'],
      transform: [[0,0],['237'],['0','-58'],['0.571','0.865']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy3',
      rect: ['393px','381px','35px','104px','auto','auto'],
      transform: [[0,0],['302'],['18','-31'],['0.429','0.97']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['557px','322px','35px','104px','auto','auto'],
      transform: [[0,0],['79'],['0','12'],['0.571','0.772']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['423px','238px','222px','32px','auto','auto'],
      id: 'Text2Copy3',
      text: 'Some Judics has just stolen crystals from a home garden. ',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['271px','293px','283px','90px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['281px','303px','260px','69px','auto','auto'],
      id: 'Text2Copy4',
      text: 'All the Judics in the neighbourhood are here in this lockup. If you can find the real thief, we can let the others go. If not…',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['404px','467px','96px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['414px','477px','78px','19px','auto','auto'],
      id: 'Text2Copy6',
      text: 'Oh, yes.',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['336px','398px','246px','55px','auto','auto'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text2Copy5',
      text: 'Are all the witness statements in the system, sir?',
      rect: ['346px','408px','222px','35px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['742px','439px','249','147','auto','auto'],
      c: [
      {
         rect: ['66px','-9px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['82px','2px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['89px','22px','115px','69px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['106px','37px','78px','35px','auto','auto'],
         id: 'Text4',
         text: 'I must crack this. ',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'GroupCopy',
      type: 'group',
      rect: ['279px','541px','249','147','auto','auto'],
      c: [
      {
         rect: ['41px','15px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy3',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['57px','26px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['87px','21px','180px','69px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'EllipseCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         rect: ['108px','38px','139px','35px','auto','auto'],
         id: 'Text4Copy',
         text: 'Duh! As if that’ll help find the culprit!',
         align: 'center',
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "height", '23px'],
            ["style", "top", '26px'],
            ["style", "left", '57px'],
            ["style", "width", '25px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '238px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '423px'],
            ["style", "width", '222px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '15px'],
            ["style", "height", '14px'],
            ["style", "left", '41px'],
            ["style", "width", '15px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "height", '17px'],
            ["style", "font-style", ''],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Text4}": [
            ["style", "top", '37px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '35px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '106px'],
            ["style", "width", '78px']
         ],
         "${_GroupCopy}": [
            ["style", "top", '541px'],
            ["style", "left", '279px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '303px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "left", '281px'],
            ["style", "width", '260px']
         ],
         "${_Rectangle}": [
            ["style", "height", '32px'],
            ["style", "width", '191px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "height", '55px'],
            ["style", "top", '398px'],
            ["style", "left", '336px'],
            ["style", "width", '246px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '38px'],
            ["style", "width", '139px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '35px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '108px'],
            ["style", "font-size", '13px']
         ],
         "${_Text}": [
            ["style", "top", '34px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '19px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '37px'],
            ["style", "width", '180px']
         ],
         "${_Ellipse}": [
            ["style", "height", '69px'],
            ["style", "top", '22px'],
            ["style", "left", '89px'],
            ["style", "width", '115px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '90px'],
            ["style", "top", '293px'],
            ["style", "left", '271px'],
            ["style", "width", '283px']
         ],
         "${_RoundRect2Copy3}": [
            ["style", "top", '467px'],
            ["style", "height", '35px'],
            ["style", "left", '404px'],
            ["style", "width", '96px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '14px'],
            ["style", "top", '-9px'],
            ["style", "left", '66px'],
            ["style", "width", '15px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '227px'],
            ["style", "height", '55px'],
            ["style", "left", '411px'],
            ["style", "width", '246px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '477px'],
            ["style", "text-align", 'center'],
            ["style", "height", '19px'],
            ["style", "left", '414px'],
            ["style", "width", '78px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Group}": [
            ["style", "top", '439px'],
            ["style", "left", '742px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '408px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '35px'],
            ["style", "left", '346px'],
            ["style", "width", '222px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '322px'],
            ["transform", "scaleY", '0.77173'],
            ["transform", "rotateZ", '79deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '557px'],
            ["transform", "skewY", '12.42deg']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '381px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.97017'],
            ["transform", "skewX", '18.12deg'],
            ["transform", "scaleX", '0.42857'],
            ["transform", "skewY", '-31.37deg'],
            ["style", "left", '393px'],
            ["transform", "rotateZ", '302deg']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '21px'],
            ["style", "height", '69px'],
            ["style", "left", '87px'],
            ["style", "width", '180px']
         ],
         "${_pointer}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '1.22718'],
            ["transform", "rotateZ", '277deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '287px'],
            ["transform", "skewY", '-18.96deg']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '2px'],
            ["style", "height", '23px'],
            ["style", "left", '82px'],
            ["style", "width", '25px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '274px'],
            ["transform", "scaleY", '0.86538'],
            ["transform", "rotateZ", '237deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '-57.78deg'],
            ["style", "left", '300px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M1_BG03": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','265px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['155px','274px','288px','145px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'सिस्टम में दिए गए क्लु की मदद से अपराधी को पकड़ें। ज़रूरत हो, तो नया क्लु पूछें।<br><br>केस पर जाने के लिए बटन पर क्लिक करें।<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['152px','223px','299px','43px','auto','auto'],
      font: ['Adobe Devanagari',30,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: 'मिशन का विवरण<br>',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px'],
            ["style", "top", '265px']
         ],
         "${_Text6}": [
            ["style", "line-height", '25px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "width", '288px'],
            ["style", "top", '274px'],
            ["style", "text-align", 'left'],
            ["style", "height", '145px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '223px'],
            ["style", "width", '299px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '43px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '152px'],
            ["style", "font-size", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Mission_03": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'M3_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick',
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick mainSND',
      type: 'rect',
      id: 'btn_nextCopy',
      display: 'none',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick',
      type: 'rect',
      id: 'btn_back',
      display: 'none',
      cursor: ['pointer'],
      rect: ['8px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'M3_BG02',
      symbolName: 'M3_BG02'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M3_BG03',
      symbolName: 'M3_BG03'
   },
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M3_BG01',
      symbolName: 'M3_BG01'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M3_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_M3_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M3_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'none'],
            ["style", "top", '304px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '461px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 },
            { id: "eid88", tween: [ "style", "${_M3_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid89", tween: [ "style", "${_M3_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" }         ]
      }
   }
},
"M3_BG01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M3_BG01.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['24px','27px','318px','55px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['39px','36px','298px','33px','auto','auto'],
      id: 'Text',
      text: 'Geo is Investigating Officer now. He has his own team of humans and Judics.',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text'
   },
   {
      rect: ['476px','36px','267px','65px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['668px','-9px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['485px','44px','249px','50px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy3',
      text: 'Geo, we traced the stolen crystals and stolen water to the tycoon, Mr. G’s factories.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['55px','385px','267px','50px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['259px','322px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['64px','393px','249px','33px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2',
      text: 'What do you think he makes in those factories, Geo? ',
      align: 'center',
      type: 'text'
   },
   {
      id: 'Group',
      type: 'group',
      rect: ['651px','426px','249','147','auto','auto'],
      c: [
      {
         rect: ['72px','17px','221px','130px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['77px','3px','25px','23px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['55px','-6px','15px','14px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1)']
      },
      {
         rect: ['106px','39px','154px','96px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text4',
         text: 'Humans do not know all the uses of the crystals. Maybe Mr.G is using the Judics to find out what these uses are.',
         align: 'center',
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy}": [
            ["style", "top", '322px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '62.35deg'],
            ["style", "left", '259px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2}": [
            ["style", "top", '393px'],
            ["style", "text-align", 'center'],
            ["style", "height", '33px'],
            ["style", "left", '64px'],
            ["style", "width", '249px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '50px'],
            ["style", "top", '385px'],
            ["style", "left", '55px'],
            ["style", "width", '267px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '36px'],
            ["style", "height", '65px'],
            ["style", "left", '476px'],
            ["style", "width", '267px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '14px'],
            ["style", "top", '-6px'],
            ["style", "left", '55px'],
            ["style", "width", '15px']
         ],
         "${_pointer}": [
            ["style", "top", '-9px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '668px'],
            ["transform", "skewY", '62.35deg']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '44px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "left", '485px'],
            ["style", "width", '249px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Group}": [
            ["style", "top", '426px'],
            ["style", "left", '651px']
         ],
         "${_Text}": [
            ["style", "top", '36px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '33px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '39px'],
            ["style", "width", '298px']
         ],
         "${_Ellipse}": [
            ["style", "height", '130px'],
            ["style", "top", '17px'],
            ["style", "left", '72px'],
            ["style", "width", '221px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "height", '17px'],
            ["style", "font-style", ''],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Rectangle}": [
            ["style", "height", '55px'],
            ["style", "left", '24px'],
            ["style", "width", '318px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '3px'],
            ["style", "height", '23px'],
            ["style", "left", '77px'],
            ["style", "width", '25px']
         ],
         "${_Text4}": [
            ["style", "top", '39px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '96px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '106px'],
            ["style", "width", '154px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M3_BG02": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M3_BG02.jpg','0px','0px']
   },
   {
      rect: ['101px','24px','399px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['198px','-35px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['138'],['0','41'],['0.571','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['182px','159px','35px','104px','auto','auto'],
      id: 'pointerCopy4',
      transform: [[0,0],['314'],['0','41'],['0.571','0.529']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['288px','313px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['230'],['0','-52'],['0.571','0.529']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['748px','290px','35px','104px','auto','auto'],
      id: 'pointerCopy2',
      transform: [[0,0],['145'],['0','12'],['0.571','0.772']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['116px','35px','371px','32px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy3',
      text: 'And he employs only Judics. That too, ones with certain special properties, I hear.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['155px','253px','213px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['168px','264px','187px','32px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy',
      text: 'Let’s find out what he is up to. I have a plan…',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['733px','466px','35px','104px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[0,0],['307'],['0','41'],['0.571','0.94']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['625px','563px','213px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['638px','574px','187px','32px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy2',
      text: 'Great idea. Let’s start with the nearest factory. ',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['267px','337px','283px','90px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['284px','347px','249px','69px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy4',
      text: 'I will find Judics from my team who can be our secret agents in Mr. G’s factories. They will give us all the information we need.',
      align: 'center',
      type: 'text'
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['674px','337px','316px','69px','auto','auto'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['682px','344px','295px','55px','auto','auto'],
      align: 'center',
      id: 'Text2Copy5',
      text: 'We just need to identify team members with properties that will allow them entry into these factories. ',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      transform: []
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "top", '264px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '168px'],
            ["style", "width", '187px']
         ],
         "${_RoundRect2Copy4}": [
            ["style", "top", '253px'],
            ["style", "height", '55px'],
            ["style", "left", '155px'],
            ["style", "width", '213px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '466px'],
            ["transform", "scaleY", '0.93955'],
            ["transform", "rotateZ", '307deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '40.95deg'],
            ["style", "left", '733px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2Copy2}": [
            ["style", "top", '574px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "font-style", ''],
            ["style", "left", '638px'],
            ["style", "width", '187px']
         ],
         "${_RoundRect2Copy5}": [
            ["style", "height", '55px'],
            ["style", "top", '563px'],
            ["style", "left", '625px'],
            ["style", "width", '213px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "top", '337px'],
            ["style", "height", '69px'],
            ["style", "left", '674px'],
            ["style", "width", '316px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '159px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '314deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '182px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '337px'],
            ["style", "height", '90px'],
            ["style", "left", '267px'],
            ["style", "width", '283px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '55px'],
            ["style", "top", '24px'],
            ["style", "left", '101px'],
            ["style", "width", '399px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '344px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '55px'],
            ["style", "left", '682px'],
            ["style", "width", '295px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '347px'],
            ["style", "text-align", 'center'],
            ["style", "height", '69px'],
            ["style", "left", '284px'],
            ["style", "width", '249px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '35px'],
            ["style", "text-align", 'center'],
            ["style", "height", '32px'],
            ["style", "left", '116px'],
            ["style", "width", '371px']
         ],
         "${_pointer}": [
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1.22718'],
            ["transform", "rotateZ", '138deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '40.95deg'],
            ["style", "left", '198px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy2}": [
            ["style", "top", '290px'],
            ["transform", "scaleY", '0.77173'],
            ["transform", "rotateZ", '145deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '12.42deg'],
            ["style", "left", '748px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy}": [
            ["style", "top", '313px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '230deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '288px'],
            ["transform", "skewY", '-52.01deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M3_BG03": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','277px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['155px','284px','288px','127px','auto','auto'],
      font: ['Adobe Devanagari',18,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'वह गुण पता करें जिससे आपके जासूस फैक्टरी में काम पा सकें. फिर उस गुण वाले जासूस को फैक्टरी में भेजें.<br><br>केस पर जाने के लिए बटन पर क्लिक करें.<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['155px','227px','288px','39px','auto','auto'],
      font: ['Adobe Devanagari',35,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: 'मिशन का विवरण',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '284px'],
            ["style", "width", '288px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '127px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '155px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "font-size", '35px'],
            ["style", "text-align", 'center'],
            ["style", "height", '39px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
         ],
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Mission_04": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'M4_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'btn_next',
      rect: ['953px','593px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'btnClick'
   },
   {
      type: 'rect',
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_nextCopy',
      display: 'none',
      cursor: ['pointer'],
      userClass: 'btnClick mainSND'
   },
   {
      type: 'rect',
      rect: ['8px','593px','auto','auto','auto','auto'],
      id: 'btn_back',
      display: 'none',
      cursor: ['pointer'],
      userClass: 'btnClick'
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'M4_BG01',
      symbolName: 'M4_BG01'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M4_BG03',
      symbolName: 'M4_BG03'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M4_BG02',
      symbolName: 'M4_BG02'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_M4_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_btn_nextCopy}": [
            ["style", "top", '304px'],
            ["style", "left", '461px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_M4_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M4_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: false,
         timeline: [
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid90", tween: [ "style", "${_M4_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid91", tween: [ "style", "${_M4_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 }         ]
      }
   }
},
"M4_BG01": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG01.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['19px','23px','276px','38px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['325px','24px','655px','38px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['22px','24px','249px','37px','auto','auto'],
      id: 'Text',
      text: 'Geo now is Chief, International Bureau of Investigation (IBI). <br><br>',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text'
   },
   {
      type: 'rect',
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['786px','345px','199px','38px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['789px','346px','191px','39px','auto','auto'],
      id: 'TextCopy2',
      text: 'Geo’s teammates are back with some useful leads.',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text'
   },
   {
      rect: ['23px','345px','317px','80px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['34px','299px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['30px','353px','318px','50px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy3',
      text: 'I was on duty at the city’s bus terminus when a group of humans and Judics disappeared suddenly. Look what I caught on my special c-Ray camera…',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['641px','231px','153px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['781px','219px','25px','23px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['813px','192px','15px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['650px','252px','136px','50px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'What IS happening to these people? ',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['330px','9px','639px','37px','auto','auto'],
      id: 'TextCopy',
      text: '<br>He faces a tough challenge right away. Many humans and Judics have disappeared without a trace. No one knows why or how.<br>',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy3}": [
            ["style", "top", '353px'],
            ["style", "text-align", 'left'],
            ["style", "height", '50px'],
            ["style", "left", '30px'],
            ["style", "width", '318px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '24px'],
            ["style", "height", '38px'],
            ["style", "left", '325px'],
            ["style", "width", '655px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["style", "height", '38px'],
            ["style", "top", '23px'],
            ["style", "left", '19px'],
            ["style", "width", '276px']
         ],
         "${_Text4}": [
            ["style", "top", '252px'],
            ["style", "width", '136px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '50px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '650px'],
            ["style", "font-size", '13px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '24px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '22px'],
            ["style", "width", '249px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '80px'],
            ["style", "top", '345px'],
            ["style", "left", '23px'],
            ["style", "width", '317px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '192px'],
            ["style", "height", '14px'],
            ["style", "left", '813px'],
            ["style", "width", '15px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '346px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '789px'],
            ["style", "width", '191px']
         ],
         "${_Text}": [
            ["style", "top", '24px'],
            ["style", "width", '249px'],
            ["style", "height", '37px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '22px'],
            ["style", "font-size", '14px']
         ],
         "${_Text2}": [
            ["style", "top", '369px'],
            ["style", "height", '50px'],
            ["style", "left", '27px'],
            ["style", "width", '380px']
         ],
         "${_Ellipse}": [
            ["style", "top", '231px'],
            ["style", "height", '80px'],
            ["style", "left", '641px'],
            ["style", "width", '153px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "font-style", ''],
            ["style", "height", '17px'],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '23px'],
            ["style", "top", '219px'],
            ["style", "left", '781px'],
            ["style", "width", '25px']
         ],
         "${_pointer}": [
            ["style", "top", '299px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '62.35deg'],
            ["style", "left", '34px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy}": [
            ["style", "top", '9px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '330px'],
            ["style", "width", '639px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '345px'],
            ["style", "height", '38px'],
            ["style", "left", '786px'],
            ["style", "width", '199px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M4_BG02": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG02.jpg','0px','0px']
   },
   {
      rect: ['32px','27px','336px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['23px','318px','170px','81px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['170px','549px','125px','81px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['195px','317px','274px','85px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['701px','25px','290px','66px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['161px','-35px','117px','83px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['149px','537px','117px','83px','auto','auto'],
      id: 'pointerCopy2',
      transform: [[0,0],['322'],['0','41'],['0.681','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['401px','312px','93px','77px','auto','auto'],
      id: 'pointerCopy3',
      transform: [[0,0],['212'],['0','41'],['0.449','0.805']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['121px','331px','93px','77px','auto','auto'],
      id: 'pointerCopy4',
      transform: [[0,0],['212'],['0','41'],['0.449','0.805']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['793px','-35px','117px','83px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['43px','35px','314px','42px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy3',
      text: 'I think I caught the same incident on my aerial camera. Look at this picture',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['29px','321px','158px','102px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2',
      text: 'Ra-haka forced us to make these frames in Planus. But we brought away the frames with us when we came here. ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['174px','554px','124px','102px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy4',
      text: 'Then, he must have got new ones made by some others.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['205px','322px','267px','81px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy2',
      text: 'Geo, Ra-haka is behind this. He has hired some humans and Judics to place these frames in public areas to teleport people forcibly to Planus.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['708px','31px','280px','62px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy',
      text: 'Oh no! That’s a teleporting frame. Ra-haka used them to teleport slaves to Planus. ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['659px','447px','290px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['662px','385px','117px','83px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['841px','262px','123px','109px','auto','auto'],
      id: 'pointerCopy6',
      transform: [[0,0],['212'],['0','41'],['0.681','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['666px','453px','280px','62px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy6',
      text: 'Quick, let’s go. We must find their frames before they find ours!',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['657px','320px','331px','122px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['665px','327px','322px','110px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy5',
      text: 'First, we hide our frames in a secret facility so Ra-haka’s army doesn’t get more frames.<br><br>Then, we use special c-Ray devices to locate the frames laid out by Ra-haka’s army and deactivate them. <br><br>',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.4485'],
            ["style", "left", '401px'],
            ["style", "width", '93px'],
            ["style", "top", '312px'],
            ["transform", "scaleY", '0.80519'],
            ["style", "height", '77px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_Text2Copy}": [
            ["style", "top", '31px'],
            ["style", "text-align", 'left'],
            ["style", "height", '62px'],
            ["style", "left", '708px'],
            ["style", "width", '280px']
         ],
         "${_pointerCopy6}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '841px'],
            ["style", "width", '123px'],
            ["style", "top", '262px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '109px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy6}": [
            ["style", "top", '447px'],
            ["style", "height", '55px'],
            ["style", "left", '659px'],
            ["style", "width", '290px']
         ],
         "${_Text2}": [
            ["style", "top", '321px'],
            ["style", "text-align", 'left'],
            ["style", "height", '102px'],
            ["style", "left", '29px'],
            ["style", "width", '158px']
         ],
         "${_pointerCopy5}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '662px'],
            ["style", "width", '117px'],
            ["style", "top", '385px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect2Copy5}": [
            ["style", "height", '122px'],
            ["style", "top", '320px'],
            ["style", "left", '657px'],
            ["style", "width", '331px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "height", '66px'],
            ["style", "top", '25px'],
            ["style", "left", '701px'],
            ["style", "width", '290px']
         ],
         "${_pointerCopy4}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.4485'],
            ["style", "left", '121px'],
            ["style", "width", '93px'],
            ["style", "top", '331px'],
            ["transform", "scaleY", '0.80519'],
            ["style", "height", '77px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '110px'],
            ["style", "top", '318px'],
            ["style", "left", '23px'],
            ["style", "width", '170px']
         ],
         "${_RoundRect2Copy3}": [
            ["style", "top", '317px'],
            ["style", "height", '85px'],
            ["style", "left", '195px'],
            ["style", "width", '274px']
         ],
         "${_Text2Copy6}": [
            ["style", "top", '453px'],
            ["style", "text-align", 'left'],
            ["style", "height", '62px'],
            ["style", "left", '666px'],
            ["style", "width", '280px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '27px'],
            ["style", "height", '55px'],
            ["style", "left", '32px'],
            ["style", "width", '336px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '322px'],
            ["style", "text-align", 'left'],
            ["style", "height", '81px'],
            ["style", "left", '205px'],
            ["style", "width", '267px']
         ],
         "${_Text2Copy5}": [
            ["style", "top", '327px'],
            ["style", "text-align", 'left'],
            ["style", "height", '110px'],
            ["style", "left", '665px'],
            ["style", "width", '322px']
         ],
         "${_pointerCopy2}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '322deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '149px'],
            ["style", "width", '117px'],
            ["style", "top", '537px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy4}": [
            ["style", "top", '549px'],
            ["style", "height", '81px'],
            ["style", "left", '170px'],
            ["style", "width", '125px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '35px'],
            ["style", "text-align", 'left'],
            ["style", "height", '42px'],
            ["style", "left", '43px'],
            ["style", "width", '314px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '161px'],
            ["style", "width", '117px'],
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '554px'],
            ["style", "text-align", 'left'],
            ["style", "height", '102px'],
            ["style", "left", '174px'],
            ["style", "width", '124px']
         ],
         "${_pointerCopy}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '212deg'],
            ["transform", "scaleX", '0.68133'],
            ["style", "left", '793px'],
            ["style", "width", '117px'],
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1.22718'],
            ["style", "height", '83px'],
            ["transform", "skewY", '40.95deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid93", tween: [ "style", "${_RoundRect2Copy}", "height", '110px', { fromValue: '110px'}], position: 0, duration: 0 }         ]
      }
   }
},
"M4_BG03": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','261px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['155px','266px','288px','173px','auto','auto'],
      font: ['Adobe Devanagari',18,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'अपनी फ्रेम्स को रा-हाका की सेना से छिपाएं।<br>फिर इससे पहले कि वे आपकी फ्रेम्स खोजें, आप उनकी फ्रेम्स खोजें। फ्रेम के सभी चार कोने खोज लेने पर वह निष्क्रिय हो जाएगी।<br><br>केस पर जाने के लिए बटन पर क्लिक करें।',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['155px','219px','288px','39px','auto','auto'],
      font: ['Adobe Devanagari',35,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: 'मिशन का विवरण',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "font-size", '18px'],
            ["style", "top", '266px'],
            ["style", "text-align", 'left'],
            ["style", "height", '173px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '288px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["style", "height", '1px'],
            ["style", "top", '261px'],
            ["color", "background-color", 'rgba(255,255,255,0.40)']
         ],
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '219px'],
            ["style", "width", '288px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '155px'],
            ["style", "font-size", '35px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"btn_Continue": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-32px','-473px','172px','490px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      id: 'btn_LAUNCH_up',
      type: 'image',
      rect: ['0px','0px','109px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_LAUNCH_up.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['11px','4px','87px','26px','auto','auto'],
      id: 'Text6',
      text: 'जारी रखें',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '4px'],
            ["style", "width", '87px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '26px'],
            ["style", "font-weight", '700'],
            ["style", "left", '11px'],
            ["style", "font-size", '16px']
         ],
         "${_btn_LAUNCH_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle}": [
            ["style", "height", '490px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '109px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M4_BG01_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG01.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['27px','30px','262px','58px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['475px','22px','518px','66px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text',
      text: 'जियो अब अंतरराष्ट्रीय अन्वेषण ब्यूरो (आईबीआई) में विशेष अधिकारी है।',
      type: 'text',
      rect: ['37px','40px','248px','66px','auto','auto']
   },
   {
      type: 'rect',
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['27px','345px','199px','58px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'TextCopy2',
      text: 'जियो के साथी कुछ खबर लाते हैं।',
      type: 'text',
      rect: ['37px','353px','136px','74px','auto','auto']
   },
   {
      rect: ['264px','345px','396px','86px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [[0,0],['133'],['0','62'],['0.571','0.481']],
      id: 'pointer',
      type: 'image',
      rect: ['329px','320px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: 'मैं शहर के बस अड्डे पर ड्यूटी पर थी जब कुछ मानव और ज्युडिक्स अचानक गायब हो गए। देखो, मैंने मेरे स्पेशल सी-रे कैमरा में क्या पकड़ा है।<br>',
      align: 'left',
      rect: ['276px','357px','367px','86px','auto','auto']
   },
   {
      rect: ['660px','226px','153px','80px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['806px','208px','25px','23px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['831px','183px','15px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'क्या हुआ होगा <br>इन लोगों के साथ?',
      align: 'center',
      rect: ['669px','242px','136px','50px','auto','auto']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'TextCopy',
      text: 'शुरु में ही उसके सामने एक कठिन चुनौती है। कई मानव और ज्युडिक्स अचानक लापता हो गए हैं। किसी को नहीं पता क्यों और कैसे।',
      align: 'left',
      rect: ['485px','30px','471px','76px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "left", '276px'],
            ["style", "font-size", '20px'],
            ["style", "top", '357px'],
            ["style", "text-align", 'left'],
            ["style", "height", '86px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '367px'],
            ["style", "font-style", 'normal']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '22px'],
            ["style", "height", '66px'],
            ["style", "left", '475px'],
            ["style", "width", '518px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '353px'],
            ["style", "font-size", '20px'],
            ["style", "line-height", '20px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '74px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '37px'],
            ["style", "width", '136px']
         ],
         "${_Rectangle}": [
            ["style", "height", '58px'],
            ["style", "top", '30px'],
            ["style", "left", '27px'],
            ["style", "width", '262px']
         ],
         "${_Text4}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '669px'],
            ["style", "width", '136px'],
            ["style", "top", '242px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '50px'],
            ["style", "font-size", '20px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '24px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '22px'],
            ["style", "width", '249px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '86px'],
            ["style", "top", '345px'],
            ["style", "left", '264px'],
            ["style", "width", '396px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '183px'],
            ["style", "height", '14px'],
            ["style", "left", '831px'],
            ["style", "width", '15px']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '345px'],
            ["style", "height", '58px'],
            ["style", "left", '27px'],
            ["style", "width", '199px']
         ],
         "${_Text}": [
            ["style", "top", '40px'],
            ["style", "width", '248px'],
            ["style", "line-height", '20px'],
            ["style", "height", '66px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '37px'],
            ["style", "font-size", '20px']
         ],
         "${_Text2}": [
            ["style", "top", '369px'],
            ["style", "height", '50px'],
            ["style", "left", '27px'],
            ["style", "width", '380px']
         ],
         "${_Ellipse}": [
            ["style", "top", '226px'],
            ["style", "height", '80px'],
            ["style", "left", '660px'],
            ["style", "width", '153px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "font-style", ''],
            ["style", "height", '17px'],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '23px'],
            ["style", "top", '208px'],
            ["style", "left", '806px'],
            ["style", "width", '25px']
         ],
         "${_pointer}": [
            ["style", "top", '320px'],
            ["transform", "scaleY", '0.48077'],
            ["transform", "rotateZ", '133deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '62.35deg'],
            ["style", "left", '329px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy}": [
            ["style", "line-height", '20px'],
            ["style", "left", '485px'],
            ["style", "font-size", '20px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '76px'],
            ["style", "width", '471px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M4_BG02_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG02.jpg','0px','0px']
   },
   {
      rect: ['27px','29px','282px','66px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['26px','323px','182px','120px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['170px','564px','199px','66px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['219px','323px','245px','110px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['692px','29px','282px','66px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['44px','37px','245px','55px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy3',
      text: 'मेरे हवाई कैमरा में भी शायद यही घटना कैद हुई है। इस तस्वीर को देखों',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['666px','514px','316px','63px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      id: 'pointer2',
      type: 'image',
      rect: ['140px','411px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['159px','493px','35px','104px','auto','auto'],
      id: 'pointer2Copy5',
      transform: [[0,0],['322']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['185px','-25px','35px','104px','auto','auto'],
      id: 'pointer2Copy3',
      transform: [[0,0],['208'],[],['1','1.058']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['835px','-25px','35px','104px','auto','auto'],
      id: 'pointer2Copy4',
      transform: [[0,0],['208'],[],['1','1.058']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['827px','348px','61px','104px','auto','auto'],
      id: 'pointer2Copy6',
      transform: [[0,0],['208'],[],['1','1.058']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['636px','483px','35px','104px','auto','auto'],
      id: 'pointer2Copy2',
      transform: [[0,0],['305'],[],['1','0.404']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      id: 'pointer2Copy',
      type: 'image',
      rect: ['420px','407px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['675px','522px','298px','55px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy6',
      text: 'चलो, जल्दी करो। इससे पहले कि वे हमारी फ्रेम्स तक पहुँचें, हमें उनकी फ्रेम्स तक पहुँचना होगा।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['635px','320px','353px','152px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['644px','329px','338px','134px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy5',
      text: 'सबसे पहले तो हमें हमारी फ्रेम्स को खुफिया जगह पर छिपाना होगा ताकि रा-हाका को और फ्रेम्स न मिल सकें।<br><br>फिर हमें विशेष सी-रे उपकरणों से उन फ्रेम्स का पता लगाना होगा जो रा-हाका की सेना ने बिछाई हैं, और उन्हें निष्क्रिय बनाना होगा।<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['33px','329px','167px','97px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'रा-हाका ने प्लेनस पर हमसे जबरदस्ती यह फ्रेम्स बनवाए थे। लेकिन हम यहां आते समय फ्रेम्स भी लेकर आए थे।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['179px','571px','182px','76px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy4',
      text: 'मतलब उसने किसी और से ये फ्रेम्स बनवाई हैं।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['227px','331px','226px','134px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy2',
      text: 'जियो, इसके पीछे रा-हाका ही है। उसी ने प्लेनस पर लोगों को जबरदस्ती ले जाने के लिए कुछ मानवों और ज्युडिक्स के जरिये ये फ्रेम्स रखवाई हैं।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['699px','38px','269px','83px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy',
      text: 'अरे नहीं! यह तो टेलीपोर्टिंग फ्रेम है। रा-हाका इससे प्लेनस पर गुलाम ले जाता है।',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointer2}": [
            ["style", "top", '411px'],
            ["transform", "skewY", '-27.76deg'],
            ["transform", "rotateZ", '197deg'],
            ["transform", "scaleX", '0.47764'],
            ["style", "left", '140px'],
            ["transform", "scaleY", '0.63462']
         ],
         "${_Text2Copy}": [
            ["style", "line-height", '20px'],
            ["style", "left", '699px'],
            ["style", "font-size", '20px'],
            ["style", "top", '38px'],
            ["style", "text-align", 'center'],
            ["style", "height", '83px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '269px'],
            ["style", "font-style", 'normal']
         ],
         "${_RoundRect2Copy6}": [
            ["style", "top", '514px'],
            ["style", "height", '63px'],
            ["style", "left", '666px'],
            ["style", "width", '316px']
         ],
         "${_Text2}": [
            ["style", "line-height", '20px'],
            ["style", "left", '33px'],
            ["style", "font-size", '20px'],
            ["style", "top", '329px'],
            ["style", "text-align", 'center'],
            ["style", "height", '97px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '167px'],
            ["style", "font-style", 'normal']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect2Copy5}": [
            ["style", "height", '152px'],
            ["style", "top", '320px'],
            ["style", "left", '635px'],
            ["style", "width", '353px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "height", '66px'],
            ["style", "top", '29px'],
            ["style", "left", '692px'],
            ["style", "width", '282px']
         ],
         "${_pointer2Copy4}": [
            ["style", "top", '-25px'],
            ["transform", "skewY", '-27.76deg'],
            ["transform", "rotateZ", '208deg'],
            ["transform", "scaleX", '0.47764'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '835px'],
            ["transform", "scaleY", '1.05769']
         ],
         "${_pointer2Copy2}": [
            ["style", "top", '483px'],
            ["transform", "skewY", '-27.76deg'],
            ["transform", "rotateZ", '305deg'],
            ["transform", "scaleX", '0.47764'],
            ["style", "left", '636px'],
            ["transform", "scaleY", '0.40385']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '120px'],
            ["style", "top", '323px'],
            ["style", "left", '26px'],
            ["style", "width", '182px']
         ],
         "${_RoundRect2Copy3}": [
            ["style", "top", '323px'],
            ["style", "height", '110px'],
            ["style", "left", '219px'],
            ["style", "width", '245px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '20px'],
            ["style", "left", '227px'],
            ["style", "font-size", '20px'],
            ["style", "top", '331px'],
            ["style", "text-align", 'center'],
            ["style", "height", '134px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '226px'],
            ["style", "font-style", 'normal']
         ],
         "${_Text2Copy6}": [
            ["style", "line-height", '20px'],
            ["style", "left", '675px'],
            ["style", "font-size", '20px'],
            ["style", "top", '522px'],
            ["style", "text-align", 'center'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '298px'],
            ["style", "font-style", 'normal']
         ],
         "${_RoundRect2}": [
            ["style", "top", '29px'],
            ["style", "height", '66px'],
            ["style", "left", '27px'],
            ["style", "width", '282px']
         ],
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "left", '44px'],
            ["style", "font-size", '20px'],
            ["style", "top", '37px'],
            ["style", "text-align", 'center'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '245px'],
            ["style", "font-style", 'normal']
         ],
         "${_pointer2Copy}": [
            ["style", "top", '407px'],
            ["transform", "skewY", '-27.76deg'],
            ["transform", "rotateZ", '197deg'],
            ["transform", "scaleX", '0.47764'],
            ["style", "left", '420px'],
            ["transform", "scaleY", '0.63462']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '20px'],
            ["style", "left", '179px'],
            ["style", "font-size", '20px'],
            ["style", "top", '571px'],
            ["style", "text-align", 'center'],
            ["style", "height", '76px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '182px'],
            ["style", "font-style", 'normal']
         ],
         "${_RoundRect2Copy4}": [
            ["style", "top", '564px'],
            ["style", "height", '66px'],
            ["style", "left", '170px'],
            ["style", "width", '199px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '20px'],
            ["style", "left", '644px'],
            ["style", "font-size", '20px'],
            ["style", "top", '329px'],
            ["style", "text-align", 'center'],
            ["style", "height", '134px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '338px'],
            ["style", "font-style", 'normal']
         ],
         "${_pointer2Copy5}": [
            ["style", "top", '493px'],
            ["transform", "skewY", '-27.76deg'],
            ["transform", "rotateZ", '322deg'],
            ["transform", "scaleX", '0.47764'],
            ["transform", "scaleY", '0.63462'],
            ["style", "left", '159px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointer2Copy3}": [
            ["style", "top", '-25px'],
            ["transform", "skewY", '-27.76deg'],
            ["transform", "rotateZ", '208deg'],
            ["transform", "scaleX", '0.47764'],
            ["transform", "scaleY", '1.05769'],
            ["style", "left", '185px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointer2Copy6}": [
            ["style", "top", '348px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '-27.76deg'],
            ["transform", "rotateZ", '208deg'],
            ["transform", "scaleX", '0.47764'],
            ["transform", "scaleY", '1.05769'],
            ["style", "left", '827px'],
            ["style", "width", '61px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Mission_04_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'M4_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      userClass: 'trnasStage',
      display: 'none',
      type: 'rect',
      id: 'Stage_transitionCopy3',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick',
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick mainSND',
      type: 'rect',
      display: 'none',
      id: 'btn_nextCopy',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick',
      type: 'rect',
      display: 'none',
      id: 'btn_back',
      cursor: ['pointer'],
      rect: ['8px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'M4_BG02',
      symbolName: 'M4_BG02_1'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'Stage_transitionCopy3',
      symbolName: 'Stage_transition_3'
   },
   {
      id: 'M4_BG03',
      symbolName: 'M4_BG03'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M4_BG01',
      symbolName: 'M4_BG01_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_M4_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_M4_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_Stage_transitionCopy3}": [
            ["style", "display", 'none']
         ],
         "${_M4_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_btn_nextCopy}": [
            ["style", "top", '304px'],
            ["style", "left", '461px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid132", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid90", tween: [ "style", "${_M4_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid91", tween: [ "style", "${_M4_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid131", tween: [ "style", "${_Stage_transitionCopy3}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 },
            { id: "eid134", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transitionCopy3}', [] ], ""], position: 0 },
            { id: "eid135", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transitionCopy3}', [] ], ""], position: 792 }         ]
      }
   }
},
"M3_BG02_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M3_BG02.jpg','0px','0px']
   },
   {
      rect: ['84px','24px','378px','62px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['198px','-35px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['138'],['0','41'],['0.571','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['190px','146px','35px','104px','auto','auto'],
      id: 'pointerCopy4',
      transform: [[0,0],['314'],['0','41'],['0.571','0.529']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['288px','313px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['230'],['0','-52'],['0.571','0.529']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['748px','290px','35px','104px','auto','auto'],
      id: 'pointerCopy2',
      transform: [[0,0],['145'],['0','12'],['0.571','0.772']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['95px','32px','355px','55px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy3',
      text: 'और वह अपने यहाँ सिर्फ ज्युडिक्स को ही काम पर रखता है। कुछ खास गुण वालों को, मैंने सुना है।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['155px','244px','213px','64px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['168px','251px','187px','57px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy',
      text: 'ठीक है, इसका पता लगाते हैं। मेरा एक प्लान है...',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['733px','466px','35px','104px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[0,0],['307'],['0','41'],['0.571','0.94']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['625px','548px','213px','57px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['638px','555px','187px','62px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy2',
      text: 'अच्छा खयाल है। सबसे नज़दीकी फैक्टरी से शुरुआत करो।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['267px','337px','283px','90px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['273px','346px','269px','88px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy4',
      text: 'मैं अपनी टीम से कुछ ज्युडिक्स चुनता हूँ जो हमारे जासूस बनकर श्री जी. की फैक्टरियों में जाएँगे। वे हमें सारी जानकारी दे सकते हैं।',
      align: 'center',
      type: 'text'
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['674px','346px','316px','61px','auto','auto'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      transform: [],
      align: 'center',
      id: 'Text2Copy5',
      text: 'हमें सिर्फ उन्ही गुण वाले सदस्य खोजने हें जो उन फैक्टरियों में काम पा सकें।',
      type: 'text',
      rect: ['680px','354px','303px','55px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2Copy}": [
            ["style", "line-height", '20px'],
            ["style", "left", '168px'],
            ["style", "font-size", '20px'],
            ["style", "top", '251px'],
            ["style", "text-align", 'center'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '187px'],
            ["style", "font-style", 'normal']
         ],
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "left", '95px'],
            ["style", "font-size", '20px'],
            ["style", "top", '32px'],
            ["style", "text-align", 'center'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '355px'],
            ["style", "font-style", '']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '466px'],
            ["transform", "scaleY", '0.93955'],
            ["transform", "rotateZ", '307deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '40.95deg'],
            ["style", "left", '733px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '20px'],
            ["style", "left", '638px'],
            ["style", "width", '187px'],
            ["style", "top", '555px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-style", ''],
            ["style", "font-size", '20px']
         ],
         "${_RoundRect2Copy5}": [
            ["style", "height", '57px'],
            ["style", "top", '548px'],
            ["style", "left", '625px'],
            ["style", "width", '213px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "top", '346px'],
            ["style", "height", '61px'],
            ["style", "left", '674px'],
            ["style", "width", '316px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '146px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '314deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '190px'],
            ["transform", "skewY", '40.95deg']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '337px'],
            ["style", "height", '90px'],
            ["style", "left", '267px'],
            ["style", "width", '283px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '62px'],
            ["style", "top", '24px'],
            ["style", "left", '84px'],
            ["style", "width", '378px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '20px'],
            ["style", "left", '680px'],
            ["style", "font-size", '20px'],
            ["style", "top", '354px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '55px'],
            ["style", "width", '303px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '20px'],
            ["style", "left", '273px'],
            ["style", "font-size", '20px'],
            ["style", "top", '346px'],
            ["style", "text-align", 'center'],
            ["style", "height", '88px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '269px'],
            ["style", "font-style", 'normal']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '290px'],
            ["transform", "scaleY", '0.77173'],
            ["transform", "rotateZ", '145deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '12.42deg'],
            ["style", "left", '748px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pointer}": [
            ["style", "top", '-35px'],
            ["transform", "scaleY", '1.22718'],
            ["transform", "rotateZ", '138deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '40.95deg'],
            ["style", "left", '198px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect2Copy4}": [
            ["style", "top", '244px'],
            ["style", "height", '64px'],
            ["style", "left", '155px'],
            ["style", "width", '213px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '313px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '230deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '288px'],
            ["transform", "skewY", '-52.01deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M3_BG01_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M3_BG01.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['24px','27px','318px','50px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['34px','32px','303px','63px','auto','auto'],
      id: 'Text',
      text: 'जियो अब एक अन्वेषण अधिकारी है। उसके पास मानवों और ज्युडिक्स की टीम है।',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text'
   },
   {
      rect: ['494px','27px','249px','82px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['668px','-9px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['503px','34px','229px','77px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy3',
      text: 'जियो, चोरी हुए क्रिस्टल और पानी बड़े उद्योगपति श्री जी. की फैक्टरियों में होने का सुराग मिला है।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['111px','385px','211px','50px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['259px','322px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['118'],['0','62'],['0.571','0.998']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['117px','391px','198px','41px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'वह अपनी फैक्टरियों में क्या बनाता होगा, जियो?',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['723px','443px','221px','130px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['728px','429px','25px','23px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['706px','420px','15px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['724px','461px','221px','104px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'मानवों को क्रिस्टल के <br>सारे उपयोग नहीं पता। शायद <br>श्री जी. ज्युडिक्स की मदद से यही <br>पता लगा रहे होंगे।',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy}": [
            ["style", "top", '322px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '62.35deg'],
            ["style", "left", '259px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '50px'],
            ["style", "top", '385px'],
            ["style", "left", '111px'],
            ["style", "width", '211px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '27px'],
            ["style", "height", '82px'],
            ["style", "left", '494px'],
            ["style", "width", '249px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '14px'],
            ["style", "top", '420px'],
            ["style", "left", '706px'],
            ["style", "width", '15px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '429px'],
            ["style", "height", '23px'],
            ["style", "left", '728px'],
            ["style", "width", '25px']
         ],
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "left", '503px'],
            ["style", "font-size", '20px'],
            ["style", "top", '34px'],
            ["style", "text-align", 'center'],
            ["style", "height", '77px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '229px'],
            ["style", "font-style", 'normal']
         ],
         "${_pointer}": [
            ["style", "top", '-9px'],
            ["transform", "scaleY", '0.9983'],
            ["transform", "rotateZ", '118deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '668px'],
            ["transform", "skewY", '62.35deg']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "height", '17px'],
            ["style", "font-style", ''],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Text2}": [
            ["style", "line-height", '20px'],
            ["style", "left", '117px'],
            ["style", "font-size", '20px'],
            ["style", "top", '391px'],
            ["style", "text-align", 'center'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '198px'],
            ["style", "font-style", 'normal']
         ],
         "${_Ellipse}": [
            ["style", "height", '130px'],
            ["style", "top", '443px'],
            ["style", "left", '723px'],
            ["style", "width", '221px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text}": [
            ["style", "top", '32px'],
            ["style", "font-size", '20px'],
            ["style", "line-height", '20px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '63px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '34px'],
            ["style", "width", '303px']
         ],
         "${_Rectangle}": [
            ["style", "height", '50px'],
            ["style", "left", '24px'],
            ["style", "width", '318px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text4}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '724px'],
            ["style", "font-size", '20px'],
            ["style", "top", '461px'],
            ["style", "text-align", 'center'],
            ["style", "height", '104px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-style", 'normal'],
            ["style", "width", '221px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Mission_03_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'M3_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['0','0','auto','auto','auto','auto'],
      display: 'none',
      userClass: ' trnasStage',
      id: 'Stage_transitionCopy2',
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick mainSND',
      display: 'none',
      id: 'btn_nextCopy',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['8px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick',
      display: 'none',
      id: 'btn_back',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'M3_BG02',
      symbolName: 'M3_BG02_1'
   },
   {
      id: 'Stage_transitionCopy2',
      symbolName: 'Stage_transition_1'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M3_BG03',
      symbolName: 'M3_BG03'
   },
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M3_BG01',
      symbolName: 'M3_BG01_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M3_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_M3_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M3_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'none'],
            ["style", "top", '304px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '461px']
         ],
         "${_Stage_transitionCopy2}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid88", tween: [ "style", "${_M3_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid126", tween: [ "style", "${_Stage_transitionCopy2}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid128", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid127", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid89", tween: [ "style", "${_M3_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid129", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transitionCopy2}', [] ], ""], position: 0 },
            { id: "eid130", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transitionCopy2}', [] ], ""], position: 792 }         ]
      }
   }
},
"M1_BG02_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M1_BG02.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['29px','27px','147px','32px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['37px','34px','142px','25px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text',
      text: 'पुलिस स्टेशन में',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['397px','227px','260px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['287px','71px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['277'],['0','-19'],['0.571','1.227']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['300px','274px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[0,0],['237'],['0','-58'],['0.571','0.865']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['393px','381px','35px','104px','auto','auto'],
      id: 'pointerCopy3',
      transform: [[0,0],['302'],['18','-31'],['0.429','0.97']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['557px','322px','35px','104px','auto','auto'],
      id: 'pointerCopy2',
      transform: [[0,0],['79'],['0','12'],['0.571','0.772']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['407px','236px','241px','44px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy3',
      text: 'कुछ ज्युडिक्स ने एक घर के बगीचे से क्रिस्टल चुरा लिए हैं।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['271px','308px','311px','75px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['279px','316px','293px','80px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy4',
      text: 'आसपास के सभी ज्युडिक्स हिरासत में हैं। यदि तुम असली चोर को पकड़ लो, तो बाकी सब को छोड़ देंगे। यदि नहीं, तो...',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['404px','467px','58px','35px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['412px','475px','39px','28px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy6',
      text: 'हाँ',
      align: 'center',
      type: 'text'
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['363px','399px','230px','55px','auto','auto'],
      id: 'RoundRect2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      transform: [],
      align: 'center',
      id: 'Text2Copy5',
      text: 'क्या सभी गवाहों के बयान सिस्टम में आ गए हैं, सर?',
      type: 'text',
      rect: ['376px','406px','206px','46px','auto','auto']
   },
   {
      rect: ['808px','430px','15px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['824px','441px','25px','23px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['831px','461px','142px','69px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['839px','471px','129px','52px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'मुझे इसे <br>सुलझाना ही होगा।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['320px','556px','15px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['336px','567px','25px','23px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['366px','541px','161px','81px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'EllipseCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['375px','558px','147px','75px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4Copy',
      text: 'लेकिन उससे कोई <br>मदद नहीं मिलने वाली!',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "top", '381px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.97017'],
            ["transform", "skewX", '18.12deg'],
            ["transform", "scaleX", '0.42857'],
            ["transform", "skewY", '-31.37deg'],
            ["style", "left", '393px'],
            ["transform", "rotateZ", '302deg']
         ],
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "left", '407px'],
            ["style", "width", '241px'],
            ["style", "top", '236px'],
            ["style", "text-align", 'center'],
            ["style", "height", '44px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px'],
            ["style", "font-style", '']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '441px'],
            ["style", "height", '23px'],
            ["style", "left", '824px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle}": [
            ["style", "height", '32px'],
            ["style", "width", '147px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_EllipseCopy}": [
            ["style", "top", '541px'],
            ["style", "height", '81px'],
            ["style", "left", '366px'],
            ["style", "width", '161px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "height", '55px'],
            ["style", "top", '399px'],
            ["style", "left", '363px'],
            ["style", "width", '230px']
         ],
         "${_Text4Copy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '375px'],
            ["style", "width", '147px'],
            ["style", "top", '558px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '75px'],
            ["style", "font-size", '20px']
         ],
         "${_Text4}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '839px'],
            ["style", "font-size", '20px'],
            ["style", "top", '471px'],
            ["style", "text-align", 'center'],
            ["style", "height", '52px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-style", 'normal'],
            ["style", "width", '129px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "height", '17px'],
            ["style", "font-style", ''],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '75px'],
            ["style", "top", '308px'],
            ["style", "left", '271px'],
            ["style", "width", '311px']
         ],
         "${_RoundRect2Copy3}": [
            ["style", "top", '467px'],
            ["style", "height", '35px'],
            ["style", "left", '404px'],
            ["style", "width", '58px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "height", '14px'],
            ["style", "top", '430px'],
            ["style", "left", '808px'],
            ["style", "width", '15px']
         ],
         "${_Text2Copy4}": [
            ["style", "line-height", '20px'],
            ["style", "left", '279px'],
            ["style", "width", '293px'],
            ["style", "top", '316px'],
            ["style", "text-align", 'center'],
            ["style", "height", '80px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px'],
            ["style", "font-style", 'normal']
         ],
         "${_Text2Copy6}": [
            ["style", "line-height", '20px'],
            ["style", "left", '412px'],
            ["style", "width", '39px'],
            ["style", "top", '475px'],
            ["style", "text-align", 'center'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px'],
            ["style", "font-style", 'normal']
         ],
         "${_Text}": [
            ["style", "line-height", '20px'],
            ["style", "left", '37px'],
            ["style", "font-size", '20px'],
            ["style", "top", '34px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '25px'],
            ["style", "width", '142px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '227px'],
            ["style", "height", '55px'],
            ["style", "left", '397px'],
            ["style", "width", '260px']
         ],
         "${_Text2Copy5}": [
            ["style", "line-height", '20px'],
            ["style", "left", '376px'],
            ["style", "width", '206px'],
            ["style", "top", '406px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '46px'],
            ["style", "font-size", '20px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '322px'],
            ["transform", "scaleY", '0.77173'],
            ["transform", "rotateZ", '79deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '557px'],
            ["transform", "skewY", '12.42deg']
         ],
         "${_Ellipse}": [
            ["style", "height", '69px'],
            ["style", "top", '461px'],
            ["style", "left", '831px'],
            ["style", "width", '142px']
         ],
         "${_Ellipse2}": [
            ["style", "height", '23px'],
            ["style", "top", '567px'],
            ["style", "left", '336px'],
            ["style", "width", '25px']
         ],
         "${_pointer}": [
            ["style", "top", '71px'],
            ["transform", "scaleY", '1.22718'],
            ["transform", "rotateZ", '277deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '287px'],
            ["transform", "skewY", '-18.96deg']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '556px'],
            ["style", "height", '14px'],
            ["style", "left", '320px'],
            ["style", "width", '15px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '274px'],
            ["transform", "scaleY", '0.86538'],
            ["transform", "rotateZ", '237deg'],
            ["transform", "scaleX", '0.57143'],
            ["transform", "skewY", '-57.78deg'],
            ["style", "left", '300px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"M1_BG01_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'BG09',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M1_BG01.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['29px','27px','339px','55px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['26px','335px','285px','46px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['37px','33px','313px','46px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text',
      text: 'जियो इंस्पेक्टर काटा का सहायक बन जाता है, लेकिन मुसीबत आने ही वाली है...',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['34px','341px','260px','41px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2',
      text: 'ज्युडिक्स अपने साथ प्लेनस के कुछ नायाब क्रिस्टल वृक्ष लाए हैं...',
      align: 'left',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['411px','335px','226px','39px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['713px','335px','251px','39px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['737px','339px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[0,0],['160'],[],['0.571','0.529']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['419px','341px','218px','24px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2Copy',
      text: 'सबका मन उन पर ललचा रहा है',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['720px','344px','235px','43px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2Copy3',
      text: 'पेड़ के क्रिस्टल पानी को शुद्ध करते हैं।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['852px','458px','143px','121px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['861px','443px','25px','23px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['845px','432px','15px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['866px','484px','118px','87px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'करते तो और भी कुछ हैं, लेकिन मैं बताऊँगा नहीं।',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2Copy}": [
            ["style", "top", '335px'],
            ["style", "height", '39px'],
            ["style", "left", '411px'],
            ["style", "width", '226px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '46px'],
            ["style", "top", '335px'],
            ["style", "left", '26px'],
            ["style", "width", '285px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '341px'],
            ["style", "width", '218px'],
            ["style", "line-height", '20px'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '419px'],
            ["style", "font-size", '20px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '39px'],
            ["style", "top", '335px'],
            ["style", "left", '713px'],
            ["style", "width", '251px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '432px'],
            ["style", "height", '14px'],
            ["style", "left", '845px'],
            ["style", "width", '15px']
         ],
         "${_Text2}": [
            ["style", "top", '341px'],
            ["style", "width", '260px'],
            ["style", "line-height", '20px'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '34px'],
            ["style", "font-size", '20px']
         ],
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "left", '720px'],
            ["style", "width", '235px'],
            ["style", "top", '344px'],
            ["style", "text-align", 'center'],
            ["style", "height", '43px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px'],
            ["style", "font-style", 'normal']
         ],
         "${_pointer}": [
            ["style", "top", '339px'],
            ["transform", "scaleY", '0.52885'],
            ["transform", "rotateZ", '160deg'],
            ["transform", "scaleX", '0.57143'],
            ["style", "left", '737px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '23px'],
            ["style", "top", '443px'],
            ["style", "left", '861px'],
            ["style", "width", '25px']
         ],
         "${_Ellipse}": [
            ["style", "height", '121px'],
            ["style", "top", '458px'],
            ["style", "left", '852px'],
            ["style", "width", '143px']
         ],
         "${_Text}": [
            ["style", "line-height", '20px'],
            ["style", "left", '37px'],
            ["style", "width", '313px'],
            ["style", "top", '33px'],
            ["style", "text-align", 'left'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-style", 'italic'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_BG09}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Rectangle}": [
            ["style", "height", '55px'],
            ["style", "width", '339px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", ''],
            ["style", "font-style", ''],
            ["style", "height", '17px'],
            ["style", "left", ''],
            ["style", "width", '']
         ],
         "${_Text4}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '866px'],
            ["style", "width", '118px'],
            ["style", "top", '484px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '87px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"Mission_01_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'M1_BG01',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M1_BG02',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M1_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['0','0','auto','auto','auto','auto'],
      display: 'none',
      userClass: ' trnasStage',
      id: 'Stage_transitionCopy',
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      userClass: 'mainSND btnClick',
      display: 'none',
      id: 'btn_nextCopy',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['8px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick',
      display: 'none',
      id: 'btn_back',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'M1_BG02',
      symbolName: 'M1_BG02_1'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'M1_BG01',
      symbolName: 'M1_BG01_1'
   },
   {
      id: 'Stage_transitionCopy',
      symbolName: 'Stage_transition'
   },
   {
      id: 'M1_BG03',
      symbolName: 'M1_BG03'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px'],
            ["style", "top", '593px']
         ],
         "${_M1_BG02}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_M1_BG01}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M1_BG03}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_Stage_transitionCopy}": [
            ["style", "display", 'none']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '461px'],
            ["style", "top", '304px']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid78", tween: [ "style", "${_M1_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 750, duration: 0 },
            { id: "eid121", tween: [ "style", "${_Stage_transitionCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutCirc" },
            { id: "eid79", tween: [ "style", "${_M1_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid123", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid122", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 792, duration: 0, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0 },
            { id: "eid124", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transitionCopy}', [] ], ""], position: 0 },
            { id: "eid125", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transitionCopy}', [] ], ""], position: 792 }         ]
      }
   }
},
"Stage_transition_2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      id: 'feedback_m1_bg',
      fill: ['rgba(0,0,0,0)','images/feedback_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','283px','1014px','84px','auto','auto'],
      id: 'stage_strip',
      fill: ['rgba(0,0,0,0)','images/stage_strip.png','0px','0px']
   },
   {
      rect: ['426px','215px','376px','62px','auto','auto'],
      font: ['Adobe Devanagari',45,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'पानी चोर',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['413px','294px','223px','62px','auto','auto'],
      font: ['Adobe Devanagari',48,'rgba(255,246,0,1.00)','normal','none',''],
      id: 'TextCopy',
      text: 'लेवल 1<br>',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-303px'],
            ["style", "width", '376px'],
            ["style", "top", '215px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '45px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_stage_strip}": [
            ["style", "top", '283px'],
            ["transform", "scaleY", '0.05'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_TextCopy}": [
            ["style", "top", '294px'],
            ["style", "font-size", '48px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,246,0,1.00)'],
            ["style", "height", '62px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '1023px'],
            ["style", "width", '223px']
         ],
         "${_feedback_m1_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         timeline: [
            { id: "eid372", tween: [ "style", "${_TextCopy}", "left", '420px', { fromValue: '1023px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "style", "${_TextCopy}", "left", '385px', { fromValue: '420px'}], position: 1000, duration: 583 },
            { id: "eid395", tween: [ "style", "${_TextCopy}", "left", '-202px', { fromValue: '385px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid388", tween: [ "transform", "${_stage_strip}", "scaleY", '1', { fromValue: '0.05'}], position: 83, duration: 333, easing: "easeOutBack" },
            { id: "eid391", tween: [ "transform", "${_stage_strip}", "scaleY", '0.05', { fromValue: '1'}], position: 1917, duration: 250, easing: "easeInCirc" },
            { id: "eid402", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid401", tween: [ "style", "${_stage_strip}", "display", 'block', { fromValue: 'none'}], position: 84, duration: 0, easing: "easeInCirc" },
            { id: "eid400", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0, easing: "easeInCirc" },
            { id: "eid371", tween: [ "style", "${_Text}", "left", '344px', { fromValue: '-303px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '431px', { fromValue: '344px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '431px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid394", tween: [ "style", "${_feedback_m1_bg}", "opacity", '1', { fromValue: '0'}], position: 42, duration: 125 },
            { id: "eid405", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_feedback_m1_bg}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0 }         ]
      }
   }
},
"Stage_transition": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      id: 'feedback_m1_bg',
      fill: ['rgba(0,0,0,0)','images/feedback_m1_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','283px','1014px','84px','auto','auto'],
      id: 'stage_strip',
      fill: ['rgba(0,0,0,0)','images/stage_strip.png','0px','0px']
   },
   {
      rect: ['426px','203px','302px','74px','auto','auto'],
      font: ['Adobe Devanagari',50,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'क्रिस्टल केस',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['413px','294px','223px','62px','auto','auto'],
      font: ['Adobe Devanagari',48,'rgba(255,246,0,1.00)','normal','none',''],
      id: 'TextCopy',
      text: 'लेवल 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-303px'],
            ["style", "width", '302px'],
            ["style", "top", '203px'],
            ["style", "text-align", 'center'],
            ["style", "height", '74px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_stage_strip}": [
            ["style", "display", 'none'],
            ["style", "top", '283px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.05']
         ],
         "${_TextCopy}": [
            ["style", "top", '294px'],
            ["style", "width", '223px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["color", "color", 'rgba(255,246,0,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '1023px'],
            ["style", "font-size", '48px']
         ],
         "${_feedback_m1_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         timeline: [
            { id: "eid372", tween: [ "style", "${_TextCopy}", "left", '477px', { fromValue: '1023px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "style", "${_TextCopy}", "left", '395px', { fromValue: '477px'}], position: 1000, duration: 583 },
            { id: "eid395", tween: [ "style", "${_TextCopy}", "left", '-202px', { fromValue: '395px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid388", tween: [ "transform", "${_stage_strip}", "scaleY", '1', { fromValue: '0.05'}], position: 83, duration: 333, easing: "easeOutBack" },
            { id: "eid391", tween: [ "transform", "${_stage_strip}", "scaleY", '0.05', { fromValue: '1'}], position: 1917, duration: 250, easing: "easeInCirc" },
            { id: "eid402", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid401", tween: [ "style", "${_stage_strip}", "display", 'block', { fromValue: 'none'}], position: 84, duration: 0, easing: "easeInCirc" },
            { id: "eid400", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0, easing: "easeInCirc" },
            { id: "eid371", tween: [ "style", "${_Text}", "left", '287px', { fromValue: '-303px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '356px', { fromValue: '287px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '356px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid405", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_feedback_m1_bg}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0 },
            { id: "eid394", tween: [ "style", "${_feedback_m1_bg}", "opacity", '1', { fromValue: '0'}], position: 42, duration: 125 }         ]
      }
   }
},
"Stage_transition_1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      id: 'feedback_m1_bg',
      fill: ['rgba(0,0,0,0)','images/feedback_m3_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','283px','1014px','84px','auto','auto'],
      id: 'stage_strip',
      fill: ['rgba(0,0,0,0)','images/stage_strip.png','0px','0px']
   },
   {
      rect: ['426px','213px','493px','62px','auto','auto'],
      font: ['Adobe Devanagari',50,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'जासूस',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['413px','294px','223px','62px','auto','auto'],
      font: ['Adobe Devanagari',48,'rgba(255,246,0,1.00)','normal','none',''],
      id: 'TextCopy',
      text: 'लेवल 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-493px'],
            ["style", "width", '493px'],
            ["style", "top", '213px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_stage_strip}": [
            ["style", "display", 'none'],
            ["style", "top", '283px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.05']
         ],
         "${_TextCopy}": [
            ["style", "top", '294px'],
            ["style", "width", '223px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["color", "color", 'rgba(255,246,0,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '1023px'],
            ["style", "font-size", '48px']
         ],
         "${_feedback_m1_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         timeline: [
            { id: "eid372", tween: [ "style", "${_TextCopy}", "left", '395px', { fromValue: '1023px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "style", "${_TextCopy}", "left", '385px', { fromValue: '395px'}], position: 1000, duration: 583 },
            { id: "eid395", tween: [ "style", "${_TextCopy}", "left", '-202px', { fromValue: '385px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid388", tween: [ "transform", "${_stage_strip}", "scaleY", '1', { fromValue: '0.05'}], position: 83, duration: 333, easing: "easeOutBack" },
            { id: "eid391", tween: [ "transform", "${_stage_strip}", "scaleY", '0.05', { fromValue: '1'}], position: 1917, duration: 250, easing: "easeInCirc" },
            { id: "eid402", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid401", tween: [ "style", "${_stage_strip}", "display", 'block', { fromValue: 'none'}], position: 84, duration: 0, easing: "easeInCirc" },
            { id: "eid400", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0, easing: "easeInCirc" },
            { id: "eid371", tween: [ "style", "${_Text}", "left", '189px', { fromValue: '-493px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '250px', { fromValue: '189px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '250px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid405", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_feedback_m1_bg}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0 },
            { id: "eid394", tween: [ "style", "${_feedback_m1_bg}", "opacity", '1', { fromValue: '0'}], position: 42, duration: 125 }         ]
      }
   }
},
"Stage_transition_3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      id: 'feedback_m1_bg',
      fill: ['rgba(0,0,0,0)','images/feedback_m4_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','283px','1014px','84px','auto','auto'],
      id: 'stage_strip',
      fill: ['rgba(0,0,0,0)','images/stage_strip.png','0px','0px']
   },
   {
      rect: ['426px','215px','383px','62px','auto','auto'],
      font: ['Adobe Devanagari',50,'rgba(255,255,255,1.00)','700','none',''],
      display: 'none',
      id: 'Text',
      text: 'आख़री लड़ाई<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['413px','294px','223px','62px','auto','auto'],
      font: ['Adobe Devanagari',48,'rgba(255,246,0,1.00)','normal','none',''],
      id: 'TextCopy',
      text: 'लेवल 1',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-303px'],
            ["style", "width", '383px'],
            ["style", "top", '215px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "display", 'none'],
            ["style", "font-size", '50px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_stage_strip}": [
            ["style", "top", '283px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.05'],
            ["style", "left", '0px']
         ],
         "${_TextCopy}": [
            ["style", "top", '294px'],
            ["style", "width", '223px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["color", "color", 'rgba(255,246,0,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '1023px'],
            ["style", "font-size", '48px']
         ],
         "${_feedback_m1_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: false,
         timeline: [
            { id: "eid372", tween: [ "style", "${_TextCopy}", "left", '395px', { fromValue: '1023px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "style", "${_TextCopy}", "left", '385px', { fromValue: '395px'}], position: 1000, duration: 583 },
            { id: "eid395", tween: [ "style", "${_TextCopy}", "left", '-202px', { fromValue: '385px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid388", tween: [ "transform", "${_stage_strip}", "scaleY", '1', { fromValue: '0.05'}], position: 83, duration: 333, easing: "easeOutBack" },
            { id: "eid391", tween: [ "transform", "${_stage_strip}", "scaleY", '0.05', { fromValue: '1'}], position: 1917, duration: 250, easing: "easeInCirc" },
            { id: "eid402", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid401", tween: [ "style", "${_stage_strip}", "display", 'block', { fromValue: 'none'}], position: 84, duration: 0, easing: "easeInCirc" },
            { id: "eid400", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0, easing: "easeInCirc" },
            { id: "eid136", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 333, duration: 0 },
            { id: "eid371", tween: [ "style", "${_Text}", "left", '235px', { fromValue: '-303px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '315px', { fromValue: '235px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '315px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid405", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_feedback_m1_bg}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0 },
            { id: "eid394", tween: [ "style", "${_feedback_m1_bg}", "opacity", '1', { fromValue: '0'}], position: 42, duration: 125 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "book");
