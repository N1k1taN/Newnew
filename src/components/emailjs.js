import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm({ handleBackgroundClick, callPageRef }) {

  const [phoneNumber, setPhoneNumber] = useState(''); // State to store phone number
  const [phoneError, setPhoneError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Проверяем длину введенного номера (9 цифр)
    const phoneRegex = /^[0-9]{12}$/; // Номер должен быть точно 9 цифр

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false); // Сброс ошибки, если валидация проходит

    // Отправка формы через EmailJS
    emailjs
      .sendForm('service_6y4cf6d', 'template_j9ce8db', form.current, 'Oa2baTXpg0UruiePo')
      .then(
        (result) => {
          setFormSubmitted(true); // Успешная отправка формы
        },
        (error) => {
          console.error('Ошибка отправки формы:', error.text);
        }
      );

    e.target.reset(); // Сброс формы после отправки
    setPhoneNumber(''); // Очистить состояние номера телефона
  };

  // Обработчик для обновления состояния номера телефона
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    if (/^[0-9]*$/.test(input)) {  // Проверяем, что введённые символы - цифры
      setPhoneNumber(input); // Обновляем состояние только если это цифры
    }
  };

  return (
    <div
      className="backgroundpage"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
      onClick={handleBackgroundClick}  // Обработчик для закрытия фона по клику
    >
      <div className="callpage" ref={callPageRef} onClick={(e) => e.stopPropagation()}> {/* Прекращаем всплытие клика */}
        {formSubmitted ? (
          <h2 className="thx">Дякую вам, ми передзвонимо!</h2>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <img className="emailpng" src="/icons/callpg.jpg" alt="call" />
            <h2>Вже на варті захисту Ваших прав!</h2>
            <p>Залишайте свій номер телефону і ми зателефонуємо Вам на протязі 20 хвилин.</p>
            <p>Якщо пізніше, Ви отримаєте знижку 10%</p>

            <label htmlFor="phone-number">Ваш телефон</label>
            <div>
              <input
                type="tel"
                value={phoneNumber} // Контролируемый input
                onChange={handlePhoneNumberChange} // Обновление состояния при вводе
                name="phone-number"
                id="phone-number"
                maxLength="12" // Ограничение на ввод 9 цифр
                placeholder='+380'
                required
                inputMode="numeric" // Открывает цифровую клавиатуру на мобильных устройствах
                pattern="[0-9]*" // Ограничение на ввод только цифр
              />
            </div>

            {phoneError && <p style={{ color: 'red' }}>Неправильний формат номера</p>}

            <button className="senderbutt" type="submit">
              ЗАТЕЛЕФОНУЙТЕ МЕНІ
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;
