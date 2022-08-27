const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPercentage)=>{
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

//pegando hora,minutos,secundos
const setClock = ()=>{
    const currentDate = new Date();

    const secondsPorcentage = currentDate.getSeconds() / 60;
    // minutos mexendo junto aos segundos
    const minutesPorcentage = (secondsPorcentage + currentDate.getMinutes()) / 60;
    // horas mexendo junta aos minutos
    const hoursPorcentage = (minutesPorcentage + currentDate.getHours()) / 12;

    setRotation(secondsHand, secondsPorcentage);
    setRotation(minutesHand, minutesPorcentage);
    setRotation(hoursHand, hoursPorcentage);
};

setClock();

// setClock está sendo chamado a cada 1 segundo
setInterval(setClock, 1000);