setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondsHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    // secondsRatio is a percentage of the minute, .5 = 30seconds, .75= 45seconds and so on
    //it will allow the minutes hand to move gradually in the clock
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    //hours is divided by 12, cause there are 12hours on the clock 

    setRotation(secondsHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()