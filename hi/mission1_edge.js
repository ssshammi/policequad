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
            id:'mainGameUI',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"mainGameUI"
         },
         {
            id:'Stage_transition',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:" trnasStage"
         }],
         symbolInstances: [
         {
            id:'Stage_transition',
            symbolName:'Stage_transition'
         },
         {
            id:'mainGameUI',
            symbolName:'mainGameUI'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1014px'],
            ["style", "height", '650px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Stage_transition}": [
            ["style", "display", 'none']
         ],
         "${_Text}": [
            ["style", "left", '']
         ],
         "${_mainGameUI}": [
            ["style", "display", 'block']
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
            { id: "eid296", tween: [ "style", "${_Text}", "left", '', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid407", tween: [ "style", "${_mainGameUI}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid406", tween: [ "style", "${_Stage_transition}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" }         ]
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
      id: 'questionPanel',
      type: 'rect',
      rect: ['-11','418','auto','auto','auto','auto']
   },
   {
      id: 'shapesScreen',
      type: 'rect',
      rect: ['8','54','auto','auto','auto','auto']
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
      rect: ['61px','464px','336px','32px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','700','none',''],
      userClass: 'cluetext',
      id: 'Text',
      text: 'क्लु पैनल',
      align: 'left',
      type: 'text'
   },
   {
      id: 'coinBox',
      type: 'rect',
      transform: [],
      rect: ['847','89px','auto','auto','auto','auto']
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
      id: 'btn_done',
      symbolName: 'btn_done'
   },
   {
      id: 'coinBox',
      symbolName: 'coinBox'
   },
   {
      id: 'shapesScreen',
      symbolName: 'shapesScreen'
   }   ]
   },
   states: {
      "Base State": {
         "${_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btn_done}": [
            ["style", "left", '870px'],
            ["style", "top", '513px']
         ],
         "${_questionPanel}": [
            ["style", "top", '402px'],
            ["style", "left", '19px']
         ],
         "${_shapesScreen}": [
            ["style", "left", '10px'],
            ["style", "top", '56px']
         ],
         "${_topBand2}": [
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '61px'],
            ["style", "font-size", '20px'],
            ["style", "top", '464px'],
            ["style", "text-align", 'left'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "display", 'block'],
            ["style", "width", '336px']
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
            { id: "eid1", tween: [ "style", "${_topBand2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid364", tween: [ "style", "${_shapesScreen}", "top", '56px', { fromValue: '56px'}], position: 0, duration: 0 },
            { id: "eid358", tween: [ "style", "${_questionPanel}", "top", '402px', { fromValue: '402px'}], position: 0, duration: 0 },
            { id: "eid362", tween: [ "style", "${_btn_done}", "left", '870px', { fromValue: '870px'}], position: 0, duration: 0 },
            { id: "eid363", tween: [ "style", "${_btn_done}", "top", '513px', { fromValue: '513px'}], position: 0, duration: 0 },
            { id: "eid359", tween: [ "style", "${_questionPanel}", "left", '19px', { fromValue: '19px'}], position: 0, duration: 0 }         ]
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
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'మిషన్ 1',
      align: 'center',
      rect: ['44px','27px','143px','34px','auto','auto']
   },
   {
      userClass: 'level',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      id: 'TextCopy',
      text: 'లెవెల్ 1',
      align: 'left',
      rect: ['44px','27px','143px','34px','auto','auto']
   },
   {
      userClass: 'star',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none',''],
      id: 'TextCopy2',
      text: '00',
      align: 'center',
      rect: ['44px','27px','143px','34px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_topBand}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
            ["style", "display", 'block'],
            ["style", "width", '143px']
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
            ["style", "width", '143px'],
            ["style", "display", 'block']
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
            ["style", "display", 'block'],
            ["style", "width", '61px']
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
            { id: "eid20", tween: [ "style", "${_TextCopy2}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "color", "${_TextCopy}", "color", 'rgba(56,64,75,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(56,64,75,1.00)'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_TextCopy2}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_TextCopy}", "top", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Text}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_TextCopy2}", "left", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_TextCopy}", "left", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_TextCopy2}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 }         ]
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
      rect: ['14px','9px','192px','36px','auto','auto'],
      font: ['\'Adobe Devanagari\'',25,'rgba(255,255,255,1.00)','700','none',''],
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
      id: 'tool3',
      type: 'rect',
      userClass: 'tool',
      rect: ['697','268','auto','auto','auto','auto']
   },
   {
      id: 'btn_release',
      type: 'rect',
      userClass: 'release',
      rect: ['228','5','auto','auto','auto','auto']
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
      id: 'parallel_tool2',
      userClass: 'ToolMain2',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/parallel_tool2.svg','0px','0px']
   },
   {
      rect: ['128px','115px','172px','172px','auto','auto'],
      id: 'RightAngle_tool',
      userClass: 'ToolMain',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/RightAngle_tool.svg','0px','0px']
   },
   {
      rect: ['460px','59px','127px','127px','auto','auto'],
      id: 'equal_sides_marker',
      userClass: 'Temptool',
      type: 'image',
      fill: ['rgba(0,0,0,0)','equal_sides_marker.png','0px','0px']
   },
   {
      rect: ['9px','44px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['179px','44px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'RectangleCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['349px','44px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'RectangleCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['519px','44px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'RectangleCopy3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['9px','212px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'RectangleCopy7',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['179px','212px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'RectangleCopy6',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['349px','212px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'RectangleCopy5',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['519px','212px','170px','168px','auto','auto'],
      userClass: 'recte',
      id: 'RectangleCopy4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   {
      id: 'btn_release',
      symbolName: 'btn_release'
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
      id: 'btn_reset',
      symbolName: 'btn_reset'
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
      id: 'Symbol_7',
      symbolName: 'Symbol_7'
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
            ["style", "top", '263px'],
            ["transform", "scaleY", '0.83'],
            ["transform", "scaleX", '0.83'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '697px']
         ],
         "${_equal_sides_marker}": [
            ["style", "left", '460px'],
            ["style", "top", '59px']
         ],
         "${_RectangleCopy4}": [
            ["style", "height", '168px'],
            ["style", "top", '212px'],
            ["style", "left", '519px'],
            ["style", "width", '170px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '44px'],
            ["style", "height", '168px'],
            ["style", "left", '179px'],
            ["style", "width", '170px']
         ],
         "${symbolSelector}": [
            ["style", "height", '401px'],
            ["style", "width", '788px']
         ],
         "${_Symbol_7Copy5}": [
            ["style", "left", '349px'],
            ["style", "top", '212px']
         ],
         "${_RectangleCopy2}": [
            ["style", "height", '168px'],
            ["style", "top", '44px'],
            ["style", "left", '349px'],
            ["style", "width", '170px']
         ],
         "${_RectangleCopy5}": [
            ["style", "top", '212px'],
            ["style", "height", '168px'],
            ["style", "left", '349px'],
            ["style", "width", '170px']
         ],
         "${_RectangleCopy3}": [
            ["style", "top", '44px'],
            ["style", "height", '168px'],
            ["style", "left", '519px'],
            ["style", "width", '170px']
         ],
         "${_Symbol_7Copy2}": [
            ["style", "left", '349px']
         ],
         "${_tool3}": [
            ["style", "top", '165px'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '697px'],
            ["transform", "scaleY", '0.83']
         ],
         "${_RectangleCopy6}": [
            ["style", "height", '168px'],
            ["style", "top", '212px'],
            ["style", "left", '179px'],
            ["style", "width", '170px']
         ],
         "${_Symbol_7Copy}": [
            ["style", "left", '179px'],
            ["style", "overflow", 'hidden']
         ],
         "${_RectangleCopy7}": [
            ["style", "top", '212px'],
            ["style", "height", '168px'],
            ["style", "left", '9px'],
            ["style", "width", '170px']
         ],
         "${_parallel_tool2}": [
            ["style", "top", '171px'],
            ["style", "left", '447px']
         ],
         "${_Symbol_7Copy3}": [
            ["style", "left", '519px']
         ],
         "${_Rectangle}": [
            ["style", "height", '168px'],
            ["style", "top", '44px'],
            ["style", "left", '9px'],
            ["style", "width", '170px']
         ],
         "${_shapePanelBg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '14px'],
            ["style", "font-size", '25px'],
            ["style", "top", '9px'],
            ["style", "text-align", 'center'],
            ["style", "height", '36px'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "width", '192px']
         ],
         "${_RightAngle_tool}": [
            ["style", "top", '115px'],
            ["style", "left", '128px']
         ],
         "${_btn_reset}": [
            ["style", "left", '319px']
         ],
         "${_Symbol_7Copy6}": [
            ["style", "left", '179px'],
            ["style", "top", '212px']
         ],
         "${_Symbol_7Copy4}": [
            ["style", "left", '519px'],
            ["style", "top", '212px']
         ],
         "${_tool1}": [
            ["style", "top", '66px'],
            ["transform", "scaleX", '0.83'],
            ["style", "left", '697px'],
            ["transform", "scaleY", '0.83']
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
            { id: "eid337", tween: [ "style", "${_tool1}", "top", '66px', { fromValue: '66px'}], position: 0, duration: 0 },
            { id: "eid336", tween: [ "style", "${_tool4}", "top", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
            { id: "eid333", tween: [ "transform", "${_tool1}", "scaleY", '0.83', { fromValue: '0.83'}], position: 0, duration: 0 },
            { id: "eid302", tween: [ "style", "${_tool1}", "left", '697px', { fromValue: '697px'}], position: 0, duration: 0 },
            { id: "eid330", tween: [ "transform", "${_tool3}", "scaleX", '0.83', { fromValue: '0.83'}], position: 0, duration: 0 },
            { id: "eid334", tween: [ "transform", "${_tool4}", "scaleX", '0.83', { fromValue: '0.83'}], position: 0, duration: 0 },
            { id: "eid332", tween: [ "transform", "${_tool1}", "scaleX", '0.83', { fromValue: '0.83'}], position: 0, duration: 0 },
            { id: "eid339", tween: [ "style", "${_tool3}", "left", '697px', { fromValue: '697px'}], position: 0, duration: 0 },
            { id: "eid335", tween: [ "transform", "${_tool4}", "scaleY", '0.83', { fromValue: '0.83'}], position: 0, duration: 0 },
            { id: "eid343", tween: [ "style", "${_tool3}", "top", '165px', { fromValue: '165px'}], position: 0, duration: 0 },
            { id: "eid331", tween: [ "transform", "${_tool3}", "scaleY", '0.83', { fromValue: '0.83'}], position: 0, duration: 0 }         ]
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
      type: 'image',
      id: 'tool1_up',
      rect: ['0px','0px','78px','78px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/tool1_up.png','0px','0px']
   },
   {
      type: 'text',
      userClass: 'txt',
      rect: ['82px','19px','78px','44px','auto','auto'],
      id: 'Text3',
      text: 'समान साइड टूल<br>',
      align: 'left',
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','400','none','normal']
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
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '82px'],
            ["style", "font-size", '20px'],
            ["style", "top", '19px'],
            ["style", "text-align", 'left'],
            ["style", "height", '44px'],
            ["style", "font-family", 'Adobe Devanagari'],
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
      rect: ['82px','19px','91px','44px','auto','auto'],
      userClass: 'txt',
      align: 'left',
      id: 'Text3',
      text: 'The Angle Marker',
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(255,255,255,1.00)','400','none','normal'],
      type: 'text'
   },
   {
      userClass: 'img',
      id: 'tool2_up',
      type: 'image',
      rect: ['0px','0px','78px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/tool2_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '19px'],
            ["style", "font-size", '15px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "height", '44px'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '82px'],
            ["style", "width", '91px']
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
      rect: ['84px','22px','89px','46px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','400','none','normal'],
      userClass: 'txt',
      id: 'Text3Copy',
      text: 'समानांतर<br>लाइन टूल',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_tool3_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text3Copy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '84px'],
            ["style", "font-size", '20px'],
            ["style", "top", '22px'],
            ["style", "text-align", 'left'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '89px']
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
      id: 'btn_release_up',
      rect: ['0px','0px','88px','27px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/btn_release_up.png','0px','0px']
   },
   {
      type: 'text',
      userClass: 'txt',
      rect: ['0px','2px','88px','27px','auto','auto'],
      id: 'Text2',
      text: 'छोड दें',
      align: 'center',
      font: ['Adobe Devanagari',20,'rgba(0,45,26,1.00)','bold','none','normal']
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
            ["style", "font-size", '20px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Adobe Devanagari'],
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
      type: 'image',
      id: 'btn_common_up',
      rect: ['0','0','88px','27px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/btn_common_up.png','0px','0px']
   },
   {
      type: 'text',
      userClass: 'txt',
      rect: ['0px','2px','88px','27px','auto','auto'],
      id: 'Text2',
      text: 'रीप्ले करें<br>',
      align: 'center',
      font: ['Adobe Devanagari',20,'rgba(0,45,26,1.00)','bold','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '2px'],
            ["style", "width", '88px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
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
      fill: ['rgba(0,0,0,0)','images/questionPanelBg_m1.png','0px','0px']
   },
   {
      rect: ['32px','94px','802px','131px','auto','auto'],
      userClass: 'quest',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      id: 'btn_ask',
      type: 'rect',
      userClass: 'ask',
      rect: ['660','28','auto','auto','auto','auto']
   },
   {
      id: 'questionField',
      type: 'rect',
      userClass: 'sample',
      rect: ['42px','101px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'btn_ask',
      symbolName: 'btn_ask'
   },
   {
      id: 'questionField',
      symbolName: 'questionField'
   }   ]
   },
   states: {
      "Base State": {
         "${_btn_ask}": [
            ["style", "left", '747px'],
            ["style", "top", '56px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '94px'],
            ["style", "height", '131px'],
            ["style", "left", '32px'],
            ["style", "width", '802px']
         ],
         "${_questionPanelBg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '241px'],
            ["style", "width", '915px']
         ],
         "${_questionField}": [
            ["style", "top", '101px'],
            ["style", "left", '42px']
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
            { id: "eid360", tween: [ "style", "${_btn_ask}", "left", '747px', { fromValue: '747px'}], position: 0, duration: 0 },
            { id: "eid361", tween: [ "style", "${_btn_ask}", "top", '56px', { fromValue: '56px'}], position: 0, duration: 0 }         ]
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
      rect: ['0px','0px','145px','29px','auto','auto'],
      id: 'dropDown_up',
      type: 'image',
      display: 'none',
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
      type: 'image',
      id: 'btn_common_up2',
      rect: ['0px','2px','88px','27px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/btn_common_up.png','0px','0px']
   },
   {
      type: 'text',
      userClass: 'txt',
      rect: ['0px','4px','92px','27px','auto','auto'],
      id: 'Text',
      text: 'क्लु<br>',
      align: 'center',
      font: ['Adobe Devanagari',20,'rgba(0,45,26,1.00)','700','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_common_up2}": [
            ["style", "top", '2px'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "width", '92px'],
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
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
      type: 'image',
      id: 'btn_done_up',
      rect: ['0px','0px','92px','85px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/btn_done_up.png','0px','0px']
   },
   {
      type: 'text',
      userClass: 'txt',
      rect: ['7px','50px','78px','28px','auto','auto'],
      id: 'Text2',
      text: 'पूर्ण<br>',
      align: 'center',
      font: ['Adobe Devanagari',25,'rgba(0,45,26,1.00)','bold','none','normal']
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
            ["style", "top", '50px'],
            ["style", "width", '78px'],
            ["style", "height", '28px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '7px'],
            ["style", "font-size", '25px']
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
      id: 'robotGlow',
      type: 'image',
      rect: ['-123px','-111px','416px','416px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/robotGlow.png','0px','0px']
   },
   {
      id: 'robot',
      type: 'image',
      rect: ['0px','0px','169px','194px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/robot.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_robotGlow}": [
            ["style", "top", '-111px'],
            ["style", "left", '-123px']
         ],
         "${symbolSelector}": [
            ["style", "height", '194px'],
            ["style", "width", '169px']
         ],
         "${_robot}": [
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
      rect: ['0px','-49px','174px','403px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinPanel_bg2.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50_orange',
      rect: ['53px','264px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin50_orange.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50',
      rect: ['53px','202px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50Copy',
      rect: ['53px','187px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50Copy2',
      rect: ['53px','172px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50Copy3',
      rect: ['53px','157px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50Copy4',
      rect: ['53px','142px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50Copy5',
      rect: ['53px','127px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin200',
      rect: ['53px','66px','64px','60px','auto','auto'],
      userClass: 'coin',
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      type: 'rect',
      id: 'token_blast',
      rect: ['28px','38px','auto','auto','auto','auto'],
      display: 'none',
      transform: []
   },
   {
      id: 'coinBox_highlight',
      type: 'image',
      rect: ['45px','46px','80px','291px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinBox_highlight.png','0px','0px']
   },
   {
      type: 'image',
      id: 'cord',
      rect: ['43px','326px','104px','70px','auto','auto'],
      transform: [[0,0],['119']],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['27px','8px','37px','26px','auto','auto'],
      id: 'Text4Copy3',
      text: 'स्कोर',
      align: 'right',
      font: ['Adobe Devanagari',20,'rgba(246,205,81,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      userClass: 'scoretxt',
      rect: ['63px','-1px','83px','46px','auto','auto'],
      id: 'Text4Copy2',
      text: '0000',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(246,205,81,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['25px','-33px','37px','26px','auto','auto'],
      id: 'Text4Copy',
      text: 'उच्च स्कोर',
      align: 'right',
      font: ['Adobe Devanagari',16,'rgba(89,128,147,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      userClass: 'scoretxt2',
      rect: ['61px','-37px','83px','46px','auto','auto'],
      id: 'Text4',
      text: '0000',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(89,128,147,1.00)','normal','none','normal']
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
            ["style", "top", '8px'],
            ["style", "width", '37px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(246,205,81,1)'],
            ["style", "height", '26px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '27px'],
            ["style", "font-size", '20px']
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
            ["style", "top", '-49px'],
            ["style", "left", '0px'],
            ["style", "height", '403px']
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
            ["style", "top", '-37px'],
            ["style", "text-align", 'center'],
            ["style", "width", '83px'],
            ["color", "color", 'rgba(89,128,147,1)'],
            ["style", "height", '46px'],
            ["style", "left", '61px'],
            ["style", "font-size", '30px']
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
         "${_coin50Copy5}": [
            ["style", "top", '127px'],
            ["style", "left", '53px']
         ],
         "${_coin50_orange}": [
            ["style", "top", '264px'],
            ["style", "left", '53px']
         ],
         "${_cord}": [
            ["style", "top", '326px'],
            ["transform", "rotateZ", '119deg'],
            ["style", "height", '70px'],
            ["style", "left", '43px'],
            ["style", "width", '104px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '-1px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '30px'],
            ["color", "color", 'rgba(246,205,81,1)'],
            ["style", "height", '46px'],
            ["style", "left", '63px'],
            ["style", "width", '83px']
         ],
         "${_Text4Copy}": [
            ["style", "line-height", '16px'],
            ["color", "color", 'rgba(89,128,147,1)'],
            ["style", "left", '25px'],
            ["style", "width", '37px'],
            ["style", "top", '-33px'],
            ["style", "text-align", 'right'],
            ["style", "height", '26px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '16px']
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
            { id: "eid440", tween: [ "style", "${_token_blast}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
      type: 'text',
      id: 'Text',
      text: 'आपके क्लु यहां दिखेंगे...<br>',
      rect: ['0px','0px','525px','20px','auto','auto'],
      font: ['Adobe Devanagari',18,'rgba(81,249,255,1.00)','700','none','']
   },
   {
      type: 'text',
      align: 'right',
      rect: ['537px','0px','119px','20px','auto','auto'],
      id: 'TextCopy2',
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(168,255,81,1.00)','700','none','']
   },
   {
      rect: ['0px','20px','683px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(50,133,180,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '20px'],
            ["style", "width", '525px']
         ],
         "${_Rectangle}": [
            ["style", "height", '1px'],
            ["color", "background-color", 'rgba(50,133,180,1.00)']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "width", '525px'],
            ["color", "color", 'rgba(81,249,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "height", '20px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '0px'],
            ["style", "font-size", '18px']
         ],
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
         "${_tool2A_up}": [
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
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
         ],
         "${_tool2B_up}": [
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
         "${symbolSelector}": [
            ["style", "height", '47px'],
            ["style", "width", '47px']
         ],
         "${_tool2C_up}": [
            ["style", "top", '0px'],
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
      type: 'text',
      userClass: 'txt',
      rect: ['84px','17px','97px','44px','auto','auto'],
      id: 'Text3Copy9',
      text: 'समकोण टूल<br>',
      align: 'left',
      font: ['Adobe Devanagari',20,'rgba(255,255,255,1.00)','400','none','normal']
   },
   {
      type: 'image',
      id: 'tool5_up',
      rect: ['0px','0px','78px','78px','auto','auto'],
      userClass: 'img',
      fill: ['rgba(0,0,0,0)','images/tool5_up.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3Copy9}": [
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '84px'],
            ["style", "width", '97px'],
            ["style", "top", '17px'],
            ["style", "text-align", 'left'],
            ["style", "height", '44px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px']
         ],
         "${_tool5_up}": [
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
         "${_alien_up2}": [
            ["style", "top", '4px'],
            ["style", "height", '25px'],
            ["style", "left", '141px'],
            ["style", "width", '25px']
         ],
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '168px'],
            ["style", "left", '0px'],
            ["style", "width", '170px']
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
      id: 'Text2',
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
         "${_Text2}": [
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
      fill: ['rgba(0,0,0,0)','images/feedback_m1_bg.jpg','0px','0px']
   },
   {
      rect: ['0px','283px','1014px','84px','auto','auto'],
      id: 'stage_strip',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/stage_strip.png','0px','0px']
   },
   {
      userClass: 'level',
      type: 'text',
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,246,0,1.00)','700','none',''],
      id: 'Text',
      text: 'Level 1',
      align: 'center',
      rect: ['426px','230px','198px','auto','auto','auto']
   },
   {
      userClass: 'stageName',
      type: 'text',
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'TextCopy',
      text: 'Stage 1',
      align: 'center',
      rect: ['413px','294px','198px','62px','auto','auto']
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
            ["style", "top", '283px'],
            ["transform", "scaleY", '0.05'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
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
            ["style", "width", '113px'],
            ["style", "overflow", 'hidden']
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
})(jQuery, AdobeEdge, "mission1");
