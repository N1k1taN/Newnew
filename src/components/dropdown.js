"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Dropdown = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Check if it's running in the browser and update the mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1259);
    };

    // Only run this effect on the client (browser)
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1259);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // For mobile devices

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Don't render the dropdown if it's not mobile view
  if (!isMobile) {
    return null;
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isDropdownOpen ? '' : ''}
      </button>

      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li className="dad"><Link href="/#help" className="linked" onClick={toggleDropdown}>Послуги</Link></li>
          <li className="dad"><Link href="/#vidguk" className="linked" onClick={toggleDropdown}>Відгуки</Link></li>
          <li className="dad"><Link href="/#about" className="linked" onClick={toggleDropdown}>Про нас</Link></li>
          <li className="dad"><Link href="/#case" className="linked" onClick={toggleDropdown}>Кейси</Link></li>
          <li className="dad"><Link href="/#contacts" className="linked" onClick={toggleDropdown}>Контакти</Link></li>
          <li className="dad"><a className="phonebutton"href="tel:+380937452557">Тел: +380937452557</a>
          </li>
          <li className="dad">
            <a className='socials-dropdown' href='viber://chat?number=%2B380937452557' target="_blank" rel="noopener noreferrer"
              onClick={(e) => {
                const userAgent = navigator.userAgent.toLowerCase();
                if (userAgent.includes('android')) {
                  e.preventDefault();
                  window.location.href = "intent://chat?number=%2B380937452557#Intent;scheme=viber;package=com.viber.voip;end";
                } else if (userAgent.includes('ios')) {
                  window.location.href = "https://apps.apple.com/app/id382617920";
                } else {
                  window.location.href = "https://www.viber.com/";
                }
              }}
            >
              <img src="/icons/messengers/Viber_icon_white.svg" alt="Viber" />
            </a>
            <a className='socials-dropdown' href='https://signal.me/#eu/F8axajmr2fkdM4fu5Vl8yFJwj1W31Us0SMwc0h0axGvNA8Svn0NL-JkxLsnJBnCC' target="_blank" rel="noopener noreferrer">
              <img src="/icons/messengers/Signal-Logo-Ultramarine.svg" alt="Signal" />
            </a>
            <a className='socials-dropdown' href='https://t.me/Nlaw_company' target="_blank" rel="noopener noreferrer">
              <img src='/icons/messengers/teleg.svg' alt="Telegram" />
            </a>
            <a className='socials-dropdown' href='https://wa.me/message/X3PEXBN6BKQHF1' target="_blank" rel="noopener noreferrer">
              <img src="/icons/messengers/Digital_Glyph_White.svg" alt="WhatsApp" />
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
