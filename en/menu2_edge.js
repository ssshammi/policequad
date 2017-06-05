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
            id:'menu_bg',
            type:'image',
            rect:['0px','0px','1014px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"menu_bg.jpg",'0px','0px']
         },
         {
            id:'menu_btn_1',
            type:'rect',
            rect:['111px','71','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'menu_btn_2',
            type:'rect',
            rect:['307','71','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'menu_btn_3',
            type:'rect',
            rect:['689','286','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'menu_btn_4',
            type:'rect',
            rect:['866','393','auto','auto','auto','auto'],
            opacity:1
         },
         {
            id:'btn_LAUNCH1',
            type:'rect',
            rect:['163px','562','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCH',
            type:'rect',
            rect:['359px','562','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCHCopy',
            type:'rect',
            rect:['559px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            opacity:1,
            userClass:"btnClickSPL mainStorySND"
         },
         {
            id:'btn_LAUNCHCopy2',
            type:'rect',
            rect:['759px','562px','auto','auto','auto','auto'],
            cursor:['pointer'],
            userClass:"btnClickSPL mainStorySND"
         }],
         symbolInstances: [
         {
            id:'menu_btn_1',
            symbolName:'menu_btn_1'
         },
         {
            id:'btn_LAUNCHCopy2',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'btn_LAUNCHCopy',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'btn_LAUNCH1',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'menu_btn_3',
            symbolName:'menu_btn_3'
         },
         {
            id:'menu_btn_2',
            symbolName:'menu_btn_2'
         },
         {
            id:'btn_LAUNCH',
            symbolName:'btn_LAUNCH'
         },
         {
            id:'menu_btn_4',
            symbolName:'menu_btn_4'
         }
         ]
      },
   states: {
      "Base State": {
         "${_menu_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_btn_LAUNCH1}": [
            ["style", "top", '562px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '163px']
         ],
         "${_btn_LAUNCHCopy2}": [
            ["style", "top", '562px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '759px']
         ],
         "${_menu_btn_1}": [
            ["style", "top", '71px'],
            ["style", "opacity", '1'],
            ["style", "left", '111px']
         ],
         "${_btn_LAUNCHCopy}": [
            ["style", "top", '562px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '559px']
         ],
         "${_btn_LAUNCH}": [
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "top", '562px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '650px'],
            ["style", "width", '1014px']
         ],
         "${_menu_btn_4}": [
            ["style", "top", '71px'],
            ["style", "opacity", '1'],
            ["style", "left", '708px']
         ],
         "${_menu_btn_3}": [
            ["style", "top", '71px'],
            ["style", "opacity", '1'],
            ["style", "left", '507px']
         ],
         "${_menu_btn_2}": [
            ["style", "top", '71px'],
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
         ]
      }
   }
},
"btn_LAUNCH": {
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
      rect: ['-32px','-473px','172px','490px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,0.00)']
   },
   {
      id: 'btn_LAUNCH_up',
      type: 'image',
      rect: ['0px','0px','109px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_LAUNCH_up.png','0px','0px']
   },
   {
      rect: ['21px','7px','auto','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text6',
      text: 'LAUNCH',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '7px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '21px'],
            ["style", "font-size", '16px']
         ],
         "${_Rectangle}": [
            ["style", "height", '490px'],
            ["color", "background-color", 'rgba(192,192,192,0.00)']
         ],
         "${_btn_LAUNCH_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '109px']
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
"menu_btn_4": {
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
      id: 'menu_button_bg',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button_bg.png','0px','0px']
   },
   {
      rect: ['50px','403px','114px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'PORTAL PLAY',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4',
      text: '4',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','21px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy',
      text: 'th',
      align: 'center',
      type: 'text'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[0,0],['90']],
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      rect: ['137px','70px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "width", '114px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "font-size", '28px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '16px'],
            ["style", "left", '166px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
         ],
         "${_Text4}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
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
"menu_btn_3": {
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
      id: 'menu_button_bg',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button3_up.png','0px','0px']
   },
   {
      rect: ['50px','403px','114px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'SECRET AGENT',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4',
      text: '3',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','21px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy',
      text: 'rd',
      align: 'center',
      type: 'text'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[0,0],['90']],
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      rect: ['137px','70px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button_bg}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '28px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '114px']
         ],
         "${_Text4}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '19px'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '13px'],
            ["style", "left", '166px'],
            ["style", "font-size", '16px']
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
"menu_btn_2": {
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
      id: 'menu_button2_up',
      type: 'image',
      rect: ['0px','0px','213px','529px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button2_up.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['50px','403px','114px','auto','auto','auto'],
      id: 'Text3',
      text: 'WATER ROBBERS',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['151px','19px','13px','auto','auto','auto'],
      id: 'Text4Copy3',
      text: '2',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['166px','21px','13px','auto','auto','auto'],
      id: 'Text4Copy2',
      text: 'nd',
      align: 'center',
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal']
   },
   {
      rect: ['137px','70px','auto','auto','auto','auto'],
      transform: [[0,0],['90']],
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button2_up}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '28px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "width", '114px']
         ],
         "${_Text4Copy2}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '13px'],
            ["style", "left", '166px'],
            ["style", "font-size", '16px']
         ],
         "${_Text4Copy3}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '19px'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
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
"menu_btn_1": {
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
      id: 'menu_button1_up',
      type: 'image',
      rect: ['1px','1px','212px','528px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/menu_button1_up.png','0px','0px']
   },
   {
      rect: ['50px','403px','114px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'Text3',
      text: 'CRYSTAL CASE',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['151px','19px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',28,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4',
      text: '1',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','21px','13px','auto','auto','auto'],
      font: ['Tahoma, Geneva, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'Text4Copy',
      text: 'st',
      align: 'center',
      type: 'text'
   },
   {
      font: ['Tahoma, Geneva, sans-serif',19,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      transform: [[0,0],['90']],
      id: 'Text5',
      text: 'MISSION',
      align: 'center',
      rect: ['137px','70px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_menu_button1_up}": [
            ["style", "left", '1px'],
            ["style", "top", '1px']
         ],
         "${symbolSelector}": [
            ["style", "height", '529px'],
            ["style", "width", '213px']
         ],
         "${_Text3}": [
            ["style", "top", '403px'],
            ["style", "text-align", 'center'],
            ["style", "width", '114px'],
            ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
            ["style", "left", '50px'],
            ["style", "font-size", '28px']
         ],
         "${_Text4Copy}": [
            ["style", "top", '21px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '16px'],
            ["style", "left", '166px'],
            ["style", "width", '13px']
         ],
         "${_Text5}": [
            ["style", "top", '70px'],
            ["transform", "rotateZ", '90deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '137px'],
            ["style", "font-size", '19px']
         ],
         "${_Text4}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '151px'],
            ["style", "width", '13px']
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
})(jQuery, AdobeEdge, "book2");
