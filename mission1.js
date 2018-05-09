function Mission1(){
$j("#gloss_btn,#help_btn,#menu_btn").show(); startTimerlvl();
mission1();
}
var CurrentMission1 ="#mission1 ";
var hintString = "";
var CurrentClue = false;
var CurrentSet1 = [];
var currentCulpret ="fig001";

var currentstage = 1;

var MaxScore1 =[80,80,80,200,200,200,300,300,300];
var coinsStack1 =[3,3,3,5,5,5,5,5,5];
var coinsGStack1 =[50,50,50,100,100,100,150,150,150];
var coinsValue1 =[10,10,10,20,20,20,30,30,30];
var showShapes1 = [4,4,4,6,6,6,6,6,6];

var coinsImg1 =["url(images/coin10.png)","url(images/coin10.png)","url(images/coin10.png)","url(images/coin20.png)","url(images/coin20.png)","url(images/coin20.png)","url(images/coin30.png)","url(images/coin30.png)","url(images/coin30.png)"];
var coinsImg2 =["url(images/coin50_green.png)","url(images/coin50_green.png)","url(images/coin50_green.png)","url(images/coin100_green.png)","url(images/coin100_green.png)","url(images/coin100_green.png)","url(images/coin150.png)","url(images/coin150.png)","url(images/coin150.png)"];
function mission1(){	playedMission[(0)] =1; jQuery(".mmenu:eq(0)").show();
	startMission1();
mission1Enable();

	/* $j(CurrentMission1+".questionText").on('DOMNodeInserted', function(e) {
    if ($j(e.target).is('.example-image-link')) { console.log("camein");
       $j(e.target).featherlight({ });;
		}
	}); */
//GeneratingShapes();
}

var currentLevelDisplay1=[1,1,1,2,2,2,3,3,3,3];
function startMission1(){ 
	CurrentClue = false;
	hintString = "";
	isMatched = false;
	stageCoins = coinsStack1[currentstage-1];
	$j(".mission1 .coin:gt("+(stageCoins-1)+")").hide();
	currentScore =MaxScore1[currentstage-1];
	$j(".mission1 .coin:eq(7)").show();
	$j(".mission1 .coin:lt(7)").css("background-image",coinsImg1[currentstage-1]);
	$j(".mission1 .coin:eq(7)").css("background-image",coinsImg2[currentstage-1]);
	
	 $j(".feed:eq(0) .coinToken:eq(0)").css("background-image",coinsImg2[currentstage-1]);
	 $j(".feed:eq(0) .coinToken:eq(1)").css("background-image",coinsImg1[currentstage-1]);
	if(isBonus==1){
		$j(".mission1 .coin:eq(7)").show();
	}else{
		$j(".mission1 .coin:eq(7)").hide();
		currentScore = currentScore- $j(".mission1 .coin:eq(7)").prop("coinVal");
		$j(".scoretxt").html(currentScore);
	}
		$j(".recte").hide();
$("#book").hide();
$("#feedback").hide();
$("#trans1").hide();
$j(".mission").html("MISSION 1");
//$j(".level").html("LEVEL "+currentstage);
$j(".level").html("LEVEL "+currentLevelDisplay1[currentstage-1]);
	$j(".star").html(" "+ gameScore);
$j(".scoretxt").html(currentScore);
	$j('.Temptool').hide();
	//$j('.ask').hide();
$("#mission1").fadeIn("slow");
CalScore1();
		if(isBonus !=0){
			GeneratingShapes();
		}else{
		duplicateCode();
		}
}

function equalMarkerEffect(ttThis){
var timeout;
	//$j(CurrentMission1+'.recte path, '+CurrentMission1+'.recte line').hover(function(){
	ttThis.find('path').hover(function(){
    clearTimeout(timeout);
    //console.log("came");
    $this = $j(this).parent();//find('svg');

    timeout = setTimeout(function(){
        $this.css("-webkit-transition", "all 2s ease-in-out");
       // $this.addClass('grow');
			//$this.css("transform","scale(1.22)");
	      //$this.css("-webkit-transform","scale(1.22)");
		   // $this.find('path').css("-webkit-transform","scale(0.83)");
			// $this.find('path').css("transform","scale(0.83)");
	      $this.find('path').css("stroke-width","7px");
	      $this.find('path').css("stroke-opacity","1");
		  $this.find('line').css("stroke-width","7px");
	      $this.find('line').css("stroke-opacity","1");
    }, 100);
}, function(){
    clearTimeout(timeout);
    $j(this).css("-webkit-transition", "all 0.5s ease-in-out");
	    //$this.css("transform","scale(1)");
	    //  $this.css("-webkit-transform","scale(1)");
		 // $this.find('path').css("-webkit-transform","scale(1)");
		//	 $this.find('path').css("transform","scale(1)");
	      $this.find('path').css("stroke-width","12px");
	      $this.find('path').css("stroke-opacity","0.1");
		   $this.find('line').css("stroke-width","12px");
	      $this.find('line').css("stroke-opacity","0.1");
   // $j(this).removeClass('grow');
});
ttThis.find('line').hover(function(){
    clearTimeout(timeout);
    console.log("came");
    $this = $j(this).parent();//find('svg');

    timeout = setTimeout(function(){
        $this.css("-webkit-transition", "all 2s ease-in-out");
       // $this.addClass('grow');
			//$this.css("transform","scale(1.22)");
	      //$this.css("-webkit-transform","scale(1.22)");
		   // $this.find('path').css("-webkit-transform","scale(0.83)");
			// $this.find('path').css("transform","scale(0.83)");
	      $this.find('path').css("stroke-width","7px");
	      $this.find('path').css("stroke-opacity","1");
		  $this.find('line').css("stroke-width","7px");
	      $this.find('line').css("stroke-opacity","1");
    }, 10);
}, function(){
    clearTimeout(timeout);
    $j(this).css("-webkit-transition", "all 0.5s ease-in-out");
	    //$this.css("transform","scale(1)");
	    //  $this.css("-webkit-transform","scale(1)");
		 // $this.find('path').css("-webkit-transform","scale(1)");
		//	 $this.find('path').css("transform","scale(1)");
	      $this.find('path').css("stroke-width","12px");
	      $this.find('path').css("stroke-opacity","0.1");
		   $this.find('line').css("stroke-width","12px");
	      $this.find('line').css("stroke-opacity","0.1");
   // $j(this).removeClass('grow');
});

}

	function CalScore1(){
			$j(CurrentMission1+".coin").prop("coinVal", coinsValue1[currentstage-1]);
			$j(CurrentMission1+".coin:eq(7)").prop("coinVal", coinsGStack1[currentstage-1]);
	}
function getdata1(){
var figures =[];
var clues =[];
var errors =[];
$j(CurrentMission1+' .rect').each(function (index){ figures.push( $(this).parent().prop("fig"));});
$j(CurrentMission1+' .questionText').each(function (index){ clues.push( $(this).text());});
$j(CurrentMission1+' .questionResponse').each(function (index){ errors.push( $(this).text());});
return [mainClue,figures,clues,errors];
}
	
//Added by Abhishek Shrimali
	var previousShapeType = 0;
	var previousShapeTypeCount = [];
	var actualAllowedClueCount = 0;
