import React, { useState, useRef, useEffect } from "react";
import "./InternationalSchools.css";

import BC0 from "../../images/BC0.jpg";
import BC1 from "../../images/BC1.jpg";
import BC2 from "../../images/BC2.jpg";
import BC3 from "../../images/BC3.jpg";
import BC4 from "../../images/BC4.jpg";
import BClogo from "../../images/BClogo.jpg";


import cis2 from "../../images/c2.jpg";
import cis3 from "../../images/c3.jpg";
import cis4 from "../../images/c4.jpg";
import cis5 from "../../images/c5.jpg";
import CISlogo from "../../images/CISlogo.png";

import o1 from "../../images/o1.jpg";
import o2 from "../../images/o2.jpg";
import o3 from "../../images/o3.jpg";
import OneWorldlogo from "../../images/OneWorldlogo.jpg";

import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import ThePerselogo from "../../images/ThePerselogo.jpg";

import XCL0 from "../../images/XCL0.jpg";
import XCL1 from "../../images/XCL1.jpeg";
import XCL2 from "../../images/XCL2.jpeg";
import XCL3 from "../../images/XCL3.jpeg";
import XCL4 from "../../images/XCL4.jpg";
import XCL5 from "../../images/XCL5.jpg";
import XCL6 from "../../images/XCL6.jpeg";
import XCLlogo from "../../images/XCLlogo.png";


const schools = [
  {
    zhName: "加拿大國際學校",
    enName: "Canadian International School (CIS)",
    description: "CIS是新加坡首屈一指的IB世界學校，擁有65+國籍超過3,000位學生，提供IB PYP、MYP、DP三大課程，強調多元文化、領導力和學術卓越，培育具國際視野的未來人才",
    address: "7 Jurong West Street 41, Singapore 649414",
    website: "https://www.cis.edu.sg",
    images: [cis2, cis3, cis4, cis5],
    logo: CISlogo,
  },
  {
    zhName: "One World國際學校",
    enName: "One World International School (OWIS)",
    description: "OWIS為新加坡多元與包容獲獎國際學校，招收70+國籍學生，主打IB PYP、IGCSE和IB DP等全球課程，學費合理，注重學生品格、全球素養與全人發展。",
    address: "21 Jurong West Street 81, Singapore 649075",
    website: "https://owis.org/sg/",
    images: [o1, o2, o3],
    logo: OneWorldlogo,
  },
  {
    zhName: "The Perse國際學校",
    enName: "The Perse School Singapore",
    description: "Perse源自英國劍橋逾400年菁英傳統，首推劍橋課程與The Perse Way三重發展，融合學術、生活與課外，培養學生邏輯思維與未來領袖力。新校區落戶武吉知馬，上課氛圍宜人現代。",
    address: "58 Chestnut Drive, Singapore 679301",
    website: "https://www.perse.edu.sg",
    images: [p1, p2, p3, p4],
    logo: ThePerselogo,
  },
  {
    zhName: "布萊頓學院新加坡分校",
    enName: "Brighton College (Singapore)",
    description: "Brighton College是英國頂尖學術名校，注重全人養成與學術卓越。新加坡校區以好奇心、自信與仁善為三大價值，採英式嚴謹教學，打造適合18月到11歲學生的國際化啟蒙環境。",
    address: "1 Chuan Lane, Singapore 554299",
    website: "https://www.brightoncollege.edu.sg",
    images: [BC0, BC1, BC2, BC3, BC4],
    logo: BClogo,
  },{
  zhName: "加慧世界書院",
  enName: "XCL World Academy (XWA)",
  description:
    "XCL World Academy是新加坡領先的IB國際學校，涵蓋18個月至18歲學生，學生代表40多個國籍。提供IB PYP、MYP、DP等連續課程，並以小班、雙師制和跨學科創新（AI、機器人、編程課程）著稱，協助學生在學術、領導力、全球素養等面向全面發展。近年IB畢業生成績、升學率及獎學金表現均領先全球,最新校園設施完善。",
  address: "2 Yishun Street 42, Singapore 768639",
  website: "https://xwa.edu.sg",
  images: [XCL0, XCL1, XCL2, XCL3, XCL4, XCL5, XCL6],
  logo: XCLlogo,
}

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
