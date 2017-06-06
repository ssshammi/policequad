var CurrentMission = "#mission3 ";

var replayCount =0;
function getdata3(){
var figures =[];
var clues =[];
var errors =[];
$j(CurrentMission+' .rect').each(function (index){ figures.push( $(this).parent().prop("fig"));});
$j(CurrentMission+' .questionText').each(function (index){ clues.push( $(this).text());});
$j(CurrentMission+' .questionResponse').each(function (index){ errors.push( $(this).text());});
return [ruleIs,figures,clues,errors];
}
function beginGame3(){  jQuery(".mmenu:eq(2)").show();
		$j(CurrentMission+'.reset').click(function() {  replayCount ++;
		isBonus=0;
		resetLevel3();
		//startNextLevel();
	});
	
	 jQuery(".feed:eq(2) .cont_btn").click(function() { var hasB =isBonus;   isBonus=1 ;
			if(currentScore>highScore)
		highScore = currentScore;
		$j(".scoretxt2").html(highScore);
			if(shapeOrigin=='Allowed'){
		stageEnd( "Mission 3", currentStage,replayCount,"passed",getdata3(),currentScore,hasB);
		isBonus=1; currentStage=currentStage+1;
		if(currentStage == 6){ $j("#gloss_btn,#help_btn,#menu_btn").hide();
		$j('.trans3').hide();
		$j(".feedback").hide("slide", function() {
			jQuery(".end1").hide();
			jQuery(".end1:eq(2)").show();
			$j('.end2').show("slide"); completedMission[2] =1;
			transisitions();
			currentStage = 5;
		});
		return;
		
		}
		$j(".feedback").hide("slide", function() { $j("#gloss_btn,#help_btn,#menu_btn").hide(); //alert("came");
			if(currentStage==3){$j('.trans3 .lvlScreen:eq(0)').hide();$j('.trans3 .lvlScreen:eq(1)').show();$j('.trans3').show("slide");
			transisitions();transisitions2();
			}
			else if(currentStage==5){$j('.trans3 .lvlScreen:eq(1)').hide();$j('.trans3 .lvlScreen:eq(0)').show();$j('.trans3').show("slide");
			transisitions();transisitions2();
			}
			else startNextLevel();
		});
					
		}else{ //isBonus=0;
		stageEnd( "Mission 3", currentStage,replayCount,"failed",getdata3(),currentScore,hasB);
		startNextLevel();
		}
	});
	EnableMission3();
	enableTools3();
	startMission3()
}

var currentStage = 1;
var MaxScore3 =[710,710,740,740,860];
var coinsStack3 =[3,3,3,3,4];
var coinsValue3 =[70,70,80,80,90];
var coinsImg =["url(images/coin70.png)","url(images/coin70.png)","url(images/coin80.png)","url(images/coin80.png)","url(images/coin90.png)"];
var coinsImgT ="url(images/coin500_green.png)";
var isBonus =1;
var shapeOrigin='Block';
function enableTools3(){
	//jQuery(CurrentMission+".tool:eq(0)");
	//rightAndge tool
	$j(CurrentMission+'.bucket:eq(0)').append('<select id="bucket1"><option value=""> </option><option value="atleast">కనీసం</option><option value="lessthan">కంటే తక్కువ</option><option value="morethan">మించి</option><option value="exactly">ఖచ్చితంగా</option><option value="all">అన్ని</option><option value="no">సున్నా</option> </select>');
	
	$j(CurrentMission+'.bucket:eq(1)').append('<select id="bucket2"><option value="">           </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select>');
	
	/*old code - shammi
	$j(CurrentMission+'.bucket:eq(2)').append('<select id="bucket3"><option value=""> </option><option value="equal">equal</option><option value="parallel">parallel</option><option value="right">right</option><option value="reflex">reflex</option><option value="obtuse">obtuse</option><option value="acute">acute</option></select>');
	*/
	$j(CurrentMission+'.bucket:eq(2)').append('<select id="bucket3"><option value="">              </option><option value="equal">సమాన</option><option value="parallel">సమాంతర</option><option value="right">లంబ</option><option value="reflex">ప్రతిబింబ</option><option value="obtuse">గురు</option><option value="acute">అలఎ</option><option value="curved" disabled>వక్ర</option></select>');

	//<option value="" style="display:none" disabled>adjacent sides equal</option><option style="display:none" value="" disabled>opposite sides equal</option>
	
	/*$j(CurrentMission+'.bucket:eq(3)').append('<select id="bucket4"><option value="">Select Attribute</option><option value="sides">sides</option><option value="curved" disabled>curved sides</option><option value="angles">angles</option><option value="pairsofsides">pairs of sides</option></select>');*/
	$j(CurrentMission+'.bucket:eq(3)').append('<select id="bucket4"><option value="">           </option><option value="sides">భుజాలు</option><option value="angles">కోణాలు</option><option value="pairsofsides">భుజాల జతలు</option></select>');
	//setOptionsDimensions
	$j(CurrentMission+'select').selectric().on('change', function() {
			//console.log(""+$j(this)[0].selectedIndex );
			//alert($j(this)[0].selectedIndex);
			if($j(CurrentMission+'#bucket1')[0].selectedIndex ==5 || $j(CurrentMission+'#bucket1')[0].selectedIndex ==6) {
					$j(CurrentMission+'.bucket:eq(1)').hide();
					$j(CurrentMission+'#bucket2').prop('selectedIndex', 0).selectric('refresh');
					if($j(CurrentMission+'#bucket1')[0].selectedIndex ==6) {
						$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
						if($j(this)[0].id=="bucket3" && $j(CurrentMission+'#bucket3')[0].selectedIndex ==7) {
							$j(CurrentMission+"#bucket4 option").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option:eq(0)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option:eq(1)").removeAttr("disabled");
						}else if($j(this)[0].id=="bucket3"){
							//$j(CurrentMission+"#bucket3 option:eq(7)").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}else{
							$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}	
						$j(CurrentMission+'#bucket3').selectric('refresh');
						$j(CurrentMission+'#bucket4').selectric('refresh');
					}
			}else if($j(CurrentMission+'#bucket1')[0].selectedIndex ==1 && $j(CurrentMission+'#bucket2')[0].selectedIndex ==1){
						$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
						if($j(this)[0].id=="bucket3" && $j(CurrentMission+'#bucket3')[0].selectedIndex ==7) {
							$j(CurrentMission+"#bucket4 option").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option:eq(0)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option:eq(1)").removeAttr("disabled");
						}else if($j(this)[0].id=="bucket3"){
							//$j(CurrentMission+"#bucket3 option:eq(7)").prop("disabled",'disabled');
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}else{
							$j(CurrentMission+"#bucket3 option:eq(7)").removeAttr("disabled");
							$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
						}	
						$j(CurrentMission+'#bucket3').selectric('refresh');
						$j(CurrentMission+'#bucket4').selectric('refresh');
			}
			else {
				$j(CurrentMission+'.bucket:eq(1)').show();
				$j(CurrentMission+"#bucket3 option:eq(7)").prop("disabled",'disabled');
				$j(CurrentMission+"#bucket4 option").removeAttr("disabled");
				if($j(CurrentMission+"#bucket3 ").prop('selectedIndex')==7)
					$j(CurrentMission+"#bucket3 ").prop('selectedIndex', 0);
				$j(CurrentMission+'#bucket3').selectric('refresh');
				$j(CurrentMission+'#bucket4').selectric('refresh');
					
			};
			if($j(CurrentMission+'#bucket3')[0].selectedIndex ==2){
						if($j(CurrentMission+"#bucket4 ").prop('selectedIndex')==1)
						{$j(CurrentMission+"#bucket4 ").prop('selectedIndex', 0);
						$j(CurrentMission+"#bucket4 ").selectric('refresh');}
				$j(CurrentMission+"#bucket4 option:eq(1)").prop("disabled",'disabled');
				$j(CurrentMission+'#bucket4').selectric('refresh');
			}else{
				$j(CurrentMission+"#bucket4 option:eq(1)").removeAttr("disabled");
				$j(CurrentMission+'#bucket4').selectric('refresh');
			}
			if($j(CurrentMission+'#bucket1')[0].selectedIndex ==5 || $j(CurrentMission+'#bucket1')[0].selectedIndex ==6) {$j(CurrentMission+'.bucket:eq(1)').hide();$j(CurrentMission+'#bucket2').prop('selectedIndex', 0).selectric('refresh');}else $j(CurrentMission+'.bucket:eq(1)').show();
			if($j(CurrentMission+'#bucket1')[0].selectedIndex && ($j(CurrentMission+'#bucket2>option:selected').val()+ $j(CurrentMission+'#bucket3>option:selected').val()!="") && $j(CurrentMission+'#bucket4')[0].selectedIndex) {//$j('#bucket2')[0].selectedIndex //&& $j('#bucket3')[0].selectedIndex && 
					$j(CurrentMission+'.ask').show();
				}else{
					$j(CurrentMission+'.ask').hide();
			}
			
							
	});
	CalScore3();
}

