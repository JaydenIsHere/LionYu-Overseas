import React, { useState, useRef, useEffect } from "react";
import "./PrivateUniversitiesSchools.css";

import mdis1 from "../../images/mdis1.jpeg";
import mdis2 from "../../images/mdis2.jpeg";
import mdis3 from "../../images/mdis3.jpeg";
import mdis4 from "../../images/mdis4.jpeg";
import mdis5 from "../../images/mdis5.jpeg";
import MDISLogo from "../../images/MDISLogo.png";

import k1 from "../../images/k1.jpg";
import k2 from "../../images/k2.jpg";
import k3 from "../../images/k3.jpg";
import k4 from "../../images/k4.jpg";
import kaplanlogo from "../../images/kaplanlogo.png";

import psb1 from "../../images/psb1.png";
import psb2 from "../../images/psb2.jpg";
import psb3 from "../../images/psb3.jpg";
import psb4 from "../../images/psb4.png";
import psb5 from "../../images/psb5.png";
import psb6 from "../../images/psb6.png";
import psbLogo from "../../images/psblogo.jpg"; 


import sim1 from "../../images/sim1.jpg";
import sim2 from "../../images/sim2.jpg";
import sim3 from "../../images/sim3.jpg";
import simLogo from "../../images/simlogo.png";




const schools = [
  {
    zhName: "Kaplan 新加坡",
    enName: "Kaplan Singapore",
    description: "Kaplan提供多元化專業課程，涵蓋商業、金融、市場營銷及心理學等。具備英澳海外大學合作雙聯學位，學術門檻彈性，多數專業接受雅思5.5分，並設有英語預備課程，適合語言能力漸進的學生。",
    address: "4 Battery Road, #27-01, Singapore 049908",
    website: "https://www.kaplan.com.sg",
    images: [k1, k2, k3,k4],
    logo: kaplanlogo,
  },
  {
    zhName: "新加坡管理學院",
    enName: "Singapore Institute of Management (SIM)",
    description: "SIM為新加坡領先私立院校，提供本地及海外大學雙聯學位，專注國際商務、人力資源及金融等領域。入學標準合理；雅思通常要求6.0，具預科橋樑課程，支持學生逐步提升語言及學術能力。",
    address: "461 Clementi Road, Singapore 599491",
    website: "https://www.sim.edu.sg",
    images: [sim1, sim2, sim3],
    logo: simLogo,
  },
  {
    zhName: "PSB學院",
    enName: "PSB Academy",
    description: "PSB學院提供商業、計算機科學及旅遊管理專業，擁有多個海外大學合作項目，畢業生學位被國際認可。語言入學門檻較低，設置有英語強化預科課程，適合英語基礎稍弱學生銜接本科。",
    address: "5 Stirling Road, STE 03-01, Singapore 148951",
    website: "https://www.psb-academy.edu.sg",
    images: [psb1, psb2, psb3, psb4, psb5, psb6],
    logo: psbLogo,
  },
  {
    zhName: "管理發展學院",
    enName: "Management Development Institute of Singapore (MDIS)",
    description: "MDIS專注於商業、健康科學及設計藝術等應用型課程。具備靈活入學機制和雅思預科課程，接受高中畢業生和專科畢業生申請，強調就業導向和實務經驗培養。",
    address: "501 Stirling Road, Singapore 148951",
    website: "https://www.mdis.edu.sg",
    images: [mdis1, mdis2, mdis3, mdis4, mdis5],
    logo: MDISLogo,
  },
];


function SchoolCardCarousel({ schools, onCardClick }) {
  const visibleCount = 3;
  const totalCount = schools.length;

  // Extended array for infinite loop effect
  const extendedSchools = [
    ...schools.slice(totalCount - visibleCount, totalCount),
    ...schools,
    ...schools.slice(0, visibleCount),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cardWidth = 318; // Card width + margin

  const translateX = -((currentIndex + visibleCount) * cardWidth);

  const handleNext = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev - 1);
  };

  const onTransitionEnd = () => {
    if (currentIndex >= totalCount) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
    if (currentIndex < 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalCount - 1);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeoutId = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [isTransitioning]);

  return (
    <>
      <div className="card-carousel">
        <button onClick={handlePrev} aria-label="Previous">
          &lt;
        </button>
        <div
          className="card-carousel-list"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none",
            width: `${extendedSchools.length * cardWidth}px`,
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {extendedSchools.map((school, idx) => (
            <div
              key={`${school.zhName}-${idx}`}
              className="school-card"
              style={{ width: "300px" }}
              onClick={() => onCardClick(school)}
            >
              <img
                src={school.images[0]}
                alt={school.zhName}
                className="school-thumb"
              />
              {school.logo && (
                <img
                  src={school.logo}
                  alt={`${school.zhName} logo`}
                  className="school-logo"
                />
              )}
              <div className="school-name-zh">{school.zhName}</div>
              <div className="school-name-en">{school.enName}</div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} aria-label="Next">
          &gt;
        </button>
      </div>

      <div className="carousel-dots">
        {schools.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </>
  );
}

function SchoolDetailModal({ school, onClose }) {
  const [slideIdx, setSlideIdx] = useState(0);

  if (!school) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-left">
          <h2>{school.zhName}</h2>
          <h3>{school.enName}</h3>
          <p>{school.description}</p>
          {school.award && <p>🏆 {school.award}</p>}
          <p>學校地址：{school.address}</p>
          <a href={school.website} target="_blank" rel="noopener noreferrer">
            <button className="external-btn">前往學校官網</button>
          </a>
        </div>
        <div className="modal-right">
          <img
            src={school.images[slideIdx]}
            alt={school.zhName}
            className="modal-img"
          />
          <div className="modal-img-controls">
            <button
              onClick={() =>
                setSlideIdx((slideIdx - 1 + school.images.length) % school.images.length)
              }
            >
              &lt;
            </button>
            <span>
              {slideIdx + 1} / {school.images.length}
            </span>
            <button
              onClick={() => setSlideIdx((slideIdx + 1) % school.images.length)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FamousSchoolsSection() {
  const [selectedSchool, setSelectedSchool] = useState(null);

  return (
    <div className="famous-schools-section">
      <h2 className="section-title">新加坡國際名校</h2>
      <SchoolCardCarousel schools={schools} onCardClick={setSelectedSchool} />
      {selectedSchool && (
        <SchoolDetailModal school={selectedSchool} onClose={() => setSelectedSchool(null)} />
      )}
    </div>
  );
}
