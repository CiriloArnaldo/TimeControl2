/*----------------------------------------------------------------*/
// GENERAL
/*----------------------------------------------------------------*/
let timerInterval
let elapsedTime = 0;
let isRunning = false;

// OBTENIDO PARÁMETROS DEL COUNTDOWN
//   Entrada en el DOM
// const timeInputCountDown = document.getElementById('timeInputCountDown');
//   Salida en el DOM
  
/*----------------------------- END ------------------------------*/

/*----------------------------------------------------------------*/
// STOPWATCH
/*----------------------------------------------------------------*/

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



/*----------------------------- END ------------------------------*/

/*----------------------------------------------------------------*/
// COUNTDOWN
/*----------------------------------------------------------------*/

// ENTRADA EN EL DOM
const timeInputCountDown = document.getElementById('timeInputCountDown');
const displayTimerCountDown = document.getElementById('timerCountDown');

const startBtn_countDown = document.getElementById('startBtn_countDown');
const stopBtn_countDown = document.getElementById('stopBtn_countDown');
const resetBtn_countDown = document.getElementById('resetBtn_countDown');

// Variables necesarias
let timeLeft = 0; // Tiempo restante en segundos
let timerId = null; // Id del temporizador
let initialTime = 0; // Tiempo inicial en segundos para reiniciar


// ESTADO INICIAL
stopBtn.disabled = true;
displayInitialTime();

//  Función para mostrar el tiempo inicial en el input
function displayInitialTime() {

    timeLeft = parseInt(timeInputCountDown.value);
    initialTime = timeLeft; // Guardamos el tiempo inicial
    displayTimerCountDown.textContent = formatTime(parseInt(timeInputCountDown.value)*1000);
}

// BOTONES DEL COUNTDOWN

//  Función para iniciar el temporizador
function startTimer_countDown() {
    if (timerId === null && timeLeft > 0) {
        timerId = setInterval(updateTimer,1000);
        
        startBtn_countDown.disabled = true;
        stopBtn_countDown.disabled = false; 

        timeInputCountDown.disabled = true; // Deactivar el input mientras corre     }
    }
}

//  Función para detener el temporizador
function pauseTimer_countDown() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        
        startBtn_countDown.disabled = false;
        stopBtn_countDown.disabled = true;
    }
}

//  Función para reiniciar el temporizador
function resetTimer_countDown() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = initialTime;
    displayInitialTime();

    startBtn_countDown.disabled = false;
    stopBtn_countDown.disabled = true;
    timeInputCountDown.disabled = false; // Reactivar el input
}

/*----------------------------- END ------------------------------*/
