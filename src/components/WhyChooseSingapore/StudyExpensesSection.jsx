import React from "react";
import "./StudyExpensesSection.css";

export default function StudyExpensesSection() {
  return (
    <section className="expenses-section">
      <h2>新加坡留學開銷與歐美熱門國家比較</h2>
      <p className="intro-text">
        新加坡留學開銷與歐美相比，其實更親民。新加坡的昂貴來自於觀光地區、車房稅以及菸酒奢持品等方面 (ex: 新加坡政府為了控制車流量而祭出昂貴牌照稅，新加坡擁車率11%，台灣超過80%)，所以在生活物價指數中名列前茅。然而對於台灣留學生來說，日常生活開銷實際並不高。相較於英美澳等熱門留學國家，新加坡日常開支更接近台灣水平。
      </p>

      <div className="expenses-table-wrapper">
        <table className="expenses-table" cellSpacing="0" cellPadding="8">
          <thead>
            <tr>
              <th>國家 / 項目</th>
              <th>房租（月）</th>
              <th>飲食（月）</th>
              <th>交通（月）</th>
              <th>年總額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>台灣</td>
              <td>8,000 – 22,000</td>
              <td>6,000 – 10,000</td>
              <td>1,200 – 1,600</td>
              <td>30 – 50萬 (年)</td>
            </tr>
            <tr>
              <td>新加坡</td>
              <td>15,000 - 35,000</td>
              <td>8,000 – 12,000</td>
              <td>1,600 – 2,400</td>
              <td>40 – 60萬 (年)</td>
            </tr>
            <tr>
              <td>澳洲</td>
              <td>20,000 – 45,000</td>
              <td>6,500 – 12,000</td>
              <td>1,000 – 3,000</td>
              <td>50 – 70萬 (年)</td>
            </tr>
            <tr>
              <td>美國</td>
              <td>30,000-70,000</td>
              <td>8,000 – 15,000</td>
              <td>2,700 – 3,900</td>
              <td>75 – 100萬 (年)</td>
            </tr>
            <tr>
              <td>英國</td>
              <td>30,000-50,000</td>
              <td>8,000 – 12,000</td>
              <td>2,000 – 4,000</td>
              <td>70 – 90萬 (年)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
