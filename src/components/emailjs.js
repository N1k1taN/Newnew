import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm({ handleBackgroundClick, callPageRef }) {
  const preset = '+38'; // Предустановленные цифры
  const [value, setValue] = useState(preset);
  const [phoneError, setPhoneError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const newValue = e.target.value;

    // Разрешаем ввод только после предустановленных цифр
    if (newValue.startsWith(preset)) {
      setValue(newValue);
      setPhoneError(false); // Сбрасываем ошибку при изменении
    }
  };

  const handleKeyDown = (e) => {
    // Запрещаем удаление предустановленных цифр
    if (e.target.selectionStart <= preset.length && (e.key === 'Backspace' || e.key === 'Delete')) {
      e.preventDefault();
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneNumber = value.slice(preset.length); // Извлекаем только введенные пользователем цифры

    // Проверяем длину введенного номера (без префикса)
    const phoneRegex = /^[0-9]{10}$/; // Должно быть ровно 9 цифр после +380

    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false); // Сбрасываем ошибку

    // Отправка формы через EmailJS
    emailjs
      .sendForm('service_6y4cf6d', 'template_j9ce8db', form.current, 'Oa2baTXpg0UruiePo')
      .then(
        (result) => {
          setFormSubmitted(true); // Успешная отправка
        },
        (error) => {
          console.error('Ошибка при отправке:', error.text);
        }
      );

    e.target.reset();
    setValue(preset); // Сбрасываем значение поля ввода после отправки
  };

  return (
    <div
      className="backgroundpage"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999 }}
      onClick={handleBackgroundClick}  // Обработчик клика для закрытия фона
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
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                name="phone-number"
                id="phone-number"
                maxLength="13" // +380 и еще 9 цифр
                required
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
