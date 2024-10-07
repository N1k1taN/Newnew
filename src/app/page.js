"use client";
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import Accordions from "../components/accordion";
import '../styles/App.css';
import OpenMenuButton from "../components/callpage";
import Callpg from '../components/callpg';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

function Homepage() {
  const [activeIndex, setActiveIndex] = useState(2); // Начальное значение слайда

  const slides = [
    { imgSrc: '/icons/vidguk/photo_2024-09-29_16-33-13.jpg'  },
    { imgSrc: '/icons/vidguk/photo_2024-09-29_16-34-10.jpg' },
    { imgSrc: '/icons/vidguk/photo_2024-09-29_16-34-16.jpg'  },
    { imgSrc: '/icons/vidguk/vidguk4.webp' },
  ];

  const resultSlides = [
    { imgSrc: '/icons/res/res1.webp', text: 'Юристи NLAW Company, успішно отримали відстрочку для клієнта на підставі наявності дружини з ІІ групою інвалідності' },
    { imgSrc: '/icons/res/res2.webp', text: 'Юристи NLAW Company, успішно отримали оформили відстрочку для клієнта, який являється науковим співробітником' },
    { imgSrc: '/icons/res/res3.webp', text: 'Юристи NLAW Company, успішно отримали відстрочку для клієнта на підставі наявності дружини з ІІ групою інвалідності' },
    { imgSrc: '/icons/res/res4.webp', text: 'Юристи NLAW Company успішно виправили недостовірні відомості в «Резерв+», щодо військовозобовʼязаного, який має бути виключений з військового обліку' },
  ];

  const [resultActiveIndex, setResultActiveIndex] = useState(0);

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
        <div className="help" id="help">
          <h2>ПРОФЕСІЙНО НАДАЄМО ПОСЛУГИ:</h2>
          <Accordions />
        </div>
        <div className="steps">
        <h2>Як ми працюємо</h2>
          <div className="step">
            <div className="stuns">
              1
            </div>
            <div className="steptext">Увійдемо на будь-якому етапі справи.</div>
          </div>
          <div className="step">
            <div className="stuns">
              2
            </div>
            <div className="steptext">Обговоримо справу з Вами, проаналізуємо перспективи та ризики</div>
          </div>
          <div className="step">
            <div className="stuns">
              3
            </div>
            <div className="steptext">Досконально вивчимо суть Вашої ситуації, врахуємо всі наявні обставини</div>
          </div>
          <div className="step">
            <div className="stuns">
              4
            </div>
            <div className="steptext">Надамо стратегію, запропонуємо шляхи вирішення справи та план дій</div>
          </div>
          <div className="step">
            <div className="stuns">
              5
            </div>
            <div className="steptext">Здійснюємо правовий захист та відстоювання Ваших інтересів.</div>
          </div>
        </div>
        <div className="consulting" id="about">
          <h3 className="bods">
            <Image
              src="/icons/logo.png"
              alt="Грошове забезпечення"
              width={500}
              height={300}
              layout="responsive" // делает изображение адаптивным
            />
          </h3>
          <div className="panelrech">
<div className='textbys'>
  <div className="ACDS">
  <h3>Кожен наш клієнт для нас є побратимом на юридичному фронті, за якого ми будемо битись до кінця не цураючись застосовувати різноманітні методи правової боротьби.</h3>
  <p>Ярослав Науменко</p>
  <p>Засновник NLAW Company</p>
  </div>
</div>
            <div className='Ownerb'></div>
          </div>
        </div>
        <section id="case">
          <h2> НАШІ РЕЗУЛЬТАТИ:</h2>
          <Swiper
            modules={[Navigation, Pagination, Zoom]}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={0}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            allowTouchMove={true}
            zoom={true}
            loop={true}
            breakpoints={{
              1100: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(swiper) => setResultActiveIndex(swiper.realIndex)}
          >
            {resultSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img src={slide.imgSrc} alt={slide.text}
                  className={resultActiveIndex === index ? 'active-slide' : 'blur-slide'} />
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
          <h3>{resultSlides[resultActiveIndex].text}</h3> {/* Меняем текст в зависимости от текущего слайда */}
        </section>
        <div className="Comments" id="vidguk">
          <h2>ВІДГУКИ</h2>
          <span>Одна із вищих нагород для нас це відгук задоволеного клієнта!</span>
          
          <Swiper
            modules={[Navigation, Pagination, Zoom]}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={2}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            allowTouchMove={true}
            zoom={true}
            loop={true}
            breakpoints={{
              1100: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img
                    src={slide.imgSrc}
                    alt={slide.text}
                    className={activeIndex === index ? 'active-slide' : 'blur-slide'}
                    width={350}
                    height={550}
                    priority={true}
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
          
        </div>
      </div>
    </div>
  );
}

export default Homepage;