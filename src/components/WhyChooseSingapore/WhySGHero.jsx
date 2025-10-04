import React from "react";
import "./WhySGHero.css";
import singaporeImage from "../../images/WhySGHero.jpg"; // 請換成您的圖片路徑

export default function WhySGHero() {
  return (
    <section className="study-singapore-section">
      <div className="text-container">
        <h2>新加坡留學-開啟成功未來的理想選擇</h2>
        <p>
          新加坡，位於馬來半島南端，是一座城市國家，總人口約570萬人，其中約三成為外國人。儘管總面積僅2.5個台北市大小，但由於其東西方交匯的戰略位置，在英國殖民時期已成為一流的航運和貿易據點。1965年獨立後，在國父李光耀的領導下，新加坡迅速發展成為世界知名的國際金融中心，被譽為“東方的倫敦”。
        </p>
        <p>
          新加坡社會以華人為主，和其他三大種族組成。雖然存在種族和宗教的多樣性，但新加坡人在共同的語言表達（英語）和共同的價值觀下形成一個緊密的共同體。各行各業的各國人士在這裡宜居樂業，共同生活。這座多元化的城市國家吸引了來自亞洲各地的文化特色，因此新加坡也被譽為“小亞洲”。
        </p>
        <p>那新加坡為什麼適合台灣學生留學呢? 以下整理出五大優勢.</p>
      </div>
      <div className="image-container">
        <img src={singaporeImage} alt="Singapore city" />
      </div>
    </section>
  );
}
