/*------------------- CRONÓMETRO --------------- */
let timerInterval;
let elapsedTime = 0;
let isRunning = false;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateTimer() {
    document.getElementById('timer').textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        const startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTimer();
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    updateTimer();
}

updateTimer();

/*------------------- COUNTDOWN --------------- */

// Elementos del DOM
const timeInput = document.getElementById('timeInput');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Variables
let timeLeft = 0; // Tiempo restante en segundos
let timerId = null; // ID del intervalo
let initialTime = 0; // Tiempo inicial para reiniciar

// Función para actualizar el temporizador
function updateTimer2() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerId);
        timerId = null;
        timerDisplay.textContent = "00:00";
        alert("¡Tiempo terminado!");
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

// Función para mostrar el tiempo inicial desde el input
function displayInitialTime() {
    const inputValue = parseInt(timeInput.value) || 0;
    timeLeft = inputValue;
    initialTime = inputValue;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Función para iniciar el temporizador
function startTimer() {
    if (timerId === null && timeLeft > 0) {
        timerId = setInterval(updateTimer2, 1000);
        startBtn.disabled = true;
        stopBtn.disabled = false;
        timeInput.disabled = true; // Desactiva el input mientras corre
    }
}

// Función para detener el temporizador
function stopTimer() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

// Función para reiniciar el temporizador
function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = initialTime;
    displayInitialTime();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    timeInput.disabled = false; // Reactiva el input
}

// Eventos
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
timeInput.addEventListener('input', displayInitialTime);

// Estado inicial
stopBtn.disabled = true; // Detener deshabilitado al inicio
displayInitialTime(); // Mostrar tiempo inicial del input por defecto