import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-07-26T00:00:00'); 
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
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

  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-800 text-white">
      <div id="countdown" className="flex space-x-4">
        <div>
          <span id="days">{timeLeft.days || '0'}</span> Dias
        </div>
        <div>
          <span id="hours">{timeLeft.hours || '0'}</span> Horas
        </div>
        <div>
          <span id="minutes">{timeLeft.minutes || '0'}</span> Minutos
        </div>
        <div>
          <span id="seconds">{timeLeft.seconds || '0'}</span> Segundos
        </div>
      </div>
      <div className="navbar-center">
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://olympics.com/pt/paris-2024"
              target="_blank"
              title="link para Paris 2024"
            >
              PARIS 2024
            </a>
          </li>
          <li className="logo-container">
            <img
              src="/images/Olympics-Rings-Logo.png"
              alt="Logo"
              className="logo w-8 h-8"
            />
          </li>
          <li>
            <a
              href="https://www.cob.org.br/pt/"
              target="_blank"
              title="link para COB"
            >
              COB
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;