import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import LYlogo from '../images/LYlogo.jpg';

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About Us (left) */}
        <div className="footer-column about-column">
          <h3 className="footer-title">關於我們</h3>
          <p>
            獅裕海外(Reg:53511608W)是新加坡會計與企業管理局 (ACRA) 正式註冊並認證的專業諮詢服務機構。<br/>
            我們為每一位赴新加坡學生提供完整留學教育規劃服務。
          </p>
        </div>
        {/* Column 2: Social Icons (center) */}
        <div className="footer-column social-column">
          <h3 className="footer-title center-title">社交媒體</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1DVJYVmfaH/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/lionyuoverseas?igsh=YXI0ZjNja2YxbXph&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@lionyuoverseas?_t=ZS-90EeckATp7S&_r=1" target="_blank" rel="noreferrer" aria-label="TikTok" className="social-icon">
              <FaTiktok />
            </a>
            <a href="https://line.me/R/ti/p/@572scgsy" target="_blank" rel="noreferrer" aria-label="Line" className="social-icon">
              <SiLine />
            </a>
            <a href="https://wa.me/+6593602418" target="_blank" rel="noreferrer" aria-label="Whatsapp" className="social-icon">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        {/* Column 3: Logo (right) */}
        <div className="footer-column logo-column">
          <img
            src={LYlogo}
            alt="LionYu Overseas Logo"
            className="footer-logo"
          />
        </div>
      </div>
    </footer>
    <div className="sub-footer">
      <p className="createdBy">
        © 2025 <span className="brand-name">LionYu Overseas</span> All Rights Reserved
      </p>
    </div>
  </>
);

export default Footer;
