window.addEventListener("load", onLoad());
function speaking(){
    speechRs.speechinit('Google UK English Female',function(e){
        speechRs.speak("Welcome",function(){
            
        },false);
    });
}

function listening() {
	console.log(1);
	document.getElementById("speech-result").value=" ";
	document.getElementById("abc").innerHTML="Listening";
    speechRs.rec_start('en-UK',function(final_transcript,interim_transcript){
        if(final_transcript.includes("sleep assistant"))
            stopListening();
        else
        document.getElementById("speech-result").value=final_transcript;
    });
}

function stopListening() {
    debugger;
    var text=document.getElementById("speech-result").value;
	speechRs.speechinit('Google UK English Female',function(e){
    speechRs.speak(text,function(){
        },true);
    document.getElementById("abc").innerHTML="";
    return ;
    });
	
	//speechRs.rec_stop();
}

function onLoad() {
    if(window.webkitSpeechRecognition === undefined) {
        document.getElementById("start-listen").style.display="none";
        document.getElementById("stop-listen").style.display="none";
    }
    speechRs.rec_start('en-US',function(final_transcript,interim_transcript) { 
        if(final_transcript.includes("hello assistant"))
            listening();
        }
    );
    alert("hi");
}