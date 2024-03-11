import { m } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface TimerProps {
  deadline: number;
}

const Timer: React.FC<TimerProps> = ({ deadline }) => {
  const calculateRemainingTime = (): number => {
    return deadline - Date.now();
  };

  const [remainingTime, setRemainingTime] = useState<number>(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [deadline]);

  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div>
      {hours}h {minutes}m {seconds}s
    </div>
  );
};

export default Timer;
