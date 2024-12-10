"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Dropdown = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1259);
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1259);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    
    document.body.style.overflow = 'unset';

    setTimeout(() => {
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 85,
          behavior: "smooth",
        });
      } else {
        router.push(href);
      }
    }, 10);
  };

  if (!isMobile) {
    return null;
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {isDropdownOpen ? '' : ''}
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.ul
            className="dropdown-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{ overflowY: 'auto', maxHeight: window.innerHeight < 450 ? '300px' : 'none' }}
          >
            <li className="dad">
              <a href="/#help" className="linked font-menulink" onClick={(e) => { handleSmoothScroll(e, '/#help'); }}>Послуги</a>
            </li>
            <li className="dad">
              <a href="/#vidguk" className="linked font-menulink" onClick={(e) => { handleSmoothScroll(e, '/#vidguk'); }}>Відгуки</a>
            </li>
            <li className="dad">
              <Link href="/onas" className="linked font-menulink" onClick={toggleDropdown}>Про нас</Link>
            </li>
            <li className="dad">
              <a href="/#case" className="linked font-menulink" onClick={(e) => { handleSmoothScroll(e, '/#case'); }}>Кейси</a>
            </li>
            <li className="dad">
              <a href="/#contate" className="linked font-menulink" onClick={(e) => { handleSmoothScroll(e, '/#contate'); }}>Контакти</a>
            </li>
            <li className="dad">
              <a className="phonebutton font-menu-tel" href="tel:+380937452557">+380937452557</a>
            </li>
            <li className="dad socials-drop">
            <a
  href="viber://chat?number=%2B380937452557"
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('android')) {
      e.preventDefault();
      window.location.href = "intent://chat?number=%2B380937452557#Intent;scheme=viber;package=com.viber.voip;end";
    } else if (userAgent.includes('ios')) {
    } else {
      window.location.href = "https://www.viber.com/";
    }
  }}
>
  <img src="/icons/messengers/Viber_icon_white.svg" alt="viber"></img>
</a>
<a href="https://signal.me/#eu/F8axajmr2fkdM4fu5Vl8yFJwj1W31Us0SMwc0h0axGvNA8Svn0NL-JkxLsnJBnCC" target="_blank" rel="noopener noreferrer"><img src='/icons/messengers/Signal-Logo-Ultramarine.svg' alt="signal"></img></a>
<a href="https://t.me/Nlaw_company"><img src="/icons/messengers/teleg.svg" alt="telegram" target="_blank" rel="noopener noreferrer"></img></a>
<a href="https://wa.me/message/X3PEXBN6BKQHF1" target="_blank" rel="noopener noreferrer"><img src='/icons/messengers/Digital_Glyph_White.svg' alt="whatsapp"></img></a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
