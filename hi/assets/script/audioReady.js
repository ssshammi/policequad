var $j= jQuery.noConflict(); 
	
var backgroundtrack;
var popup;
var alertSd;
backgroundPlaying = false;

	backgroundSND = new Howl({
				  src: ["assets/audio/intro Splash Loop.mp3","assets/audio/intro Splash Loop.ogg"],			
				  loop: true,
				  autoplay: false,
				  onload: function() {	
						
					},
					onplay:function() {
						backgroundPlaying = true;	
					},
					volume: 0.6

				});
	popupSND = new Howl({
				  src: ["assets/audio/Mission appear.mp3","assets/audio/Mission appear.ogg"],			
				  loop: false,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 1

				});
	mainStorySND = new Howl({
			  src: ["assets/audio/Misson 2_SB_BG.mp3","assets/audio/Misson 2_SB_BG.ogg"],			
			  loop: true,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.6

			});			
				
				
	btnClick = new Howl({
				  src: ["assets/audio/button_click_normal.mp3","assets/audio/button_click_normal.ogg"],			
				  loop: false,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.6

				});
	btnClickSPL = new Howl({
				  src: ["assets/audio/button_click_special.mp3","assets/audio/button_click_special.ogg"],			
				  loop: false,
				  autoplay: false,
				  onload: function() {					
					},
					volume: 0.8

				});
				
	
	mainSND = new Howl({
			  src: ["assets/audio/Misson 2_Game play _BG.mp3","assets/audio/Misson 2_Game play _BG.ogg"],			
			  loop: true,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.4

			});
			
			
			roboDK = new Howl({
			  src: ["assets/audio/Misson 2_ROBO_DK.mp3","assets/audio/Misson 2_ROBO_DK.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.8

			});
			roboYes = new Howl({
			  src: ["assets/audio/Misson 2_Robo_Yes.mp3","assets/audio/Misson 2_Robo_Yes.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.8

			});
			roboNo = new Howl({
			  src: ["assets/audio/Misson 2_ROBO_no.mp3","assets/audio/Misson 2_ROBO_no.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 0.8

			});
			
			coinUP = new Howl({
			  src: ["assets/audio/coinup.mp3","assets/audio/coinup.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 1

			});
			
			assessment_negative = new Howl({
			  src: ["assets/audio/assessment_negative.mp3","assets/audio/assessment_negative.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 1

			});
			
			assessment_positive = new Howl({
			  src: ["assets/audio/assessment_positive.mp3","assets/audio/assessment_positive.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 1
			});
			
			incorrectRelease = new Howl({
			  src: ["assets/audio/incorrectRelease.mp3","assets/audio/incorrectRelease.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 1
			});
			
			correctRelease = new Howl({
			  src: ["assets/audio/correctRelease.mp3","assets/audio/correctRelease.ogg"],			
			  loop: false,
			  autoplay: false,
			  onload: function() {				
				},
			volume: 1
			});
var HyperlinksClicked =[];			
var ToolsClicked =[];			
	//button_click_normal.mp3
	//button_click_special.mp3
	//intro Splash Loop.mp3
	//Misson 2_SB_BG.mp3
	//Mission appear.mp3
	//Misson 2_Game play _BG.mp3
	
var clickEventType= ((document.ontouchstart!==null)?'click':'click');
$j( document ).ready(function() {
				/* $j("#splash").bind(clickEventType,function() { 				
						if(!backgroundPlaying)
						backgroundtrack.play();	
				});  */
			
				$j("#audio_btn").bind(clickEventType,function() {	
					$j(this).toggleClass('activated');
					if($j(this).hasClass('activated')){					
						
							Howler.mute(true);				
						}
					else{
						Howler.mute(false);		
											
					}					
				}); 

				
	
$j("#audio_btn").bind("mouseover",mouseover); 
$j("#help_btn").bind("mouseover",mouseover); 
$j("#audio_btn").bind("mouseout",mouseout);  	
$j("#help_btn").bind("mouseout",mouseout);

$j("#gloss_btn").bind("mouseover",mouseover); 
$j("#menu_btn").bind("mouseover",mouseover); 
$j("#gloss_btn").bind("mouseout",mouseout);  	
$j("#menu_btn").bind("mouseout",mouseout);


/* jQuery('#gloss_btn').click(function() {
			
	});  */
jQuery('#menu_btn').click(function() {
			alertify.set({ labels: {ok: "हाँ",cancel : "नहीं"}  });//,onok:
			alertify.confirm("क्या आप सचमुच वर्तमान केस छोड़कर मेनू स्क्रीन पर जाना चाहते हैं?", function(e){ 
			if (e) {
				isBonus =1;
			backgroundSND.stop();
			mainSND.stop();
			mainStorySND.stop();
			hideOtherMenu()
			hideAllScreens();
			jQuery('#book').show();
			}else{
				
			}
			});
			
	}); 
	//jQuery('.backBtn1').hide();
jQuery('#help_btn').click(function() {
	$j("#HowToPlay").show()
	var liveID = $j(".currentLive:visible").attr("liveID");
	helpScreen[liveID] =1;
			jQuery(".howtoPlay").hide();  jQuery(".howtoPlay:eq("+liveID+")").show();	
	}); 


});
		function mouseover() {$j(this).addClass('hover');}
	function mouseout() {$j(this).removeClass('hover');}		
	
			function enableSoundsEff(){
				$j(".btnCLICKsnd,.btnClick").bind(clickEventType,function() {	
					StorySkiped =true;
					btnClick.play();	
							//alert("dsfsd");
				}); 	
				$j(".btnCLICKsnd2").bind(clickEventType,function() {	
					btnClickSPL.play();	
							
				}); 
				$j(".mainStorySND").bind(clickEventType,function() {	
					mainStorySND.play();	
							
				}); 
				$j(".mainSND").bind(clickEventType,function() {	
					mainStorySND.stop();	
					mainSND.play();		
				}); 
				/* $j(".cont_btn").bind(clickEventType,function() {
					btnClickSPL.play();					
					mainStorySND.stop();	
					mainSND.stop();
					mainStorySND.play();						
				}); */
			}
				
	function transisitions(){
					btnClickSPL.play();					
					mainStorySND.stop();	
					mainSND.stop();
					mainStorySND.play();
	}
	
	function transisitions2(){
		
	}
	