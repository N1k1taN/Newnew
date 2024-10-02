import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Callpg = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
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

  const onSubmit = (data) => {
    const { phone } = data;

    emailjs.send(
      'service_6y4cf6d',   
      'template_j9ce8db',  
      { phone_number: phone },
      'Oa2baTXpg0UruiePo'       
    )
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      reset(); // Сброс формы после отправки
    })
    .catch(err => {
      console.log('FAILED...', err);
    });
  };

  return (
    <div>
      {/* Если экран меньше 600px, показываем ссылку для звонка */}
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
              <form className="Callform" onSubmit={handleSubmit(onSubmit)}>
                <h2>Залиште свій номер телефону і ми зв'яжемося з вами!</h2>
                  <input
                  placeholder="+380"
                    id="phone"
                    type="tel"
                    {...register('phone', { 
                      required: 'Номер телефона обязателен', 
                      pattern: { 
                        value: /^[+]?[0-9]{10,15}$/,
                        message: 'Введите корректный номер телефона' 
                      }
                    })}
                  />
                  {errors.phone && <p>{errors.phone.message}</p>}
                <button className="senderbutt2" type="submit">Замовити дзвінок</button>
                <p>Або ви можете зателефонувати нам самостійно:</p>
                <p>+380937452557</p>
                </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Callpg;
