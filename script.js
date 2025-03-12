/*------------------------ GENERAL --------------------------------------*/
let timerInterval
let elapsedTime = 0;
let isRunning = false;

// OBTENIDO PARÁMETROS DEL COUNTDOWN
//   Entrada en el DOM
// const timeInputCountDown = document.getElementById('timeInputCountDown');
//   Salida en el DOM


/*----------------------------------------------------------------------*/

/*------------------------ STOPWATCH ----------------------------------*/


// BOTONES DEL STOPWATCH
function startTimer_stopWatch() {
    if (!isRunning) {
        isRunning = true;
        const startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTimer();
        }, 1000);
    }
}

function pauseTimer_stopWatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer_stopWatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    updateTimer();
}

// ACTUALIZACIÓN AUTOMÁTICA DEL DISPLAY DEL TIMER

updateTimer();

function updateTimer() {
    document.getElementById('timer_stopWatch').textContent = formatTime(elapsedTime);

    // EN OBSERVACIÓN
    // document.getElementById('timerCountDown').textContent = formatTime(parseInt(document.getElementById('timeInputCountDown').value)*1000);

}

function formatTime(ms) { // Esta función recibe en milisegundos
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}



/*----------------------------------------------------------------------*/

/*------------------------ COUNTDOWN ----------------------------------*/

// ENTRADA EN EL DOM
const timeInputCountDown = document.getElementById('timeInputCountDown');
const displayTimerCountDown = document.getElementById('timerCountDown');

// ESTADO INICIAL
stopBtn.disabled = true;
displayInitialTime();

//  Función para mostrar el tiempo inicial en el input
function displayInitialTime() {

    displayTimerCountDown.textContent = formatTime(parseInt(timeInputCountDown.value) * 1000);
}

// BOTONES DEL COUNTDOWN

//  Función para iniciar el temporizador
function startTimer_countDown() {

}

//  Función para detener el temporizador
function pauseTimer_countDown() {

}

//  Función para reiniciar el temporizador
function resetTimer_countDown() {

}

/*----------------------------------------------------------------------*/