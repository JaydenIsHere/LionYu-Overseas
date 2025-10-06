import React, { useState, useEffect, useRef } from 'react';
import './WhoWeAre.css';

import img1 from '../../images/WhoWeAre1.jpeg';
import img2 from '../../images/WhoWeAre2.jpeg';
import img3 from '../../images/WhoWeAre3.jpeg';

const carouselImages = [img1, img2, img3];

export default function WhoWeAre() {
  const [idx, setIdx] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const next = () => {
      setIdx((prev) => (prev + 1) % carouselImages.length);
    };
    timeoutRef.current = setTimeout(next, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [idx]);

  return (
    <section className="brand-section">
      <div className="brand-content">
        {/* 輪播在上，文字在下 */}
        <div className="brand-carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(calc(-${idx * 100}%))` }}
          >
            {carouselImages.concat(carouselImages).map((img, index) => (
              <img key={index} src={img} alt={`Slide ${index + 1}`} className="brand-img" />
            ))}
          </div>
        </div>

        <div className="brand-text">
          <h2 className="brand-title">新加坡留學首選品牌</h2>
          <p className="brand-sub">台灣學生專屬的新加坡留學顧問 Singapore Focus</p>
          <p className="brand-lead">獅裕海外陪您從台灣出發，邁向國際！</p>
          <p className="brand-desc">
            獅裕海外與新加坡眾多頂尖學府建立了緊密並即時的溝通橋樑，為留學生提供進入新加坡頂級教育的門票。
            課程跨足各個學科領域，讓學生在亞洲就能享受世界一流的學術資源、師資陣容以及國際視野。
          </p>
          <ul className="brand-list">
            <li>◎ 垂直整合式留遊學服務</li>
            <li>◎ 上百所學校的課程申請</li>
            <li>◎ 全力為學生協助輔導留學規劃</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
