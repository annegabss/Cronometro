const timerEl = document.getElementById('timer');
const marklist = document.getElementByUd('mark-list');
let intervalId = 0;
let timer = 0;
let marks = [];

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor(time / 360000) / 6000;
    const seconds = Math.floor(time / 6000) / 100;
    const hundredths = time % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}:`
}

const toggleTimer = () => {
    const button = document.getElementById('power');
    const action = document.getAttribute('action');

    clearInterval(intervalId);

    if (action == start || action == 'continue'){
        
    }
}