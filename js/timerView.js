var timer = document.getElementById('timer');
var bestTimeList = document.getElementById('bestTime');

var bestTimes = [];
var watch = new stopWatch(timer);
    
document.addEventListener('keyup', function(e) {
    var keyCode = e.which;
    
    // Timer Starts with "Enter"
    if(keyCode === 32) {        
        if(! watch.isOn) {
            watch.start();
        } else {
            watch.stop();
            watch.reset();

            if(bestTimes.length == 5) {
                bestTimeList.innerHTML = '';
                bestTimes = [];
            }

            addBestTime();
        }    
    }
});

function addBestTime() {
    bestTimes.push(timer.innerHTML);
 
    li = document.createElement('li');
    content = document.createTextNode(timer.innerHTML); 

    li.appendChild(content);
    bestTimeList.appendChild(li);
}

function resetTimes(bestTimeList) {
    bestTimeList.innerHTML = '';
    bestTimes = [];
};