import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";

export const metadata = {
  title: "Оскарження Штрафів ТЦК та СП | Військовий Адвокат",
  description: "NLAW Company надає допомогу у скасуванні штрафів ТЦК та СП, що стосуються військовозобов'язаних. Консультації щодо оскарження та юридичний супровід.",
  keywords: "оскарження штрафів, військовий адвокат, ТЦК та СП, мобілізаційна підготовка, NLAW Company, військовозобов'язані, скасування штрафів",
  robots: "index, follow",
  openGraph: {
    title: "Оскарження Штрафів ТЦК та СП | Військовий Адвокат",
    description: "Допомога у скасуванні штрафів за порушення правил військового обліку та мобілізації. Юридичний супровід у суді, досвід вирішення індивідуальних справ.",
    images: [
      {
        url: "/icons/oskargenyasrtafiv.webp",
        width: 500,
        height: 300,
        alt: "Оскарження штрафів ТЦК та СП"
      }
    ],
    type: "website",
    url: "https://nlawcompany.com/oskargenyasrtafiv"
  },
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    icon16: "/favicon-16x16.png",
    icon32: "/favicon-32x32.png"
  }
};




function strafi() {

  return (
    
    <div>
    <Callpg></Callpg>
          <div className="alde">
          <div className="about">
            <h1 className="font-h1">ОСКАРЖЕННЯ ШТРАФІВ ТЦК ТА СП</h1>
            <hr></hr>
            <h2 className="font-h5">ВІДПОВІДНО ДО КОДЕКСУ УКРАЇНИ АДМІНІСТРАТИВНІ ПРАВОПОРУШЕННЯ ПЕРЕДБАЧЕНА МОЖЛИВІСТЬ НАКЛАДЕННЯ АДМІНІСТРАТИВНОГО ШТРАФУ ЗА ПОРУШЕННЯ ПРАВИЛ ВІЙСЬКОВОГО ОБЛІКУ:</h2>
    <div className="about-main">
    <div className="p-text-enb">
    <p className="font-text-18px-regular">- За неявку до ТЦК за повісткою передбачено від 17 000 до 25 000 грн за перше правопорушення, а також від 34 000 до 59 500 грн - для посадових і юридичних осіб</p>
    </div>
    <div className="about-text">
      <div className="p-text-dis">
      <p className="font-text-18px-regular">- За неявку до ТЦК за повісткою передбачено від 17 000 до 25 000 грн за перше правопорушення, а також від 34 000 до 59 500 грн - для посадових і юридичних осіб</p>
    </div>
    <p className="font-text-18px-regular textbeg">
    Та в подальшому обмеження в праві керуванням транспортним засобом військовозобов’язаного. 
    Але не слід впадати у відчай, оскільки даний штраф можна скасувати.
    Наша команда має досвід підходу до даного питання та його вирішення навіть у кризових ситуаціях.
    акі штрафи ТЦК та СП скасовуються через суд, але тут слід не гаяти часу, оскільки на оскарження штрафу дається фактично 10 днів з правом поновлення такого строку у разі його пропуску з поважних причин.
    Наша команда неодноразово скасовувала штрафи ТЦК та СП, ми розуміємо, що кожен випадок індивідуальний та готуємо позов про скасування штрафу з максимальною ретельністю задля досягнення позитивного рішення на користь нашого клієнта.
    </p>
    <OpenMenuButton></OpenMenuButton>
    </div>
    <Image
     src="/icons/oskargenyasrtafiv.webp"  
     alt="Відстрочка від мобілізації"
      width={464}
      height={366}
      priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом
    
          /> 
    
    </div>
    <Comments></Comments>
    <Messenger></Messenger>
          </div>
          </div>
        </div>
  );
}

export default strafi;