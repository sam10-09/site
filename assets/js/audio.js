let src = document.getElementById("src"),
    control = document.getElementById("audio-play-pause"),
    curTime = document.getElementById("audio-current-pos"),
    endTime = document.getElementById("audio-length"),
    progress = document.getElementById("audio-progress"),
    progressCur = document.getElementById("audio-progress__current"),
    volDown = document.getElementById("audio-volume__down"),
    volUp = document.getElementById("audio-volume__up")

control.addEventListener("click", playAudio);
src.addEventListener("timeupdate",initProgressBar);
volUp.addEventListener("click", volumeUp)
volDown.addEventListener("click", volumeDown)

function playAudio() {
    if(src.paused===false) {
        src.pause();
    } else {
        src.play();
    }
    this.classList.toggle("pause");
}

function volumeUp() { volumeChange(0.1) }
function volumeDown() { volumeChange(-0.1) }
function volumeChange(val) {
    let volume = src.volume;
    volume = Math.floor((volume + val)*100)/100;
    volume = volume > 1 ? 1 : volume < 0 ? 0 : volume;
    src.volume = volume;
}

function calculatePercentPlayed() {
    let percentage = (src.currentTime / src.duration).toFixed(2) * 100;
    progressCur.style.width = `${percentage}%`;
}

function calculateCurrentValue(currentTime) {
    let currentMinute = parseInt(currentTime / 60) % 60;
    let currentSecondsLong = currentTime % 60;
    let currentSeconds = currentSecondsLong.toFixed();
    let currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
    currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
    }`;
    return currentTimeFormatted;
}

function initProgressBar() {
    let dur = calculateCurrentValue(src.duration);
    let currentTime = calculateCurrentValue(src.currentTime);
    endTime.innerHTML = dur;
    curTime.innerHTML = currentTime;
    progress.addEventListener('click', seek);
    src.onended = () => {
        control.classList.remove('pause');
        progressCur.style.width = 0;
        curTime.innerHTML = '00:00';
        endTime.innerHTML = '00:00';
    };
    function seek(e) {
        let percent = e.offsetX / this.offsetWidth;
        src.currentTime = percent * src.duration;
    }
    calculatePercentPlayed();
}
