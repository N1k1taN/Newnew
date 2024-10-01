import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';


const ContactForm = ({ handleBackgroundClick, callPageRef }) => {
  const form = useRef();
  const [phoneError, setPhoneError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Новое состояние

  const sendEmail = (e) => {
    e.preventDefault();

   
    const phoneNumber = e.target['phone-number'].value;

    const phoneRegex = /^[0-9]{10}$/; 

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(true); 
      return; 
    }

    setPhoneError(false); 

    // Отправка формы через EmailJS
    emailjs.sendForm('service_6y4cf6d', 'template_j9ce8db', form.current, 'Oa2baTXpg0UruiePo')
      .then((result) => {
        setFormSubmitted(true); 
      }, (error) => {
        console.error('Ошибка при отправке:', error.text);
      });

    e.target.reset();
  };

  return (
    <div 
      className="backgroundpage" 
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
      onClick={handleBackgroundClick} 
    >
      <div className="callpage" ref={callPageRef}>
        {formSubmitted ? ( 
          <h2 className='thx'>Дякую вам, ми передзвонимо!</h2>
        ) : ( 
          <form ref={form} onSubmit={sendEmail}>
                            <img className='emailpng' src="/icons/callpg.jpg"></img>
            <h2>Вже на варті захисту Ваших прав! </h2>
            <p>Залишайте свій номер телефону і ми зателефонуємо Вам на протязі 20 хвилин.</p>
            <p>Якщо пізніше, Ви отримаєте знижку 10%</p>

            <label htmlFor="phone-number">Номер телефону</label>
            <div>
            <span className="phone-prefix">+38</span>
            <input 
              type="tel" 
              name="phone-number" 
              id="phone-number"
              maxlength="10"
              required 
              onChange={() => setPhoneError(false)} // Сбрасываем ошибку при изменении
            /></div>

            {phoneError && <p style={{ color: 'red' }}>Неправильний формат номера</p>}

            <button className="senderbutt" type="submit">Замовити</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
