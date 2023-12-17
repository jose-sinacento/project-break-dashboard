const digitalWatch = document.getElementById('reloj-digital');

//(2)PRINT DATE AND TIME 
let date = new Date()
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

let storeInterval;

function printCurrentDate() {
    return digitalWatch.innerHTML = `<p class="print-time">${hours}:${minutes}:${seconds}</p>
    <p class="print-date">${day}/${month+1}/${year}</p>`
}
setInterval(printCurrentDate, 1000);


//(3)CREATE PASSWORD 

// (4)SAVE FAVORITE LINKS

// (5)WEATHER