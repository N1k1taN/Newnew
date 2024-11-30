'use client';

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function ConsultationForm() {
  const [phoneNumber, setPhoneNumber] = useState(''); // State для номера телефона
  const [phoneError, setPhoneError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneRegex = /^(?:[0-9]{9}|[0-9]{10}|[0-9]{12})$/; // Номер должен быть длиной 9, 10 или 12 цифр

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false); // Сброс ошибки, если номер корректен

    emailjs
      .sendForm('service_6y4cf6d', 'template_j9ce8db', form.current, 'Oa2baTXpg0UruiePo')
      .then(
        () => {
          setFormSubmitted(true); // Отправка успешна
        },
        (error) => {
          console.error('Ошибка отправки формы:', error.text);
        }
      );

    e.target.reset(); // Сброс формы
    setPhoneNumber(''); // Очистить состояние номера телефона
  };

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (/^[0-9]*$/.test(input)) {
      setPhoneNumber(input); // Обновляем только если введены цифры
    }
  };

  return (
    <section className="consultation-form">
        <h2 className='font-h1'>ЗАПИС НА КОНСУЛЬТАЦІЮ</h2>
        <h3 className='font-h3'>ЗАПОВНІТЬ ФОРМУ І МИ ЗВ'ЯЖЕМОСЬ З ВАМИ НАЙБЛИЖЧИМ ЧАСОМ АБО ЗВ'ЯЖІТЬСЯ З НАМИ ЧЕРЕЗ ЗРУЧНИЙ ДЛЯ ВАС МЕССЕНДЖЕР</h3>
      <div className="form-container">
        {formSubmitted ? (
          <div className="thank-you-message">
            <p>Дякуємо за Ваше звернення!</p>
            <p>Ми передзвонимо Вам найближчим часом.</p>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="form-content">
            <div className="form-group">
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
                className="phone-input font-h3"
              />
              {phoneError && <p style={{ color: 'red' }}>Неправильний формат номера</p>}
            </div>
            <button type="submit" className="butcall font-semibold-16px" id='buttoncons'>
              ЗАМОВИТИ КОНСУЛЬТАЦІЮ<img src='/icons/x-solid.svg'></img>
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
      window.location.href = "intent://chat?number=%2B380937452557#Intent;scheme=viber;package=com.viber.voip;end";
    } else if (userAgent.includes('ios')) {
      window.location.href = "https://apps.apple.com/app/id382617920";
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
      </div>
      
    </section>
  );
}

export default ConsultationForm;