//Added by Abhishek Shrimali	
function mission1Enable(){
$j(CurrentMission1+'.reset').click(function() { 	 replayCount ++;
			 //alertify.alert('Reset is WIP');
				isBonus=0;
				resetLevel1();
			 });
jQuery(".feed:eq(0) .cont_btn").click(function() {  var hasB =isBonus; $j("#gloss_btn,#help_btn,#menu_btn").hide();isBonus=1;
	if(currentScore>highScore)
		highScore = currentScore;
		$j(".scoretxt2").html(highScore);
		if(isMatched){ 
		stageEnd( "Mission 1", currentstage,replayCount,"passed",getdata1(),currentScore,hasB);
		currentstage++;
			isBonus=1;
		/* resetLevel();
		mission2(); */
		 if(currentstage == 10 ){ currentstage = 9;
		$j('.trans1').hide();
		$j(".feedback").hide("slide", function() {
			jQuery(".end1").hide();
			jQuery(".end1:eq(0)").show();			
			$j('.end2').show("slide"); completedMission[0] =1;
			transisitions();
		});
		return;
		
		} 
		$j(".feedback").hide("slide", function() {
			if(currentstage==7){$j('.trans1 .lvlScreen:eq(1)').hide();$j('.trans1 .lvlScreen:eq(0)').show();$j('.trans1').show("slide");
			transisitions();
			}
			else if(currentstage==4){$j('.trans1 .lvlScreen:eq(0)').hide();$j('.trans1 .lvlScreen:eq(1)').show();$j('.trans1').show("slide");
			transisitions();
			}
			else resetLevel1();
		});
		}else{ 
		stageEnd( "Mission 1", currentstage,replayCount,"failed",getdata1(),currentScore,hasB);
		resetLevel1();
		//resetLevel();
		//mission2();
		$j(".feedback").hide("slide");
		}
		
	});
		$j(CurrentMission1+".ToolMain").hide();
	$j(CurrentMission1+".ToolMain2").hide();
	
/* 	jQuery(CurrentMission1+".toolA").click(function() { 
	$j(CurrentMission1+".toolb").hide();
	}); */
	jQuery(CurrentMission1+".tool:eq(2)").click(function() { $j(".recte").hide();
	if($j(this).hasClass('active')){$j(this).removeClass('active');
	$j(CurrentMission1+".ToolMain").freetrans('destroy');
	
	$j(CurrentMission1+".ToolMain").hide();
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	return;}
	jQuery(CurrentMission1+".toolA").trigger("click");
	$j(CurrentMission1+".ToolMain:visible").freetrans('destroy');
$j(CurrentMission1+".ToolMain2:visible").freetrans('destroy');
	$j(CurrentMission1+".ToolMain").hide();
		$j(CurrentMission1+".ToolMain2").hide();
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active'); pushtoolsClicked("Right Angle tool");
	$j(CurrentMission1+".ToolMain").show();
	$j(CurrentMission1+".ToolMain").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%'});
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	
	});
	jQuery(CurrentMission1+".tool:eq(1)").click(function() { 
	jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool2_selected.png)');
	$j(CurrentMission1+".toolb").show();
	
	});
	jQuery(CurrentMission1+".tool:eq(0)").click(function() { $j(".recte").show();
	//replace here 
	
	if($j(this).hasClass('active')){
	$j(this).removeClass('active');	$j(".recte").hide();
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
	});
	return;
	}
		jQuery(CurrentMission1+".toolA").trigger("click");
		$j(CurrentMission1+".ToolMain:visible").freetrans('destroy');
		$j(CurrentMission1+".ToolMain2:visible").freetrans('destroy');
		$j(CurrentMission1+".ToolMain").hide();
		$j(CurrentMission1+".ToolMain2").hide();

	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active');  pushtoolsClicked("Equal Sides tool");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	
	$j(CurrentMission1+'.rect').each(function (){
	 var imagePath = $j(this).css("background-image").replace(pathURL,"");
	/*var filePathExit =imagePath.substring(imagePath.indexOf("shapes/"),imagePath.indexOf(".")),"_tool1c";
	var pathIS ="_normal";
	$j.ajax({
    url:filePathExit,
    type:'HEAD',
    error: function()
    {
        pathIS = "_normal"
    },
    success: function()
    {
		 pathIS = "_tool1c"
       //  console.log("file exists");
    }

	//tool1B
	}); */
	//var weHaveSomeshapes ="_tool1c" :"_normal";
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool1c"));//tool1B
	}
	
	
	);
	

	});
	
	jQuery(CurrentMission1+".tool:eq(1)").click(function() { $j(".recte").hide();
	//replace here 
	
	if($j(this).hasClass('active')){
	$j(CurrentMission1+".ToolMain2").freetrans('destroy');
	
	$j(CurrentMission1+".ToolMain2").hide();
	$j(this).removeClass('active');	
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
	});
	return;
	}


	jQuery(CurrentMission1+".toolA").trigger("click");
	$j(CurrentMission1+".ToolMain:visible").freetrans('destroy');