function CalScore3(){
	$j(CurrentMission+".coin").prop("coinVal", coinsValue3[currentStage-1]);
	$j(CurrentMission+".coin:eq(7)").prop("coinVal", 500);
}

function EnableMission3(){
	$j(CurrentMission+".ToolMain").hide();
	$j(CurrentMission+".ToolMain2").hide();
	
	jQuery(CurrentMission+".toolA").click(function() { 
		$j(CurrentMission+".toolb").hide();
		$j('.rect').each(function (){
				var imagePath = $j(this).css("background-image").replace(pathURL,"");
				$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
			});
	});
	jQuery(CurrentMission+".tool:eq(3)").click(function() { 
		if($j(this).hasClass('active')){$j(this).removeClass('active');
		$j(CurrentMission+".ToolMain").freetrans('destroy');
		
		$j(CurrentMission+".ToolMain").hide();
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		return;}
		$j(this).addClass('active');
		$j(CurrentMission+".ToolMain").show();
		$j(CurrentMission+".ToolMain").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%'});
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
	});
	jQuery(CurrentMission+".tool:eq(1)").click(function() { 
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool2_selected.png)');
		$j(CurrentMission+".toolb").show();
	});
	jQuery(CurrentMission+".tool:eq(0)").click(function() { 
		//replace here 
		if($j(this).hasClass('active')){
			$j(this).removeClass('active');	
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
			$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");
			
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
			});
			return;
		}
		jQuery(CurrentMission+".toolA").trigger("click");
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
		$j(this).addClass('active');
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
		
		$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");
			
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool1"));
		});
	});

	jQuery(CurrentMission+".tool:eq(2)").click(function() { 
	//replace here 
		if($j(this).hasClass('active')){
			$j(CurrentMission+".ToolMain2").freetrans('destroy');
			$j(CurrentMission+".ToolMain2").hide();
			$j(this).removeClass('active');	
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
			$j('.rect').each(function (){
				var imagePath = $j(this).css("background-image").replace(pathURL,"");
				$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_normal"));
			});
			return;
		}
		jQuery(CurrentMission+".toolA").trigger("click");

		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			$j(CurrentMission+".ToolMain2").show();
			$j(CurrentMission+".ToolMain2").freetrans({ x: 250, y: 150, 'rot-origin': '50% 50%'});
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
		$j(this).addClass('active');
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_selected"));
		$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");
			
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool3"));
		});
	});

	jQuery(CurrentMission+".tool2:eq(2)").click(function() { 	
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool1A_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});	
		$j('.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2A"));
		});	
	});
	jQuery(CurrentMission+".tool2:eq(3)").click(function() { 	
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool2D_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
		$j(this).removeClass("active");
		var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
		$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});	
		$j('.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2D"));
		});	
	});
	
	jQuery(CurrentMission+".tool2:eq(1)").click(function() {
 		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool1B_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
		$j('.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2B"));
		});	
	});
	
	jQuery(CurrentMission+".tool2:eq(0)").click(function() { 
		jQuery(CurrentMission+".toolA").css('background-image','url(images/tool1C_selected.png)');
		jQuery(CurrentMission+".tool:lt(3)").each(function(){
			$j(this).removeClass("active");
			var imgpath = $j(this).find('.img').css("background-image").replace(pathURL,"");
			$j(this).find('.img').css('background-image',imgpath.replace(imgpath.substring(imgpath.indexOf("_"),imgpath.indexOf(".")),"_up"));
		});
	
		$j(CurrentMission+'.rect').each(function (){
			var imagePath = $j(this).css("background-image").replace(pathURL,"");	
			$j(this).css('background-image',$j(this).css("background-image").replace(imagePath.substring(imagePath.indexOf("_"),imagePath.indexOf(".")),"_tool2C"));
		});	
	}); 
	/* $j('.grid').ruler({
        vRuleSize: 0,
        hRuleSize: 0,
        showCrosshair : true,
        showMousePos: true
    });  */
	
	$j(CurrentMission+'.ask').on('click', function() { $j(".blockedEff").hide();$j(".allowedEff").hide(); 	$j('.ask').hide();
		var statment =$j(CurrentMission+'#bucket1>option:selected').text() +' '+$j(CurrentMission+'#bucket2>option:selected').val() +' ' +$j(CurrentMission+'#bucket3>option:selected').val()+' ' +$j(CurrentMission+'#bucket4>option:selected').text() +'?';
		var sstment = $j(CurrentMission+'#bucket3>option:selected').val()+$j(CurrentMission+'#bucket4>option:selected').val();
			if(sstment=='sides'){
				statment =statment.replace("side(s)","straight sides");	
			}
		var mergedTextfound=	getResponseString3($j(CurrentMission+'#bucket1>option:selected').val(),$j(CurrentMission+'#bucket2>option:selected').val(), $j(CurrentMission+'#bucket3>option:selected').val(),$j(CurrentMission+'#bucket4>option:selected').val());
		statment =	finalQuestionsXML.find('mergedBucket:contains('+mergedTextfound+')').parent().find('statement').text();
		var QuestionText = 'గుఢచారిని పంపించండి కలిగి ఫీచర్ ' +statment;

		var ResponseText= "";//getResponse($j('#bucket1>option:selected').val(),$j('#bucket2>option:selected').val(), $j('#bucket3>option:selected').val(),$j('#bucket4>option:selected').val());
		GenerateShape($j(CurrentMission+'#bucket1>option:selected').val(),$j(CurrentMission+'#bucket2>option:selected').val(), $j(CurrentMission+'#bucket3>option:selected').val(),$j(CurrentMission+'#bucket4>option:selected').val());
		var QuestionDiv ='<div class="questionField" style="position: relative; margin: 0px;  width: 690px; margin: 5px; height: 20px; right: auto; bottom: auto; "><div class="questionText" style="position: absolute;    text-align: left; margin: 0px; left: 0px; top: 0px; width: 525px; height: 20px; right: auto; bottom: auto;  font-family: Arial, Helvetica, sans-serif; font-size: 14px; color:#2d2b1a; font-weight: 700; text-decoration: none;">'+QuestionText+'</div><div class="questionResponse" style="position: absolute; margin: 0px; left: 518px; top: 0px; width: 160px; height: 20px; right: auto; bottom: auto; opacity:0.4;  font-family: Arial, Helvetica, sans-serif; font-size: 16px; color: #2d2b1a; font-weight: 700; text-decoration: none; text-align: right;">'+ResponseText+'</div><div class="questionLine" style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0);  background-color: rgb(50, 133, 180);"></div></div>';
		$j(CurrentMission+'.quest').prepend(QuestionDiv);
	/* 	$j(CurrentMission+'.sample').hide();
		$j(CurrentMission+'.quest').prepend(QuestionDiv);
		if(ResponseText == "అవును" || ResponseText == "కాదు" ){
		var feedBackDiv ='<div class="feedbackStatment" resp="'+ResponseText+'" statment="'+queryString+'" style="position: relative; margin: 5px;   width: 336px; height: 23px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transform: translateZ(0px);"><div class="statmentText" style="position: absolute; margin: 0px; left: 18px; top: 0px; width: 213px; height: 20px; right: auto; bottom: auto; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(255, 255, 255); font-weight: 700; text-decoration: none;">'+statment+'</div><div style="position: absolute; margin: 0px; left: 213px; top: 0px; width: 95px; height: 20px; right: auto; bottom: auto; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(168, 255, 81); font-weight: 700; text-decoration: none; text-align: right;">'+ResponseText+'</div><div style="position: absolute; margin: 0px; left: 0px; top: 20px; width: 683px; height: 1px; right: auto; bottom: auto; border: 0px none rgb(0, 0, 0); -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background-color: rgb(50, 133, 180);"></div><div class="spot" style="position: absolute; margin: 0px; left: 0px; top: 1px; width: 13px; height: 13px; right: auto; bottom: auto; border-radius: 50%; border: 0px none rgb(0, 0, 0);  background-color: #1dc105;"></div></div>';
		$j(CurrentMission+'.quest2').prepend(feedBackDiv);
		} */
		$j('#bucket2,#bucket3,#bucket4,#bucket1').prop('selectedIndex', 0).selectric('refresh');
	});
	$j(CurrentMission+".tool2:eq(2)").qtip({    content: {text: 'Obtuse Angle Marker'}	});
	$j(CurrentMission+".tool2:eq(1)").qtip({    content: {text: 'Right Angles'}	});
	$j(CurrentMission+".tool2:eq(0)").qtip({    content: {text: 'Acute Angle Marker'}	});
	$j(CurrentMission+".tool2:eq(3)").qtip({    content: {text: 'Reflex Angle Marker'}	});
}
function getResponseString3(b1,b2,b3,b4){
if(b2=="") b2 ="1";
if(b3=="") b3 ="empty";

queryString = b1+b2+b3+b4; //alert("came "+queryString);
return queryString;
}
function shuffle(o){
 for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
 return o;
}

