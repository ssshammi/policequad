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
         "${_level_03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_level_02}": [
            ["style", "left", '0px']
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
"BG12b": {
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
      font: ['Verdana, Geneva, sans-serif',12,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'మీరు మరొక కేసులోకి వచ్చారు. ఈ కేసులో నెరస్తులని గుర్తించేందుకు జి 8 సహాయం తీసుకోండి. నేరస్తుని షార్ట్ లిస్ట్ చేసేందుకు రోబోట్ ని ప్రశ్నించండి.<br><br>కేసుకి వెళ్ళేందుకు నెక్స్ట్ క్లిక్ చేయండి.',
      align: 'left',
      rect: ['155px','282px','288px','133px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6Copy',
      text: 'మిషన్ గురించి క్లుప్తంగా',
      align: 'center',
      rect: ['152px','227px','300px','50px','auto','auto']
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
         "${_Text6}": [
            ["style", "top", '282px'],
            ["style", "text-align", 'left'],
            ["style", "width", '288px'],
            ["style", "height", '133px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "font-size", '12px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "width", '300px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '152px'],
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
"BG12": {
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
      fill: ['rgba(0,0,0,0)','images/M2_BG12.jpg','0px','0px']
   },
   {
      rect: ['471px','26px','128px','49px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['152px','54px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],['-131'],[],['0.689']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['128px','29px','142px','53px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['135px','38px','128px','38px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text',
      text: 'అది కొంత మంచి పని చేసావు<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['875px','-13px','35px','104px','auto','auto'],
      id: 'pointerCopy2',
      transform: [[],['-149'],[],['0.689','1.216']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['829px','37px','158px','69px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['836px','42px','141px','61px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy2',
      text: 'హల్లో! హల్లో! ఏంటి? ఇంకొక నీటి దొంగతనమా?<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['191px','318px','35px','104px','auto','auto'],
      id: 'pointerCopy3',
      transform: [[],['-219'],[],['0.689','0.885']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['34px','339px','214px','92px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['39px','343px','203px','88px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy3',
      text: 'ఇదేమీ బాగాలేదు జియో. ఇప్పుడు వాళ్ళు నీళ్ళ ట్యాంకుల నుంచి నీళ్ళు దొంగిలిస్తున్నారు. అది మళ్ళీ జూడిక్ ముఠానే.<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['470px','281px','35px','104px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[],['-132'],[],['0.689','1.815']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['345px','343px','207px','56px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['353px','347px','190px','44px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy5',
      text: 'జి 8 దొంగతనాన్ని చూసింది. నేను ఆ రోబోట్ ని తెస్తానుండు<br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['171px','356px','35px','104px','auto','auto'],
      id: 'pointerCopy4',
      transform: [[],['-153'],[],['0.689','0.885']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['114px','439px','92px','37px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['120px','443px','80px','29px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy4',
      text: '. ఓహో.... <br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['369px','-8px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[],['-151'],[],['0.689','0.887']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['297px','76px','107px','40px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['305px','81px','92px','38px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy',
      text: 'థాంక్యూ సర్ <br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['476px','29px','115px','46px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','italic'],
      id: 'Text2',
      text: 'అంతలోనే ఫోన్ మోగుతుంది<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['127px','579px','22px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['135px','541px','135px','92px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['144px','550px','115px','86px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text4',
      text: 'కొంతమంది <br>చెడిపోయిన వారివల్ల మా అందరికీ చెడ్డపేరొస్తుంది.. <br>',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['117px','570px','11px','10px','auto','auto'],
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
         "${_Rectangle2}": [
            ["style", "top", '26px'],
            ["style", "height", '49px'],
            ["style", "left", '471px'],
            ["style", "width", '128px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "height", '92px'],
            ["style", "top", '339px'],
            ["style", "left", '34px'],
            ["style", "width", '214px']
         ],
         "${_Text2}": [
            ["style", "line-height", '15px'],
            ["style", "text-align", 'left'],
            ["style", "width", '115px'],
            ["style", "height", '46px'],
            ["style", "top", '29px'],
            ["style", "left", '476px'],
            ["style", "font-size", '13px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '281px'],
            ["transform", "scaleY", '1.81498'],
            ["transform", "rotateZ", '-132deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '470px'],
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
         "${_RoundRectCopy5}": [
            ["style", "top", '343px'],
            ["style", "height", '56px'],
            ["style", "left", '345px'],
            ["style", "width", '207px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '439px'],
            ["style", "height", '37px'],
            ["style", "left", '114px'],
            ["style", "width", '92px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '42px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'center'],
            ["style", "height", '61px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '836px'],
            ["style", "width", '141px']
         ],
         "${_Text4}": [
            ["style", "line-height", '15px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '144px'],
            ["style", "font-size", '13px'],
            ["style", "top", '550px'],
            ["style", "text-align", 'center'],
            ["style", "height", '86px'],
            ["style", "font-style", 'normal'],
            ["style", "width", '115px']
         ],
         "${_TextCopy4}": [
            ["style", "top", '443px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '29px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '120px'],
            ["style", "width", '80px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '343px'],
            ["style", "width", '203px'],
            ["style", "text-align", 'center'],
            ["style", "height", '88px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '39px'],
            ["style", "font-size", '13px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '356px'],
            ["transform", "scaleY", '0.88462'],
            ["transform", "rotateZ", '-153deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '171px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy5}": [
            ["style", "top", '347px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '44px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '353px'],
            ["style", "width", '190px']
         ],
         "${_Ellipse}": [
            ["style", "top", '541px'],
            ["style", "height", '92px'],
            ["style", "left", '135px'],
            ["style", "width", '135px']
         ],
         "${_Ellipse2}": [
            ["style", "left", '117px'],
            ["style", "top", '570px']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '318px'],
            ["transform", "scaleY", '0.88462'],
            ["transform", "rotateZ", '-219deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '191px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Ellipse2Copy2}": [
            ["style", "height", '20px'],
            ["style", "top", '579px'],
            ["style", "left", '127px'],
            ["style", "width", '22px']
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '40px'],
            ["style", "top", '76px'],
            ["style", "left", '297px'],
            ["style", "width", '107px']
         ],
         "${_RoundRectCopy2}": [
            ["style", "top", '37px'],
            ["style", "height", '69px'],
            ["style", "left", '829px'],
            ["style", "width", '158px']
         ],
         "${_pointerCopy2}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '1.21603'],
            ["transform", "rotateZ", '-149deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '875px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect}": [
            ["style", "top", '29px'],
            ["style", "left", '128px'],
            ["style", "width", '142px']
         ],
         "${_Text}": [
            ["style", "top", '38px'],
            ["style", "width", '128px'],
            ["style", "text-align", 'center'],
            ["style", "line-height", '15px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '135px'],
            ["style", "font-size", '13px']
         ],
         "${_pointer}": [
            ["style", "top", '54px'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '152px'],
            ["transform", "rotateZ", '-131deg']
         ],
         "${_TextCopy}": [
            ["style", "top", '81px'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'center'],
            ["style", "line-height", '15px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '305px'],
            ["style", "width", '92px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '-8px'],
            ["transform", "scaleY", '0.88718'],
            ["transform", "rotateZ", '-151deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '369px'],
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
      fill: ['rgba(0,0,0,0)','images/BG10.jpg','0px','0px']
   },
   {
      id: 'Group2',
      type: 'group',
      rect: ['42','34','319','265','auto','auto'],
      c: [
      {
         rect: ['0px','0px','305px','131px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRect',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'image',
         id: 'pointer',
         rect: ['220px','13px','35px','120px','auto','auto'],
         transform: [[0,0],['-206'],[],['0.745','1.454']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         type: 'text',
         rect: ['25px','21px','255px','90px','auto','auto'],
         id: 'Text5',
         text: 'The robot on duty, G2 witnessed the robbery. I’ve called G2 over to answer our questions. But G2 can only reply with “Yes”, “No” and “I don’t know.” You know that, right?<br>',
         align: 'left',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal']
      }]
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['117','196','101','138','auto','auto'],
      c: [
      {
         type: 'image',
         id: 'pointerCopy',
         rect: ['52px','-80px','35px','120px','auto','auto'],
         transform: [[0,0],['-160'],[],['0.745','1.092']],
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['0px','0px','101px','38px','auto','auto'],
         borderRadius: ['10px','10px','10px','10px'],
         id: 'RoundRectCopy',
         stroke: [0,'rgb(0, 0, 0)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1)']
      },
      {
         type: 'text',
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         rect: ['20px','10px','68px','19px','auto','auto'],
         id: 'Text5Copy',
         text: 'Yes Sir.',
         align: 'center',
         transform: []
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_BG10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_RoundRect}": [
            ["style", "top", '0px'],
            ["style", "height", '131px'],
            ["style", "left", '0px'],
            ["style", "width", '305px']
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '38px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Text5Copy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '68px'],
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '19px']
         ],
         "${_pointer}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '1.45422'],
            ["transform", "rotateZ", '-206deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '220px'],
            ["style", "height", '120px']
         ],
         "${_Text5}": [
            ["style", "top", '21px'],
            ["style", "text-align", 'left'],
            ["style", "height", '90px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '25px'],
            ["style", "width", '255px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '-80px'],
            ["transform", "scaleY", '1.09167'],
            ["transform", "rotateZ", '-160deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "height", '120px'],
            ["style", "left", '52px'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}]
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
      id: 'BG12',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'BG12b',
      type: 'rect',
      rect: ['-2px','0px','auto','auto','auto','auto']
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
      id: 'BG12',
      symbolName: 'BG12'
   },
   {
      id: 'Stage_transition',
      symbolName: 'Stage_transition'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'BG12b',
      symbolName: 'BG12b'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
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
         "${_Stage_transition}": [
            ["style", "display", 'none']
         ],
         "${_BG12b}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_BG12}": [
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
         autoPlay: true,
         timeline: [
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_BG12b}", "left", '0px', { fromValue: '1012px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid31", tween: [ "style", "${_Stage_transition}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid33", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid32", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid49", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transition}', [] ], ""], position: 0 },
            { id: "eid50", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transition}', [] ], ""], position: 555 }         ]
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
      id: 'BG13',
      type: 'rect',
      rect: ['419','297','auto','auto','auto','auto']
   },
   {
      id: 'BG14',
      type: 'rect',
      rect: ['527','437','auto','auto','auto','auto']
   },
   {
      id: 'BG14b',
      type: 'rect',
      rect: ['1014','0px','auto','auto','auto','auto']
   },
   {
      rect: ['0','0','auto','auto','auto','auto'],
      id: 'Stage_transitionCopy',
      userClass: ' trnasStage',
      display: 'none',
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_next',
      userClass: 'btnClick mainSND',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_nextCopy',
      userClass: 'btnClick ',
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
      id: 'BG14',
      symbolName: 'BG14'
   },
   {
      id: 'BG13',
      symbolName: 'BG13'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'BG14b',
      symbolName: 'BG14b'
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
         "${_BG13}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage_transitionCopy}": [
            ["style", "display", 'none']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'block'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '953px'],
            ["style", "top", '593px']
         ],
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "display", 'none'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_BG14b}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
         ],
         "${_BG14}": [
            ["style", "left", '1014px'],
            ["style", "top", '0px']
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
         duration: 3055,
         autoPlay: true,
         timeline: [
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_btn_next}", "left", '459px', { fromValue: '953px'}], position: 750, duration: 0, easing: "easeOutCirc" },
            { id: "eid43", tween: [ "style", "${_Stage_transitionCopy}", "display", 'block', { fromValue: 'none'}], position: 805, duration: 0, easing: "easeOutCirc" },
            { id: "eid12", tween: [ "style", "${_BG14}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 750, duration: 0, easing: "easeOutCirc" },
            { id: "eid56", tween: [ "style", "${_BG14b}", "left", '0px', { fromValue: '1014px'}], position: 500, duration: 250, easing: "easeOutCirc" },
            { id: "eid30", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid29", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 540, duration: 0 },
            { id: "eid28", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid44", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 805, duration: 0, easing: "easeOutCirc" },
            { id: "eid11", tween: [ "style", "${_BG14}", "top", '0px', { fromValue: '0px'}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid8", tween: [ "style", "${_BG13}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid9", tween: [ "style", "${_BG13}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid46", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 805, duration: 0, easing: "easeOutCirc" },
            { id: "eid51", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transitionCopy}', [] ], ""], position: 0 },
            { id: "eid52", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transitionCopy}', [] ], ""], position: 805 }         ]
      }
   }
},
"BG13": {
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
      fill: ['rgba(0,0,0,0)','images/M2_BG13.jpg','0px','0px']
   },
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['38px','37px','345px','53px','auto','auto'],
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [[0,0],['-253'],[],['0.689','1.183']],
      id: 'pointerCopy5',
      type: 'image',
      rect: ['118px','115px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['56px','192px','138px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'TextCopy5',
      text: 'నిజంగానా?  ఊ... ఓకె.   ఊ. అవును సర్. ',
      align: 'center',
      rect: ['66px','199px','117px','57px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'వాళ్ళిద్దరూ ఇంకా ఆ రోజుకి పని ముగించబోతూ ఉండగా, పోలీస్ ముఖ్యాధికారి కాటాకి ఒక ఫోన్ కాల్ వస్తుంది. ',
      align: 'left',
      rect: ['45px','42px','331px','53px','auto','auto']
   },
   {
      rect: ['694px','266px','22px','20px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['720px','242px','30px','27px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2Copy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['735px','163px','138px','86px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'ellipse',
      fill: ['rgba(255,255,255,1)']
   },
   {
      transform: [],
      type: 'text',
      align: 'center',
      id: 'Text4',
      text: 'ఇప్పుడేవిటబ్బా!',
      rect: ['739px','193px','126px','53px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1.00)','normal','none','normal']
   },
   {
      rect: ['674px','286px','11px','10px','auto','auto'],
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
            ["style", "left", '674px'],
            ["style", "top", '286px']
         ],
         "${_TextCopy5}": [
            ["style", "line-height", '15px'],
            ["style", "left", '66px'],
            ["style", "width", '117px'],
            ["style", "top", '199px'],
            ["style", "text-align", 'center'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '13px']
         ],
         "${_Text2}": [
            ["style", "line-height", '15px'],
            ["style", "text-align", 'left'],
            ["style", "width", '331px'],
            ["style", "height", '53px'],
            ["style", "top", '42px'],
            ["style", "left", '45px'],
            ["style", "font-size", '13px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '115px'],
            ["transform", "scaleY", '1.18269'],
            ["transform", "rotateZ", '-253deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '118px'],
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
         "${_Text4}": [
            ["style", "line-height", '15px'],
            ["color", "color", 'rgba(0,0,0,1)'],
            ["style", "left", '739px'],
            ["style", "font-size", '13px'],
            ["style", "top", '193px'],
            ["style", "text-align", 'center'],
            ["style", "height", '53px'],
            ["transform", "scaleY", '1'],
            ["style", "width", '126px'],
            ["style", "font-style", 'normal']
         ],
         "${_Ellipse}": [
            ["style", "height", '86px'],
            ["style", "top", '163px'],
            ["style", "left", '735px'],
            ["style", "width", '138px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle2}": [
            ["style", "height", '53px'],
            ["style", "top", '37px'],
            ["style", "left", '38px'],
            ["style", "width", '345px']
         ],
         "${_Ellipse2Copy2}": [
            ["style", "top", '266px'],
            ["style", "height", '20px'],
            ["style", "left", '694px'],
            ["style", "width", '22px']
         ],
         "${_Ellipse2Copy3}": [
            ["style", "height", '27px'],
            ["style", "top", '242px'],
            ["style", "left", '720px'],
            ["style", "width", '30px']
         ],
         "${_RoundRectCopy5}": [
            ["style", "height", '77px'],
            ["style", "top", '192px'],
            ["style", "left", '56px'],
            ["style", "width", '138px']
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
"BG14": {
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
      fill: ['rgba(0,0,0,0)','images/M2_BG14.jpg','0px','0px']
   },
   {
      rect: ['94px','18px','35px','104px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[],['-204'],[],['0.689','0.827']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['43px','40px','263px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['55px','49px','236px','100px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy5',
      text: 'జియో ఈ నీళ్ళ దొంగల ముఠా యొక్క ముఠా నాయకులు ఇంకా చుట్టుపక్కల తిరుగుతూనే ఉన్నారు. ఇప్పుడు వాళ్ళు పైపులు మళ్ళిస్తున్నారు.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['658px','-15px','35px','104px','auto','auto'],
      id: 'pointerCopy7',
      transform: [[],['-239'],[],['0.689','1.894']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['580px','50px','194px','57px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['591px','55px','169px','57px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy7',
      text: 'అవును జియో మనం వీళ్ళని వెతికి పట్టుకోవాలి',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['779px','345px','35px','104px','auto','auto'],
      id: 'pointerCopy10',
      transform: [[],['-248'],[],['0.689','1.703']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['701px','394px','236px','71px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['711px','399px','218px','71px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy10',
      text: 'చింతించకండి సర్. అమాయకులైన జూడిక్స్ ని విడుదల చేసేందుకు నేను జి2 తో కలిసి పనిచేస్తాను.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['307px','115px','35px','104px','auto','auto'],
      id: 'pointerCopy6',
      transform: [[],['-165'],[],['0.689','0.827']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['216px','161px','159px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['226px','168px','142px','72px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy6',
      text: 'నిజంగానా?  అయితే ఇప్పుడు వాళ్ళు చెస్తున్నది ఇదా?',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['596px','92px','35px','104px','auto','auto'],
      id: 'pointerCopy8',
      transform: [[],['-111'],[],['0.689','0.827']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['586px','166px','164px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['596px','176px','149px','72px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy8',
      text: 'ఈ కేసుల్లో జి2 దొంగని స్పాట్ చేసిందా?<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['676px','253px','35px','104px','auto','auto'],
      id: 'pointerCopy9',
      transform: [[],['-126'],[],['0.689','0.962']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['643px','296px','194px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['652px','304px','179px','57px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy9',
      text: 'అవును జియో. చెప్పడానికి బాధగా ఉంది.  వాళ్ళు మళ్ళీ జూడిక్సే.',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy9}": [
            ["style", "line-height", '15px'],
            ["style", "left", '652px'],
            ["style", "width", '179px'],
            ["style", "top", '304px'],
            ["style", "text-align", 'left'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '13px']
         ],
         "${_pointerCopy6}": [
            ["style", "top", '115px'],
            ["transform", "scaleY", '0.82692'],
            ["transform", "rotateZ", '-165deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '307px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy8}": [
            ["style", "top", '166px'],
            ["style", "height", '77px'],
            ["style", "left", '586px'],
            ["style", "width", '164px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '18px'],
            ["transform", "scaleY", '0.82692'],
            ["transform", "rotateZ", '-204deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '94px'],
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
            ["style", "height", '57px'],
            ["style", "top", '50px'],
            ["style", "left", '580px'],
            ["style", "width", '194px']
         ],
         "${_TextCopy10}": [
            ["style", "line-height", '15px'],
            ["style", "left", '711px'],
            ["style", "font-size", '13px'],
            ["style", "top", '399px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '71px'],
            ["style", "width", '218px']
         ],
         "${_pointerCopy8}": [
            ["style", "top", '92px'],
            ["transform", "scaleY", '0.82692'],
            ["transform", "rotateZ", '-111deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '596px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy5}": [
            ["style", "line-height", '15px'],
            ["style", "left", '55px'],
            ["style", "font-size", '13px'],
            ["style", "top", '49px'],
            ["style", "text-align", ''],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '100px'],
            ["style", "width", '236px']
         ],
         "${_RoundRectCopy10}": [
            ["style", "top", '394px'],
            ["style", "height", '71px'],
            ["style", "left", '701px'],
            ["style", "width", '236px']
         ],
         "${_pointerCopy9}": [
            ["style", "top", '253px'],
            ["transform", "scaleY", '0.96154'],
            ["transform", "rotateZ", '-126deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '676px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_pointerCopy10}": [
            ["style", "top", '345px'],
            ["transform", "scaleY", '1.70255'],
            ["transform", "rotateZ", '-248deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '779px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy6}": [
            ["style", "height", '77px'],
            ["style", "top", '161px'],
            ["style", "left", '216px'],
            ["style", "width", '159px']
         ],
         "${_RoundRectCopy9}": [
            ["style", "height", '77px'],
            ["style", "top", '296px'],
            ["style", "left", '643px'],
            ["style", "width", '194px']
         ],
         "${_TextCopy8}": [
            ["style", "line-height", '15px'],
            ["style", "left", '596px'],
            ["style", "font-size", '13px'],
            ["style", "top", '176px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "height", '72px'],
            ["style", "width", '149px']
         ],
         "${_pointerCopy7}": [
            ["style", "top", '-15px'],
            ["transform", "scaleY", '1.89385'],
            ["transform", "rotateZ", '-239deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '658px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_TextCopy7}": [
            ["style", "line-height", '15px'],
            ["style", "left", '591px'],
            ["style", "width", '169px'],
            ["style", "top", '55px'],
            ["style", "text-align", 'left'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '13px']
         ],
         "${_TextCopy6}": [
            ["style", "line-height", '15px'],
            ["style", "left", '226px'],
            ["style", "width", '142px'],
            ["style", "top", '168px'],
            ["style", "text-align", 'left'],
            ["style", "height", '72px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '13px']
         ],
         "${_RoundRectCopy5}": [
            ["style", "top", '40px'],
            ["style", "height", '100px'],
            ["style", "left", '43px'],
            ["style", "width", '263px']
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
      rect: ['155px','277px','288px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      type: 'text',
      rect: ['155px','289px','288px','124px','auto','auto'],
      id: 'Text6',
      text: 'You are onto another case. In this case take the help of G8 to identify the culprit. Question the robot to shortlist the culprit.<br><br>Click next to move onto the instruction Screen.<br>',
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
         "${_Text6}": [
            ["style", "top", '289px'],
            ["style", "text-align", 'left'],
            ["style", "height", '124px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
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
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,255,255,1.00)','700','none',''],
      type: 'text',
      id: 'Text',
      text: 'నీళ్ళ దొంగలు ',
      align: 'center',
      rect: ['426px','229px','376px','48px','auto','auto']
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
            ["style", "width", '376px'],
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
            { id: "eid57", tween: [ "style", "${_Text}", "height", '62px', { fromValue: '62px'}], position: 1700, duration: 0 },
            { id: "eid372", tween: [ "style", "${_TextCopy}", "left", '471px', { fromValue: '1023px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid384", tween: [ "style", "${_TextCopy}", "left", '395px', { fromValue: '471px'}], position: 1000, duration: 583 },
            { id: "eid395", tween: [ "style", "${_TextCopy}", "left", '-202px', { fromValue: '395px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid388", tween: [ "transform", "${_stage_strip}", "scaleY", '1', { fromValue: '0.05'}], position: 83, duration: 333, easing: "easeOutBack" },
            { id: "eid391", tween: [ "transform", "${_stage_strip}", "scaleY", '0.05', { fromValue: '1'}], position: 1917, duration: 250, easing: "easeInCirc" },
            { id: "eid402", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInCirc" },
            { id: "eid401", tween: [ "style", "${_stage_strip}", "display", 'block', { fromValue: 'none'}], position: 84, duration: 0, easing: "easeInCirc" },
            { id: "eid400", tween: [ "style", "${_stage_strip}", "display", 'none', { fromValue: 'block'}], position: 2167, duration: 0, easing: "easeInCirc" },
            { id: "eid394", tween: [ "style", "${_feedback_m1_bg}", "opacity", '1', { fromValue: '0'}], position: 42, duration: 125 },
            { id: "eid371", tween: [ "style", "${_Text}", "left", '250px', { fromValue: '-303px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '319px', { fromValue: '250px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '319px'}], position: 1583, duration: 417, easing: "easeInQuad" },
            { id: "eid405", tween: [ "style", "${_feedback_m1_bg}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid404", tween: [ "style", "${_feedback_m1_bg}", "display", 'block', { fromValue: 'none'}], position: 42, duration: 0 },
            { id: "eid58", tween: [ "style", "${_Text}", "top", '215px', { fromValue: '215px'}], position: 1700, duration: 0 }         ]
      }
   }
},
"BG14b": {
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
      font: ['Verdana, Geneva, sans-serif',12,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'మీరు మరొక కేసులోకి వచ్చారు. ఈ కేసులో నెరస్థులని గుర్తించేందుకు జి 2 సహాయం తీసుకోండి. నేరస్థుని షార్ట్ లిస్ట్ చేసేందుకు రోబోట్ ని ప్రశ్నించండి.<br><br>కేసుకి వెళ్ళేందుకు నెక్స్ట్ క్లిక్ చేయండి.<br>',
      align: 'left',
      rect: ['155px','284px','288px','134px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6Copy',
      text: 'మిషన్ గురించి క్లుప్తంగా',
      align: 'center',
      rect: ['155px','227px','288px','39px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '284px'],
            ["style", "text-align", 'left'],
            ["style", "width", '288px'],
            ["style", "height", '134px'],
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
            ["style", "height", '1px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '227px'],
            ["style", "font-size", '25px'],
            ["style", "text-align", 'center'],
            ["style", "height", '39px'],
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
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "trans");
