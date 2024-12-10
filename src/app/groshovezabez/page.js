import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";

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
        <h1 className="font-h1">ГРОШОВЕ ЗАБЕЗПЕЧЕННЯ ТА ДОДАТКОВА ВИНАГОРОДА</h1>
        <hr></hr>
        <h2 className="font-h4">ВІДПОВІДНО ДО ЧИННОГО ЗАКОНОДАВСТВА УКРАЇНИ, ВІЙСЬКОВОСЛУЖБОВЦІ ПОВИННІ МАТИ ДОСТАТНІЙ РІВЕНЬ ГРОШОВОГО ЗАБЕЗПЕЧЕННЯ, А У РАЗІ ВЕДЕННЯ ВІЙСЬКОВОГО СТАНУ МАЮТЬ ПРАВО НА ДОДАТКОВУ ВИНАГОРОДУ ЗА НАСТУПНИХ ПІДСТАВ:</h2>
<div className="about-main">
<div className="p-text-enb">
<p className="font-text2">- Перебування в зоні бойових дій (Бойові).</p>
<p className="font-text2">- Стаціонарне лікування внаслідок поранення у лікувальних закладах.</p>
<p className="font-text2">- Не вірне застосування законодавства військово - лікарською комісією.</p>
<p className="font-text2">- Перебування у відпустці за станом здоров’я.</p>
</div>
<div className="about-text">
  <div className="p-text-dis">
  <p className="font-text2">- Перебування в зоні бойових дій (Бойові).</p>
<p className="font-text2">- Стаціонарне лікування внаслідок поранення у лікувальних закладах.</p>
<p className="font-text2">- Не вірне застосування законодавства військово - лікарською комісією.</p>
<p className="font-text2">- Перебування у відпустці за станом здоров’я.</p>
</div>
<p className="font-text4 textbeg">Існують непоодинокі випадки, коли рапорт на звільнення 
з військової служби не розглядається, або військовий отримує незаконну відмову.
Наша команда має великий досвід супроводу звільнення 
з військової служби, навіть у дійсно важких ситуаціях.
</p>
<p className="font-text4">Нажаль не завжди фінансова частина нараховує всі відповідні виплати.
Наша команда має успішні кейси по вирішенню зазначеного питання, навіть у досудовому порядку.</p>
<OpenMenuButton></OpenMenuButton>
</div>
<Image
 src="/icons/grosh.png"  
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

export default Groshovezabez;
