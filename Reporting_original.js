var playedMission =[0,0,0,0];
var StorySkiped = false;
var GlossaryDownloaded = false;
var helpScreen =[0,0,0,0];
var JsonArray = 
{
                "app_name": "policesquadv2",
                "event_type": "session_end",
                "params": 
{
"StudentGroupName": GroupName,
"location": "SchoolName",
"MissionsPlayed": playedMission,
"highScore": highScore,
"starTotal": gameScore,
"StorySkiped": StorySkiped,
"GlossaryDownloaded": GlossaryDownloaded,
"helpScreenviewed": helpScreen,
"Mission1Stage": currentstage,
"Mission2Stage": CurrentStage,
"Mission3Stage": currentStage,
"Mission4Stage": currentLevel +1
}        
}

