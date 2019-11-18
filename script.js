function timer() {
  const defaultTime = 300;
  const clockEl = document.getElementById("clock");
  const userEl = document.getElementById("user-time-in-seconds");
  let savedValue = localStorage.getItem("time");
  let time = 0;
  if (savedValue) {
    time = savedValue;
  } else {
    time = defaultTime;
  }
  let myInterval = null;

  document.getElementById("start-button").addEventListener("click", function() {
    const userInput = parseInt(userEl.value, 10);
    time = userInput;
    startTimer();
    console.log("star wars clicked", userEl.value);
  });

  document.getElementById("minus-button").addEventListener("click", function() {
    console.log("minus was clisck");
  });

  document.getElementById("plus-button").addEventListener("click", function() {
    console.log("plus was clicked");
  });

  function startTimer() {
    if (myInterval) {
      clearInterval(myInterval);
      myInterval = null;
    }
    myInterval = setInterval(function() {
      time = time - 1;
      localStorage.setItem("time", time);

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

      clockEl.innerHTML = hours + ":" + minutes + ":" + seconds;

      if (time <= 0) {
        clearInterval(myInterval);
      }
    }, 1000);
  }
  startTimer();
}
timer();