$j(CurrentMission1+".ToolMain2:visible").freetrans('destroy');
		$j(CurrentMission1+".ToolMain").hide();
		$j(CurrentMission1+".ToolMain2").show();

	$j(CurrentMission1+".ToolMain2").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%','maintainAspectRatio':false});
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");

	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(this).addClass('active'); pushtoolsClicked("Parallel Lines tool");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");
	
	//$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool3"));
	}
	
	
	);
	
	
	});
	
	/* jQuery(CurrentMission1+".tool2:eq(3)").click(function() { 	jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool2D_selected.png)');
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});	
	$j('.rect').each(function (){
		var imagePath = $j(this).css("background-image").replace(pathURL,"");	
		$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2D"));
	});	
	});
	jQuery(CurrentMission1+".tool2:eq(0)").click(function() { 	jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool1A_selected.png)');
	jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});	
	$j(CurrentMission1+'.rect').each(function (){
		var imagePath = $j(this).css("background-image").replace(pathURL,"");	
		$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2A"));
	});	
	});
	jQuery(CurrentMission1+".tool2:eq(1)").click(function() { 		jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool1B_selected.png)');
		jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2B"));
	});	
	});
	jQuery(CurrentMission1+".tool2:eq(2)").click(function() { 		jQuery(CurrentMission1+".toolA").css('background-image','url(images/tool1C_selected.png)');
		jQuery(CurrentMission1+".tool:lt(3)").each(function(){
	$j(this).removeClass("active");
	var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
	$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
	});
	$j(CurrentMission1+'.rect').each(function (){
	var imagePath = $j(this).css("background-image").replace(pathURL,"");	
	$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2C"));
	});	
	}); */ 
	$j(CurrentMission1+'.cluetext').html("Clue Panel");
	$j(CurrentMission1 +'.ask').show();
	$j(CurrentMission1 +'.ask').on('click', function() {
	// if no released then 
	if(ReleasedOut.length<FlushedOut.length){ $j(CurrentMission1 +'.ask').hide();
		/* alertify.set({ labels: {ok: "Cancel", cancel : "Yes"}  });
		alertify.confirm("Are you sure you want next clue?", function(e){ 
			if (e) {
					//ReleasedOut[ReleasedOut.length] ="none";
					//$j(CurrentMission1 +'.ask').trigger("click");
					return ;
			}else{
				// do nothing
					ReleasedOut[ReleasedOut.length] ="none";
					//$j(CurrentMission1+'.questionResponse:eq(0)').html("Skip");
					var colorCorrect= "rgb(255, 214, 0)";
					$j(CurrentMission1+'.questionResponse:eq(0)').css("color",colorCorrect);
					$j('.feed:eq(0) .feedbackStatment:eq(0) ').find('.spot').css("background-color",colorCorrect);
					if(isBonus==1){
						$j(CurrentMission1+" .coin:eq(7)").effect( "explode", {}, 500, callbackPuff1 );
						isBonus=0;
					}else{
					    $j(CurrentMission1+" .coin:eq("+--stageCoins+")").effect( "explode", {}, 500, callbackPuff1 ); 	
					}
					
					alertify.error('Token Lost no suspect(s) released.' );
					$j(CurrentMission1 +'.ask').trigger("click");
					return;
				
			}
		}); */		ReleasedOut[ReleasedOut.length] ="none";
					$j(CurrentMission1+'.questionResponse:eq(0)').html("Skip");
					//var colorCorrect= "rgb(255, 214, 0)";
					//$j(CurrentMission1 +'.ask').off();
					var colorCorrect= "rgb(248, 13, 13)";
					$j(CurrentMission1+'.questionResponse:eq(0)').css("color",colorCorrect);
					$j('.feed:eq(0) .feedbackStatment:eq(0) ').find('.spot').css("background-color",colorCorrect);
					if(currentScore > coinsValue1[currentstage-1]){
					if(isBonus==1){
						$j(CurrentMission1+" .coin:eq(7)").effect( "explode", {}, 500, callbackPuff1 );
						isBonus=0;
					}else{
					    $j(CurrentMission1+" .coin:eq("+--stageCoins+")").effect( "explode", {}, 500, callbackPuff1 ); 	
					}
					
					alertify.error('Token Lost no suspect(s) released.' );
					}
					
					$j(CurrentMission1 +'.ask').trigger("click");
				setTimeout(function(){$j(CurrentMission1 +'.ask').show();}, 600);
		return;
		} 
	/* if(cluesAsk.length ==allowedClueCount){
		alertify.alert('There are no more clues!');
		
		return;
	} */
	$j(CurrentMission1 +'.ask').hide();
	alertify.set({ labels: {ok: "OK", cancel : "Cancel"}  });
	if(cluesAsk.length ==0){
		alertify.alert('There are no more clues!');
		return;
	} 
	var ExistShapes =[];
	
	$j(CurrentMission1+'.grid:visible').not('.released').each(function(){ ExistShapes.push( $j(this).prop('fig'));});
	//cluesAsked///cluesAsk
	console.log(ExistShapes+"the value is ");
	var foundNow =false;
	do{
	//alert('Intro Property'+cluesAsk[allowedClueCount][0]+'==' + cluesAsk[allowedClueCount][2]+"=="+allowedClueCount);
	foundNow =false;
	var a =false;
		$j(cluesAsk[allowedClueCount][1]).each(function (indexs,elem){
		//console.log(elem+"the shape is "+elem[indexs]);
		 a = (Boolean(jQuery.inArray(elem,ExistShapes)>=0)||a);
			if(a)return false;
	
		});
		console.log(cluesAsk[allowedClueCount][0]+"the value"+cluesAsk[allowedClueCount][1]+" is "+Boolean(a));
	if(a){		
		$j(cluesAsk[allowedClueCount][3]).each(function (indexs,elem){
		 a = (a && (jQuery.inArray(elem,ExistShapes)==-1));
				
			if(elem == cluesAsk[allowedClueCount][3].length -1){
			
			return false;
			}
	
		});
		console.log("the value is "+Boolean(a));
			if(a){
			foundNow = false; 
			}else{
			foundNow = true; 
			}
		}else{
		console.log(foundNow+"true the value is "+Boolean(a));
			foundNow = true; 
		}
		
	
	//added by abhishek shrimali
	//if(foundNow ==true)
	//allowedClueCount++; //this code is commented shammit
	var diffCount=0;
	$j(cluesAsk).each(function (dindx){
		if(dindx==(cluesAsk.length-1)){return false;}
		if(previousShapeType != cluesAsk[dindx][2]){
			//alert(previousShapeType+'--'+cluesAsk[dindx][2]);
			diffCount++;
		}	
	});
	//alert(diffCount);
	if(foundNow == true || (foundNow == false && allowedClueCount!=0 && previousShapeType==cluesAsk[allowedClueCount][4] && diffCount>0)){
		if(foundNow == true){
			actualAllowedClueCount++;
		}
		foundNow = true; 
		allowedClueCount++;
		//alert('Inside Duplicate CHeck');
	}else if(foundNow == false){
		previousShapeType=cluesAsk[allowedClueCount][4];
		//alert('found'+previousShapeType);
	}

	//if(allowedClueCount==cluesAsk.length){foundNow = false;} //changed
	if(actualAllowedClueCount==cluesAsk.length){foundNow = false;}
		
	//added by abhishek shrimali
	
	console.log("Final Found "+foundNow+" and this is  the value is "+allowedClueCount);
	}while(foundNow);  
	/* var ExistShapes =[];
	$j(CurrentMission1+'.grid:visible').not('.released').each(function(){ ExistShapes.push( $j(this).prop('fig'));}); */
	
	
	//if(allowedClueCount==cluesAsk.length){
	if(actualAllowedClueCount==cluesAsk.length){	
		alertify.alert('There are no more clues!');		
		return;
	}
	statmentF =cluesAsk[allowedClueCount][0]; // allowedClueCount++;
	FlushedOut.push(cluesAsk[allowedClueCount]);
	cluesAsk.splice(allowedClueCount,1);
	//Code Added by Abhishek Shrimali
		/*if(allowedClueCount>1){
			cluesAsk.shuffle();
		}*/
	//Code Added by Abhishek Shrimali
	allowedClueCount=0;
	actualAllowedClueCount=0;
	var appendStatement = finalCluesXML.find('mergedBucket:contains('+statmentF+')').parent().find('statement').text();
	
	$j(Hyperlinks).each(function (index){
		appendStatement =appendStatement.replace(Hyperlinks[index][0],Hyperlinks[index][1]);
	});
	

	var QuestionText = 'The culprit has ' + appendStatement;
	var QuestionDiv ='<div class="questionField" style="position: relative; margin: 0px;  width: 690px; margin: 5px; height: 20px; right: auto; bottom: auto; "><div class="questionText" style="position: absolute;    text-align: left; margin: 0px; left: 0px; top: 0px; width: 525px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(81, 249, 255); font-weight: 700; text-decoration: none;">'+QuestionText+'</div><div class="questionResponse" style="display: none;position: absolute; margin: 0px; left: 518px; top: 0px; width: 160px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+'</div><div class="questionLine" style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0);  background-color: rgb(50, 133, 180);"></div></div>';
	var feedBackDiv ='<div class="feedbackStatment" resp="'+statmentF+'" statment="'+mainClue+'" style="position: relative; margin: 5px;   width: 336px; height: 23px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateZ(0px);"><div class="statmentText" style="position: absolute; margin: 0px; left: 18px; top: 0px; width: 290px; height: 20px; right: auto; bottom: auto; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(255, 255, 255); font-weight: 700; text-decoration: none;">'+QuestionText+'</div><div style="position: absolute; margin: 0px; left: 264px; top: 0px; width: 60px; height: 20px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+'</div><div style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0); -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(50, 133, 180);"></div><div class="spot" style="position: absolute; margin: 0px; left: 0px; top: 1px; width: 13px; height: 13px; right: auto; bottom: auto; border-radius: 50%; border: 0px none rgb(0, 0, 0);  background-color: #1dc105;"></div></div>';
	$j(CurrentMission1+'.sample').hide();
	//$j(CurrentMission1+'.cluetext').html(QuestionText);
	$j(CurrentMission1+'.quest').prepend(QuestionDiv);
	$j('.quest2').prepend(feedBackDiv);
	 $j(CurrentMission1+'.done').unbind("click");$j(CurrentMission1+'.release').unbind("click");$j(CurrentMission1+'.grid').unbind("click");
	enableRelease(); enableReleaseCLICK(); enableANSresponse();
	});
}
var cluesAsk=[];
var FlushedOut =[];
var ReleasedOut =[];
var ClueCount =0;
function DynamicClues(){
				allowedClueCount=1;
				//Added by Abhishek Shrimali
					var previousShapeType = 0;
					var previousShapeTypeCount = [];
					var actualAllowedClueCount = 1;
				//Added by Abhishek Shrimali
				console.log("kya" +allowedClues);
				$j(allowedClues).each(function (indx){
				//cluesAsk[ 
				 //cluesAsk.push([mainClue,setShapesM1,setShapesM1.length-1,[]]);
				var XMLNode2 = finalCluesXML.find('mergedBucket:contains('+allowedClues[indx]+')').parent();
				
					var shapeNelim =[];
					var shapeNADil =[];
					$j(CurrentMission1+'.grid.suspect').each(function (){ //.selected
						var fig_elimanated = $j(this).prop('fig');
		//				console.log("kya "+indx);
						if(XMLNode2.find(fig_elimanated).text() == "N")
						shapeNelim.push(fig_elimanated)
						
						  if(XMLNode2.find(fig_elimanated).text() == "DA")
						shapeNADil.push(fig_elimanated)   
		//				console.log("kya "+indx);
					});
					if(shapeNelim.length >=1 && shapeNelim.length <setShapesM1.length){
					cluesAsk.push([allowedClues[indx],shapeNelim,shapeNelim.length,shapeNADil,XMLNode2.attr('nos')]);
					}
				});
				//cluesAsk.push([mainClue,[currentCulpret1],1,[]]);
				
				//Code added  by Abhishek Shrimali , reverted sorting and used random order
					cluesAsk.sort(function(a, b){    
						return a[2]-b[2];
						});
					//cluesAsk.shuffle();
					var reqPropFound=false;
					var priorityClue=[];
					//alert('before' + cluesAsk.length);
					$j(cluesAsk).each(function (indx){
						//alert(cluesAsk[indx][0]);
						if(cluesAsk[indx][0].indexOf(propIntroArray[currentstage-1]) > 0){
								//alert('inside check'+cluesAsk[indx][0]);
								priorityClue=cluesAsk[indx];
								cluesAsk.splice(indx,1);
								return false;
						}
					});	
					cluesAsk.unshift(priorityClue);
					//alert('after' + cluesAsk.length);
					/*$j(cluesAsk).each(function (indx){
						alert(cluesAsk[indx][0]);
					});*/	
				//Code added  by Abhishek Shrimali , removed sorting and used random order
				//	cluesAsk.push([mainClue,[currentCulpret1],1,[]]);
}
function enableANSresponse(){
var XMLNode2 = finalCluesXML.find('mergedBucket:contains('+statmentF+')').parent();
$j(CurrentMission1+'.grid.suspect').each(function(index){
console.log($j(this).prop('fig'));
$j(this).prop('ANS',XMLNode2.find($j(this).prop('fig')).text());
console.log("dsfsdf "+$j(this).prop('ANS'));
});
}

