"use client";
import { Navigation, Pagination, Zoom , } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import Accordions from "../components/accordion"
import '../styles/App.css';
import OpenMenuButton from "../components/callpage"
import Callpg from '../components/callpg'
import React, { useEffect } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';




function Homepage() {
  return (
      <div>
              <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

          <Callpg />
          <div className="mainpage" id="home">
              <div className="info">
                  <h1>ВІЙСЬКОВИЙ АДВОКАТ</h1>
                  <h2>ОДНІ З НАЙКРАЩИХ У ВИРІШЕННІ ЮРИДИЧНИХ ПИТАНЬ З ВІЙСЬКОВОГО ПРАВА</h2>
                  <h2>ПРАЦЮЄМО ПО ВСІЙ УКРАЇНІ</h2>
                  <OpenMenuButton />
              </div>
          </div>

          <div className="main">
              <div className="help" id="help" >
                  <h2>ПРОФЕСІЙНО НАДАЄМО ПОСЛУГИ:</h2>
                  <Accordions />
              </div>

              <div className="consulting " id="about">
  <h2>ПРО НАШУ КОМПАНІЮ</h2>
  <h3 className="bods"><Image src="/icons/logo.png" 
  alt="Грошове забезпечення"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом
/></h3>
  <p>Наше гасло «ЕКСПЕРТНІСТЬ, УСПІХ, ПРОФЕСІОНАЛІЗМ»</p>
  <p>NLAW Company, являється юридичною компанією заснованою у 2024 році в Україні, керуючим партнером Науменко Ярославом Олексійовичем.</p>
  <p>Так, ми досить молоді, але й досить амбіціозні.</p>
  <p>Ми не просто бажаємо надати послугу нашому клієнту, а прагнемо надати той результат, який він прагне, та навіть більше, застосовуючи різноманітні рішення.</p>
  <p>Наша команда складається з досвідчених адвокатів та юристів, яки мають різноманітний досвід роботи у тому числі в державних установах чи правоохоронних органах.</p>
  <p>Тому при вирішенні задач, ми підходимо з різних сторін, для досягнення максимального результату.</p>
  <p>У штаті нашої компанії, наявні спеціалісти з практик військового, цивільного, сімейного, спадкового, господарського, адміністративного та кримінального права. </p>
  
  </div>
  <div className="Comments" id="vidguk">
    <h2>ВІДГУКИ</h2>
    <Swiper 
      modules={[Navigation, Pagination, Zoom]}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={1}
      initialSlide={2}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',  // Явно указываем классы для кнопок навигации
        prevEl: '.swiper-button-prev'
      }}
      allowTouchMove={true}
      zoom={true}
      loop={true}
      breakpoints={{
        1100: {
          slidesPerView: 3,
          pagination: false,
          navigation: false,
          allowTouchMove: false,
        },
        0: {
          slidesPerView: 1,
          pagination: true,
          navigation: true,
          allowTouchMove: true,
        }
      }}
      >
        <SwiperSlide style={{ margin: 0 }}><div className="swiper-zoom-container">
            <img src="/icons/vidguk/photo_2024-09-29_16-33-13.jpg" className="imgcont"
                 alt="Грошове забезпечення"
                 width={350}
                 height={550}
                 priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом
               />
          </div>
  </SwiperSlide>
  <SwiperSlide><div className="swiper-zoom-container">
            <img src="/icons/vidguk/photo_2024-09-29_16-34-10.jpg" className="imgcont" 
                 alt="Грошове забезпечення"
                 width={350}
                 height={550}
                 priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом
                />
          </div>
  </SwiperSlide>
  <SwiperSlide><div className="swiper-zoom-container">
            <img src="/icons/vidguk/photo_2024-09-29_16-34-16.jpg" className="imgcont" 
                 alt="Грошове забезпечення"
                 width={350}
                 height={550}
                 priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом
                />
          </div>
  </SwiperSlide>
      </Swiper>
  </div>

  <div className="documents" id="4">
      <h2>ЗАВАНТАЖИТИ ЗРАЗКИ ДОКУМЕНТІВ</h2>
  <div className="doc">
          <a className="doico" href="/documentsdown/Акт про встановлення факту здійснення особою догляду (постійного догляду).docx" download="Акт про встановлення факту здійснення особою догляду (постійного догляду).docx"></a><h3>Акт про встановлення факту здійснення особою догляду (постійного догляду)</h3>
  </div>
  <div className="doc">
      <a className="doico" href="/documentsdown/Заява про призначення та виплати одноразової грошової допомоги у разі загибелі (смерті).docx" download="Заява про призначення та виплати одноразової грошової допомоги у разі загибелі (смерті).docx"></a><h3>Заява про призначення та виплати одноразової грошової допомоги у разі загибелі (смерті) військовослужбовців Збройних Сил України в період дії воєнного стану</h3>
  </div>
  <div className="doc">
      <a className="doico" href="/documentsdown/Довідка про здобувача освіти за даними єдиної державної електронної бази.docx" download="Довідка про здобувача освіти за даними єдиної державної електронної бази.docx"></a><h3>Довідка про здобувача освіти за даними єдиної державної електронної бази з питань освіти</h3>
  </div>
  <div className="doc">
      <a className="doico" href="/documentsdown/Контракт про проходження громадянами України.doc" download="Контракт про проходження громадянами України.doc"></a><h3>Контракт про проходження громадянами України військової служби у Збройних Силах України </h3>
  </div>
  <div className="doc">
      <a className="doico" href="/documentsdown/Заява на отримання відстрочки.docx" download="Заява на отримання відстрочки.docx"></a><h3>Заява на отримання відстрочки</h3>
  </div>
  <div className="doc">
      <a className="doico" href="/documentsdown/Довідка про обставини травми (поранення, контузії, каліцтва).docx" download="Довідка про обставини травми (поранення, контузії, каліцтва).docx"></a><h3>Довідка про обставини травми (поранення, контузії, каліцтва)</h3>
  </div>
  <div className="doc">
      <a className="doico" href="/documentsdown/Заява про надання статусу учасника бойових дій.docx" download="Заява про надання статусу учасника бойових дій.docx"></a><h3>Заява про надання статусу учасника бойових дій</h3>
  </div>
  <div className="doc">
      <a className="doico" href="/documentsdown/Довідка військово-лікарської комісії.docx" download="Довідка військово-лікарської комісії.docx"></a><h3>Довідка військово-лікарської комісії</h3>
  </div>
    
  
  </div>

              <section id="case">
      <h2> НАШІ РЕЗУЛЬТАТИ:</h2>
      <Swiper 
      modules={[Navigation, Pagination, Zoom]}
      centeredSlides={true}
      spaceBetween={50}
      slidesPerView={1}
      initialSlide={2}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',  // Явно указываем классы для кнопок навигации
        prevEl: '.swiper-button-prev'
      }}
      allowTouchMove={true}
      zoom={true}
      loop={true}
      breakpoints={{
        1100: {
          slidesPerView: 3,
          pagination: false,
          navigation: false,
          allowTouchMove: false,
        },
        0: {
          slidesPerView: 1,
          pagination: true,
          navigation: true,
          allowTouchMove: true,
        }
      }}
