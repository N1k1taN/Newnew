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
          <img alt="logo"src="/icons/call.png"></img>
        </a>
      ) : (
        <>
        <button className='buttonfast' onClick={toggleMenu}>
          <img alt="phone"src="/icons/call.png"></img>
          </button>
          {menuOpen && (
            <div className='pgd'>
              
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Callpg;
