import React from "react";
import Head from 'next/head';
import "../../styles/App.scss";
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";
export const metadata = {
    title: "Повістки від ТЦК та СП поштою | Військовий Адвокат",
    description: "Дізнайтесь, як діяти у разі отримання повістки від ТЦК та СП поштою. Отримайте кваліфіковану юридичну консультацію, щоб захистити свої права та уникнути непорозумінь.",
    keywords: "повістка, ТЦК та СП, військова служба, повістка поштою, юридична консультація, військовий адвокат",
    robots: "index, follow",
    openGraph: {
      title: "Повістки від ТЦК та СП поштою | Військовий Адвокат",
      description: "Юридична допомога при отриманні повістки від ТЦК та СП поштою. Поради, як діяти, щоб уникнути ризиків та зберегти свої права.",
      images: [
        {
          url: "/icons/povistki.webp",
          width: 500,
          height: 300,
          alt: "Повістка від ТЦК та СП"
        }
      ],
      type: "website",
      url: "https://nlawcompany.com/povistki"
    },
    twitter: {
      card: "summary_large_image",
      title: "Повістки від ТЦК та СП поштою | Військовий Адвокат",
      description: "Консультація юриста щодо повісток від ТЦК та СП, направлених поштою. Захистіть себе та свої права.",
      images: [
        {
          url: "/icons/povistki.webp",
          alt: "Повістка від ТЦК та СП"
        }
      ]
    }
  };
  

function povistki() {
  return (
    <div>
    <Callpg></Callpg>
          <div className="alde">
          <div className="about">
            <h1 className="font-h1">ПОВІСТКИ НАПРАВЛЕННІ ТЦК ТА СП ПОШТОЮ</h1>
            <hr></hr>
            <h2 className="font-h4">З ОСЕНІ 2024 РОКУ, ТЦК ТА СП ВСЕ ТАКИ ПОЧАЛИ НАПРАВЛЯТИ ПОВІСТКИ ПОШТОЮ ЯК ТОГО ВИМАГАЄ ЗАКОН:</h2>
    <div className="about-main">
    <div className="p-text-enb">
    <p className="font-text2">Та при отриманні такого листа щастя, непоодинокі випадки, коли військовозобов’язані громадяни можуть тільки гадати, що йому робити, або йти до ТЦК та СП або ігнорувати. </p>
    <p className="font-text2">Наша команда ретельно вивчила дане питання та має практичний досвід руху таких категорій справ.</p>
    </div>
    <div className="about-text">
      <div className="p-text-dis">
      <p className="font-text2">Та при отриманні такого листа щастя, непоодинокі випадки, коли військовозобов’язані громадяни можуть тільки гадати, що йому робити, або йти до ТЦК та СП або ігнорувати. </p>
      <p className="font-text2">Наша команда ретельно вивчила дане питання та має практичний досвід руху таких категорій справ.</p>
    </div>
    <p className="font-text4 textbeg">Тому радимо не гадати Вам чи думати, що роботи при отриманні або не отриманні повістки, а відразу звертатись до нас для отримання кваліфікованої консультації, в ході якої Вам стане все зрозуміло. А в деяких випадках вбереже Ваші нерви, кошти та здоров’я.
    </p>
    <OpenMenuButton></OpenMenuButton>
    </div>
    <Image
     src="/icons/povistki.webp"  
     alt="Повістка"
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

export default povistki;