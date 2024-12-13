'use client';

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function ConsultationForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

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
    .then(
        () => {
          setFormSubmitted(true);
        },
        (error) => {
          console.error('Ошибка отправки формы:', error.text);
        }
      );

    e.target.reset();
    setPhoneNumber('');
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (/^[0-9]*$/.test(input)) {
      setPhoneNumber(input);
    }
  };

  return (
    <section className="consultation-form" id="contate">
      <h2 className="font-h3">ЗАПИС НА КОНСУЛЬТАЦІЮ</h2>
      <h3 className="font-h6">
        ЗАПОВНІТЬ ФОРМУ І МИ ЗВ'ЯЖЕМОСЬ З ВАМИ НАЙБЛИЖЧИМ ЧАСОМ АБО ЗВ'ЯЖІТЬСЯ З НАМИ ЧЕРЕЗ ЗРУЧНИЙ ДЛЯ ВАС
        МЕССЕНДЖЕР
      </h3>
      <div className="form-container">
        {formSubmitted ? (
          <div className="thank-you-message">
            <p className="font-h6">Дякуємо за Ваше звернення!</p>
            <p className="font-h6">Ми передзвонимо Вам найближчим часом.</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="form-content">
            <div className="form-group">
            <div className="placeholder-wrap">
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                name="phone-number"
                id="phone-number"
                maxLength="12"
                placeholder="Ваш номер телефону"
                required
                inputMode="numeric"
                className="phone-input font-input"
              />
 {/*              <span className="star">*</span> */}
              </div>
              {phoneError && <p style={{ color: 'red' }}>Неправильний формат номера</p>}
            </div>
            <button
              type="submit"
              className="butcall font-but1"
              id="buttoncons"
            >
              ЗАМОВИТИ КОНСУЛЬТАЦІЮ<img src="/icons/x-solid.svg" alt="icon" />
            </button>
          </form>
        )}
        <div className="messengers" id="Consul">
          <a
            href="viber://chat?number=%2B380937452557"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              const userAgent = navigator.userAgent.toLowerCase();
              if (userAgent.includes('android')) {
                e.preventDefault();
                window.location.href =
                  'intent://chat?number=%2B380937452557#Intent;scheme=viber;package=com.viber.voip;end';
              } else if (userAgent.includes('ios')) {
              } else {
                window.location.href = 'https://www.viber.com/';
              }
            }}
          >
            <img src="/icons/messengers/Viber_icon_white.svg" alt="viber" />
          </a>
          <a
            href="https://signal.me/#eu/F8axajmr2fkdM4fu5Vl8yFJwj1W31Us0SMwc0h0axGvNA8Svn0NL-JkxLsnJBnCC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/messengers/Signal-Logo-Ultramarine.svg" alt="signal" />
          </a>
          <a href="https://t.me/Nlaw_company">
            <img
              src="/icons/messengers/teleg.svg"
              alt="telegram"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a
            href="https://wa.me/message/X3PEXBN6BKQHF1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/messengers/Digital_Glyph_White.svg" alt="whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ConsultationForm;