function callbackPuff3(){
	if(currentScore>0){
		$j(this).effect( "puff", {}, 300);
			coinUP.play();		
		currentScore = currentScore- $j(this).prop("coinVal")
		$j(".scoretxt").html(currentScore);
		$j(".scoretxt").effect( "highlight",200);
	}
	if(currentScore <= coinsValue3[currentStage-1]){
			isMatched=false;
			shapeOrigin='Block';
			alertify.alert('అయ్యయ! మీరు మీ పరశ్ాలనిాంట్ినీ పూరిత చేస సుకునాారు. వచేే సారి కేసుతో బెట్ర్ లక్!',showFeedback2);			
			//currentCulpret = "fig000";
			//resetLevel();
			//mission2();
		}
}

function GenerateShape(b1,b2,b3,b4){
	if(b2=="") b2 ="1";
	if(b3=="") b3 ="empty";
	queryString = b1+b2+b3+b4;
	//alert(queryString);
	//if statement is invalid  then "Invalid " for figure 1 then its invalid deduct tokens
	//alert(finalQuestionsXML);
	var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+queryString+')').parent();
	valueObj = XMLNode.find("fig001").text();
	
	if(valueObj =="Invalid")
	{ 
		countNA++;
		alertify.error('ఇది చెల్లుబాటయ్యే లక్షణం కాదు' );
		loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanInvalid").play(1);
		var filepath = "shapes/00/00_normal.svg";
		$j(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		calculateScore3();
		return;
	}
	// we will have to skip there shape 
	//if (valueObj =="TBD"){ countTBD++; return "Don't Know";}
	//if (valueObj =="NA"){ countIDK++; return "I don't understand";}
	if(statmentIS == queryString){
		//alert('Eqal');
		//get from allowed set 
		//alert("Allowed");
		shapeOrigin='Allowed';
		$(".questionResponse:first").text("Allowed");
		var value =$j(AllowedSet[allowedCount]).text();
		var filename = (value).substring(4,6);
		var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
		$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission+'.genrate .rect').parent().prop("fig","fig0"+filename);
		allowedCount++;
	}else{
		//get from blocked set
		//alert("Blocked");
		//alert('Sending From Block');
		$(".questionResponse:first").text("Blocked");
		var value ="NF";
		shapeOrigin='Blocked';
		///////////////////////Generate Shape 
		$j(BlockedSet).each( function(key, vv) { 
			//console.log(value);
			//alert($j(vv).text());
			valueObj = XMLNode.find($j(vv).text()).text();
			if(valueObj == "Y"){
				value = $j(vv).text();BlockVisible.push(value);
				BlockedSet.splice(key,1);
				return false; 
			} 		
		});
		if(value == "NF"){
			//alert("No Agent available At this time. (In Block) take From Allowed. IF the condition matched then for all It will be Case Solved");
			//alert('Sending From Allowed');
			shapeOrigin='Allowed';
			$j(AllowedSet).each( function(key, vv) { 
				if(key<4)  return true;
				//alert($j(vv).text());
				valueObj = XMLNode.find($j(vv).text()).text()
				if(valueObj == "Y"){ 
					console.log(valueObj );
					value = $j(vv).text();
					BlockVisible.push(value);
					AllowedSet.splice(key,1);
					return false; 
				} 		
			});
			$(".questionResponse:first").text("Allowed");
		}
		if(value == "NF"){ alert("No agent available At this time. "); return;
			$(".questionResponse:first").text("Can't Generate");
		}
		///////////////
		//BlockVisible.push(value);
		var filename = (value).substring(4,6);
		var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
		$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		$(CurrentMission+'.genrate .rect').parent().prop("fig","fig0"+filename);
		blockedCount++;
		// if i cant find it in blocked
	}
	bindSend(value);
	/* var XMLNode = finalQuestionsXML.find('mergedBucket:contains('+queryString+')').parent();
		valueObj = XMLNode.find(fig).text();
		if(valueObj=="Y"||valueObj=="N"){CurrentClue =true;

		$j('#bucket2,#bucket3,#bucket4,#bucket1').prop('selectedIndex', 0).selectric('refresh');
		} */
		
}

