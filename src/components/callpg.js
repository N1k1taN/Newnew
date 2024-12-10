"use client"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Callpg = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1050);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };



  return (
    <div>
      {isMobile ? (
        <a className='buttonfast' href="tel:+380937452557">
        </a>
      ) : (
        <>
        <button className='buttonfast' onClick={toggleMenu}>
          </button>
          {menuOpen && (
            <div className='pgd'>
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
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Callpg;