function enableRelease(){
		 $j(CurrentMission1+'.grid').not(".released").click(function() { 	
			 { 
			
			 if(jQuery(this).hasClass('selected')){ 
			 jQuery(this).removeClass('selected');
			 $j(this).find('.rect').css('opacity',1);
			 var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
				return true;
			 }
			 jQuery(this).addClass('selected');
			// alertify.log('selected all innocent suspect(s), before selecting release button.');
			  $j(this).find('.rect').css('opacity',0.3);
				var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
				
			 }
			 
			 });
}


function enableReleaseCLICK(){
 $j(CurrentMission1+'.release').click(function() { 	 $j(CurrentMission1 +'.ask').show();  
			 alertify.set({ labels: {ok: "Ok", cancel : "Cancel"}  });
			 $j(CurrentMission1+'.done').css("opacity","1");
			 /* if(!()){alertify.error('You must select an innocent suspect to release.');
			 return;
			 } */
			if( $j(CurrentMission1+'.grid.selected').length >= TotalShapes){alertify.alert('All suspects cannot be released one of them is a culprit.');
			 return;
			 }
			if( $j(CurrentMission1+'.grid.selected').not('.released').length ==0){alertify.alert('Please select an innocent suspect(s) to release.');
			 return;
			 }
			  $j(CurrentMission1+'.grid').unbind("click");
			{ // $j(CurrentMission1+'.grid.selected').hide();
				 $j(CurrentMission1+'.release').unbind("click");
				$j(CurrentMission1+'.grid.selected .tag_btn').show();
				$j(CurrentMission1+'.grid.selected').unbind();
				//evaluate Things
				var incorrectSeletion = false;
				ReleasedOut[ReleasedOut.length ]=[];
				$j(CurrentMission1+'.grid:visible').not('.released').each(function (){ //.selected
				ReleasedOut[ReleasedOut.length-1].push($j(this).prop("fig"));	
				//console.log($j(this).prop("ANS") == "N" && !$j(this).hasClass('selected') );
				//console.log($j(this).prop("ANS") == "Y"  && $j(this).hasClass('selected'));
					if( ($j(this).prop("ANS") == "N" && !$j(this).hasClass('selected') ) ||
					  ($j(this).prop("ANS") == "Y"  && $j(this).hasClass('selected')))
					incorrectSeletion =(incorrectSeletion || true);
					
				});
				/* $j(CurrentMission1+'.grid.selected:visible').not('.released').each(function (){ //.selected
					if (($j(this).prop("ANS") == "N" ) ||  ($j(this).prop("ANS") == "NA" )||  ($j(this).prop("ANS") == "DK" )){
					incorrectSeletion =(incorrectSeletion || false);
					}else
					incorrectSeletion =(incorrectSeletion || true);
				}); */
				if(incorrectSeletion ){ IncorrectRelease.push({"clue":$j(CurrentMission1+'.questionResponse').length,"fig":$j(CurrentMission1+'.grid.selected').not('.released').map(function() { return $j(this).prop("fig")}).get()});
					if(currentScore > coinsValue1[currentstage-1]){
					if(isBonus==1){
						$j(CurrentMission1+" .coin:eq(7)").effect( "explode", {}, 500, callbackPuff1 );
						isBonus=0;
					}else{
					    $j(CurrentMission1+" .coin:eq("+--stageCoins+")").effect( "explode", {}, 500, callbackPuff1 ); 	
					}
					
					alertify.error('Token Lost incorrect suspect released.' );
					}
				}else{
					CorrectRelease.push({"clue":$j(CurrentMission1+'.questionResponse').length,"fig":$j(CurrentMission1+'.grid.selected').not('.released').map(function() { return $j(this).prop("fig")}).get()});
					
					
				correctRelease.play();
				}
				var txtCorrect= (incorrectSeletion?"Incorrect":"Correct");
				$j(CurrentMission1+'.questionResponse:eq(0)').html(txtCorrect);
				var colorCorrect= (incorrectSeletion?"rgb(248, 13, 13)":"#99cc00");				
				$j(CurrentMission1+'.questionResponse:eq(0)').css("color",colorCorrect)
				$j(CurrentMission1+'.grid.selected').addClass("released");
				
				if(incorrectSeletion) $j('.feed:eq(0) .feedbackStatment:eq(0) ').find('.spot').css("background-color","rgb(248, 13, 13)");
				else $j('.feed:eq(0) .feedbackStatment:eq(0) ').find('.spot').css("background-color","#1dc105");
				
				if(!$j(CurrentMission1+'.grid.selected.released').length == TotalShapes-1){
					$j(CurrentMission1+'.grid.selected.released').each(function(){
						if($j(this).prop('fig') ==currentCulpret1){
							alertify.alert("Oops… looks like you released the culprit too! Better luck with the next case!",getFeedback1);
							return;
						}
					});
				}
			}
			  
			/* if( $j(CurrentMission1+'.grid.selected').not('.released').length ==1) $j(CurrentMission1 +'.ask').hide();   */
				
			 });
	 $j(CurrentMission1+'.done').click(function() { 	
	 
	 //$j(CurrentMission1+'.release').trigger("click");
		 if($j(CurrentMission1+'.grid:visible').not('.released').length>1 && FlushedOut.length<TotalShapes-2){
		//$j(".mtch_txt").html("NO MATCH"); $j(".job").html("Don't be in a hurry – next time,ask more questions!");$j(".solved").html("Please attempt again!");
		
		alertify.alert("Don't be in a hurry . There are more clues!");
		return;
		}else if($j(CurrentMission1+'.grid:visible.selected').not('.released').length>=1 ){
		alertify.alert('Last Remaining.');
			$j(CurrentMission1+'.release').trigger("click");
		}else if($j(CurrentMission1+'.grid:visible').not('.released').not('.selected').length>1){
		alertify.set({ labels: {ok: "Yes", cancel : "No"}  });
		alertify.confirm("Your case is unsolved, are your sure you want to end?", function(e){ 
			if (e) {
				//resetLevel1();
				var res= "Oops! you couldn't find the culprit - better luck with the next case!";
				isMatched = false;
				alertify.set({ labels: {ok: "Continue",cancel : "Yes"}  });//,onok:
				alertify.alert(''+ res,getFeedback1);
			}else{
				
			}
		});
		return;
		}else{
			//$j(CurrentMission1+'.release').trigger("click");
		}		
		if($j(CurrentMission1+'.grid.selected.released').length == TotalShapes-1){
				var culpret = $j(CurrentMission1+'.suspect:visible').not(".released").prop("fig");
				var res= (culpret== currentCulpret1 )?"Fabulous work! You caught the culprit.":"Oops! That is not the culprit - better luck with the next case!";
				isMatched = (culpret== currentCulpret1 );
				alertify.set({ labels: {ok: "Continue"}  });//,onok:
				alertify.alert(''+ res,getFeedback1);
				 return;
				}
		//else{
				
				var res= "Oops! you couldn't find the culprit - better luck with the next case!";
				isMatched = false;
				alertify.set({ labels: {ok: "Continue"}  });//,onok:
				alertify.alert(''+ res,getFeedback1);
				 
			//	}	
	 });
	 
			
}

