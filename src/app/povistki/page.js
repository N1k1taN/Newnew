import React from "react";
import Head from 'next/head';
import "../../styles/App.scss";
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
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
          <h1>Повістки направленні ТЦК та СП поштою</h1>
          <Image
            src="/icons/povistki.webp"
            alt="Звільнення з війскової служби"
            width={500}
            height={300}
            layout="responsive"
            priority={true}
          />
          <h3>З осені 2024 року, ТЦК та СП все таки почали направляти повістки поштою як того вимагає Закон.</h3>
          <p>-Та при отриманні такого листа щастя, непоодинокі випадки, коли військовозобов’язані громадяни можуть тільки гадати, що йому робити, або йти до ТЦК та СП або ігнорувати.</p>
          <p>-Наша команда ретельно вивчила дане питання та має практичний досвід руху таких категорій справ.</p>
          <p>Тому радимо не гадати Вам чи думати, що роботи при отриманні або не отриманні повістки, а відразу звертатись до нас для отримання кваліфікованої консультації, в ході якої Вам стане все зрозуміло. А в деяких випадках вбереже Ваші нерви, кошти та здоров’я.</p>

          <OpenMenuButton></OpenMenuButton>
        </div>
      </div>
    </div>
  );
}

export default povistki;