import React from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import lineQRCode from "../../images/LineQRCode.jpg"; // Line QR code 圖片路徑替換

const ContactUs = () => (
  <section className="contact-section" id="contact">
    <div className="contact-container">
      
      {/* 左側QR Code */}
      <div className="qr-code-container">
        <img src={lineQRCode} alt="Line Official QR Code" />
        <p>掃描加入官方LINE帳號</p>
      </div>

      {/* 右側聯絡表單 */}
      <div className="contact-methods">
        <h2 className="contact-title">聯絡我們</h2>
        <div className="social-icons">
          <a
            href="https://line.me/R/ti/p/@572scgsy"
            target="_blank"
            rel="noreferrer"
            aria-label="Line"
            className="social-icon"
          >
            <SiLine />
          </a>
          <a
            href="https://wa.me/+6593602418"
            target="_blank"
            rel="noreferrer"
            aria-label="Whatsapp"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
        </div>
        <div className="contact-info-list">
          <p>填寫諮詢表單，專人1日內主動聯繫</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">名字：</label>
            <input type="text" id="name" placeholder="輸入名字" />
          </div>

          <div className="form-group">
            <label htmlFor="country">目前居住國家：</label>
            <input type="text" id="country" placeholder="輸入所在地" />
          </div>

          <div className="form-group">
            <label htmlFor="age-group">年齡區間：</label>
            <select id="age-group" defaultValue="">
              <option value="" disabled>
                請選擇年齡區間
              </option>
              <option value="Nursery-Kindergarten">
                Nursery-Kindergarten (Preschool)
              </option>
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary (Middle Years)</option>
              <option value="HighSchool">High School</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="enrol-date">期望入學時間：</label>
            <input type="date" id="enrol-date" />
          </div>

          <div className="form-group">
            <label htmlFor="how-found">您是如何得知我們的？</label>
            <input type="text" id="how-found" placeholder="請輸入" />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail：</label>
            <input type="email" id="email" placeholder="輸入信箱" />
          </div>

          <button className="contact-submit" type="submit">
            送出表單
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUs;
