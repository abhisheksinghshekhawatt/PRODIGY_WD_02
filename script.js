// script.js
let timer;
let isRunning = false;
let lapCount = 1;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerText = "Start";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById("display").innerText = "00:00:00";
    isRunning = false;
    document.getElementById("startStop").innerText = "Start";
    lapCount = 1;
    document.getElementById("laps").innerHTML = "";
}

function updateTime() {
    let display = document.getElementById("display");
    let time = display.innerText.split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    display.innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return (time < 10) ? "0" + time : time;
}

function lap() {
    let lapsList = document.getElementById("laps");
    let listItem = document.createElement("li");
    listItem.innerText = "Lap " + lapCount + ": " + document.getElementById("display").innerText;
    lapsList.appendChild(listItem);
    lapCount++;
}
