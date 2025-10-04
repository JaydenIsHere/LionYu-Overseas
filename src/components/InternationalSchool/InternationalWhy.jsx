import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faStar,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./InternationalWhy.css";

export default function InternationalEducationFeatures() {
  const features = [
    {
    label: "國際認可文憑",
    description: `新加坡國際學校多採用國際文憑(IB)、IGCSE、A-Level或AP課程，文憑受全球頂尖大學廣泛認可。課程設計強調學術深度與批判思維，並透過課外活動與社區參與培養學生的社會責任感與領導力，為升學與職涯奠定堅實基礎。`,
  },
  {
    label: "靈活多元課程選擇",
    description: `課程涵蓋科學、人文、商業與藝術等多元領域，並提供以英語為主的沉浸式教學環境。多數學校不強制要求雅思成績，視學生背景而定。靈活課程設計有助於激發學生潛能，培養跨文化溝通能力與全球競爭力。`,
  },
  {
    label: "全英文雙語環境",
    description: `提供以英語為主要教學語言的國際化課程，同時重視母語與文化傳承。部分學校設有中文或其他語言的雙語課程，協助學生兼顧語言能力與文化認同，特別適合希望保留母語教育的家庭。`,
  },
  {
    label: "畢業後多元升學與移民選擇",
    description: `部分畢業生可透過特定條件申請新加坡永久居民(PR)，如在本地高等教育機構就讀或具備特定技能。新加坡移民與就業政策相對友善，有助於學生在完成學業後銜接職涯或進一步深造。`,
  },
  {
    label: "全球優質升學跳板",
    description: `新加坡國際學校提供多元跨國升學路徑，學生畢業後具備申請北美、英國、澳洲等頂尖大學的競爭力。學校設有專業升學輔導，協助學生順利完成申請流程，使新加坡成為國際教育與升學的理想樞紐。`,
  }
  ];

  const highlights = [
    {
      icon: faSchool,
      text: "歐美名校黃金跳板",
    },
    {
      icon: faStar,
      text: "一流師資力量，先進硬體設備",
    },
    {
      icon: faBookOpen,
      text: "注重個體，激發潛能",
    },
  ];

  return (
    <div className="local-education-container">
      <div className="features-cards">
        {features.map(({ label, description }) => (
          <div key={label} className="feature-card">
            <h3 className="feature-label">{label}</h3>
            <p className="feature-description">{description}</p>
          </div>
        ))}
      </div>

      <div className="highlights-section">
        {highlights.map(({ icon, text }, idx) => (
          <div key={idx} className="highlight-item">
            <FontAwesomeIcon icon={icon} className="highlight-icon" />
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
