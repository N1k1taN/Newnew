import React from "react";
import "../../styles/App.css"
import "../../styles/about.css";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";

export const metadata = {
  title: "Військовий Адвокат - Грошове Забезпечення та Додаткова Винагорода | Юридична Допомога",
  description: "NLAW Company надає допомогу військовослужбовцям у питаннях грошового забезпечення та додаткової винагороди. Консультації, юридичний супровід та вирішення питань, навіть у досудовому порядку.",
  keywords: "військовий адвокат, грошове забезпечення, додаткова винагорода, юридична допомога, військове право, NLAW Company",
  robots: "index, follow",
  openGraph: {
    title: "Військовий Адвокат - Грошове Забезпечення та Додаткова Винагорода | Юридична Допомога",
    description: "Юридична допомога військовослужбовцям щодо грошового забезпечення та додаткових виплат. Професійний супровід та консультації для вирішення фінансових питань.",
    images: [
      {
        url: "/icons/grosh.webp",
        width: 500,
        height: 300,
        alt: "Грошове забезпечення"
      }
    ],
    type: "website",
    url: "https://nlawcompany.com/groshovezabez"
  },
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    icon16: "/favicon-16x16.png",
    icon32: "/favicon-32x32.png"
  }
};


function Groshovezabez() {

  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Грошове забезпечення та додаткова винагорода</h1>
        <Image
 src="/icons/grosh.webp"  
 alt="Грошове забезпечення"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      />        <p>Відповідно до чинного законодавства України, 
            військовослужбовці повинні мати достатній рівень грошового забезпечення, а у разі ведення військового стану мають право на додаткову винагороду за наступних підстав: </p>
<p>-Перебування в зоні бойових дій (Бойові) </p>
<p>-Стаціонарне лікування внаслідок поранення у лікувальних закладах</p>
<p>-Не вірне застосування законодавства військово - лікарською комісією </p>
<p>-Перебування у відпустці за станом здоров’я</p>
<p>Нажаль не завжди фінансова частина нараховує всі відповідні виплати.</p>
<p>Наша команда має успішні кейси по вирішенню зазначеного питання, навіть у досудовому порядку</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Groshovezabez;
