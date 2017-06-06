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
         "${_Symbol_12}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${_BG09}": [
            ["style", "left", '1014px']
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
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "border-top-left-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '867px'],
            ["style", "width", '147px'],
            ["style", "top", '587px'],
            ["style", "border-bottom-left-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '65px'],
            ["style", "display", 'none'],
            ["style", "border-top-right-radius", [33,33], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '1014px'],
            ["style", "height", '652px'],
            ["style", "overflow", 'hidden']
         ],
         "${_BG06}": [
            ["style", "left", '1014px']
         ],
         "${_BG03}": [
            ["style", "left", '1014px']
         ],
         "${_btn_back}": [
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${_btn_next}": [
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
            { id: "eid38", tween: [ "style", "${_Symbol_12}", "display", 'none', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Symbol_12}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_BG03}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid16", tween: [ "style", "${_BG02}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" }         ]
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
      id: 'Text',
      text: 'సంవత్సరం 2040, భూమి వైపుకి  ఒక స్పేస్ షిప్ వస్తోంది.',
      rect: ['38px','32px','362px','19px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','400','none','italic']
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
      text: 'అది నెమ్మదిగా ల్యాండ్ అవుతుంది. ',
      align: 'right',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','400','none','italic']
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
      id: 'TextCopy2',
      text: '... కాని అది పసిగట్టబడింది, ఇంకా అందులోని సందర్శకులని చెక్ చేసేందుకు పోలీస్ వస్తారు.',
      rect: ['429px','558px','260px','60px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','400','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '29px'],
            ["style", "top", '27px'],
            ["style", "left", '27px'],
            ["style", "width", '383px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '38px'],
            ["style", "font-size", '14px'],
            ["style", "top", '32px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '19px'],
            ["style", "width", '362px']
         ],
         "${_TextCopy2}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '429px'],
            ["style", "font-size", '14px'],
            ["style", "top", '558px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '60px'],
            ["style", "width", '260px']
         ],
         "${_Rectangle2Copy}": [
            ["style", "height", '29px'],
            ["style", "top", '279px'],
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
            ["style", "font-size", '14px'],
            ["style", "top", '284px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '278px'],
            ["style", "height", '19px']
         ],
         "${_Rectangle2Copy2}": [
            ["style", "top", '555px'],
            ["style", "height", '63px'],
            ["style", "left", '420px'],
            ["style", "width", '278px']
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
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['29px','26px','429px','83px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','400','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'పోలీసు దానిని సమీపిస్తూ ఉండగా, స్పేస్ షిప్ తలుపు తెరుచుకుంటుంది మరియు వింత ప్రాణులు బయటికి అడుగుపెడతాయి; వాళ్ళల్లో ఒకరు వాళ్ళ నాయకుడిలాగా ఉన్నారు!<br>',
      align: 'left',
      rect: ['38px','35px','410px','58px','auto','auto']
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
      font: ['Verdana, Geneva, sans-serif',36,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: '?',
      align: 'left',
      rect: ['697px','42px','auto','auto','auto','auto']
   },
   {
      transform: [[0,0],['10']],
      type: 'text',
      align: 'center',
      id: 'Text',
      text: 'పీస్ ',
      rect: ['475px','236px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',13,'rgba(0,0,0,1)','400','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "height", '14px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
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
            ["style", "font-size", '13px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '400'],
            ["style", "height", '58px'],
            ["style", "width", '410px']
         ],
         "${_Text3}": [
            ["style", "top", '42px'],
            ["style", "font-style", 'normal'],
            ["style", "left", '697px'],
            ["style", "font-size", '36px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '120px'],
            ["style", "height", '16px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '768px'],
            ["style", "width", '16px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '83px'],
            ["style", "width", '429px']
         ],
         "${_Text}": [
            ["style", "top", '236px'],
            ["style", "font-weight", '400'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '10deg'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '475px'],
            ["style", "font-size", '13px']
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
         "${_Ellipse}": [
            ["style", "top", '26px'],
            ["style", "left", '646px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
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
      type: 'rect',
      id: 'Rectangle4',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['24px','21px','278px','52px','auto','auto'],
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
      transform: [[0,0],['16']],
      id: 'pointer',
      type: 'image',
      rect: ['339px','77px','26px','66px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['227'],['0','45']],
      id: 'pointerCopy2',
      type: 'image',
      rect: ['499px','121px','26px','66px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-50'],['0','11'],['1','1.683']],
      id: 'pointerCopy',
      type: 'image',
      rect: ['263px','96px','26px','66px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [],
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['512px','118px','264px','77px','auto','auto'],
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
      transform: [[0,0],['40'],[],['1','1.683']],
      id: 'pointerCopy3',
      type: 'image',
      rect: ['442px','352px','26px','66px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-44'],[],['1','1.683']],
      id: 'pointerCopy4',
      type: 'image',
      rect: ['547px','452px','26px','66px','auto','auto'],
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
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text3',
      text: 'పోలీసులు ఏలియన్ల నాయకుని పెద్దల మండలి వద్దకు తీసుకుపోతారు.<br>',
      align: 'left',
      rect: ['31px','24px','264px','51px','auto','auto']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text4',
      text: 'ఎవరు నువ్వు? <br>',
      rect: ['278px','149px','102px','18px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text4Copy2',
      text: 'మరి నీకు ఏం కావాలి? <br>',
      rect: ['346px','431px','90px','38px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text4Copy3',
      text: 'మేము జుడిక్ లము, మేము భూమికి ఎంతో దూరంలో  ఉన్న గ్రహం, ప్లానస్ నుంచి వచ్చాము<br>',
      rect: ['561px','504px','181px','66px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text4Copy',
      text: 'మండలికి నమస్కారములు. నా పేరు జియో, మీ భూమి పై ల్యాండ్ అయిన వారందరి తరఫున నేను మాట్లాడుతున్నాను<br>',
      rect: ['522px','124px','243px','66px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
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
            ["style", "top", '24px'],
            ["style", "width", '264px'],
            ["style", "font-style", 'italic'],
            ["style", "height", '51px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '31px'],
            ["style", "font-size", '13px']
         ],
         "${_Text4Copy3}": [
            ["style", "top", '504px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["transform", "scaleX", '1'],
            ["style", "height", '66px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '561px'],
            ["style", "width", '181px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle4}": [
            ["style", "top", '21px'],
            ["style", "left", '24px'],
            ["style", "height", '52px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '278px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '124px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '66px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '522px'],
            ["style", "width", '243px']
         ],
         "${_RoundRect3}": [
            ["style", "top", '139px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '262px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '140px']
         ],
         "${_RoundRect3Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '118px'],
            ["style", "left", '512px'],
            ["style", "height", '77px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
            ["style", "width", '264px']
         ],
         "${_RoundRect3Copy3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '500px'],
            ["style", "left", '551px'],
            ["style", "height", '77px'],
            ["style", "border-style", 'none'],
            ["style", "border-width", '1px'],
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
         "${_Text4Copy2}": [
            ["style", "top", '431px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '38px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '346px'],
            ["style", "width", '90px']
         ],
         "${_RoundRect3Copy2}": [
            ["style", "top", '417px'],
            ["style", "border-width", '1px'],
            ["style", "height", '66px'],
            ["style", "border-style", 'none'],
            ["style", "left", '330px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)']
         ],
         "${_pointer}": [
            ["style", "top", '77px'],
            ["transform", "scaleY", '1'],
            ["transform", "rotateZ", '16deg'],
            ["style", "height", '66px'],
            ["style", "left", '339px'],
            ["style", "width", '26px']
         ],
         "${_Text4}": [
            ["style", "top", '149px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '13px'],
            ["transform", "scaleX", '1'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '278px'],
            ["style", "width", '102px']
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
      transform: [[0,0],[],['37']],
      borderRadius: ['0px 0px','0px 0px','0px 0px','0px 0px'],
      rect: ['79px','25px','284px','32px','auto','auto'],
      id: 'RoundRect',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['582px','26px','405px','34px','auto','auto'],
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
      transform: [[0,0],['-65'],[],['1','1.206']],
      id: 'pointer',
      type: 'image',
      rect: ['550px','514px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-227'],['0','30']],
      id: 'pointerCopy3',
      type: 'image',
      rect: ['261px','418px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-126'],['0','-46'],['1','1.113']],
      id: 'pointerCopy4',
      type: 'image',
      rect: ['587px','285px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-39'],[],['0.519','0.519']],
      id: 'pointerCopy',
      type: 'image',
      rect: ['927px','419px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['108'],[],['0.519','0.327']],
      id: 'pointerCopy2',
      type: 'image',
      rect: ['843px','375px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: 'ప్లానస్ ని రా-హాకా పరిపాలిస్తున్నాడు. <br>',
      align: 'center',
      rect: ['99px','32px','264px','18px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','400','none','normal'],
      type: 'text',
      id: 'TextCopy',
      text: 'రా-హాకా చాలా క్రూరుడు. మమ్మల్ని అతను హింసించాడు. <br>',
      align: 'left',
      rect: ['595px','33px','392px','27px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy2',
      text: 'అందుకని మేము ప్లానస్ నుంచి పారిపోయి వచ్చాము.  ఇప్పుడు మేము భూమి మీద  ఉండాలనుకుంటున్నాం.  ఇక్కడ మేము గౌరవంగా బతకాలని ఆశిస్తున్నాం. <br>',
      align: 'center',
      rect: ['576px','529px','226px','84px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy3',
      text: 'ఎక్కడికెళ్తున్నావు జియో? <br>',
      align: 'center',
      rect: ['739px','404px','103px','40px','auto','auto']
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
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy4',
      text: 'భూమికి <br>',
      align: 'center',
      rect: ['920px','489px','61px','22px','auto','auto']
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
            ["style", "height", '32px'],
            ["style", "top", '482px'],
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
            ["transform", "scaleY", '1.11282'],
            ["style", "left", '587px'],
            ["style", "top", '285px']
         ],
         "${_TextCopy4}": [
            ["style", "top", '489px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '22px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '920px'],
            ["style", "width", '61px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '404px'],
            ["style", "width", '103px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '40px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '739px'],
            ["style", "font-size", '13px']
         ],
         "${_RoundRect2Copy}": [
            ["style", "top", '400px'],
            ["style", "height", '54px'],
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
            ["transform", "skewY", '30.04deg'],
            ["style", "left", '261px'],
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
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '99px'],
            ["style", "font-size", '13px'],
            ["style", "top", '32px'],
            ["style", "text-align", 'center'],
            ["style", "height", '18px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '264px'],
            ["style", "font-style", 'normal']
         ],
         "${_TextCopy2}": [
            ["style", "top", '529px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "height", '84px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '576px'],
            ["style", "width", '226px']
         ],
         "${_pointer}": [
            ["style", "top", '514px'],
            ["transform", "scaleY", '1.20562'],
            ["style", "left", '550px'],
            ["transform", "rotateZ", '-65deg']
         ],
         "${_TextCopy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '595px'],
            ["style", "font-size", '13px'],
            ["style", "top", '33px'],
            ["style", "text-align", 'left'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
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
      transform: [[0,0],['142'],[],['1','2.693']],
      id: 'pointer2',
      type: 'image',
      rect: ['203px','119px','35px','75px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['329'],[],['1','2.619']],
      id: 'pointer2Copy',
      type: 'image',
      rect: ['220px','408px','35px','71px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      rect: ['179px','153px','242px','59px','auto','auto'],
      id: 'RoundRect2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      rect: ['657px','81px','189px','59px','auto','auto'],
      id: 'RoundRect2Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [[0,0],['225'],[],['1','1.83']],
      id: 'pointer2Copy2',
      type: 'image',
      rect: ['757px','45px','35px','78px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['401'],[],['1','1.56']],
      id: 'pointer2Copy3',
      type: 'image',
      rect: ['794px','478px','35px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      rect: ['227px','511px','242px','66px','auto','auto'],
      id: 'RoundRect2Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      rect: ['676px','532px','242px','45px','auto','auto'],
      id: 'RoundRect2Copy3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text2Copy',
      text: 'భూమిని మరింత ఆనందదాయకంగా చేయడానికి మేము మీతో కలిసి పని చేస్తాం.<br>',
      rect: ['231px','518px','234px','47px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text2',
      text: 'మరి ఇందుకు గాను భూమికి తిరిగి జూడిక్స్ ఏమి ఇవ్వగలవు జియో? <br>',
      rect: ['192px','156px','215px','49px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text2Copy2',
      text: 'ప్లానస్ నించి నువ్వు ఎలా తప్పించుకున్నావు, జియో? <br>',
      rect: ['669px','85px','162px','47px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text2Copy3',
      text: 'రా-హాకా కి  ఒక స్పేస్ షిప్ ఉంది.<br>',
      rect: ['685px','539px','226px','32px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal']
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
         "${_Text2}": [
            ["style", "top", '156px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '49px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '192px'],
            ["style", "width", '215px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '539px'],
            ["style", "width", '226px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '32px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '685px'],
            ["style", "font-size", '13px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '518px'],
            ["style", "width", '234px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '231px'],
            ["style", "font-size", '13px']
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
         "${_pointer2Copy3}": [
            ["style", "top", '478px'],
            ["transform", "scaleY", '1.55989'],
            ["transform", "rotateZ", '401deg'],
            ["style", "height", '76px'],
            ["style", "left", '794px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '85px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["transform", "skewX", '0deg'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '669px'],
            ["style", "width", '162px']
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
         "${_RoundRect2Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '189px'],
            ["style", "top", '81px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '59px'],
            ["style", "left", '657px']
         ],
         "${_RoundRect2Copy3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '676px'],
            ["style", "width", '242px'],
            ["style", "top", '532px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '45px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
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
      transform: [[0,0],[],['20'],['1.03']],
      rect: ['45px','18px','342px','52px','auto','auto'],
      id: 'Rectangle2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['474px','25px','374px','36px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['763px','439px','231px','52px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      type: 'rect',
      id: 'Rectangle3Copy2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['369px','579px','428px','52px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'మేము అతని కోసం కట్టాం. మాలో కొంతమందికి దానిని  ఎలా నడపాలో తెలుసు.<br>',
      align: 'center',
      rect: ['60px','23px','312px','47px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3Copy',
      text: 'రా-హాకా దానిని  ఒక సీక్రెట్ కోడ్ తో తాళం వేసి  ఉంచేవాడు. <br>',
      align: 'right',
      rect: ['474px','30px','351px','27px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3Copy2',
      text: 'ఒక రాత్రి, మేము మెల్లగా బయటికి పారిపోయి, స్పేస్ షిప్ ఎక్కాం<br>',
      align: 'right',
      rect: ['768px','442px','220px','47px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text3Copy3',
      text: 'కొంచెం  ప్రయత్నించి మేము ఆ కోడ్ ఛేదించగలిగాం. <br>',
      align: 'center',
      rect: ['389px','591px','388px','27px','auto','auto']
   },
   {
      transform: [[0,0],['-69'],['0','-16'],['1','1.566']],
      id: 'pointer2',
      type: 'image',
      rect: ['276px','505px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-133'],['-8','-16'],['1','2.204']],
      id: 'pointer2Copy',
      type: 'image',
      rect: ['403px','213px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['-159'],['12','-16'],['1','0.693']],
      id: 'pointer2Copy2',
      type: 'image',
      rect: ['144px','213px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointer2Copy2}": [
            ["style", "top", '213px'],
            ["transform", "scaleY", '0.69346'],
            ["transform", "rotateZ", '-159deg'],
            ["transform", "skewY", '-15.87deg'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '144px'],
            ["transform", "skewX", '11.94deg']
         ],
         "${_Text3Copy}": [
            ["style", "top", '30px'],
            ["style", "width", '351px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '474px'],
            ["style", "font-size", '13px']
         ],
         "${_Text3}": [
            ["style", "top", '23px'],
            ["style", "width", '312px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '60px'],
            ["style", "font-size", '13px']
         ],
         "${_Text3Copy2}": [
            ["style", "top", '442px'],
            ["style", "width", '220px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '47px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '768px'],
            ["style", "font-size", '13px']
         ],
         "${_Text3Copy3}": [
            ["style", "top", '591px'],
            ["style", "width", '388px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '27px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '389px'],
            ["style", "font-size", '13px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '18px'],
            ["transform", "skewX", '20.32deg'],
            ["transform", "scaleX", '1.02959'],
            ["style", "height", '52px'],
            ["style", "left", '45px'],
            ["style", "width", '342px']
         ],
         "${_pointer2Copy}": [
            ["style", "top", '213px'],
            ["transform", "scaleY", '2.20435'],
            ["transform", "rotateZ", '-133deg'],
            ["transform", "skewX", '-7.82deg'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '403px'],
            ["transform", "skewY", '-15.87deg']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '36px'],
            ["style", "left", '474px'],
            ["style", "width", '374px']
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
         "${_Rectangle3Copy}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '52px'],
            ["style", "top", '439px'],
            ["style", "left", '763px'],
            ["style", "width", '231px']
         ],
         "${_Rectangle3Copy2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '52px'],
            ["style", "top", '579px'],
            ["style", "left", '369px'],
            ["style", "width", '428px']
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
      rect: ['416px','281px','202px','57px','auto','auto'],
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
      rect: ['199px','44px','155px','39px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['182px','49px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],['-125'],[],['0.612']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['199px','53px','155px','36px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'బయటికి ఎగిరి వచ్చేసాం. <br>',
      align: 'center',
      type: 'text'
   },
   {
      id: 'Group7',
      type: 'group',
      rect: ['496','401','185','84','auto','auto'],
      c: [
      {
         rect: ['20px','-23px','35px','104px','auto','auto'],
         id: 'pointer3Copy4',
         transform: [[],['294'],[],['0.612','0.705']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['58px','0px','127px','84px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy7',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['62px','4px','120px','84px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text4Copy10',
         text: 'జియో, నువ్వు మా పోలీస్ స్క్వాడ్ కి సహాయం చేయడం మాకు కావాలి. <br>',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['412px','27px','576px','28px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','italic'],
      id: 'Text4Copy4',
      text: 'పెద్దలు జియో అడిగిన దానిని చర్చించేటప్పుడు అతనిని బయట ఎదురుచూడమని పెద్దలు చెబుతారు <br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['422px','282px','190px','54px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','italic'],
      id: 'Text4Copy9',
      text: 'కొద్ది నిమిషాల తర్వాత వాళ్ళు అతన్ని వెనక్కి పిలుస్తారు. <br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['469','73','76','71','auto','auto'],
      id: 'Group2',
      type: 'group',
      font: ['rg',['no'],'none','none','none',''],
      c: [
      {
         rect: ['13px','-9px','35px','104px','auto','auto'],
         id: 'pointer3',
         transform: [[],['-135'],[],['0.612','0.558']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','76px','37px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['11px','10px','auto','auto','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text4Copy5',
         text: 'తెలివిగా',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['625px','97px','35px','104px','auto','auto'],
      id: 'pointer3Copy',
      transform: [[],['-33'],[],['0.612','0.81']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['588px','186px','92px','37px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy4',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['601px','192px','65px','23px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4Copy6',
      text: 'కష్టజీవి... <br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['745px','95px','35px','104px','auto','auto'],
      id: 'pointer3Copy2',
      transform: [[],['34'],[],['0.612','0.81']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['710px','185px','123px','57px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy5',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['717px','189px','110px','37px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4Copy7',
      text: 'నాకు అంతగా నమ్మకం లేదు... <br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['862','69','109','100','auto','auto'],
      id: 'Group5',
      type: 'group',
      font: ['rg',['no'],'none','none','none',''],
      c: [
      {
         rect: ['43px','14px','35px','104px','auto','auto'],
         id: 'pointer3Copy3',
         transform: [[],['138'],[],['0.612','0.705']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','109px','58px','auto','auto'],
         borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
         id: 'RoundRect3Copy6',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['8px','3px','93px','55px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text4Copy8',
         text: 'మనం వాళ్ళని నమ్మొచ్చా?<br>',
         align: 'center',
         type: 'text'
      }]
   },
   {
      rect: ['686px','321px','35px','104px','auto','auto'],
      id: 'pointer3Copy5',
      transform: [[],['142'],[],['0.612','0.81']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['635px','281px','208px','73px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'RoundRect3Copy8',
      stroke: [1,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['643px','283px','190px','71px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4Copy11',
      text: 'జియో, నిన్ను మీ వాళ్ళని మాతో శాంతియుతంగా జీవించేందుకు మేము ఆహ్వానిస్తున్నాము. <br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['821px','479px','35px','104px','auto','auto'],
      id: 'pointer3Copy6',
      transform: [[],['390'],[],['0.612','1.348']],
      type: 'image',
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
      rect: ['675px','564px','150px','49px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4Copy12',
      text: 'అది నాకు గర్వకారణం మేడమ్.',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect3Copy8}": [
            ["style", "top", '281px'],
            ["style", "height", '73px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '635px'],
            ["style", "width", '208px']
         ],
         "${_Text4}": [
            ["style", "top", '53px'],
            ["style", "font-size", '13px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '36px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '199px'],
            ["style", "width", '155px']
         ],
         "${_Text4Copy8}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '8px'],
            ["style", "font-size", '14px'],
            ["style", "top", '3px'],
            ["style", "text-align", 'center'],
            ["style", "height", '55px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '93px']
         ],
         "${_RoundRect3}": [
            ["style", "top", '0px'],
            ["style", "height", '37px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '76px']
         ],
         "${_Text4Copy9}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '422px'],
            ["style", "font-size", '13px'],
            ["style", "top", '282px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '190px'],
            ["style", "height", '54px']
         ],
         "${_Group2}": [
            ["style", "font-size", '13px']
         ],
         "${_pointer3Copy3}": [
            ["style", "top", '14px'],
            ["transform", "scaleY", '0.705'],
            ["transform", "rotateZ", '138deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '43px']
         ],
         "${_Text4Copy6}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '601px'],
            ["style", "font-size", '13px'],
            ["style", "top", '192px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '65px'],
            ["style", "height", '23px']
         ],
         "${_pointer3Copy5}": [
            ["style", "top", '321px'],
            ["transform", "scaleY", '0.81013'],
            ["transform", "rotateZ", '142deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '686px']
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
         "${_Text4Copy5}": [
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '11px'],
            ["style", "font-size", '14px']
         ],
         "${_RectangleCopy}": [
            ["style", "top", '281px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '416px'],
            ["style", "width", '202px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_RoundRect3Copy6}": [
            ["style", "top", '0px'],
            ["style", "height", '58px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '109px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '44px'],
            ["style", "left", '407px'],
            ["style", "width", '585px']
         ],
         "${_pointer3}": [
            ["style", "top", '-9px'],
            ["transform", "scaleY", '0.55769'],
            ["transform", "rotateZ", '-135deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '13px']
         ],
         "${_RoundRect3Copy7}": [
            ["style", "top", '0px'],
            ["style", "height", '84px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '58px'],
            ["style", "width", '127px']
         ],
         "${_Group5}": [
            ["style", "font-size", '13px']
         ],
         "${_Text4Copy11}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '643px'],
            ["style", "font-size", '13px'],
            ["style", "top", '283px'],
            ["style", "text-align", 'center'],
            ["style", "height", '71px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '190px']
         ],
         "${_BG7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "top", '44px'],
            ["style", "left", '199px'],
            ["style", "width", '155px']
         ],
         "${_Text4Copy10}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '62px'],
            ["style", "width", '120px'],
            ["style", "top", '4px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '84px'],
            ["style", "font-size", '13px']
         ],
         "${_pointer3Copy4}": [
            ["style", "top", '-23px'],
            ["transform", "scaleY", '0.705'],
            ["transform", "rotateZ", '294deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '20px']
         ],
         "${_pointer3Copy6}": [
            ["style", "top", '479px'],
            ["transform", "scaleY", '1.34772'],
            ["transform", "rotateZ", '390deg'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '821px']
         ],
         "${_RoundRect3Copy4}": [
            ["style", "top", '186px'],
            ["style", "height", '37px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '588px'],
            ["style", "width", '92px']
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
         "${_Text4Copy12}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '675px'],
            ["style", "width", '150px'],
            ["style", "top", '564px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '49px'],
            ["style", "font-size", '14px']
         ],
         "${_Text4Copy4}": [
            ["style", "top", '27px'],
            ["style", "width", '576px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "height", '28px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '412px'],
            ["style", "font-size", '13px']
         ],
         "${_pointer}": [
            ["style", "top", '49px'],
            ["transform", "scaleX", '0.6121'],
            ["style", "left", '182px'],
            ["transform", "rotateZ", '-125deg']
         ],
         "${_Text4Copy7}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '717px'],
            ["style", "font-size", '14px'],
            ["style", "top", '189px'],
            ["style", "text-align", 'center'],
            ["style", "height", '37px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "width", '110px']
         ],
         "${_RoundRect3Copy5}": [
            ["style", "top", '185px'],
            ["style", "height", '57px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '710px'],
            ["style", "width", '123px']
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
      font: ['Verdana, Geneva, sans-serif',16,'rgba(0,205,255,1.00)','700','none',''],
      type: 'text',
      id: 'Text',
      text: 'కావలెను<br>',
      align: 'right',
      rect: ['493px','283px','120px','31px','auto','auto']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [1,'rgb(0, 0, 0)','none'],
      rect: ['26px','24px','437px','61px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text5',
      text: 'జూడిక్స్ భూమి మీద స్థిరపడ్ఢారు. కాని జీవితం ఎప్పుడూ సాఫీగా ఉండదు. కొంతమంది జూడిక్స్ తప్పుదోవపట్టి సమస్య సృష్టిస్తారు. <br>',
      align: 'left',
      rect: ['40px','34px','399px','50px','auto','auto']
   },
   {
      type: 'group',
      id: 'Group',
      rect: ['511','428','338','130','auto','auto'],
      font: [['rg'],'normal','none','none',''],
      c: [
      {
         rect: ['138px','5px','200px','125px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['0px','0px','20px','20px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['33px','12px','30px','30px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         rect: ['77px','20px','50px','50px','auto','auto'],
         borderRadius: ['50%','50%','50%','50%'],
         id: 'Ellipse2Copy2',
         stroke: [1,'rgb(0, 0, 0)','none'],
         type: 'ellipse',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text6',
         text: 'నేను అమాయకపు <br>జూడిక్స్ కి సహాయం చేయాలి. కొంతమంది చేసే చెడ్డపనులకి వాళ్ళు బాధపడుతున్నారు.<br>',
         align: 'center',
         rect: ['145px','20px','186px','110px','auto','auto']
      }]
   },
   {
      transform: [[0,0],[],['0','3']],
      type: 'text',
      align: 'left',
      id: 'Text2',
      text: 'జూడిక్ పిల్లలని చేర్చుకోవడానికి స్కూల్ నిరాకరించింది<br>',
      rect: ['876px','348px','120px','56px','auto','auto'],
      font: ['Georgia, Times New Roman, Times, serif',10,'rgba(255,255,255,1)','700','none','normal']
   },
   {
      transform: [[0,0],[],['0','-4']],
      type: 'text',
      align: 'left',
      id: 'Text3',
      text: 'వీధి లైట్లు పగలగొట్టబడ్డాయి. జూడిక్ గ్యాంగ్ పై అనుమానం<br>',
      rect: ['45px','295px','146px','30px','auto','auto'],
      font: ['Georgia, Times New Roman, Times, serif',11,'rgba(255,255,255,1.00)','700','none','normal']
   },
   {
      transform: [[0,0],[],['0','-14']],
      type: 'text',
      align: 'left',
      id: 'Text3Copy',
      text: 'జూడిక్ పక్కన కూర్చోవడానికి మానవుని నిరాకరణ<br>',
      rect: ['26px','449px','124px','61px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',11,'rgba(0,0,0,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse2}": [
            ["style", "top", '0px'],
            ["style", "height", '20px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '20px']
         ],
         "${_Text3Copy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '26px'],
            ["style", "width", '124px'],
            ["style", "top", '449px'],
            ["transform", "skewY", '-14deg'],
            ["style", "height", '61px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "font-size", '11px'],
            ["style", "text-align", 'left']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '20px'],
            ["style", "height", '50px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '77px'],
            ["style", "width", '50px']
         ],
         "${_Ellipse2Copy}": [
            ["style", "top", '12px'],
            ["style", "height", '30px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '33px'],
            ["style", "width", '30px']
         ],
         "${_Group}": [
            ["style", "font-size", '13px']
         ],
         "${_Text2}": [
            ["style", "top", '348px'],
            ["style", "font-size", '10px'],
            ["style", "text-align", 'left'],
            ["transform", "skewY", '3deg'],
            ["style", "height", '56px'],
            ["style", "font-weight", '700'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "width", '120px']
         ],
         "${_BG8}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '652px']
         ],
         "${_Text6}": [
            ["style", "top", '20px'],
            ["style", "text-align", 'center'],
            ["style", "height", '110px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '145px'],
            ["style", "width", '186px']
         ],
         "${_Text4Copy5}": [
            ["style", "text-align", '']
         ],
         "${_Ellipse}": [
            ["style", "top", '5px'],
            ["style", "height", '125px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '138px'],
            ["style", "width", '200px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '24px'],
            ["style", "height", '61px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '26px'],
            ["style", "width", '437px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,205,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '493px'],
            ["style", "width", '120px'],
            ["style", "top", '283px'],
            ["style", "text-align", 'right'],
            ["style", "height", '31px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '16px']
         ],
         "${_Text3}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '45px'],
            ["style", "width", '146px'],
            ["style", "top", '295px'],
            ["transform", "skewY", '-4deg'],
            ["style", "font-family", 'Georgia, Times New Roman, Times, serif'],
            ["style", "font-size", '11px'],
            ["style", "text-align", 'left']
         ],
         "${_Text5}": [
            ["style", "top", '34px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'left'],
            ["style", "height", '50px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '40px'],
            ["style", "width", '399px']
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
      type: 'image',
      display: 'none',
      rect: ['0px','0px','132px','45px','auto','auto'],
      id: 'btn_ask_up',
      fill: ['rgba(0,0,0,0)','images/btn_ask_up.png','0px','0px']
   },
   {
      rect: ['27px','4px','81px','auto','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',30,'rgba(0,0,0,1.00)','700','none',''],
      id: 'Text',
      text: 'గేమ్',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_btn_ask_up}": [
            ["style", "top", '0px'],
            ["style", "display", 'none'],
            ["style", "height", '45px'],
            ["style", "left", '0px'],
            ["style", "width", '132px']
         ],
         "${_Text}": [
            ["style", "top", '4px'],
            ["style", "font-size", '30px'],
            ["style", "text-align", 'center'],
            ["style", "font-weight", '700'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '27px'],
            ["style", "width", '81px']
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
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'స్కిప్',
      font: ['Tahoma, Geneva, sans-serif',14,'rgba(255,239,0,1.00)','700','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,239,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '17px'],
            ["style", "width", '27px']
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
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['29px','26px','430px','34px','auto','auto'],
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text',
      text: 'జుడిక్స్ మనుషులు ఒకరినొకరు పరిచయం చేసుకుంటున్నారు. <br>',
      align: 'left',
      rect: ['36px','31px','430px','26px','auto','auto']
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
      transform: [[0,0],['168'],['0','10'],['0.497','1.255']],
      id: 'pointer',
      type: 'image',
      rect: ['128px','268px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['317'],['0','29'],['0.497','0.471']],
      id: 'pointerCopy',
      type: 'image',
      rect: ['384px','463px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'చూడండి డాడ్- మనుషులు! వాళ్ళందరూ  ఒకేలాగా ఉండరూ?<br>',
      align: 'center',
      rect: ['24px','328px','210px','47px','auto','auto']
   },
   {
      rect: ['580px','325px','193px','65px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [[0,0],['170'],['0','10'],['0.497','1.46']],
      id: 'pointerCopy2',
      type: 'image',
      rect: ['596px','285px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      transform: [[0,0],['188'],['0','-7'],['0.497','0.625']],
      id: 'pointerCopy3',
      type: 'image',
      rect: ['920px','465px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy2',
      text: 'ఆ వింత జీవులేంటి మమ్మీ? వాళ్ళందరూ నాకు ఒకేలాగా కనిపిస్తారు! <br>',
      align: 'center',
      rect: ['582px','328px','188px','57px','auto','auto']
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
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy3',
      text: 'వాళ్ళు జూడిక్స్, చిన్నారి. జాగ్రత్తగా చూడు. వాళ్ళ గుండెలమీద వేరే వేరే  ఆకారపు మార్కర్లున్నాయి.<br>',
      align: 'center',
      rect: ['880px','440px','108px','120px','auto','auto']
   },
   {
      rect: ['336px','558px','210px','65px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'నిజంగా కాదు, సోలా. వాళ్ళ ముఖాల వంక చూడు;   ఏ రెండు ముఖాలు  ఒకలాగా ఉండవు. <br>',
      align: 'center',
      rect: ['338px','561px','204px','58px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "top", '465px'],
            ["transform", "skewY", '-6.87deg'],
            ["transform", "rotateZ", '188deg'],
            ["transform", "scaleX", '0.49695'],
            ["transform", "scaleY", '0.625'],
            ["style", "left", '920px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect}": [
            ["style", "top", '325px'],
            ["style", "height", '49px'],
            ["style", "left", '16px'],
            ["style", "width", '228px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '436px'],
            ["style", "height", '133px'],
            ["style", "left", '875px'],
            ["style", "width", '119px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '285px'],
            ["transform", "skewY", '9.61deg'],
            ["transform", "rotateZ", '170deg'],
            ["transform", "scaleX", '0.49695'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '596px'],
            ["transform", "scaleY", '1.46039']
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '65px'],
            ["style", "top", '558px'],
            ["style", "left", '336px'],
            ["style", "width", '210px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "height", '65px'],
            ["style", "top", '325px'],
            ["style", "left", '580px'],
            ["style", "width", '193px']
         ],
         "${_Text2Copy3}": [
            ["style", "top", '440px'],
            ["style", "text-align", 'center'],
            ["style", "height", '120px'],
            ["style", "font-size", '13px'],
            ["style", "left", '880px'],
            ["style", "width", '108px']
         ],
         "${_Text2}": [
            ["style", "top", '328px'],
            ["style", "text-align", 'center'],
            ["style", "height", '47px'],
            ["style", "font-size", '13px'],
            ["style", "left", '24px'],
            ["style", "width", '210px']
         ],
         "${_Text2Copy2}": [
            ["style", "top", '328px'],
            ["style", "text-align", 'center'],
            ["style", "height", '57px'],
            ["style", "font-size", '13px'],
            ["style", "left", '582px'],
            ["style", "width", '188px']
         ],
         "${_BG08}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["style", "top", '31px'],
            ["style", "width", '430px'],
            ["style", "text-align", 'left'],
            ["style", "height", '26px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '36px'],
            ["style", "font-size", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '561px'],
            ["style", "text-align", 'center'],
            ["style", "height", '58px'],
            ["style", "font-size", '13px'],
            ["style", "left", '338px'],
            ["style", "width", '204px']
         ],
         "${_pointer}": [
            ["style", "top", '268px'],
            ["transform", "skewY", '9.61deg'],
            ["transform", "rotateZ", '168deg'],
            ["transform", "scaleX", '0.49695'],
            ["transform", "scaleY", '1.25496'],
            ["style", "left", '128px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '29px'],
            ["style", "width", '430px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '463px'],
            ["transform", "skewY", '28.96deg'],
            ["transform", "rotateZ", '317deg'],
            ["transform", "scaleX", '0.49695'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '384px'],
            ["transform", "scaleY", '0.47115']
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
