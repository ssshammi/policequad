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
      id: 'BG11',
      type: 'image',
      rect: ['0px','0px','1014px','650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/BG11.jpg','0px','0px']
   },
   {
      rect: ['155px','271px','288px','1px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      rect: ['155px','277px','288px','147px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6',
      text: 'ఫ్యాక్టరీలోకి మీ గూఢచారికి ప్రవేశం కల్పించే లక్షణాన్ని గుర్తించండి. అప్పుడు వర్ణనకి తగిన గూఢఛారిని పిలిచి అతన్ని లోపలికి పంపించండి.<br><br>కేసుకి వెళ్ళడం కోసం నెక్స్ట్ క్లిక్ చేయండి.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['155px','222px','288px','41px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',25,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text6Copy',
      text: 'మిషన్ గురించి క్లుప్తంగా',
      align: 'center',
      type: 'text'
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
         "${_Text6Copy}": [
            ["style", "top", '222px'],
            ["style", "font-size", '25px'],
            ["style", "text-align", 'center'],
            ["style", "height", '41px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "width", '288px']
         ],
         "${_Rectangle}": [
            ["style", "top", '271px'],
            ["color", "background-color", 'rgba(255,255,255,0.40)'],
            ["style", "height", '1px']
         ],
         "${_Text6}": [
            ["style", "top", '277px'],
            ["style", "width", '288px'],
            ["style", "text-align", 'left'],
            ["style", "height", '147px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "font-size", '12px']
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
"M3_BG03": {
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
      fill: ['rgba(0,0,0,0)','images/M3_BG03.jpg','0px','0px']
   },
   {
      id: 'pointer',
      type: 'image',
      rect: ['196px','193px','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['213px','23px','178px','81px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['216px','26px','171px','78px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text',
      text: 'ఆహా, మనం మిస్టర్ జి ఫ్యాక్టరీల్లోకి పంపిన  గూఢచారుల నుంచి నాకు వార్తలందాయి',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['169px','23px','220px','69px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['37px','30px','275px','55px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy5',
      text: 'అతను భిన్న భిన్న ఫ్యాక్టరీల్లో ప్రత్యేక రకాల జూడిక్స్ ని పనిలో పెట్టుకుంటున్నాడు- నీళ్ళ నుంచి స్పేస్ షిప్ ఇంధనం తయారు చేయడం తెలిసిన ప్రత్యేక లక్షణాలుగల వాళ్ళని.',
      align: 'center',
      type: 'text'
   },
   {
      id: 'pointerCopy4',
      type: 'image',
      rect: ['200','135','35px','104px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['169px','23px','220px','69px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['428px','28px','301px','68px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy4',
      text: 'క్రిస్టల్స్ నుంచి తీసిన ఒక పదార్ధం నీళ్ళని స్పేస్ షిప్ ఇంధనంగా మార్చడంలో సహాయపడుతుందని వాళ్ళు తెలుసుకున్నారు',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['808px','-27px','35px','104px','auto','auto'],
      id: 'pointerCopy3',
      transform: [[],['-220'],['0','47'],['0.689','1.177']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['750px','167px','35px','104px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[],['-220'],['0','47'],['0.689','1.177']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['796px','229px','187px','68px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['796px','26px','187px','75px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy3',
      text: 'కాని అతను అంతమంది<br>జూడిక్స్ ని ఎందుకు పనిలో పెట్టుకుంటున్నాడు?',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['557px','283px','35px','104px','auto','auto'],
      id: 'pointerCopy',
      transform: [[],['-141'],['0','-41'],['0.689','1.488']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['526px','340px','409px','55px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['532px','342px','398px','55px','auto','auto'],
      transform: [],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy',
      text: 'నేను మరింతమంది జూడిక్ గూఢచారుల్ని అతని<br>ఫ్యాక్టరీల్లోకి పంపించినప్పుడు నాకు ఇంకా ఎక్కువ తెలుస్తుంది.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['569px','249px','196px','55px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text2',
      text: 'క్రిస్టల్స్ నుంచి తీసిన పదార్ధం + నీళ్ళు = స్పేస్ షిప్ ఇంధనం',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pointerCopy3}": [
            ["style", "top", '-27px'],
            ["transform", "scaleY", '0.66346'],
            ["transform", "rotateZ", '-220deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '808px'],
            ["transform", "skewY", '38.47deg']
         ],
         "${_RoundRectCopy3}": [
            ["style", "top", '23px'],
            ["style", "height", '68px'],
            ["style", "left", '796px'],
            ["style", "width", '187px']
         ],
         "${_Text2}": [
            ["style", "top", '249px'],
            ["style", "text-align", 'left'],
            ["style", "height", '55px'],
            ["style", "font-size", '13px'],
            ["style", "left", '569px'],
            ["style", "width", '196px']
         ],
         "${_BG04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_pointerCopy4}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.17739'],
            ["transform", "rotateZ", '-154deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "top", '188px'],
            ["style", "left", '570px'],
            ["transform", "skewY", '-23.33deg']
         ],
         "${_TextCopy4}": [
            ["style", "line-height", '15px'],
            ["style", "left", '428px'],
            ["style", "font-size", '13px'],
            ["style", "top", '28px'],
            ["style", "text-align", 'center'],
            ["style", "height", '68px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '301px'],
            ["style", "font-style", 'normal']
         ],
         "${_TextCopy3}": [
            ["style", "line-height", '15px'],
            ["style", "left", '796px'],
            ["style", "width", '187px'],
            ["style", "top", '26px'],
            ["style", "text-align", 'center'],
            ["style", "height", '75px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '13px'],
            ["style", "font-style", 'normal']
         ],
         "${_TextCopy5}": [
            ["style", "line-height", '15px'],
            ["style", "left", '37px'],
            ["style", "font-size", '13px'],
            ["style", "top", '528px'],
            ["style", "text-align", 'center'],
            ["style", "height", '93px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '275px'],
            ["style", "font-style", 'normal']
         ],
         "${_pointerCopy}": [
            ["style", "top", '283px'],
            ["transform", "scaleY", '1.48821'],
            ["transform", "rotateZ", '-141deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-41.33deg'],
            ["style", "left", '557px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy}": [
            ["style", "height", '55px'],
            ["style", "top", '340px'],
            ["style", "left", '526px'],
            ["style", "width", '409px']
         ],
         "${_TextCopy}": [
            ["style", "line-height", '15px'],
            ["style", "left", '532px'],
            ["style", "width", '398px'],
            ["style", "top", '342px'],
            ["style", "text-align", 'center'],
            ["style", "height", '55px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '13px'],
            ["transform", "scaleY", '1']
         ],
         "${_Text}": [
            ["style", "line-height", '15px'],
            ["style", "left", '216px'],
            ["style", "width", '171px'],
            ["style", "top", '26px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '13px'],
            ["style", "height", '78px']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '488px'],
            ["transform", "scaleY", '0.66346'],
            ["transform", "rotateZ", '-308deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '38.47deg'],
            ["style", "left", '295px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRect}": [
            ["style", "height", '81px'],
            ["style", "top", '23px'],
            ["style", "left", '213px'],
            ["style", "width", '178px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '1.17739'],
            ["transform", "rotateZ", '-154deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "left", '196px'],
            ["style", "top", '193px']
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '23px'],
            ["style", "height", '69px'],
            ["style", "left", '424px'],
            ["style", "width", '310px']
         ],
         "${_RoundRectCopy5}": [
            ["style", "top", '520px'],
            ["style", "height", '101px'],
            ["style", "left", '26px'],
            ["style", "width", '301px']
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
            { id: "eid141", tween: [ "style", "${_pointerCopy5}", "top", '488px', { fromValue: '488px'}], position: 0, duration: 0 },
            { id: "eid140", tween: [ "style", "${_pointerCopy5}", "left", '295px', { fromValue: '295px'}], position: 0, duration: 0 },
            { id: "eid138", tween: [ "transform", "${_pointerCopy5}", "skewY", '38.47deg', { fromValue: '38.47deg'}], position: 0, duration: 0 },
            { id: "eid142", tween: [ "transform", "${_pointerCopy5}", "rotateZ", '-308deg', { fromValue: '-308deg'}], position: 0, duration: 0 },
            { id: "eid139", tween: [ "transform", "${_pointerCopy5}", "scaleY", '0.66346', { fromValue: '0.66346'}], position: 0, duration: 0 }         ]
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
         rect: ['220px','13px','35px','120px','auto','auto'],
         id: 'pointer',
         transform: [[0,0],['-206'],[],['0.745','1.454']],
         type: 'image',
         fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
      },
      {
         rect: ['25px','21px','255px','90px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         id: 'Text5',
         text: 'The robot on duty, G2 witnessed the robbery. I’ve called G2 over to answer our questions. But G2 can only reply with “Yes”, “No” and “I don’t know.” You know that, right?<br>',
         align: 'left',
         type: 'text'
      }]
   },
   {
      id: 'Group3',
      type: 'group',
      rect: ['117','196','101','138','auto','auto'],
      c: [
      {
         rect: ['52px','-80px','35px','120px','auto','auto'],
         id: 'pointerCopy',
         transform: [[0,0],['-160'],[],['0.745','1.092']],
         type: 'image',
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
         rect: ['20px','10px','68px','19px','auto','auto'],
         font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1.00)','normal','none','normal'],
         align: 'center',
         id: 'Text5Copy',
         text: 'Yes Sir.',
         transform: [],
         type: 'text'
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "top", '0px'],
            ["style", "height", '38px'],
            ["style", "left", '0px'],
            ["style", "width", '101px']
         ],
         "${_RoundRect}": [
            ["style", "height", '131px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '305px']
         ],
         "${_BG10}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_pointer}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '1.45422'],
            ["transform", "rotateZ", '-206deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "height", '120px'],
            ["style", "left", '220px'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Text5Copy}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '20px'],
            ["style", "width", '68px'],
            ["style", "top", '10px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "height", '19px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1']
         ],
         "${_Text5}": [
            ["style", "top", '21px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '90px'],
            ["style", "font-style", 'normal'],
            ["style", "left", '25px'],
            ["style", "width", '255px']
         ],
         "${_pointerCopy}": [
            ["style", "top", '-80px'],
            ["transform", "scaleY", '1.09167'],
            ["transform", "rotateZ", '-160deg'],
            ["transform", "scaleX", '0.74471'],
            ["style", "-webkit-transform-origin", [53.14,89.1], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [53.14,89.1],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '52px'],
            ["style", "height", '120px']
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
      id: 'M3_BG03',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG03B',
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
      id: 'M3_BG03B',
      symbolName: 'BG07'
   },
   {
      id: 'Stage_transition',
      symbolName: 'Stage_transition'
   },
   {
      id: 'M3_BG03',
      symbolName: 'M3_BG03'
   },
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'btn_nextCopy',
      symbolName: 'btn_next'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_M3_BG03}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage_transition}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_M3_BG03B}": [
            ["style", "left", '1012px'],
            ["style", "top", '0px']
         ],
         "${_btn_back}": [
            ["style", "display", 'none'],
            ["style", "top", '593px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '8px']
         ],
         "${_btn_nextCopy}": [
            ["style", "display", 'none'],
            ["style", "top", '304px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '461px']
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
         duration: 2830,
         autoPlay: true,
         timeline: [
            { id: "eid172", tween: [ "style", "${_Stage_transition}", "display", 'block', { fromValue: 'none'}], position: 594, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid37", tween: [ "style", "${_btn_next}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid45", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid40", tween: [ "style", "${_M3_BG03B}", "left", '0px', { fromValue: '1012px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid174", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 594, duration: 0, easing: "easeOutCirc" },
            { id: "eid47", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid173", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 594, duration: 0, easing: "easeOutCirc" },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid175", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transition}', [] ], ""], position: 0 },
            { id: "eid176", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transition}', [] ], ""], position: 594 },
            { id: "eid177", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transition}', [] ], ""], position: 594.45700525369 }         ]
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
      id: 'M3_BG04',
      type: 'rect',
      rect: ['419','297','auto','auto','auto','auto']
   },
   {
      id: 'M3_BG04B',
      type: 'rect',
      rect: ['-2px','-8px','auto','auto','auto','auto']
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
      userClass: 'mainSND btnClick',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      id: 'btn_nextCopy',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['953px','593px','auto','auto','auto','auto']
   },
   {
      rect: ['8px','593px','auto','auto','auto','auto'],
      userClass: 'btnClick',
      id: 'btn_back',
      display: 'none',
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['953px','593px','auto','auto','auto','auto'],
      id: 'btn_nextCopy2',
      userClass: 'btnClick',
      cursor: ['pointer'],
      type: 'rect'
   }],
   symbolInstances: [
   {
      id: 'btn_back',
      symbolName: 'btn_back'
   },
   {
      id: 'M3_BG04B',
      symbolName: 'BG07'
   },
   {
      id: 'btn_next',
      symbolName: 'btn_next'
   },
   {
      id: 'btn_nextCopy2',
      symbolName: 'btn_next'
   },
   {
      id: 'M3_BG04',
      symbolName: 'M3_BG04'
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
         "${_M3_BG04}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage_transitionCopy}": [
            ["style", "display", 'none']
         ],
         "${_btn_nextCopy}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_back}": [
            ["style", "top", '593px'],
            ["style", "left", '8px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '2026px']
         ],
         "${_btn_nextCopy2}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_next}": [
            ["style", "top", '593px'],
            ["style", "display", 'block'],
            ["style", "left", '953px'],
            ["style", "cursor", 'pointer']
         ],
         "${_M3_BG04B}": [
            ["style", "left", '1014px'],
            ["style", "top", '-8px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2800,
         autoPlay: true,
         timeline: [
            { id: "eid34", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid35", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid180", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid168", tween: [ "style", "${_btn_nextCopy2}", "left", '953px', { fromValue: '953px'}], position: 250, duration: 0 },
            { id: "eid169", tween: [ "style", "${_btn_nextCopy2}", "left", '461px', { fromValue: '953px'}], position: 500, duration: 0 },
            { id: "eid20", tween: [ "style", "${_M3_BG04B}", "left", '0px', { fromValue: '1014px'}], position: 250, duration: 250, easing: "easeOutCirc" },
            { id: "eid170", tween: [ "style", "${_btn_nextCopy2}", "top", '593px', { fromValue: '593px'}], position: 250, duration: 0 },
            { id: "eid171", tween: [ "style", "${_btn_nextCopy2}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_btn_next}", "top", '593px', { fromValue: '593px'}], position: 0, duration: 0 },
            { id: "eid22", tween: [ "style", "${_btn_next}", "top", '304px', { fromValue: '593px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid9", tween: [ "style", "${_M3_BG04}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid178", tween: [ "style", "${_Stage_transitionCopy}", "display", 'block', { fromValue: 'none'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid179", tween: [ "style", "${_btn_next}", "display", 'none', { fromValue: 'block'}], position: 555, duration: 0, easing: "easeOutCirc" },
            { id: "eid36", tween: [ "style", "${_btn_next}", "left", '953px', { fromValue: '953px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "style", "${_btn_next}", "left", '459px', { fromValue: '953px'}], position: 500, duration: 0, easing: "easeOutCirc" },
            { id: "eid8", tween: [ "style", "${_M3_BG04}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeOutCirc" },
            { id: "eid30", tween: [ "style", "${_btn_nextCopy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid29", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_btn_nextCopy}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid167", tween: [ "style", "${_btn_nextCopy2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid181", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_Stage_transitionCopy}', [] ], ""], position: 0 },
            { id: "eid182", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_Stage_transitionCopy}', [] ], ""], position: 555 }         ]
      }
   }
},
"M3_BG04": {
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
      fill: ['rgba(0,0,0,0)','images/M3_BG04.jpg','0px','0px']
   },
   {
      rect: ['467px','-18px','35px','104px','auto','auto'],
      id: 'pointerCopy5',
      transform: [[],['-148'],['0','-32'],['0.689','0.916']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['86px','29px','490px','64px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['95px','34px','472px','51px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy5',
      text: 'ఇది మనం అనుమానించినదాని కంటే మరీ గంభీరం. మిస్టర్ జి చేసే పనుల గురించి<br>నాకు మరింత సమాచారం దొరికింది. అతను రా-హాకా తో సంధి కుదుర్చుకున్నాడు.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['421px','250px','35px','104px','auto','auto'],
      id: 'pointerCopy3',
      transform: [[],['-205'],['0','25'],['0.689','1.415']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['619px','483px','35px','104px','auto','auto'],
      id: 'pointerCopy4',
      transform: [[],['-52'],['6','-42'],['0.689','0.519']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['241px','286px','348px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['252px','293px','327px','65px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy3',
      text: 'రా-హాకా  మిస్టర్ జి తో సాంకేతికత పంచుకున్నాడు. అందుకు బదులుగా అతనికి స్పేస్ షిప్ ఇంధనం వస్తోంది.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['630px','521px','348px','104px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      rect: ['636px','527px','334px','104px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',13,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'TextCopy4',
      text: 'అసలు ఇదంతా ఎలా నడుస్తోందో తెలుసుకోవడానికి ఇంకా ముగించడానికి<br>నేను మరికొంత మంది జూడిక్స్ ని పంపించవలసి  ఉంటుంది. భూమి మీద రా-హాకాని గందరగోళం చేయనివ్వలేం.',
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
            ["style", "left", '636px'],
            ["style", "width", '334px'],
            ["style", "top", '527px'],
            ["style", "text-align", 'center'],
            ["style", "height", '104px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '13px'],
            ["style", "font-style", 'normal']
         ],
         "${_TextCopy3}": [
            ["style", "line-height", '15px'],
            ["style", "left", '252px'],
            ["style", "font-size", '13px'],
            ["style", "top", '293px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "width", '327px'],
            ["style", "height", '65px']
         ],
         "${_RoundRectCopy3}": [
            ["style", "height", '77px'],
            ["style", "top", '286px'],
            ["style", "left", '241px'],
            ["style", "width", '348px']
         ],
         "${_TextCopy5}": [
            ["style", "line-height", '15px'],
            ["style", "left", '95px'],
            ["style", "width", '472px'],
            ["style", "top", '34px'],
            ["style", "text-align", 'center'],
            ["style", "height", '51px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "font-size", '13px'],
            ["style", "font-style", 'normal']
         ],
         "${_pointerCopy5}": [
            ["style", "top", '-18px'],
            ["transform", "scaleY", '0.91581'],
            ["transform", "rotateZ", '-148deg'],
            ["transform", "scaleX", '0.68881'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "left", '467px'],
            ["transform", "skewY", '-32.45deg']
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
            ["style", "top", '29px'],
            ["style", "height", '64px'],
            ["style", "left", '86px'],
            ["style", "width", '490px']
         ],
         "${_pointerCopy3}": [
            ["style", "top", '250px'],
            ["transform", "scaleY", '1.41539'],
            ["transform", "rotateZ", '-205deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '25.21deg'],
            ["style", "left", '421px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_RoundRectCopy4}": [
            ["style", "top", '521px'],
            ["style", "height", '104px'],
            ["style", "left", '630px'],
            ["style", "width", '348px']
         ],
         "${_pointerCopy4}": [
            ["style", "top", '483px'],
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.51923'],
            ["transform", "skewX", '5.9deg'],
            ["transform", "scaleX", '0.68881'],
            ["transform", "skewY", '-42.27deg'],
            ["style", "left", '619px'],
            ["transform", "rotateZ", '-52deg']
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
      fill: ['rgba(0,0,0,0)','images/BG14.jpg','0px','0px']
   },
   {
      type: 'image',
      id: 'pointerCopy5',
      rect: ['94px','18px','35px','104px','auto','auto'],
      transform: [[0,0],['-204'],[],['0.689','0.827']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['43px','40px','220px','100px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['55px','55px','193px','71px','auto','auto'],
      id: 'TextCopy5',
      text: 'Geo, the ringleaders of this gang of water robbers are still around. Now they are diverting pipes.',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointerCopy7',
      rect: ['658px','-15px','35px','104px','auto','auto'],
      transform: [[0,0],['-239'],[],['0.689','1.894']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['580px','50px','161px','57px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy7',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['591px','60px','140px','38px','auto','auto'],
      id: 'TextCopy7',
      text: 'Yes. Geo, we have to find these guys.',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointerCopy10',
      rect: ['779px','345px','35px','104px','auto','auto'],
      transform: [[0,0],['-248'],[],['0.689','1.703']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['701px','394px','206px','71px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy10',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['717px','403px','178px','57px','auto','auto'],
      id: 'TextCopy10',
      text: 'Don’t worry sir, I will work with G2 to release the innocent Judics.<br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointerCopy6',
      rect: ['307px','115px','35px','104px','auto','auto'],
      transform: [[0,0],['-165'],[],['0.689','0.827']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['226px','161px','129px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy6',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['240px','171px','102px','57px','auto','auto'],
      id: 'TextCopy6',
      text: 'Really? Is that what they are up to now?<br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointerCopy8',
      rect: ['596px','92px','35px','104px','auto','auto'],
      transform: [[0,0],['-111'],[],['0.689','0.827']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['586px','166px','149px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy8',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['600px','176px','129px','57px','auto','auto'],
      id: 'TextCopy8',
      text: 'Has G2 spotted the robber in any of these cases?',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   },
   {
      type: 'image',
      id: 'pointerCopy9',
      rect: ['676px','253px','35px','104px','auto','auto'],
      transform: [[0,0],['-126'],[],['0.689','0.962']],
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['643px','296px','149px','77px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRectCopy9',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1)']
   },
   {
      type: 'text',
      rect: ['657px','306px','121px','57px','auto','auto'],
      id: 'TextCopy9',
      text: 'Yes, Geo. Sorry to say it’s those  Judics  again. <br>',
      align: 'left',
      font: ['Verdana, Geneva, sans-serif',14,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy9}": [
            ["style", "top", '306px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '657px'],
            ["style", "width", '121px']
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
            ["style", "height", '77px'],
            ["style", "top", '166px'],
            ["style", "left", '586px'],
            ["style", "width", '149px']
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
            ["style", "top", '50px'],
            ["style", "height", '57px'],
            ["style", "left", '580px'],
            ["style", "width", '161px']
         ],
         "${_TextCopy10}": [
            ["style", "top", '403px'],
            ["style", "width", '178px'],
            ["style", "text-align", 'left'],
            ["style", "height", '57px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '717px'],
            ["style", "font-size", '14px']
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
            ["style", "top", '55px'],
            ["style", "width", '193px'],
            ["style", "text-align", 'left'],
            ["style", "height", '71px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '55px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy10}": [
            ["style", "height", '71px'],
            ["style", "top", '394px'],
            ["style", "left", '701px'],
            ["style", "width", '206px']
         ],
         "${_TextCopy6}": [
            ["style", "top", '171px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '57px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '240px'],
            ["style", "width", '102px']
         ],
         "${_TextCopy7}": [
            ["style", "top", '60px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '38px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '591px'],
            ["style", "width", '140px']
         ],
         "${_RoundRectCopy6}": [
            ["style", "top", '161px'],
            ["style", "height", '77px'],
            ["style", "left", '226px'],
            ["style", "width", '129px']
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
         "${_TextCopy8}": [
            ["style", "top", '176px'],
            ["style", "width", '129px'],
            ["style", "text-align", 'left'],
            ["style", "height", '57px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '600px'],
            ["style", "font-size", '14px']
         ],
         "${_RoundRectCopy9}": [
            ["style", "top", '296px'],
            ["style", "height", '77px'],
            ["style", "left", '643px'],
            ["style", "width", '149px']
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
         "${_RoundRectCopy5}": [
            ["style", "height", '100px'],
            ["style", "top", '40px'],
            ["style", "left", '43px'],
            ["style", "width", '220px']
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
      type: 'rect',
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['155px','277px','288px','1px','auto','auto'],
      fill: ['rgba(255,255,255,0.40)']
   },
   {
      font: ['Verdana, Geneva, sans-serif',14,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6',
      text: 'You are onto another case. In this case take the help of G8 to identify the culprit. Question the robot to shortlist the culprit.<br><br>Click next to move onto the instruction Screen.<br>',
      align: 'left',
      rect: ['155px','289px','288px','124px','auto','auto']
   },
   {
      font: ['Verdana, Geneva, sans-serif',34,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text6Copy',
      text: 'MISSION BRIEF',
      align: 'center',
      rect: ['155px','227px','288px','39px','auto','auto']
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
            ["style", "width", '288px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '39px'],
            ["style", "font-family", 'Verdana, Geneva, sans-serif'],
            ["style", "left", '155px'],
            ["style", "font-size", '34px']
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
      rect: ['0px','0px','1014px','652px','auto','auto'],
      id: 'feedback_m1_bg',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/feedback_m3_bg.jpg','0px','0px']
   },
   {
      rect: ['0px','283px','1014px','84px','auto','auto'],
      id: 'stage_strip',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/stage_strip.png','0px','0px']
   },
   {
      rect: ['426px','215px','362px','62px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',40,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'రహస్య గూఢచారి',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['413px','294px','223px','62px','auto','auto'],
      font: ['Verdana, Geneva, sans-serif',48,'rgba(255,246,0,1.00)','normal','none',''],
      userClass: 'level2',
      id: 'TextCopy',
      text: 'లెవెల్ 3',
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
            ["style", "width", '362px'],
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
            ["style", "top", '283px'],
            ["style", "display", 'none'],
            ["transform", "scaleY", '0.05'],
            ["style", "left", '0px']
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
            { id: "eid371", tween: [ "style", "${_Text}", "left", '291px', { fromValue: '-303px'}], position: 333, duration: 667, easing: "easeOutQuad" },
            { id: "eid385", tween: [ "style", "${_Text}", "left", '316px', { fromValue: '291px'}], position: 1000, duration: 583 },
            { id: "eid396", tween: [ "style", "${_Text}", "left", '1018px', { fromValue: '316px'}], position: 1583, duration: 417, easing: "easeInQuad" },
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
})(jQuery, AdobeEdge, "trans3");
