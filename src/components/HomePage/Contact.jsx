import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaWhatsapp } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import lineQRCode from "../../images/LineQRCode.jpg";

const RECAPTCHA_SITE_KEY = "6LfVj-ErAAAAANyZBmhc0b59rS63m6NcwuFg8JCV"; // Google reCAPTCHA site key

const ContactUs = () => {
  const form = useRef();
  const recaptchaRef = useRef(null);
  const [statusMsg, setStatusMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Honeypot欄位，若有值判定為機器人阻擋
    if (e.target.hidden_field.value !== "") {
      setStatusMsg("系統偵測異常提交，請稍後再試。");
      return;
    }

    setIsSubmitting(true);
    setStatusMsg("");

    try {
      // 先執行reCAPTCHA驗證
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      if (!token) {
        setStatusMsg("請完成驗證後再送出表單");
        setIsSubmitting(false);
        return;
      }

      // 準備表單資料
      const formData = new FormData(form.current);
      const templateParams = {
        name: formData.get("name"),
        country: formData.get("country"),
        age_group: formData.get("age_group"),
        enrol_date: formData.get("enrol_date"),
        how_found: formData.get("how_found"),
        email: formData.get("email"),
        message: formData.get("message") || "",
        "g-recaptcha-response": token, // 可傳給後端驗證(reCAPTCHA token)
      };

      await emailjs.send(
        "service_80x6z4c",
        "template_xepo35a",
        templateParams,
        "fv9zS6Tde0WVeFASq"
      );
      setStatusMsg("表單已成功送出，謝謝您的聯絡！");
      form.current.reset();
    } catch (error) {
      setStatusMsg("送出失敗，請稍後再試。");
      console.error("EMAILJS ERROR:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

          {/* 送出狀態訊息 */}
          {statusMsg && <div className="status-message">{statusMsg}</div>}

          <form className="contact-form" ref={form} onSubmit={sendEmail}>

            {/* Honeypot隱藏欄位 */}
            <input
              type="text"
              name="hidden_field"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-group">
              <label htmlFor="name">名字：</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="輸入名字"
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
                placeholder="輸入所在地"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age-group">年齡區間：</label>
              <select
                id="age-group"
                name="age_group"
                defaultValue=""
                required
                disabled={isSubmitting}
              >
                <option value="" disabled>
                  請選擇年齡區間
                </option>
                <option value="Nursery-Kindergarten">Nursery-Kindergarten (Preschool)</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary (Middle Years)</option>
                <option value="HighSchool">High School</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="enrol-date">期望入學時間：</label>
              <input
                type="date"
                id="enrol-date"
                name="enrol_date"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="how-found">您是如何得知我們的？</label>
              <input
                type="text"
                id="how-found"
                name="how_found"
                placeholder="請輸入"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail：</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="輸入信箱"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">補充訊息（選填）：</label>
              <textarea
                id="message"
                name="message"
                placeholder="更多資訊..."
                disabled={isSubmitting}
              />
            </div>

            {/* Invisible reCAPTCHA */}
            <ReCAPTCHA
              sitekey={RECAPTCHA_SITE_KEY}
              size="invisible"
              ref={recaptchaRef}
            />

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
