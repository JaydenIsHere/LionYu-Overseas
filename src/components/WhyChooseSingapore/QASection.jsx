import React, { useState } from "react";
import "./QASection.css";

const qaData = [
  {
    question: "我應該提前多久開始籌備新加坡留學計劃？",
    answer:
      "建議您提前約一年到兩年開始籌備，包括預約諮詢、選校落點分析、文件準備等。 這樣有足夠的時間進行深入瞭解，確保您的申請過程順利！",
  },
  {
    question: "我在當地上課以及日常使用的語言是什麼？",
    answer:
      "新加坡的主要官方語言是英語，平常大學上課也以英語授課為主。但由於多元文化，許多人也講其他語言如華語、馬來語和泰米爾語。 基本的英語溝通能力足以應對大多數情況，但學會一些當地語言可能有助於更好地融入當地生活。",
  },
  {
    question: "新加坡的醫療保健如何？",
    answer:
      "新加坡擁有世界一流的醫療系統，一般留學學雜費已經包含基礎學生保險，留學生可以另外購買學生醫療保險，享受更優質的醫療服務。",
  },
  {
    question: "我在新加坡可以打工嗎？",
    answer:
      "根據新加坡人力部規定，新加坡政府指定的部分公立院校全日制在校生，如果持有移民局批准的有效學生證（在期限內），有資格在新加坡從事打工。 另外根據政府規定在上課期間，學生每週打工時間不允許超過16小時。",
  },
  {
    question: "如何提高申請新加坡大學的成功率？",
    answer:
      "盡可能保持優異的學業成績，參加相關課外活動與實習經驗，撰寫針對新加坡大學有吸引力的個人自傳，並搭配良好的英語檢定成績像是雅思托福。",
  },
  {
    question: "新加坡的氣候如何，我應該怎麼準備衣物？",
    answer:
      "新加坡屬於熱帶氣候，全年高溫潮濕。 輕便透氣的夏季服裝是最適合的，同時應該隨身攜帶雨具，因為新加坡雨季較長且常有短暫午後雷陣雨。",
  },
  {
    question: "畢業後是否能在新加坡留下來找工作呢？",
    answer:
      "新加坡有許多國際企業和機會，但就業仍需符合相應的條件和工作簽證要求。 建議在留學期間積極參與實習和職業發展活動，提高找工作的競爭力。",
  },
];

export default function QASection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="qa-section">
      <h2>新加坡留學常見問答</h2>
      <div className="qa-container">
        {qaData.map(({ question, answer }, index) => (
          <div key={index} className="qa-item">
            <button
              className={`qa-question ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleIndex(index)}
            >
              {question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="qa-answer">
                <p>{answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
