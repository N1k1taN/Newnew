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
    { imgSrc: '/icons/res/res1.png', text: 'Юристи NLAW Company, успішно отримали відстрочку для клієнта на підставі наявності дружини з ІІ групою інвалідності.' },
    { imgSrc: '/icons/res/res2.png', text: 'Юристи NLAW Company успішно виправили недостовірні відомості в «Резерв+», щодо військовозобовʼязаного, який має бути виключений з військового обліку.' },
    { imgSrc: '/icons/res/res3.png', text: 'Юристи NLAW Company успішно отримали відстрочку для клієнта на підставі утриманні трьох неповнолітніх дітей, не дивлячись на те, що клієнт мав дітей від різних жінок.' },
    { imgSrc: '/icons/res/res4.png', text: 'Юристи NLAW Company успішно отримали оформили відстрочку для клієнта, який являється науковим співробітником.' },
    { imgSrc: '/icons/res/res5.png', text: 'Юристи NLAW Company успішно отримали відстрочку для клієнта на підставі вихованні дитини з інвалідністю віком до 18 років.' },
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
      <h2 className='font-h1'> НАШІ РЕЗУЛЬТАТИ:</h2>
      <Swiper
  modules={[Navigation, Pagination, Zoom]}
  centeredSlides={true}
  spaceBetween={50}
  slidesPerView="auto" // Автоматическая подгонка ширины слайдов
  loop={true} // Включаем бесконечный режим
  loopFillGroupWithBlank={false} // Убираем пустые места
  initialSlide={0}
  pagination={{ clickable: true }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  allowTouchMove={true}
  zoom={true}
  breakpoints={{
    1100: {
      spaceBetween: 150, // Исправлено: используется двоеточие
    },
  }}
>
  {resultSlides.map((slide, index) => (
    <SwiperSlide className='Sliderres' key={index}>
      <div className="swiper-zoom-container" id='swiper1'>
        <img src={slide.imgSrc} alt={slide.text} />
      </div>
      <p className="slide-text font-h4">{slide.text}</p>
    </SwiperSlide>
  ))}
  <div className="swiper-button-next"></div>
  <div className="swiper-button-prev"></div>
</Swiper>
    </motion.section>
  );
};

const Comments = () => {
  const { ref: commentsRef, inView: isVisible } = useInView({ triggerOnce: true, threshold: 0.3 });
  const slides = [
    { imgSrc: '/icons/vidguk/vidg1.png' },
    { imgSrc: '/icons/vidguk/vidg2.png' },
    { imgSrc: '/icons/vidguk/vidg3.png' },
    { imgSrc: '/icons/vidguk/vidg4.png' }
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
      <h2 className='font-h1'>ВІДГУКИ</h2>
      <span className='font-h3'>Одна із вищих нагород для нас це відгук задоволеного клієнта!</span>
      <Swiper
  modules={[Navigation, Pagination, Zoom]}
  centeredSlides={true}
  spaceBetween={10}
  slidesPerView={1.6}
  loop={true} // Включаем бесконечный режим
  loopFillGroupWithBlank={false} // Убираем пустые места
  initialSlide={0}
  pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        allowTouchMove={true}
        zoom={true}
        breakpoints={{
          1100: {
            slidesPerView: 2.6,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='swiper2'>
            <div className="swiper-zoom-container">
              <img
                src={slide.imgSrc}
                alt="Відгуки"
                className={activeIndex === index ? 'active-slide' : 'blur-slide'}
                width={450}
                height={360}
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