const timesWrap = document.querySelector('.times');
const loading = document.querySelector('.loading');
const year = document.querySelector('.year');
const days = document.querySelector('.day-num');
const hours = document.querySelector('.hour-num');
const minutes = document.querySelector('.minute-num');
const seconds = document.querySelector('.second-num');

// Set Time
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown(){
    const currentTime = new Date();
    const distance = newYearTime - currentTime;

    const milSecond = Math.floor(distance / 1000);
    const second = Math.floor(milSecond) % 60;
    const minute = Math.floor(milSecond / 60) % 60;
    const hour = Math.floor(milSecond/ 60 / 60) % 24;
    const day = Math.floor(milSecond / 60 / 60 / 24);

    days.innerText = day;
    hours.innerText = hour < 10 ? `0${hour}` : hour;
    minutes.innerText = minute < 10 ? `0${minute}` : minute;
    seconds.innerText = second < 10 ? `0${second}` : second;
}

// Set Loading
setTimeout(() => {
    loading.classList.add('hide');
    timesWrap.classList.remove('hide');
}, 1000);

setInterval(updateCountdown, 1000);