
const API = 'https://api.adviceslip.com/advice';
const adNumber = document.getElementById("adNumber");
const adText = document.getElementById("adText");
const adButton= document.getElementById("adButton");
adButton.addEventListener('click', ()=>newAdvice());

async function  newAdvice() {
    
    const advice = await fetch(API);
    const result= await advice.json();
   
    adNumber.innerText="ADVICE #" + result.slip.id;
    adText.innerText="\""+result.slip.advice+"\"";
}
newAdvice();