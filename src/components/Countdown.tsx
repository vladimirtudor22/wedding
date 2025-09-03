// src/components/Countdown.tsx
import React, { useState, useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';

const Countdown = () => {
    // ... (toată logica de calcul a timpului rămâne neschimbată) ...
    const weddingDate = new Date('2028-10-04T18:00:00');
    const calculateTimeLeft = () => {
        const difference = +weddingDate - +new Date();
        let timeLeft: { [key: string]: number } = {};
        if (difference > 0) {
            timeLeft = {
                zile: Math.floor(difference / (1000 * 60 * 60 * 24)),
                ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minute: Math.floor((difference / 1000 / 60) % 60),
                secunde: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    const timerComponents: JSX.Element[] = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) { return; }
        timerComponents.push(
            <div key={interval} className="text-center mx-2 mx-md-3">
                <div className="fs-1 display-md-4 fw-bold">{timeLeft[interval]}</div>
                <div className="fs-6 fs-md-5 text-uppercase">{interval}</div>
            </div>
        );
    });
    const funnyText = "Timp rămas până la deploy-ul final al proiectului 'Familia' și implementarea sistemului de suport emoțional permanent. ❤️";

    // Aici facem modificările
    return (
        <div>
            {/* Am simplificat această secțiune pentru a se integra mai bine în card */}
            <div className="d-flex justify-content-center my-3">
                {timerComponents.length ? timerComponents : <span>E ziua cea mare!</span>}
            </div>
            <p className="mt-4 fst-italic" style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                {funnyText}
            </p>
        </div>
    );
};

export default Countdown;