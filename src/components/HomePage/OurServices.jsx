import React from "react";
import "./Ourservices.css";

const beforeServices = [
  "專屬一對一升學諮詢",
  "精準學校篩選與推薦",
  "文件準備與入學申請全程協助",
  "模擬面試與入學考試建議",
  "學生證與學生簽證申請",
  "行前說明＋生活安置協助",
];

const afterServices = [
  "陪同家長／學生前往學校報到、領取學生證",
  "協助開立銀行帳戶",
  "指導申請醫療保險",
  "轉介安全合格寄宿家庭或陪同協商租屋事宜",
  "辦理手機SIM卡與WiFi上網",
  "指導交通（申辦EZ-Link卡、熟悉MRT與巴士系統）",
  "引介生活機能區：超市、醫療院所、台僑資源等",
];

const Ourservices = () => (
  <div className="services-container" id="services">
    <h2 className="main-services-title">我們的服務</h2>

    {/* Before arrival */}
    <div className="subtitle-row">
      <span className="services-subtitle">留學前</span>
    </div>
    <div className="services-steps">
      {beforeServices.map((service, index) => (
        <div key={index} className="service-card">
          <div className="step-number">{index + 1}</div>
          <p>{service}</p>
        </div>
      ))}
    </div>

    {/* After arrival */}
    <div className="subtitle-row">
      <span className="services-subtitle">留學後</span>
    </div>
    <div className="services-steps">
      {afterServices.map((service, index) => (
        <div key={index} className="service-card">
          <div className="step-number">{index + 1}</div>
          <p>{service}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Ourservices;
