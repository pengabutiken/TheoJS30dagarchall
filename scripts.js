const secondHand=document.querySelector('.sec-hand');
const minhand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function setDate(){
    const now =new Date();
    const seconds= now.getSeconds();
    const secondsDegrees=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

    const mins=now.getMinutes();
    const minDegrees=((mins/60)*360)+90;
    minhand.style.transform=`rotate(${minDegrees}deg)`;

    const hours=now.getHours();
    const hourDegrees=((hours/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;
console.log(seconds, mins, hours)
}
setInterval(setDate,1000);