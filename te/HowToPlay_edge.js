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
            id:'Mission1',
            type:'rect',
            rect:['257','252','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'Mission2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'Mission3',
            type:'rect',
            rect:['314','233','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'Mission4',
            type:'rect',
            rect:['347','289','auto','auto','auto','auto'],
            userClass:"howtoPlay"
         },
         {
            id:'btn_XCopy',
            type:'rect',
            rect:['926px','18px','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'Mission2',
            symbolName:'Mission2'
         },
         {
            id:'Mission3',
            symbolName:'Mission3'
         },
         {
            id:'Mission4',
            symbolName:'Mission4'
         },
         {
            id:'Mission1',
            symbolName:'Mission1'
         },
         {
            id:'btn_XCopy',
            symbolName:'btn_X'
         }
         ]
      },
   states: {
      "Base State": {
         "${_btn_XCopy}": [
            ["style", "left", '39px'],
            ["style", "top", '23px']
         ],
         "${_Mission1}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Mission3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_Mission4}": [
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
         autoPlay: false,
         timeline: [
            { id: "eid225", tween: [ "style", "${_Mission1}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_Mission3}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid545", tween: [ "style", "${_btn_XCopy}", "top", '23px', { fromValue: '23px'}], position: 0, duration: 0 },
            { id: "eid544", tween: [ "style", "${_btn_XCopy}", "left", '39px', { fromValue: '39px'}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_Mission3}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "style", "${_Mission4}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_Mission4}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid224", tween: [ "style", "${_Mission1}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
},
"Mission2": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_m2_02',
      type: 'image',
      rect: ['68px','52px','874px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m2_02.jpg','0px','0px']
   },
   {
      rect: ['68px','52px','874px','560px','auto','auto'],
      id: 'HTP_m2_03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/HTP_m2_03.jpg','0px','0px']
   },
   {
      rect: ['389px','2px','235px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'ఆడటం  ఎలాగ',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1',
      text: '<b>అనుమానితుల గ్రిడ్</b><br><br>అనుమానితులందరూ ఇక్కడ చేర్చబడ్డారు. ఈ ఆకారాల్లో  ఒకటి మాత్రమే అనుమానితునికి చెందింది. మిగిలిన వాళ్ళు అమాయకులు. మీరు  అమాయకులని ఎంపిక చేసి విడుదల చేయాలి.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['331px','470px','296px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2',
      text: '<b>టూల్స్ </b><br><br>మీకు అనుమానంగా  ఉన్నప్పుడు కొన్ని ప్రత్యేక లక్షణాల కోసం చెక్ చేసేందుకు స్క్రీన్ పై  ఉన్న టూల్ కిట్ మిమ్మల్ని అనుమతిస్తుంది.<br><br>ఈ మిషన్లో  మీకు అనుమానంగా ఉన్నప్పుడు మీకు సహాయపడే 4  టూల్స్ మీకు  ఉన్నాయి.<ol><li>ఆకారం యొక్క ఏ భుజాలు సమానంగా ఉన్నాయో చూసేందుకు <b>ఈక్వల్ సైడ్స్ మార్కర్ </b>టూల్ ని క్లిక్ చేయండి</li><li>ఆకారం యొక్క  ఏ కోణాలు  తీవ్రంగా,  ఒబ్ట్యూస్,  రిఫ్లెక్స్ మరియు లంబీయంగా ఉన్నాయో అంచనా వేసేందుకు  <b>యాంగిల్ మార్కర్ </b>టూల్ క్లిక్ చేయండి.</li><li><b>ప్యారెలల్ లైన్స్ </b>టూల్ క్లిక్ చేయడం ఆకారంలోని ఏవైనా సమాంతర రేఖల్ని హైలైట్ చేస్తుంది.</li><li>ఆకారాల్లోని కోణాలు కొలవడానికి  <b>ప్రొట్రాక్టర్</b> టూల్ క్లిక్ చేయండి</li></ol>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3',
      text: '<b>క్లూలు</b><br><br>ఒక  ఎంపిక ఎంచుకోవడానికి ఇంకా రోబోట్ కోసం ఒక ప్రశ్న తయారుచేసుకోవడానికి ప్రతి లక్షణంలోనూ డ్రాప్ డౌన్ ఫీచర్  ఉపయోగించండి .అప్పుడు <b>అడగండి</b> క్లిక్ చేయండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['619px','338px','191px','72px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4',
      text: '<b>ప్రశ్న మరియు సమాధానం</b><br><br>మీ ప్రశ్న ఇంకా రోబోట్ యొక్క సమాధానం ఇక్కడ కనిపిస్తాయి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['479px','101px','270px','151px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5',
      text: '<b>యాక్షన్ బటన్లు</b><br><br>ఒక కేసు ఆడేటప్పుడు యాక్షన్ బటన్లు వివిధ యాక్షన్లను అందజేస్తాయి.<br>మీరు ఎంపిక చేసిన ఆకారం మార్కర్లు గల జూడిక్స్ ని విడుదల చేసేందుకు <b>రిలీజ్</b> క్లిక్ చేయండి.<br>ఒక కొత్త కేసు మరియు  ఒక కొత్త ఆకారం మార్కర్ల సెట్ పొందేందుకు <b>రీప్లే</b> క్లిక్ చేయండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['520px','132px','250px','281px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6',
      text: '<b>టోకెన్ కౌంటర్</b><br><br>ఆడిన ప్రతి కొత్త కేసుకి క్లెయిమ్ చేయవలసిన కొన్ని టోకెన్లు టోకెన్ కౌంటర్లో ఉంటాయి.<br><br>మీ దగ్గర పరిమిత టోకెన్లు  ఉంటాయి. ఒక చెల్లని ప్రశ్న వేసినప్పుడు, తప్పు ఆకారాన్ని తీసేసినప్పుడు ఒక టోకెన్ తీసేసుకోబడుతుంది. మీరు స్ టోకెన్ (చివరి టోకెన్) పోగొట్టుకున్నప్పుడు గేమ్ ముగుస్తుంది.<br><br>ఒక కేసు చివరలో, స్క్రీన్ మీద మిగిలి ఉన్న టోకెన్ల ఆధారంగా సంపాదించుకున్న పాయింట్లు లెక్కగట్టబడతాయి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['492px','480px','180px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7',
      text: '<b>డన్</b><br><br>మీరు కేసు పరిష్కరించారని మీరు అనుకున్నప్పుడు, డన్ క్లిక్ చేయండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['499px','134px','205px','112px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8',
      text: '<b>స్టార్స్ టాలీ</b><br><br>ఒక టోకెన్ పోగొట్టుకోకుండా (అంటే ఒక పొరపాటు చేయకుండా) పరిష్కరించిన ప్రతి కేసు మీకు రెండు స్టార్లను సంపాదించగలదు.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
      userClass: 'backBtn1',
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
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '128px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '80px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "height", '282px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '591px']
         ],
         "${_Text7}": [
            ["style", "top", '480px'],
            ["style", "font-size", '12px'],
            ["style", "height", '90px'],
            ["style", "display", 'none'],
            ["style", "left", '492px'],
            ["style", "width", '180px']
         ],
         "${_Text3}": [
            ["style", "top", '265px'],
            ["style", "width", '254px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '128px'],
            ["style", "left", '105px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2}": [
            ["style", "top", '164px'],
            ["style", "width", '296px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '269px'],
            ["style", "left", '331px'],
            ["style", "font-size", '12px']
         ],
         "${_btn_back}": [
            ["style", "top", '589px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '36px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '705px'],
            ["style", "width", '226px'],
            ["style", "top", '131px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '160px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text4}": [
            ["style", "top", '338px'],
            ["style", "font-size", '12px'],
            ["style", "height", '72px'],
            ["style", "display", 'none'],
            ["style", "left", '619px'],
            ["style", "width", '191px']
         ],
         "${_Text1}": [
            ["style", "top", '141px'],
            ["style", "width", '201px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '140px'],
            ["style", "left", '717px'],
            ["style", "font-size", '12px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text8}": [
            ["style", "top", '134px'],
            ["style", "font-size", '12px'],
            ["style", "height", '112px'],
            ["style", "display", 'none'],
            ["style", "left", '499px'],
            ["style", "width", '205px']
         ],
         "${_Text5}": [
            ["style", "top", '101px'],
            ["style", "font-size", '12px'],
            ["style", "height", '151px'],
            ["style", "display", 'none'],
            ["style", "left", '479px'],
            ["style", "width", '270px']
         ],
         "${_Text6}": [
            ["style", "top", '132px'],
            ["style", "font-size", '12px'],
            ["style", "height", '281px'],
            ["style", "display", 'none'],
            ["style", "left", '520px'],
            ["style", "width", '250px']
         ],
         "${_Text}": [
            ["style", "top", '2px'],
            ["style", "width", '235px'],
            ["style", "text-align", 'center'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '389px'],
            ["style", "font-size", '30px']
         ],
         "${_HTP_m2_03}": [
            ["style", "top", '52px'],
            ["style", "left", '68px'],
            ["style", "display", 'none']
         ],
         "${_HTP_m2_02}": [
            ["style", "top", '52px'],
            ["style", "left", '68px'],
            ["style", "display", 'block']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '690px'],
            ["style", "top", '57px']
         ],
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: false,
         timeline: [
            { id: "eid77", tween: [ "style", "${_Text3}", "width", '254px', { fromValue: '254px'}], position: 500, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '282px', { fromValue: '282px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '253px', { fromValue: '282px'}], position: 250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '39px', { fromValue: '253px'}], position: 500, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Rectangle2}", "height", '27px', { fromValue: '39px'}], position: 750, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '27px'}], position: 1000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '289px', { fromValue: '31px'}], position: 1250, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '82px', { fromValue: '289px'}], position: 1500, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '41px', { fromValue: '82px'}], position: 1750, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '690px', { fromValue: '690px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pointer}", "left", '623px', { fromValue: '690px'}], position: 250, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '123px', { fromValue: '623px'}], position: 500, duration: 0 },
            { id: "eid54", tween: [ "style", "${_pointer}", "left", '639px', { fromValue: '123px'}], position: 750, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '451px', { fromValue: '639px'}], position: 1000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '763px', { fromValue: '451px'}], position: 1250, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '667px', { fromValue: '763px'}], position: 1500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '648px', { fromValue: '667px'}], position: 1750, duration: 0 },
            { id: "eid74", tween: [ "style", "${_Text3}", "height", '128px', { fromValue: '128px'}], position: 500, duration: 0 },
            { id: "eid79", tween: [ "style", "${_Text3}", "left", '105px', { fromValue: '105px'}], position: 500, duration: 0 },
            { id: "eid43", tween: [ "style", "${_Text3}", "left", '103px', { fromValue: '105px'}], position: 750, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Text1}", "height", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '705px', { fromValue: '705px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '319px', { fromValue: '705px'}], position: 250, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '92px', { fromValue: '319px'}], position: 500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Rectangle}", "left", '609px', { fromValue: '92px'}], position: 750, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '468px', { fromValue: '609px'}], position: 1000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '509px', { fromValue: '468px'}], position: 1250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '477px', { fromValue: '509px'}], position: 1500, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '489px', { fromValue: '477px'}], position: 1750, duration: 0 },
            { id: "eid80", tween: [ "style", "${_Text4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid81", tween: [ "style", "${_Text4}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid84", tween: [ "style", "${_Text5}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid96", tween: [ "style", "${_Text5}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle2}", "left", '672px', { fromValue: '80px'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '89px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_Rectangle2}", "left", '90px', { fromValue: '89px'}], position: 750, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '267px', { fromValue: '90px'}], position: 1000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '814px', { fromValue: '267px'}], position: 1250, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '716px', { fromValue: '814px'}], position: 1500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '619px', { fromValue: '716px'}], position: 1750, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '591px', { fromValue: '591px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '130px', { fromValue: '591px'}], position: 250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '660px', { fromValue: '130px'}], position: 500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Rectangle2}", "width", '617px', { fromValue: '660px'}], position: 750, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '161px', { fromValue: '617px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '105px', { fromValue: '161px'}], position: 1250, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '105px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '85px', { fromValue: '84px'}], position: 1750, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '128px', { fromValue: '128px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Rectangle2}", "top", '153px', { fromValue: '128px'}], position: 250, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '418px', { fromValue: '163px'}], position: 500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Rectangle2}", "top", '459px', { fromValue: '418px'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '93px', { fromValue: '459px'}], position: 1000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '132px', { fromValue: '93px'}], position: 1250, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '484px', { fromValue: '132px'}], position: 1500, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '43px', { fromValue: '484px'}], position: 1750, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '-90deg'}], position: 250, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 500, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 750, duration: 0 },
            { id: "eid561", tween: [ "transform", "${_pointer}", "rotateZ", '270deg', { fromValue: '180deg'}], position: 1000, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '270deg'}], position: 1250, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 1500, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1750, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text3}", "top", '265px', { fromValue: '265px'}], position: 500, duration: 0 },
            { id: "eid44", tween: [ "style", "${_Text3}", "top", '292px', { fromValue: '265px'}], position: 750, duration: 0 },
            { id: "eid73", tween: [ "style", "${_Text2}", "height", '269px', { fromValue: '269px'}], position: 250, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text1}", "width", '201px', { fromValue: '201px'}], position: 0, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '57px', { fromValue: '57px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_pointer}", "top", '90px', { fromValue: '57px'}], position: 250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '279px', { fromValue: '90px'}], position: 500, duration: 0 },
            { id: "eid55", tween: [ "style", "${_pointer}", "top", '323px', { fromValue: '279px'}], position: 750, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '7px', { fromValue: '323px'}], position: 1000, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '49px', { fromValue: '17px'}], position: 1250, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '424px', { fromValue: '59px'}], position: 1500, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '19px', { fromValue: '424px'}], position: 1750, duration: 0 },
            { id: "eid72", tween: [ "style", "${_Text2}", "top", '164px', { fromValue: '164px'}], position: 250, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '131px', { fromValue: '131px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Rectangle}", "top", '153px', { fromValue: '131px'}], position: 250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '255px', { fromValue: '153px'}], position: 500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_Rectangle}", "top", '330px', { fromValue: '255px'}], position: 750, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '91px', { fromValue: '330px'}], position: 1000, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '122px', { fromValue: '101px'}], position: 1250, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '471px', { fromValue: '132px'}], position: 1500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '123px', { fromValue: '471px'}], position: 1750, duration: 0 },
            { id: "eid564", tween: [ "style", "${_HTP_m2_03}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid41", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid42", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid112", tween: [ "style", "${_Text7}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid113", tween: [ "style", "${_Text7}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '160px', { fromValue: '160px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '377px', { fromValue: '160px'}], position: 250, duration: 0 },
            { id: "eid560", tween: [ "style", "${_Rectangle}", "height", '128px', { fromValue: '377px'}], position: 500, duration: 0 },
            { id: "eid53", tween: [ "style", "${_Rectangle}", "height", '97px', { fromValue: '128px'}], position: 750, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '161px', { fromValue: '73px'}], position: 1000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '307px', { fromValue: '94px'}], position: 1250, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '102px', { fromValue: '307px'}], position: 1500, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '123px', { fromValue: '102px'}], position: 1750, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Text1}", "top", '141px', { fromValue: '141px'}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Text1}", "left", '717px', { fromValue: '717px'}], position: 0, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid40", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid45", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '226px', { fromValue: '226px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '322px', { fromValue: '226px'}], position: 250, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '278px', { fromValue: '322px'}], position: 500, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Rectangle}", "width", '206px', { fromValue: '278px'}], position: 750, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '294px', { fromValue: '206px'}], position: 1000, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '272px', { fromValue: '294px'}], position: 1250, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '208px', { fromValue: '272px'}], position: 1500, duration: 0 },
            { id: "eid562", tween: [ "style", "${_Rectangle}", "width", '226px', { fromValue: '208px'}], position: 1750, duration: 0 },
            { id: "eid563", tween: [ "style", "${_HTP_m2_02}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 }         ]
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
      fill: ['rgba(0,0,0,0.10)']
   },
   {
      rect: ['0px','0px','49px','49px','auto','auto'],
      id: 'btn_next',
      userClass: 'img',
      type: 'image',
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
            ["color", "background-color", 'rgba(0,0,0,0.10)'],
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
      fill: ['rgba(0,0,0,0.10)']
   },
   {
      rect: ['0px','0px','49px','49px','auto','auto'],
      id: 'btn_back',
      userClass: 'img',
      type: 'image',
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
            ["color", "background-color", 'rgba(0,0,0,0.10)'],
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
"btn_X": {
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
      fill: ['rgba(0,0,0,0.10)']
   },
   {
      rect: ['0px','0px','49px','49px','auto','auto'],
      id: 'btn_next',
      userClass: 'img',
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/btn_X_up.png','0px','0px']
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
            ["color", "background-color", 'rgba(0,0,0,0.10)'],
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
      type: 'text',
      rect: ['7px','49px','78px','28px','auto','auto'],
      align: 'center',
      id: 'Text2',
      text: 'Done',
      userClass: 'txt',
      font: ['Tahoma, Geneva, sans-serif',18,'rgba(0,45,26,1.00)','bold','none','normal']
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
            ["style", "width", '78px'],
            ["style", "height", '28px'],
            ["color", "color", 'rgba(0,45,26,1.00)'],
            ["style", "left", '7px'],
            ["style", "font-size", '18px']
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
"Mission1": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_m1_01',
      type: 'image',
      rect: ['68px','50px','874px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m1_01.jpg','0px','0px']
   },
   {
      rect: ['68px','50px','874px','560px','auto','auto'],
      id: 'HTP_m1_02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/HTP_m1_02.jpg','0px','0px']
   },
   {
      rect: ['68px','50px','874px','560px','auto','auto'],
      id: 'HTP_m1_04',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/HTP_m1_04.jpg','0px','0px']
   },
   {
      rect: ['388px','2px','237px','48px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'ఆడటం  ఎలాగ',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1',
      text: '<b>అనుమానితుల గ్రిడ్</b><br><br>అనుమాతులందరూ ఇక్కడ వరుసగా నిల్చోబెట్టబడి  ఉన్నారు.  ఈ ఆకారాల్లో  ఒక్కటి మాత్రమే నేరస్తునికి చెందుతుఁది; మిగిలినవారు అమాయకులు. మీరు అమాయకులని  ఎంపిక చేసి వాళ్ళని విడుదల చేయాలి.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['96px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2Copy',
      text: '<b>క్లూలు</b><br><br>అనుమానితుల గ్రిడ్ లో ఆకారాలను మూల్యాంకన చేసి తీసివేసేందుకు మీకు క్లూల సెట్ సహాయపడుతుంది. ప్రతి ఒక్క క్లూ నేరస్తుని వద్ద  ఉన్న ఒక ఆస్తికి సంబంధించినది.<br><br>ఆ లక్షణం లేని ఆకారాలని విడుదల చేసేందుకు<b> క్లూని</b> ఉపయోగించండి. అప్పుడు మరొక క్లూ పొందేందుకు క్లూ క్లిక్ చేయండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      text: '<b>టూల్స్ </b><br><br>మీకు అనుమానంగా  ఉన్నప్పుడు కొన్ని ప్రత్యేక లక్షణాల కోసం చెక్ చేసేందుకు స్క్రీన్ పై  ఉన్న టూల్స్ మిమ్మల్ని అనుమతిస్తాయి.<br><br>ఈ మిషన్లో  మీకు అనుమానంగా ఉన్నప్పుడు మీకు సహాయపడే 3  టూల్స్ మీకు  ఉన్నాయి.<ol><li> ఆకారం యొక్క ఏ భుజాలు సమానంగా ఉన్నాయో చూసేందుకు <b>ఈక్వల్ సైడ్స్ మార్కర్</b> టూల్ ని క్లిక్ చేయండి</li><li><b>ప్యారెలల్ లైన్స్ </b> టూల్ క్లిక్ చేయడం ఆకారంలోని ఏవైనా సమాంతర రేఖల్ని హైలైట్ చేస్తుంది.</li><li>ఆకారం యొక్క ఏ కోణాలు కొలవడానికి లంబీయకోణానికి సమానంగా, తక్కువగా లేదా  ఎక్కువగా ఉంటాయో అంచనా వేసేందుకు <b>రైట్ యాంగిల్</b> టూల్ క్లిక్ చేయండి.</li></ol>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['480px','101px','273px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy',
      text: '<b>యాక్షన్ బటన్లు</b><br><br>ఒక కేసు ఆడేటప్పుడు ఈ యాక్షన్ బటన్లు మీకు వివిధ యాక్షన్ల కోర్స్ అందజేస్తాయి. <br><br>మీరు ఎంపిక చేసిన ఆకారం మార్కర్లు గల జూడిక్స్ ని విడుదల చేసేందుకు <b>రిలీజ్</b> క్లిక్ చేయండి.<br><br>ఒక కొత్త కేసు మరియు  ఒక కొత్త ఆకారం మార్కర్ల సెట్ పొందేందుకు <b>రీప్లే</b> క్లిక్ చేయండి.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6',
      text: '<b>టోకెన్ కౌంటర్</b><br><br>ఆడిన ప్రతి కొత్త కేసుకి క్లెయిమ్ చేయవలసిన కొన్ని టోకెన్లు టోకెన్ కౌంటర్లో ఉంటాయి.<br><br>మీ దగ్గర పరిమిత టోకెన్లు  ఉంటాయి. ఒక తప్పు ఆకారాన్ని తీసేసినప్పుడు ఒక టోకెన్ తీసేసుకోబడుతుంది. మీరు బేస్ టోకెన్ (చివరి టోకెన్) పోగొట్టుకున్నప్పుడు గేమ్ ముగుస్తుంది. ఒక కేసు చివరలో, స్క్రీన్ మీద మిగిలి ఉన్న టోకెన్ల ఆధారంగా సంపాదించుకున్న పాయింట్లు లెక్కగట్టబడతాయి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['627px','128px','210px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7Copy',
      text: '<b>స్టార్స్ టాలీ</b><br><br>ఒక టోకెన్ పోగొట్టుకోకుండా (అంటే ఒక పొరపాటు చేయకుండా) పరిష్కరించిన ప్రతి కేసు మీకు ఒక స్టార్ సంపాదించగలదు. ',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['566px','495px','209px','79px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8',
      text: '<b>డన్</b><br><br>మీరు కేసు పరిష్కరించారని మీరు అనుకున్నప్పుడు, <b>డన్</b> క్లిక్ చేయండి..',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
      userClass: 'backBtn1',
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
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '126px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '301px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "left", '76px'],
            ["style", "width", '595px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '314px'],
            ["style", "width", '279px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '156px'],
            ["style", "left", '183px'],
            ["style", "font-size", '12px']
         ],
         "${_Text8}": [
            ["style", "top", '495px'],
            ["style", "height", '79px'],
            ["style", "display", 'none'],
            ["style", "left", '566px'],
            ["style", "width", '209px']
         ],
         "${_btn_back}": [
            ["style", "top", '589px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '36px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '705px'],
            ["style", "width", '221px'],
            ["style", "top", '126px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '190px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text7Copy}": [
            ["style", "top", '128px'],
            ["style", "display", 'none'],
            ["style", "height", '90px'],
            ["style", "left", '627px'],
            ["style", "width", '210px']
         ],
         "${_Text1}": [
            ["style", "top", '136px'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '143px'],
            ["style", "left", '717px'],
            ["style", "width", '191px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '100px'],
            ["style", "height", '168px'],
            ["style", "display", 'none'],
            ["style", "left", '480px'],
            ["style", "width", '273px']
         ],
         "${_HTP_m1_01}": [
            ["style", "top", '50px'],
            ["style", "height", '560px'],
            ["style", "left", '68px'],
            ["style", "width", '874px']
         ],
         "${_HTP_m1_02}": [
            ["style", "top", '50px'],
            ["style", "left", '68px'],
            ["style", "display", 'none']
         ],
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '388px'],
            ["style", "font-size", '30px'],
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "height", '48px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '237px']
         ],
         "${_Text6}": [
            ["style", "top", '132px'],
            ["style", "display", 'none'],
            ["style", "height", '223px'],
            ["style", "left", '519px'],
            ["style", "width", '250px']
         ],
         "${_HTP_m1_04}": [
            ["style", "top", '50px'],
            ["style", "left", '68px'],
            ["style", "display", 'none']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '690px'],
            ["style", "top", '52px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '163px'],
            ["style", "width", '471px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '198px'],
            ["style", "left", '162px'],
            ["style", "font-size", '12px']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '301px', { fromValue: '301px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '301px'}], position: 250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '245px', { fromValue: '253px'}], position: 500, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '245px'}], position: 750, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '292px', { fromValue: '31px'}], position: 1000, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '33px', { fromValue: '292px'}], position: 1250, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '80px', { fromValue: '33px'}], position: 1500, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '690px', { fromValue: '690px'}], position: 0, duration: 0 },
            { id: "eid548", tween: [ "style", "${_pointer}", "left", '208px', { fromValue: '128px'}], position: 250, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '620px', { fromValue: '208px'}], position: 500, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '451px', { fromValue: '620px'}], position: 750, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '763px', { fromValue: '451px'}], position: 1000, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '643px', { fromValue: '763px'}], position: 1250, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '767px', { fromValue: '643px'}], position: 1500, duration: 0 },
            { id: "eid558", tween: [ "style", "${_HTP_m1_02}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '221px', { fromValue: '221px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '300px', { fromValue: '221px'}], position: 250, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '487px', { fromValue: '300px'}], position: 500, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '296px', { fromValue: '487px'}], position: 750, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '272px', { fromValue: '296px'}], position: 1000, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '231px', { fromValue: '272px'}], position: 1250, duration: 0 },
            { id: "eid68", tween: [ "style", "${_Text1}", "height", '143px', { fromValue: '143px'}], position: 0, duration: 0 },
            { id: "eid297", tween: [ "style", "${_Text7Copy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid298", tween: [ "style", "${_Text7Copy}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid69", tween: [ "style", "${_Text1}", "left", '717px', { fromValue: '717px'}], position: 0, duration: 0 },
            { id: "eid249", tween: [ "style", "${_Text3Copy}", "width", '471px', { fromValue: '471px'}], position: 500, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '705px', { fromValue: '705px'}], position: 0, duration: 0 },
            { id: "eid552", tween: [ "style", "${_Rectangle}", "left", '173px', { fromValue: '705px'}], position: 250, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '151px', { fromValue: '165px'}], position: 500, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '468px', { fromValue: '225px'}], position: 750, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '509px', { fromValue: '468px'}], position: 1000, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '615px', { fromValue: '509px'}], position: 1250, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '554px', { fromValue: '615px'}], position: 1500, duration: 0 },
            { id: "eid289", tween: [ "style", "${_Text6}", "height", '223px', { fromValue: '223px'}], position: 1000, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '76px', { fromValue: '76px'}], position: 0, duration: 0 },
            { id: "eid546", tween: [ "style", "${_Rectangle2}", "left", '107px', { fromValue: '85px'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '670px', { fromValue: '95px'}], position: 500, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '267px', { fromValue: '84px'}], position: 750, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '814px', { fromValue: '267px'}], position: 1000, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '618px', { fromValue: '814px'}], position: 1250, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '816px', { fromValue: '615px'}], position: 1500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '595px', { fromValue: '595px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '694px', { fromValue: '595px'}], position: 250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '144px', { fromValue: '130px'}], position: 500, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '161px', { fromValue: '144px'}], position: 750, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '105px', { fromValue: '161px'}], position: 1000, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '105px'}], position: 1250, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '80px', { fromValue: '84px'}], position: 1500, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '126px', { fromValue: '126px'}], position: 0, duration: 0 },
            { id: "eid547", tween: [ "style", "${_Rectangle2}", "top", '475px', { fromValue: '446px'}], position: 250, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '149px', { fromValue: '442px'}], position: 500, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '96px', { fromValue: '466px'}], position: 750, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '129px', { fromValue: '101px'}], position: 1000, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '44px', { fromValue: '132px'}], position: 1250, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '486px', { fromValue: '55px'}], position: 1500, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '-90deg', { fromValue: '-90deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '540deg', { fromValue: '-90deg'}], position: 250, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '450deg', { fromValue: '270deg'}], position: 500, duration: 0 },
            { id: "eid135", tween: [ "transform", "${_pointer}", "rotateZ", '270deg', { fromValue: '450deg'}], position: 750, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '270deg'}], position: 1000, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 1250, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 1500, duration: 0 },
            { id: "eid550", tween: [ "style", "${_Text2Copy}", "left", '183px', { fromValue: '183px'}], position: 250, duration: 0 },
            { id: "eid240", tween: [ "style", "${_Text2Copy}", "height", '156px', { fromValue: '156px'}], position: 250, duration: 0 },
            { id: "eid242", tween: [ "style", "${_Text3Copy}", "top", '163px', { fromValue: '163px'}], position: 500, duration: 0 },
            { id: "eid243", tween: [ "style", "${_Text3Copy}", "top", '292px', { fromValue: '163px'}], position: 750, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '52px', { fromValue: '52px'}], position: 0, duration: 0 },
            { id: "eid549", tween: [ "style", "${_pointer}", "top", '340px', { fromValue: '309px'}], position: 250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '85px', { fromValue: '340px'}], position: 500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '7px', { fromValue: '85px'}], position: 750, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '49px', { fromValue: '17px'}], position: 1000, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '13px', { fromValue: '59px'}], position: 1250, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '413px', { fromValue: '23px'}], position: 1500, duration: 0 },
            { id: "eid244", tween: [ "style", "${_Text3Copy}", "height", '198px', { fromValue: '198px'}], position: 500, duration: 0 },
            { id: "eid299", tween: [ "style", "${_Text7Copy}", "top", '128px', { fromValue: '128px'}], position: 1250, duration: 0 },
            { id: "eid99", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid100", tween: [ "style", "${_Text6}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid245", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid246", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid27", tween: [ "style", "${_Text1}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '126px', { fromValue: '126px'}], position: 0, duration: 0 },
            { id: "eid553", tween: [ "style", "${_Rectangle}", "top", '267px', { fromValue: '126px'}], position: 250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '151px', { fromValue: '267px'}], position: 500, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '91px', { fromValue: '151px'}], position: 750, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '122px', { fromValue: '101px'}], position: 1000, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '117px', { fromValue: '132px'}], position: 1250, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '486px', { fromValue: '127px'}], position: 1500, duration: 0 },
            { id: "eid551", tween: [ "style", "${_Text2Copy}", "top", '278px', { fromValue: '314px'}], position: 250, duration: 0 },
            { id: "eid556", tween: [ "style", "${_HTP_m1_04}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid270", tween: [ "style", "${_Text5Copy}", "height", '168px', { fromValue: '168px'}], position: 750, duration: 0 },
            { id: "eid241", tween: [ "style", "${_Text2Copy}", "width", '279px', { fromValue: '279px'}], position: 250, duration: 0 },
            { id: "eid247", tween: [ "style", "${_Text3Copy}", "left", '162px', { fromValue: '162px'}], position: 500, duration: 0 },
            { id: "eid248", tween: [ "style", "${_Text3Copy}", "left", '103px', { fromValue: '162px'}], position: 750, duration: 0 },
            { id: "eid267", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid268", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid300", tween: [ "style", "${_Text7Copy}", "height", '90px', { fromValue: '90px'}], position: 1250, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '190px', { fromValue: '190px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '177px', { fromValue: '190px'}], position: 250, duration: 0 },
            { id: "eid250", tween: [ "style", "${_Rectangle}", "height", '251px', { fromValue: '208px'}], position: 500, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '191px', { fromValue: '251px'}], position: 750, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '242px', { fromValue: '94px'}], position: 1000, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '123px', { fromValue: '242px'}], position: 1250, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '103px', { fromValue: '123px'}], position: 1500, duration: 0 },
            { id: "eid70", tween: [ "style", "${_Text1}", "top", '136px', { fromValue: '136px'}], position: 0, duration: 0 },
            { id: "eid236", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid237", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid238", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid78", tween: [ "style", "${_Text1}", "width", '191px', { fromValue: '191px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid292", tween: [ "style", "${_Text6}", "top", '132px', { fromValue: '132px'}], position: 1000, duration: 0 },
            { id: "eid269", tween: [ "style", "${_Text5Copy}", "top", '100px', { fromValue: '100px'}], position: 750, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 }         ]
      }
   }
},
"Mission3": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_screenshot',
      type: 'image',
      rect: ['68px','50px','874px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m3_02.jpg','0px','0px']
   },
   {
      rect: ['68px','50px','874px','560px','auto','auto'],
      id: 'HTP_m3_03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/HTP_m3_03.jpg','0px','0px']
   },
   {
      rect: ['389px','2px','231px','43px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'ఆడటం  ఎలాగ',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1Copy',
      text: '<b>అనుమతించబడిన సెట్</b><br><br>మిస్టర్ జి ఫ్యాక్టరీలోకి అనుమతించబడిన జూడిక్స్ యొక్క  ఆకారం మార్కర్లని గుర్తించడానికి దీనిని  ఉపయోగించండి.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['409px','470px','240px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2Copy',
      text: '<b>అవరోధించబడిన సెట్</b><br><br>మిస్టర్ జి ఫ్యాక్టరీలోకి అనుమతించబడని జూడిక్స్ యొక్క  ఆకారం మార్కర్లని గుర్తించడానికి దీనిని  ఉపయోగించండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy4',
      text: '<b>టూల్స్</b><br><br>మీకు అనుమానంగా  ఉన్నప్పుడు కొన్ని ప్రత్యేక లక్షణాల కోసం చెక్ చేసేందుకు స్క్రీన్ పై  ఉన్న టూల్ కిట్ మిమ్మల్ని అనుమతిస్తుంది.<br><br>ఈ మిషన్లో, మీకు గనక  అనుమానం కలిగితే మీకు సహాయపడేందుకు మీకు 4 పరికరాలుంటాయి.<ol><li>ఆకారం యొక్క ఏ భుజాలు సమానంగా ఉన్నాయో చూసేందుకు <b>ఈక్వల్ సైడ్స్ మార్కర్ </b>టూల్ ని క్లిక్ చేయండి</li><li>ఆకారం యొక్క  ఏ కోణాలు  తీవ్రంగా,  ఒబ్ట్యూస్,  రిఫ్లెక్స్ మరియు లంబీయంగా ఉన్నాయో అంచనా వేసేందుకు <b>యాంగిల్ మార్కర్ </b>టూల్ క్లిక్ చేయండి.</li><li><b>ప్యారెలల్ లైన్స్ </b> టూల్ క్లిక్ చేయడం ఆకారంలోని ఏవైనా సమాంతర రేఖల్ని హైలైట్ చేస్తుంది.</li></ol>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      text: '<b>ప్రాపర్టీ సెలెక్టర్</b><br><br>అనుమతించబడిన జూడిక్ యొక్క లక్షణాన్ని రూపుకల్పించడానికి దీనిని ఉపయోగించండి. ప్రతి లక్షణానికి డ్రాప్ డౌన్ మెన్యూ ఉపయోగించడం ద్వారా ఇంకా క్రియేట్ క్లిక్ చేయడం ద్వారా మీరు ఇది చేయవచ్చు.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','63px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4Copy',
      text: '<b>క్రియేట్ బటన్</b><br><br>ఒక జూడిక్ ఆకారం మార్కర్ సృష్టించడానికి <b>క్రియేట్</b> బటన్ క్లిక్ చేయండి.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['478px','101px','270px','73px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy',
      text: '<b>షేప్ మార్కర్ బాక్స్</b><br><br>మీరు సృష్టించిన ఆకారం మార్కర్ ఇక్కడ కనిపిస్తుంది.<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6Copy',
      text: '<b>గూఢఛారిని పంపించు బటన్</b><br><br>మీరు కల్పన చేసిన ఆకారం మార్కర్ సరిగ్గా ఉన్నదా అని చెక్ చేయాలనుకుంటున్నారా? తెలుసుకోవడానికి <b>సెండ్ ఏజెంట్</b> బటన్ క్లిక్ చేయండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','105px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7Copy',
      text: '<b>ఢిస్కార్డ్ బటన్</b><br><br>మీరు తప్పు ఆకారం మార్కర్ కల్పించారని మీరనుకుంటున్నారా? దాన్ని తొలగించి ఒక కొత్తదాన్ని తయారు చేసేందుకు <b>డిస్కార్డ్</b> బటన్ క్లిక్ చేయండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8',
      text: '<b>టోకెన్ కౌంటర్</b><br><br>పరిష్కరించిన ప్రతి కేసుకి మీరు టోకెన్లు పొందవచ్చు. మీరు వాటిని టోకెన్ కౌంటర్లో చూడవచ్చు.<br><br>గుర్తుంచుకోండి:<ol><li>మీ దగ్గర పరిమిత టోకెన్లు  ఉంటాయి.</li><li>మీరు ఈ పని చేస్తే టోకెన్లు పోగొట్టుకుంటారు<ul><li>అనుమతించబడిన సెట్ లోకి సరిపోని ఆకారం మార్కర్ ని మీరు ఎంచుకుంటే</li><li>మీరు సరికాని ప్రశ్న తయారుచేస్తే</li></ul></li><li>మీరు బేస్ టోకెన్ పోగొట్టుకున్నప్పుడు ఆట ముగుస్తుంది, అదే చివరి టోకెన్.</li></ol>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['631px','127px','269px','103px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','400','none','normal'],
      align: 'left',
      id: 'Text9Copy',
      text: '<b>స్టార్స్ టాలీ</b><br><br>ఒక టోకెన్ పోగొట్టుకోకుండా (అంటే ఒక పొరపాటు చేయకుండా) పరిష్కరించిన ప్రతి కేసు మీకు రెండు స్టార్లను సంపాదించగలదు.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
      userClass: 'backBtn1',
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
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_Text1Copy}": [
            ["style", "top", '474px'],
            ["style", "width", '238px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '116px'],
            ["style", "left", '124px'],
            ["style", "font-size", '12px']
         ],
         "${_Text3Copy4}": [
            ["style", "top", '163px'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '241px'],
            ["style", "left", '239px'],
            ["style", "width", '410px']
         ],
         "${_HTP_m3_03}": [
            ["style", "top", '50px'],
            ["style", "left", '68px'],
            ["style", "display", 'none']
         ],
         "${_Text8}": [
            ["style", "top", '135px'],
            ["style", "font-size", '12px'],
            ["style", "display", 'none'],
            ["style", "height", '241px'],
            ["style", "left", '516px'],
            ["style", "width", '260px']
         ],
         "${_btn_back}": [
            ["style", "top", '589px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '36px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text9Copy}": [
            ["style", "top", '129px'],
            ["style", "font-size", '12px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '400'],
            ["style", "height", '103px'],
            ["style", "width", '269px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '112px'],
            ["style", "width", '250px'],
            ["style", "top", '462px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '128px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text7Copy}": [
            ["style", "top", '491px'],
            ["style", "font-size", '12px'],
            ["style", "height", '105px'],
            ["style", "display", 'none'],
            ["style", "left", '515px'],
            ["style", "width", '265px']
         ],
         "${_Text8Copy2}": [
            ["style", "top", '169px'],
            ["style", "display", 'none'],
            ["style", "height", '25px'],
            ["style", "font-weight", '700'],
            ["style", "left", '517px'],
            ["style", "width", '256px']
         ],
         "${_HTP_screenshot}": [
            ["style", "top", '50px'],
            ["style", "height", '560px'],
            ["style", "left", '68px'],
            ["style", "width", '874px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '303px'],
            ["style", "font-size", '12px'],
            ["style", "height", '110px'],
            ["style", "display", 'none'],
            ["style", "left", '663px'],
            ["style", "width", '242px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '325px'],
            ["style", "font-size", '12px'],
            ["style", "height", '73px'],
            ["style", "display", 'none'],
            ["style", "left", '668px'],
            ["style", "width", '258px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '403px'],
            ["style", "font-size", '12px'],
            ["style", "height", '86px'],
            ["style", "display", 'none'],
            ["style", "left", '275px'],
            ["style", "width", '228px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '389px'],
            ["style", "font-size", '30px'],
            ["style", "top", '2px'],
            ["style", "text-align", 'center'],
            ["style", "height", '43px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '231px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '332px'],
            ["style", "width", '268px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '121px'],
            ["style", "left", '109px'],
            ["style", "font-size", '12px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '478px'],
            ["style", "width", '240px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '112px'],
            ["style", "left", '409px'],
            ["style", "font-size", '12px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '207px'],
            ["style", "top", '362px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '95px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "border-width", '4px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '332px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "left", '73px'],
            ["style", "width", '297px']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
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
            { id: "eid305", tween: [ "style", "${_Text1Copy}", "left", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '332px', { fromValue: '332px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '329px', { fromValue: '332px'}], position: 250, duration: 0 },
            { id: "eid398", tween: [ "style", "${_Rectangle2}", "height", '224px', { fromValue: '329px'}], position: 500, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '224px'}], position: 750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '31px'}], position: 1000, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '161px', { fromValue: '138px'}], position: 1250, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '83px', { fromValue: '161px'}], position: 1500, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '33px', { fromValue: '83px'}], position: 1750, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '290px', { fromValue: '33px'}], position: 2000, duration: 0 },
            { id: "eid162", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '290px'}], position: 2250, duration: 0 },
            { id: "eid390", tween: [ "style", "${_Text9Copy}", "top", '129px', { fromValue: '129px'}], position: 2250, duration: 0 },
            { id: "eid324", tween: [ "style", "${_Text4Copy}", "width", '228px', { fromValue: '228px'}], position: 1000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '250px', { fromValue: '250px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '257px', { fromValue: '250px'}], position: 250, duration: 0 },
            { id: "eid402", tween: [ "style", "${_Rectangle}", "width", '435px', { fromValue: '252px'}], position: 500, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '297px', { fromValue: '435px'}], position: 750, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Rectangle}", "width", '256px', { fromValue: '265px'}], position: 1000, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '280px', { fromValue: '256px'}], position: 1250, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '272px', { fromValue: '280px'}], position: 1500, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '298px', { fromValue: '272px'}], position: 1750, duration: 0 },
            { id: "eid363", tween: [ "style", "${_Rectangle}", "width", '290px', { fromValue: '298px'}], position: 2000, duration: 0 },
            { id: "eid357", tween: [ "style", "${_Text7Copy}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid358", tween: [ "style", "${_Text7Copy}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid319", tween: [ "style", "${_Text3Copy}", "width", '268px', { fromValue: '268px'}], position: 750, duration: 0 },
            { id: "eid320", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid321", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid303", tween: [ "style", "${_Text1Copy}", "height", '116px', { fromValue: '116px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '398px', { fromValue: '112px'}], position: 250, duration: 0 },
            { id: "eid399", tween: [ "style", "${_Rectangle}", "left", '224px', { fromValue: '398px'}], position: 500, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '95px', { fromValue: '224px'}], position: 750, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Rectangle}", "left", '261px', { fromValue: '95px'}], position: 1000, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '658px', { fromValue: '261px'}], position: 1250, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '648px', { fromValue: '468px'}], position: 1500, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '499px', { fromValue: '509px'}], position: 1750, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '500px', { fromValue: '499px'}], position: 2000, duration: 0 },
            { id: "eid168", tween: [ "style", "${_Rectangle}", "left", '618px', { fromValue: '500px'}], position: 2250, duration: 0 },
            { id: "eid359", tween: [ "style", "${_Text7Copy}", "left", '515px', { fromValue: '515px'}], position: 1750, duration: 0 },
            { id: "eid425", tween: [ "style", "${_Text3Copy4}", "left", '239px', { fromValue: '239px'}], position: 500, duration: 0 },
            { id: "eid426", tween: [ "style", "${_Text3Copy4}", "left", '103px', { fromValue: '239px'}], position: 750, duration: 0 },
            { id: "eid422", tween: [ "style", "${_Text3Copy4}", "height", '241px', { fromValue: '241px'}], position: 500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '73px', { fromValue: '73px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle2}", "left", '383px', { fromValue: '73px'}], position: 250, duration: 0 },
            { id: "eid395", tween: [ "style", "${_Rectangle2}", "left", '693px', { fromValue: '383px'}], position: 500, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '95px', { fromValue: '693px'}], position: 750, duration: 0 },
            { id: "eid49", tween: [ "style", "${_Rectangle2}", "left", '547px', { fromValue: '92px'}], position: 1000, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '656px', { fromValue: '547px'}], position: 1250, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '828px', { fromValue: '656px'}], position: 1500, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '830px', { fromValue: '814px'}], position: 1750, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '818px', { fromValue: '615px'}], position: 2000, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Rectangle2}", "left", '615px', { fromValue: '818px'}], position: 2250, duration: 0 },
            { id: "eid317", tween: [ "style", "${_Text3Copy}", "left", '109px', { fromValue: '109px'}], position: 750, duration: 0 },
            { id: "eid318", tween: [ "style", "${_Text3Copy}", "left", '103px', { fromValue: '109px'}], position: 1000, duration: 0 },
            { id: "eid567", tween: [ "style", "${_HTP_m3_03}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '95px', { fromValue: '95px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Rectangle2}", "top", '98px', { fromValue: '95px'}], position: 250, duration: 0 },
            { id: "eid397", tween: [ "style", "${_Rectangle2}", "top", '154px', { fromValue: '98px'}], position: 500, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '491px', { fromValue: '154px'}], position: 750, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Rectangle2}", "top", '440px', { fromValue: '491px'}], position: 1000, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '440px', { fromValue: '440px'}], position: 1250, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '460px', { fromValue: '439px'}], position: 1500, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '555px', { fromValue: '456px'}], position: 1750, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '135px', { fromValue: '555px'}], position: 2000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Rectangle2}", "top", '47px', { fromValue: '127px'}], position: 2250, duration: 0 },
            { id: "eid427", tween: [ "style", "${_Text3Copy4}", "width", '410px', { fromValue: '410px'}], position: 500, duration: 0 },
            { id: "eid326", tween: [ "style", "${_Text5Copy}", "top", '325px', { fromValue: '325px'}], position: 1250, duration: 0 },
            { id: "eid332", tween: [ "style", "${_Text6Copy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid333", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid335", tween: [ "style", "${_Text6Copy}", "top", '303px', { fromValue: '303px'}], position: 1500, duration: 0 },
            { id: "eid147", tween: [ "style", "${_Text8}", "top", '135px', { fromValue: '135px'}], position: 2000, duration: 0 },
            { id: "eid167", tween: [ "style", "${_Text8}", "top", '126px', { fromValue: '135px'}], position: 2250, duration: 0 },
            { id: "eid322", tween: [ "style", "${_Text4Copy}", "left", '275px', { fromValue: '275px'}], position: 1000, duration: 0 },
            { id: "eid323", tween: [ "style", "${_Text4Copy}", "top", '403px', { fromValue: '403px'}], position: 1000, duration: 0 },
            { id: "eid423", tween: [ "style", "${_Text3Copy4}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid424", tween: [ "style", "${_Text3Copy4}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid311", tween: [ "style", "${_Text2Copy}", "height", '112px', { fromValue: '112px'}], position: 250, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '207px', { fromValue: '207px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pointer}", "left", '506px', { fromValue: '207px'}], position: 250, duration: 0 },
            { id: "eid392", tween: [ "style", "${_pointer}", "left", '641px', { fromValue: '506px'}], position: 500, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '126px', { fromValue: '641px'}], position: 750, duration: 0 },
            { id: "eid54", tween: [ "style", "${_pointer}", "left", '499px', { fromValue: '123px'}], position: 1000, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '725px', { fromValue: '499px'}], position: 1250, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '856px', { fromValue: '451px'}], position: 1500, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '778px', { fromValue: '763px'}], position: 1750, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '769px', { fromValue: '643px'}], position: 2000, duration: 0 },
            { id: "eid164", tween: [ "style", "${_pointer}", "left", '646px', { fromValue: '654px'}], position: 2250, duration: 0 },
            { id: "eid302", tween: [ "style", "${_Text1Copy}", "top", '474px', { fromValue: '474px'}], position: 0, duration: 0 },
            { id: "eid327", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid328", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid315", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid316", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '362px', { fromValue: '362px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_pointer}", "top", '362px', { fromValue: '362px'}], position: 250, duration: 0 },
            { id: "eid393", tween: [ "style", "${_pointer}", "top", '156px', { fromValue: '362px'}], position: 500, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '354px', { fromValue: '156px'}], position: 750, duration: 0 },
            { id: "eid55", tween: [ "style", "${_pointer}", "top", '357px', { fromValue: '279px'}], position: 1000, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '305px', { fromValue: '357px'}], position: 1250, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '319px', { fromValue: '17px'}], position: 1500, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '465px', { fromValue: '59px'}], position: 1750, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '109px', { fromValue: '23px'}], position: 2000, duration: 0 },
            { id: "eid165", tween: [ "style", "${_pointer}", "top", '11px', { fromValue: '109px'}], position: 2250, duration: 0 },
            { id: "eid420", tween: [ "style", "${_Text3Copy4}", "top", '163px', { fromValue: '163px'}], position: 500, duration: 0 },
            { id: "eid421", tween: [ "style", "${_Text3Copy4}", "top", '292px', { fromValue: '163px'}], position: 750, duration: 0 },
            { id: "eid314", tween: [ "style", "${_Text3Copy}", "height", '121px', { fromValue: '121px'}], position: 750, duration: 0 },
            { id: "eid148", tween: [ "style", "${_Text8}", "height", '241px', { fromValue: '241px'}], position: 2000, duration: 0 },
            { id: "eid360", tween: [ "style", "${_Text7Copy}", "top", '491px', { fromValue: '491px'}], position: 1750, duration: 0 },
            { id: "eid337", tween: [ "style", "${_Text6Copy}", "height", '110px', { fromValue: '110px'}], position: 1500, duration: 0 },
            { id: "eid124", tween: [ "style", "${_Text8}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid373", tween: [ "style", "${_Text8}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid308", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid309", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid310", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid146", tween: [ "style", "${_Text8}", "left", '516px', { fromValue: '516px'}], position: 2000, duration: 0 },
            { id: "eid166", tween: [ "style", "${_Text8}", "left", '629px', { fromValue: '516px'}], position: 2250, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '462px', { fromValue: '462px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Rectangle}", "top", '466px', { fromValue: '462px'}], position: 250, duration: 0 },
            { id: "eid400", tween: [ "style", "${_Rectangle}", "top", '153px', { fromValue: '466px'}], position: 500, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '318px', { fromValue: '153px'}], position: 750, duration: 0 },
            { id: "eid51", tween: [ "style", "${_Rectangle}", "top", '394px', { fromValue: '318px'}], position: 1000, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '315px', { fromValue: '394px'}], position: 1250, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '289px', { fromValue: '101px'}], position: 1500, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '478px', { fromValue: '289px'}], position: 1750, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '127px', { fromValue: '478px'}], position: 2000, duration: 0 },
            { id: "eid158", tween: [ "style", "${_Rectangle}", "top", '115px', { fromValue: '127px'}], position: 2250, duration: 0 },
            { id: "eid307", tween: [ "style", "${_Text2Copy}", "top", '478px', { fromValue: '478px'}], position: 250, duration: 0 },
            { id: "eid304", tween: [ "style", "${_Text1Copy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid325", tween: [ "style", "${_Text4Copy}", "height", '86px', { fromValue: '86px'}], position: 1000, duration: 0 },
            { id: "eid306", tween: [ "style", "${_Text1Copy}", "width", '238px', { fromValue: '238px'}], position: 0, duration: 0 },
            { id: "eid329", tween: [ "style", "${_Text5Copy}", "left", '668px', { fromValue: '668px'}], position: 1250, duration: 0 },
            { id: "eid361", tween: [ "style", "${_Text7Copy}", "width", '265px', { fromValue: '265px'}], position: 1750, duration: 0 },
            { id: "eid389", tween: [ "style", "${_Text9Copy}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '128px', { fromValue: '128px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '132px', { fromValue: '128px'}], position: 250, duration: 0 },
            { id: "eid401", tween: [ "style", "${_Rectangle}", "height", '300px', { fromValue: '118px'}], position: 500, duration: 0 },
            { id: "eid403", tween: [ "style", "${_Rectangle}", "height", '148px', { fromValue: '300px'}], position: 750, duration: 0 },
            { id: "eid53", tween: [ "style", "${_Rectangle}", "height", '102px', { fromValue: '148px'}], position: 1000, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '94px', { fromValue: '96px'}], position: 1250, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '135px', { fromValue: '94px'}], position: 1500, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '131px', { fromValue: '135px'}], position: 1750, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '286px', { fromValue: '125px'}], position: 2000, duration: 0 },
            { id: "eid391", tween: [ "style", "${_Rectangle}", "height", '129px', { fromValue: '270px'}], position: 2250, duration: 0 },
            { id: "eid362", tween: [ "style", "${_Text8}", "width", '260px', { fromValue: '260px'}], position: 2000, duration: 0 },
            { id: "eid334", tween: [ "style", "${_Text6Copy}", "left", '663px', { fromValue: '663px'}], position: 1500, duration: 0 },
            { id: "eid312", tween: [ "style", "${_Text3Copy}", "top", '332px', { fromValue: '332px'}], position: 750, duration: 0 },
            { id: "eid313", tween: [ "style", "${_Text3Copy}", "top", '292px', { fromValue: '332px'}], position: 1000, duration: 0 },
            { id: "eid330", tween: [ "style", "${_Text5Copy}", "width", '258px', { fromValue: '258px'}], position: 1250, duration: 0 },
            { id: "eid336", tween: [ "style", "${_Text6Copy}", "width", '242px', { fromValue: '242px'}], position: 1500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '297px', { fromValue: '297px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '301px', { fromValue: '297px'}], position: 250, duration: 0 },
            { id: "eid396", tween: [ "style", "${_Rectangle2}", "width", '122px', { fromValue: '301px'}], position: 500, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '518px', { fromValue: '122px'}], position: 750, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Rectangle2}", "width", '81px', { fromValue: '518px'}], position: 1000, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '161px', { fromValue: '628px'}], position: 1250, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '161px'}], position: 1500, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '105px'}], position: 1750, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '106px', { fromValue: '84px'}], position: 2000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '106px'}], position: 2250, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 250, duration: 0 },
            { id: "eid394", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 500, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 750, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_pointer}", "rotateZ", '450deg', { fromValue: '180deg'}], position: 1000, duration: 0 },
            { id: "eid140", tween: [ "transform", "${_pointer}", "rotateZ", '540deg', { fromValue: '450deg'}], position: 1250, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '540deg'}], position: 1500, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 1750, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 2000, duration: 0 },
            { id: "eid378", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 2250, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 }         ]
      }
   }
},
"Mission4": {
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
      rect: ['61px','43px','890px','578px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(181,181,153,1.00)']
   },
   {
      id: 'HTP_screenshot',
      type: 'image',
      rect: ['68px','50px','874px','560px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/HTP_m4_01.jpg','0px','0px']
   },
   {
      rect: ['68px','50px','874px','560px','auto','auto'],
      id: 'HTP_m4_02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/HTP_m4_02.jpg','0px','0px']
   },
   {
      rect: ['68px','50px','874px','560px','auto','auto'],
      id: 'HTP_m4b',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/HTP_m4_03.jpg','0px','0px']
   },
   {
      rect: ['390px','1px','234px','48px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',30,'rgba(255,255,255,1.00)','700','none',''],
      id: 'Text',
      text: 'ఆడటం  ఎలాగ',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['75px','108px','591px','320px','auto','auto'],
      id: 'Rectangle2',
      stroke: [4,'rgba(255,51,0,1.00)','solid'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   },
   {
      rect: ['75px','466px','252px','121px','auto','auto'],
      borderRadius: ['10px 10px','10px 10px','10px 10px','10px 10px'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['587px','196px','208px','62px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text13Copy',
      text: '<b>టోకెన్ కౌంటర్</b><br><br>ఆడిన ప్రతి కేసుకి క్లెయిమ్ చేయవలసిన కొన్ని టోకెన్లు టోకెన్ కౌంటర్లో ఉంటాయి.<br><br>మీకు పరిమిత టోకెన్లు ఉంటాయి.  ఇలాంటప్పుడు ఒక టోకెన్ తీసేసుకోబడుతుంది–<ol><li>రా-హాకా ఫ్రేములో 2 వెర్టిసెస్ కనుగొన్న తర్వాత గ్రిడ్ లో మీరు ఒక తప్పు పాయింట్ ఎంపిక చేస్తే.</li></ol>మీరు బేస్ టోకెన్ (చివరి టోకెన్) చేరినప్పుడు  గేమ్ ముగుస్తుంది.<br><br>కేసు చివర్లో, స్క్ర్రీన్ మీద మిగిలి ఉన్న టోకెన్లని బట్టి సంపాదించుకున్న పాయింట్లు లెక్కించడం జరుగుతుంది.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','130px','205px','119px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','400','none','normal'],
      align: 'left',
      id: 'Text14',
      text: '<b>స్టార్స్ టాలీ</b><br><br>ఒక టోకెన్ పోగొట్టుకోకుండా (అంటే ఒక పొరపాటు చేయకుండా) పరిష్కరించిన ప్రతి కేసు మీకు రెండు స్టార్లను సంపాదించగలదు.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['183px','364px','35px','104px','auto','auto'],
      id: 'pointer',
      transform: [[],[],[],['0.6','0.3']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/pointer.svg','0px','0px']
   },
   {
      rect: ['91px','476px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'Text1Copy',
      text: '<b>ఫేజ్ 1</b><br><br>ఈ ఫేజ్ లో, మీరు రా-హాకా నుండి ఫ్రేమ్ ని దాచిపెట్టవలసి ఉంటుంది.  ఇది చేసేందుకు , ఫ్రేమ్ యొక్క వెర్టిసెస్ క్లిక్ చెయ్యండి.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['409px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text2Copy',
      text: '<b>ప్రాంప్ట్ బాక్స్</b><br><br><b>డ్రాయింగ్ గ్రిడ్ </b>పై వెర్టిసెస్ ఎంపిక చేసుకునేందుకు ఇక్కడి వర్ణనని  ఉపయోగించుకోండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['683px','470px','230px','90px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1.00)','normal','none','normal'],
      align: 'left',
      id: 'Text3Copy',
      text: '<b>డ్రాయింగ్ గ్రిడ్</b><br><br>మీరు ఫ్రేమిని  ఈ గ్రిడ్ లోపల దాచవచ్చు. <b>ప్రాంప్ట్ బాక్స్</b> లో ఇవ్వబడిన వర్ణనకి తగి ఉండే ఒక ఆకారాన్ని సృష్టించేందుకు వెర్టిసెస్ ఎంపిక చేసుకోండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['757px','466px','161px','75px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text4Copy',
      text: '<b>డన్ బటన్</b><br><br>ఎంపిక చేసుకోబడిన వెర్టిసెస్ ని గ్రిడ్ పై ఫ్రీజ్ చేసేందుకు దీనిని క్లిక్ చెయ్యండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['478px','101px','270px','79px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text5Copy',
      text: '<b>క్లియర్ బటన్</b><br><br>వెర్టిసెస్ ఎంపికని మార్చేందుకు దీనిని క్లిక్ చెయ్యండి.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['519px','132px','250px','94px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text6Copy',
      text: '<b>ఫేజ్ 2</b><br><br>ఈ ఫేజ్ లో మీరు మరియు రా హాకా ఒకరి ఫ్రేముల్ని మరొకరు ప్రయత్నించి ఆచూకీ తెలుసుకోవడానికి  వంతులు వేసుకుంటారు.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['626px','128px','203px','57px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text7Copy',
      text: '<b>ప్లేయర్స్ క్షేత్రం</b><br><br>మీ డ్రాయింగ్ గ్రిడ్  ఈ క్షేత్రంలో పెట్టబడి ఉంటుంది.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['466px','497px','212px','40px','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',12,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text8Copy',
      text: '<b>రా హాకా క్షేత్రం</b><br><br>రా హాకా యొక్క గ్రిడ్, దానిలోపల ఫ్రేమ్ దాచిపెట్టబడి,  ఇక్కడ పెట్టబడి ఉంది',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['926px','590px','auto','auto','auto','auto'],
      id: 'btn_next',
      transform: [],
      cursor: ['pointer'],
      type: 'rect'
   },
   {
      rect: ['36px','589px','auto','auto','auto','auto'],
      userClass: 'backBtn1',
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
      id: 'btn_next',
      symbolName: 'btn_next'
   }   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '107px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '306px'],
            ["color", "border-color", 'rgba(255,51,0,1.00)'],
            ["style", "height", '493px'],
            ["style", "border-style", 'solid'],
            ["style", "border-width", '4px'],
            ["style", "width", '395px']
         ],
         "${_Text3Copy}": [
            ["style", "top", '195px'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '119px'],
            ["style", "left", '89px'],
            ["style", "width", '185px']
         ],
         "${_HTP_m4b}": [
            ["style", "display", 'none'],
            ["style", "top", '50px'],
            ["style", "left", '68px'],
            ["style", "height", '560px']
         ],
         "${_btn_back}": [
            ["style", "top", '589px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '36px']
         ],
         "${symbolSelector}": [
            ["style", "height", '652px'],
            ["style", "width", '1014px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "border-top-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-bottom-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '68px'],
            ["style", "width", '213px'],
            ["style", "top", '107px'],
            ["style", "border-bottom-left-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '132px'],
            ["style", "border-top-right-radius", [10,10], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_Text14}": [
            ["style", "top", '126px'],
            ["style", "width", '205px'],
            ["style", "display", 'none'],
            ["style", "font-weight", '400'],
            ["style", "height", '119px'],
            ["style", "font-size", '12px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '520px'],
            ["style", "width", '176px'],
            ["style", "height", '75px'],
            ["style", "display", 'none'],
            ["style", "left", '235px'],
            ["style", "font-size", '12px']
         ],
         "${_HTP_screenshot}": [
            ["style", "top", '50px'],
            ["style", "height", '560px'],
            ["style", "left", '68px'],
            ["style", "width", '874px']
         ],
         "${_drawDummy}": [
            ["style", "top", '564px'],
            ["style", "opacity", '0.8515625'],
            ["style", "left", '467px']
         ],
         "${_Text6Copy}": [
            ["style", "top", '54px'],
            ["style", "width", '399px'],
            ["style", "height", '74px'],
            ["style", "display", 'none'],
            ["style", "left", '242px'],
            ["style", "font-size", '12px']
         ],
         "${_feedback_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5Copy}": [
            ["style", "top", '437px'],
            ["style", "width", '177px'],
            ["style", "height", '79px'],
            ["style", "display", 'none'],
            ["style", "left", '330px'],
            ["style", "font-size", '12px']
         ],
         "${_HTP_m4_02}": [
            ["style", "top", '50px'],
            ["style", "left", '68px'],
            ["style", "display", 'none']
         ],
         "${_Text1Copy}": [
            ["style", "top", '119px'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'block'],
            ["style", "height", '112px'],
            ["style", "left", '80px'],
            ["style", "width", '189px']
         ],
         "${_RoundRect}": [
            ["style", "top", '43px'],
            ["style", "height", '578px'],
            ["color", "background-color", 'rgba(181,181,153,1.00)'],
            ["style", "left", '61px'],
            ["style", "width", '890px']
         ],
         "${_Text7Copy}": [
            ["style", "top", '62px'],
            ["style", "width", '248px'],
            ["style", "height", '57px'],
            ["style", "display", 'none'],
            ["style", "left", '136px'],
            ["style", "font-size", '12px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '390px'],
            ["style", "font-size", '30px'],
            ["style", "top", '1px'],
            ["style", "text-align", 'center'],
            ["style", "height", '48px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "width", '234px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '136px'],
            ["style", "width", '173px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '75px'],
            ["style", "left", '108px'],
            ["style", "font-size", '12px']
         ],
         "${_Text13Copy}": [
            ["style", "top", '200px'],
            ["style", "width", '300px'],
            ["style", "height", '277px'],
            ["style", "display", 'none'],
            ["style", "left", '493px'],
            ["style", "font-size", '12px']
         ],
         "${_pointer}": [
            ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "scaleY", '0.27'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '0.6'],
            ["style", "left", '263px'],
            ["style", "top", '33px']
         ],
         "${_Text8Copy}": [
            ["style", "top", '59px'],
            ["style", "width", '432px'],
            ["style", "display", 'none'],
            ["style", "height", '57px'],
            ["style", "left", '460px'],
            ["style", "font-size", '12px']
         ],
         "${_btn_next}": [
            ["style", "top", '590px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '926px']
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
            { id: "eid439", tween: [ "style", "${_Text1Copy}", "left", '80px', { fromValue: '80px'}], position: 0, duration: 0 },
            { id: "eid436", tween: [ "style", "${_Text1Copy}", "top", '119px', { fromValue: '119px'}], position: 0, duration: 0 },
            { id: "eid18", tween: [ "style", "${_pointer}", "left", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_pointer}", "left", '277px', { fromValue: '263px'}], position: 250, duration: 0 },
            { id: "eid36", tween: [ "style", "${_pointer}", "left", '271px', { fromValue: '723px'}], position: 500, duration: 0 },
            { id: "eid54", tween: [ "style", "${_pointer}", "left", '412px', { fromValue: '123px'}], position: 750, duration: 0 },
            { id: "eid65", tween: [ "style", "${_pointer}", "left", '348px', { fromValue: '412px'}], position: 1000, duration: 0 },
            { id: "eid91", tween: [ "style", "${_pointer}", "left", '436px', { fromValue: '348px'}], position: 1250, duration: 0 },
            { id: "eid105", tween: [ "style", "${_pointer}", "left", '243px', { fromValue: '436px'}], position: 1500, duration: 0 },
            { id: "eid121", tween: [ "style", "${_pointer}", "left", '528px', { fromValue: '243px'}], position: 1750, duration: 0 },
            { id: "eid199", tween: [ "style", "${_pointer}", "left", '788px', { fromValue: '706px'}], position: 2000, duration: 0 },
            { id: "eid217", tween: [ "style", "${_pointer}", "left", '649px', { fromValue: '788px'}], position: 2250, duration: 0 },
            { id: "eid461", tween: [ "style", "${_Text4Copy}", "width", '176px', { fromValue: '176px'}], position: 750, duration: 0 },
            { id: "eid460", tween: [ "style", "${_Text4Copy}", "top", '520px', { fromValue: '520px'}], position: 750, duration: 0 },
            { id: "eid20", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "transform", "${_pointer}", "scaleX", '0.6', { fromValue: '0.6'}], position: 250, duration: 0 },
            { id: "eid459", tween: [ "style", "${_Text4Copy}", "left", '235px', { fromValue: '235px'}], position: 750, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_pointer}", "scaleY", '0.27', { fromValue: '0.27'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "transform", "${_pointer}", "scaleY", '0.3', { fromValue: '0.27'}], position: 250, duration: 0 },
            { id: "eid440", tween: [ "style", "${_Text1Copy}", "width", '189px', { fromValue: '189px'}], position: 0, duration: 0 },
            { id: "eid457", tween: [ "style", "${_Text4Copy}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid458", tween: [ "style", "${_Text4Copy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid437", tween: [ "style", "${_Text1Copy}", "height", '112px', { fromValue: '112px'}], position: 0, duration: 0 },
            { id: "eid23", tween: [ "style", "${_Rectangle}", "left", '68px', { fromValue: '68px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Rectangle}", "left", '93px', { fromValue: '68px'}], position: 250, duration: 0 },
            { id: "eid38", tween: [ "style", "${_Rectangle}", "left", '75px', { fromValue: '93px'}], position: 500, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Rectangle}", "left", '221px', { fromValue: '92px'}], position: 750, duration: 0 },
            { id: "eid64", tween: [ "style", "${_Rectangle}", "left", '320px', { fromValue: '221px'}], position: 1000, duration: 0 },
            { id: "eid89", tween: [ "style", "${_Rectangle}", "left", '230px', { fromValue: '320px'}], position: 1250, duration: 0 },
            { id: "eid108", tween: [ "style", "${_Rectangle}", "left", '126px', { fromValue: '230px'}], position: 1500, duration: 0 },
            { id: "eid118", tween: [ "style", "${_Rectangle}", "left", '449px', { fromValue: '126px'}], position: 1750, duration: 0 },
            { id: "eid211", tween: [ "style", "${_Rectangle}", "left", '478px', { fromValue: '527px'}], position: 2000, duration: 0 },
            { id: "eid220", tween: [ "style", "${_Rectangle}", "left", '615px', { fromValue: '591px'}], position: 2250, duration: 0 },
            { id: "eid488", tween: [ "style", "${_Text7Copy}", "left", '136px', { fromValue: '136px'}], position: 1500, duration: 0 },
            { id: "eid16", tween: [ "style", "${_Rectangle2}", "width", '395px', { fromValue: '395px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_Rectangle2}", "width", '194px', { fromValue: '395px'}], position: 250, duration: 0 },
            { id: "eid31", tween: [ "style", "${_Rectangle2}", "width", '364px', { fromValue: '130px'}], position: 500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Rectangle2}", "width", '87px', { fromValue: '660px'}], position: 750, duration: 0 },
            { id: "eid61", tween: [ "style", "${_Rectangle2}", "width", '84px', { fromValue: '223px'}], position: 1000, duration: 0 },
            { id: "eid87", tween: [ "style", "${_Rectangle2}", "width", '763px', { fromValue: '161px'}], position: 1250, duration: 0 },
            { id: "eid104", tween: [ "style", "${_Rectangle2}", "width", '375px', { fromValue: '105px'}], position: 1500, duration: 0 },
            { id: "eid117", tween: [ "style", "${_Rectangle2}", "width", '381px', { fromValue: '84px'}], position: 1750, duration: 0 },
            { id: "eid203", tween: [ "style", "${_Rectangle2}", "width", '101px', { fromValue: '32px'}], position: 2000, duration: 0 },
            { id: "eid446", tween: [ "style", "${_Text2Copy}", "left", '108px', { fromValue: '108px'}], position: 250, duration: 0 },
            { id: "eid481", tween: [ "style", "${_Text6Copy}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid482", tween: [ "style", "${_Text6Copy}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Rectangle2}", "left", '306px', { fromValue: '306px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Rectangle2}", "left", '326px', { fromValue: '306px'}], position: 250, duration: 0 },
            { id: "eid28", tween: [ "style", "${_Rectangle2}", "left", '322px', { fromValue: '672px'}], position: 500, duration: 0 },
            { id: "eid49", tween: [ "style", "${_Rectangle2}", "left", '461px', { fromValue: '92px'}], position: 750, duration: 0 },
            { id: "eid60", tween: [ "style", "${_Rectangle2}", "left", '320px', { fromValue: '84px'}], position: 1000, duration: 0 },
            { id: "eid85", tween: [ "style", "${_Rectangle2}", "left", '68px', { fromValue: '320px'}], position: 1250, duration: 0 },
            { id: "eid101", tween: [ "style", "${_Rectangle2}", "left", '69px', { fromValue: '814px'}], position: 1500, duration: 0 },
            { id: "eid114", tween: [ "style", "${_Rectangle2}", "left", '449px', { fromValue: '615px'}], position: 1750, duration: 0 },
            { id: "eid201", tween: [ "style", "${_Rectangle2}", "left", '833px', { fromValue: '703px'}], position: 2000, duration: 0 },
            { id: "eid214", tween: [ "style", "${_Rectangle2}", "left", '613px', { fromValue: '837px'}], position: 2250, duration: 0 },
            { id: "eid453", tween: [ "style", "${_Text3Copy}", "left", '89px', { fromValue: '89px'}], position: 500, duration: 0 },
            { id: "eid454", tween: [ "style", "${_Text3Copy}", "left", '103px', { fromValue: '89px'}], position: 750, duration: 0 },
            { id: "eid530", tween: [ "style", "${_Text13Copy}", "left", '493px', { fromValue: '493px'}], position: 2000, duration: 0 },
            { id: "eid15", tween: [ "style", "${_Rectangle2}", "top", '107px', { fromValue: '107px'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Rectangle2}", "top", '139px', { fromValue: '107px'}], position: 250, duration: 0 },
            { id: "eid29", tween: [ "style", "${_Rectangle2}", "top", '185px', { fromValue: '98px'}], position: 500, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Rectangle2}", "top", '557px', { fromValue: '491px'}], position: 750, duration: 0 },
            { id: "eid59", tween: [ "style", "${_Rectangle2}", "top", '555px', { fromValue: '557px'}], position: 1000, duration: 0 },
            { id: "eid86", tween: [ "style", "${_Rectangle2}", "top", '154px', { fromValue: '555px'}], position: 1250, duration: 0 },
            { id: "eid102", tween: [ "style", "${_Rectangle2}", "top", '153px', { fromValue: '456px'}], position: 1500, duration: 0 },
            { id: "eid115", tween: [ "style", "${_Rectangle2}", "top", '148px', { fromValue: '548px'}], position: 1750, duration: 0 },
            { id: "eid202", tween: [ "style", "${_Rectangle2}", "top", '184px', { fromValue: '361px'}], position: 2000, duration: 0 },
            { id: "eid215", tween: [ "style", "${_Rectangle2}", "top", '46px', { fromValue: '185px'}], position: 2250, duration: 0 },
            { id: "eid479", tween: [ "style", "${_Text5Copy}", "width", '177px', { fromValue: '177px'}], position: 1000, duration: 0 },
            { id: "eid22", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 250, duration: 0 },
            { id: "eid37", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '96deg'}], position: 500, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_pointer}", "rotateZ", '450deg', { fromValue: '180deg'}], position: 750, duration: 0 },
            { id: "eid140", tween: [ "transform", "${_pointer}", "rotateZ", '540deg', { fromValue: '450deg'}], position: 1000, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '540deg'}], position: 1250, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '90deg'}], position: 1500, duration: 0 },
            { id: "eid122", tween: [ "transform", "${_pointer}", "rotateZ", '180deg', { fromValue: '180deg'}], position: 1750, duration: 0 },
            { id: "eid205", tween: [ "transform", "${_pointer}", "rotateZ", '90deg', { fromValue: '180deg'}], position: 2000, duration: 0 },
            { id: "eid219", tween: [ "transform", "${_pointer}", "rotateZ", '0deg', { fromValue: '90deg'}], position: 2250, duration: 0 },
            { id: "eid455", tween: [ "style", "${_Text3Copy}", "width", '185px', { fromValue: '185px'}], position: 500, duration: 0 },
            { id: "eid484", tween: [ "style", "${_Text6Copy}", "top", '54px', { fromValue: '54px'}], position: 1250, duration: 0 },
            { id: "eid568", tween: [ "style", "${_HTP_m4_02}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid25", tween: [ "style", "${_Rectangle}", "width", '213px', { fromValue: '213px'}], position: 0, duration: 0 },
            { id: "eid2", tween: [ "style", "${_Rectangle}", "width", '202px', { fromValue: '213px'}], position: 250, duration: 0 },
            { id: "eid76", tween: [ "style", "${_Rectangle}", "width", '214px', { fromValue: '202px'}], position: 500, duration: 0 },
            { id: "eid52", tween: [ "style", "${_Rectangle}", "width", '210px', { fromValue: '265px'}], position: 750, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Rectangle}", "width", '193px', { fromValue: '210px'}], position: 1000, duration: 0 },
            { id: "eid97", tween: [ "style", "${_Rectangle}", "width", '418px', { fromValue: '193px'}], position: 1250, duration: 0 },
            { id: "eid110", tween: [ "style", "${_Rectangle}", "width", '269px', { fromValue: '418px'}], position: 1500, duration: 0 },
            { id: "eid501", tween: [ "style", "${_Rectangle}", "width", '452px', { fromValue: '269px'}], position: 1750, duration: 0 },
            { id: "eid536", tween: [ "style", "${_Rectangle}", "width", '332px', { fromValue: '452px'}], position: 2000, duration: 0 },
            { id: "eid543", tween: [ "style", "${_Rectangle}", "width", '223px', { fromValue: '219px'}], position: 2250, duration: 0 },
            { id: "eid534", tween: [ "style", "${_Text13Copy}", "width", '300px', { fromValue: '300px'}], position: 2000, duration: 0 },
            { id: "eid500", tween: [ "style", "${_Text8Copy}", "width", '432px', { fromValue: '432px'}], position: 1750, duration: 0 },
            { id: "eid442", tween: [ "style", "${_Text2Copy}", "height", '75px', { fromValue: '75px'}], position: 250, duration: 0 },
            { id: "eid475", tween: [ "style", "${_Text5Copy}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid476", tween: [ "style", "${_Text5Copy}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid17", tween: [ "style", "${_Rectangle2}", "height", '493px', { fromValue: '493px'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_Rectangle2}", "height", '28px', { fromValue: '493px'}], position: 250, duration: 0 },
            { id: "eid30", tween: [ "style", "${_Rectangle2}", "height", '362px', { fromValue: '253px'}], position: 500, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '39px'}], position: 750, duration: 0 },
            { id: "eid62", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '138px'}], position: 1000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_Rectangle2}", "height", '402px', { fromValue: '31px'}], position: 1250, duration: 0 },
            { id: "eid103", tween: [ "style", "${_Rectangle2}", "height", '404px', { fromValue: '299px'}], position: 1500, duration: 0 },
            { id: "eid116", tween: [ "style", "${_Rectangle2}", "height", '412px', { fromValue: '33px'}], position: 1750, duration: 0 },
            { id: "eid204", tween: [ "style", "${_Rectangle2}", "height", '292px', { fromValue: '32px'}], position: 2000, duration: 0 },
            { id: "eid216", tween: [ "style", "${_Rectangle2}", "height", '31px', { fromValue: '291px'}], position: 2250, duration: 0 },
            { id: "eid448", tween: [ "style", "${_Text3Copy}", "top", '195px', { fromValue: '195px'}], position: 500, duration: 0 },
            { id: "eid449", tween: [ "style", "${_Text3Copy}", "top", '292px', { fromValue: '195px'}], position: 750, duration: 0 },
            { id: "eid537", tween: [ "style", "${_Text14}", "top", '126px', { fromValue: '126px'}], position: 2250, duration: 0 },
            { id: "eid19", tween: [ "style", "${_pointer}", "top", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_pointer}", "top", '50px', { fromValue: '33px'}], position: 250, duration: 0 },
            { id: "eid33", tween: [ "style", "${_pointer}", "top", '112px', { fromValue: '352px'}], position: 500, duration: 0 },
            { id: "eid55", tween: [ "style", "${_pointer}", "top", '475px', { fromValue: '279px'}], position: 750, duration: 0 },
            { id: "eid66", tween: [ "style", "${_pointer}", "top", '421px', { fromValue: '475px'}], position: 1000, duration: 0 },
            { id: "eid92", tween: [ "style", "${_pointer}", "top", '20px', { fromValue: '421px'}], position: 1250, duration: 0 },
            { id: "eid106", tween: [ "style", "${_pointer}", "top", '15px', { fromValue: '20px'}], position: 1500, duration: 0 },
            { id: "eid120", tween: [ "style", "${_pointer}", "top", '18px', { fromValue: '15px'}], position: 1750, duration: 0 },
            { id: "eid200", tween: [ "style", "${_pointer}", "top", '120px', { fromValue: '229px'}], position: 2000, duration: 0 },
            { id: "eid218", tween: [ "style", "${_pointer}", "top", '13px', { fromValue: '120px'}], position: 2250, duration: 0 },
            { id: "eid494", tween: [ "style", "${_Text8Copy}", "left", '460px', { fromValue: '460px'}], position: 1750, duration: 0 },
            { id: "eid495", tween: [ "style", "${_Text8Copy}", "left", '565px', { fromValue: '460px'}], position: 2000, duration: 0 },
            { id: "eid496", tween: [ "style", "${_Text8Copy}", "left", '629px', { fromValue: '565px'}], position: 2250, duration: 0 },
            { id: "eid450", tween: [ "style", "${_Text3Copy}", "height", '119px', { fromValue: '119px'}], position: 500, duration: 0 },
            { id: "eid478", tween: [ "style", "${_Text5Copy}", "left", '330px', { fromValue: '330px'}], position: 1000, duration: 0 },
            { id: "eid489", tween: [ "style", "${_Text7Copy}", "top", '62px', { fromValue: '62px'}], position: 1500, duration: 0 },
            { id: "eid535", tween: [ "style", "${_Text13Copy}", "height", '277px', { fromValue: '277px'}], position: 2000, duration: 0 },
            { id: "eid443", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid444", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid445", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid133", tween: [ "style", "${_btn_back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_btn_back}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid451", tween: [ "style", "${_Text3Copy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid452", tween: [ "style", "${_Text3Copy}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid533", tween: [ "style", "${_Text13Copy}", "top", '200px', { fromValue: '200px'}], position: 2000, duration: 0 },
            { id: "eid24", tween: [ "style", "${_Rectangle}", "top", '107px', { fromValue: '107px'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Rectangle}", "top", '128px', { fromValue: '107px'}], position: 250, duration: 0 },
            { id: "eid32", tween: [ "style", "${_Rectangle}", "top", '185px', { fromValue: '454px'}], position: 500, duration: 0 },
            { id: "eid51", tween: [ "style", "${_Rectangle}", "top", '507px', { fromValue: '302px'}], position: 750, duration: 0 },
            { id: "eid63", tween: [ "style", "${_Rectangle}", "top", '424px', { fromValue: '507px'}], position: 1000, duration: 0 },
            { id: "eid90", tween: [ "style", "${_Rectangle}", "top", '50px', { fromValue: '424px'}], position: 1250, duration: 0 },
            { id: "eid109", tween: [ "style", "${_Rectangle}", "top", '51px', { fromValue: '50px'}], position: 1500, duration: 0 },
            { id: "eid119", tween: [ "style", "${_Rectangle}", "top", '50px', { fromValue: '51px'}], position: 1750, duration: 0 },
            { id: "eid212", tween: [ "style", "${_Rectangle}", "top", '186px', { fromValue: '157px'}], position: 2000, duration: 0 },
            { id: "eid221", tween: [ "style", "${_Rectangle}", "top", '117px', { fromValue: '186px'}], position: 2250, duration: 0 },
            { id: "eid480", tween: [ "style", "${_Text6Copy}", "height", '74px', { fromValue: '74px'}], position: 1250, duration: 0 },
            { id: "eid438", tween: [ "style", "${_Text1Copy}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid497", tween: [ "style", "${_Text8Copy}", "top", '59px', { fromValue: '59px'}], position: 1750, duration: 0 },
            { id: "eid498", tween: [ "style", "${_Text8Copy}", "top", '138px', { fromValue: '59px'}], position: 2000, duration: 0 },
            { id: "eid499", tween: [ "style", "${_Text8Copy}", "top", '126px', { fromValue: '138px'}], position: 2250, duration: 0 },
            { id: "eid441", tween: [ "style", "${_Text2Copy}", "top", '136px', { fromValue: '136px'}], position: 250, duration: 0 },
            { id: "eid447", tween: [ "style", "${_Text2Copy}", "width", '173px', { fromValue: '173px'}], position: 250, duration: 0 },
            { id: "eid490", tween: [ "style", "${_Text7Copy}", "width", '248px', { fromValue: '248px'}], position: 1500, duration: 0 },
            { id: "eid491", tween: [ "style", "${_Text8Copy}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid492", tween: [ "style", "${_Text8Copy}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid26", tween: [ "style", "${_Rectangle}", "height", '132px', { fromValue: '132px'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_Rectangle}", "height", '122px', { fromValue: '132px'}], position: 250, duration: 0 },
            { id: "eid456", tween: [ "style", "${_Rectangle}", "height", '144px', { fromValue: '122px'}], position: 500, duration: 0 },
            { id: "eid53", tween: [ "style", "${_Rectangle}", "height", '107px', { fromValue: '133px'}], position: 750, duration: 0 },
            { id: "eid82", tween: [ "style", "${_Rectangle}", "height", '102px', { fromValue: '107px'}], position: 1000, duration: 0 },
            { id: "eid98", tween: [ "style", "${_Rectangle}", "height", '83px', { fromValue: '102px'}], position: 1250, duration: 0 },
            { id: "eid111", tween: [ "style", "${_Rectangle}", "height", '80px', { fromValue: '83px'}], position: 1500, duration: 0 },
            { id: "eid123", tween: [ "style", "${_Rectangle}", "height", '72px', { fromValue: '80px'}], position: 1750, duration: 0 },
            { id: "eid569", tween: [ "style", "${_Rectangle}", "height", '328px', { fromValue: '72px'}], position: 2000, duration: 0 },
            { id: "eid541", tween: [ "style", "${_Rectangle}", "height", '135px', { fromValue: '328px'}], position: 2250, duration: 0 },
            { id: "eid493", tween: [ "style", "${_Text8Copy}", "height", '57px', { fromValue: '57px'}], position: 1750, duration: 0 },
            { id: "eid483", tween: [ "style", "${_Text6Copy}", "left", '242px', { fromValue: '242px'}], position: 1250, duration: 0 },
            { id: "eid486", tween: [ "style", "${_Text7Copy}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid487", tween: [ "style", "${_Text7Copy}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid531", tween: [ "style", "${_Text13Copy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid570", tween: [ "style", "${_Text13Copy}", "display", 'none', { fromValue: 'block'}], position: 2250, duration: 0 },
            { id: "eid485", tween: [ "style", "${_Text6Copy}", "width", '399px', { fromValue: '399px'}], position: 1250, duration: 0 },
            { id: "eid172", tween: [ "style", "${_HTP_m4b}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid477", tween: [ "style", "${_Text5Copy}", "top", '437px', { fromValue: '437px'}], position: 1000, duration: 0 },
            { id: "eid223", tween: [ "style", "${_Text14}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "HowToPlay");
