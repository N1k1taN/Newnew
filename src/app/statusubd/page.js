import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";


export const metadata = {
  title: "Військовий Адвокат - Отримання Статусу УБД | Юридична Допомога",
  description: "NLAW Company допомагає військовослужбовцям отримати статус учасника бойових дій (УБД). Консультації, юридичний супровід та допомога в отриманні соціальних пільг.",
  keywords: "військовий адвокат, юридична допомога, статус УБД, учасник бойових дій, NLAW Company, соціальні пільги, військове право",
  robots: "index, follow",
  openGraph: {
    title: "Військовий Адвокат - Отримання Статусу УБД | Юридична Допомога",
    description: "Отримання статусу учасника бойових дій для військовослужбовців. Юридичний супровід та консультації щодо соціальних пільг для учасників бойових дій.",
    images: [
      {
        url: "/icons/ubd.webp",
        width: 500,
        height: 300,
        alt: "Статус УБД"
      }
    ],
    type: "website",
    url: "https://nlawcompany.com/statusubd"
  },
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    icon16: "/favicon-16x16.png",
    icon32: "/favicon-32x32.png"
  }
};

function Statusubd() {

  return (
    <div>
    <Callpg></Callpg>
          <div className="alde">
          <div className="about">
            <h1 className="font-h1">ОТРИМАННЯ СТАТУСУ УБД</h1>
            <hr></hr>
            <h2 className="font-h4">ПІДСТАВАМИ ДЛЯ ОТРИМАННЯ СТАТУСУ УЧАСНИКА БОЙОВИХ ДІЙ (УБД) Є:</h2>
    <div className="about-main">
    <div className="p-text-enb">
    <p className="font-text2">- Перебування у зоні бойових дій.</p>
    <p className="font-text2">- Отримання поранення під час захисту Батьківщини.</p>
    </div>
    <div className="about-text">
      <div className="p-text-dis">
    <p className="font-text2">- Перебування у зоні бойових дій. </p>
    <p className="font-text2">- Отримання поранення під час захисту Батьківщини.</p>
    </div>
    <p className="font-text4 textbeg">Статус учасника бойових дій дає змогу отримати соціальні пільги військовослужбовцям, навіть тим, які звільненні в запас та членам його сімей. Наша команда вже допомогла не одному десятку військовослужбовців з даного питання.
    </p>
    <OpenMenuButton></OpenMenuButton>
    </div>
    <Image
     src="/icons/ubd.png"  
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

export default Statusubd;
