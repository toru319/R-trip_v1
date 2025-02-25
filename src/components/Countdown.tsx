import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Countdown: React.FC = () => {
  const [countdown, setCountdown] = useState('');
  const travelDate = dayjs('2025-03-24');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();
      const diff = travelDate.diff(now, 'day');
      setCountdown(`${diff}日`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">旅行までのカウントダウン</h2>
      <p className="text-4xl font-bold text-blue-600">{countdown}</p>
    </section>
  );
};

export default Countdown;
