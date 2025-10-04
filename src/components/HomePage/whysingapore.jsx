import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // <- 匯入 useNavigate
import './Whysingapore.css';

import images1 from '../../images/why1.jpg';
import images2 from '../../images/why2.jpg';
import images3 from '../../images/why3.jpg';
import images4 from '../../images/why4.jpg';
import images5 from '../../images/why5.jpg';
import images6 from '../../images/why6.jpg';

const images = [images1, images2, images3, images4, images5, images6];

const reasons = [
  "亞洲最安全的國家之一",
  "教育水準最高的國家之一",
  "學歷全球認可",
  "IB、A-Level、AP文憑皆享國際聲譽",
  "多元文化環境，語言全英語教學",
  "快速融入國際社會",
  "地理鄰近、無時差",
  "生活環境和飲食習慣很好適應",
  "畢業銜接全球名校",
  "職場機會廣泛"
];

const Whysingapore = () => {
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();  // <- 取得 navigate 函數

  useEffect(() => {
    const interval = setInterval(() => setIdx(i => (i + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="ws-section" id="Why-Choose-Singapore">
      <div className="ws-row">
        {/* Left - slideshow */}
        <div className="ws-col ws-slideshow">
          <img src={images[idx]} alt="" className="ws-img" />
        </div>
        {/* Right - text */}
        <div className="ws-col ws-card">
          <h2 className="ws-title">為什麼選擇新加坡?</h2>
          <ul className="ws-list">
            {reasons.map((reason, i) => (
              <li key={i}>{i + 1}. {reason}</li>
            ))}
          </ul>
          <button className='ws-more-btn' onClick={() => navigate("/Why-Choose-Singapore")}>
            了解更多
          </button>
        </div>
      </div>
    </section>
  );
};

export default Whysingapore;
