import React, { useState, useRef, useEffect } from "react";
import "./LocalSchools.css";

import n1 from "../../images/n1.jpg";
import n2 from "../../images/n2.jpg";
import n3 from "../../images/n3.jpg";
import n4 from "../../images/n4.jpg";
import n5 from "../../images/n5.jpg";
import n6 from "../../images/n6.jpg";
import Nanyanglogo from "../../images/Nanyanglogo.png";

import d1 from "../../images/d1.jpg";
import d2 from "../../images/d2.jpg";
import d4 from "../../images/d4.jpg";
import DunmanLogo from "../../images/DunmanLogo.jpg";

import hc1 from "../../images/hc1.jpg";
import hc2 from "../../images/hc2.jpg";
import hc3 from "../../images/hc3.jpg";
import hc4 from "../../images/hc4.jpg";
import HwaChongLogo from "../../images/HwaChongLogo.jpg";

import nc0 from "../../images/nc0.jpg";
import nc1 from "../../images/nc1.jpg";
import nc2 from "../../images/nc2.jpg";
import NanChiauLogo from "../../images/NanChiauLogo.png";

import rg0 from "../../images/rg0.jpg";
import rg1 from "../../images/rg1.jpg";
import rg2 from "../../images/rg2.jpg";
import rg3 from "../../images/rg3.jpg";
import rg4 from "../../images/rg4.jpg";
import RaffleGirlsLogo from "../../images/RafflesGirlsLogo.png";

const schools = [
  {
    zhName: "南洋女子中学校",
    enName: "Nanyang Girls’ High School (NGHS)",
    description:
      "南洋女子中学校創立於1917年，是孫中山先生倡導下成立的一所歷史悠久、秉承優良雙語教育傳統、充滿活力的特選及自主中學。面向全球化的世紀，南洋女中為新加坡學業優異的女子提供了全面教育與發展的機會。",
    award: "2013年榮獲新加坡素質獎，由李光耀總理贊助。",
    address: "2 Linden Dr, Singapore 288683",
    website: "https://en.nygh.moe.edu.sg/",
    images: [n1, n2, n3, n4, n5, n6],
    logo: Nanyanglogo,
  },
  {
    zhName: "莱佛士女子学校",
    enName: "Raffle Girls’ School (RGS)",
    description:
      "新加坡萊佛士女子（NGS）小學成立於1844年，是一所歷史悠久的著名女校。學校致力於培養高素質的女生，使其成為一個能在國家和社區服務中發揮自己才能的領導者。",
    address: "20 Anderson Rd, Singapore 259978",
    website: "https://www.rgs.edu.sg/",
    images: [rg0, rg1, rg2, rg3, rg4],
    logo: RaffleGirlsLogo,
  },
  {
    zhName: "南侨小学",
    enName: "Nan Chiau Primary School (NCPS)",
    description:
      "南僑小學創立於1947年，前身為南僑中學附小，是新加坡福建會館屬下六所學校之一。它雖然經歷了不少變遷，但總是緊跟時代的步伐，配合國家的人才設置需要，不斷進行自我調整，為國家的教育事業做出積極的貢獻。",
    address: "50 Anchorvale Link, Singapore 545080",
    website: "https://www.ncps.moe.edu.sg/",
    images: [nc0, nc1, nc2],
    logo: NanChiauLogo,
  },
  {
    zhName: "华侨中学",
    enName: "Hwa Chong Institution (HCI)",
    description:
      "華侨中學成立於1919年3月21日，由華侨領袖陳嘉庚先生發起，是新加坡最頂尖的中學之一。提供劍橋普通教育證書高級水準直通車課程。",
    address: "661 Bukit Timah Rd, Singapore 269734",
    website: "https://zh.hci.edu.sg/",
    images: [hc1, hc2, hc3, hc4],
    logo: HwaChongLogo,
  },
  {
    zhName: "德明政府中学",
    enName: "Dunman High School (DHS)",
    description:
      "加冷西政府華文中學創立於1956年，這間學校是德明政府華文中學的前身。1979年被評選為“特選中學”。",
    address: "10 Tg Rhu Rd, Singapore 436895",
    website: "https://www.dunmanhigh.moe.edu.sg/",
    images: [d1, d2, d4],
    logo: DunmanLogo,
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
      <h2 className="section-title">新加坡政府名校</h2>
      <SchoolCardCarousel schools={schools} onCardClick={setSelectedSchool} />
      {selectedSchool && (
        <SchoolDetailModal school={selectedSchool} onClose={() => setSelectedSchool(null)} />
      )}
    </div>
  );
}
