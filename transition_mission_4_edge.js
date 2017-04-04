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
            id:'level_03',
            type:'rect',
            rect:['350','260','auto','auto','auto','auto'],
            userClass:"lvlScreen"
         },
         {
            id:'level_02',
            type:'rect',
            rect:['2','0','auto','auto','auto','auto'],
            userClass:"lvlScreen"
         }],
         symbolInstances: [
         {
            id:'level_03',
            symbolName:'level_03'
         },
         {
            id:'level_02',
            symbolName:'level_02'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_level_02}": [
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_level_03}": [
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
            { id: "eid173", tween: [ "style", "${_level_02}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_level_03}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid4", tween: [ "style", "${_level_03}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid1", tween: [ "style", "${_level_02}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
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
            ["style", "height", '66px'],
            ["color", "background-color", 'rgba(0,0,0,1)'],
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
"M4_BG04b": {
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
      rect: ['155px','277px','288px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      type: 'text',
      rect: ['152px','286px','298px','124px','auto','auto'],
      id: 'Text6',
      text: 'Hide your frame from Ra-Haka’s army.<br><br>Then try and capture their teleporting frame before they locate yours. Locating all four vertices of a frame deactivates it.<br><br>Click next to move on to the case.<br>',
      align: 'left',
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['155px','227px','288px','39px','auto','auto'],
      id: 'Text6Copy',
      text: 'MISSION BRIEF',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',34,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '286px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '124px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '152px'],
            ["style", "width", '298px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_BG11}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "width", '288px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "font-size", '34px']
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
      id: 'BG04',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M4_BG03.jpg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['353px','83px','35px','104px','auto','auto'],
      transform: [[0,0],['-253']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['69px','29px','219px','57px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['78px','40px','198px','40px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text',
      text: 'We have deactivated quite a few frames, Geo.',
      align: 'center',
      type: 'text'
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['677px','494px','35px','104px','auto','auto'],
      transform: [[0,0],['-127']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['709px','373px','270px','85px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['728px','388px','232px','55px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy2',
      text: 'Alert the team about this. Now let’s go for it; We must deactivate Ra-Haka’s frames.',
      align: 'center',
      type: 'text'
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['222px','308px','35px','104px','auto','auto'],
      transform: [[0,0],['-227'],[],['1','0.892']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy4',
      rect: ['204px','473px','35px','104px','auto','auto'],
      transform: [[0,0],['-400'],[],['1','0.892']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['166px','378px','275px','47px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['171px','385px','270px','35px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy',
      text: 'Yes, but Ra-Haka is using different kinds of frames to confuse us.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['84px','568px','192px','61px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['89px','574px','180px','55px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy4',
      text: ' Yes, look at the different frames our c-Ray cameras have captured.<br>',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '89px'],
            ["style", "width", '180px'],
            ["style", "top", '574px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '55px'],
            ["style", "font-size", '14px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '378px'],
            ["style", "width", '248px'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleX", '1'],
            ["style", "height", '36px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '172px'],
            ["style", "font-size", '14px']
         ],
         "${_pointerCopy4}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.89248'],
            ["transform", "rotateZ", '-400deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '204px'],
            ["style", "top", '473px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '568px'],
            ["style", "height", '61px'],
            ["style", "left", '84px'],
            ["style", "width", '192px']
         ],
         "${_RoundRect}": [
            ["style", "top", '29px'],
            ["style", "height", '57px'],
            ["style", "left", '69px'],
            ["style", "width", '219px']
         ],
         "${_pointerCopy2}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.17739'],
            ["transform", "rotateZ", '-127deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '677px'],
            ["style", "top", '494px']
         ],
         "${_BG04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '47px'],
            ["style", "top", '378px'],
            ["style", "left", '166px'],
            ["style", "width", '275px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "height", '85px'],
            ["style", "top", '373px'],
            ["style", "left", '709px'],
            ["style", "width", '270px']
         ],
         "${_TextCopy2}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '728px'],
            ["style", "width", '232px'],
            ["style", "top", '388px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '14px'],
            ["style", "height", '55px']
         ],
         "${_Text}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '78px'],
            ["style", "width", '198px'],
            ["style", "top", '40px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '40px'],
            ["style", "font-size", '14px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.17739'],
            ["transform", "rotateZ", '-253deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '353px'],
            ["style", "top", '83px']
         ],
         "${_TextCopy}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '171px'],
            ["style", "width", '270px'],
            ["style", "top", '385px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '14px'],
            ["style", "height", '35px']
         ],
         "${_pointerCopy}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.89248'],
            ["transform", "rotateZ", '-227deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '222px'],
            ["style", "top", '308px']
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
"level_02": {
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
      id: 'M4_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG03b',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['0','0','auto','auto','auto','auto'],
      id: 'Stage_transition',
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
      userClass: 'btnClick mainSND',
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
      id: 'M4_BG03b',
      symbolName: 'M4_BG03b'
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
      id: 'Stage_transition',
      symbolName: 'Stage_transition'
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
         "${_M4_BG03}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_Stage_transition}": [
            ["style", "display", 'none']
         ],
         "${_M4_BG03b}": [
            ["style", "top", '0px'],
            ["style", "left", '1012px'],
            ["style", "display", 'block']
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
         duration: 2815,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid176", tween: [ "style", "${_M4_BG03}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid177", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0 },
            { id: "eid174", tween: [ "style", "${_Stage_transition}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid175", tween: [ "style", "${_M4_BG03b}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid178", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid167", tween: [ "style", "${_M4_BG03b}", "left", '0px', { fromValue: '1012px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid179", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transition}', [] ], ""], position: 0 },
            { id: "eid180", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transition}', [] ], ""], position: 555 }         ]
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
"level_03": {
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
      id: 'M4_BG04',
      type: 'rect',
      rect: ['419','297','auto','auto','auto','auto']
   },
   {
      id: 'M4_BG04B',
      type: 'rect',
      rect: ['-2px','-8px','auto','auto','auto','auto']
   },
   {
      userClass: ' trnasStage',
      display: 'none',
      type: 'rect',
      id: 'Stage_transitionCopy',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick mainSND',
      id: 'btn_next',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      id: 'btn_nextCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'mainSND',
      type: 'rect',
      display: 'none',
      id: 'btn_back',
      cursor: ['pointer'],
      rect: ['8px','593px','auto','auto','auto','auto']
   },
   {
      userClass: 'btnClick ',
      id: 'btn_nextCopy2',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'btn_nextCopy2',
      symbolName: 'btn_next'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'M4_BG04',
      symbolName: 'M4_BG04'
   },
   {
      id: 'M4_BG04B',
      symbolName: 'M4_BG04b'
   },
   {
      id: 'Stage_transitionCopy',
      symbolName: 'Stage_transition'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_M4_BG04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_M4_BG04B}": [
            ["style", "top", '-8px'],
            ["style", "left", '1014px']
         ],
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
         "${_btn_nextCopy2}": [
            ["style", "top", '593px'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${_Stage_transitionCopy}": [
            ["style", "display", 'none']
         ],
         "${_btn_nextCopy}": [
            ["style", "top", '593px'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
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
         duration: 2805,
         autoPlay: false,
         timeline: [
            { id: "eid9", tween: [ "style", "${_M4_BG04}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid184", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid169", tween: [ "style", "${_btn_nextCopy2}", "left", '953px', { fromValue: '953px'}], position: 250, duration: 0 },
            { id: "eid170", tween: [ "style", "${_btn_nextCopy2}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid171", tween: [ "style", "${_btn_nextCopy2}", "top", '593px', { fromValue: '593px'}], position: 250, duration: 0 },
            { id: "eid172", tween: [ "style", "${_btn_nextCopy2}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid182", tween: [ "style", "${_Stage_transitionCopy}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid20", tween: [ "style", "${_M4_BG04B}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid183", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid8", tween: [ "style", "${_M4_BG04}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_btn_next}", "left", '459px', { fromValue: '953px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid30", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid168", tween: [ "style", "${_btn_nextCopy2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid185", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transitionCopy}', [] ], ""], position: 0 },
            { id: "eid186", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transitionCopy}', [] ], ""], position: 555 }         ]
      }
   }
},
"M4_BG04": {
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
      fill: ['rgba(0,0,0,0)','images/M4_BG04.jpg','0px','0px']
   },
   {
      transform: [[0,0],['-94'],['0','-32'],['0.689','0.567']],
      id: 'pointerCopy5',
      type: 'image',
      rect: ['224px','-9px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['219px','55px','261px','59px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['205px','22px','291px','27px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy5',
      text: 'I wanted to thank you for saving me, Geo. I was in the frame you deactivated in the airfield.',
      align: 'center',
      rect: ['224px','58px','250px','53px','auto','auto']
   },
   {
      transform: [[0,0],['-148'],['0','-32'],['0.689','0.916']],
      id: 'pointerCopy4',
      type: 'image',
      rect: ['763px','-74px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['715px','25px','206px','44px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy7',
      text: 'With you in the IBI, we are all safe on Earth.',
      align: 'left',
      rect: ['720px','29px','193px','41px','auto','auto']
   },
   {
      transform: [[0,0],['-121'],['0','-32'],['0.689','0.916']],
      id: 'pointerCopy7',
      type: 'image',
      rect: ['852px','327px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['813px','331px','177px','114px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy9',
      text: 'Yes. But we can outsmart him. I am sure we can deactivate the remaining frames while we hide ours better.',
      align: 'center',
      rect: ['815px','336px','169px','104px','auto','auto']
   },
   {
      transform: [[0,0],['37'],['0','-32'],['0.689','1.096']],
      id: 'pointerCopy3',
      type: 'image',
      rect: ['249px','183px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['37'],['0','-32'],['0.689','1.096']],
      id: 'pointer',
      type: 'image',
      rect: ['743px','175px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['26px','275px','275px','27px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy6',
      text: 'It’s an honour, Sir, and a pleasure.',
      align: 'left',
      rect: ['33px','280px','270px','16px','auto','auto']
   },
   {
      transform: [[0,0],['199'],['0','-32'],['0.472','0.733']],
      id: 'pointerCopy8',
      type: 'image',
      rect: ['185px','234px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['23px','331px','397px','27px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy10',
      text: 'But Ra-Haka comes up with newer and newer frames. ',
      align: 'left',
      rect: ['30px','336px','390px','16px','auto','auto']
   },
   {
      transform: [[0,0],['402'],['0','-32'],['0.472','0.733']],
      id: 'pointerCopy9',
      type: 'image',
      rect: ['391px','515px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['174px','600px','408px','27px','auto','auto'],
      id: 'RoundRectCopy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy11',
      text: 'His army is also getting smarter at finding our frames.',
      align: 'left',
      rect: ['185px','605px','390px','16px','auto','auto']
   },
   {
      rect: ['529px','275px','275px','27px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy8',
      text: 'Thank you, Sir, for your appreciation.',
      align: 'left',
      rect: ['536px','280px','270px','16px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'TextCopy4',
      text: 'The President of Quadri has called Geo.',
      align: 'left',
      rect: ['210px','26px','286px','16px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy11}": [
            ["style", "top", '605px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '185px'],
            ["style", "width", '390px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '22px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '27px'],
            ["style", "left", '205px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '291px']
         ],
         "${_RoundRectCopy8}": [
            ["style", "height", '114px'],
            ["style", "top", '331px'],
            ["style", "left", '813px'],
            ["style", "width", '177px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '-9px'],
            ["transform", "scaleY", '0.56731'],
            ["transform", "rotateZ", '-94deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '224px'],
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
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRectCopy7}": [
            ["style", "height", '27px'],
            ["style", "top", '275px'],
            ["style", "left", '529px'],
            ["style", "width", '275px']
         ],
         "${_TextCopy10}": [
            ["style", "top", '336px'],
            ["style", "width", '390px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '30px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy10}": [
            ["style", "height", '27px'],
            ["style", "top", '600px'],
            ["style", "left", '174px'],
            ["style", "width", '408px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '-74px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-148deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '763px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_TextCopy4}": [
            ["style", "top", '26px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '210px'],
            ["style", "width", '286px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '58px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '69px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '224px'],
            ["style", "width", '270px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '29px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '41px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '720px'],
            ["style", "width", '193px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '58px'],
            ["style", "width", '250px'],
            ["style", "text-align", 'center'],
            ["style", "height", '53px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '224px'],
            ["style", "font-size", '14px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '280px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '16px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '33px'],
            ["style", "width", '270px']
         ],
         "${_pointerCopy9}": [
            ["style", "top", '515px'],
            ["transform", "scaleY", '0.73321'],
            ["transform", "rotateZ", '402deg'],
            ["transform", "scaleX", '0.47233'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '391px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_TextCopy9}": [
            ["style", "top", '336px'],
            ["style", "width", '169px'],
            ["style", "text-align", 'center'],
            ["style", "height", '104px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '815px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy6}": [
            ["style", "top", '25px'],
            ["style", "height", '44px'],
            ["style", "left", '715px'],
            ["style", "width", '206px']
         ],
         "${_pointerCopy7}": [
            ["style", "top", '327px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-121deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '852px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy8}": [
            ["style", "top", '280px'],
            ["style", "width", '270px'],
            ["style", "text-align", 'left'],
            ["style", "height", '16px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '536px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy9}": [
            ["style", "height", '27px'],
            ["style", "top", '331px'],
            ["style", "left", '23px'],
            ["style", "width", '397px']
         ],
         "${_pointerCopy8}": [
            ["style", "top", '234px'],
            ["transform", "scaleY", '0.73321'],
            ["transform", "rotateZ", '199deg'],
            ["transform", "scaleX", '0.47233'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '185px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy3}": [
            ["style", "top", '183px'],
            ["transform", "scaleY", '1.09615'],
            ["transform", "rotateZ", '37deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '249px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_pointer}": [
            ["style", "top", '175px'],
            ["transform", "scaleY", '1.09615'],
            ["transform", "rotateZ", '37deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '743px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '275px'],
            ["style", "height", '27px'],
            ["style", "left", '26px'],
            ["style", "width", '275px']
         ],
         "${_RoundRectCopy5}": [
            ["style", "height", '59px'],
            ["style", "top", '55px'],
            ["style", "left", '219px'],
            ["style", "width", '261px']
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
"M4_BG03b": {
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
      rect: ['155px','277px','288px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      type: 'text',
      rect: ['150px','278px','303px','149px','auto','auto'],
      id: 'Text6',
      text: 'Hide your frame from Ra-Haka’s army.<br><br>Then try and capture their teleporting frame before they locate yours. Locating all four vertices of a frame deactivates it.<br><br>Click next to move on to the case.<br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['155px','227px','288px','39px','auto','auto'],
      id: 'Text6Copy',
      text: 'MISSION BRIEF',
      align: 'center',
      font: ['Verdana, Geneva, sans-serif',34,'rgba(255,255,255,1.00)','normal','none','normal']
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
            ["style", "height", '1px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "font-size", '34px'],
            ["style", "text-align", 'center'],
            ["style", "height", '39px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
         ],
         "${_Text6}": [
            ["style", "top", '278px'],
            ["style", "text-align", 'left'],
            ["style", "height", '149px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '150px'],
            ["style", "width", '303px']
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
      rect: ['0px','0px','1014px','652px','auto','auto'],
      id: 'feedback_m1_bg',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/feedback_m4_bg.jpg','0px','0px']
   },
   {
      rect: ['0px','283px','1014px','84px','auto','auto'],
      id: 'stage_strip',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/stage_strip.png','0px','0px']
   },
   {
      rect: ['426px','229px','302px','48px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'Final Battle',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['413px','294px','223px','62px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,246,0,1.00)','normal','none',''],
      userClass: 'level2',
      id: 'TextCopy',
      text: 'Level 3',
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
            ["style", "top", '229px'],
            ["style", "text-align", 'center'],
            ["style", "height", '48px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '40px']
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
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
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
         autoPlay: true,
         timeline: [
            { id: "eid372", tween: [ "style", "${_TextCopy}", "left", '395px', { fromValue: '1023px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "style", "${_TextCopy}", "left", '385px', { fromValue: '395px'}], position: 1000, duration: 583 },
            { id: "eid395", tween: [ "style", "${_TextCopy}", "left", '-202px', { fromValue: '385px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid388", tween: [ "transform", "${_stage_strip}", "scaleY", '1', { fromValue: '0.05'}], position: 83, duration: 333, easing: "easeOutBack" },
            { id: "eid391", tween: [ "transform", "${_stage_strip}", "scaleY", '0.05', { fromValue: '1'}], position: 1917, duration: 250, easing: "easeInCirc" },
            { id: "eid402", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid401", tween: [ "style", "${_stage_strip}", "display", 'block', { fromValue: 'none'}], position: 84, duration: 0, easing: "easeInCirc" },
            { id: "eid400", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0, easing: "easeInCirc" },
            { id: "eid371", tween: [ "style", "${_Text}", "left", '356px', { fromValue: '-303px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '431px', { fromValue: '356px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '431px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid394", tween: [ "style", "${_feedback_m1_bg}", "opacity", '1', { fromValue: '0'}], position: 42, duration: 125 },
            { id: "eid405", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_feedback_m1_bg}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "trans4");
