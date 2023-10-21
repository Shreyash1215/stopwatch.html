class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.intervalId = null;
        this.running = false;
        this.display = document.getElementById("display");
        this.startPauseButton = document.getElementById("startPause");
        this.resetButton = document.getElementById("reset");

        this.startPauseButton.addEventListener("click", this.startPause.bind(this));
        this.resetButton.addEventListener("click", this.reset.bind(this));
    }

    startPause() {
        if (this.running) {
            clearInterval(this.intervalId);
            this.running = false;
            this.startPauseButton.textContent = "Start";
        } else {
            const startTime = Date.now() - (this.startTime || 0);
            this.intervalId = setInterval(() => {
                this.display.textContent = this.formatTime(Date.now() - startTime);
            }, 10);
            this.startTime = startTime;
            this.running = true;
            this.startPauseButton.textContent = "Pause";
        }
    }
    pauseStopwatch() {
        if (running) {
            clearInterval(interval);
            running = false;
            elapsedTime = new Date().getTime() - startTime;
        }
    }
    reset() {
        clearInterval(this.intervalId);
        this.running = false;
        this.startTime = 0;
        this.display.textContent = "00:00:00";
        this.startPauseButton.textContent = "Start";
    }

    formatTime(milliseconds) {
        const pad = (num) => String(num).padStart(2, "0");
        const seconds = pad(Math.floor(milliseconds / 1000) % 60);
        const minutes = pad(Math.floor(milliseconds / 60000) % 60);
        const hours = pad(Math.floor(milliseconds / 3600000));
        return `${hours}:${minutes}:${seconds}`;
    }
}

const stopwatch = new Stopwatch();