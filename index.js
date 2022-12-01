function getSeconds() {
    let seconds = new Date();
    let getsec = seconds.getSeconds();
    seconds = (((getsec/60)*360)+90);
    return seconds;
}
function getMinute() {
    let minute = new Date();
    let getMinute = minute.getMinutes();
    minute = (((getMinute/60)*360)+90);
    return minute;
}
function getHour() {
    let hour = new Date();
    let gethr = hour.getHours();
    hour = (((gethr/12)*360)+90);
    return hour;
}

let secondHand = document.querySelector(".second-hand");
let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
setInterval(() => {
    secondHand.style.transform = `rotate(${getSeconds()}deg)`;
    minuteHand.style.transform = `rotate(${getMinute()}deg)`;
    hourHand.style.transform = `rotate(${getHour()}deg)`;
}, 1000);