function getFeedback1(){
	
	if(!isMatched){ $j(".mtch_txt").html("NO MATCH"); $j(".job").html("Nice Try!");$j(".solved").html("Please attempt again!");
	$j( ".additionalTextVal").html("Try to solve the case again.");
		//$j( ".cont_txt").html("CONTINUE");
	incorrectRelease.play();
	}else{  	assessment_positive.play();
	 $j(".mtch_txt").html("MATCH"); $j(".job").html("Great Job!");$j(".solved").html("You solved the case!");
	 /* if(currentstage != 3)
	 $j( ".cont_txt").html("Next Case"); */
	}
	var cp = currentCulpret1.replace("fig0","");
	var suspected = $j(CurrentMission1+'.suspect:visible').not(".released").prop("fig");
	if( $j(CurrentMission1+'.suspect:visible').not(".released").length!=1)
	suspected="fig000";
	var sp = suspected.replace("fig0","");
	$j(".feed:eq(0) "+".matchShape:eq(1)").css('background-image',' url("	shapes/'+sp+'/'+sp+'_normal.svg"');
	$j(".feed:eq(0) "+".matchShape:eq(0)").css('background-image',' url("shapes/'+cp+'/'+cp+'_normal.svg"');
	$j(".feed:eq(0) .scoretxt").html(currentScore);
	/*$j(".feedbackStatment").each(function(){
	var Correct = (finalCluesXML.find('mergedBucket:contains('+$j(this).attr('resp') +')').parent().find(suspected).text()==(finalCluesXML.find('mergedBucket:contains('+$j(this).attr('statment')+')').parent().find(suspected).text())); */
	/* var Correct = true;
	if(!Correct) $j(this).find('.spot').css("background-color","rgb(248, 13, 13)");
	else $j(this).find('.spot').css("background-color","#1dc105");
	}); */
$j( ".additionalTextVal").html("Looks like there is another case for you to solve.");
if(currentstage == 9 ){ jQuery( ".additionalTextVal").html("<br>	&ensp;	&ensp;	&ensp;	&ensp;	&ensp;MISSION END!");}
	$j("#feedback").toggle("slide", function(){  jQuery(".feed").hide();  jQuery(".feed:eq(0)").show();
	$j( ".feed:eq(0) "+".matchShape:eq(0)" ).effect( "transfer",{ to: ".feed:eq(0) "+".matchShape:eq(1)", className: "ui-effects-transfer" }, 500).delay(800).effect( "transfer",{ to: ".feed:eq(0) "+".matchShape:eq(1)", className: "ui-effects-transfer" }, 500);});
	//Great Job! //You solved he case.
	$j(".feed:eq(0) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(0) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(0) .star:eq(0)").html(" "+ (isBonus?'1':'0'));
	$j(".lvlScreen .level2").html("LEVEL "+ (currentLevelDisplay1[currentstage-1]+1));
	gameScore+=isBonus?1:0;
	if(isBonus){
		setTimeout(function () {
		
		loadedComps["feedback"].getStage().getSymbol("m01_feedback").getSymbol("anim_star").play(1);
		}, 1000);
		setTimeout(function () {
		loadedComps["feedback"].getStage().getSymbol("m01_feedback").$("mc_PerfectScore").show();
		loadedComps["feedback"].getStage().getSymbol("m01_feedback").getSymbol("mc_PerfectScore").play(1);
		}, 1500);
	}
	$j(CurrentMission1+" .star:eq(0)").html(" "+ gameScore);
	}
function callbackPuff1(){
	//if(currentScore > coinsValue1[currentstage-1]){
	currentScore = currentScore- $j(this).prop("coinVal");
	$j(this).effect( "puff", {}, 300); 
	coinUP.play();
	$j(".scoretxt").html(currentScore);
	$j(".scoretxt").effect( "highlight",200);
	//}
	if(currentScore <= coinsValue1[currentstage-1]){
		isMatched =false;
		alertify.alert('You have exhausted all tokens better luck with the next case!',getFeedback1);
			
			//resetLevel1();
			
		}
	};
