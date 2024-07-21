import React, { useState, useEffect } from "react";

function Countdown() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let intervalId;

  const secondsToTime = (secs) => {
    const days = Math.floor(secs / (3600 * 24));
    const hours = Math.floor((secs % (3600 * 24)) / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;

    return [days, hours, minutes, seconds];
  };

  const startTimer = () => {
    const deadline = new Date("August 15, 2024 09:30:00").getTime(); // Replace with your deadline

    intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = deadline - now;

      if (timeLeft < 0) {
        clearInterval(intervalId);
      } else {
        const [days, hours, minutes, seconds] = secondsToTime(timeLeft / 1000);
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">Countdown Timer</h2>
      <div className="flex space-x-4 text-white">
        <div className="flex flex-col items-center bg-muted-foreground p-3 rounded">
          <span className="text-lg font-semibold">{timerDays}</span>
          <span>Days</span>
        </div>
        <div className="flex flex-col items-center bg-muted-foreground p-3 rounded">
          <span className="text-lg font-semibold">{timerHours}</span>
          <span>Hours</span>
        </div>
        <div className="flex flex-col items-center bg-muted-foreground p-3 rounded">
          <span className="text-lg font-semibold">{timerMinutes}</span>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col items-center bg-muted-foreground p-3 rounded">
          <span className="text-lg font-semibold">
            {timerSeconds.toFixed(0)}
          </span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
