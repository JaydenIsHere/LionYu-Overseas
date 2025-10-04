import React from "react";
import "./EducationHighlight.css";
import { useNavigate } from "react-router-dom";

const EducationHighlight = () => {
  const navigate = useNavigate();

  return (
    
    <section className="education-highlight-section" id="education">
       <h2 className="section-title">新加坡教育全覽</h2>   {/* 這裡是標題 */}
      <div className="education-blocks">
        {/* 新加坡本地學校教育 */}
        <div className="education-block">
          <h3 className="block-title">新加坡本地學校</h3>
          <ul className="block-list">
            <li>政府公立學校、自治學校</li>
            <li>國家考試：PSLE, O Level, A Level</li>
            <li>學制途徑：小學、中學、初級學院、理工學院</li>
            <li>銜接新加坡公立大學及多元發展</li>
          </ul>
          <p className="block-desc">
            適合希望深入本地教育體系，具備扎實基礎的學生。
          </p>
          <button
            className="btn-more"
            onClick={() => navigate("/local-schools")}
          >
            了解更多
          </button>
        </div>

        {/* 國際學校課程 */}
        <div className="education-block">
          <h3 className="block-title">新加坡國際學校課程</h3>
          <ul className="block-list">
            <li>IB國際文憑 <span className="badge-ap">＊國際文憑</span></li>
            <li>劍橋A Level / IGCSE</li>
            <li>
              AP進階課程 <span className="badge-ap">＊美國大學升學首選</span>
            </li>
            <li>多元國際學制（美英澳法德等）</li>
          </ul>
          <p className="block-desc">
            適合希望銜接美國、英國、澳洲等知名全球大學的學生。
          </p>
          <button
            className="btn-more"
            onClick={() => navigate("/international-schools")}
          >
            了解更多
          </button>
        </div>

        {/* 私立大學/學院 */}
        <div className="education-block">
          <h3 className="block-title">新加坡私立大學 / 學院</h3>
          <ul className="block-list">
            <li>Kaplan、SIM、PSB、MDIS等學院</li>
            <li>國際合作課程，外國大學文憑</li>
            <li>入學彈性高，學制選擇多元</li>
            <li>高性價比，快速取得國際學位</li>
          </ul>
          <p className="block-desc">
            適合尋求彈性規劃、快速取得國際學位、提升職涯競爭力的學生。
          </p>
          <button
            className="btn-more"
            onClick={() => navigate("/private-universities")}
          >
            了解更多
          </button>
        </div>

      </div>
    </section>
  );
};

export default EducationHighlight;
