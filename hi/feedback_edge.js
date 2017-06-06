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
            id:'m01_feedback',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"feed"
         },
         {
            id:'m02_feedback',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"feed"
         },
         {
            id:'m03_feedback',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"feed"
         },
         {
            id:'m04_feedback',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto'],
            userClass:"feed"
         }],
         symbolInstances: [
         {
            id:'m02_feedback',
            symbolName:'m02_feedback'
         },
         {
            id:'m03_feedback',
            symbolName:'m03_feedback'
         },
         {
            id:'m04_feedback',
            symbolName:'m04_feedback'
         },
         {
            id:'m01_feedback',
            symbolName:'m01_feedback'
         }
         ]
      },
   states: {
      "Base State": {
         "${_m01_feedback}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_m03_feedback}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_m04_feedback}": [
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
      type: 'text',
      rect: ['0px','7px','170px','auto','auto','auto'],
      align: 'center',
      id: 'Text',
      text: 'जारी रखें<br>',
      userClass: 'cont_txt',
      font: ['Verdana, Geneva, sans-serif',20,'rgba(0,0,0,1)','700','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '7px'],
            ["style", "text-align", 'center'],
            ["style", "width", '170px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '20px']
         ],
         "${_btn_Start_up}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
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
"match_mc": {
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
      rect: ['-41px','0px','182px','70px','auto','auto'],
      align: 'center',
      id: 'Text8',
      text: 'मेल<br>',
      userClass: 'mtch_txt',
      font: ['Tahoma, Geneva, sans-serif',25,'rgba(255,255,255,1)','400','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text8}": [
            ["style", "top", '0px'],
            ["style", "width", '182px'],
            ["style", "display", 'block'],
            ["style", "height", '70px'],
            ["style", "font-weight", '400'],
            ["style", "left", '-41px'],
            ["style", "font-size", '25px']
         ],
         "${symbolSelector}": [
            ["style", "height", '36px'],
            ["style", "width", '97px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid5", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"m02_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      rect: ['402px','389px','48px','45px','auto','auto'],
      id: 'coin200',
      userClass: 'coinToken',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      rect: ['561px','389px','48px','45px','auto','auto'],
      id: 'coin50',
      userClass: 'coinToken',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_list',
      type: 'image',
      rect: ['244px','201px','433px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_list.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['612px','170px','214px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape.png','0px','0px']
   },
   {
      id: 'feedback_alien',
      type: 'image',
      rect: ['50px','209px','186px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_alien.png','0px','0px']
   },
   {
      rect: ['137px','392px','37px','37px','auto','auto'],
      id: '_28_normal',
      userClass: 'matchShape',
      type: 'image',
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      rect: ['644px','201px','152px','152px','auto','auto'],
      id: '_28_normalCopy',
      userClass: 'matchShape',
      type: 'image',
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      rect: ['605px','531px','115px','100px','auto','auto'],
      id: 'cord22',
      transform: [[0,0],['-11']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      rect: ['432px','600px','89px','60px','auto','auto'],
      id: 'cord2',
      transform: [[0,0],['-144']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      rect: ['540px','575px','89px','60px','auto','auto'],
      id: 'cord2Copy',
      transform: [[0,0],['-273']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      id: 'feedback_star_bg',
      type: 'image',
      rect: ['364px','167px','78px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star_bg.png','0px','0px']
   },
   {
      id: 'anim_star',
      type: 'rect',
      rect: ['342px','150px','auto','auto','auto','auto']
   },
   {
      userClass: 'token',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text7',
      text: 'X 1',
      align: 'left',
      rect: ['455px','399px','43px','auto','auto','auto']
   },
   {
      userClass: 'token',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text7Copy',
      text: 'X 6',
      align: 'left',
      rect: ['613px','399px','43px','auto','auto','auto']
   },
   {
      userClass: 'star ',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text3',
      text: '02',
      align: 'center',
      rect: ['405px','171px','auto','auto','auto','auto']
   },
   {
      rect: ['392px','346px','290px','24px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      id: 'Text4',
      text: 'बचाए गए टोकन्स<br>',
      align: 'center',
      type: 'text'
   },
   {
      userClass: 'job',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'बहुत बढिया!<br>',
      align: 'center',
      rect: ['398px','59px','271px','61px','auto','auto']
   },
   {
      userClass: 'solved',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',31,'rgba(255,255,255,1)','400','none','normal'],
      id: 'Text2',
      text: 'आपने केस सुलझा लिया<br>',
      align: 'center',
      rect: ['351px','105px','376px','auto','auto','auto']
   },
   {
      rect: ['467px','480px','54px','56px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal'],
      id: 'Text5',
      text: 'आपका स्कोर<br>',
      align: 'right',
      type: 'text'
   },
   {
      userClass: 'scoretxt',
      type: 'text',
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal'],
      id: 'Text6',
      text: '50',
      align: 'left',
      rect: ['537px','471px','62px','auto','auto','auto']
   },
   {
      id: 'match_mc',
      type: 'rect',
      transform: [],
      rect: ['671px','259px','auto','auto','auto','auto']
   },
   {
      rect: ['832px','598px','auto','auto','auto','auto'],
      id: 'btn_Start',
      userClass: 'cont_btn',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['274px','232px','347px','87px','auto','auto'],
      userClass: 'quest2',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['362px','375px','auto','auto','auto','auto'],
      id: 'mc_PerfectScore'
   }],
   symbolInstances: [
   {
      id: 'mc_PerfectScore',
      symbolName: 'mc_PerfectScore'
   },
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   },
   {
      id: 'anim_star',
      symbolName: 'anim_star'
   },
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "height", '87px'],
            ["style", "top", '232px'],
            ["style", "left", '274px'],
            ["style", "width", '347px']
         ],
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '455px'],
            ["style", "width", '43px']
         ],
         "${_Text3}": [
            ["style", "top", '171px'],
            ["style", "font-weight", '700'],
            ["style", "left", '405px'],
            ["style", "font-size", '20px']
         ],
         "${_coin200}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_Text5}": [
            ["style", "top", '480px'],
            ["style", "width", '54px'],
            ["style", "text-align", 'right'],
            ["style", "height", '56px'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "line-height", '20px'],
            ["style", "left", '467px'],
            ["style", "font-size", '18px']
         ],
         "${_cord2Copy}": [
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '575px'],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${_mc_PerfectScore}": [
            ["style", "top", '375px'],
            ["style", "left", '362px'],
            ["style", "display", 'none']
         ],
         "${_Text4}": [
            ["style", "top", '346px'],
            ["style", "width", '290px'],
            ["style", "height", '24px'],
            ["style", "font-weight", '400'],
            ["style", "left", '392px'],
            ["style", "font-size", '16px']
         ],
         "${_feedback_star_bg}": [
            ["style", "top", '167px'],
            ["style", "left", '364px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '613px'],
            ["style", "font-size", '20px']
         ],
         "${_feedback_alien}": [
            ["style", "top", '209px'],
            ["style", "left", '50px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_Text2}": [
            ["style", "top", '105px'],
            ["style", "width", '376px'],
            ["style", "font-weight", '400'],
            ["style", "left", '351px'],
            ["style", "font-size", '31px']
         ],
         "${_cord2}": [
            ["style", "top", '600px'],
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_feedback_shape}": [
            ["style", "left", '612px'],
            ["style", "top", '170px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_cord22}": [
            ["style", "top", '531px'],
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_anim_star}": [
            ["style", "left", '342px'],
            ["style", "top", '150px']
         ],
         "${__28_normal}": [
            ["style", "top", '392px'],
            ["style", "height", '37px'],
            ["style", "left", '137px'],
            ["style", "width", '37px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "width", '62px'],
            ["style", "left", '537px'],
            ["style", "font-size", '42px']
         ],
         "${_feedback_list}": [
            ["style", "left", '244px'],
            ["style", "top", '201px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '398px'],
            ["style", "font-size", '36px'],
            ["style", "top", '59px'],
            ["style", "text-align", 'center'],
            ["style", "height", '61px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '271px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${__28_normalCopy}": [
            ["style", "height", '152px'],
            ["style", "top", '201px'],
            ["style", "left", '644px'],
            ["style", "width", '152px']
         ],
         "${_match_mc}": [
            ["style", "top", '259px'],
            ["style", "left", '671px']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_coin50}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
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
            { id: "eid137", tween: [ "style", "${_mc_PerfectScore}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"m01_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_m1_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_alienCopy',
      type: 'image',
      rect: ['50px','209px','186px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_alien.png','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin200',
      rect: ['402px','389px','48px','45px','auto','auto'],
      userClass: 'coinToken',
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50',
      rect: ['561px','389px','48px','45px','auto','auto'],
      userClass: 'coinToken',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_list',
      type: 'image',
      rect: ['244px','201px','433px','152px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_list.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['612px','170px','214px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape.png','0px','0px']
   },
   {
      type: 'image',
      id: '_28_normal',
      rect: ['137px','392px','37px','37px','auto','auto'],
      userClass: 'matchShape',
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      type: 'image',
      id: '_28_normalCopy',
      rect: ['644px','201px','152px','152px','auto','auto'],
      userClass: 'matchShape',
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'cord22',
      rect: ['605px','531px','115px','100px','auto','auto'],
      transform: [[0,0],['-11']],
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'cord2',
      rect: ['432px','600px','89px','60px','auto','auto'],
      transform: [[0,0],['-144']],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'cord2Copy',
      rect: ['540px','575px','89px','60px','auto','auto'],
      transform: [[0,0],['-273']],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      id: 'feedback_star_bg',
      type: 'image',
      rect: ['504px','167px','78px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star_bg.png','0px','0px']
   },
   {
      id: 'anim_star',
      type: 'rect',
      rect: ['482px','150px','auto','auto','auto','auto']
   },
   {
      rect: ['455px','399px','43px','auto','auto','auto'],
      userClass: 'token',
      align: 'left',
      id: 'Text7',
      text: 'X 1',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text'
   },
   {
      rect: ['613px','399px','43px','auto','auto','auto'],
      userClass: 'token',
      align: 'left',
      id: 'Text7Copy',
      text: 'X 6',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      type: 'text'
   },
   {
      rect: ['545px','171px','auto','auto','auto','auto'],
      userClass: 'star ',
      align: 'center',
      id: 'Text3',
      text: '02',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text'
   },
   {
      type: 'text',
      rect: ['398px','347px','279px','36px','auto','auto'],
      id: 'Text4',
      text: 'बचाए गए टोकन्स<br>',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal']
   },
   {
      rect: ['398px','50px','271px','45px','auto','auto'],
      userClass: 'job',
      align: 'center',
      id: 'Text',
      text: 'शाबाश!',
      font: ['Tahoma, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text'
   },
   {
      rect: ['351px','92px','376px','45px','auto','auto'],
      userClass: 'solved',
      align: 'center',
      id: 'Text2',
      text: 'आपने केस सुलझा लिया<br>',
      font: ['Tahoma, Geneva, sans-serif',31,'rgba(255,255,255,1)','400','none','normal'],
      type: 'text'
   },
   {
      type: 'text',
      rect: ['445px','480px','77px','71px','auto','auto'],
      id: 'Text5',
      text: 'आपका स्कोर<br>',
      align: 'right',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal']
   },
   {
      rect: ['537px','471px','62px','auto','auto','auto'],
      userClass: 'scoretxt',
      align: 'left',
      id: 'Text6',
      text: '50',
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal'],
      type: 'text'
   },
   {
      id: 'match_mc',
      type: 'rect',
      rect: ['671px','259px','auto','auto','auto','auto'],
      transform: []
   },
   {
      type: 'rect',
      id: 'btn_Start',
      rect: ['832px','598px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'cont_btn'
   },
   {
      userClass: 'quest2',
      rect: ['274px','232px','347px','87px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'mc_PerfectScore',
      rect: ['362px','375px','auto','auto','auto','auto']
   },
   {
      id: 'CaseEnd_M1',
      type: 'rect',
      rect: ['747','517','auto','auto','auto','auto'],
      userClass: 'additionalText'
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   },
   {
      id: 'mc_PerfectScore',
      symbolName: 'mc_PerfectScore'
   },
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   },
   {
      id: 'anim_star',
      symbolName: 'anim_star'
   },
   {
      id: 'CaseEnd_M1',
      symbolName: 'CaseEnd_M1'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '232px'],
            ["style", "height", '87px'],
            ["style", "left", '274px'],
            ["style", "width", '347px']
         ],
         "${_cord2}": [
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '600px'],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_Text3}": [
            ["style", "top", '171px'],
            ["style", "font-weight", '700'],
            ["style", "left", '545px'],
            ["style", "font-size", '20px']
         ],
         "${_coin200}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["style", "width", '77px'],
            ["style", "text-align", 'right'],
            ["style", "height", '71px'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "top", '480px'],
            ["style", "left", '445px'],
            ["style", "font-size", '18px']
         ],
         "${_cord2Copy}": [
            ["style", "top", '575px'],
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${_feedback_star_bg}": [
            ["style", "top", '167px'],
            ["style", "left", '504px']
         ],
         "${_mc_PerfectScore}": [
            ["style", "top", '375px'],
            ["style", "left", '362px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '613px'],
            ["style", "width", '43px']
         ],
         "${_Text4}": [
            ["style", "top", '347px'],
            ["style", "width", '279px'],
            ["style", "height", '36px'],
            ["style", "font-weight", '400'],
            ["style", "left", '398px'],
            ["style", "font-size", '16px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_Text2}": [
            ["style", "top", '92px'],
            ["style", "font-size", '31px'],
            ["style", "height", '45px'],
            ["style", "font-weight", '400'],
            ["style", "left", '351px'],
            ["style", "width", '376px']
         ],
         "${_feedback_list}": [
            ["style", "left", '244px'],
            ["style", "top", '201px']
         ],
         "${_feedback_shape}": [
            ["style", "left", '612px'],
            ["style", "top", '170px']
         ],
         "${_cord22}": [
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '531px'],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${__28_normal}": [
            ["style", "height", '37px'],
            ["style", "top", '392px'],
            ["style", "left", '137px'],
            ["style", "width", '37px']
         ],
         "${_anim_star}": [
            ["style", "left", '482px']
         ],
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '455px'],
            ["style", "font-size", '20px']
         ],
         "${_feedback_alienCopy}": [
            ["style", "top", '209px'],
            ["style", "left", '50px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '42px'],
            ["style", "left", '537px'],
            ["style", "width", '62px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '398px'],
            ["style", "font-size", '36px'],
            ["style", "top", '50px'],
            ["style", "text-align", 'center'],
            ["style", "height", '45px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '271px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${__28_normalCopy}": [
            ["style", "top", '201px'],
            ["style", "height", '152px'],
            ["style", "left", '644px'],
            ["style", "width", '152px']
         ],
         "${_match_mc}": [
            ["style", "top", '259px'],
            ["style", "left", '671px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_coin50}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
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
            { id: "eid121", tween: [ "style", "${_mc_PerfectScore}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"m03_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_m3_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_alien',
      type: 'image',
      rect: ['50px','209px','186px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_alien.png','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin200',
      rect: ['402px','389px','48px','45px','auto','auto'],
      userClass: 'coinToken',
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      type: 'image',
      id: 'coin50',
      rect: ['561px','389px','48px','45px','auto','auto'],
      userClass: 'coinToken',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['432px','143px','214px','213px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape_m3.png','0px','0px']
   },
   {
      type: 'image',
      id: '_28_normal',
      rect: ['137px','392px','37px','37px','auto','auto'],
      userClass: 'matchShape',
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      type: 'image',
      id: '_28_normalCopy',
      rect: ['464px','174px','152px','152px','auto','auto'],
      userClass: 'matchShape',
      fill: ['rgba(0,0,0,0)','shapes/28/28_normal.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'cord22',
      rect: ['605px','531px','115px','100px','auto','auto'],
      transform: [[0,0],['-11']],
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'cord2',
      rect: ['432px','600px','89px','60px','auto','auto'],
      transform: [[0,0],['-144']],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'cord2Copy',
      rect: ['540px','575px','89px','60px','auto','auto'],
      transform: [[0,0],['-273']],
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      id: 'feedback_star_bgCopy',
      type: 'image',
      rect: ['328px','291px','78px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star_bg.png','0px','0px']
   },
   {
      id: 'anim_star',
      type: 'rect',
      rect: ['306px','274px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      userClass: 'token',
      rect: ['455px','399px','43px','auto','auto','auto'],
      id: 'Text7',
      text: 'X 1',
      align: 'left',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      type: 'text',
      userClass: 'token',
      rect: ['613px','399px','43px','auto','auto','auto'],
      id: 'Text7Copy',
      text: 'X 6',
      align: 'left',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      type: 'text',
      userClass: 'star ',
      rect: ['370px','295px','26px','auto','auto','auto'],
      id: 'Text3',
      text: '02',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal']
   },
   {
      type: 'text',
      rect: ['392px','349px','290px','24px','auto','auto'],
      id: 'Text4',
      text: 'बचाए गए टोकन्स<br>',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal']
   },
   {
      type: 'text',
      userClass: 'job',
      rect: ['398px','45px','271px','51px','auto','auto'],
      id: 'Text',
      text: 'शाबाश!',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',36,'rgba(255,255,255,1.00)','700','none','']
   },
   {
      type: 'text',
      userClass: 'solved',
      rect: ['351px','89px','376px','36px','auto','auto'],
      id: 'Text2',
      text: 'आपने केस सुलझा लिया<br>',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',26,'rgba(255,255,255,1)','400','none','normal']
   },
   {
      type: 'text',
      rect: ['477px','478px','48px','56px','auto','auto'],
      id: 'Text5',
      text: 'आपका स्कोर<br>',
      align: 'right',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      userClass: 'scoretxt',
      rect: ['537px','471px','62px','auto','auto','auto'],
      id: 'Text6',
      text: '50',
      align: 'left',
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal']
   },
   {
      id: 'match_mc',
      type: 'rect',
      transform: [],
      rect: ['491px','232px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'btn_Start',
      rect: ['832px','598px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      userClass: 'cont_btn'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['362px','375px','auto','auto','auto','auto'],
      id: 'mc_PerfectScore'
   },
   {
      id: 'CaseEnd_M32',
      type: 'rect',
      userClass: 'additionalText',
      rect: ['720px','557px','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'go2',
      rect: ['732px','190px','266px','343px','auto','auto'],
      userClass: 'gateOpen',
      fill: ['rgba(0,0,0,0)','images/go.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   },
   {
      id: 'CaseEnd_M32',
      symbolName: 'CaseEnd_M3'
   },
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   },
   {
      id: 'anim_star',
      symbolName: 'anim_star'
   },
   {
      id: 'mc_PerfectScore',
      symbolName: 'mc_PerfectScore'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '455px'],
            ["style", "font-size", '20px']
         ],
         "${_Text3}": [
            ["style", "top", '295px'],
            ["style", "width", 'auto'],
            ["style", "font-weight", '700'],
            ["style", "left", '370px'],
            ["style", "font-size", '20px']
         ],
         "${_coin200}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_Text2}": [
            ["style", "top", '89px'],
            ["style", "font-size", '26px'],
            ["style", "height", '36px'],
            ["style", "font-weight", '400'],
            ["style", "left", '351px'],
            ["style", "width", '376px']
         ],
         "${_CaseEnd_M32}": [
            ["style", "top", '557px'],
            ["style", "left", '720px']
         ],
         "${_mc_PerfectScore}": [
            ["style", "top", '375px'],
            ["style", "left", '362px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_cord2Copy}": [
            ["style", "top", '575px'],
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${_cord22}": [
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '531px'],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '613px'],
            ["style", "width", '43px']
         ],
         "${_feedback_alien}": [
            ["style", "top", '209px'],
            ["style", "left", '50px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_cord2}": [
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '600px'],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_match_mc}": [
            ["style", "top", '232px'],
            ["style", "left", '491px']
         ],
         "${_feedback_shape}": [
            ["style", "left", '432px'],
            ["style", "top", '143px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_anim_star}": [
            ["style", "left", '306px'],
            ["style", "top", '274px']
         ],
         "${_go2}": [
            ["style", "left", '732px'],
            ["style", "top", '190px']
         ],
         "${_Text5}": [
            ["style", "line-height", '20px'],
            ["style", "width", '48px'],
            ["style", "text-align", 'right'],
            ["style", "height", '56px'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "top", '478px'],
            ["style", "left", '477px'],
            ["style", "font-size", '18px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '42px'],
            ["style", "left", '537px'],
            ["style", "width", '62px']
         ],
         "${__28_normal}": [
            ["style", "height", '37px'],
            ["style", "top", '392px'],
            ["style", "left", '137px'],
            ["style", "width", '37px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '398px'],
            ["style", "width", '271px'],
            ["style", "top", '45px'],
            ["style", "text-align", 'center'],
            ["style", "height", '51px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "font-size", '36px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${__28_normalCopy}": [
            ["style", "top", '174px'],
            ["style", "height", '152px'],
            ["style", "left", '464px'],
            ["style", "width", '152px']
         ],
         "${_feedback_star_bgCopy}": [
            ["style", "top", '291px'],
            ["style", "left", '328px']
         ],
         "${_Text4}": [
            ["style", "top", '349px'],
            ["style", "width", '290px'],
            ["style", "height", '24px'],
            ["style", "font-weight", '400'],
            ["style", "left", '392px'],
            ["style", "font-size", '16px']
         ],
         "${_coin50}": [
            ["style", "height", '45px'],
            ["style", "top", '389px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
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
            { id: "eid138", tween: [ "style", "${_mc_PerfectScore}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"CaseEnd_M1": {
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
      rect: ['0px','0px','290px','64px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(218,220,185,1.00)']
   },
   {
      type: 'text',
      rect: ['15px','13px','235px','51px','auto','auto'],
      align: 'left',
      id: 'Text8',
      text: 'लगता है आपके लिए एक और केस तैयार हे<br>',
      userClass: 'additionalTextVal',
      font: ['Verdana, Geneva, sans-serif',16,'rgba(49,72,116,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(218,220,185,1)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '64px']
         ],
         "${_Text8}": [
            ["style", "top", '13px'],
            ["color", "color", 'rgba(49,72,116,1)'],
            ["style", "text-align", 'left'],
            ["style", "font-weight", 'normal'],
            ["style", "height", '51px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '15px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '64px'],
            ["style", "width", '290px']
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
"CaseEnd_M3": {
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
      rect: ['0px','0px','290px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(218,220,185,1.00)']
   },
   {
      type: 'text',
      rect: ['8px','7px','264px','77px','auto','auto'],
      align: 'left',
      id: 'Text8',
      text: 'लगता है आपको एक और फैक्टरी में भेजने के लिए एक ज्युडिक जासूस खोजना होगा।<br>',
      userClass: 'additionalTextVal',
      font: ['Verdana, Geneva, sans-serif',16,'rgba(49,72,116,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(218,220,185,1.00)']
         ],
         "${_Text8}": [
            ["color", "color", 'rgba(49,72,116,1.00)'],
            ["style", "font-weight", 'normal'],
            ["style", "left", '8px'],
            ["style", "font-size", '16px'],
            ["style", "top", '7px'],
            ["style", "text-align", 'left'],
            ["style", "height", '77px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '264px']
         ],
         "${symbolSelector}": [
            ["style", "height", '77px'],
            ["style", "width", '290px']
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
"m04_feedback": {
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
      id: 'feedback_bg',
      type: 'image',
      rect: ['0px','0px','1014px','652px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_m3_bg.jpg','0px','0px']
   },
   {
      id: 'feedback_popup',
      type: 'image',
      rect: ['266px','26px','541px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_popup.png','0px','0px']
   },
   {
      rect: ['402px','389px','48px','45px','auto','auto'],
      id: 'coin200',
      userClass: 'coinToken',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin200.png','0px','0px']
   },
   {
      rect: ['561px','389px','48px','45px','auto','auto'],
      id: 'coin50',
      userClass: 'coinToken',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/coin50.png','0px','0px']
   },
   {
      id: 'feedback_shape',
      type: 'image',
      rect: ['520px','155px','230px','229px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_shape_m4.png','0px','0px']
   },
   {
      id: 'gio_new',
      type: 'image',
      rect: ['59px','192px','188px','558px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gio_new.png','0px','0px']
   },
   {
      rect: ['605px','531px','115px','100px','auto','auto'],
      id: 'cord22',
      transform: [[0,0],['-11']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord22.svg','0px','0px']
   },
   {
      rect: ['432px','600px','89px','60px','auto','auto'],
      id: 'cord2',
      transform: [[0,0],['-144']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      rect: ['540px','575px','89px','60px','auto','auto'],
      id: 'cord2Copy',
      transform: [[0,0],['-273']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cord.svg','0px','0px']
   },
   {
      id: 'feedback_star_bgCopy2',
      type: 'image',
      rect: ['340px','310px','78px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star_bg.png','0px','0px']
   },
   {
      id: 'anim_star',
      type: 'rect',
      rect: ['318px','293px','auto','auto','auto','auto']
   },
   {
      userClass: 'token',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7',
      text: 'X 1',
      type: 'text',
      rect: ['455px','399px','43px','auto','auto','auto']
   },
   {
      userClass: 'token',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7Copy',
      text: 'X 6',
      type: 'text',
      rect: ['613px','399px','43px','auto','auto','auto']
   },
   {
      userClass: 'star ',
      font: ['Tahoma, Geneva, sans-serif',20,'rgba(255,255,255,1)','700','none','normal'],
      align: 'center',
      id: 'Text3',
      text: '02',
      type: 'text',
      rect: ['380px','314px','26px','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'oppCopy',
      rect: ['434px','73px','auto','auto','auto','auto'],
      userClass: 'opp',
      transform: [[0,0],[],[],['0.447','0.447']]
   },
   {
      rect: ['376px','352px','180px','27px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      id: 'Text4',
      text: 'बचाए गए टोकन्स<br>',
      align: 'left',
      type: 'text'
   },
   {
      userClass: 'job',
      font: ['Tahoma, Geneva, sans-serif',32,'rgba(255,255,255,1.00)','700','none',''],
      align: 'center',
      id: 'Text',
      text: 'बहुत बढिया!<br>',
      type: 'text',
      rect: ['398px','52px','271px','45px','auto','auto']
   },
   {
      userClass: 'solved',
      font: ['Tahoma, Geneva, sans-serif',25,'rgba(255,255,255,1)','400','none','normal'],
      align: 'center',
      id: 'Text2',
      text: 'आपने दुश्मन की फ्रेम निष्क्रिय कर दी!<br>',
      type: 'text',
      rect: ['393px','103px','285px','auto','auto','auto']
   },
   {
      rect: ['456px','478px','67px','56px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(243,205,34,1.00)','normal','none','normal'],
      id: 'Text5',
      text: 'आपका स्कोर<br>',
      align: 'right',
      type: 'text'
   },
   {
      userClass: 'scoretxt',
      font: ['Tahoma, Geneva, sans-serif',42,'rgba(243,205,34,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6',
      text: '50',
      type: 'text',
      rect: ['537px','471px','62px','auto','auto','auto']
   },
   {
      id: 'match_mc',
      type: 'rect',
      rect: ['369px','215px','auto','auto','auto','auto'],
      transform: []
   },
   {
      rect: ['832px','598px','auto','auto','auto','auto'],
      id: 'btn_Start',
      userClass: 'cont_btn',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      display: 'none',
      type: 'rect',
      id: 'mc_PerfectScore',
      rect: ['362px','375px','auto','auto','auto','auto']
   },
   {
      id: 'CaseEnd_M32',
      type: 'rect',
      rect: ['747','512px','auto','auto','auto','auto'],
      userClass: 'additionalText'
   }],
   symbolInstances: [
   {
      id: 'oppCopy',
      symbolName: 'opp'
   },
   {
      id: 'mc_PerfectScore',
      symbolName: 'mc_PerfectScore'
   },
   {
      id: 'CaseEnd_M32',
      symbolName: 'CaseEnd_M3'
   },
   {
      id: 'match_mc',
      symbolName: 'match_mc'
   },
   {
      id: 'anim_star',
      symbolName: 'anim_star'
   },
   {
      id: 'btn_Start',
      symbolName: 'btn_Start'
   }   ]
   },
   states: {
      "Base State": {
         "${_cord2}": [
            ["style", "top", '600px'],
            ["style", "-webkit-transform-origin", [16.98,22.89], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [16.98,22.89],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '432px'],
            ["transform", "rotateZ", '-144deg']
         ],
         "${_Text3}": [
            ["style", "top", '314px'],
            ["style", "font-size", '20px'],
            ["style", "font-weight", '700'],
            ["style", "left", '380px'],
            ["style", "width", 'auto']
         ],
         "${_coin200}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '402px'],
            ["style", "width", '48px']
         ],
         "${_Text5}": [
            ["style", "top", '478px'],
            ["style", "width", '67px'],
            ["style", "text-align", 'right'],
            ["style", "height", '56px'],
            ["color", "color", 'rgba(243,205,34,1.00)'],
            ["style", "line-height", '20px'],
            ["style", "left", '456px'],
            ["style", "font-size", '18px']
         ],
         "${_cord2Copy}": [
            ["style", "-webkit-transform-origin", [86.69,77], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [86.69,77],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "top", '575px'],
            ["style", "left", '540px'],
            ["transform", "rotateZ", '-273deg']
         ],
         "${_mc_PerfectScore}": [
            ["style", "top", '375px'],
            ["style", "left", '362px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '768px'],
            ["style", "width", '1014px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "width", '43px'],
            ["style", "left", '613px'],
            ["style", "font-size", '20px']
         ],
         "${_Text4}": [
            ["style", "top", '352px'],
            ["style", "text-align", 'left'],
            ["style", "width", '180px'],
            ["style", "height", '27px'],
            ["style", "font-weight", '400'],
            ["style", "left", '376px'],
            ["style", "font-size", '16px']
         ],
         "${_feedback_popup}": [
            ["style", "top", '26px'],
            ["style", "left", '266px']
         ],
         "${_CaseEnd_M32}": [
            ["style", "top", '512px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_feedback_shape}": [
            ["style", "height", '229px'],
            ["style", "top", '155px'],
            ["style", "left", '520px'],
            ["style", "width", '230px']
         ],
         "${_feedback_star_bgCopy2}": [
            ["style", "top", '310px'],
            ["style", "left", '340px']
         ],
         "${_Text7}": [
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-size", '20px'],
            ["style", "left", '455px'],
            ["style", "width", '43px']
         ],
         "${_cord22}": [
            ["style", "top", '531px'],
            ["style", "-webkit-transform-origin", [8.15,87.72], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [8.15,87.72],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '605px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_anim_star}": [
            ["style", "left", '318px'],
            ["style", "top", '293px']
         ],
         "${_Text6}": [
            ["style", "top", '471px'],
            ["style", "text-align", 'left'],
            ["style", "width", '62px'],
            ["style", "left", '537px'],
            ["style", "font-size", '42px']
         ],
         "${_Text2}": [
            ["style", "top", '103px'],
            ["style", "text-align", 'center'],
            ["style", "width", '285px'],
            ["style", "font-weight", '400'],
            ["style", "left", '393px'],
            ["style", "font-size", '25px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '398px'],
            ["style", "width", '271px'],
            ["style", "top", '52px'],
            ["style", "text-align", 'center'],
            ["style", "height", '45px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "font-size", '32px']
         ],
         "${_btn_Start}": [
            ["style", "top", '599px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '447px']
         ],
         "${_oppCopy}": [
            ["style", "top", '73px'],
            ["transform", "scaleX", '0.44715'],
            ["transform", "scaleY", '0.44715'],
            ["style", "left", '434px']
         ],
         "${_gio_new}": [
            ["style", "height", '558px'],
            ["style", "top", '192px'],
            ["style", "left", '59px'],
            ["style", "width", '188px']
         ],
         "${_match_mc}": [
            ["style", "top", '215px'],
            ["style", "left", '369px']
         ],
         "${_coin50}": [
            ["style", "top", '389px'],
            ["style", "height", '45px'],
            ["style", "left", '561px'],
            ["style", "width", '48px']
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
            { id: "eid87", tween: [ "style", "${_mc_PerfectScore}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
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
      type: 'image',
      id: 'white_circle2Copy74',
      rect: ['0px','0px','22px','22px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/white_circle2.png','0px','0px']
   },
   {
      type: 'image',
      id: 'blue_circle',
      rect: ['0px','0px','22px','22px','auto','auto'],
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
      type: 'image',
      id: 'bluetick-circle',
      rect: ['0px','0px','22px','22px','auto','auto'],
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
      userClass: 'boxGrid',
      id: '_4x4grid2',
      type: 'image',
      rect: ['0px','-1px','381px','381px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/4x4grid2.png','0px','0px']
   },
   {
      id: 'circleCopy25',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy26',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy27',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy28',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy32',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy31',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy30',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy29',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy36',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy35',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy34',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy33',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy40',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy39',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy38',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
   },
   {
      id: 'circleCopy37',
      type: 'rect',
      userClass: 'cell',
      rect: ['-9','-9','auto','auto','auto','auto']
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
            ["style", "top", '-1px'],
            ["style", "height", '381px'],
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
         "${_circleCopy38}": [
            ["style", "top", '-11px'],
            ["style", "left", '244px']
         ],
         "${_circleCopy32}": [
            ["style", "left", '-7px'],
            ["style", "top", '239px']
         ],
         "${_circleCopy29}": [
            ["style", "top", '239px'],
            ["style", "left", '372px']
         ],
         "${_circleCopy39}": [
            ["style", "left", '116px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy30}": [
            ["style", "top", '239px'],
            ["style", "left", '246px']
         ],
         "${_circleCopy27}": [
            ["style", "top", '364px'],
            ["style", "left", '246px']
         ],
         "${_circleCopy33}": [
            ["style", "top", '112px'],
            ["style", "left", '370px']
         ],
         "${_circleCopy37}": [
            ["style", "top", '-11px'],
            ["style", "left", '370px']
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
            { id: "eid149", tween: [ "style", "${_circleCopy27}", "left", '246px', { fromValue: '246px'}], position: 0, duration: 0 },
            { id: "eid153", tween: [ "style", "${_circleCopy31}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid166", tween: [ "style", "${_circleCopy37}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "style", "${_circleCopy26}", "left", '118px', { fromValue: '118px'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_circleCopy29}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid144", tween: [ "style", "${_circleCopy25}", "left", '-7px', { fromValue: '-7px'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_circleCopy33}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid163", tween: [ "style", "${_circleCopy38}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "style", "${_circleCopy34}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid161", tween: [ "style", "${_circleCopy35}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "style", "${_circleCopy28}", "left", '372px', { fromValue: '372px'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_circleCopy36}", "left", '-9px', { fromValue: '-9px'}], position: 0, duration: 0 },
            { id: "eid235", tween: [ "style", "${_circleCopy37}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_circleCopy30}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_circleCopy25}", "top", '364px', { fromValue: '364px'}], position: 0, duration: 0 },
            { id: "eid165", tween: [ "style", "${_circleCopy40}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid164", tween: [ "style", "${_circleCopy39}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "style", "${_circleCopy34}", "left", '244px', { fromValue: '244px'}], position: 0, duration: 0 },
            { id: "eid238", tween: [ "style", "${_circleCopy33}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid237", tween: [ "style", "${_circleCopy29}", "left", '372px', { fromValue: '372px'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_circleCopy32}", "top", '239px', { fromValue: '239px'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_circleCopy36}", "top", '112px', { fromValue: '112px'}], position: 0, duration: 0 }         ]
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
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy2',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy3',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy4',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy9',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy8',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy7',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy6',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy5',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy14',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy13',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy12',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy11',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy10',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy24',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy23',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy22',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy21',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy20',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy19',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy18',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy17',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy16',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
   },
   {
      id: 'circleCopy15',
      type: 'rect',
      rect: ['-9','-9','auto','auto','auto','auto'],
      userClass: 'cell'
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
            ["style", "left", '89px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy10}": [
            ["style", "left", '370px'],
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
         "${_circleCopy23}": [
            ["style", "left", '85px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy15}": [
            ["style", "left", '370px'],
            ["style", "top", '-11px']
         ],
         "${_circle}": [
            ["style", "left", '-10px'],
            ["style", "top", '365px']
         ],
         "${__5x5grid}": [
            ["style", "top", '0px'],
            ["style", "height", '380px'],
            ["style", "left", '0px'],
            ["style", "width", '380px']
         ],
         "${_circleCopy18}": [
            ["style", "left", '85px'],
            ["style", "top", '-11px']
         ],
         "${symbolSelector}": [
            ["style", "height", '377px'],
            ["style", "width", '385px']
         ],
         "${_circleCopy9}": [
            ["style", "left", '-10px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy16}": [
            ["style", "left", '275px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy12}": [
            ["style", "left", '182px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy20}": [
            ["style", "left", '370px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy4}": [
            ["style", "left", '370px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy24}": [
            ["style", "left", '-10px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy21}": [
            ["style", "left", '275px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy11}": [
            ["style", "left", '279px'],
            ["style", "top", '178px']
         ],
         "${_circleCopy3}": [
            ["style", "left", '275px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy19}": [
            ["style", "left", '-10px'],
            ["style", "top", '-11px']
         ],
         "${_circleCopy2}": [
            ["style", "left", '180px'],
            ["style", "top", '365px']
         ],
         "${_circleCopy22}": [
            ["style", "left", '180px'],
            ["style", "top", '82px']
         ],
         "${_circleCopy8}": [
            ["style", "left", '85px'],
            ["style", "top", '271px']
         ],
         "${_circleCopy5}": [
            ["style", "left", '370px'],
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
            { id: "eid114", tween: [ "style", "${_circleCopy7}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_circleCopy15}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_circleCopy11}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_circleCopy3}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_circleCopy14}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid219", tween: [ "style", "${_circleCopy23}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid126", tween: [ "style", "${_circleCopy17}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid95", tween: [ "style", "${_circle}", "left", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_circleCopy24}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid216", tween: [ "style", "${_circleCopy18}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid220", tween: [ "style", "${_circleCopy7}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid133", tween: [ "style", "${_circleCopy22}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid212", tween: [ "style", "${_circleCopy15}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid127", tween: [ "style", "${_circleCopy12}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid225", tween: [ "style", "${_circleCopy}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_circleCopy3}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid218", tween: [ "style", "${_circleCopy21}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid213", tween: [ "style", "${_circleCopy5}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid215", tween: [ "style", "${_circleCopy16}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid221", tween: [ "style", "${_circleCopy8}", "left", '85px', { fromValue: '85px'}], position: 0, duration: 0 },
            { id: "eid125", tween: [ "style", "${_circleCopy16}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid209", tween: [ "style", "${_circleCopy10}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid210", tween: [ "style", "${_circleCopy4}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid217", tween: [ "style", "${_circleCopy22}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid223", tween: [ "style", "${_circleCopy2}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_circleCopy23}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid123", tween: [ "style", "${_circleCopy19}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid112", tween: [ "style", "${_circleCopy6}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid116", tween: [ "style", "${_circleCopy8}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid96", tween: [ "style", "${_circle}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 },
            { id: "eid115", tween: [ "style", "${_circleCopy9}", "top", '271px', { fromValue: '271px'}], position: 0, duration: 0 },
            { id: "eid211", tween: [ "style", "${_circleCopy20}", "left", '370px', { fromValue: '370px'}], position: 0, duration: 0 },
            { id: "eid122", tween: [ "style", "${_circleCopy18}", "top", '-11px', { fromValue: '-11px'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_circleCopy10}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid132", tween: [ "style", "${_circleCopy20}", "top", '82px', { fromValue: '82px'}], position: 0, duration: 0 },
            { id: "eid214", tween: [ "style", "${_circleCopy17}", "left", '180px', { fromValue: '180px'}], position: 0, duration: 0 },
            { id: "eid222", tween: [ "style", "${_circleCopy6}", "left", '275px', { fromValue: '275px'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_circleCopy13}", "top", '178px', { fromValue: '178px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_circleCopy4}", "top", '365px', { fromValue: '365px'}], position: 0, duration: 0 }         ]
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
         "${_g4x4Copy}": [
            ["style", "top", '9px'],
            ["style", "left", '9px']
         ],
         "${_g5x5Copy}": [
            ["style", "top", '10px'],
            ["style", "left", '9px']
         ],
         "${symbolSelector}": [
            ["style", "height", '398px'],
            ["style", "width", '403px']
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
"mc_PerfectScore": {
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
      id: 'feedback_sprite_PerfectScore',
      type: 'image',
      rect: ['0px','-2px','350px','888px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_sprite_PerfectScore.png','0px','0px']
   },
   {
      font: ['Verdana, Geneva, sans-serif',32,'rgba(243,205,34,1.00)','700','none',''],
      type: 'text',
      id: 'Text8',
      text: 'उत्तम   स्कोर',
      align: 'center',
      rect: ['16px','12px','318px','54px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_feedback_sprite_PerfectScore}": [
            ["style", "top", '0px'],
            ["style", "height", '888px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '350px']
         ],
         "${_Text8}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '16px'],
            ["style", "font-size", '32px'],
            ["style", "top", '12px'],
            ["style", "text-align", 'center'],
            ["style", "height", '54px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '318px'],
            ["style", "opacity", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '74px'],
            ["style", "width", '350px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1057,
         autoPlay: true,
         timeline: [
            { id: "eid40", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 833, duration: 224 },
            { id: "eid75", tween: [ "color", "${_Text8}", "color", 'rgba(243,205,34,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 33, duration: 367 },
            { id: "eid76", tween: [ "color", "${_Text8}", "color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,205,34,1.00)'}], position: 400, duration: 333 },
            { id: "eid82", tween: [ "style", "${_feedback_sprite_PerfectScore}", "opacity", '0', { fromValue: '1'}], position: 833, duration: 224 },
            { id: "eid9", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid88", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-74px', { fromValue: '0px'}], position: 33, duration: 0 },
            { id: "eid89", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-148px', { fromValue: '-74px'}], position: 67, duration: 0 },
            { id: "eid90", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-222px', { fromValue: '-148px'}], position: 100, duration: 0 },
            { id: "eid91", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-296px', { fromValue: '-222px'}], position: 133, duration: 0 },
            { id: "eid92", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-370px', { fromValue: '-296px'}], position: 167, duration: 0 },
            { id: "eid93", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-444px', { fromValue: '-370px'}], position: 200, duration: 0 },
            { id: "eid94", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-518px', { fromValue: '-444px'}], position: 233, duration: 0 },
            { id: "eid97", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-592px', { fromValue: '-518px'}], position: 267, duration: 0 },
            { id: "eid98", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-666px', { fromValue: '-592px'}], position: 300, duration: 0 },
            { id: "eid99", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-740px', { fromValue: '-666px'}], position: 333, duration: 0 },
            { id: "eid100", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-814px', { fromValue: '-740px'}], position: 367, duration: 0 },
            { id: "eid102", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-740px', { fromValue: '-814px'}], position: 400, duration: 0 },
            { id: "eid103", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-666px', { fromValue: '-740px'}], position: 433, duration: 0 },
            { id: "eid104", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-592px', { fromValue: '-666px'}], position: 467, duration: 0 },
            { id: "eid107", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-518px', { fromValue: '-592px'}], position: 500, duration: 0 },
            { id: "eid108", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-444px', { fromValue: '-518px'}], position: 533, duration: 0 },
            { id: "eid109", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-370px', { fromValue: '-444px'}], position: 567, duration: 0 },
            { id: "eid110", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-296px', { fromValue: '-370px'}], position: 600, duration: 0 },
            { id: "eid111", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-222px', { fromValue: '-296px'}], position: 633, duration: 0 },
            { id: "eid118", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-148px', { fromValue: '-222px'}], position: 667, duration: 0 },
            { id: "eid119", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '-74px', { fromValue: '-148px'}], position: 700, duration: 0 },
            { id: "eid120", tween: [ "style", "${_feedback_sprite_PerfectScore}", "top", '0px', { fromValue: '-74px'}], position: 733, duration: 0 }         ]
      }
   }
},
"anim_star": {
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
      id: 'feedback_star_main',
      type: 'image',
      rect: ['0px','0px','62px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_star_main.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_feedback_star_main}": [
            ["style", "top", '0px'],
            ["transform", "scaleY", '2'],
            ["transform", "rotateZ", '-146deg'],
            ["transform", "scaleX", '2'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '62px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 600,
         autoPlay: true,
         timeline: [
            { id: "eid170", tween: [ "transform", "${_feedback_star_main}", "rotateZ", '0deg', { fromValue: '-146deg'}], position: 0, duration: 600, easing: "easeInQuad" },
            { id: "eid169", tween: [ "transform", "${_feedback_star_main}", "scaleY", '1', { fromValue: '2'}], position: 0, duration: 600 },
            { id: "eid173", tween: [ "style", "${_feedback_star_main}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 600 },
            { id: "eid168", tween: [ "transform", "${_feedback_star_main}", "scaleX", '1', { fromValue: '2'}], position: 0, duration: 600 }         ]
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
})(jQuery, AdobeEdge, "feedback");
