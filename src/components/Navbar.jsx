import React, { useState } from 'react';
import './Navbar.css';
import lionyulogo from '../images/lionyu.png';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // keep track of which dropdown is open

  const handleToggle = () => setClick(!click);
  const handleClose = () => {
    setClick(false);
    setOpenDropdown(null); // close all dropdowns
  };

  const toggleDropdown = (menu) => {
    // ✅ toggle open/close when same menu is clicked
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header'>
      <a href='/'>
        <div className='logoImage'>
          <img src={lionyulogo} alt='LionYu Logo' />
        </div>
      </a>

      <div
        id='menu-btn'
        onClick={handleToggle}
        className={click ? 'fas fa-times' : 'fas fa-bars'}
      ></div>

      <nav className={click ? 'navbar active' : 'navbar'}>
        <a
          href='/#home'
          onClick={() => {
            handleClose();
            scrollToSection('home');
          }}
        >
          主頁
        </a>

        {/* 教育體制 */}
        <div
          className='nav-item'
          onMouseEnter={() =>
            window.innerWidth > 800 && setOpenDropdown('educationSystem')
          }
          onMouseLeave={() =>
            window.innerWidth > 800 && setOpenDropdown(null)
          }
        >
          <div
            className='dropdown-toggle'
            onClick={() =>
              window.innerWidth <= 800 && toggleDropdown('educationSystem')
            }
          >
            教育體制
          </div>
          <div
            className={`dropdown-menu ${
              openDropdown === 'educationSystem' ? 'show' : ''
            }`}
          >
            <a
              href='/#preschool'
              onClick={() => {
                handleClose();
                scrollToSection('preschool');
              }}
            >
              幼兒教育
            </a>
            <a
              href='/#primary'
              onClick={() => {
                handleClose();
                scrollToSection('primary');
              }}
            >
              小學教育
            </a>
            <a
              href='/#secondary'
              onClick={() => {
                handleClose();
                scrollToSection('secondary');
              }}
            >
              中學教育
            </a>
          </div>
        </div>

        {/* 教育優勢 */}
        <div
          className='nav-item'
          onMouseEnter={() =>
            window.innerWidth > 800 && setOpenDropdown('educationAdvantage')
          }
          onMouseLeave={() =>
            window.innerWidth > 800 && setOpenDropdown(null)
          }
        >
          <div
            className='dropdown-toggle'
            onClick={() =>
              window.innerWidth <= 800 && toggleDropdown('educationAdvantage')
            }
          >
            教育優勢
          </div>
          <div
            className={`dropdown-menu ${
              openDropdown === 'educationAdvantage' ? 'show' : ''
            }`}
          >
            <a
              href='/#bilingual'
              onClick={() => {
                handleClose();
                scrollToSection('bilingual');
              }}
            >
              雙語環境
            </a>
            <a
              href='/#safe'
              onClick={() => {
                handleClose();
                scrollToSection('safe');
              }}
            >
              安全社會
            </a>
            <a
              href='/#global'
              onClick={() => {
                handleClose();
                scrollToSection('global');
              }}
            >
              全球認可
            </a>
          </div>
        </div>

        <a
          href='/#services'
          onClick={() => {
            handleClose();
            scrollToSection('services');
          }}
        >
          服務項目
        </a>

        <a
          href='/#contact'
          onClick={() => {
            handleClose();
            scrollToSection('contact');
          }}
        >
          聯繫我們
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
