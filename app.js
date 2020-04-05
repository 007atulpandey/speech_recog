const text = document.querySelector('.text');
const btn = document.querySelector('.submit');


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart= function(){
    console.log("text is activ");
}

recognition.onresult=function(event){
    const cuurent=event.resultIndex;
    const transcript= event.results[current][0].transcript;
    text.textContent=transcript;
}

btn.addEventListener('click',()=>{
    recognition.start();

});
