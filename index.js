setInterval(Clock, 1000)

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function Clock(){
    const currDate = new Date()
    const seconds = currDate.getSeconds() / 60;
    const minutes =(seconds+ currDate.getMinutes()) / 60;
    const hours = (minutes + currDate.getHours()) / 12;
    Rotation(secondHand,seconds)
    Rotation(minuteHand, minutes);
    Rotation(hourHand, hours);
}

function Rotation (element,rot) {
    element.style.setProperty('--rot',rot * 360)
}

