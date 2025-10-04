import React from "react";
import "./FivePointers.css";

// 請根據您的專案路徑調整圖片
import img1 from "../../images/fivepoint1.jpg";
import img2 from "../../images/fivepoint2.jpg";
import img3 from "../../images/fivepoint3.jpg";
import img4 from "../../images/fivepoint4.jpg";
import img5 from "../../images/fivepoint5.jpg";

const pointers = [
  {
    image: img1,
    title: "英語為第一語言，打造真正的英語環境",
    desc: "新加坡的官方語言和主要工作語言皆為英語。根據2024年EF全球英語能力指標，新加坡榮登世界第3名，亞洲第1。身處真正全英語環境，從學習到生活到職場均能無縫銜接，實現英文精通目標。",
  },
  {
    image: img2,
    title: "無時差的安全留學環境，家長安心首選",
    desc: "新加坡以城市安全指數、旅遊安全聞名世界，2024年連續被評為亞洲最安全及全球旅遊安全首選，地理近、無時差與台灣四小時直飛，家長探訪照護都極為便利與安心。",
  },
  {
    image: img3,
    title: "國際視野與卓越畢業發展",
    desc: "新加坡是全球前三大競爭力經濟體，擁有8000多家跨國企業亞洲總部，包含Google、Meta等，畢業生國際就業機會遠優於亞洲其他國家，發展空間極大。",
  },
  {
    image: img4,
    title: "東西方文化交融，打造全球化思維",
    desc: "近八成為華人、文化生活親近台灣，融合東方價值與西方思維與雙語教學，學生易適應且能同時鍛鍊國際交流能力，養成跨文化的全球人才。",
  },
  {
    image: img5,
    title: "超高生活便利度，亞洲宜居首選",
    desc: "新加坡有完善綠色生活環境，交通四通八達，長年亞洲第一宜居城市。智慧城市建設全球第一，生活安全、便利、舒適度極高。",
  },
];

export default function FivePointers() {
  return (
    <section className="pointers-section">
      <h2>留學新加坡的五大優勢</h2>
      <div className="pointers-container">
        {pointers.map(({ image, title, desc }, i) => (
          <div className="pointer-card" key={i}>
            <img src={image} alt={title} />
            <div className="pointer-title">{title}</div>
            <div className="pointer-desc">{desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
