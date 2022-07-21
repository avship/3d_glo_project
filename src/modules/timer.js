const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  let intervalId = null;
  //let deadline = "18 july 2022";
  const getTimeRemaining = (deadline) => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = new Date().getTime();

    let timeRemaining = (dateStop - dateNow) / 1000;

    const hours = Math.floor(timeRemaining / 60 / 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
    return { hours, minutes, seconds };
  };
  const updateClock = (deadline) => {
    const { hours, minutes, seconds } = getTimeRemaining(deadline);
    if (+hours + +minutes + +seconds < 0) {
      clearInterval(intervalId);
      return;
    }
    timerHours.textContent = String(hours).padStart(2, "0");
    timerMinutes.textContent = String(minutes).padStart(2, "0");
    timerSeconds.textContent = String(seconds).padStart(2, "0");
  };
  updateClock(deadline);
  intervalId = setInterval(updateClock, 1000, deadline);
};

export default timer;
