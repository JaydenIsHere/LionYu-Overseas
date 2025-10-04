import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faStar,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./LocalWhy.css";

export default function LocalEducationFeatures() {
  const features = [
  {
    label: "亞洲頂級教育—文憑國際認可",
    description: `新加坡沿用英聯邦教育體制，融合本地特色，政府大學如NUS、NTU長年穩居全球前列，畢業文憑及基礎教育廣受國際認可，學術競賽成果豐碩。`,
  },
  {
    label: "留學費用合理",
    description: `新加坡教育體系多元，除政府學校外，多家政府監管私立院校提供英語課程，課程涵蓋學術、體育、商業及藝術領域。部分院校接受語言預科銜接，降低國際生入學壓力。`,
  },
  {
    label: "雙語基礎教育領先",
    description: `新加坡實行雙語政策，科目採用全英文授課，特別適合華人子弟接受全球化與母語兼備的教育。`,
  },
  {
    label: "友善就業與移民通道",
    description: `畢業後可申請工作簽證，累積工作經驗後根據條件有機會申請永久居民。新加坡對高素質人才及本地高等教育畢業生具就業與移民優勢。`,
  },
  {
    label: "國際升學黃金跳板",
    description: `新加坡學歷受英美澳主流國家高度認可，學生透過新加坡轉升歐美名校或就業，具備良好國際競爭力。`,
  }
];

  const highlights = [
    {
      icon: faSchool,
      text: "優先入籍通道",
    },
    {
      icon: faStar,
      text: "更多本土優勢",
    },
    {
      icon: faBookOpen,
      text: "重視基礎教育",
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
