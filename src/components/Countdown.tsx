import React, { useState, useEffect } from "react";
import "./Countdown.css";

// Definește o interfață pentru obiectul de timp
interface TimeLeft {
  zile?: number;
  ore?: number;
  minute?: number;
  secunde?: number;
}

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2027-10-04T00:00:00") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        zile: Math.floor(difference / (1000 * 60 * 60 * 24)),
        ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        secunde: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown" data-aos="fade-up">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-item">
          <div className="countdown-value">{value}</div>
          <div className="countdown-unit">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