>
  <SwiperSlide>
    <div className="swiper-zoom-container">
      <img 
        src="/icons/res/res1.webp"
        alt="Грошове забезпечення"
      />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="swiper-zoom-container">
      <img 
        src="/icons/res/res2.webp"
        alt="Грошове забезпечення"
      />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="swiper-zoom-container">
      <img 
        src="/icons/res/res3.webp"
        alt="Грошове забезпечення"
      />
    </div>
  </SwiperSlide>
  <div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>
</Swiper>

  </section>

              <div className="contacts">
  <div className="contactinfo">
          <div>
              <div>
              <p>АДРЕСА</p>
              <p>м. Київ, вул. Білоруська 30 (10 хвилин пішки від метро Лукʼянівська)</p>
              </div>
              <div>
              <p>ГРАФІК</p>
              <p>10:00 по 19:00 ПН-ПТ</p>
              <p>ВИХІДНІ ПО ДОМОВЛЕННОСТІ</p>
              </div>
          </div>
          <div className ="giv">
          <div>
              <p>ТЕЛЕФОН</p>
              <p>+380937452557</p>
              </div>
              <div>
              <p>EMAIL</p>
              <p>NLAWCOMPANY@GMAIL.COM</p>
              </div>
          </div>
          <div className="socials">
  <p>МИ В СОЦМЕРЕЖАХ</p>
  <div className="social">
  <a href="https://www.facebook.com/profile.php?id=61566465502728" target="_blank" rel="noopener noreferrer"><img src="/icons/socials/facebook.svg" alt="facebook"></img></a>
  <a href="https://www.instagram.com/nlaw_company?igsh=cWs1MXg4a2poaW5u&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src='/icons/socials/instagram.svg' alt="instagram"></img></a>
  <a href="https://www.tiktok.com/@nlaw.company?_t=8puk4R0nGdx&_r=1" target="_blank" rel="noopener noreferrer"><img src="/icons/socials/tiktok.svg" alt="tiktok"></img></a>
  <a href="http://www.youtube.com/@NLAW_COMPANY" target="_blank" rel="noopener noreferrer"><img src="/icons/socials/youtube-123.svg" alt="youtube"></img></a>
  </div>
          </div>
      </div>
      <div className="messengers" id="contacts">
          <a href="viber://chat?number=%2B380937452557" target="_blank" rel="noopener noreferrer"
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
          ><img src="/icons/messengers/Viber_icon_white.svg" alt="viber"></img></a>
          <a href="https://signal.me/#eu/F8axajmr2fkdM4fu5Vl8yFJwj1W31Us0SMwc0h0axGvNA8Svn0NL-JkxLsnJBnCC" target="_blank" rel="noopener noreferrer"><img src='/icons/messengers/Signal-Logo-Ultramarine.svg' alt="signal"></img></a>
          <a href="https://t.me/Nlaw_company"><img src="/icons/messengers/teleg.svg" alt="telegram" target="_blank" rel="noopener noreferrer"></img></a>
          <a href="https://wa.me/message/X3PEXBN6BKQHF1" target="_blank" rel="noopener noreferrer"><img src='/icons/messengers/Digital_Glyph_White.svg' alt="whatsapp"></img></a>
      </div>
  </div>
  <div className="allrights">
      <p>© Усі права захищено.</p>
      <p>2024</p>
  </div>
  </div>
  </div>
  );
}

export default Homepage;