function calculateScore3(){
	if(currentScore>coinsValue3[currentStage-1]){
		if(isBonus==1){
			$j(".mission3 .coin:eq(7)").effect( "explode", {}, 500, callbackPuff3 );
			isBonus=0;
		}else{
			$j(".mission3 .coin:eq("+--stageCoins+")").effect( "explode", {}, 500, callbackPuff3); 	
		}
	}
	if(currentScore <= coinsValue3[currentStage-1]){
			isMatched=false;
			shapeOrigin='Block';
			alertify.alert('అయ్యయ! మీరు మీ పరశ్ాలనిాంట్ినీ పూరిత చేస సుకునాారు. వచేే సారి కేసుతో బెట్ర్ లక్!',showFeedback2);			
			//currentCulpret = "fig000";
			//resetLevel();
			//mission2();
		}
}

function unbindSend(){
	$j(CurrentMission+' .btn_discard').unbind('click');
	$j(CurrentMission+' .done').unbind('click');
	$j(CurrentMission+' .done').css("opacity",0.3);
	$j(CurrentMission+' .btn_discard').css("opacity",0.3);
	
}

function bindSend(targetShape){
	unbindSend();
	$j(CurrentMission+' .done').css("opacity",1);
	$j(CurrentMission+' .btn_discard').css("opacity",1);
	///////////////////
	$j(CurrentMission+' .done').click(function (){ //$j('.ask').show();
		unbindSend();
		if(statmentIS == queryString){
			//alert("Correct ! Game end here.Play Next Level");
			showFeedback();
			//alert("Feedback Screen Will Be Shown Here");
			//startNextLevel();
		}	
		else{
			  //alert('Shape Origin'+shapeOrigin+' and TargetShape is'+targetShape);	
			  var allPropertyAllowedShape;
			  var allPropertyBlockedShape;
			  var found=0;
			  $j(AllowedSet).each( function(key, vv) { 
					if(key>3 || key ==AllowedSet.length){ return true;}
					
					// wrong logic
					/* allPropertyAllowedShape =finalQuestionsXML.find($j(vv).text()).filter(function(){
						var value = $(this).text();
						return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
					}).parent().find('mergedBucket:contains('+queryString+')');
					
					$j(allPropertyAllowedShape).each(function(key, vv) {	
						//alert('In Allowed'+key+','+vv+','+found);
						found++;
					}); */
					var property =finalQuestionsXML.find('mergedBucket:contains('+queryString+')').parent().find($j(vv).text()).text();
					if(property == "Y"||property == "NA"){
							found++;
					}
					//.filter(function(){
					/* 	var value = $(this).text();
						return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
					}) */
			  });	
			 // alert("found shit "+found);
			  if(found==4 || found==AllowedSet.length){
				  var found=0;
				  //alert('Check:property is in allowed, it should not be in blocked then its a success');
				  $j(BlockVisible).each( function(key, vv) { 
					if(key>3){ return true;}
					/* allPropertyBlockedShape =finalQuestionsXML.find($j(vv).text()).filter(function(){
						var value = $(this).text();
						return (value == "N"); // returns boolean - true will keep this item in the filtered collection
					}).parent().find('mergedBucket:contains('+queryString+')');
					
					$j(allPropertyBlockedShape).each(function(key, vv) {	
						//alert('In Blocked'+key+','+vv+','+found);
						found++;
					}); */
					var property =finalQuestionsXML.find('mergedBucket:contains('+queryString+')').parent().find(vv).text();
					if(property == "N"){
							found++;
					}
				 });
			  }
			  if(found==4 ){
				  shapeOrigin='Allowed';
			  } 
			  if(shapeOrigin=='Blocked'){
				 showIncorrect();
				 calculateScore3(); 
			  }else{
				   showFeedback();
				  //startNextLevel();
			  } 
		}
		
	});
	$j(CurrentMission+' .btn_discard').click(function (){ //$j('.ask').show();
		unbindSend();
		/* if(statmentIS == queryString){
			  showIncorrect(1);
			  calculateScore3();
		}
		else{
			  //alert('Shape Origin'+shapeOrigin);
			  if(shapeOrigin=='Allowed'){
				showIncorrect(1);
				calculateScore3();
			  }else{
				  //alert("Correct! ");	
			  }
		} */
		var filepath = "shapes/00/00_normal.svg";
		$j(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		shapeOrigin='Blocked';
	});
}

function showFeedback(){ assessment_positive.play();
$j(".feed:eq(2) .gateOpen").css('background-image','url("images/go_correct.png")');
$j(".allowedEff").show();
//$j( ".genrate" ).addClass("ui-effects-transfer_allow");
$j( ".genrate" ).delay(1000).effect( "transfer",{ to: ".allowed", className: "ui-effects-transfer_allow" }, 1000).delay(800).effect( "transfer",{ to: ".allowed", className: "ui-effects-transfer_allow" }, 500);
	$j(".feed:eq(2) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(2) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(2) .star:eq(0)").html(" "+ (isBonus?'3':'0'));
	gameScore+=isBonus?3:0;
	if(isBonus){
		setTimeout(function () { assessment_positive.play();
		
		loadedComps["feedback"].getStage().getSymbol("m03_feedback").getSymbol("anim_star").play(1);
		}, 4000);
		setTimeout(function () {
		loadedComps["feedback"].getStage().getSymbol("m03_feedback").$("mc_PerfectScore").show();
		loadedComps["feedback"].getStage().getSymbol("m03_feedback").getSymbol("mc_PerfectScore").play(1);
		}, 4500);
	}
	$j(".lvlScreen .level2").html("లెవెల్  "+ (currentLevelDisplay3[currentStage-1]+1));
	$j(CurrentMission+" .star:eq(0)").html(" "+ gameScore);
	loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanAnimation").play(1);
setTimeout(function(){ /* $j( ".genrate" ).removeClass("ui-effects-transfer_allow");  */
$j(".allowedEff").hide();
/* { $j(".mtch_txt").html(""); $j(".job").html("చక్కటి ప్రయత్నం! ");$j(".solved").html("దయచేసి మళ్ళీ ప్రయత్నించండి!");
	$j( ".additionalTextVal").html("ఒక కొత్త కేసు పరిష్కరించడానికి ప్రయత్నించండి");
	$j( ".additionalTextVal").hide();
	}else{
 */	
	$j(".mtch_txt").html("అనుమతించబడ్డది"); $j(".job").html("అద్భుతమైన పని! ");$j(".solved").html("నువ్వు నీ రహస్య గూఢఛారిని లోపలికి పంపించగలిగావు");
	 $j( ".additionalTextVal").show();
//	}
		var suspected =$j( '.genrate .rect').parent().prop("fig");
		var sp = suspected.replace("fig0","");
		$j(".feed:eq(2) "+".matchShape").css('background-image',' url("	shapes/'+sp+'/'+sp+'_normal.svg"');
	$j( ".additionalTextVal").html("మరొక ఫ్యాక్టరీకి తగిన జూడిక్ గూఢచారిని మీరు కనుగొనవలసిన అవసరం ");
	if(currentStage >= 5){
	jQuery( ".additionalTextVal").html("<br>	&ensp;	&ensp;	&ensp;	&ensp;	&ensp;మిషన్ ముగింపు!");
	}
	$j("#feedback").toggle("slide", function(){ jQuery(".feed").hide();  jQuery(".feed:eq(2)").show();});
	
	}, 3500);
	$j(".feed:eq(2) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(2) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(2) "+".scoretxt").html(currentScore);
	$j(".feed:eq(2) "+".scoretxt").effect( "highlight",200);
}

function showFeedback2(){ assessment_negative.play();
$j(".feed:eq(2) .gateOpen").css('background-image','url("images/go.png")');
//$j( ".genrate" ).addClass("ui-effects-transfer_allow");
	$j(".feed:eq(2) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(2) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(2) .star:eq(0)").html(" "+ (isBonus?'3':'0'));
	gameScore+=isBonus?3:0;
	if(isBonus){
		setTimeout(function () {
		
		loadedComps["feedback"].getStage().getSymbol("m03_feedback").getSymbol("anim_star").play(1);
		}, 4000);
		setTimeout(function () {
		loadedComps["feedback"].getStage().getSymbol("m03_feedback").$("mc_PerfectScore").show();
		loadedComps["feedback"].getStage().getSymbol("m03_feedback").getSymbol("mc_PerfectScore").play(1);
		}, 4500);
	}
	$j(".lvlScreen .level2").html("లెవెల్  "+ (currentLevelDisplay3[currentStage-1]+1));
	$j(CurrentMission+" .star:eq(0)").html(" "+ gameScore);
	loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanAnimation").play(1);
	$j(".feed:eq(2) .token:eq(1)").html("X "+stageCoins);
	$j(".feed:eq(2) .token:eq(0)").html("X "+ (isBonus?'1':'0'));
	$j(".feed:eq(2) "+".scoretxt").html(currentScore);
	$j(".feed:eq(2) "+".scoretxt").effect( "highlight",200);
//setTimeout(function(){
	$j(".mtch_txt").html("అవరోధించబడ్డది"); $j(".job").html("అయ్యయ!");$j(".solved").html("మీరు ఒక తగిన జూడిక్ గూఢచారిని కనుక్కోలేకపోయారు! ");
	 $j( ".additionalTextVal").show();

		var suspected ="fig000";
		var sp = suspected.replace("fig0","");
		$j(".feed:eq(2) "+".matchShape").css('background-image',' url("shapes/00/00_normal.svg"');
	$j( ".additionalTextVal").html("Try to solve a new case.");
	$j("#feedback").toggle("slide", function(){ jQuery(".feed").hide();  jQuery(".feed:eq(2)").show();});
	
	//}, 2000);
	
}

function showIncorrect(tt){ 
loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanAnimation").play(1);

/* mission3 mainGameUI 
loadedComps["mission3"].getStage().getSymbol("mainGameUI").getSymbol("scanInvalid").play(1)
invalidEff
animEff
allowedEff
blockedEff */
if(tt){



	//$j( ".genrate" ).addClass("ui-effects-transfer_block");
	setTimeout(function(){ /* $j( ".genrate" ).removeClass("ui-effects-transfer_block"); */ $j(".blockedEff").show(); }, 3000);
}else{
//$j( ".genrate" ).addClass("ui-effects-transfer_block");
$j( ".genrate" ).delay(1000).effect( "transfer",{ to: ".blocked", className: "ui-effects-transfer_block" }, 1000).delay(800).effect( "transfer",{ to: ".blocked", className: "ui-effects-transfer_block" }, 500)
//$j( ".genrate" ).css("border" ,"3px solid #99cc00")
setTimeout(function(){ /* $j( ".genrate" ).removeClass("ui-effects-transfer_block"); */ $j(".blockedEff").show();}, 3000);
}
}
var	allowedCount = 4;
var	blockedCount = 4;
var BlockVisible =[];
var stageShapesMin=1;
var stageShapesMax=3;
var currentLevelDisplay3=[1,1,2,2,3,3];
function startMission3(){ shapeOrigin='Blocked'; $j("#gloss_btn,#help_btn,#menu_btn").show(); startTimerlvl();
	AllowedSet=[];
	BlockedSet=[];
	BlockVisible =[];
	ruleIs = "";
	statmentIS = "";
	allowedCount = 4;
	blockedCount = 4;
	countNA = 0;
	queryString = "";
	valueObj =""; 
	CurrentSet = [];
	currentShape ="fig001";
	isMatched = false;
		$j(".star").html(" "+ gameScore);
	stageCoins = coinsStack3[currentStage-1];
	$j(CurrentMission+" .coin:gt("+(stageCoins-1)+")").hide();
	$j(CurrentMission+" .coin:eq(7)").show();
	$j(CurrentMission+" .coin:lt(7)").css("background-image",coinsImg[currentStage-1]);
		$j(CurrentMission+" .coin:eq(7)").css("background-image",coinsImgT);
	 $j(".feed:eq(2) .coinToken:eq(0)").css("background-image",coinsImgT);
	 $j(".feed:eq(2) .coinToken:eq(1)").css("background-image",coinsImg[currentStage-1]);
	$j(CurrentMission+".mission").html("మిషన్ 3");
	$j(CurrentMission+".level").html("లెవెల్  "+currentLevelDisplay3[currentStage-1]);
	currentScore =MaxScore3[currentStage-1];
	if(isBonus==1){
		$j(CurrentMission+".coin:eq(7)").show();
	}else{
		$j(CurrentMission+".coin:eq(7)").hide();
		currentScore = currentScore- $j(CurrentMission+" .coin:eq(7)").prop("coinVal");
	}
	$j(CurrentMission+".scoretxt").html(currentScore);
	$j(CurrentMission+" .btn_done, .btn_discard").css("opacity",0.3);
 	var filepath = "shapes/00/00_normal.svg";
	$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
		switch(currentStage){
		case 1: {stageShapesMin=1; stageShapesMax=3;}break;
		case 2: {stageShapesMin=4; stageShapesMax=6;}break;
		case 3: {stageShapesMin=7; stageShapesMax=9};break;
		case 4: {stageShapesMin=10; stageShapesMax=12};break;
		case 5: {stageShapesMin=13; stageShapesMax=17};break;
		}
		if(isBonus!=0)
		ReturnStage1Shpes (randomNo(stageShapesMin,stageShapesMax));
		else{
		ReturnStage1Shpes (RandomNumberWas);
		}
	shuffle(AllowedSet)
	shuffle(BlockedSet)
	//BlockedSet.shuffle();
	
	$j(CurrentMission+' .allowed .rect').each(function (index){ 
	
	if(AllowedSet.length == (index)){ 
		$(this).css('background-image',' none');
		$(this).parent().prop("fig","fig000");
		return;
	}
	value = $j(AllowedSet[index]).text();
	var filename = (value).substring(4,6);
	var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
		$(this).css('background-image',' url("'+filepath+'"');
		$(this).parent().prop("fig","fig0"+filename);
		
	});
	
	$j(CurrentMission+' .blocked .rect').each(function (index){
	value = $j(BlockedSet[index]).text();
	BlockVisible.push(value);
	VisibleBlockedSet.push(BlockedSet[index]);
	 /* BlockedSet.find(value).parent().remove(); */
	 BlockedSet.splice(index,1);
 	 var filename = (value).substring(4,6);
	 var filepath = "shapes/"+filename+"/"+filename+"_normal.svg";
	 $(this).css('background-image',' url("'+filepath+'"');
	 $(this).parent().prop("fig","fig0"+filename);
	});
}

function randomNo(min,max){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
var VisibleBlockedSet = [];
var AllowedSet;
var BlockedSet;
var ruleIs = "";
var statmentIS = "";
var RandomNumberWas =0;
function ReturnStage1Shpes (rndom){ 
	//rndom=1;
	RandomNumberWas =rndom;
	switch (rndom){ 
			case 1: { //At least one curved side
				statmentIS ="atleast1curvedsides";
				ruleIs = "At least one curved side";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				
				BlockedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "N"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			}
			break; 
			case 2: { //No curved sides yes
				ruleIs = "No curved sides yes";
				statmentIS ="no1curvedsides";
				AllowedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "N"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				
				BlockedSet =dataShapeXML.find('curvedSide').filter(function(){
					var value = $(this).text();
					return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			}
		    break; 
			/* case 3:
			{ 
				//Exactly n sides (3>= n <= 5)
				var minNumber =3; var  maxNumber =6
				var n= randomNo(3,6);
				ruleIs = "Exactly n sides (3>= n <= 6). n equals "+n;
				statmentIS ="exactly"+n+"emptysides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value == n)//(value >= minNumber && value <= maxNumber); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				BlockedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value < n || value > n ); 
				}).parent().find("ShapeID");
			}
			break; */
			////////////////new set
			
			case 3:
			{ 
				//Exactly n sides (3>= n <= 5)
				var minNumber =3; var  maxNumber =6
				var n= 3;//randomNo(3,6);
				ruleIs = "Exactly n sides (3>= n <= 6). n equals "+n;
				statmentIS ="exactly"+n+"emptysides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value == n)//(value >= minNumber && value <= maxNumber); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				BlockedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value < n || value > n ); 
				}).parent().find("ShapeID");
			}
			break;
			///////////////////////////////stage 2
			case 4:
			{ 
				//Exactly n sides (3>= n <= 5)
				var minNumber =3; var  maxNumber =6
				var n= 6;//randomNo(3,6);
				ruleIs = "Exactly n sides (3>= n <= 6). n equals "+n;
				statmentIS ="exactly"+n+"emptysides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value == n)//(value >= minNumber && value <= maxNumber); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				BlockedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value < n || value > n ); 
				}).parent().find("ShapeID");
			}
			break;
			case 5:
			{ 
				//Exactly n sides (3>= n <= 5)
				var minNumber =3; var  maxNumber =6
				var n= 4;//randomNo(3,6);
				ruleIs = "Exactly n sides (3>= n <= 6). n equals "+n;
				statmentIS ="exactly"+n+"emptysides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value == n)//(value >= minNumber && value <= maxNumber); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				BlockedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value < n || value > n ); 
				}).parent().find("ShapeID");
			}
			break;
			case 6:
			{ 
				//Exactly n sides (3>= n <= 5)
				var minNumber =3; var  maxNumber =6
				var n= 5;//randomNo(3,6);
				ruleIs = "Exactly n sides (3>= n <= 6). n equals "+n;
				statmentIS ="exactly"+n+"emptysides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value == n)//(value >= minNumber && value <= maxNumber); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				BlockedSet =dataShapeXML.find('sides').filter(function(){
					var value = $(this).text();
					return (value < n || value > n ); 
				}).parent().find("ShapeID");
			}
			break;
			
			
			
			
			
			
			//////////////////////stage 3
			case 7: 
			{ //
				ruleIs = "All sides equal";
				statmentIS ="all1equalsides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('allSideEqual').filter(function(){
					var value = $(this).text();
					return (value == "Y"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				
				BlockedSet =dataShapeXML.find('allSideEqual').filter(function(){
					var value = $(this).text();
					return (value == "N"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
					
			}
			break;
		   case 8:
			{
				statmentIS ="exactly1reflexangles";
				ruleIs = "Exactly 1 reflex angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('reflexAngle').filter(function(){
				var value = $(this).text();
				return (value == "1"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('reflexAngle').filter(function(){
					var value = $(this).text();
					return (value !=1 ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");				
				
			}
			break;
			case 9:{
				statmentIS ="exactly1rightangles";
				ruleIs = "Exactly 1 right angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value == "1"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value !=1 ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				//Exactly 2 right angles
				//At least 1 right angle
				//At least 1 reflex angle
			}
			break;
			///////////////////10,11,12/////////////////stage 4
			/* case 15:{
				statmentIS ="exactly1equalpairsofsides";
				ruleIs = "Exactly 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break; */
			case 10:{
				statmentIS ="exactly1parallelpairsofsides";
				ruleIs = "Exactly 2 pair of sides parallel";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value != 1 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
			}
			break;
			case 11:{
				statmentIS ="exactly2rightangles";
				ruleIs = "Exactly 1 right angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value == "2"); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value !=2 ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
				//Exactly 2 right angles
				//At least 1 right angle
				//At least 1 reflex angle
			}
			break;
			case 12:{
				statmentIS ="exactly2parallelpairsofsides";
				ruleIs = "Exactly 2 pair of sides parallel";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value == 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value != 2 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
			}
			break;
			////////////////////////////////////stage 5 
			case 13:
			{
				statmentIS ="atleast1rightangles";
				ruleIs = "At least 1 right angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value <1  ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			}
			break;
			case 14:{
				statmentIS ="atleast1obtuseangles";
				ruleIs = "At least one obtuse angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('obtuseAngle').filter(function(){
				var value = $(this).text();
				return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('obtuseAngle').filter(function(){
					var value = $(this).text();
					return (value < 1  ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			}
			break;
		  
		/*  	case 15:{
				statmentIS ="exactly1equalpairsofsides";
				ruleIs = "Exactly 1 pair of sides equal";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
					var value = $(this).text();
				return (value != 1 ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
		} break; */
		
		case 15:{
				statmentIS ="exactly1equalpairsofsides";
				ruleIs = "exactly 1 equal pairs of sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value >= 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		 case 16:{
				statmentIS ="exactly2equalpairsofsides";
				ruleIs = "Exactly 2 pair of sides equal";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value == 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 2 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}  break;
		 	case 17:{
				statmentIS ="atleast2parallelpairsofsides";
				ruleIs = "At least 2 pairs of sides parallel";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value >= 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value < 2 ); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
////////////////not used
		 case 22:{
				statmentIS ="atleast1reflexangles";
				ruleIs = "At least 1 reflex angle";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('reflexAngle').filter(function(){
				var value = $(this).text();
				return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");/* .parent().find('sides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}) */
			
				BlockedSet =dataShapeXML.find('reflexAngle').filter(function(){
					var value = $(this).text();
					return (value <1  ); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 23:{
				statmentIS ="no1equalpairsofsides";
				ruleIs = "Exactly 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 0); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 0); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 24:{
				statmentIS ="atleast1rightangles";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 25:{
				statmentIS ="atleast1obtuseangles";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('obtuseAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('obtuseAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 26:{
				statmentIS ="atleast1reflexangles";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('reflexAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('reflexAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		
		case 27:{
				statmentIS ="exactly2equalpairsofsides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 2); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 28:{
				statmentIS ="exactly1equalpairsofsides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value == 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value != 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 29:{
				statmentIS ="exactly2parallelpairsofsides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('pairsParallelSides').filter(function(){
					var value = $(this).text();
					return (value == 2); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value != 2); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 30:{
				statmentIS ="morethan1equalpairsofsides";
				ruleIs = "Exactly 4 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('equalSidePair').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('equalSidePair').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 31:{
				statmentIS ="atleast1parallelpairsofsides";
				ruleIs = "atleast 1 parallel pairsofsides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value == 4); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('pairsParallelSides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 32:{
				statmentIS ="morethan1rightangles";
				ruleIs = "At least 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value >= 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('rightAngle').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('rightAngle').filter(function(){
				var value = $(this).text();
				return (value < 1); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
		case 33:{
				statmentIS ="atleast3parallelpairsofsides";
				ruleIs = "At least 3 sides";
				//alert('Current Statement-'+rndom+'--'+statmentIS);
				AllowedSet =dataShapeXML.find('sides').filter(function(){
				var value = $(this).text();
				return (value >= 3); // returns boolean - true will keep this item in the filtered collection
				}).parent().find('pairsParallelSides').filter(function(){
					var value = $(this).text();
					return (value >= 1); // returns boolean - true will keep this item in the filtered collection
				}).parent().find("ShapeID");
			
				BlockedSet =dataShapeXML.find('pairsParallelSides').filter(function(){
				var value = $(this).text();
				return (value < 2); // returns boolean - true will keep this item in th2 filtered collection
				}).parent().find("ShapeID");
		}
		break;
	}
}

function resetLevel3(){
$j("#trans3").hide();
$j("#feedback").hide();
$j(CurrentMission+".toolb").hide();
$j(".blockedEff").hide();
$j(".allowedEff").hide();
	//isBonus=0;
	//alert('Reset');
	$j('.ask').hide();
	$j('.bucket').show();
	$j(".quest").empty();
	$j(".bucket").empty();
	$j(".tool.active").trigger("click");
	$j(".mission3 .coin").show();
	var filepath = "shapes/00/00_normal.svg";
	$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
	enableTools3();
	startMission3()
}

function startNextLevel(){
$j("#trans3").hide();
$j("#feedback").hide();
$j(CurrentMission+".toolb").hide();
$j(".blockedEff").hide();
$j(".allowedEff").hide();	
	//alert('Next Level is'+currentStage);
	switch(currentStage){
		case 1: {stageShapesMin=1; stageShapesMax=3;}break;
		case 2: {stageShapesMin=4; stageShapesMax=6;}break;
		case 3: {stageShapesMin=7; stageShapesMax=9};break;
		case 4: {stageShapesMin=10; stageShapesMax=12};break;
		case 5: {stageShapesMin=13; stageShapesMax=17};break;
	}
	//alert('Stage Bound Cases Are'+stageShapesMin+','+stageShapesMax);
	if(currentStage == 6){currentStage =5;  $j(".nextcase").hide();}//alertify.alert("Mission Complete!"); 
	//$j(".play").hide();
	$j('.ask').hide();
	$j('.bucket').show();
	$j(".quest").empty();
	$j(".bucket").empty();
	$j(".tool.active").trigger("click");
	$j(".mission3 .coin").show();
	var filepath = "shapes/00/00_normal.svg";
	$(CurrentMission+'.genrate .rect').css('background-image',' url("'+filepath+'"');
	enableTools3();
	startMission3();
}
//btn_done, btn_discard
///////////////Common elements 
/* var array1  = [1, 2, 3, 4, 5, 6],
    array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var common = $.grep(array1, function(element) {
    return $.inArray(element, array2 ) !== -1;
});
console.log(common); // returns [1, 2, 3, 4, 5, 6];
var array3 = array2.filter(function(obj) { return array1.indexOf(obj) == -1; });
// returns [7,8,9];*/