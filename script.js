function timer() {
  const timerEl = document.getElementById("clock");

  document.getElementById("start-button").addEventListener("click", function() {
    console.log("star wars clicked");
  });

  document.getElementById("minus-button").addEventListener("click", function() {
    console.log("minus was clisck");
  });

  document.getElementById("plus-button").addEventListener("click", function() {
    console.log("plus was clicked");
  });

  const defaultTime = 300;
  let time = defaultTime;
  let myInterval = setInterval(function() {
    time = time - 1;

    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60) % 60;
    let seconds = time % 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    console.log(hours + ":" + minutes + ":" + seconds); // 00:00:00

    if (time <= 0) {
      clearInterval(myInterval);
    }
  }, 1000);
}
timer();
