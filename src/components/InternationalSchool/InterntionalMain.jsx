import React, { useState, useEffect } from 'react';
import './InternationalMain.css';
import International1 from '../../images/International1.jpg';
import International2 from '../../images/International2.jpg';
import International3 from '../../images/International3.jpg';
import International4 from '../../images/International4.jpg';
import International5 from '../../images/International5.jpg';


function InternationalMain() {
  const images = [  International1, International2, International3, International4, International5];
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
      <div className="slideshow-title">新加坡國際教育體制</div>
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

export default InternationalMain;
