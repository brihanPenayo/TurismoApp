import React, { useState, useEffect } from 'react';
import '../css/additional-styles/TextLoop.css';

const LoopEfect = ({ data, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true);

    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setIsVisible(true);
      }, 200);
    }, interval);

    return () => clearInterval(intervalId);
  }, [data]);

  return (
    <h1 className='h1 h-4 w-full' data-aos='fade-up' data-aos-delay='400'>
      {isVisible && <span className="h1 fade">{data[currentIndex]}</span>}
    </h1>
  );
}

export default LoopEfect;