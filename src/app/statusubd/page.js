import React from "react";
import "../../styles/App.css"
import "../../styles/about.css";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";


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
        <h1>Отримання статусу УБД</h1>
        <Image
 src="/icons/ubd.webp"  
 alt="Статус УБД"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      />          <h3>Зокрема підставами отримання статусу учасника бойових дій є:</h3>
<p>-Перебування у зоні бойових дій </p>
<p>-Отримання поранення під час захисту Батьківщини</p>
<p>Статус учасника бойових дій дає змогу отримати соціальні пільги військовослужбовцям, навіть тим, які звільненні в запас та членам його сімей.</p>
<p>Наша команда, вже допомогла не одному десятку військовослужбовців з даного питання.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Statusubd;
