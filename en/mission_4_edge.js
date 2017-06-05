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
            id:'ref_screen022',
            type:'image',
            rect:['0px','0px','1014px','652px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ref_screen02.png",'0px','0px']
         },
         {
            id:'bg_m4',
            type:'image',
            rect:['0px','0px','1014px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg_m4.png",'0px','0px']
         },
         {
            id:'Phase1',
            type:'rect',
            rect:['279','69','auto','auto','auto','auto'],
            userClass:"draw"
         },
         {
            id:'Phase2',
            type:'rect',
            rect:['0','74','auto','auto','auto','auto'],
            userClass:"play"
         },
         {
            id:'topBand2',
            type:'rect',
            rect:['10','-20','auto','auto','auto','auto'],
            userClass:"HUD"
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
            id:'topBand2',
            symbolName:'topBand'
         },
         {
            id:'Phase1',
            symbolName:'Phase1'
         },
         {
            id:'Stage_transition',
            symbolName:'Stage_transition'
         },
         {
            id:'Phase2',
            symbolName:'Phase2'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bg_m4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_ref_screen022}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1014px'],
            ["style", "height", '648px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Stage_transition}": [
            ["style", "display", 'none']
         ],
         "${_topBand2}": [
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
            { id: "eid286", tween: [ "style", "${_Stage_transition}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
      type: 'text',
      rect: ['44px','27px','143px','34px','auto','auto'],
      align: 'center',
      id: 'Text',
      text: 'MISSION 0',
      userClass: 'mission',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none','']
   },
   {
      type: 'text',
      rect: ['44px','27px','143px','34px','auto','auto'],
      align: 'left',
      id: 'TextCopy',
      text: 'LEVEL 0',
      userClass: 'level',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none','']
   },
   {
      type: 'text',
      rect: ['44px','27px','143px','34px','auto','auto'],
      align: 'center',
      id: 'TextCopy2',
      text: '00',
      userClass: 'star',
      font: ['Tahoma, Geneva, sans-serif',22,'rgba(255,255,255,1.00)','700','none','']
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
         autoPlay: false,
         timeline: [
            { id: "eid3", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "color", "${_TextCopy2}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_TextCopy2}", "top", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid295", tween: [ "color", "${_TextCopy}", "color", 'rgba(56,64,75,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(56,64,75,1.00)'}], position: 0, duration: 0 },
            { id: "eid70", tween: [ "style", "${_TextCopy}", "left", '215px', { fromValue: '215px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_TextCopy}", "top", '27px', { fromValue: '27px'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_TextCopy2}", "left", '662px', { fromValue: '662px'}], position: 0, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Text}", "left", '41px', { fromValue: '41px'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_TextCopy2}", "font-size", '28px', { fromValue: '28px'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "style", "${_TextCopy2}", "width", '61px', { fromValue: '61px'}], position: 0, duration: 0 }         ]
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
      rect: ['0px','0px','88px','27px','auto','auto'],
      id: 'btn_release_up',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_release_up.png','0px','0px']
   },
   {
      rect: ['23px','4px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text4',
      text: 'Done',
      align: 'center',
      type: 'text'
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
         "${_Text4}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '23px']
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
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"btn_Reset": {
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
      rect: ['0px','0px','88px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_common_up.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1)','bold','none','normal'],
      type: 'text',
      id: 'Text5',
      text: 'Clear',
      align: 'center',
      rect: ['20px','4px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '88px']
         ],
         "${_Text5}": [
            ["style", "left", '20px'],
            ["style", "top", '4px']
         ],
         "${_btn_common_up}": [
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
"Phase1": {
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
      id: 'bg_phase1_4x4',
      type: 'image',
      rect: ['0px','0px','464px','576px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg_phase1.png','0px','0px']
   },
   {
      id: 'g4x4',
      type: 'rect',
      rect: ['36','111','auto','auto','auto','auto'],
      userClass: 'grid4'
   },
   {
      id: 'g5x5',
      type: 'rect',
      rect: ['36','111','auto','auto','auto','auto'],
      userClass: 'grid5'
   },
   {
      id: 'btn_Reset',
      type: 'rect',
      rect: ['23px','526px','auto','auto','auto','auto'],
      userClass: 'reset_btn'
   },
   {
      rect: ['344px','526px','auto','auto','auto','auto'],
      id: 'btn_done',
      userClass: 'drawBtn',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['29px','12px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Phase 1: Hide Frame',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,200,70,1.00)','700','none',''],
      type: 'text'
   },
   {
      userClass: 'teleporter1Shape',
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','400','none','normal'],
      align: 'left',
      id: 'Text3',
      text: 'Draw a Rotated Square with edges that are NOT vertical or horizontal.',
      type: 'text',
      rect: ['29px','39px','393px','42px','auto','auto']
   },
   {
      rect: ['432','607','auto','auto','auto','auto'],
      display: 'none',
      userClass: 'play_btn',
      id: 'btn_Play',
      type: 'rect'
   },
   {
      userClass: 'hideBOX',
      rect: ['16px','97px','438px','414px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   {
      id: 'btn_Reset',
      symbolName: 'btn_Reset'
   },
   {
      id: 'g5x5',
      symbolName: 'g5x5'
   },
   {
      id: 'g4x4',
      symbolName: 'g4x4'
   },
   {
      id: 'btn_Play',
      symbolName: 'btn_Play'
   },
   {
      id: 'btn_done',
      symbolName: 'btn_done'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '39px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '29px'],
            ["style", "font-size", '16px']
         ],
         "${_bg_phase1_4x4}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btn_Reset}": [
            ["style", "top", '526px'],
            ["style", "left", '23px'],
            ["style", "display", 'block']
         ],
         "${_btn_done}": [
            ["style", "top", '527px'],
            ["style", "left", '188px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '12px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(243,200,70,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '29px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '576px'],
            ["style", "width", '464px']
         ],
         "${_g5x5}": [
            ["style", "left", '36px'],
            ["style", "top", '112px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.01)'],
            ["style", "height", '405px'],
            ["style", "display", 'block'],
            ["style", "left", '23px'],
            ["style", "width", '409px']
         ],
         "${_btn_Play}": [
            ["style", "top", '526px'],
            ["style", "left", '341px'],
            ["style", "display", 'none']
         ],
         "${_g4x4}": [
            ["style", "display", 'block'],
            ["style", "left", '36px']
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
            { id: "eid172", tween: [ "style", "${_btn_Reset}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid232", tween: [ "style", "${_Rectangle}", "left", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "style", "${_Rectangle}", "width", '409px', { fromValue: '409px'}], position: 0, duration: 0 },
            { id: "eid184", tween: [ "style", "${_btn_Play}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid38", tween: [ "style", "${_g4x4}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid230", tween: [ "color", "${_Rectangle}", "background-color", 'rgba(255,255,255,0.01)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.01)'}], position: 0, duration: 0 },
            { id: "eid234", tween: [ "style", "${_Rectangle}", "height", '405px', { fromValue: '405px'}], position: 0, duration: 0 }         ]
      }
   }
},
"inst_txt": {
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
      id: 'm4_txt_strip',
      type: 'image',
      rect: ['299px','0px','1014px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/m4_txt_strip.png','0px','0px']
   },
   {
      rect: ['442px','1px','541px','27px','auto','auto'],
      userClass: 'oppText',
      align: 'left',
      id: 'Text6',
      text: 'Your teleporter must be a rectangle or a square. Can be a rotated.',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(153,255,0,1.00)','400','none','normal'],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '1px'],
            ["style", "font-size", '18px'],
            ["style", "text-align", 'left'],
            ["style", "height", '27px'],
            ["color", "color", 'rgba(153,255,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '442px'],
            ["style", "width", '541px']
         ],
         "${_m4_txt_strip}": [
            ["style", "left", '299px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
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
      id: 'coinPanel_bg',
      type: 'image',
      rect: ['-46px','-49px','231px','441px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinPanel_bg.png','0px','0px']
   },
   {
      rect: ['53px','267px','64px','60px','auto','auto'],
      id: 'coin100_orange',
      userClass: 'coin',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin100_orange.png','0px','0px']
   },
   {
      rect: ['53px','199px','64px','60px','auto','auto'],
      id: 'coin1102',
      userClass: 'coin',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      rect: ['53px','181px','64px','60px','auto','auto'],
      id: 'coin110',
      userClass: 'coin',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      rect: ['53px','162px','64px','60px','auto','auto'],
      id: 'coin110Copy',
      userClass: 'coin',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      rect: ['53px','146px','64px','60px','auto','auto'],
      id: 'coin110Copy2',
      userClass: 'coin',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      rect: ['53px','128px','64px','60px','auto','auto'],
      id: 'coin110Copy3',
      userClass: 'coin',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin110.png','0px','0px']
   },
   {
      rect: ['53px','57px','64px','60px','auto','auto'],
      id: 'coin1000',
      userClass: 'coin',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin1000.png','0px','0px']
   },
   {
      rect: ['28px','29px','auto','auto','auto','auto'],
      id: 'token_blast',
      transform: [],
      display: 'none',
      type: 'rect'
   },
   {
      id: 'coinBox_highlight',
      type: 'image',
      rect: ['45px','40px','80px','291px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/coinBox_highlight.png','0px','0px']
   },
   {
      rect: ['27px','7px','37px','26px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',15,'rgba(246,205,81,1.00)','normal','none','normal'],
      id: 'Text4Copy3',
      text: 'Score',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['63px','-1px','83px','46px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(246,205,81,1.00)','normal','none','normal'],
      userClass: 'scoretxt',
      id: 'Text4Copy2',
      text: '0000',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['25px','-33px','37px','26px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(89,128,147,1.00)','normal','none','normal'],
      id: 'Text4Copy',
      text: 'High Score',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['61px','-37px','83px','46px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(89,128,147,1.00)','normal','none','normal'],
      userClass: 'scoretxt2',
      id: 'Text4',
      text: '0000',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'token_blast',
      symbolName: 'token_blast'
   }   ]
   },
   states: {
      "Base State": {
         "${_coin110Copy3}": [
            ["style", "top", '128px'],
            ["style", "left", '53px']
         ],
         "${_coin1102}": [
            ["style", "left", '53px'],
            ["style", "top", '199px']
         ],
         "${_coinPanel_bg}": [
            ["style", "left", '-46px'],
            ["style", "top", '-49px']
         ],
         "${_coin110Copy2}": [
            ["style", "top", '146px'],
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
         "${_Text4Copy3}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'right'],
            ["style", "width", '37px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(246,205,81,1)'],
            ["style", "left", '27px'],
            ["style", "font-size", '15px']
         ],
         "${_coin100_orange}": [
            ["style", "left", '53px'],
            ["style", "top", '267px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '-33px'],
            ["style", "text-align", 'right'],
            ["style", "font-size", '12px'],
            ["style", "height", '26px'],
            ["color", "color", 'rgba(89,128,147,1)'],
            ["style", "left", '25px'],
            ["style", "width", '37px']
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
         "${_token_blast}": [
            ["style", "top", '29px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '28px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '361px'],
            ["style", "width", '174px']
         ],
         "${_coin110}": [
            ["style", "top", '181px'],
            ["style", "left", '53px']
         ],
         "${_coinBox_highlight}": [
            ["style", "left", '45px'],
            ["style", "top", '40px']
         ],
         "${_coin1000}": [
            ["style", "left", '53px'],
            ["style", "top", '57px']
         ],
         "${_coin110Copy}": [
            ["style", "top", '162px'],
            ["style", "left", '53px']
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
            { id: "eid284", tween: [ "style", "${_token_blast}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"btn_nextcase": {
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
      id: 'btn_round_up',
      type: 'image',
      rect: ['0px','0px','85px','85px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_round_up.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['21px','22px','44px','41px','auto','auto'],
      align: 'center',
      id: 'Text7',
      text: 'Next Case',
      userClass: 'txt',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text7}": [
            ["style", "top", '22px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '21px'],
            ["style", "font-size", '18px']
         ],
         "${_btn_round_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '85px'],
            ["style", "width", '85px']
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
"Phase2": {
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
      id: 'coinBox',
      type: 'rect',
      rect: ['867px','84px','auto','auto','auto','auto']
   },
   {
      rect: ['923px','436px','auto','auto','auto','auto'],
      id: 'btn_nextcase',
      userClass: 'nextcase',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      id: 'bg_player',
      type: 'image',
      rect: ['7px','46px','434px','472px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg_player.png','0px','0px']
   },
   {
      id: 'bg_opponent',
      type: 'image',
      rect: ['449px','46px','434px','472px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bg_opponent.png','0px','0px']
   },
   {
      rect: ['75px','57px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'Your Area',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,200,70,1.00)','700','none',''],
      type: 'text'
   },
   {
      rect: ['490px','57px','auto','auto','auto','auto'],
      id: 'TextCopy',
      text: 'Opponent\'s Area',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      id: 'inst_txt_1',
      type: 'rect',
      rect: ['416','-36','auto','auto','auto','auto']
   },
   {
      id: 'inst_txtCopy',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'opp',
      type: 'rect',
      userClass: 'opp',
      rect: ['464','103','auto','auto','auto','auto']
   },
   {
      id: 'oppCopy',
      type: 'rect',
      userClass: 'player',
      rect: ['464','103','auto','auto','auto','auto']
   },
   {
      rect: ['20px','97px','438px','414px','auto','auto'],
      userClass: 'hideBOX',
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['12px','89px','auto','auto','auto','auto'],
      id: 'anim_thinking',
      userClass: 'Thinking',
      display: 'none',
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'inst_txtCopy',
      symbolName: 'inst_txt'
   },
   {
      id: 'oppCopy',
      symbolName: 'opp'
   },
   {
      id: 'anim_thinking',
      symbolName: 'anim_thinking'
   },
   {
      id: 'coinBox',
      symbolName: 'coinBox'
   },
   {
      id: 'btn_nextcase',
      symbolName: 'btn_nextcase'
   },
   {
      id: 'inst_txt_1',
      symbolName: 'inst_txt_1'
   },
   {
      id: 'opp',
      symbolName: 'opp'
   }   ]
   },
   states: {
      "Base State": {
         "${_coinBox}": [
            ["style", "left", '867px'],
            ["style", "top", '84px']
         ],
         "${_anim_thinking}": [
            ["style", "top", '89px'],
            ["style", "left", '12px'],
            ["style", "display", 'none']
         ],
         "${_btn_nextcase}": [
            ["style", "top", '436px'],
            ["style", "left", '923px'],
            ["style", "cursor", 'pointer']
         ],
         "${_oppCopy}": [
            ["style", "left", '22px'],
            ["style", "top", '103px']
         ],
         "${_bg_opponent}": [
            ["style", "left", '449px'],
            ["style", "top", '46px']
         ],
         "${_bg_player}": [
            ["style", "left", '7px'],
            ["style", "top", '46px']
         ],
         "${_inst_txt_1}": [
            ["style", "left", '7px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '521px'],
            ["style", "width", '1040px']
         ],
         "${_Text}": [
            ["style", "top", '57px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(243,200,70,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '75px'],
            ["style", "font-size", '18px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,0.0078)'],
            ["style", "display", 'block'],
            ["style", "height", '405px'],
            ["style", "left", '20px'],
            ["style", "width", '409px']
         ],
         "${_TextCopy}": [
            ["style", "top", '57px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '490px'],
            ["style", "font-size", '18px']
         ],
         "${_inst_txtCopy}": [
            ["style", "left", '20px'],
            ["style", "top", '529px']
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
            { id: "eid250", tween: [ "style", "${_inst_txtCopy}", "top", '529px', { fromValue: '529px'}], position: 0, duration: 0 },
            { id: "eid84", tween: [ "style", "${_oppCopy}", "top", '103px', { fromValue: '103px'}], position: 0, duration: 0 },
            { id: "eid253", tween: [ "style", "${_inst_txtCopy}", "left", '20px', { fromValue: '20px'}], position: 0, duration: 0 },
            { id: "eid285", tween: [ "style", "${_anim_thinking}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid258", tween: [ "style", "${_inst_txt_1}", "left", '7px', { fromValue: '7px'}], position: 0, duration: 0 },
            { id: "eid259", tween: [ "style", "${_inst_txt_1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid82", tween: [ "style", "${_oppCopy}", "left", '22px', { fromValue: '22px'}], position: 0, duration: 0 }         ]
      }
   }
},
"g5x5": {
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
      userClass: 'boxGrid',
      id: '_5x5grid',
      type: 'image',
      rect: ['0px','0px','380px','380px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/5x5grid.png','0px','0px']
   },
   {
      id: 'circle',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy2',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy3',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy4',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy9',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy8',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy7',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy6',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy5',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy14',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy13',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy12',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy11',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy10',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy24',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy23',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy22',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy21',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy20',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy19',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy18',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy17',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy16',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy15',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'circleCopy12',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy13',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy2',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy16',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy23',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy3',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy15',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy4',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy19',
      symbolName: 'circle'
   },
   {
      id: 'circle',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy10',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy11',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy18',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy9',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy14',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy6',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy5',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy17',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy20',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy21',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy22',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy24',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy8',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy7',
      symbolName: 'circle'
   }   ]
   },
   states: {
      "Base State": {
         "${_circleCopy14}": [
            ["style", "left", '-10px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy13}": [
            ["style", "left", '85px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy10}": [
            ["style", "left", '368px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy17}": [
            ["style", "left", '180px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy7}": [
            ["style", "left", '180px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy}": [
            ["style", "left", '85px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy8}": [
            ["style", "left", '85px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy15}": [
            ["style", "left", '368px'],
            ["style", "top", '-11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '377px'],
            ["style", "width", '385px']
         ],
         "${_circle}": [
            ["style", "left", '-10px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy18}": [
            ["style", "left", '85px'],
            ["style", "top", '-11px']
         ],
         "${__5x5grid}": [
            ["style", "height", '380px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '380px']
         ],
         "${_circleCopy23}": [
            ["style", "left", '85px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy22}": [
            ["style", "left", '180px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy12}": [
            ["style", "left", '180px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy3}": [
            ["style", "left", '275px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy4}": [
            ["style", "left", '368px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy19}": [
            ["style", "left", '-10px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy20}": [
            ["style", "left", '368px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy11}": [
            ["style", "left", '275px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy21}": [
            ["style", "left", '275px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy24}": [
            ["style", "left", '-10px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy2}": [
            ["style", "left", '180px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy16}": [
            ["style", "left", '275px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy9}": [
            ["style", "left", '-10px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy5}": [
            ["style", "left", '368px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy6}": [
            ["style", "left", '275px'],
            ["style", "top", '271px']
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
            { id: "eid136", tween: [ "style", "${_circleCopy21}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid113", tween: [ "style", "${_circleCopy5}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid272", tween: [ "style", "${_circleCopy11}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_circleCopy2}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_circleCopy15}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid270", tween: [ "style", "${_circleCopy11}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_circleCopy3}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_circleCopy14}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_circleCopy23}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_circleCopy17}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_circle}", "left", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_circleCopy24}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid216", tween: [ "style", "${_circleCopy18}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "style", "${_circleCopy7}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid133", tween: [ "style", "${_circleCopy22}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid279", tween: [ "style", "${_circleCopy15}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_circleCopy6}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_circleCopy}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_circleCopy3}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_circleCopy16}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_circleCopy21}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid278", tween: [ "style", "${_circleCopy5}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_circleCopy13}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_circleCopy16}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_circleCopy8}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_circleCopy4}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid281", tween: [ "style", "${_circleCopy10}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid282", tween: [ "style", "${_circleCopy4}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_circleCopy7}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_circleCopy12}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_circleCopy23}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_circleCopy18}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_circleCopy6}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_circleCopy8}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_circle}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_circleCopy9}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid280", tween: [ "style", "${_circleCopy20}", "left", '368px', { fromValue: '368px'}], position: 0, duration: 0 },
            { id: "eid271", tween: [ "style", "${_circleCopy12}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_circleCopy10}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_circleCopy19}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid214", tween: [ "style", "${_circleCopy17}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_circleCopy22}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid132", tween: [ "style", "${_circleCopy20}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid264", tween: [ "style", "${_circleCopy13}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 }         ]
      }
   }
},
"g4x4": {
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
      rect: ['0px','-1px','381px','381px','auto','auto'],
      id: '_4x4grid2',
      userClass: 'boxGrid',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/4x4grid2.png','0px','0px']
   },
   {
      id: 'circleCopy25',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy26',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy27',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy28',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy32',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy31',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy30',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy29',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy36',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy35',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy34',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy33',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy40',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy39',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy38',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy37',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   }],
   symbolInstances: [
   {
      id: 'circleCopy32',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy31',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy28',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy37',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy38',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy30',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy36',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy39',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy33',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy27',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy25',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy40',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy34',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy35',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy29',
      symbolName: 'circle'
   },
   {
      id: 'circleCopy26',
      symbolName: 'circle'
   }   ]
   },
   states: {
      "Base State": {
         "${_circleCopy34}": [
            ["style", "top", '112px'],
            ["style", "left", '244px']
         ],
         "${__4x4grid2}": [
            ["style", "height", '381px'],
            ["style", "top", '-1px'],
            ["style", "left", '0px'],
            ["style", "width", '381px']
         ],
         "${_circleCopy31}": [
            ["style", "left", '118px'],
            ["style", "top", '239px']
         ],
         "${symbolSelector}": [
            ["style", "height", '378px'],
            ["style", "width", '386px']
         ],
         "${_circleCopy25}": [
            ["style", "left", '-7px'],
            ["style", "top", '364px']
         ],
         "${_circleCopy36}": [
            ["style", "left", '-9px'],
            ["style", "top", '112px']
         ],
         "${_circleCopy40}": [
            ["style", "left", '-9px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy26}": [
            ["style", "left", '118px'],
            ["style", "top", '364px']
         ],
         "${_circleCopy35}": [
            ["style", "left", '116px'],
            ["style", "top", '112px']
         ],
         "${_circleCopy28}": [
            ["style", "top", '364px'],
            ["style", "left", '372px']
         ],
         "${_circleCopy32}": [
            ["style", "left", '-7px'],
            ["style", "top", '239px']
         ],
         "${_circleCopy37}": [
            ["style", "top", '-11px'],
            ["style", "left", '370px']
         ],
         "${_circleCopy29}": [
            ["style", "top", '239px'],
            ["style", "left", '372px']
         ],
         "${_circleCopy33}": [
            ["style", "top", '112px'],
            ["style", "left", '370px']
         ],
         "${_circleCopy27}": [
            ["style", "top", '364px'],
            ["style", "left", '246px']
         ],
         "${_circleCopy30}": [
            ["style", "top", '239px'],
            ["style", "left", '246px']
         ],
         "${_circleCopy39}": [
            ["style", "left", '116px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy38}": [
            ["style", "top", '-11px'],
            ["style", "left", '244px']
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
            { id: "eid162", tween: [ "style", "${_circleCopy35}", "left", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_circleCopy25}", "top", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid153", tween: [ "style", "${_circleCopy31}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid166", tween: [ "style", "${_circleCopy37}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_circleCopy26}", "left", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_circleCopy29}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid144", tween: [ "style", "${_circleCopy25}", "left", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_circleCopy33}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_circleCopy38}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "style", "${_circleCopy34}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_circleCopy32}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "style", "${_circleCopy28}", "left", '372px', { fromValue: '372px'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_circleCopy36}", "left", '-9px', { fromValue: '-9px'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "style", "${_circleCopy37}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_circleCopy30}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_circleCopy27}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid238", tween: [ "style", "${_circleCopy33}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_circleCopy34}", "left", '244px', { fromValue: '244px'}], position: 0, duration: 0 },
            { id: "eid164", tween: [ "style", "${_circleCopy39}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "style", "${_circleCopy40}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid237", tween: [ "style", "${_circleCopy29}", "left", '372px', { fromValue: '372px'}], position: 0, duration: 0 },
            { id: "eid161", tween: [ "style", "${_circleCopy35}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_circleCopy36}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 }         ]
      }
   }
},
"opp": {
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
      id: 'g4x4Copy',
      type: 'rect',
      rect: ['-428px','8px','auto','auto','auto','auto'],
      userClass: 'grid4'
   },
   {
      id: 'g5x5Copy',
      type: 'rect',
      rect: ['-428px','8px','auto','auto','auto','auto'],
      userClass: 'grid5'
   }],
   symbolInstances: [
   {
      id: 'g5x5Copy',
      symbolName: 'g5x5'
   },
   {
      id: 'g4x4Copy',
      symbolName: 'g4x4'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '398px'],
            ["style", "width", '403px']
         ],
         "${_g5x5Copy}": [
            ["style", "top", '10px'],
            ["style", "left", '9px']
         ],
         "${_g4x4Copy}": [
            ["style", "top", '9px'],
            ["style", "left", '9px']
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
"gridPlayer": {
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
      id: '_5x5grid',
      type: 'image',
      rect: ['0px','0px','386px','378px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/5x5grid.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '378px'],
            ["style", "width", '386px']
         ],
         "${__5x5grid}": [
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
"circle": {
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
      rect: ['0px','0px','22px','22px','auto','auto'],
      id: 'white_circle2Copy74',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/white_circle2.png','0px','0px']
   },
   {
      rect: ['0px','0px','22px','22px','auto','auto'],
      id: 'blue_circle',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','blue_circle.png','0px','0px']
   },
   {
      id: 'green_circle',
      type: 'image',
      rect: ['0px','0px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','green_circle.png','0px','0px']
   },
   {
      id: 'red_circle',
      type: 'image',
      rect: ['0px','0px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','red_circle.png','0px','0px']
   },
   {
      id: 'yellow_circle',
      type: 'image',
      rect: ['0px','0px','22px','22px','auto','auto'],
      fill: ['rgba(0,0,0,0)','yellow_circle.png','0px','0px']
   },
   {
      rect: ['0px','0px','22px','22px','auto','auto'],
      id: 'bluetick-circle',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','bluetick-circle.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_blue_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_red_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '22px'],
            ["style", "width", '22px']
         ],
         "${_green_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_yellow_circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_white_circle2Copy74}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_bluetick-circle}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
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
"btn_Play": {
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
      rect: ['0px','0px','86px','26px','auto','auto'],
      id: 'btn_reset_up2',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_reset_up.png','0px','0px']
   },
   {
      rect: ['11px','4px','63px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text4',
      text: 'GO',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_reset_up2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '27px'],
            ["style", "width", '88px']
         ],
         "${_Text4}": [
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '11px'],
            ["style", "width", '63px']
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
"inst_txt_1": {
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
      id: 'm4_txt_strip',
      type: 'image',
      rect: ['-8px','-2px','1014px','30px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/m4_txt_strip.png','0px','0px']
   },
   {
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(153,255,0,1.00)','400','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'It\'s your turn, select the point on the opponent’s grid.',
      align: 'center',
      rect: ['8px','1px','989px','27px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '1px'],
            ["style", "width", '989px'],
            ["color", "color", 'rgba(153,255,0,1.00)'],
            ["style", "height", '27px'],
            ["style", "font-weight", '400'],
            ["style", "left", '8px'],
            ["style", "font-size", '20px']
         ],
         "${_m4_txt_strip}": [
            ["style", "left", '-8px'],
            ["style", "top", '-2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
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
      rect: ['426px','230px','198px','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,246,0,1.00)','700','none',''],
      userClass: 'level',
      id: 'Text',
      text: 'Level 1',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['413px','294px','198px','62px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,255,255,1.00)','normal','none',''],
      userClass: 'stageName',
      id: 'TextCopy',
      text: 'Stage 1',
      align: 'center',
      type: 'text'
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
},
"anim_thinking": {
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
      rect: ['0px','0px','425px','425px','auto','auto'],
      borderRadius: ['30px 30px','30px 30px','30px 30px','30px 30px'],
      opacity: 0.41151080328784,
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(58,58,49,1.00)']
   },
   {
      rect: ['437px','0px','425px','425px','auto','auto'],
      borderRadius: ['30px 30px','30px 30px','30px 30px','30px 30px'],
      opacity: 0.3971223140792,
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(58,58,49,1.00)']
   },
   {
      id: 'thinking',
      type: 'image',
      rect: ['41px','110px','319px','205px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/thinking.gif','0px','0px']
   },
   {
      rect: ['149px','247px','auto','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',18,'rgba(255,255,255,1.00)','normal','none','italic'],
      id: 'Text2',
      text: 'Thinking...',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(58,58,49,1.00)'],
            ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.3971223140792'],
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '425px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '425px'],
            ["style", "left", '437px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(58,58,49,1.00)'],
            ["style", "border-top-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "opacity", '0.41151080328784'],
            ["style", "border-top-right-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '425px'],
            ["style", "top", '0px'],
            ["style", "border-bottom-left-radius", [30,30], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '425px'],
            ["style", "left", '0px']
         ],
         "${_thinking}": [
            ["style", "left", '41px'],
            ["style", "top", '110px']
         ],
         "${symbolSelector}": [
            ["style", "height", '425px'],
            ["style", "width", '425px']
         ],
         "${_Text2}": [
            ["style", "top", '247px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '149px'],
            ["style", "font-size", '18px']
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
})(jQuery, AdobeEdge, "mission4");
