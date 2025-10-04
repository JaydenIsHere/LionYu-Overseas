import React, { useState, useEffect } from 'react';
import './Localmain.css';
import local1 from '../../images/local1.jpg';
import local2 from '../../images/local2.jpg';
import local3 from '../../images/local3.jpg';
import local4 from '../../images/local4.jpg';
import local5 from '../../images/local5.jpg';

function LocalMain() {
  const images = [local1, local2, local3, local4, local5];
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(timer);
  }, [length]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-title">新加坡本地教育體制</div>
      <div className="slideshow-wrapper">
        {images.map((img, idx) => {
          const position = (idx - current) * 100;
          return (
            <img
              key={idx}
              src={img}
              alt={`slide-${idx}`}
              className="slideshow-image"
              style={{
                transform: `translateX(${position}%)`,
                transition: 'transform 0.6s ease-in-out',
                position: 'absolute',
                top: 0, left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LocalMain;
