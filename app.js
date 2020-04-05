const text = document.querySelector('.text');
const btn = document.querySelector('.submit');



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart= function(){
    console.log("text is active");
}

recognition.onresult=function(event){
    const current=event.resultIndex;
    const transcript= event.results[current][0].transcript;
    text.textContent=transcript;
    readOutLoud(transcript);
}
// recognition.start();
btn.addEventListener('click',()=>{
    recognition.start();

});

// readOutLoud(document.querySelector('.welcome').textContent);
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text= message;
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    window.speechSynthesis.speak(speech);
}
