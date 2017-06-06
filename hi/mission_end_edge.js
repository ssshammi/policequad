/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


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
            id:'Mission1_end',
            type:'rect',
            rect:['-340px','0px','auto','auto','auto','auto'],
            userClass:"end1"
         },
         {
            id:'Mission2_end',
            type:'rect',
            rect:['-340','0','auto','auto','auto','auto'],
            userClass:"end1"
         },
         {
            id:'Mission3_end',
            type:'rect',
            rect:['-340px','0px','auto','auto','auto','auto'],
            userClass:"end1"
         },
         {
            id:'Mission4_end',
            type:'rect',
            rect:['-340px','0px','auto','auto','auto','auto'],
            userClass:"end1"
         }],
         symbolInstances: [
         {
            id:'Mission1_end',
            symbolName:'Mission1_end'
         },
         {
            id:'Mission4_end',
            symbolName:'Mission4_end'
         },
         {
            id:'Mission2_end',
            symbolName:'Mission2_end'
         },
         {
            id:'Mission3_end',
            symbolName:'Mission3_end'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Mission4_end}": [
            ["style", "left", '-340px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1014px'],
            ["style", "height", '652px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Mission1_end}": [
            ["style", "left", '-340px'],
            ["style", "top", '0px']
         ],
         "${_Mission3_end}": [
            ["style", "left", '-340px'],
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
"M02": {
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
      id: 'BG15',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG15.jpg','0px','0px']
   },
   {
      rect: ['66px','73px','232px','111px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],['142'],[],['1','1.44']],
      id: 'pointer',
      type: 'image',
      rect: ['222px','45px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'हमने गैंग के लीडर्स को पकड़ लिया है। अब हमारा पानी सुरक्षित है। कुछ आराम कर लो जियो।<br>',
      align: 'center',
      rect: ['76px','80px','212px','90px','auto','auto']
   },
   {
      rect: ['776px','415px','149px','63px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],['308'],[],['1','1.44']],
      id: 'pointerCopy',
      type: 'image',
      rect: ['832px','341px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'TextCopy',
      text: 'गुड नाइट सर।<br>',
      align: 'center',
      rect: ['791px','436px','119px','33px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "top", '415px'],
            ["style", "height", '63px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '776px'],
            ["style", "width", '149px']
         ],
         "${_RoundRect}": [
            ["style", "top", '73px'],
            ["style", "height", '111px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '66px'],
            ["style", "width", '232px']
         ],
         "${_Text}": [
            ["style", "top", '80px'],
            ["style", "text-align", 'center'],
            ["style", "width", '212px'],
            ["style", "height", '90px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '76px'],
            ["style", "font-size", '16px']
         ],
         "${_BG15}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '142deg'],
            ["style", "left", '222px'],
            ["style", "top", '45px']
         ],
         "${_TextCopy}": [
            ["style", "top", '436px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '16px'],
            ["style", "height", '33px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '791px'],
            ["style", "width", '119px']
         ],
         "${_pointerCopy}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '308deg'],
            ["style", "left", '832px'],
            ["style", "top", '341px']
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
"promotion_m1": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['478px','317px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      userClass: 'mainMenu',
      id: 'btn_Start',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['421','563','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['330px','75px','349px','59px','auto','auto'],
      id: 'Text2',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'बधाई हो!',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','134px','654px','68px','auto','auto'],
      id: 'Text2Copy',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'आपको तरक्की दी गई है<br>',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','486px','860px','68px','auto','auto'],
      id: 'Text2Copy7',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'इंसपेक्टर',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      font: ['Verdana, Geneva, sans-serif',30,'rgba(6,253,253,1.00)','bold','none','normal']
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '68px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px'],
            ["style", "top", '75px'],
            ["style", "height", '59px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '349px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_badge_star}": [
            ["style", "top", '317px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '478px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy7}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '68px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '860px']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_promotion_strip}": [
            ["style", "display", 'none'],
            ["style", "top", '317px'],
            ["transform", "scaleY", '0.01'],
            ["style", "left", '0px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid88", tween: [ "style", "${_Text2Copy7}", "left", '78px', { fromValue: '1025px'}], position: 3250, duration: 250, easing: "easeInOutBack" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1750, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 3500, duration: 250, easing: "easeOutBack" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" }         ]
      }
   }
},
"btn_Start": {
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
      id: 'btn_Start_up',
      type: 'image',
      rect: ['0px','0px','170px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_Start_up.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',20,'rgba(0,0,0,1)','700','none',''],
      type: 'text',
      id: 'Text',
      text: 'जारी रखें<br>',
      align: 'center',
      rect: ['15px','6px','139px','33px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '6px'],
            ["style", "font-size", '20px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '33px'],
            ["style", "font-weight", '700'],
            ["style", "left", '15px'],
            ["style", "width", '139px']
         ],
         "${_btn_Start_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '170px']
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
         "${_btn_next}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
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
"Mission2_end": {
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
      id: 'M02',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m2',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'promotion_m2',
      symbolName: 'promotion_m2'
   },
   {
      id: 'M02',
      symbolName: 'M02'
   }   ]
   },
   states: {
      "Base State": {
         "${_promotion_m2}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "display", 'block'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '1295px']
         ],
         "${_M02}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid68", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m2}', [] ], ""], position: 0 },
            { id: "eid69", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m2}', [] ], ""], position: 250 }         ]
      }
   }
},
"Mission1_end": {
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
      id: 'M01',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m1',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'M01',
      symbolName: 'M01'
   },
   {
      id: 'promotion_m1',
      symbolName: 'promotion_m1'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "left", '1295px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ],
         "${_M01}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_promotion_m1}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid60", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m1}', [] ], ""], position: 0 },
            { id: "eid59", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m1}', [0] ], ""], position: 250 }         ]
      }
   }
},
"promotion_m2": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['446px','317px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_starCopy',
      type: 'image',
      rect: ['509px','317px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      userClass: 'mainMenu',
      id: 'btn_Start',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['421','563','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['330px','78px','356px','56px','auto','auto'],
      id: 'Text2',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'बधाई हो!<br>',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','134px','654px','68px','auto','auto'],
      id: 'Text2Copy',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'आपको तरक्की दी गई है<br>',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','486px','860px','39px','auto','auto'],
      id: 'Text2Copy6',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'अन्वेषण अधिकारी<br>',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      font: ['Verdana, Geneva, sans-serif',30,'rgba(6,253,253,1.00)','bold','none','normal']
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_badge_starCopy}": [
            ["style", "top", '317px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '509px']
         ],
         "${_Text2Copy6}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '39px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '860px']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_badge_star}": [
            ["style", "top", '317px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '446px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px'],
            ["style", "top", '78px'],
            ["style", "height", '56px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '356px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '68px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_promotion_strip}": [
            ["style", "top", '317px'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.01'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "transform", "${_badge_starCopy}", "scaleX", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid38", tween: [ "style", "${_badge_starCopy}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid67", tween: [ "transform", "${_badge_starCopy}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2250, duration: 417, easing: "easeOutCirc" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1750, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" },
            { id: "eid87", tween: [ "style", "${_Text2Copy6}", "left", '78px', { fromValue: '1025px'}], position: 3250, duration: 250, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 3500, duration: 250, easing: "easeOutBack" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 2750, duration: 615, easing: "easeOutBack" },
            { id: "eid39", tween: [ "transform", "${_badge_starCopy}", "scaleY", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"Mission3_end": {
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
      id: 'M03',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m3',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'promotion_m3',
      symbolName: 'promotion_m3'
   },
   {
      id: 'M03',
      symbolName: 'M03'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_M03}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_promotion_m3}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "left", '1295px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid74", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m3}', [] ], ""], position: 0 },
            { id: "eid75", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m3}', [] ], ""], position: 250 }         ]
      }
   }
},
"promotion_m3": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['446px','334px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star2',
      type: 'image',
      rect: ['509px','334px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star3',
      type: 'image',
      rect: ['479px','280px','59px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      userClass: 'mainMenu',
      id: 'btn_Start',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['421','563','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['330px','90px','351px','72px','auto','auto'],
      id: 'Text2',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'बधाई हो!<br>',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','134px','654px','88px','auto','auto'],
      id: 'Text2Copy',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'आपको तरक्की दी गई है<br>',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','486px','1014px','84px','auto','auto'],
      id: 'Text2Copy5',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'विशेष अधिकारी, अंतरराष्ट्रीय अन्वेषण ब्यूरो (आईबीआई)<br>',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      font: ['Verdana, Geneva, sans-serif',25,'rgba(6,253,253,1.00)','bold','none','normal']
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '88px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px'],
            ["style", "top", '90px'],
            ["style", "height", '72px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '351px']
         ],
         "${_Text2Copy5}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '25px'],
            ["style", "top", '486px'],
            ["style", "height", '84px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '486px'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(6,253,253,1)'],
            ["style", "height", '39px'],
            ["style", "left", '78px'],
            ["style", "width", '860px']
         ],
         "${_badge_star2}": [
            ["style", "top", '334px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '509px']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_badge_star}": [
            ["style", "top", '334px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '446px']
         ],
         "${_Text2Copy4}": [
            ["style", "top", '134px'],
            ["style", "font-size", '48px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '68px'],
            ["style", "left", '1025px'],
            ["style", "width", '654px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_promotion_strip}": [
            ["style", "top", '317px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.01']
         ],
         "${_badge_star3}": [
            ["style", "top", '280px'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["transform", "scaleX", '5'],
            ["style", "opacity", '0'],
            ["style", "left", '479px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4250,
         autoPlay: true,
         timeline: [
            { id: "eid37", tween: [ "transform", "${_badge_star2}", "scaleX", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 3250, duration: 615, easing: "easeOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid70", tween: [ "transform", "${_badge_star3}", "scaleX", '1', { fromValue: '5'}], position: 2750, duration: 500, easing: "easeOutBack" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1750, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 3250, duration: 615, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid86", tween: [ "style", "${_Text2Copy5}", "left", '0px', { fromValue: '1025px'}], position: 3750, duration: 250, easing: "easeInOutBack" },
            { id: "eid39", tween: [ "transform", "${_badge_star2}", "scaleY", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" },
            { id: "eid67", tween: [ "transform", "${_badge_star2}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2250, duration: 417, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_badge_star2}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 4000, duration: 250, easing: "easeOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 3250, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1750, duration: 500, easing: "easeOutBack" },
            { id: "eid71", tween: [ "style", "${_badge_star3}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 500, easing: "easeOutBack" },
            { id: "eid72", tween: [ "transform", "${_badge_star3}", "scaleY", '1', { fromValue: '5'}], position: 2750, duration: 500, easing: "easeOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid73", tween: [ "transform", "${_badge_star3}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2750, duration: 417, easing: "easeOutCirc" }         ]
      }
   }
},
"Mission4_end": {
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
      id: 'M04',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'promotion_m4',
      type: 'rect',
      rect: ['340px','0px','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1295px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'promotion_m4',
      symbolName: 'promotion_m4'
   },
   {
      id: 'M04',
      symbolName: 'M04'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '692px'],
            ["style", "width", '2019px']
         ],
         "${_promotion_m4}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_M04}": [
            ["style", "left", '340px'],
            ["style", "top", '0px']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '1295px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid57", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeInOutBack" },
            { id: "eid76", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_promotion_m4}', [] ], ""], position: 0 },
            { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_promotion_m4}', [] ], ""], position: 250 }         ]
      }
   }
},
"promotion_m4": {
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
      id: 'Promotion_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','317px','1014px','84px','auto','auto'],
      id: 'promotion_strip',
      fill: ['rgba(0,0,0,0)','images/promotion_strip.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','67px','1014px','583px','auto','auto'],
      id: 'badge_glow',
      fill: ['rgba(0,0,0,0)','images/badge_glow.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['388px','222px','239px','274px','auto','auto'],
      id: 'badge',
      fill: ['rgba(0,0,0,0)','images/badge.png','0px','0px']
   },
   {
      id: 'badge_star',
      type: 'image',
      rect: ['484px','282px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star2',
      type: 'image',
      rect: ['522px','323px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star3',
      type: 'image',
      rect: ['483px','365px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      id: 'badge_star4',
      type: 'image',
      rect: ['445px','323px','48px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/badge_star.png','0px','0px']
   },
   {
      userClass: 'mainMenu',
      id: 'btn_Start',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['421','563','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['330px','86px','359px','77px','auto','auto'],
      id: 'Text2',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'बधाई हो!<br>',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','134px','654px','77px','auto','auto'],
      id: 'Text2Copy',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'आपको तरक्की दी गई है<br>',
      textShadow: ['rgba(7,63,104,1.00)',0,1,10],
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','bold','none','normal']
   },
   {
      type: 'text',
      rect: ['195px','486px','860px','39px','auto','auto'],
      id: 'Text2Copy2',
      filter: [0,0,1,1,0,0,0,0,'rgba(0,0,0,0)',0,0,0],
      align: 'center',
      text: 'प्रमुख, अंतरराष्ट्रीय अन्वेषण ब्यूरो<br>',
      textShadow: ['rgba(0,0,0,1.00)',0,1,8],
      font: ['Verdana, Geneva, sans-serif',30,'rgba(6,253,253,1.00)','bold','none','normal']
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Promotion_bg}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text2Copy}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '48px'],
            ["style", "top", '134px'],
            ["style", "height", '77px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '654px']
         ],
         "${_badge_star2}": [
            ["style", "top", '323px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '522px'],
            ["style", "width", '48px']
         ],
         "${_Text2}": [
            ["subproperty", "textShadow.blur", '10px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '-340px'],
            ["style", "font-size", '36px'],
            ["style", "top", '86px'],
            ["style", "height", '77px'],
            ["subproperty", "textShadow.color", 'rgba(7,63,104,1.00)'],
            ["style", "width", '359px']
         ],
         "${_badge_star3}": [
            ["style", "top", '365px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '483px'],
            ["style", "width", '48px']
         ],
         "${_badge_glow}": [
            ["style", "top", '67px'],
            ["transform", "scaleY", '0.17'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleX", '0.17']
         ],
         "${_badge_star}": [
            ["style", "top", '282px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '484px'],
            ["style", "width", '48px']
         ],
         "${_btn_Start}": [
            ["style", "top", '653px'],
            ["style", "left", '422px'],
            ["style", "cursor", 'pointer']
         ],
         "${_badge_star4}": [
            ["style", "top", '323px'],
            ["transform", "scaleX", '5'],
            ["transform", "scaleY", '5'],
            ["transform", "rotateZ", '-180deg'],
            ["style", "height", '48px'],
            ["style", "opacity", '0'],
            ["style", "left", '445px'],
            ["style", "width", '48px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_badge}": [
            ["style", "top", '222px'],
            ["transform", "scaleY", '2.18'],
            ["transform", "scaleX", '2.18'],
            ["style", "opacity", '0'],
            ["style", "left", '388px'],
            ["style", "display", 'none']
         ],
         "${_promotion_strip}": [
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.01'],
            ["style", "left", '0px'],
            ["style", "top", '317px']
         ],
         "${_Text2Copy2}": [
            ["subproperty", "textShadow.blur", '8px'],
            ["subproperty", "textShadow.offsetH", '0px'],
            ["color", "color", 'rgba(6,253,253,1.00)'],
            ["subproperty", "textShadow.offsetV", '1px'],
            ["style", "left", '1025px'],
            ["style", "font-size", '30px'],
            ["style", "top", '486px'],
            ["style", "height", '39px'],
            ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '860px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4083,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_badge}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInOutBack" },
            { id: "eid81", tween: [ "transform", "${_badge_star4}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2583, duration: 417, easing: "easeOutCirc" },
            { id: "eid54", tween: [ "style", "${_Text2Copy}", "left", '180px', { fromValue: '1025px'}], position: 1000, duration: 250, easing: "easeInOutBack" },
            { id: "eid23", tween: [ "transform", "${_badge}", "scaleY", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid15", tween: [ "transform", "${_badge_glow}", "scaleY", '1', { fromValue: '0.17'}], position: 3083, duration: 615, easing: "easeOutBack" },
            { id: "eid71", tween: [ "style", "${_badge_star3}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid37", tween: [ "transform", "${_badge_star2}", "scaleX", '1', { fromValue: '5'}], position: 1917, duration: 500, easing: "easeOutBack" },
            { id: "eid67", tween: [ "transform", "${_badge_star2}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1917, duration: 417, easing: "easeOutCirc" },
            { id: "eid63", tween: [ "transform", "${_badge_star}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 1583, duration: 417, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_badge}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid38", tween: [ "style", "${_badge_star2}", "opacity", '1', { fromValue: '0'}], position: 1917, duration: 500, easing: "easeOutBack" },
            { id: "eid36", tween: [ "style", "${_badge_star}", "opacity", '1', { fromValue: '0'}], position: 1583, duration: 500, easing: "easeOutBack" },
            { id: "eid14", tween: [ "transform", "${_badge_glow}", "scaleX", '1', { fromValue: '0.17'}], position: 3083, duration: 615, easing: "easeOutBack" },
            { id: "eid8", tween: [ "style", "${_promotion_strip}", "display", 'block', { fromValue: 'none'}], position: 410, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Text2Copy2}", "left", '78px', { fromValue: '1025px'}], position: 3583, duration: 250, easing: "easeInOutBack" },
            { id: "eid55", tween: [ "style", "${_Text2}", "left", '330px', { fromValue: '-340px'}], position: 750, duration: 250, easing: "easeInOutBack" },
            { id: "eid80", tween: [ "transform", "${_badge_star4}", "scaleY", '1', { fromValue: '5'}], position: 2583, duration: 500, easing: "easeOutBack" },
            { id: "eid1", tween: [ "style", "${_btn_Start}", "left", '422px', { fromValue: '422px'}], position: 0, duration: 0 },
            { id: "eid46", tween: [ "style", "${_btn_Start}", "top", '563px', { fromValue: '653px'}], position: 3833, duration: 250, easing: "easeOutBack" },
            { id: "eid70", tween: [ "transform", "${_badge_star3}", "scaleX", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid33", tween: [ "transform", "${_badge_star}", "scaleY", '1', { fromValue: '5'}], position: 1583, duration: 500, easing: "easeOutBack" },
            { id: "eid13", tween: [ "style", "${_badge_glow}", "display", 'block', { fromValue: 'none'}], position: 3083, duration: 0 },
            { id: "eid39", tween: [ "transform", "${_badge_star2}", "scaleY", '1', { fromValue: '5'}], position: 1917, duration: 500, easing: "easeOutBack" },
            { id: "eid78", tween: [ "transform", "${_badge_star4}", "scaleX", '1', { fromValue: '5'}], position: 2583, duration: 500, easing: "easeOutBack" },
            { id: "eid22", tween: [ "transform", "${_badge}", "scaleX", '1', { fromValue: '2.18'}], position: 1250, duration: 500, easing: "easeInOutBack" },
            { id: "eid4", tween: [ "style", "${_Promotion_bg}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutQuint" },
            { id: "eid32", tween: [ "transform", "${_badge_star}", "scaleX", '1', { fromValue: '5'}], position: 1583, duration: 500, easing: "easeOutBack" },
            { id: "eid79", tween: [ "style", "${_badge_star4}", "opacity", '1', { fromValue: '0'}], position: 2583, duration: 500, easing: "easeOutBack" },
            { id: "eid72", tween: [ "transform", "${_badge_star3}", "scaleY", '1', { fromValue: '5'}], position: 2250, duration: 500, easing: "easeOutBack" },
            { id: "eid7", tween: [ "transform", "${_promotion_strip}", "scaleY", '1', { fromValue: '0.01'}], position: 410, duration: 340, easing: "easeOutBack" },
            { id: "eid73", tween: [ "transform", "${_badge_star3}", "rotateZ", '0deg', { fromValue: '-180deg'}], position: 2250, duration: 417, easing: "easeOutCirc" }         ]
      }
   }
},
"M01": {
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
      id: 'BG15',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG15.jpg','0px','0px']
   },
   {
      rect: ['66px','61px','232px','113px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],['142'],[],['1','1.44']],
      id: 'pointer',
      type: 'image',
      rect: ['222px','45px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'अच्छा काम किया, जियो। हम दोनों को पदोन्नत किया गया है। अब तुम इंस्पेक्टर हो गयें हो। और मैं अन्वेषण अधिकारी।',
      align: 'center',
      rect: ['74px','70px','213px','104px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '61px'],
            ["style", "height", '113px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '66px'],
            ["style", "width", '232px']
         ],
         "${_Text}": [
            ["style", "top", '70px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '16px'],
            ["style", "height", '104px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '74px'],
            ["style", "width", '213px']
         ],
         "${_BG15}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '142deg'],
            ["style", "left", '222px'],
            ["style", "top", '45px']
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
"M03": {
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
      id: 'BG8',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M1_BG08.jpg','0px','0px']
   },
   {
      rect: ['66px','36px','292px','123px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],['142'],[],['1','1.44']],
      id: 'pointer',
      type: 'image',
      rect: ['222px','28px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'शानदार काम, जियो। श्री जी. और उसकी टीम अब जेल में है। साथ ही, तुम्हें अंतरराष्ट्रीय अन्वेषण ब्यूरो (आईबीआई) में विशेष अधिकारी नियुक्त किया गया है। मेरी ओर से बधाईयां।<br>',
      align: 'center',
      rect: ['76px','48px','271px','116px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '36px'],
            ["style", "height", '123px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '66px'],
            ["style", "width", '292px']
         ],
         "${_Text}": [
            ["style", "top", '48px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '16px'],
            ["style", "height", '116px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '76px'],
            ["style", "width", '271px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.44019'],
            ["transform", "rotateZ", '142deg'],
            ["style", "left", '222px'],
            ["style", "top", '28px']
         ],
         "${_BG8}": [
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
"M04": {
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
      id: 'M4_BG05',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG05.jpg','0px','0px']
   },
   {
      rect: ['28px','466px','394px','161px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['42px','476px','368px','141px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2',
      text: 'लड़ाई कठिन थी।  जिओ और उसकी टीम ने आखिरकार रा-हाका और उसकी सेना को परास्त कर ही दिया। फिलहाल पृथ्वी को रा-हाका से मुक्ति मिली। इन कठिन परिस्थितियों का सामना करते हुए मनुष्य और जुडिक्स एक दूसरे के करीब आ गये। अब जुडिक्स पृथ्वी को सचमुच अपना घर मान सके।',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '161px'],
            ["style", "top", '466px'],
            ["style", "left", '28px'],
            ["style", "width", '394px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text2}": [
            ["style", "top", '476px'],
            ["style", "text-align", 'left'],
            ["style", "width", '368px'],
            ["style", "height", '141px'],
            ["style", "font-style", 'italic'],
            ["style", "left", '42px'],
            ["style", "font-size", '16px']
         ],
         "${_M4_BG05}": [
            ["style", "top", '0px'],
            ["style", "height", '650px'],
            ["style", "left", '0px'],
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "end2");
