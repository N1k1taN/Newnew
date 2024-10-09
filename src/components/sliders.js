'use client';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CaseResults = () => {
  const { ref: sectionRef, inView: isVisible } = useInView({ triggerOnce: true, threshold: 0.3 });
  const resultSlides = [
    { imgSrc: '/icons/res/res1.webp', text: 'Юристи NLAW Company, успішно отримали відстрочку для клієнта на підставі наявності дружини з ІІ групою інвалідності' },
    { imgSrc: '/icons/res/res2.webp', text: 'Юристи NLAW Company, успішно отримали оформили відстрочку для клієнта, який являється науковим співробітником' },
    { imgSrc: '/icons/res/res3.webp', text: 'Юристи NLAW Company, успішно отримали відстрочку для клієнта на підставі наявності дружини з ІІ групою інвалідності' },
    { imgSrc: '/icons/res/res4.webp', text: 'Юристи NLAW Company успішно виправили недостовірні відомості в «Резерв+», щодо військовозобовʼязаного, який має бути виключений з військового обліку' },
  ];
  const [resultActiveIndex, setResultActiveIndex] = useState(0);

  return (
    <motion.section
      id="case"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
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
              <img src={slide.imgSrc} alt={slide.text} className={resultActiveIndex === index ? 'active-slide' : 'blur-slide'} />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
      <h3>{resultSlides[resultActiveIndex].text}</h3>
    </motion.section>
  );
};

const Comments = () => {
  const { ref: commentsRef, inView: isVisible } = useInView({ triggerOnce: true, threshold: 0.3 });
  const slides = [
    { imgSrc: '/icons/vidguk/photo_2024-09-29_16-33-13.jpg' },
    { imgSrc: '/icons/vidguk/photo_2024-09-29_16-34-10.jpg' },
    { imgSrc: '/icons/vidguk/photo_2024-09-29_16-34-16.jpg' },
    { imgSrc: '/icons/vidguk/vidguk4.webp' },
  ];
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <motion.div
      className="Comments"
      id="vidguk"
      ref={commentsRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
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
                alt="Відгуки"
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
    </motion.div>
  );
};

export { CaseResults, Comments };