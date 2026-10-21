window.onload = function () {
    var seconds = 00;
    var milliseconds = 00;
    var appendMilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonResetonclick = function () {
        clearInterval(interval);
        milliseconds = "00";
        seconds = "00";
        appendMilliseconds.innerHTML = milliseconds;
        appendSeconds.innerHTML = seconds;
    }

function startTimer() {
    milliseconds++;

    if (milliseconds <= 9) {
        appendMilliseconds.innerHTML = "0" + milliseconds;
    }

    if (milliseconds > 9) {
        appendMilliseconds.innerHTML = milliseconds;
    }

    if (milliseconds > 99) {
        seconds++;
        appendSeconds.innerHTML = seconds;
        milliseconds = 0;
        appendMilliseconds.innerHTML = "00";      
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
}
}
