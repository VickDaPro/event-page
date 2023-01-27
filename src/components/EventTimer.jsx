import React, { useState, useEffect } from "react";

function EventTimer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const currentDate = new Date();
    const event = new Date(eventDate);
    const difference = event - currentDate;
    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    });
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const event = new Date(eventDate);
      const difference = event - currentDate;
      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      setTimeLeft(timeLeft);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [eventDate]);

  return (
    <div className="timer mt-20 mr-[100px] max-sm:mr-[0px] mb-[20px] gap-5 flex justify-end text-[55px] max-[520px]:text-[30px] max-[400px]:text-[20px] uppercase font-bold leading-[82.5px]">
      <div className="timer-item flex">
        <div className="timer-value text-[#FF2C55]">{timeLeft.days}</div>
        <div className="timer-label text-[14px] -rotate-90 font-medium">
          Days
        </div>
      </div>
      <div className="timer-item flex">
        <div className="timer-value text-[#04ABEE]">{timeLeft.hours}</div>
        <div className="timer-label text-[14px] -rotate-90 font-medium">
          Hours
        </div>
      </div>
      <div className="timer-item flex">
        <div className="timer-value">{timeLeft.minutes}</div>
        <div className="timer-label text-[14px] -rotate-90 font-medium">
          Minutes
        </div>
      </div>
      <div className="timer-item flex">
        <div className="timer-value text-[#EFA506]">{timeLeft.seconds}</div>
        <div className="timer-label text-[14px] -rotate-90 font-medium">
          Seconds
        </div>
      </div>
    </div>
  );
}

export default EventTimer;
