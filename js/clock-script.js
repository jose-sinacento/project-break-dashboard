const digitalWatch = document.getElementById('reloj-digital');
const timeMessage = document.getElementById('time-message');
const deleleteTxt = document.getElementById('deleleteTxt');
// TODO:Anadir funcion para borrar los mensajes. 
//(2)PRINT DATE AND TIME

function updateDateTime() {
    
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    
    if (hours <10) {
    hours = '0' + hours;
}

if (minutes < 10) {
    minutes = '0' + minutes;
}
if (seconds < 10) {
    seconds = '0' + seconds
}

digitalWatch.innerHTML = `<p class="print-time">${hours}:${minutes}:${seconds}</p>
<p class="print-date">${day}/${month+1}/${year}</p>`

if (hours == 0 && hours <1) {
    timeMessage.innerHTML = `<p>¡Hora de dormir, crápula! Continua mañana salvando a el Mundo.</p>
    <button id="deleleteTxt">Borrar</button>`;
}

if (hours == 7 && hours <8) {
    timeMessage.innerHTML =  `<p>Hora de despertarse. ¡Hoy puede ser un gran día!...¡O no!</p>
    <button id="deleleteTxt">Borrar</button>`;
}

if (hours == 8 && hours <9) {
    timeMessage.innerHTML = `<p>Hora de quemar los polvorones, gandul. ¡A entrenar!</p>
    <button id="deleleteTxt">Borrar</button>`
}

if (hours == 12 && hours <14) {
    timeMessage.innerHTML = `<p>Es hora de almorzar</p>
    <button id="deleleteTxt">Borrar</button>`
}

if (hours == 15 && hours < 17) {
    timeMessage.innerHTML = `<p>Es hora del café</p>
    <button id="deleleteTxt">Borrar</button>`
}
else {
    timeMessage.innerHTML = '';
}

};

setInterval(updateDateTime, 1000);
updateDateTime();

// deleleteTxt.addEventListener('click', function () {
//     if (deleleteTxt) {
//         timeMessage.innerHTML = "";
//     }
// });

//(3)CREATE PASSWORD 

// (4)SAVE FAVORITE LINKS

// (5)WEATHER