import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 核心：引入 Link, useNavigate
import './Navbar.css';
import lionyulogo from '../images/lionyu.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const handleToggle = () => setClick(!click);
  const handleClose = () => {
    setClick(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(prev => (prev === menu ? null : menu));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <Link to="/">
        <div className="logoImage">
          <img src={lionyulogo} alt="LionYu Logo" />
        </div>
      </Link>

      <div
        id="menu-btn"
        onClick={handleToggle}
        className={click ? 'fas fa-times' : 'fas fa-bars'}
      ></div>

      <nav className={click ? 'navbar active' : 'navbar'}>
        <Link
          to="/#home"
          onClick={() => {
            handleClose();
            scrollToSection('home');
          }}
        >主頁</Link>

        {/* 教育體制 */}
        <div
          className="nav-item"
          onMouseEnter={() => window.innerWidth > 800 && setOpenDropdown('educationSystem')}
          onMouseLeave={() => window.innerWidth > 800 && setOpenDropdown(null)}
        >
          <div
            className="dropdown-toggle"
            onClick={() => window.innerWidth <= 800 && toggleDropdown('educationSystem')}
          >
            教育體制
          </div>
          <div
            className={`dropdown-menu ${openDropdown === 'educationSystem' ? 'show' : ''}`}
          >
            <Link
              to="/local-schools"
              onClick={handleClose}
            >
              本地教育
            </Link>
            <Link
              to="/international-schools"
              onClick={handleClose}
            >
              國際教育
            </Link>
            <Link
              to="/private-universities"
              onClick={handleClose}
            >
              私立大學
            </Link>
          </div>
        </div>

        {/* 教育優勢 */}
        <div
          className="nav-item"
          onMouseEnter={() => window.innerWidth > 800 && setOpenDropdown('educationAdvantage')}
          onMouseLeave={() => window.innerWidth > 800 && setOpenDropdown(null)}
        >
          <div
            className="dropdown-toggle"
            onClick={() => window.innerWidth <= 800 && toggleDropdown('educationAdvantage')}
          >
            教育優勢
          </div>
          <div
            className={`dropdown-menu ${openDropdown === 'educationAdvantage' ? 'show' : ''}`}
          >
            <Link
              to="/Why-Choose-Singapore"
              onClick={handleClose}
            >
              五大優勢
            </Link>
          </div>
        </div>

        <Link
          to="/#services"
          onClick={() => {
            handleClose();
            scrollToSection('services');
          }}
        >
          服務項目
        </Link>
        <Link
          to="/#contact"
          onClick={() => {
            handleClose();
            scrollToSection('contact');
          }}
        >
          聯繫我們
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
