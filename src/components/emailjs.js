'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function ContactForm({ handleBackgroundClick, callPageRef, handleCloseClick }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneRegex = /^(?:[0-9]{9}|[0-9]{10}|[0-9]{12})$/;

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);

    emailjs
      .sendForm('service_6y4cf6d', 'template_j9ce8db', form.current, 'Oa2baTXpg0UruiePo')
      .then(() => setFormSubmitted(true))
      .catch((error) => console.error('Ошибка отправки формы:', error));

    e.target.reset();
    setPhoneNumber('');
  };

  return (
    <div
      className="backgroundpage"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
      onClick={handleBackgroundClick}
    >
      <motion.div
        className="callpage"
        ref={callPageRef}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div
          className="closepopup font-h2"
          onClick={handleCloseClick}
          style={{  cursor: 'pointer' }}
        >
          ✖
        </div>

        {formSubmitted ? (
          <div className="thx">
            <p className="font-semibold-16px">Дякуємо за Ваше звернення!</p>
            <p className="font-text-18px-regular">Ми передзвонимо Вам найближчим часом з цього номера +380 (93) 745 25 57</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <img className="emailpng" src="/icons/callpg.png" alt="call" />
            <h2 className="font-h5">Вже на варті захисту Ваших прав!</h2>
            <p className="font-text-18px-regular">Залишайте свій номер телефону і ми зателефонуємо Вам на протязі 20 хвилин.</p>
            <p className="font-semibold-16px">Якщо пізніше, Ви отримаєте знижку 10%</p>
            <div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phone-number"
                id="phone-number"
                className="font-h3"
                maxLength="12"
                placeholder="Ваш номер телефону"
                required
                inputMode="numeric"
                pattern="[0-9]*"
              />
            </div>
            {phoneError && <p style={{ color: 'red' }}>Неправильний формат номера</p>}
            <button className="senderbutt font-semibold-16px" type="submit">
              ЗАМОВИТИ КОНСУЛЬТАЦІЮ<img src="/icons/x-solid.svg" alt="icon" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default ContactForm;