var statmentF="";

var M1Stage1="no1equalsides,exactly3emptysides,exactly4emptysides,exactly5emptysides,exactly6emptysides,exactly4equalpairsofsides,exactly3equalpairsofsides,exactly2equalpairsofsides".split(',');

//M1Stage1="all1equalsides".split(',');
//all1equalsides

/* var M1Stage1a = "no1equalpairsofsides,exactly6equalpairsofsides,exactly5equalpairsofsides,exactly4equalpairsofsides,exactly3equalpairsofsides,exactly2equalpairsofsides".split(','); */
//all1equalpairsofsides,
var complexequalpairsofsides="emptyangles,equalangles,all1equalpairsofsides,lessthan6equalpairsofsides,atleast1equalpairsofsides,atleast2equalpairsofsides,atleast3equalpairsofsides,atleast4equalpairsofsides,atleast5equalpairsofsides,atleast6equalpairsofsides,morethan1equalpairsofsides,morethan2equalpairsofsides,morethan3equalpairsofsides,morethan4equalpairsofsides,morethan5equalpairsofsides,morethan6equalpairsofsides".split(',')

var stage1RemoveKeys ="angles,lessthan1,right,obtuse,acute,reflex,parallel".split(',');

var M1Stage2="all1equalsides,no1equalpairsofsides,no1rightangles,all1rightangles".split(',');
var stage2RemoveKeys ="lessthan1,obtuse,acute,reflex,parallel".split(',');
var M1Stage3="exactly1rightangles,exactly2rightangles,exactly3rightangles,exactly4rightangles,exactly5rightangles,exactly6rightangles".split(',');
var stage3RemoveKeys ="lessthan1,obtuse,acute,reflex,parallel".split(',');
var M1Stage4="exactly1obtuseangles,exactly2obtuseangles,exactly3obtuseangles,exactly4obtuseangles,exactly5obtuseangles,exactly6obtuseangles,no1obtuseangles,all1obtuseangles".split(',');
var stage4RemoveKeys ="lessthan1,acute,reflex,parallel".split(',');
var M1Stage5 ="exactly1acuteangles,exactly2acuteangles,exactly3acuteangles,exactly4acuteangles,exactly5acuteangles,exactly6acuteangles,no1acuteangles,all1acuteangles".split(',');
var stage5RemoveKeys ="lessthan1,reflex,parallel".split(',');
var M1Stage6 ="exactly1reflexangles,exactly2reflexangles,exactly3reflexangles,exactly5reflexangles,no1reflexangles".split(',');
var stage6RemoveKeys ="lessthan1,parallel".split(',');
// removed curved from 7,8,9
var M1Stage9 ="exactly1parallelpairsofsides,exactly2parallelpairsofsides,exactly3parallelpairsofsides,exactly4parallelpairsofsides".split(',');//,no1parallelpairsofsides

//Added by Abhishek Shrimali
var propIntroArray=[
	"equal", // stage 1
	"right", // stage 2
	"right", // stage 3 
	"obtuse", // stage 4 obtuse yes
	"acute", // stage 5 obtuse number
	"reflex", // stage 6 actute number 
	"no1parallel", // stage 7 parallelpairsofsides
	"parallel", // stage 8 reflexangle yes
	"parallel", // stage 9 reflexangle number
];
//Added by Abhishek Shrimali

var stage9RemoveKeys ="curved,lessthan1,atleast1,atleast2empty,morethan1empty,morethan2empty".split(',');
//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
//step2- for fig? a shape get all property with Yes filter those from allowed clue list for that stage 
//step3- give me one new shape with property No from allowed clue list.
//repeat step3 for 4- 6  more shapes different property clue.
////////////////////////clues bank
/* curved 1
straight sides 2 
pairs of sides 3
right angle 4
no right no pair of sides 5 
obtuse 6 
acute 7
reflex 8
parallel 9
exactly 10 */

var currentCulpret1 ="fig001";
var mainClue = "";
var TotalShapes =showShapes1[currentstage-1];
var setShapesM1 = [];
var allowedClues =[];
var allowedClueCount =0;


function resetLevel1(){ $j("#gloss_btn,#help_btn,#menu_btn").show(); startTimerlvl();
//isBonus =0;
TotalShapes = showShapes1[currentstage-1];
cluesAsk=[];
if(isBonus !=0){
setShapesM1 = [];
allowedClues =[];
}else{
$j(FlushedOut).each(function (intt){allowedClues.push(FlushedOut[intt]);});
DynamicClues();
}


FlushedOut =[];
ReleasedOut =[];
allowedClueCount =0;
actualAllowedClueCount =0;
	
	$j(".quest").empty();
	$j(".quest2").empty();
	$j(".tool.active").trigger("click");
	$j(".mission3 .coin").show();
	$j(CurrentMission1+'.done').unbind("click"); $j(CurrentMission1+'.release').unbind("click");$j(CurrentMission1+'.grid').unbind("click");
$j(CurrentMission1+'.done').css("opacity","0.3");	
$j(CurrentMission1+'.grid .tag_btn').hide();
	 $j(CurrentMission1+'.cluetext').html("Generate Clue");
	$j(CurrentMission1 +'.ask').show();
	$j(CurrentMission1+'.grid').removeClass("released");
	$j(CurrentMission1+".grid.selected").each(function(){ 
			 jQuery(this).removeClass('selected');
			 $j(this).find('.rect').css('opacity',1);
			 var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
				$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
				//return true;
			 });
			 $j(CurrentMission1+".recte svg").empty();
$j(CurrentMission1+".grid").removeClass("suspect");
$j(CurrentMission1+".grid").show();
$j(CurrentMission1+".coin").show();
	 
	startMission1();
}

