function stopWatch(timerElement) {    
    var time = 0;
    var interval;
    var offset;
    this.isOn = false;

    //private functions
    function update() {
        var formattedTime;

        time += timePast();

        formattedTime = timeFormatter(time);

        timerElement.textContent = formattedTime;
    }

    function timePast() {
        var now = Date.now();
        var timeIsPassed = now - offset;

        offset = now;

        return timeIsPassed;
    }
    
    function timeFormatter(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if(minutes.length <  2) {
            minutes = '0' + minutes;
        }

        if(seconds.length <  2) {
            seconds = '0' + seconds;
        }

        if(milliseconds.length <  3) {
            milliseconds = '0' + milliseconds;
        }

        return minutes + " : " + seconds + ' . ' + milliseconds;
    }

    //public functions
    this.start = function() {
        if(! this.isOn) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        clearInterval(interval);
        this.isOn = false;
    };

    this.reset = function() {
        time = 0;
    };
}