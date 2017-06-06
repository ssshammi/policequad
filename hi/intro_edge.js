/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['gautami']='';
   fonts['\'kruti Dev\'']='';
   fonts['Verdana']='';
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
            id:'BG01',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'BG02',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG03',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG04',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG05',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG06',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG07',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG08',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'BG09',
            type:'rect',
            rect:['1014','0','auto','auto','auto','auto']
         },
         {
            id:'btn_next',
            type:'rect',
            rect:['955px','593px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnCLICKsnd"
         },
         {
            id:'btn_back',
            display:'none',
            type:'rect',
            rect:['10','593','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnCLICKsnd"
         },
         {
            id:'Rectangle',
            display:'none',
            type:'rect',
            rect:['867px','587px','147px','65px','auto','auto'],
            borderRadius:["33px 33px","33px 33px","33px 33px","33px 33px"],
            fill:["rgba(0,0,0,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Symbol_12',
            display:'none',
            type:'rect',
            rect:['875px','595','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"menu btnCLICKsnd2"
         },
         {
            id:'skip_btn',
            type:'rect',
            rect:['480','632','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnCLICKsnd"
         }],
         symbolInstances: [
         {
            id:'BG04',
            symbolName:'BG04'
         },
         {
            id:'BG08',
            symbolName:'BG_08'
         },
         {
            id:'BG03',
            symbolName:'BG03'
         },
         {
            id:'BG07',
            symbolName:'BG07'
         },
         {
            id:'skip_btn',
            symbolName:'skip_btn'
         },
         {
            id:'btn_back',
            symbolName:'btn_back'
         },
         {
            id:'BG02',
            symbolName:'BG02'
         },
         {
            id:'BG01',
            symbolName:'BG01'
         },
         {
            id:'btn_next',
            symbolName:'btn_next'
         },
         {
            id:'Symbol_12',
            symbolName:'Symbol_1'
         },
         {
            id:'BG05',
            symbolName:'BG05'
         },
         {
            id:'BG06',
            symbolName:'BG06'
         },
         {
            id:'BG09',
            symbolName:'BG09'
         }
         ]
      },
   states: {
      "Base State": {
         "${_btn_next}": [
            ["style", "cursor", 'pointer']
         ],
         "${_btn_back}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_skip_btn}": [
            ["style", "cursor", 'pointer']
         ],
         "${_BG02}": [
            ["style", "left", '1014px']
         ],
         "${_BG07}": [
            ["style", "left", '1014px']
         ],
         "${_BG04}": [
            ["style", "left", '1014px']
         ],
         "${_BG05}": [
            ["style", "left", '1014px']
         ],
         "${_BG08}": [
            ["style", "left", '1014px']
         ],
         "${_BG03}": [
            ["style", "left", '1014px']
         ],
         "${_BG06}": [
            ["style", "left", '1014px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '867px'],
            ["style", "width", '147px'],
            ["style", "top", '587px'],
            ["style", "border-bottom-left-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '65px'],
            ["style", "border-top-right-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "display", 'none']
         ],
         "${_BG09}": [
            ["style", "left", '1014px']
         ],
         "${_Symbol_12}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
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
            { id: "eid44", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid43", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid24", tween: [ "style", "${_BG04}", "left", '2028px', { fromValue: '1014px'}], position: 750, duration: 42, easing: "easeOutCirc" },
            { id: "eid18", tween: [ "style", "${_BG04}", "left", '1014px', { fromValue: '2028px'}], position: 792, duration: 42, easing: "easeOutCirc" },
            { id: "eid32", tween: [ "style", "${_BG04}", "left", '0px', { fromValue: '1014px'}], position: 833, duration: 167, easing: "easeOutCirc" },
            { id: "eid53", tween: [ "style", "${_BG08}", "left", '0px', { fromValue: '1014px'}], position: 1750, duration: 250, easing: "easeOutCirc" },
            { id: "eid27", tween: [ "style", "${_BG05}", "left", '2028px', { fromValue: '1014px'}], position: 1000, duration: 83, easing: "easeOutCirc" },
            { id: "eid19", tween: [ "style", "${_BG05}", "left", '1014px', { fromValue: '2028px'}], position: 1083, duration: 42, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_BG05}", "left", '0px', { fromValue: '1014px'}], position: 1125, duration: 125, easing: "easeOutCirc" },
            { id: "eid25", tween: [ "style", "${_BG07}", "left", '0px', { fromValue: '1014px'}], position: 1500, duration: 250, easing: "easeOutCirc" },
            { id: "eid41", tween: [ "style", "${_Rectangle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Rectangle}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_BG09}", "left", '2028px', { fromValue: '1014px'}], position: 2000, duration: 208, easing: "easeOutCirc" },
            { id: "eid22", tween: [ "style", "${_BG09}", "left", '0px', { fromValue: '2028px'}], position: 2208, duration: 42, easing: "easeOutCirc" },
            { id: "eid26", tween: [ "style", "${_BG06}", "left", '2028px', { fromValue: '1014px'}], position: 1250, duration: 125, easing: "easeOutCirc" },
            { id: "eid20", tween: [ "style", "${_BG06}", "left", '1014px', { fromValue: '2028px'}], position: 1375, duration: 42, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_BG06}", "left", '0px', { fromValue: '1014px'}], position: 1417, duration: 83, easing: "easeOutCirc" },
            { id: "eid16", tween: [ "style", "${_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid31", tween: [ "style", "${_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_Symbol_12}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Symbol_12}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 }         ]
      }
   }
},
"BG01": {
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
      id: 'BG1',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG01.jpg','0px','0px']
   },
   {
      rect: ['27px','27px','383px','29px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['38px','29px','362px','29px','auto','auto'],
      id: 'Text',
      text: 'वर्ष 2040, एक अंतरिक्ष यान पृथ्वी की ओर आ रहा है।<br>',
      align: 'left',
      font: ['\'Adobe Devanagari\'',20,'rgba(0,0,0,1.00)','400','none','italic']
   },
   {
      rect: ['70px','279px','303px','29px','auto','auto'],
      id: 'Rectangle2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['80px','284px','278px','19px','auto','auto'],
      id: 'TextCopy',
      text: 'वह आसानी से नीचे उतर तो जाता है...',
      align: 'right',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','400','none','italic']
   },
   {
      rect: ['420px','555px','278px','63px','auto','auto'],
      id: 'Rectangle2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['429px','562px','260px','60px','auto','auto'],
      id: 'TextCopy2',
      text: 'लेकिन उसे देख लिया गया है और जाँच-पड़ताल के लिए पुलिस वहाँ पहुँच जाती है।',
      align: 'left',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1.00)','400','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '38px'],
            ["style", "font-size", '20px'],
            ["style", "top", '29px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", '\'Adobe Devanagari\''],
            ["style", "width", '362px'],
            ["style", "height", '29px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '27px'],
            ["style", "height", '29px'],
            ["style", "left", '27px'],
            ["style", "width", '383px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "height", '63px'],
            ["style", "top", '555px'],
            ["style", "left", '420px'],
            ["style", "width", '278px']
         ],
         "${_TextCopy2}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '429px'],
            ["style", "font-size", '20px'],
            ["style", "top", '562px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '260px'],
            ["style", "height", '60px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "top", '279px'],
            ["style", "height", '29px'],
            ["style", "left", '70px'],
            ["style", "width", '303px']
         ],
         "${_BG1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '80px'],
            ["style", "font-size", '20px'],
            ["style", "top", '284px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '19px'],
            ["style", "width", '278px']
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
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"BG02": {
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
      id: 'BG2',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG02.jpg','0px','0px']
   },
   {
      rect: ['29px','26px','419px','72px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['38px','35px','395px','58px','auto','auto'],
      id: 'Text2',
      text: 'पुलिस के पास आने पर यान का दरवाजा खुलता है और कुछ विचित्र प्राणी बाहर आते हैं; उनमें से एक उनका नेता जान पड़ता है!',
      align: 'left',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','400','none','italic']
   },
   {
      rect: ['646px','26px','122px','78px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['659px','147px','14px','14px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['791px','130px','10px','10px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['673px','120px','18px','18px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['768px','120px','16px','16px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['749px','98px','22px','22px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['697px','42px','auto','auto','auto','auto'],
      id: 'Text3',
      text: '?',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',36,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','700','none','normal'],
      rect: ['461px','232px','41px','auto','auto','auto'],
      id: 'Text',
      text: 'शांति',
      align: 'center',
      transform: [[0,0],['10']]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '14px'],
            ["style", "width", '14px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '120px'],
            ["style", "height", '18px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '673px'],
            ["style", "width", '18px']
         ],
         "${_Text2}": [
            ["style", "line-height", '20px'],
            ["style", "width", '395px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '58px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-weight", '400'],
            ["style", "font-size", '20px']
         ],
         "${_Ellipse}": [
            ["style", "top", '26px'],
            ["style", "left", '646px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '120px'],
            ["style", "height", '16px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '768px'],
            ["style", "width", '16px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '72px'],
            ["style", "width", '419px']
         ],
         "${_Text}": [
            ["transform", "rotateZ", '10deg'],
            ["style", "font-weight", '700'],
            ["style", "left", '461px'],
            ["style", "font-size", '20px'],
            ["style", "top", '232px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '41px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_BG2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_Ellipse2Copy4}": [
            ["style", "top", '98px'],
            ["style", "height", '22px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '749px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "top", '130px'],
            ["style", "height", '10px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '791px'],
            ["style", "width", '10px']
         ],
         "${_Text3}": [
            ["style", "font-style", 'normal'],
            ["style", "top", '42px'],
            ["style", "left", '697px'],
            ["style", "font-size", '36px']
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
"BG03": {
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
      id: 'BG3',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG03.jpg','0px','0px']
   },
   {
      rect: ['24px','21px','278px','52px','auto','auto'],
      id: 'Rectangle4',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['262px','139px','140px','38px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['339px','77px','26px','66px','auto','auto'],
      transform: [[0,0],['16']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['499px','121px','26px','66px','auto','auto'],
      transform: [[0,0],['227'],['0','45']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['263px','96px','26px','66px','auto','auto'],
      transform: [[0,0],['-50'],['0','11'],['1','1.683']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['512px','118px','264px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      transform: [],
      id: 'RoundRect3Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['330px','417px','122px','66px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect3Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'image',
      id: 'pointerCopy3',
      rect: ['442px','352px','26px','66px','auto','auto'],
      transform: [[0,0],['40'],[],['1','1.683']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy4',
      rect: ['547px','452px','26px','66px','auto','auto'],
      transform: [[0,0],['-44'],[],['1','1.683']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['551px','500px','205px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect3Copy3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['31px','28px','264px','51px','auto','auto'],
      id: 'Text3',
      text: 'पुलिस परग्रह वासियों के नेता को वरिष्ठ सभा में ले जाती है',
      align: 'left',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['278px','149px','102px','18px','auto','auto'],
      id: 'Text4',
      text: 'आप कौन हैं?',
      align: 'center',
      transform: []
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['346px','431px','90px','38px','auto','auto'],
      id: 'Text4Copy2',
      text: 'और आप क्या चाहते हैं?',
      align: 'center',
      transform: []
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['561px','507px','181px','73px','auto','auto'],
      id: 'Text4Copy3',
      text: 'हम लोग जुडिक्स हैं और पृथ्वी से बहुत दूर स्थित प्लेनस नामक ग्रह से आए हैं।',
      align: 'center',
      transform: []
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['522px','124px','245px','66px','auto','auto'],
      id: 'Text4Copy',
      text: 'सभा को मेरा नमस्कार। मेरा नाम है जियो, और मैं उन सभी का प्रतिनिधि हूँ जो इस यान से पृथ्वी पर आए हैं।',
      align: 'center',
      transform: []
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "top", '352px'],
            ["transform", "scaleY", '1.68253'],
            ["transform", "rotateZ", '40deg'],
            ["style", "height", '66px'],
            ["style", "left", '442px'],
            ["style", "width", '26px']
         ],
         "${_Text3}": [
            ["style", "line-height", '20px'],
            ["style", "font-size", '20px'],
            ["style", "top", '28px'],
            ["style", "height", '51px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '31px'],
            ["style", "width", '264px']
         ],
         "${_Text4Copy3}": [
            ["style", "line-height", '20px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '561px'],
            ["style", "font-size", '20px'],
            ["style", "top", '507px'],
            ["style", "text-align", 'center'],
            ["style", "height", '73px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '181px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '21px'],
            ["style", "border-width", '1px'],
            ["style", "height", '52px'],
            ["style", "border-style", 'none'],
            ["style", "left", '24px'],
            ["style", "width", '278px']
         ],
         "${_Text4Copy}": [
            ["style", "line-height", '20px'],
            ["style", "left", '522px'],
            ["style", "font-size", '20px'],
            ["style", "top", '124px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '66px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '245px']
         ],
         "${_RoundRect3}": [
            ["style", "top", '139px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-width", '1px'],
            ["style", "border-style", 'none'],
            ["style", "left", '262px'],
            ["style", "width", '140px']
         ],
         "${_RoundRect3Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '118px'],
            ["style", "border-width", '1px'],
            ["style", "height", '77px'],
            ["style", "border-style", 'none'],
            ["style", "left", '512px'],
            ["style", "width", '264px']
         ],
         "${_RoundRect3Copy3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '500px'],
            ["style", "border-width", '1px'],
            ["style", "height", '77px'],
            ["style", "border-style", 'none'],
            ["style", "left", '551px'],
            ["style", "width", '205px']
         ],
         "${_BG3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '452px'],
            ["transform", "scaleY", '1.68253'],
            ["transform", "rotateZ", '-44deg'],
            ["style", "height", '66px'],
            ["style", "left", '547px'],
            ["style", "width", '26px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '121px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '227deg'],
            ["style", "height", '66px'],
            ["transform", "skewY", '44.51deg'],
            ["style", "left", '499px'],
            ["style", "width", '26px']
         ],
         "${_Text4}": [
            ["style", "line-height", '20px'],
            ["style", "width", '102px'],
            ["style", "text-align", 'center'],
            ["style", "top", '149px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '278px'],
            ["style", "font-size", '20px']
         ],
         "${_RoundRect3Copy2}": [
            ["style", "top", '417px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '66px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "left", '330px']
         ],
         "${_Text4Copy2}": [
            ["style", "line-height", '20px'],
            ["transform", "scaleX", '1'],
            ["style", "left", '346px'],
            ["style", "font-size", '20px'],
            ["style", "top", '431px'],
            ["style", "text-align", 'center'],
            ["style", "height", '38px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '90px']
         ],
         "${_pointer}": [
            ["style", "top", '77px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '16deg'],
            ["style", "height", '66px'],
            ["style", "left", '339px'],
            ["style", "width", '26px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '96px'],
            ["transform", "scaleY", '1.68253'],
            ["transform", "rotateZ", '-50deg'],
            ["style", "height", '66px'],
            ["transform", "skewY", '11.37deg'],
            ["style", "left", '263px'],
            ["style", "width", '26px']
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
"BG04": {
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
      id: 'BG4',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG04.jpg','0px','0px']
   },
   {
      rect: ['79px','25px','284px','32px','auto','auto'],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      transform: [[0,0],[],['37']],
      id: 'RoundRect',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['582px','26px','405px','34px','auto','auto'],
      id: 'Rectangle',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['567px','524px','245px','96px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['732px','400px','117px','54px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['550px','514px','35px','104px','auto','auto'],
      transform: [[0,0],['-65'],[],['1','1.206']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy3',
      rect: ['261px','418px','35px','104px','auto','auto'],
      transform: [[0,0],['-227'],['0','30']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy4',
      rect: ['587px','285px','35px','104px','auto','auto'],
      transform: [[0,0],['-126'],['0','-46'],['1','1.113']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['927px','419px','35px','104px','auto','auto'],
      transform: [[0,0],['-39'],[],['0.519','0.519']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['843px','375px','35px','104px','auto','auto'],
      transform: [[0,0],['108'],[],['0.519','0.327']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['99px','32px','264px','18px','auto','auto'],
      id: 'Text',
      text: 'प्लेनस पर रा-हाका का राज है।<br>',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['595px','33px','392px','27px','auto','auto'],
      id: 'TextCopy',
      text: 'रा-हाका क्रूर है। वह हम पर अत्याचार करता है।',
      align: 'left',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','400','none','normal']
   },
   {
      type: 'text',
      rect: ['576px','529px','226px','84px','auto','auto'],
      id: 'TextCopy2',
      text: 'इसलिए हम प्लेनस से भाग निकले। अब हम पृथ्वी पर ही रहना चाहते हैं। हमें आशा है कि हम यहाँ सम्मान से जी सकेंगे।',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['738px','408px','103px','50px','auto','auto'],
      id: 'TextCopy3',
      text: 'हम कहाँ जा रहे हैं, जियो?',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      rect: ['912px','482px','75px','32px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect2Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['912px','488px','75px','40px','auto','auto'],
      id: 'TextCopy4',
      text: 'पृथ्वी पर',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '284px'],
            ["style", "top", '25px'],
            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "skewX", '36.87deg'],
            ["style", "left", '79px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["style", "top", '26px'],
            ["style", "height", '34px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '582px'],
            ["style", "width", '405px']
         ],
         "${_RoundRect2Copy2}": [
            ["style", "top", '482px'],
            ["style", "height", '32px'],
            ["style", "left", '912px'],
            ["style", "width", '75px']
         ],
         "${_pointerCopy4}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "skewY", '-45.62deg'],
            ["transform", "rotateZ", '-126deg'],
            ["style", "top", '285px'],
            ["style", "left", '587px'],
            ["transform", "scaleY", '1.11282']
         ],
         "${_TextCopy4}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '912px'],
            ["style", "font-size", '22px'],
            ["style", "top", '488px'],
            ["style", "text-align", 'center'],
            ["style", "height", '40px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '75px']
         ],
         "${_TextCopy3}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '738px'],
            ["style", "width", '103px'],
            ["style", "top", '408px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "height", '54px'],
            ["style", "top", '400px'],
            ["style", "left", '732px'],
            ["style", "width", '117px']
         ],
         "${_RoundRect2}": [
            ["style", "top", '524px'],
            ["style", "left", '567px'],
            ["style", "width", '245px']
         ],
         "${_BG4}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '418px'],
            ["style", "left", '261px'],
            ["transform", "skewY", '30.04deg'],
            ["transform", "rotateZ", '-227deg']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '375px'],
            ["transform", "scaleY", '0.32692'],
            ["transform", "rotateZ", '108deg'],
            ["transform", "scaleX", '0.51923'],
            ["style", "left", '843px']
         ],
         "${_Text}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '99px'],
            ["style", "font-size", '22px'],
            ["style", "top", '32px'],
            ["style", "text-align", ''],
            ["style", "height", '18px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-style", 'normal'],
            ["style", "width", '264px']
         ],
         "${_TextCopy2}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '576px'],
            ["style", "font-size", '22px'],
            ["style", "top", '529px'],
            ["style", "text-align", 'center'],
            ["style", "height", '84px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '226px']
         ],
         "${_pointer}": [
            ["style", "top", '514px'],
            ["style", "left", '550px'],
            ["transform", "scaleY", '1.20562'],
            ["transform", "rotateZ", '-65deg']
         ],
         "${_TextCopy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '595px'],
            ["style", "font-size", '22px'],
            ["style", "top", '33px'],
            ["style", "text-align", 'left'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '392px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '419px'],
            ["transform", "scaleY", '0.51923'],
            ["transform", "rotateZ", '-39deg'],
            ["transform", "scaleX", '0.51923'],
            ["style", "left", '927px']
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
"BG05": {
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
      id: 'BG5',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG05.jpg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointer2',
      rect: ['203px','119px','35px','75px','auto','auto'],
      transform: [[0,0],['142'],[],['1','2.693']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointer2Copy',
      rect: ['220px','408px','35px','71px','auto','auto'],
      transform: [[0,0],['329'],[],['1','2.619']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['179px','153px','242px','59px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['657px','95px','215px','45px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'image',
      id: 'pointer2Copy2',
      rect: ['757px','45px','35px','78px','auto','auto'],
      transform: [[0,0],['225'],[],['1','1.83']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointer2Copy3',
      rect: ['794px','478px','35px','76px','auto','auto'],
      transform: [[0,0],['401'],[],['1','1.56']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['227px','511px','242px','66px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['724px','529px','156px','59px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      transform: [],
      id: 'RoundRect2Copy3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['231px','523px','234px','47px','auto','auto'],
      id: 'Text2Copy',
      text: 'हम पृथ्वी पर जीवन को अधिक सुखी बनाने के लिए आपके साथ काम करेंगे',
      align: 'center',
      transform: []
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['192px','161px','215px','49px','auto','auto'],
      id: 'Text2',
      text: 'बदले में ज्युडिक्स पृथ्वी को क्या दे सकते हैं, जियो?',
      align: 'center',
      transform: []
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['657px','110px','215px','26px','auto','auto'],
      id: 'Text2Copy2',
      text: 'तुम प्लेनस से कैसे भागे, जियो?',
      align: 'center',
      transform: []
   },
   {
      type: 'text',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1)','normal','none','normal'],
      rect: ['724px','539px','156px','49px','auto','auto'],
      id: 'Text2Copy3',
      text: 'रा-हाका के पास एक अंतरिक्ष यान था...',
      align: 'center',
      transform: []
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointer2Copy2}": [
            ["style", "top", '45px'],
            ["transform", "scaleY", '1.83027'],
            ["transform", "rotateZ", '225deg'],
            ["style", "height", '78px'],
            ["style", "left", '757px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text2Copy}": [
            ["style", "line-height", '20px'],
            ["style", "left", '231px'],
            ["style", "width", '234px'],
            ["style", "top", '523px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '242px'],
            ["style", "top", '153px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '59px'],
            ["style", "left", '179px']
         ],
         "${_RoundRect2Copy3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '724px'],
            ["style", "width", '156px'],
            ["style", "top", '529px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '59px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "left", '724px'],
            ["style", "width", '156px'],
            ["style", "top", '539px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '49px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px']
         ],
         "${_RoundRect2Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '242px'],
            ["style", "top", '511px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '66px'],
            ["style", "left", '227px']
         ],
         "${_BG5}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_pointer2Copy}": [
            ["style", "top", '408px'],
            ["transform", "scaleY", '2.61862'],
            ["transform", "rotateZ", '329deg'],
            ["style", "height", '71px'],
            ["style", "left", '220px']
         ],
         "${_pointer2}": [
            ["style", "top", '119px'],
            ["transform", "scaleY", '2.69309'],
            ["transform", "rotateZ", '142deg'],
            ["style", "height", '75px'],
            ["style", "left", '203px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '20px'],
            ["style", "left", '657px'],
            ["style", "font-size", '22px'],
            ["style", "top", '110px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '26px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '215px']
         ],
         "${_pointer2Copy3}": [
            ["style", "top", '478px'],
            ["transform", "scaleY", '1.55989'],
            ["transform", "rotateZ", '401deg'],
            ["style", "height", '76px'],
            ["style", "left", '794px']
         ],
         "${_RoundRect2Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '215px'],
            ["style", "top", '95px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '45px'],
            ["style", "left", '657px']
         ],
         "${_Text2}": [
            ["style", "line-height", '20px'],
            ["style", "left", '192px'],
            ["style", "font-size", '22px'],
            ["style", "top", '161px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '49px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '215px']
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
"BG06": {
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
      id: 'BG6',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG06.jpg','0px','0px']
   },
   {
      rect: ['45px','18px','342px','52px','auto','auto'],
      transform: [[0,0],[],['20'],['1.03']],
      id: 'Rectangle2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['474px','25px','374px','36px','auto','auto'],
      id: 'Rectangle3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['813px','439px','181px','52px','auto','auto'],
      id: 'Rectangle3Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['369px','579px','428px','52px','auto','auto'],
      id: 'Rectangle3Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['92px','24px','246px','47px','auto','auto'],
      id: 'Text3',
      text: '...जिसे हमने ही बनाया था। हममें से कुछ उसे चलाना जानते हैं।',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['474px','30px','366px','27px','auto','auto'],
      id: 'Text3Copy',
      text: 'रा-हाका ने उसे एक गुप्त कोड से लॉक कर रखा था।',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['823px','441px','161px','47px','auto','auto'],
      id: 'Text3Copy2',
      text: 'एक रात हम लोग चुपचाप यान पर आ गए।',
      align: 'right',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['389px','591px','388px','36px','auto','auto'],
      id: 'Text3Copy3',
      text: 'हमने कुछ कोशिश के बाद वह कोड जान लिया।',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointer2',
      rect: ['276px','505px','35px','104px','auto','auto'],
      transform: [[0,0],['-69'],['0','-16'],['1','1.566']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointer2Copy',
      rect: ['403px','213px','35px','104px','auto','auto'],
      transform: [[0,0],['-133'],['-8','-16'],['1','2.204']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointer2Copy2',
      rect: ['144px','213px','35px','104px','auto','auto'],
      transform: [[0,0],['-159'],['12','-16'],['1','0.693']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '18px'],
            ["transform", "skewX", '20.32deg'],
            ["transform", "scaleX", '1.02959'],
            ["style", "height", '52px'],
            ["style", "left", '45px'],
            ["style", "width", '342px']
         ],
         "${_Text3Copy}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '474px'],
            ["style", "width", '366px'],
            ["style", "top", '30px'],
            ["style", "text-align", 'center'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px']
         ],
         "${_Text3}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '92px'],
            ["style", "width", '246px'],
            ["style", "top", '24px'],
            ["style", "text-align", 'center'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px']
         ],
         "${_Text3Copy2}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '823px'],
            ["style", "width", '161px'],
            ["style", "top", '441px'],
            ["style", "text-align", 'right'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px']
         ],
         "${_Text3Copy3}": [
            ["style", "line-height", '20px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '389px'],
            ["style", "width", '388px'],
            ["style", "top", '591px'],
            ["style", "text-align", 'center'],
            ["style", "height", '36px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '52px'],
            ["style", "top", '579px'],
            ["style", "left", '369px'],
            ["style", "width", '428px']
         ],
         "${_pointer2Copy}": [
            ["style", "top", '213px'],
            ["transform", "scaleY", '2.20435'],
            ["transform", "rotateZ", '-133deg'],
            ["transform", "skewY", '-15.87deg'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '403px'],
            ["transform", "skewX", '-7.82deg']
         ],
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '52px'],
            ["style", "top", '439px'],
            ["style", "left", '813px'],
            ["style", "width", '181px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_BG6}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_pointer2}": [
            ["style", "top", '505px'],
            ["transform", "scaleY", '1.56572'],
            ["transform", "rotateZ", '-69deg'],
            ["style", "left", '276px'],
            ["transform", "skewY", '-15.87deg']
         ],
         "${_Rectangle3}": [
            ["style", "height", '36px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '474px'],
            ["style", "width", '374px']
         ],
         "${_pointer2Copy2}": [
            ["style", "top", '213px'],
            ["transform", "scaleY", '0.69346'],
            ["transform", "rotateZ", '-159deg'],
            ["transform", "skewX", '11.94deg'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '144px'],
            ["transform", "skewY", '-15.87deg']
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
"BG07": {
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
      id: 'BG7',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG07.jpg','0px','0px']
   },
   {
      rect: ['406px','273px','148px','57px','auto','auto'],
      transform: [],
      id: 'RectangleCopy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['407px','22px','585px','44px','auto','auto'],
      id: 'Rectangle',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['199px','44px','169px','39px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['182px','49px','35px','104px','auto','auto'],
      transform: [[0,0],['-125'],[],['0.612']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['199px','53px','169px','36px','auto','auto'],
      id: 'Text4',
      text: 'और वहाँ से निकल भागे।<br>',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointer3Copy4',
      rect: ['516px','378px','35px','104px','auto','auto'],
      transform: [[0,0],['294'],[],['0.612','0.705']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['554px','401px','127px','97px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy7',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['562px','408px','111px','104px','auto','auto'],
      id: 'Text4Copy10',
      text: 'जियो, हम चाहते हैं कि तुम हमारी पुलिस की मदद करो।',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['417px','31px','576px','28px','auto','auto'],
      id: 'Text4Copy4',
      text: 'वरिष्ठ जियो से बाहर रूकने को कहते हैं और आपस में चर्चा करते हैं।',
      align: 'left',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['412px','279px','149px','54px','auto','auto'],
      id: 'Text4Copy9',
      text: 'थोड़ी देर बाद वे उसे अंदर बुलाते हैं',
      align: 'left',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','italic']
   },
   {
      type: 'image',
      id: 'pointer3',
      rect: ['482px','64px','35px','104px','auto','auto'],
      transform: [[0,0],['-135'],[],['0.612','0.558']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['469px','73px','102px','37px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['480px','83px','auto','auto','auto','auto'],
      id: 'Text4Copy5',
      text: 'होशियार है...',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointer3Copy',
      rect: ['625px','97px','35px','104px','auto','auto'],
      transform: [[0,0],['-33'],[],['0.612','0.81']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['578px','186px','102px','37px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy4',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['584px','195px','91px','23px','auto','auto'],
      id: 'Text4Copy6',
      text: 'मेहनती है...',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointer3Copy2',
      rect: ['745px','95px','35px','104px','auto','auto'],
      transform: [[0,0],['34'],[],['0.612','0.81']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['710px','181px','133px','38px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy5',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['717px','189px','121px','29px','auto','auto'],
      id: 'Text4Copy7',
      text: 'मुझे नहीं लगता...',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointer3Copy3',
      rect: ['905px','83px','35px','104px','auto','auto'],
      transform: [[0,0],['138'],[],['0.612','0.705']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['862px','69px','109px','58px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy6',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['870px','76px','93px','55px','auto','auto'],
      id: 'Text4Copy8',
      text: 'भरोसा कर सकते हैं?',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointer3Copy5',
      rect: ['674px','298px','35px','104px','auto','auto'],
      transform: [[0,0],['142'],[],['0.612','0.81']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['635px','281px','208px','57px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy8',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['643px','290px','190px','71px','auto','auto'],
      id: 'Text4Copy11',
      text: 'जियो, तुम्हारा और तुम्हारे साथियों का यहाँ स्वागत है',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointer3Copy6',
      rect: ['821px','479px','35px','104px','auto','auto'],
      transform: [[0,0],['390'],[],['0.612','1.348']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['669px','561px','169px','52px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy9',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['672px','569px','163px','37px','auto','auto'],
      id: 'Text4Copy12',
      text: 'यह हमारे लिए सम्मान की बात होगी, मैडम।',
      align: 'center',
      font: ['Adobe Devanagari',22,'rgba(0,0,0,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text4Copy11}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '643px'],
            ["style", "font-size", '22px'],
            ["style", "top", '290px'],
            ["style", "text-align", 'center'],
            ["style", "height", '71px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '190px'],
            ["style", "font-style", 'normal']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "top", '44px'],
            ["style", "left", '199px'],
            ["style", "width", '169px']
         ],
         "${_pointer3Copy5}": [
            ["style", "top", '298px'],
            ["transform", "scaleY", '0.81013'],
            ["transform", "rotateZ", '142deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '674px']
         ],
         "${_Text4Copy5}": [
            ["style", "top", '83px'],
            ["style", "line-height", '22px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '480px'],
            ["style", "font-size", '22px']
         ],
         "${_pointer3Copy2}": [
            ["style", "top", '95px'],
            ["transform", "scaleY", '0.81013'],
            ["transform", "rotateZ", '34deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '745px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect3Copy9}": [
            ["style", "top", '561px'],
            ["style", "height", '52px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '669px'],
            ["style", "width", '169px']
         ],
         "${_Text4Copy10}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '562px'],
            ["style", "width", '111px'],
            ["style", "top", '408px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px'],
            ["style", "height", '104px']
         ],
         "${_pointer3Copy6}": [
            ["style", "top", '479px'],
            ["transform", "scaleY", '1.34772'],
            ["transform", "rotateZ", '390deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '821px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '273px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '406px'],
            ["style", "width", '148px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect3Copy4}": [
            ["style", "top", '186px'],
            ["style", "height", '37px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '578px'],
            ["style", "width", '102px']
         ],
         "${_pointer3Copy}": [
            ["style", "top", '97px'],
            ["transform", "scaleY", '0.81013'],
            ["transform", "rotateZ", '-33deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '625px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointer3}": [
            ["style", "top", '64px'],
            ["transform", "scaleY", '0.55769'],
            ["transform", "rotateZ", '-135deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '482px']
         ],
         "${_Text4Copy12}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '672px'],
            ["style", "width", '163px'],
            ["style", "top", '569px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px'],
            ["style", "height", '37px']
         ],
         "${_Text4Copy8}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '870px'],
            ["style", "font-size", '22px'],
            ["style", "top", '76px'],
            ["style", "text-align", 'center'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '93px'],
            ["style", "font-style", 'normal']
         ],
         "${_RoundRect3}": [
            ["style", "top", '73px'],
            ["style", "height", '37px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '469px'],
            ["style", "width", '102px']
         ],
         "${_Text4Copy9}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '412px'],
            ["style", "font-size", '22px'],
            ["style", "top", '279px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '54px'],
            ["style", "width", '149px']
         ],
         "${_pointer3Copy4}": [
            ["style", "top", '378px'],
            ["transform", "scaleY", '0.705'],
            ["transform", "rotateZ", '294deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '516px']
         ],
         "${_Text4Copy6}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '584px'],
            ["style", "font-size", '22px'],
            ["style", "top", '195px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "height", '23px'],
            ["style", "width", '91px']
         ],
         "${_RoundRect3Copy7}": [
            ["style", "top", '401px'],
            ["style", "height", '97px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '554px'],
            ["style", "width", '127px']
         ],
         "${_pointer3Copy3}": [
            ["style", "top", '83px'],
            ["transform", "scaleY", '0.705'],
            ["transform", "rotateZ", '138deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '905px']
         ],
         "${_RoundRect3Copy8}": [
            ["style", "top", '281px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '635px'],
            ["style", "width", '208px']
         ],
         "${_RoundRect3Copy6}": [
            ["style", "top", '69px'],
            ["style", "height", '58px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '862px'],
            ["style", "width", '109px']
         ],
         "${_Rectangle}": [
            ["style", "height", '44px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '407px'],
            ["style", "width", '585px']
         ],
         "${_Text4}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '199px'],
            ["style", "font-size", '22px'],
            ["style", "top", '53px'],
            ["style", "height", '36px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '169px'],
            ["style", "font-style", 'normal']
         ],
         "${_RoundRect3Copy5}": [
            ["style", "top", '181px'],
            ["style", "height", '38px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '710px'],
            ["style", "width", '133px']
         ],
         "${_Text4Copy4}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '417px'],
            ["style", "width", '576px'],
            ["style", "top", '31px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '22px'],
            ["style", "height", '28px']
         ],
         "${_pointer}": [
            ["transform", "scaleX", '0.6121'],
            ["style", "top", '49px'],
            ["style", "left", '182px'],
            ["transform", "rotateZ", '-125deg']
         ],
         "${_Text4Copy7}": [
            ["style", "line-height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '717px'],
            ["style", "font-size", '22px'],
            ["style", "top", '189px'],
            ["style", "text-align", 'center'],
            ["style", "height", '29px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '121px'],
            ["style", "font-style", 'normal']
         ],
         "${_BG7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
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
      id: 'BG8',
      type: 'image',
      rect: ['-1014px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/Intro_BG08.jpg','0px','0px']
   },
   {
      rect: ['493px','280px','120px','31px','auto','auto'],
      font: ['Adobe Devanagari',30,'rgba(0,205,255,1.00)','700','none',''],
      id: 'Text',
      text: 'वांछित',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['26px','24px','437px','61px','auto','auto'],
      id: 'Rectangle2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['40px','34px','414px','50px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text5',
      text: 'ज्युडिक्स पृथ्वी पर रहने लगते हैं। लेकिन ज़िंदगी हमेशा आसान नहीं होती। कुछ ज्युडिक्स को गुमराह किया जाता है और इससे समस्या खड़ी होती है',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['649px','433px','200px','125px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['511px','428px','20px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['544px','440px','30px','30px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['588px','448px','50px','50px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['658px','460px','186px','110px','auto','auto'],
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text6',
      text: 'मुझे निरपराध ज्युडिक्स की <br>मदद करनी ही होगी। कुछ के बुरे कामों के कारण उन्हें भी तकलीफ हो रही है।',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['874px','350px','120px','56px','auto','auto'],
      transform: [[],[],['0','3']],
      font: ['Adobe Devanagari',15,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text2',
      text: 'स्कूल द्वारा ज्युडिक बच्चों को प्रवेश देने से इंकार ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['45px','295px','146px','50px','auto','auto'],
      transform: [[],[],['0','-4']],
      font: ['Adobe Devanagari',15,'rgba(255,255,255,1.00)','700','none','normal'],
      id: 'Text3',
      text: 'स्ट्रीट लाइट्स तोड़ीं, ज्युडिक्स के गिरोह पर शक',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['26px','455px','124px','61px','auto','auto'],
      transform: [[],[],['0','-14']],
      font: ['Adobe Devanagari',16,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text3Copy',
      text: 'मानवों का ज्युडिक्स के साथ बैठने से इंकार<br>',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '428px'],
            ["style", "height", '20px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '511px'],
            ["style", "width", '20px']
         ],
         "${_Text3Copy}": [
            ["style", "line-height", '18px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '26px'],
            ["style", "width", '124px'],
            ["style", "top", '455px'],
            ["transform", "skewY", '-14deg'],
            ["style", "height", '61px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '16px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '440px'],
            ["style", "height", '30px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '544px'],
            ["style", "width", '30px']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["style", "left", '40px'],
            ["style", "font-size", '20px'],
            ["style", "top", '34px'],
            ["style", "text-align", 'left'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '414px'],
            ["style", "font-style", 'italic']
         ],
         "${_Text2}": [
            ["style", "font-weight", '700'],
            ["style", "left", '874px'],
            ["style", "font-size", '15px'],
            ["style", "top", '350px'],
            ["transform", "skewY", '3deg'],
            ["style", "height", '56px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "width", '120px'],
            ["style", "text-align", 'left']
         ],
         "${_BG8}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_Text6}": [
            ["style", "line-height", '20px'],
            ["style", "font-size", '20px'],
            ["style", "text-align", 'center'],
            ["style", "top", '460px'],
            ["style", "height", '110px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '658px'],
            ["style", "width", '186px']
         ],
         "${_Text4Copy5}": [
            ["style", "text-align", '']
         ],
         "${_Ellipse}": [
            ["style", "top", '433px'],
            ["style", "height", '125px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '649px'],
            ["style", "width", '200px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '45px'],
            ["style", "width", '146px'],
            ["style", "top", '295px'],
            ["transform", "skewY", '-4deg'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '15px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,205,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '493px'],
            ["style", "width", '120px'],
            ["style", "top", '280px'],
            ["style", "text-align", 'right'],
            ["style", "height", '31px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '30px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '24px'],
            ["style", "height", '61px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '26px'],
            ["style", "width", '437px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '448px'],
            ["style", "height", '50px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '588px'],
            ["style", "width", '50px']
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
      rect: ['0px','0px','132px','45px','auto','auto'],
      id: 'btn_ask_up',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/btn_ask_up.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['27px','4px','81px','auto','auto','auto'],
      id: 'Text',
      text: 'गेम<br>',
      align: 'center',
      font: ['Adobe Devanagari',35,'rgba(0,0,0,1.00)','700','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_ask_up}": [
            ["style", "top", '0px'],
            ["style", "height", '45px'],
            ["style", "display", 'none'],
            ["style", "left", '0px'],
            ["style", "width", '132px']
         ],
         "${_Text}": [
            ["style", "top", '4px'],
            ["style", "width", '81px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '27px'],
            ["style", "font-size", '35px']
         ],
         "${symbolSelector}": [
            ["style", "height", '45px'],
            ["style", "width", '132px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_btn_ask_up}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_ask_up}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }         ]
      }
   }
},
"skip_btn": {
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
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['-30px','0px','167px','17px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      font: ['Adobe Devanagari',16,'rgba(255,239,0,1.00)','700','none',''],
      type: 'text',
      id: 'Text',
      text: 'आगे बढ़ें',
      align: 'center',
      rect: ['0px','0px','94px','17px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '17px'],
            ["style", "left", '-30px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,239,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "width", '94px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "height", '17px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '17px'],
            ["style", "width", '120px']
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
"BG_08": {
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
      id: 'BG08',
      type: 'image',
      rect: ['-1014px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/M0_BG01.jpg','0px','0px']
   },
   {
      rect: ['29px','26px','329px','34px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'text',
      rect: ['36px','32px','430px','26px','auto','auto'],
      id: 'Text',
      text: 'ज्युडिक्स और मानव एक-दूसरे से परिचय बढा रहे हैं।',
      align: 'left',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','italic']
   },
   {
      rect: ['16px','325px','228px','49px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointer',
      rect: ['128px','268px','35px','104px','auto','auto'],
      transform: [[0,0],['168'],['0','10'],['0.497','1.255']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy',
      rect: ['384px','463px','35px','104px','auto','auto'],
      transform: [[0,0],['317'],['0','29'],['0.497','0.471']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['24px','331px','210px','47px','auto','auto'],
      id: 'Text2',
      text: 'देखो पापा, इंसान! सब एक जैसे दिखते हैं ना?',
      align: 'center',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['580px','331px','230px','59px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'image',
      id: 'pointerCopy2',
      rect: ['596px','285px','35px','104px','auto','auto'],
      transform: [[0,0],['170'],['0','10'],['0.497','1.46']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy3',
      rect: ['920px','465px','35px','104px','auto','auto'],
      transform: [[0,0],['188'],['0','-7'],['0.497','0.625']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      type: 'text',
      rect: ['581px','338px','228px','57px','auto','auto'],
      id: 'Text2Copy2',
      text: 'ये अजीब चीज़ें क्या हैं माँ? मुझे तो सब एक जैसे ही लग रहे हैं।',
      align: 'center',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['875px','436px','119px','133px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['880px','448px','108px','120px','auto','auto'],
      id: 'Text2Copy3',
      text: 'वे ज्युडिक्स हैं, बेटे। ध्यान से देखो, उनके सीने पर अलग-अलग निशान हैं।',
      align: 'center',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      rect: ['318px','560px','228px','63px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['322px','571px','219px','46px','auto','auto'],
      id: 'Text2Copy',
      text: 'ऐसा नहीं है, सोला। उनके चेहरे देखो; कोई भी एक जैसा नहीं है।',
      align: 'center',
      font: ['Adobe Devanagari',20,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy2}": [
            ["style", "top", '285px'],
            ["transform", "skewY", '9.61deg'],
            ["transform", "rotateZ", '170deg'],
            ["transform", "scaleX", '0.49695'],
            ["transform", "scaleY", '1.46039'],
            ["style", "left", '596px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy3}": [
            ["style", "top", '465px'],
            ["transform", "skewY", '-6.87deg'],
            ["transform", "rotateZ", '188deg'],
            ["transform", "scaleX", '0.49695'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '920px'],
            ["transform", "scaleY", '0.625']
         ],
         "${_RoundRectCopy3}": [
            ["style", "height", '133px'],
            ["style", "top", '436px'],
            ["style", "left", '875px'],
            ["style", "width", '119px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '29px'],
            ["style", "width", '329px']
         ],
         "${_RoundRect}": [
            ["style", "height", '49px'],
            ["style", "top", '325px'],
            ["style", "left", '16px'],
            ["style", "width", '228px']
         ],
         "${_Text2Copy}": [
            ["style", "line-height", '20px'],
            ["style", "width", '219px'],
            ["style", "text-align", 'center'],
            ["style", "top", '571px'],
            ["style", "height", '46px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '322px'],
            ["style", "font-size", '20px']
         ],
         "${_Text2Copy3}": [
            ["style", "line-height", '20px'],
            ["style", "width", '108px'],
            ["style", "text-align", 'center'],
            ["style", "top", '448px'],
            ["style", "height", '120px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '880px'],
            ["style", "font-size", '20px']
         ],
         "${_Text}": [
            ["style", "line-height", '20px'],
            ["style", "left", '36px'],
            ["style", "width", '430px'],
            ["style", "top", '32px'],
            ["style", "text-align", 'left'],
            ["style", "height", '26px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "font-size", '20px'],
            ["style", "font-style", 'italic']
         ],
         "${_RoundRectCopy}": [
            ["style", "top", '560px'],
            ["style", "height", '63px'],
            ["style", "left", '318px'],
            ["style", "width", '228px']
         ],
         "${_BG08}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '331px'],
            ["style", "height", '59px'],
            ["style", "left", '580px'],
            ["style", "width", '230px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy2}": [
            ["style", "line-height", '20px'],
            ["style", "width", '228px'],
            ["style", "text-align", 'center'],
            ["style", "top", '338px'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '581px'],
            ["style", "font-size", '20px']
         ],
         "${_pointer}": [
            ["style", "top", '268px'],
            ["transform", "skewY", '9.61deg'],
            ["transform", "rotateZ", '168deg'],
            ["transform", "scaleX", '0.49695'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '128px'],
            ["transform", "scaleY", '1.25496']
         ],
         "${_Text2}": [
            ["style", "line-height", '20px'],
            ["style", "width", '210px'],
            ["style", "text-align", 'center'],
            ["style", "top", '331px'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Adobe Devanagari'],
            ["style", "left", '24px'],
            ["style", "font-size", '20px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '463px'],
            ["transform", "skewY", '28.96deg'],
            ["transform", "rotateZ", '317deg'],
            ["transform", "scaleX", '0.49695'],
            ["transform", "scaleY", '0.47115'],
            ["style", "left", '384px'],
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
         autoPlay: true,
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
})(jQuery, AdobeEdge, "intro");
