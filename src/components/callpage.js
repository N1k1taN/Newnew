'use client';

import React, { useState, useRef } from 'react';
import ContactForm from './emailjs';

const OpenMenuButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const callPageRef = useRef(null);

  const openMenu = () => setIsMenuOpen(true);

  const handleBackgroundClick = (event) => {
    if (callPageRef.current && !callPageRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false); // Принудительное закрытие через X
  };

  return (
    <div>
      <button className="butcall font-but1" onClick={openMenu}>
        ЗАМОВИТИ КОНСУЛЬТАЦІЮ
      </button>
      {isMenuOpen && (
        <ContactForm
          handleBackgroundClick={handleBackgroundClick}
          callPageRef={callPageRef}
          handleCloseClick={handleCloseClick}
        />
      )}
    </div>
  );
};

export default OpenMenuButton;