function GeneratingShapes(){ setShapesM1 = []; var tempClueOrder=[]; var IdealShapes;
	switch(currentstage){
		case 1:{
			//M1Stage1
			//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
			M1Stage1.shuffle();
			var ind =0;
			mainClue= M1Stage1[ind];
			var shapeFound =true;
			do{
			mainClue= M1Stage1[ind];
			var XMLNode = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;			
			console.log("milgeya" +mainClue);
			}while(shapeFound);
			shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalCluesXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				//console.log(""+cluetext);
				var clueNos = $j(this).parent().attr('nos');
				//console.log(""+clueNos);
				var testPassed = false;
				$j(stage1RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				/* $j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				}); */
				if(!testPassed)
				{allowedClues.push(cluetext);
				tempClueOrder.push(clueNos);
				}
				
			});
			
			IdealShapes =[10,1,3,5,2]; // generateshapes like this
			
		}break;
		//case 2
		
		case 2:{
			//M1Stage1
			//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
			M1Stage2.shuffle();
			var ind =0;
			mainClue= M1Stage2[ind];
			var shapeFound =true;
			do{
			mainClue= M1Stage2[ind];
			var XMLNode = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			
			//console.log("milgeya");
			}while(shapeFound);
			shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalCluesXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				var clueNos = $j(this).parent().attr('nos');
				//console.log("");
				var testPassed = false;
				$j(stage2RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
				/* $j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				}); */
				if(!testPassed){
				allowedClues.push(cluetext);
				tempClueOrder.push(clueNos);
				}
				
				
			});
			//we now have clues to ask randomly
			
			IdealShapes =[10,5,1,2,3]; // generateshapes like this
		}break;
		/// case 3
		
		case 3:{
			//M1Stage1
			//step1- Give me a random shape (fig?) with property  value Yes from main clue Randomly
			M1Stage3.shuffle();
			var ind =0;
			mainClue= M1Stage3[ind];
			var shapeFound =true;
			do{
			mainClue= M1Stage3[ind];
			var XMLNode = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			
			//console.log("milgeya");
			}while(shapeFound);
			shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalCluesXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				var clueNos = $j(this).parent().attr('nos');
				//console.log("");
				var testPassed = false;
				$j(stage3RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
			/* 	$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				}); */
				if(!testPassed){
				allowedClues.push(cluetext);
				tempClueOrder.push(clueNos);
				}
				
				
			});
			//we now have clues to ask randomly
			IdealShapes =[10,4,5,1,2,3];
		}break;
		///case 4
		case 4:{
			M1Stage4.shuffle();
			var ind =0;
				mainClue= M1Stage4[ind];
			var shapeFound =true;
			do{
			mainClue= M1Stage4[ind];
			var XMLNode = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			//console.log("milgeya");
			
			}while(shapeFound);
			shuffle(shapes);
			
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalCluesXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				var clueNos = $j(this).parent().attr('nos');
				//console.log("");
				var testPassed = false;
				$j(stage4RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
			/* 	$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				}); */
				if(!testPassed){
				allowedClues.push(cluetext);
				tempClueOrder.push(clueNos);
				}
				
				
			});
			//we now have clues to ask randomly
			
			IdealShapes =[10,6,5,3,1,2];
			
		}break;
		case 5:{
			M1Stage5.shuffle();
			var ind =0;
				mainClue= M1Stage5[ind];
			var shapeFound =true;
			do{
			mainClue= M1Stage5[ind];
			var XMLNode = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			//console.log("milgeya");
			
			}while(shapeFound);
			shuffle(shapes);
			
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalCluesXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				var clueNos = $j(this).parent().attr('nos');
				//console.log("");
				var testPassed = false;
				$j(stage5RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
			/* 	$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				}); */
				if(!testPassed){
				allowedClues.push(cluetext);
				tempClueOrder.push(clueNos);
				}
				
				
			});
			
			IdealShapes =[10,7,6,5,3,1,2];
			
		}break;
		case 6:{
			M1Stage6.shuffle();
			var ind =0;
				mainClue= M1Stage6[ind];
			var shapeFound =true;
			do{
			mainClue= M1Stage6[ind];
			var XMLNode = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;
			//console.log("milgeya");			
			}while(shapeFound);
			shuffle(shapes);
			
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalCluesXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				var clueNos = $j(this).parent().attr('nos');
				//console.log("");
				var testPassed = false;
				$j(stage6RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
			/* 	$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				}); */
				if(!testPassed){
				allowedClues.push(cluetext);
					tempClueOrder.push(clueNos);
				}
				
				
			});
			//we now have clues to ask randomly
			
			IdealShapes =[10,8,7,6,5,3,1,2];
			
		}break;
		case 7:
		case 8:
		case 9:{
			M1Stage9.shuffle();
			var ind =0;
				mainClue= M1Stage9[ind];
			var shapeFound =true;
			do{
			mainClue= M1Stage9[ind];
			var XMLNode = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent();
			var shapes = XMLNode.find(':contains(Y)');
			shapeFound = !(shapes.length >0);
			ind++;			
			//console.log("milgeya");
			}while(shapeFound);
			
			 shuffle(shapes);
			currentCulpret1=$j(shapes[0]).prop("tagName") ;
			setShapesM1.push(currentCulpret1);
			//get all properties with value Yes for currentCulpret1
			var PropNodes = finalCluesXML.find(currentCulpret1+':contains(Y)').parent().find('mergedBucket');
			 allowedClues =[];
			$j(PropNodes).each(function(){
				var cluetext = $j(this).text();
				var clueNos = $j(this).parent().attr('nos');
				//console.log("");
				var testPassed = false;
				$j(stage9RemoveKeys).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				});
			/* 	$j(complexequalpairsofsides).each(function(){
					if(cluetext.indexOf(this) >-1)
						testPassed = testPassed|| true;
				}); */
				if(!testPassed){
				allowedClues.push(cluetext);
					tempClueOrder.push(clueNos);
				}
			});
			//we now have clues to ask randomly
			
			IdealShapes =[10,9,3,8,7,6,5,1,2];
			
		}break;
	
	}
	
	 var tempArrayForSor=[]
			$j(allowedClues).each(function(indxs){
				tempArrayForSor.push([allowedClues[indxs],tempClueOrder[indxs] ]);
			});
			tempArrayForSor.shuffle();
			/*tempArrayForSor.sort(function(a, b){    
					return b[1]  - a[1] ;
					}); */
			console.log("temparray"+tempArrayForSor);
			//1 of each clues exactly, 1 curvedsides 1 emptyside 1 pairsofsides 1 equalsides
			//we now have clues to ask randomly
			//allowedClues.shuffle();
			//allowedClues=[];
			var property = []
				var jam = 1;
			 var j =0;
			
			$j(IdealShapes).each(function(indxx){
			var g = tempArrayForSor.filter( function(elem, pos){console.log(elem[1]+","+IdealShapes[indxx]); return (elem[1] ==  IdealShapes[indxx]) })
			
			console.log("g is "+g);
			if(g.length){
					clueObj = g[0][0];
					console.log("the shape is "+clueObj);
					XMLNode = finalCluesXML.find('mergedBucket:contains('+clueObj+')').parent();
					
						shapes = XMLNode.find(':contains(Y)');					
						shuffle(shapes);
						console.log()
						 if(!shapes.length){
						//tempArrayForSor.splice(indxx,1); indxx--;
						//return false;
						jam =0 ;
						} 
						if(jam){
						var isNew;
						do{
						var shpaeIS =$j(shapes[j]).prop("tagName");
						XMLNode2 = finalCluesXML.find('mergedBucket:contains('+mainClue+')').parent().find(shpaeIS).text();
						console.log(setShapesM1.length+"mainClue is "+shpaeIS);
						isNew = Boolean($j.inArray(shpaeIS,setShapesM1) == -1);

						 if(shpaeIS == undefined){
						 isNew =false;
						 } 
						if(isNew&& XMLNode2=="N"){ console.log("why push this "+shpaeIS);
						setShapesM1.push($j(shapes[j]).prop("tagName"));
						
						isNew = false;
						}else{j++;isNew =true ;if(j>=shapes.length) isNew =false;};
						}while(isNew); 
						}
				} jam =1;
			});
			
		/* 	for (var i=0;i<tempArrayForSor.length;i++){	
				//console.log(IdealShapes[0] +"we are at "+tempArrayForSor[i][1]);
					if( tempArrayForSor[i][1] == IdealShapes[0] ){
					
					console.log(IdealShapes[0] +"shape made of "+tempArrayForSor[i][0]);
					
						XMLNode = finalCluesXML.find('mergedBucket:contains('+tempArrayForSor[i][0]+')').parent();
						shapes = XMLNode.find(':contains(Y)');					
						shuffle(shapes);
						//console.log("why ");
						//setShapesM1.push($j(shapes[0]).prop("tagName")); 
						j =0;
						if(shapes.length == 0){
						tempArrayForSor.splice(i,1); i--;
						continue;
						}
						i =0; 
						IdealShapes.splice(0,1);
						
						 var isNew;
						do{
						isNew = Boolean($j.inArray($j(shapes[j]).prop("tagName"),setShapesM1) == -1);
						 console.log(shapes+"why error"+isNew);
						if(isNew){
						setShapesM1.push($j(shapes[j]).prop("tagName"));
						
						isNew = false;
						}else{j++;isNew =false ;if(shapes.length == (j-1)) isNew =true;};
						}while(isNew);  
					}
					console.log(i+" did we find it "+tempArrayForSor.length)
					if(tempArrayForSor.length == (i+1)){
					console.log("yes");
					IdealShapes.splice(0,1); i =0; 
						if(IdealShapes.length<=0 ){i=tempArrayForSor.length; continue;}
					continue;
					}
					if(IdealShapes.length<=0 ){i=tempArrayForSor.length; continue;}
			}
			console.log("fdsfd"+ allowedClues);
			
			if(setShapesM1.length>TotalShapes) 
			setShapesM1.splice(TotalShapes);
			if(setShapesM1.length < TotalShapes){
			setShapesM1.push($j(shapes[(j+2)]).prop("tagName")); 		
			}
			if(setShapesM1.length < TotalShapes){
			setShapesM1.push($j(shapes[(j+3)]).prop("tagName")); 		
			} */
			if(setShapesM1.length <3){GeneratingShapes();}
			if(setShapesM1.length>TotalShapes) 
			setShapesM1.splice(TotalShapes);
			if(setShapesM1.length < TotalShapes){
			setShapesM1.push($j(shapes[(0)]).prop("tagName")); 		
			}
			if(setShapesM1.length < TotalShapes){
			setShapesM1.push($j(shapes[(1)]).prop("tagName")); 		
			} 
			setShapesM1.shuffle();
			allowedClues.shuffle();
	//TotalShapes = setShapesM1.length;
	//setShapesM1.shuffle();
	//console.log("error came "+setShapesM1);
	$j.each(setShapesM1 , function( index, value ) {

	var filename = (value).substring(4,6);
	var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
	var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B_m1.svg";//var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B.svg";
	$j.ajax({
    url:filepath2,
    type:'HEAD',
    error: function()
    {
       filepath2 = "shapes/"+filename+"/"+filename+"_tool1B.svg";
    },
    success: function()
    {
       //  console.log("file exists");
    }
});
	//var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B_m1.svg";
		$(CurrentMission1+'.grid:eq('+index+') .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission1+'.grid:eq('+index+')').prop("fig","fig0"+filename);
		$(CurrentMission1+'.grid:eq('+index+')').addClass("suspect");
		 $j(CurrentMission1+'.recte:eq('+index+') ').load(filepath2,function() { 
					equalMarkerEffect($j(this));
			});
		$j(CurrentMission1+'.recte:eq('+index+') svg').css("transform"," scale(1.1)");
 
	});
	
	$(CurrentMission1+'.grid').not(".suspect").hide();
	DynamicClues();
	 if(cluesAsk.length <3) {
	 cluesAsk=[];
	 $j(CurrentMission1+".recte svg").empty();
		$j(CurrentMission1+".grid").removeClass("suspect");
	 GeneratingShapes();
	} 
}
  function duplicateCode(){
  allowedClues.shuffle();
  setShapesM1.shuffle();
	//console.log("error came "+setShapesM1);
	$j.each(setShapesM1 , function( index, value ) {

	var filename = (value).substring(4,6);
	var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
	var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B_m1.svg";//var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B.svg";
	$j.ajax({
    url:filepath2,
    type:'HEAD',
    error: function()
    {
       filepath2 = "shapes/"+filename+"/"+filename+"_tool1B.svg";
    },
    success: function()
    {
       //  console.log("file exists");
    }
});
	//var filepath2 = "shapes/"+filename+"/"+filename+"_tool1B_m1.svg";
		$(CurrentMission1+'.grid:eq('+index+') .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission1+'.grid:eq('+index+')').prop("fig","fig0"+filename);
		$(CurrentMission1+'.grid:eq('+index+')').addClass("suspect");
		 $j(CurrentMission1+'.recte:eq('+index+') ').load(filepath2,function() { 
					equalMarkerEffect($j(this));
			});
		$j(CurrentMission1+'.recte:eq('+index+') svg').css("transform"," scale(1.1)");
 
	});
	
	$(CurrentMission1+'.grid').not(".suspect").hide();
	//DynamicClues();
  }
  
  //$(CurrentMission1+'.grid:eq('+5+') svg').css("transform"," scale(1.1)")
  //$(CurrentMission1+'.grid:eq('+5+') .rect').load('http://localhost:8080/shapes/24/24_tool1B.svg')
  //$j("svg #shape").hide();
/*   var timeout;
   $j(CurrentMission1+'.grid:eq('+5+') .rect').load('http://localhost:8080/shapes/24/24_tool1B.svg')
  $j(CurrentMission1+'.grid:eq('+5+') svg').css("transform"," scale(1.1)");
  $j(CurrentMission1+'.grid:eq('+5+')').hover(function(){
    clearTimeout(timeout);
    
    $this = $j(this).find('svg');

    timeout = setTimeout(function(){
        $this.css("-webkit-transition", "all 2s ease-in-out");
        $this.addClass('grow');
    }, 500);
}, function(){
    clearTimeout(timeout);
    $j(this).css("-webkit-transition", "all 0.5s ease-in-out");

    $j(this).removeClass('grow');
}); */



/* 	jQuery(".dropArea2").droppable({
		 accept:function(drag){
		
			var nameOfbatch = jQuery(drag).css('background-image');
			 var nameOfbox = jQuery(this).css('background-image')
		 // return jQuery(drag).hasClass("batchtag");
	//console.log(nameOfbatch.substr(nameOfbatch.length - 7)+''+nameOfbox.substr(nameOfbox.length - 7));
		  return (nameOfbatch.substr(nameOfbatch.length - 7)== nameOfbox.substr(nameOfbox.length - 7));
		 },
      drop: function( event, ui ) {
	 // alert(ui+"you dropped that "+event);
	 	jQuery(this).droppable( "option", "disabled", true );
		jQuery(ui.draggable).draggable( "option", "disabled", true );
		// jQuery(ui.draggable).hide();
		jQuery(this).css('background-image',jQuery(ui.draggable).css("background-image"));
		var nameOfbatch = jQuery(this).css('background-image');
		var indexOfBatch = nameOfbatch.indexOf('.png')-1;
		//console.log("the string is "+indexOfBatch);
		jQuery('.kunalSays').html(quizXML.find("answer[id="+nameOfbatch.charAt(indexOfBatch)+"]").text());
	  }
});
		
		jQuery(".batchtag").draggable({
      //cancel: "a.ui-icon", // clicking an icon won't initiate dragging
		//revert: true ,
		revert:  function(event, ui) {
                        // on older version of jQuery use "draggable"
                        // $(this).data("draggable")
			
						//return !event;
                        return (event !== false) ? false : true;
                   },
      containment:"parent",
      helper: "clone",
	  snap: '.dropArea',
		snapMode: 'inner',
      cursor: "move"
    }); */