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
            id:'mainGameUI',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"mainGameUI"
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['87px','436px','147px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         },
         {
            id:'RectangleCopy',
            type:'rect',
            rect:['239px','436px','111px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         },
         {
            id:'RectangleCopy2',
            type:'rect',
            rect:['356px','436px','155px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         },
         {
            id:'RectangleCopy3',
            type:'rect',
            rect:['517px','436px','155px','32px','auto','auto'],
            fill:["rgba(192,192,192,0.10)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            userClass:"bucket"
         },
         {
            id:'btn_ask',
            type:'rect',
            rect:['660','28','auto','auto','auto','auto'],
            userClass:"ask"
         },
         {
            id:'btn_release',
            display:'none',
            type:'rect',
            rect:['467','454','auto','auto','auto','auto'],
            userClass:"clue"
         },
         {
            id:'Stage_transition',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"trnasStage"
         }],
         symbolInstances: [
         {
            id:'btn_ask',
            symbolName:'btn_ask'
         },
         {
            id:'mainGameUI',
            symbolName:'mainGameUI'
         },
         {
            id:'btn_release',
            symbolName:'btn_release'
         },
         {
            id:'Stage_transition',
            symbolName:'Stage_transition'
         }
         ]
      },
   states: {
      "Base State": {
         "${_btn_ask}": [
            ["style", "left", '691px'],
            ["style", "top", '436px']
         ],
         "${_Stage_transition}": [
            ["style", "display", 'none']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '436px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '517px'],
            ["style", "width", '155px']
         ],
         "${_btn_release}": [
            ["style", "top", '438px'],
            ["style", "left", '302px'],
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "left", '']
         ],
         "${_RectangleCopy2}": [
            ["style", "top", '436px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '356px'],
            ["style", "width", '155px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["style", "top", '436px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '87px'],
            ["style", "width", '147px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '436px'],
            ["style", "height", '32px'],
            ["color", "background-color", 'rgba(192,192,192,0.10)'],
            ["style", "left", '239px'],
            ["style", "width", '111px']
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
            { id: "eid338", tween: [ "style", "${_btn_ask}", "left", '691px', { fromValue: '691px'}], position: 0, duration: 0 },
            { id: "eid349", tween: [ "style", "${_btn_release}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid373", tween: [ "style", "${_Stage_transition}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid296", tween: [ "style", "${_Text}", "left", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid337", tween: [ "style", "${_btn_ask}", "top", '436px', { fromValue: '436px'}], position: 0, duration: 0 },
            { id: "eid348", tween: [ "style", "${_btn_release}", "left", '302px', { fromValue: '302px'}], position: 0, duration: 0 },
            { id: "eid346", tween: [ "style", "${_btn_release}", "top", '438px', { fromValue: '438px'}], position: 0, duration: 0 }         ]
      }
   }
},
"mainGameUI": {
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
      id: 'bg',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg.png','0px','0px']
   },
   {
      id: 'robotGlow',
      type: 'image',
      rect: ['716px','325px','416px','416px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/robotGlow.png','0px','0px']
   },
   {
      id: 'coinBox',
      type: 'rect',
      rect: ['847','89','auto','auto','auto','auto']
   },
   {
      id: 'shapesScreen',
      type: 'rect',
      rect: ['8','54','auto','auto','auto','auto']
   },
   {
      id: 'questionPanel',
      type: 'rect',
      rect: ['-11','418','auto','auto','auto','auto']
   },
   {
      id: 'robot2',
      type: 'rect',
      rect: ['851','452','auto','auto','auto','auto']
   },
   {
      id: 'btn_done',
      type: 'rect',
      userClass: 'done',
      rect: ['757','512','auto','auto','auto','auto']
   },
   {
      id: 'topBand2',
      type: 'rect',
      userClass: 'HUD',
      rect: ['10','-20','auto','auto','auto','auto']
   },
   {
      rect: ['35px','444px','63px','28px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'क्लु<br>',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'topBand2',
      symbolName: 'topBand'
   },
   {
      id: 'questionPanel',
      symbolName: 'questionPanel'
   },
   {
      id: 'shapesScreen',
      symbolName: 'shapesScreen'
   },
   {
      id: 'coinBox',
      symbolName: 'coinBox'
   },
   {
      id: 'btn_done',
      symbolName: 'btn_done'
   },
   {
      id: 'robot2',
      symbolName: 'robot'
   }   ]
   },
   states: {
      "Base State": {
         "${_questionPanel}": [
            ["style", "top", '409px'],
            ["style", "left", '-12px']
         ],
         "${_shapesScreen}": [
            ["style", "left", '10px'],
            ["style", "top", '51px']
         ],
         "${_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_robotGlow}": [
            ["style", "top", '325px'],
            ["style", "left", '716px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '35px'],
            ["style", "font-size", '14px'],
            ["style", "top", '444px'],
            ["style", "text-align", 'left'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '63px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_topBand2}": [
            ["style", "display", 'block']
         ],
         "${_robot2}": [
            ["style", "left", '839px'],
            ["style", "top", '450px']
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
            { id: "eid52", tween: [ "style", "${_robot2}", "left", '839px', { fromValue: '839px'}], position: 0, duration: 0 },
            { id: "eid67", tween: [ "style", "${_shapesScreen}", "left", '10px', { fromValue: '10px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_shapesScreen}", "top", '51px', { fromValue: '51px'}], position: 0, duration: 0 },
            { id: "eid47", tween: [ "style", "${_questionPanel}", "top", '409px', { fromValue: '409px'}], position: 0, duration: 0 },
            { id: "eid53", tween: [ "style", "${_robot2}", "top", '450px', { fromValue: '450px'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_questionPanel}", "left", '-12px', { fromValue: '-12px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_topBand2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"topBand": {
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
      rect: ['0px','0px','818px','95px','auto','auto'],
      id: 'topBand',
      userClass: 'hhd',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/topBand.png','0px','0px']
   },
   {
      userClass: 'mission',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      align: 'center',
      id: 'Text',
      text: 'మిషన్ 2',
      type: 'text',
      rect: ['44px','27px','143px','34px','auto','auto']
   },
   {
      userClass: 'level',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      align: 'left',
      id: 'TextCopy',
      text: 'లెవెల్ 1',
      type: 'text',
      rect: ['44px','27px','143px','34px','auto','auto']
   },
   {
      userClass: 'star',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      align: 'center',
      id: 'TextCopy2',
      text: '00',
      type: 'text',
      rect: ['44px','27px','143px','34px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_topBand}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '41px'],
            ["style", "font-size", '22px'],
            ["style", "top", '27px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '143px'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '95px'],
            ["style", "width", '818px']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(56,64,75,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '215px'],
            ["style", "font-size", '22px'],
            ["style", "top", '27px'],
            ["style", "text-align", 'left'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "display", 'block'],
            ["style", "width", '143px']
         ],
         "${_TextCopy2}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '662px'],
            ["style", "font-size", '28px'],
            ["style", "top", '20px'],
            ["style", "text-align", 'center'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '61px'],
            ["style", "display", 'block']
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
            { id: "eid3", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "color", "${_TextCopy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_TextCopy}", "top", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "color", "${_TextCopy}", "color", 'rgba(56,64,75,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(56,64,75,1.00)'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_TextCopy2}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_TextCopy}", "left", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_TextCopy2}", "left", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Text}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_TextCopy2}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_TextCopy2}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 }         ]
      }
   }
},
"shapesScreen": {
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
      id: 'shapePanelBg',
      type: 'image',
      rect: ['0px','0px','788px','401px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/shapePanelBg.png','0px','0px']
   },
   {
      id: 'Symbol_7',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7Copy',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7Copy2',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7Copy3',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7Copy7',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7Copy6',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7Copy5',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      id: 'Symbol_7Copy4',
      type: 'rect',
      userClass: 'grid',
      rect: ['9','44','auto','auto','auto','auto']
   },
   {
      rect: ['14px','12px','193px','27px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'आरोपी ग्रिड',
      align: 'center',
      type: 'text'
   },
   {
      id: 'tool1',
      type: 'rect',
      userClass: 'tool',
      rect: ['697','84','auto','auto','auto','auto']
   },
   {
      id: 'tool2',
      type: 'rect',
      userClass: 'tool',
      rect: ['697','177','auto','auto','auto','auto']
   },
   {
      id: 'tool3',
      type: 'rect',
      userClass: 'tool',
      rect: ['697','268','auto','auto','auto','auto']
   },
   {
      id: 'btn_next',
      type: 'rect',
      userClass: 'release',
      rect: ['366','-89','auto','auto','auto','auto']
   },
   {
      id: 'btn_reset',
      type: 'rect',
      userClass: 'reset',
      rect: ['334','5','auto','auto','auto','auto']
   },
   {
      rect: ['710','295','auto','auto','auto','auto'],
      id: 'tool4',
      userClass: 'tool',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['447px','171px','193px','170px','auto','auto'],
      transform: [],
      id: 'parallel_tool2',
      userClass: 'ToolMain2',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/parallel_tool2.svg','0px','0px']
   },
   {
      rect: ['65px','78px','308px','170px','auto','auto'],
      id: 'proctaror',
      userClass: 'ToolMain',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/proctaror.png','0px','0px']
   },
   {
      rect: ['556px','139px','auto','auto','auto','auto'],
      transform: [],
      id: 'ToolB',
      userClass: 'toolb',
      display: 'none',
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'btn_reset',
      symbolName: 'btn_reset'
   },
   {
      id: 'Symbol_7Copy4',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy2',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy7',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy3',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7',
      symbolName: 'Symbol_7'
   },
   {
      id: 'ToolB',
      symbolName: 'Symbol_1_1'
   },
   {
      id: 'tool2',
      symbolName: 'tool2'
   },
   {
      id: 'tool1',
      symbolName: 'tool1'
   },
   {
      id: 'Symbol_7Copy6',
      symbolName: 'Symbol_7'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'tool3',
      symbolName: 'tool3'
   },
   {
      id: 'Symbol_7Copy5',
      symbolName: 'Symbol_7'
   },
   {
      id: 'Symbol_7Copy',
      symbolName: 'Symbol_7'
   },
   {
      id: 'tool4',
      symbolName: 'Symbol_6'
   }   ]
   },
   states: {
      "Base State": {
         "${_Symbol_7Copy7}": [
            ["style", "top", '212px']
         ],
         "${_tool4}": [
            ["style", "top", '289px'],
            ["transform", "scaleY", '0.77'],
            ["transform", "scaleX", '0.77'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '697px']
         ],
         "${symbolSelector}": [
            ["style", "height", '401px'],
            ["style", "width", '788px']
         ],
         "${_Symbol_7Copy5}": [
            ["style", "left", '349px'],
            ["style", "top", '212px']
         ],
         "${_Symbol_7Copy2}": [
            ["style", "left", '349px']
         ],
         "${_tool3}": [
            ["style", "top", '212px'],
            ["style", "left", '697px'],
            ["transform", "scaleY", '0.76923'],
            ["transform", "scaleX", '0.76923']
         ],
         "${_btn_next}": [
            ["style", "left", '228px'],
            ["style", "top", '5px']
         ],
         "${_Symbol_7Copy}": [
            ["style", "left", '179px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Symbol_7Copy3}": [
            ["style", "left", '519px']
         ],
         "${_btn_reset}": [
            ["style", "left", '319px'],
            ["style", "top", '5px']
         ],
         "${_parallel_tool2}": [
            ["style", "top", '171px'],
            ["style", "left", '447px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_Symbol_7Copy6}": [
            ["style", "left", '179px'],
            ["style", "top", '212px']
         ],
         "${_shapePanelBg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ToolB}": [
            ["style", "top", '139px'],
            ["transform", "scaleY", '0.77'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "left", '556px'],
            ["transform", "scaleX", '0.77']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14px'],
            ["style", "font-size", '18px'],
            ["style", "top", '12px'],
            ["style", "text-align", 'center'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '193px']
         ],
         "${_tool2}": [
            ["style", "top", '139px'],
            ["style", "left", '697px'],
            ["transform", "scaleY", '0.76923'],
            ["transform", "scaleX", '0.76923']
         ],
         "${_Symbol_7Copy4}": [
            ["style", "left", '519px'],
            ["style", "top", '212px']
         ],
         "${_proctaror}": [
            ["style", "height", '170px'],
            ["style", "top", '78px'],
            ["style", "left", '65px'],
            ["style", "width", '308px']
         ],
         "${_tool1}": [
            ["style", "top", '69px'],
            ["style", "left", '697px'],
            ["transform", "scaleY", '0.76923'],
            ["transform", "scaleX", '0.76923']
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
            { id: "eid300", tween: [ "style", "${_tool4}", "left", '697px', { fromValue: '697px'}], position: 0, duration: 0 },
            { id: "eid301", tween: [ "style", "${_tool2}", "left", '697px', { fromValue: '697px'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "transform", "${_tool2}", "scaleX", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 },
            { id: "eid360", tween: [ "style", "${_ToolB}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "transform", "${_tool2}", "scaleY", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 },
            { id: "eid298", tween: [ "transform", "${_tool4}", "scaleX", '0.77', { fromValue: '0.77'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "transform", "${_tool3}", "scaleY", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 },
            { id: "eid361", tween: [ "transform", "${_ToolB}", "scaleX", '0.77', { fromValue: '0.77'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "transform", "${_tool1}", "scaleY", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 },
            { id: "eid302", tween: [ "style", "${_tool1}", "left", '697px', { fromValue: '697px'}], position: 0, duration: 0 },
            { id: "eid356", tween: [ "style", "${_btn_next}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid362", tween: [ "transform", "${_ToolB}", "scaleY", '0.77', { fromValue: '0.77'}], position: 0, duration: 0 },
            { id: "eid359", tween: [ "style", "${_btn_reset}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid357", tween: [ "style", "${_btn_next}", "left", '228px', { fromValue: '228px'}], position: 0, duration: 0 },
            { id: "eid299", tween: [ "transform", "${_tool4}", "scaleY", '0.77', { fromValue: '0.77'}], position: 0, duration: 0 },
            { id: "eid203", tween: [ "transform", "${_tool3}", "scaleX", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "transform", "${_tool1}", "scaleX", '0.76923', { fromValue: '0.76923'}], position: 0, duration: 0 }         ]
      }
   }
},
"tool1": {
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
      userClass: 'img',
      id: 'tool1_up',
      type: 'image',
      rect: ['0px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text3',
      text: 'समान साइड मार्कर टूल<br>',
      rect: ['82px','19px','102px','44px','auto','auto'],
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool1_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text3}": [
            ["style", "top", '19px'],
            ["style", "font-size", '15px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '44px'],
            ["style", "font-weight", '400'],
            ["style", "left", '82px'],
            ["style", "width", '102px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
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
"tool2": {
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
      rect: ['82px','19px','78px','44px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(255,255,255,1.00)','400','none','normal'],
      userClass: 'txt',
      id: 'Text3',
      text: 'कोण मार्कर टूल',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','0px','78px','78px','auto','auto'],
      id: 'tool2_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '19px'],
            ["style", "width", '78px'],
            ["style", "text-align", 'left'],
            ["style", "height", '44px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "font-size", '15px']
         ],
         "${_tool2_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
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
"tool3": {
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
      rect: ['0px','0px','78px','78px','auto','auto'],
      id: 'tool3_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool3_up.png','0px','0px']
   },
   {
      rect: ['82px','19px','98px','53px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(255,255,255,1.00)','400','none','normal'],
      userClass: 'txt',
      id: 'Text3Copy',
      text: 'समानांतर लाइन मार्कर टूल',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '19px'],
            ["style", "font-size", '15px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '53px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "width", '98px']
         ],
         "${_tool3_up}": [
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
"btn_release": {
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
      id: 'btn_continue_up',
      rect: ['0px','0px','143px','27px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/btn_continue_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,45,26,1.00)','bold','none','normal'],
      rect: ['0px','4px','143px','auto','auto','auto'],
      type: 'text',
      id: 'Text2',
      text: 'Another Clue',
      align: 'center',
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_continue_up}": [
            ["style", "top", '0px'],
            ["style", "height", '27px'],
            ["style", "left", '0px'],
            ["style", "width", '143px']
         ],
         "${_Text2}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "width", '143px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '143px']
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
"btn_reset": {
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
      userClass: 'img',
      id: 'btn_common_up',
      type: 'image',
      rect: ['0','0','88px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_common_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,45,26,1.00)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'रीप्ले करें',
      rect: ['0px','2px','88px','34px','auto','auto'],
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '2px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "height", '34px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '88px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '88px']
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
"questionPanel": {
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
      id: 'questionPanelBg',
      type: 'image',
      rect: ['0px','0px','915px','241px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/questionPanelBg.png','0px','0px']
   },
   {
      userClass: 'quest',
      rect: ['42px','67px','713px','153px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'questionField',
      type: 'rect',
      rect: ['52','74','auto','auto','auto','auto'],
      userClass: 'sample'
   }],
   symbolInstances: [
   {
      id: 'questionField',
      symbolName: 'questionField'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '153px'],
            ["style", "top", '67px'],
            ["style", "left", '42px'],
            ["style", "width", '713px']
         ],
         "${_questionPanelBg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '241px'],
            ["style", "width", '915px']
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
"dropDown": {
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
      rect: ['0px','0px','145px','29px','auto','auto'],
      id: 'dropDown_up',
      fill: ['rgba(0,0,0,0)','images/dropDown_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_dropDown_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '29px'],
            ["style", "width", '145px']
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
            { id: "eid255", tween: [ "style", "${_dropDown_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"btn_ask": {
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
      userClass: 'img',
      id: 'btn_common_up2',
      type: 'image',
      rect: ['0px','2px','88px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_common_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','700','none',''],
      rect: ['0px','4px','92px','auto','auto','auto'],
      type: 'text',
      id: 'Text',
      text: 'पूछो',
      align: 'center',
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '92px']
         ],
         "${_Text}": [
            ["style", "top", '4px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '92px']
         ],
         "${_btn_common_up2}": [
            ["style", "top", '2px'],
            ["style", "left", '0px']
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
"btn_done": {
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
      userClass: 'img',
      id: 'btn_done_up',
      type: 'image',
      rect: ['0px','0px','92px','85px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_done_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'पूर्ण<br>',
      rect: ['7px','49px','78px','28px','auto','auto'],
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_done_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "font-size", '18px'],
            ["style", "height", '28px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "left", '7px'],
            ["style", "width", '78px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '92px']
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
"robot": {
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
      id: 'Symbol_10',
      type: 'rect',
      rect: ['0','-1','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Symbol_10',
      symbolName: 'Symbol_10'
   }   ]
   },
   states: {
      "Base State": {
         "${_Symbol_10}": [
            ["style", "top", '-1px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '194px'],
            ["style", "width", '169px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4010,
         autoPlay: true,
         timeline: [
            { id: "eid364", tween: [ "style", "${_Symbol_10}", "left", '-7px', { fromValue: '0px'}], position: 0, duration: 1000 },
            { id: "eid365", tween: [ "style", "${_Symbol_10}", "left", '11px', { fromValue: '-7px'}], position: 1000, duration: 1000 },
            { id: "eid368", tween: [ "style", "${_Symbol_10}", "left", '9px', { fromValue: '11px'}], position: 2000, duration: 1000 },
            { id: "eid369", tween: [ "style", "${_Symbol_10}", "left", '0px', { fromValue: '9px'}], position: 3000, duration: 1000 },
            { id: "eid363", tween: [ "style", "${_Symbol_10}", "top", '2px', { fromValue: '-1px'}], position: 0, duration: 1000 },
            { id: "eid366", tween: [ "style", "${_Symbol_10}", "top", '-1px', { fromValue: '2px'}], position: 1000, duration: 1000 },
            { id: "eid367", tween: [ "style", "${_Symbol_10}", "top", '12px', { fromValue: '-1px'}], position: 2000, duration: 1000 },
            { id: "eid370", tween: [ "style", "${_Symbol_10}", "top", '-1px', { fromValue: '12px'}], position: 3000, duration: 1000 }         ]
      }
   }
},
"coinBox": {
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
      id: 'coinPanel_bg2',
      type: 'image',
      rect: ['0px','-45px','174px','400px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinPanel_bg2.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50_orange',
      type: 'image',
      rect: ['53px','264px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50_orange.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50',
      type: 'image',
      rect: ['53px','202px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy',
      type: 'image',
      rect: ['53px','187px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy2',
      type: 'image',
      rect: ['53px','172px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy3',
      type: 'image',
      rect: ['53px','157px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy4',
      type: 'image',
      rect: ['53px','142px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin50Copy5',
      type: 'image',
      rect: ['53px','127px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      userClass: 'coin',
      id: 'coin200',
      type: 'image',
      rect: ['53px','66px','64px','60px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      transform: [],
      display: 'none',
      type: 'rect',
      id: 'token_blast',
      rect: ['28px','38px','auto','auto','auto','auto']
   },
   {
      id: 'coinBox_highlight',
      type: 'image',
      rect: ['45px','46px','80px','291px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinBox_highlight.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(246,205,81,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'स्कोर<br>',
      align: 'right',
      rect: ['27px','12px','37px','26px','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(246,205,81,1.00)','normal','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy',
      text: '0000',
      rect: ['63px','4px','83px','46px','auto','auto'],
      userClass: 'scoretxt'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(89,128,147,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text4Copy3',
      text: 'उच्च<br>स्कोर<br>',
      align: 'right',
      rect: ['25px','-29px','37px','26px','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(89,128,147,1.00)','normal','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text4Copy2',
      text: '0000',
      rect: ['61px','-33px','83px','46px','auto','auto'],
      userClass: 'scoretxt2'
   },
   {
      transform: [[0,0],['-50']],
      rect: ['96px','340px','69px','60px','auto','auto'],
      id: 'cord22',
      opacity: 0.75,
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      transform: [[0,0],['126']],
      id: 'cord',
      type: 'image',
      rect: ['-53px','318px','104px','70px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'token_blast',
      symbolName: 'token_blast'
   }   ]
   },
   states: {
      "Base State": {
         "${_coin50Copy3}": [
            ["style", "top", '157px'],
            ["style", "left", '53px']
         ],
         "${_coin200}": [
            ["style", "left", '53px'],
            ["style", "top", '66px']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '-29px'],
            ["style", "text-align", 'right'],
            ["style", "font-size", '12px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(89,128,147,1.00)'],
            ["style", "left", '25px'],
            ["style", "width", '37px']
         ],
         "${_coin50Copy4}": [
            ["style", "top", '142px'],
            ["style", "left", '53px']
         ],
         "${symbolSelector}": [
            ["style", "height", '361px'],
            ["style", "width", '174px']
         ],
         "${_coinPanel_bg2}": [
            ["style", "top", '-45px'],
            ["style", "left", '0px'],
            ["style", "height", '400px']
         ],
         "${_coinBox_highlight}": [
            ["style", "left", '45px'],
            ["style", "top", '46px']
         ],
         "${_coin50Copy2}": [
            ["style", "top", '172px'],
            ["style", "left", '53px']
         ],
         "${_Text4}": [
            ["style", "top", '12px'],
            ["style", "text-align", 'right'],
            ["style", "width", '37px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(246,205,81,1.00)'],
            ["style", "left", '27px'],
            ["style", "font-size", '15px']
         ],
         "${_coin50Copy}": [
            ["style", "top", '187px'],
            ["style", "left", '53px']
         ],
         "${_token_blast}": [
            ["style", "top", '38px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '28px'],
            ["style", "display", 'none']
         ],
         "${_cord22}": [
            ["style", "top", '340px'],
            ["transform", "rotateZ", '-50deg'],
            ["style", "height", '60px'],
            ["style", "opacity", '0.75'],
            ["style", "left", '96px'],
            ["style", "width", '69px']
         ],
         "${_coin50Copy5}": [
            ["style", "top", '127px'],
            ["style", "left", '53px']
         ],
         "${_coin50_orange}": [
            ["style", "top", '264px'],
            ["style", "left", '53px']
         ],
         "${_cord}": [
            ["style", "top", '318px'],
            ["transform", "rotateZ", '126deg'],
            ["style", "height", '70px'],
            ["style", "left", '-53px'],
            ["style", "width", '104px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '-33px'],
            ["style", "text-align", 'center'],
            ["style", "width", '83px'],
            ["color", "color", 'rgba(89,128,147,1.00)'],
            ["style", "height", '46px'],
            ["style", "left", '61px'],
            ["style", "font-size", '30px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(246,205,81,1.00)'],
            ["style", "height", '46px'],
            ["style", "left", '63px'],
            ["style", "width", '83px']
         ],
         "${_coin50}": [
            ["style", "top", '202px'],
            ["style", "left", '53px']
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
            { id: "eid374", tween: [ "style", "${_token_blast}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"questionField": {
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
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(81,249,255,1.00)','700','none',''],
      id: 'Text',
      text: 'आपके सवाल यहाँ दिखेंगे',
      type: 'text',
      rect: ['0px','0px','525px','20px','auto','auto']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(168,255,81,1.00)','700','none',''],
      type: 'text',
      id: 'TextCopy2',
      text: 'जवाब<br>',
      align: 'right',
      rect: ['537px','0px','119px','20px','auto','auto']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','20px','683px','1px','auto','auto'],
      fill: ['rgba(50,133,180,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy2}": [
            ["color", "color", 'rgba(168,255,81,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '537px'],
            ["style", "font-size", '16px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '119px']
         ],
         "${_Rectangle}": [
            ["style", "height", '1px'],
            ["color", "background-color", 'rgba(50,133,180,1.00)']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-size", '14px'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(81,249,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "width", '525px']
         ],
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '525px']
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
"Symbol_1": {
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
      id: 'tool_bottom',
      type: 'image',
      rect: ['0px','0px','236px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool_bottom.png','0px','0px']
   },
   {
      rect: ['5','15','auto','auto','auto','auto'],
      id: 'Symbol_22',
      userClass: 'tool2',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['58','15','auto','auto','auto','auto'],
      id: 'Symbol_32',
      userClass: 'tool2',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['107','15','auto','auto','auto','auto'],
      id: 'Symbol_5',
      userClass: 'tool2',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      id: 'tool1C_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1C_selected.png','0px','0px']
   },
   {
      id: 'tool1A_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1A_selected.png','0px','0px']
   },
   {
      id: 'tool1B_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1B_selected.png','0px','0px']
   },
   {
      rect: ['158px','0px','78px','78px','auto','auto'],
      userClass: 'toolA',
      id: 'tool2_selected',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/tool2_selected.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Symbol_5',
      symbolName: 'Symbol_5'
   },
   {
      id: 'Symbol_22',
      symbolName: 'Symbol_2'
   },
   {
      id: 'Symbol_32',
      symbolName: 'Symbol_3'
   }   ]
   },
   states: {
      "Base State": {
         "${_tool_bottom}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_tool1A_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${_Symbol_32}": [
            ["style", "cursor", 'pointer'],
            ["style", "left", '56px']
         ],
         "${_tool2_selected}": [
            ["style", "top", '0px'],
            ["style", "left", '158px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Symbol_22}": [
            ["style", "cursor", 'pointer']
         ],
         "${_tool1C_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${_tool1B_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '236px']
         ],
         "${_Symbol_5}": [
            ["style", "cursor", 'pointer']
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
            { id: "eid186", tween: [ "style", "${_Symbol_32}", "left", '56px', { fromValue: '56px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_2": {
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
      rect: ['0px','0px','47px','47px','auto','auto'],
      id: 'tool2A_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2A_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
         ],
         "${_tool2A_up}": [
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
"Symbol_3": {
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
      rect: ['0px','0px','47px','47px','auto','auto'],
      id: 'tool2B_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2B_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool2B_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
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
"Symbol_4": {
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
      rect: ['0px','0px','47px','47px','auto','auto'],
      id: 'tool2C_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/tool2C_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool2C_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
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
"Symbol_5": {
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
      id: 'Symbol_42',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'Symbol_42',
      symbolName: 'Symbol_4'
   }   ]
   },
   states: {
      "Base State": {
         "${_Symbol_42}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
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
"Symbol_6": {
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
      userClass: 'img',
      id: 'tool4_up',
      type: 'image',
      rect: ['0px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool4_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text',
      align: 'left',
      id: 'Text3Copy9',
      text: 'प्रोट्रैक्टर टूल<br>',
      rect: ['84px','17px','66px','44px','auto','auto'],
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy9}": [
            ["style", "top", '17px'],
            ["style", "width", '66px'],
            ["style", "text-align", 'left'],
            ["style", "height", '44px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '84px'],
            ["style", "font-size", '15px']
         ],
         "${_tool4_up}": [
            ["style", "top", '0px'],
            ["style", "height", '78px'],
            ["style", "left", '0px'],
            ["style", "width", '78px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '78px']
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
"Symbol_7": {
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
      userClass: 'rect',
      rect: ['0px','0px','170px','168px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      userClass: 'img',
      id: 'alien_up2',
      type: 'image',
      rect: ['141px','4px','25px','25px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/alien_up.png','0px','0px']
   },
   {
      id: 'Symbol_8',
      type: 'rect',
      rect: ['0','150','auto','auto','auto','auto'],
      userClass: 'tag_btn'
   }],
   symbolInstances: [
   {
      id: 'Symbol_8',
      symbolName: 'Symbol_8'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "height", '168px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '170px']
         ],
         "${_alien_up2}": [
            ["style", "height", '25px'],
            ["style", "top", '4px'],
            ["style", "left", '141px'],
            ["style", "width", '25px']
         ],
         "${_Symbol_8}": [
            ["style", "top", '20px'],
            ["style", "left", '-57px'],
            ["transform", "rotateZ", '-43deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '168px'],
            ["style", "width", '170px']
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
            { id: "eid320", tween: [ "style", "${_Symbol_8}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid326", tween: [ "style", "${_Symbol_8}", "left", '-57px', { fromValue: '-57px'}], position: 0, duration: 0 },
            { id: "eid325", tween: [ "transform", "${_Symbol_8}", "rotateZ", '-43deg', { fromValue: '-43deg'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_8": {
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
      transform: [],
      borderRadius: ['0px','0px','0px','0px'],
      rect: ['0px','0px','170px','15px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(224,212,25,1.00)']
   },
   {
      type: 'text',
      rect: ['0px','0','170px','auto','auto','auto'],
      align: 'center',
      userClass: 'Rtxt',
      id: 'Text2Copy',
      text: 'छोड़ दिए',
      transform: [],
      font: ['Arial, Helvetica, sans-serif',12,'rgba(0,0,0,1)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(224,212,25,1.00)'],
            ["style", "height", '15px'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2Copy}": [
            ["transform", "scaleY", '1'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'center'],
            ["style", "left", '0px'],
            ["style", "width", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '18px'],
            ["style", "width", '170px']
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
      userClass: 'img',
      id: 'btn_release_up',
      type: 'image',
      rect: ['0px','0px','88px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_release_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,45,26,1.00)','bold','none','normal'],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'छोड दें',
      rect: ['0px','2px','88px','28px','auto','auto'],
      userClass: 'txt'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_release_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '2px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '0px'],
            ["style", "width", '88px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '88px']
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
"Symbol_1_1": {
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
      id: 'tool_bottom2',
      type: 'image',
      rect: ['97px','-58px','141px','193px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool_bottom.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'Symbol_22',
      rect: ['5','15','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'tool2'
   },
   {
      type: 'rect',
      id: 'Symbol_32',
      rect: ['58','15','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'tool2'
   },
   {
      type: 'rect',
      id: 'Symbol_5',
      rect: ['107','15','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'tool2'
   },
   {
      id: 'Symbol_9',
      type: 'rect',
      userClass: 'tool2',
      rect: ['254','397','auto','auto','auto','auto']
   },
   {
      id: 'tool1C_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1C_selected.png','0px','0px']
   },
   {
      id: 'tool1A_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1A_selected.png','0px','0px']
   },
   {
      id: 'tool1B_selected2',
      type: 'image',
      rect: ['157px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool1B_selected.png','0px','0px']
   },
   {
      type: 'image',
      rect: ['158px','0px','78px','78px','auto','auto'],
      id: 'tool2_selected',
      userClass: 'toolA',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/tool2_selected.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'Symbol_9',
      symbolName: 'Symbol_9'
   },
   {
      id: 'Symbol_5',
      symbolName: 'Symbol_5'
   },
   {
      id: 'Symbol_22',
      symbolName: 'Symbol_2'
   },
   {
      id: 'Symbol_32',
      symbolName: 'Symbol_3'
   }   ]
   },
   states: {
      "Base State": {
         "${_tool_bottom2}": [
            ["style", "left", '97px'],
            ["style", "top", '-58px']
         ],
         "${_tool1A_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${_Symbol_9}": [
            ["style", "top", '77px'],
            ["style", "left", '149px']
         ],
         "${_Symbol_32}": [
            ["style", "top", '-8px'],
            ["style", "left", '115px'],
            ["style", "cursor", 'pointer']
         ],
         "${_tool2_selected}": [
            ["style", "top", '0px'],
            ["style", "left", '158px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Symbol_22}": [
            ["style", "top", '41px'],
            ["style", "left", '115px'],
            ["style", "cursor", 'pointer']
         ],
         "${_tool1C_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${_tool1B_selected2}": [
            ["style", "left", '157px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '78px'],
            ["style", "width", '236px']
         ],
         "${_Symbol_5}": [
            ["style", "top", '-46px'],
            ["style", "left", '149px'],
            ["style", "cursor", 'pointer']
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
            { id: "eid642", tween: [ "style", "${_Symbol_5}", "left", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid656", tween: [ "style", "${_Symbol_9}", "top", '77px', { fromValue: '77px'}], position: 0, duration: 0 },
            { id: "eid626", tween: [ "style", "${_Symbol_22}", "top", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid645", tween: [ "style", "${_Symbol_22}", "left", '115px', { fromValue: '115px'}], position: 0, duration: 0 },
            { id: "eid652", tween: [ "style", "${_Symbol_9}", "left", '149px', { fromValue: '149px'}], position: 0, duration: 0 },
            { id: "eid627", tween: [ "style", "${_Symbol_32}", "top", '-8px', { fromValue: '-8px'}], position: 0, duration: 0 },
            { id: "eid657", tween: [ "style", "${_Symbol_5}", "top", '-46px', { fromValue: '-46px'}], position: 0, duration: 0 },
            { id: "eid644", tween: [ "style", "${_Symbol_32}", "left", '115px', { fromValue: '115px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symbol_9": {
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
      id: 'tool2D_up',
      rect: ['0px','0px','47px','47px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/tool2D_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool2D_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
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
"Symbol_10": {
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
      rect: ['0px','0px','170px','195px','auto','auto'],
      id: 'robo_G2_neutral',
      userClass: 'roboAnim',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/robo_G2_neutral.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_robo_G2_neutral}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '195px'],
            ["style", "width", '170px']
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
      type: 'text',
      rect: ['426px','230px','198px','auto','auto','auto'],
      align: 'center',
      id: 'Text',
      text: 'लेवल 1',
      userClass: 'level',
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,246,0,1.00)','700','none','']
   },
   {
      type: 'text',
      rect: ['413px','294px','198px','62px','auto','auto'],
      align: 'center',
      id: 'TextCopy',
      text: 'Stage 1',
      userClass: 'stageName',
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '230px'],
            ["style", "font-size", '40px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,246,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-183px'],
            ["style", "width", '198px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_stage_strip}": [
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["transform", "scaleY", '0.05'],
            ["style", "top", '283px']
         ],
         "${_TextCopy}": [
            ["style", "top", '294px'],
            ["style", "font-size", '48px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '62px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '1023px'],
            ["style", "width", '198px']
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
            { id: "eid372", tween: [ "style", "${_TextCopy}", "left", '408px', { fromValue: '1023px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "style", "${_TextCopy}", "left", '385px', { fromValue: '408px'}], position: 1000, duration: 583 },
            { id: "eid395", tween: [ "style", "${_TextCopy}", "left", '-202px', { fromValue: '385px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid388", tween: [ "transform", "${_stage_strip}", "scaleY", '1', { fromValue: '0.05'}], position: 83, duration: 333, easing: "easeOutBack" },
            { id: "eid391", tween: [ "transform", "${_stage_strip}", "scaleY", '0.05', { fromValue: '1'}], position: 1917, duration: 250, easing: "easeInCirc" },
            { id: "eid402", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid401", tween: [ "style", "${_stage_strip}", "display", 'block', { fromValue: 'none'}], position: 84, duration: 0, easing: "easeInCirc" },
            { id: "eid400", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0, easing: "easeInCirc" },
            { id: "eid371", tween: [ "style", "${_Text}", "left", '408px', { fromValue: '-183px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '431px', { fromValue: '408px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '431px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid394", tween: [ "style", "${_feedback_m1_bg}", "opacity", '1', { fromValue: '0'}], position: 42, duration: 125 },
            { id: "eid399", tween: [ "style", "${_feedback_m1_bg}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 250 },
            { id: "eid405", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_feedback_m1_bg}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0 },
            { id: "eid403", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'block'}], position: 2209, duration: 0 }         ]
      }
   }
},
"token_blast": {
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
      id: 'token_spritesheet',
      type: 'image',
      rect: ['0px','0px','3616px','113px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/token_spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_token_spritesheet}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '113px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '113px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1292,
         autoPlay: false,
         timeline: [
            { id: "eid409", tween: [ "style", "${_token_spritesheet}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid410", tween: [ "style", "${_token_spritesheet}", "left", '-113px', { fromValue: '0px'}], position: 42, duration: 0 },
            { id: "eid411", tween: [ "style", "${_token_spritesheet}", "left", '-226px', { fromValue: '-113px'}], position: 83, duration: 0 },
            { id: "eid412", tween: [ "style", "${_token_spritesheet}", "left", '-339px', { fromValue: '-226px'}], position: 125, duration: 0 },
            { id: "eid413", tween: [ "style", "${_token_spritesheet}", "left", '-451px', { fromValue: '-339px'}], position: 167, duration: 0 },
            { id: "eid414", tween: [ "style", "${_token_spritesheet}", "left", '-564px', { fromValue: '-451px'}], position: 208, duration: 0 },
            { id: "eid415", tween: [ "style", "${_token_spritesheet}", "left", '-678px', { fromValue: '-564px'}], position: 250, duration: 0 },
            { id: "eid416", tween: [ "style", "${_token_spritesheet}", "left", '-791px', { fromValue: '-678px'}], position: 292, duration: 0 },
            { id: "eid417", tween: [ "style", "${_token_spritesheet}", "left", '-904px', { fromValue: '-791px'}], position: 333, duration: 0 },
            { id: "eid418", tween: [ "style", "${_token_spritesheet}", "left", '-1017px', { fromValue: '-904px'}], position: 375, duration: 0 },
            { id: "eid419", tween: [ "style", "${_token_spritesheet}", "left", '-1131px', { fromValue: '-1017px'}], position: 417, duration: 0 },
            { id: "eid420", tween: [ "style", "${_token_spritesheet}", "left", '-1244px', { fromValue: '-1131px'}], position: 458, duration: 0 },
            { id: "eid421", tween: [ "style", "${_token_spritesheet}", "left", '-1357px', { fromValue: '-1244px'}], position: 500, duration: 0 },
            { id: "eid422", tween: [ "style", "${_token_spritesheet}", "left", '-1468px', { fromValue: '-1357px'}], position: 542, duration: 0 },
            { id: "eid423", tween: [ "style", "${_token_spritesheet}", "left", '-1582px', { fromValue: '-1468px'}], position: 583, duration: 0 },
            { id: "eid424", tween: [ "style", "${_token_spritesheet}", "left", '-1695px', { fromValue: '-1582px'}], position: 625, duration: 0 },
            { id: "eid425", tween: [ "style", "${_token_spritesheet}", "left", '-1809px', { fromValue: '-1695px'}], position: 667, duration: 0 },
            { id: "eid426", tween: [ "style", "${_token_spritesheet}", "left", '-1922px', { fromValue: '-1809px'}], position: 708, duration: 0 },
            { id: "eid427", tween: [ "style", "${_token_spritesheet}", "left", '-2035px', { fromValue: '-1922px'}], position: 750, duration: 0 },
            { id: "eid428", tween: [ "style", "${_token_spritesheet}", "left", '-2149px', { fromValue: '-2035px'}], position: 792, duration: 0 },
            { id: "eid429", tween: [ "style", "${_token_spritesheet}", "left", '-2261px', { fromValue: '-2149px'}], position: 833, duration: 0 },
            { id: "eid430", tween: [ "style", "${_token_spritesheet}", "left", '-2373px', { fromValue: '-2261px'}], position: 875, duration: 0 },
            { id: "eid431", tween: [ "style", "${_token_spritesheet}", "left", '-2487px', { fromValue: '-2373px'}], position: 917, duration: 0 },
            { id: "eid432", tween: [ "style", "${_token_spritesheet}", "left", '-2599px', { fromValue: '-2487px'}], position: 958, duration: 0 },
            { id: "eid433", tween: [ "style", "${_token_spritesheet}", "left", '-2712px', { fromValue: '-2599px'}], position: 1000, duration: 0 },
            { id: "eid434", tween: [ "style", "${_token_spritesheet}", "left", '-2826px', { fromValue: '-2712px'}], position: 1042, duration: 0 },
            { id: "eid435", tween: [ "style", "${_token_spritesheet}", "left", '-2939px', { fromValue: '-2826px'}], position: 1083, duration: 0 },
            { id: "eid436", tween: [ "style", "${_token_spritesheet}", "left", '-3052px', { fromValue: '-2939px'}], position: 1125, duration: 0 },
            { id: "eid437", tween: [ "style", "${_token_spritesheet}", "left", '-3172px', { fromValue: '-3052px'}], position: 1167, duration: 0 },
            { id: "eid438", tween: [ "style", "${_token_spritesheet}", "left", '-3277px', { fromValue: '-3172px'}], position: 1208, duration: 0 },
            { id: "eid439", tween: [ "style", "${_token_spritesheet}", "left", '-3389px', { fromValue: '-3277px'}], position: 1250, duration: 0 },
            { id: "eid408", tween: [ "style", "${_token_spritesheet}", "left", '-3504px', { fromValue: '-3387px'}], position: 1292, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "mission2");
