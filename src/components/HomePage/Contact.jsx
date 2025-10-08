import React, { useRef, useState } from "react";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import lineQRCode from "../../images/LineQRCode.jpg";

const scriptUrl = "https://script.google.com/macros/s/AKfycby2c_pLWd1YrYekjgJ4yv3QwWyUA4zi6cxmqLZw-sV69soZfMv8aFXJrQMUeV86jm9V/exec";

const ContactUs = () => {
  const form = useRef();
  const [statusMsg, setStatusMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendToGoogleSheet = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatusMsg("");

  const selectedAgeGroups = Array.from(e.target.querySelectorAll('input[name="school_age_group"]:checked'))
                                .map(el => el.value)
                                .join(", ");

  const formData = new URLSearchParams({
    parent_name: e.target.parent_name.value,
    email: e.target.email.value,
    country: e.target.country.value,
    service: e.target.service.value,
    appointment_datetime: e.target.appointment_datetime.value,
    number_of_children: e.target.number_of_children.value,
    school_age_group: selectedAgeGroups,
    enrol_date: e.target.enrol_date.value,
    how_found: e.target.how_found.value,
    message: e.target.message.value || "",
  });

  try {
    await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
  } catch (error) {
    console.error("Google Sheets error:", error);
  } finally {
    // 不論成功或失敗，都顯示同一訊息並清空表單
    setStatusMsg("我們的團隊會盡快與你聯繫");
    e.target.reset();
    setIsSubmitting(false);
  }
};


  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* QR Code */}
        <div className="qr-code-container">
          <img src={lineQRCode} alt="Line Official QR Code" />
          <p>掃描加入官方LINE帳號</p>
        </div>

        {/* Contact Form */}
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

          {statusMsg && <div className="status-message">{statusMsg}</div>}

          <form ref={form} className="contact-form" onSubmit={sendToGoogleSheet}>
            {/* Honeypot Hidden Field */}
            <input
              type="text"
              name="hidden_field"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-group">
              <label htmlFor="parent_name">家長姓名：</label>
              <input
                type="text"
                id="parent_name"
                name="parent_name"
                placeholder="請輸入家長姓名"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">電郵地址：</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="請輸入電郵地址"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">目前居住國家：</label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="請輸入所在地"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">服務項目：</label>
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>請選擇服務項目</option>
                <option value="外國留學">外國留學</option>
                <option value="國內轉學">國內轉學</option>
                <option value="移居-企業家">移居-企業家</option>
                <option value="短期留學，語言學校">短期留學，語言學校</option>
                <option value="國際學校開放日">國際學校開放日</option>
                <option value="其他">其他</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="appointment_datetime">免費30分鐘線上諮詢（您方便的日期與時間）：</label>
              <input
                type="datetime-local"
                id="appointment_datetime"
                name="appointment_datetime"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="number_of_children">您有幾個孩子：</label>
              <input
                type="number"
                id="number_of_children"
                name="number_of_children"
                placeholder="請輸入孩子數量"
                min="0"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>您想找哪個年齡的學校：</label>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="school_age_group"
                    value="幼稚園"
                    disabled={isSubmitting}
                  />
                  幼稚園
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="school_age_group"
                    value="小學"
                    disabled={isSubmitting}
                  />
                  小學
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="school_age_group"
                    value="中學"
                    disabled={isSubmitting}
                  />
                  中學
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="school_age_group"
                    value="高中"
                    disabled={isSubmitting}
                  />
                  高中
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="school_age_group"
                    value="大學"
                    disabled={isSubmitting}
                  />
                  大學
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="enrol_date">預計入學日期：</label>
              <input
                type="date"
                id="enrol_date"
                name="enrol_date"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="how_found">您是如何得知我們的：</label>
              <input
                type="text"
                id="how_found"
                name="how_found"
                placeholder="請輸入"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">補充訊息：</label>
              <textarea
                id="message"
                name="message"
                placeholder="更多資訊..."
                disabled={isSubmitting}
              />
            </div>

            <button
              className="contact-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "送出中..." : "送出表單"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
