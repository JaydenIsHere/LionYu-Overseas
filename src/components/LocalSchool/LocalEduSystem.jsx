import './LocalEduSystem.css';
import React, { useState, useEffect } from 'react';
import eduSystemImg from '../../images/edu-system.jpg';
// 教育體制圖元件
function LocalEduSystem() {
  const [showFull, setShowFull] = useState(false);
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className="education-system-section">
      <h2 className="education-title">新加坡政府學校教育體制升學規劃圖</h2>
      <button className="btn-show-system" onClick={() => setShowFull(true)}>點此查看完整體制圖</button>

      {showFull && (
        <div className="modal-fullscreen" onClick={() => setShowFull(false)}>
          <button className="modal-close-btn" onClick={e => {
            e.stopPropagation();
            setShowFull(false);
          }}>×</button>
          <img
            src={eduSystemImg}
            alt="新加坡政府學校教育體制升學規劃圖"
            className="modal-fullscreen-img"
            onClick={stopPropagation}
          />
        </div>
      )}
    </div>
  );
}

export default LocalEduSystem;