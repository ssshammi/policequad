var playedMission =[0,0,0,0];
var completedMission =[0,0,0,0];

var StorySkiped = false;
var GlossaryDownloaded = false;
var helpScreen =[0,0,0,0];
/* var JsonArray = [
{
"StudentGroupName": GroupName,
"location": "SchoolName"
},
{
"MissionsPlayed": playedMission,
"highScore": highScore,
"starTotal": gameScore,
"StorySkiped": StorySkiped,
"GlossaryDownloaded": GlossaryDownloaded,
"helpScreenviewed": helpScreen,
},
{
"Mission1Stage": currentstage,
"Mission2Stage": CurrentStage,
"Mission3Stage": currentStage,
"Mission4Stage": currentLevel +1
}
]; */


/* function doQuit(){
JsonArray2 = [
{
"MissionsPlayed": playedMission, // Mission attempted [0,0,0,0]  1 is yes
"MissionsCompleted": completedMission, //Mission completed - yes/ no
"SessionTimeSpent": getTimeSpent(), //Mission time spent  total 
"highScore": highScore,  //highScore
"starTotal": gameScore, //starts earned total
"StorySkiped": StorySkiped,  //story skiped
"GlossaryDownloaded": GlossaryDownloaded,  //Glossary downloaded
"helpScreenviewed": helpScreen, //help screen per Mission [0,0,0,0] 1 is yes
},
{
"Mission1Stage": currentstage,
"Mission2Stage": CurrentStage,
"Mission3Stage": currentStage,
"Mission4Stage": currentLevel +1
}
];
//pass the method to calculate score.
window.opener.saveDataOnExit(JsonArray2);


} */

function doQuit(){
var JsonArray = 
{
"app_name": "policesquadv2",
"event_type": "session_end",
"params": 
{
"MissionsPlayed": playedMission, // Mission attempted [0,0,0,0]  1 is yes
"MissionsCompleted": completedMission, //Mission completed - yes/ no
"SessionTimeSpent": getTimeSpent(), //Mission time spent  total 
"highScore": highScore,  //highScore
"starTotal": gameScore, //starts earned total
"StorySkiped": StorySkiped,  //story skiped
"GlossaryDownloaded": GlossaryDownloaded,  //Glossary downloaded
"helpScreenviewed": helpScreen, //help screen per Mission [0,0,0,0] 1 is yes
"Mission1Stage": currentstage,
"Mission2Stage": CurrentStage,
"Mission3Stage": currentStage,
"Mission4Stage": currentLevel +1
}

}; 
//pass the method to calculate score.
//window.opener.saveDataOnExit(JsonArray);
}

function stageEnd( mmission,stagePlayed,replayCount,isPassed,caseDetails,scoreIN,stageStar){
var JsonArray = 
{
"app_name": "policesquadv2",
"event_type": "stage_end",
"params": 
{
"CurrentMission": mmission,
"CurrentLevel": "", //please infer per mission
"StagePlayed": stagePlayed, // cases attempted
"ReplayUsedNumber": replayCount, //Mission completed - yes/ no
"statusConpleted": isPassed, //passed or failed
"TimeSpentStage": getTimeSpentLvl(), //Mission time spent  total 
"CaseDetails": caseDetails,
"NumberOfErrors": "", //infer it from case details values
"NumberOfClues": "",//infer it from case details values
"scoreAchieved": scoreIN,  //highScore
"starEarned": stageStar //starts earned total
}

};  replayCount =0;
//pass the method to calculate score.
//window.opener.saveDataStages(JsonArray);
//console.log(JsonArray);
}

