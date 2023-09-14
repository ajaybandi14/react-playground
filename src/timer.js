import React, { useState, useRef, useEffect } from 'react';
import './style.css';

export default function Timer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(prevTime => {return prevTime - 1})
    }, 1000);

    return (() => {
      clearInterval(timeInterval);
    });
  }, [time]);

  console.log('Time', time);

  return (
    <div>
      {time}
    </div>
  );
}
