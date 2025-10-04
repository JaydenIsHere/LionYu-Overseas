import React, { useState, useEffect } from 'react';
import './PrivateUniversitiesMain.css';
import PU1 from '../../images/PU1.jpg';
import PU2 from '../../images/PU2.jpg';
import PU3 from '../../images/PU3.jpeg';
import PU4 from '../../images/PU4.png';



function PrivateUniversitiesMain() {
  const images = [  PU1, PU2, PU3, PU4 ];
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
      <div className="slideshow-title">新加坡私立大學</div>
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

export default PrivateUniversitiesMain;
