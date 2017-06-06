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
            ["style", "width", '1014px'],
            ["style", "height", '650px'],
            ["style", "overflow", 'hidden']
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','267px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'మీ ఫ్రేముని రా హాకా సైన్యం నుంచి దాచి పెట్టండి. వాళ్ళు మీ దాని జాడ తెలుసుకునే లోపల మీరు వాళ్ళ టెలిపోర్టింగ్ ఫ్రేమ్ కోసం ప్రయత్నించి పట్టుకోండి. ఫ్రేము యొక్క అన్ని నాలుగు వెర్టిసుల జాడ తెలుసుకోవడం దాన్ని డీయాక్టివేట్ చేస్తుంది.<br><br>కేసుకి వెళ్ళడం కోసం నెక్స్ట్ క్లిక్ చెయ్యండి.<br>',
      align: 'left',
      rect: ['155px','270px','291px','152px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6Copy',
      text: 'మిషన్ గురించి క్లుప్తంగా',
      align: 'center',
      rect: ['155px','221px','288px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '270px'],
            ["style", "width", '291px'],
            ["style", "text-align", 'left'],
            ["style", "height", '152px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px'],
            ["style", "top", '267px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '221px'],
            ["style", "font-size", '25px'],
            ["style", "text-align", 'center'],
            ["style", "height", '45px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
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
      rect: ['353px','83px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],['-253']],
      type: 'image',
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
      rect: ['78px','33px','198px','50px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text',
      text: 'మనం చాలా వరకు ఫ్రేములు డీయాక్టివేట్ చేసాం జియో',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['668px','516px','35px','104px','auto','auto'],
      id: 'pointerCopy2',
      transform: [[],['-127']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['709px','373px','270px','106px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['719px','379px','252px','101px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy2',
      text: 'దీన్ని గురించి టీమ్ ని ఎలర్ట్ చేద్దాం. ఇప్పుడు మనం దీన్ని ముగించాలి; మనం రా హాకా ఫ్రేముల్ని<br> డీయాక్టివేట్ చెయ్యాలి<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['222px','308px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[],['-227'],[],['1','0.892']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['204px','473px','35px','104px','auto','auto'],
      id: 'pointerCopy4',
      transform: [[],['-400'],[],['1','0.892']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['166px','373px','311px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['173px','376px','298px','52px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy',
      text: 'కాని మనల్ని తికమకపెట్టడానికి రాహాకా వేరే వేరే రకాల ఫ్రేములు ఉపయోగిస్తున్నాడు.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['84px','568px','238px','61px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['92px','573px','220px','55px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy4',
      text: 'అవును. మన సి-రే కెమెరాల్లో వచ్చిన వేరే వేరే రకాల ఫ్రేమ,లు చూడు.',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "line-height", '15px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '92px'],
            ["style", "width", '220px'],
            ["style", "top", '573px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '13px'],
            ["style", "height", '55px']
         ],
         "${_RoundRect}": [
            ["style", "height", '57px'],
            ["style", "top", '29px'],
            ["style", "left", '69px'],
            ["style", "width", '219px']
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
         ],
         "${_TextCopy}": [
            ["style", "line-height", '15px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '173px'],
            ["style", "width", '298px'],
            ["style", "top", '376px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '52px'],
            ["style", "font-size", '13px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '378px'],
            ["style", "font-size", '14px'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleX", '1'],
            ["style", "height", '36px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '172px'],
            ["style", "width", '248px']
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
            ["style", "left", '668px'],
            ["style", "top", '516px']
         ],
         "${_BG04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '373px'],
            ["style", "height", '55px'],
            ["style", "left", '166px'],
            ["style", "width", '311px']
         ],
         "${_TextCopy2}": [
            ["style", "line-height", '15px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '719px'],
            ["style", "width", '252px'],
            ["style", "top", '379px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '101px'],
            ["style", "font-size", '13px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '373px'],
            ["style", "height", '106px'],
            ["style", "left", '709px'],
            ["style", "width", '270px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text}": [
            ["style", "line-height", '15px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '78px'],
            ["style", "width", '198px'],
            ["style", "top", '33px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '13px'],
            ["style", "height", '50px']
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
         "${_RoundRectCopy4}": [
            ["style", "height", '61px'],
            ["style", "top", '568px'],
            ["style", "left", '84px'],
            ["style", "width", '238px']
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
         "${_M4_BG03}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
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
         duration: 2815,
         autoPlay: true,
         timeline: [
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid177", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid176", tween: [ "style", "${_M4_BG03}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeOutCirc" },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0 },
            { id: "eid174", tween: [ "style", "${_Stage_transition}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
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
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px'],
            ["style", "top", '593px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_btn_nextCopy2}": [
            ["style", "display", 'block'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px']
         ],
         "${_Stage_transitionCopy}": [
            ["style", "display", 'none']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'block'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px']
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
         duration: 2805,
         autoPlay: false,
         timeline: [
            { id: "eid9", tween: [ "style", "${_M4_BG04}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid184", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid182", tween: [ "style", "${_Stage_transitionCopy}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid171", tween: [ "style", "${_btn_nextCopy2}", "top", '593px', { fromValue: '593px'}], position: 250, duration: 0 },
            { id: "eid172", tween: [ "style", "${_btn_nextCopy2}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid169", tween: [ "style", "${_btn_nextCopy2}", "left", '953px', { fromValue: '953px'}], position: 250, duration: 0 },
            { id: "eid170", tween: [ "style", "${_btn_nextCopy2}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid20", tween: [ "style", "${_M4_BG04B}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid183", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid30", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_btn_next}", "left", '459px', { fromValue: '953px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid8", tween: [ "style", "${_M4_BG04}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
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
      transform: [[0,0],['49'],['4','-32'],['0.689','0.567']],
      id: 'pointerCopy5',
      type: 'image',
      rect: ['74px','53px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['23px','149px','266px','95px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['205px','22px','291px','33px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy5',
      text: 'నన్ను రక్షించినందుకు మీకు నేను ధాంక్స్ చెప్పాలనుకున్నాను జియో<br>మీరు ఎయిర్ ఫీల్డ్ దగ్గర డియాక్టివేట్ చేసిన ఫ్రేములో నేను ఉన్నాను.',
      align: 'center',
      rect: ['29px','153px','254px','89px','auto','auto']
   },
   {
      transform: [[0,0],['-148'],['0','-32'],['0.689','0.916']],
      id: 'pointerCopy4',
      type: 'image',
      rect: ['763px','-74px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['715px','25px','230px','59px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'left',
      id: 'TextCopy7',
      text: 'ఐబిఐలో మీరుండటంతో భూమి మీద మేమందరం సురక్షితంగా ఉన్నాం. ',
      rect: ['723px','29px','212px','59px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [[0,0],['-121'],['0','-32'],['0.689','0.916']],
      id: 'pointerCopy7',
      type: 'image',
      rect: ['853px','337px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['813px','331px','177px','125px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy9',
      text: 'కాని మనం అతనిని వమ్ము చేయగలం. మనం మనవాటిని జాగ్రత్తగా దాచుకుని మిగిలిన ఫ్రేముల్ని డీయాక్టివేట్ చేయగలమని నా నమ్మకం.',
      align: 'center',
      rect: ['817px','335px','169px','120px','auto','auto']
   },
   {
      transform: [[0,0],['24'],['0','-32'],['0.689','1.096']],
      id: 'pointerCopy3',
      type: 'image',
      rect: ['281px','192px','35px','104px','auto','auto'],
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
      rect: ['88px','266px','309px','36px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy6',
      text: 'ఇది నాకు గర్వకారణం సర్, ఇంకా ఆనందం కూడా',
      align: 'left',
      rect: ['96px','271px','291px','23px','auto','auto']
   },
   {
      transform: [[0,0],['199'],['0','-32'],['0.472','0.733']],
      id: 'pointerCopy8',
      type: 'image',
      rect: ['185px','234px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['23px','331px','397px','43px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy10',
      text: 'కాని రా-హాకా కొత్తవి ఇంకా కొత్తవి ఫ్రేములతో వస్తూ ఉంటాడు',
      align: 'left',
      rect: ['34px','338px','390px','24px','auto','auto']
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
      rect: ['120px','591px','462px','36px','auto','auto'],
      id: 'RoundRectCopy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy11',
      text: 'మన ఫ్రేములు తెలుసుకోవడంలో అతని సైన్యం కూడా చురుగ్గా తయారవుతోంది',
      align: 'left',
      rect: ['128px','595px','442px','30px','auto','auto']
   },
   {
      rect: ['592px','268px','212px','34px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy8',
      text: 'మీ ప్రశంసలకి ధాంక్యూ సర్',
      align: 'left',
      rect: ['601px','272px','194px','30px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'TextCopy4',
      text: 'కద్రి ప్రెసిడెంట్ జియోకి కాల్ చేసారు.',
      align: 'left',
      rect: ['210px','26px','286px','24px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy11}": [
            ["style", "top", '595px'],
            ["style", "width", '442px'],
            ["style", "text-align", 'left'],
            ["style", "height", '30px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '128px'],
            ["style", "font-size", '13px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '22px'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '33px'],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '205px'],
            ["style", "width", '291px']
         ],
         "${_RoundRectCopy8}": [
            ["style", "top", '331px'],
            ["style", "height", '125px'],
            ["style", "left", '813px'],
            ["style", "width", '177px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '53px'],
            ["transform", "rotateZ", '49deg'],
            ["transform", "skewY", '-32.45deg'],
            ["transform", "skewX", '4.2deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '74px'],
            ["transform", "scaleY", '0.56731']
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
            ["style", "top", '268px'],
            ["style", "height", '34px'],
            ["style", "left", '592px'],
            ["style", "width", '212px']
         ],
         "${_TextCopy10}": [
            ["style", "top", '338px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '24px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '34px'],
            ["style", "width", '390px']
         ],
         "${_RoundRectCopy10}": [
            ["style", "top", '591px'],
            ["style", "height", '36px'],
            ["style", "left", '120px'],
            ["style", "width", '462px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '-74px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-148deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '763px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy4}": [
            ["style", "top", '26px'],
            ["style", "width", '286px'],
            ["style", "text-align", 'left'],
            ["style", "height", '24px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '210px'],
            ["style", "font-size", '13px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '58px'],
            ["style", "width", '270px'],
            ["style", "height", '69px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '224px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "height", '36px'],
            ["style", "top", '266px'],
            ["style", "left", '88px'],
            ["style", "width", '309px']
         ],
         "${_TextCopy5}": [
            ["style", "top", '153px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '89px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '29px'],
            ["style", "width", '254px']
         ],
         "${_TextCopy7}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '723px'],
            ["style", "font-size", '13px'],
            ["style", "top", '29px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '212px'],
            ["style", "height", '59px']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '192px'],
            ["transform", "scaleY", '1.09615'],
            ["transform", "rotateZ", '24deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '281px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy8}": [
            ["style", "top", '234px'],
            ["transform", "scaleY", '0.73321'],
            ["transform", "rotateZ", '199deg'],
            ["transform", "scaleX", '0.47233'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '185px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_RoundRectCopy9}": [
            ["style", "top", '331px'],
            ["style", "height", '43px'],
            ["style", "left", '23px'],
            ["style", "width", '397px']
         ],
         "${_TextCopy8}": [
            ["style", "top", '272px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '30px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '601px'],
            ["style", "width", '194px']
         ],
         "${_pointerCopy7}": [
            ["style", "top", '337px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-121deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '853px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_RoundRectCopy6}": [
            ["style", "height", '59px'],
            ["style", "top", '25px'],
            ["style", "left", '715px'],
            ["style", "width", '230px']
         ],
         "${_TextCopy9}": [
            ["style", "top", '335px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '120px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '817px'],
            ["style", "width", '169px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '271px'],
            ["style", "width", '291px'],
            ["style", "text-align", 'left'],
            ["style", "height", '23px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '96px'],
            ["style", "font-size", '13px']
         ],
         "${_pointer}": [
            ["style", "top", '175px'],
            ["transform", "scaleY", '1.09615'],
            ["transform", "rotateZ", '37deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '743px'],
            ["transform", "skewY", '-32.45deg']
         ],
         "${_pointerCopy9}": [
            ["style", "top", '515px'],
            ["transform", "scaleY", '0.73321'],
            ["transform", "rotateZ", '402deg'],
            ["transform", "scaleX", '0.47233'],
            ["transform", "skewY", '-32.45deg'],
            ["style", "left", '391px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy5}": [
            ["style", "top", '149px'],
            ["style", "height", '95px'],
            ["style", "left", '23px'],
            ["style", "width", '266px']
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','266px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',12,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'మీ ఫ్రేముని రా హాకా సైన్యం నుంచి దాచి పెట్టండి. వాళ్ళు మీ దాని జాడ తెలుసుకునే లోపల మీరు వాళ్ళ టెలిపోర్టింగ్ ఫ్రేమ్ కోసం ప్రయత్నించి పట్టుకోండి. ఫ్రేము యొక్క అన్ని నాలుగు వెర్టిసుల జాడ తెలుసుకోవడం దాన్ని డీయాక్టివేట్ చేస్తుంది.<br><br>కేసుకి వెళ్ళడం కోసం నెక్స్ట్ క్లిక్ చెయ్యండి.',
      align: 'left',
      rect: ['155px','269px','288px','156px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6Copy',
      text: 'మిషన్ గురించి క్లుప్తంగా',
      align: 'center',
      rect: ['155px','219px','288px','43px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '269px'],
            ["style", "text-align", 'left'],
            ["style", "width", '288px'],
            ["style", "height", '156px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "font-size", '12px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px'],
            ["style", "top", '266px']
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
            ["style", "height", '43px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "font-size", '25px']
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
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text',
      id: 'Text',
      text: 'తుది సమరం ',
      align: 'center',
      rect: ['426px','215px','468px','62px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,246,0,1.00)','normal','none',''],
      type: 'text',
      align: 'center',
      id: 'TextCopy',
      text: 'లెవెల్ 3',
      rect: ['413px','294px','223px','62px','auto','auto'],
      userClass: 'level2'
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
            ["style", "width", '468px'],
            ["style", "top", '215px'],
            ["style", "text-align", 'center'],
            ["style", "height", '62px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '40px']
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
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
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
            { id: "eid371", tween: [ "style", "${_Text}", "left", '204px', { fromValue: '-303px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '265px', { fromValue: '204px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '265px'}], position: 1583, duration: 417, easing: "easeInQuad" },
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
})(jQuery, AdobeEdge, "trans4");
