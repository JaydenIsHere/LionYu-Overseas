import React from 'react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const points = [
    "入讀學校後，若有任何疑慮或需求，隨時可聯繫我們駐新加坡的台灣顧問，確保留學生活有完善的在地支援與後盾協助。",
    "提供轉學輔導服務，若學生在校期間希望轉往本地學校或更優質的國際學校，我們持續在新加坡本地提供專業的轉學規劃及協助，讓學生穩健前行。"
  ];

  return (
    <section className="why-choose-us-section">
      <div className="why-container">
        <h2 className="why-title">為何選擇我們？</h2>
        <ul className="why-list">
          {points.map((point, index) => (
            <li key={index} className="why-item">
              <span className="why-icon">✔</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
