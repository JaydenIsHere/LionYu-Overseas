import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faStar,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import "./PrivateUniversitiesWhy.css";

export default function PrivateUniversitiesWhy() {
    const features = [
    {
      label: "國際雙聯學位與全球認證",
      description: `新加坡多數私立大學與英國、澳洲等知名大學合作辦學，畢業生可獲得海外大學頒發之正規學位。學位普遍受國際認可，有助於升學、國際轉學或回國職涯發展。部分學校亦獲得新加坡政府EduTrust教育信託認證。`,
    },
    {
      label: "入學門檻彈性與語言支援",
      description: `入學標準相對寬鬆，學術成績與語言門檻較易達成。未達雅思或托福成績者，多數學校可安排英語預科課程，通過校內測評亦可錄取，適合語言正在提升的學生。`,
    },
    {
      label: "多元實務導向專業",
      description: `學科涵蓋商業管理、金融會計、物流、資訊科技、傳播與酒店管理等，專業設置緊貼產業趨勢，著重實際操作與就業導向，高就業率且畢業後易於進行職涯規劃。`,
    },
    {
      label: "彈性學制與留學成本優勢",
      description: `私立大學開學期彈性強，本科最快2-3年完成，研究所通常一年畢業。總體學費與生活成本低於歐美同級學校30-50%，性價比高，吸引國際學生選擇新加坡作為留學跳板。`,
    },
    {
      label: "多元升學與移民途徑",
      description: `畢業生可選擇新加坡本地或海外名校深造，如NUS、NTU、英澳頂尖學府，並享有留學生回國政策優惠。部分行業緊缺專業有助申請新加坡工作簽證或移居發展。`,
    }
  ];

  const highlights = [
    {
      icon: faSchool,
      text: "與歐美名校聯合頒發學位",
    },
    {
      icon: faStar,
      text: "職業導向課程，就業率高",
    },
    {
      icon: faBookOpen,
      text: "語言支援充足，適應力強",
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
