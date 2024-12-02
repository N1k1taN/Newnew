import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";
export const metadata = {
  title: "Військовий Адвокат - Оскарження Рішення ВЛК | Юридична Допомога",
  description: "NLAW Company надає допомогу у оскарженні рішень військово-лікарської комісії (ВЛК). Консультації, юридичний супровід, підтримка військових.",
  keywords: "військовий адвокат, оскарження рішення ВЛК, юридична допомога, військове право, NLAW Company, військово-лікарська комісія",
  robots: "index, follow",
  openGraph: {
    title: "Військовий Адвокат - Оскарження Рішення ВЛК | Юридична Допомога",
    description: "Юридична допомога військовослужбовцям у оскарженні рішень військово-лікарської комісії. Професійний супровід та консультації.",
    images: [
      {
        url: "/icons/vislav.webp",
        width: 500,
        height: 300,
        alt: "Оскарження рішення ВЛК"
      }
    ],
    type: "website",
    url: "https://nlawcompany.com/oskargenyavlk"
  },
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    icon16: "/favicon-16x16.png",
    icon32: "/favicon-32x32.png"
  }
};

function Oskargenyavlk() {

  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1 className="font-h1">ОСКАРЖЕННЯ РІШЕННЯ ВЛК</h1>
        <hr></hr>
        <h2 className="font-h5">РІШЕННЯ ВІЙСЬКОВО-ЛІКАРСЬКОЇ КОМІСІЇ ПІДЛЯГАЄ ОСКАРЖЕННЮ В НАСТУПНИХ ВИПАДКАХ:</h2>
<div className="about-main">
<div className="p-text-enb">
<p className="font-text-18px-regular">- Необ'єктивність лікарської комісії. </p>
<p className="font-text-18px-regular">- Порушення процедури проведення ВЛК.</p>
<p className="font-text-18px-regular">- Не вірне застосування законодавства військово
лікарською комісією.</p>
<p className="font-text-18px-regular">- Незаконне рішення ВЛК.</p>
<p className="font-text-18px-regular">- Помилковий причинний звʼязок захворювання (травми).</p>
<p className="font-text-18px-regular">- Не вірно вказана ступень тяжкості поранення.</p>
</div>
<div className="about-text">
  <div className="p-text-dis">
<p className="font-text-18px-regular">- Необ'єктивність лікарської комісії. </p>
<p className="font-text-18px-regular">- Порушення процедури проведення ВЛК.</p>
<p className="font-text-18px-regular">- Не вірне застосування законодавства військово
лікарською комісією.</p>
<p className="font-text-18px-regular">- Незаконне рішення ВЛК.</p>
<p className="font-text-18px-regular">- Помилковий причинний звʼязок захворювання (травми).</p>
<p className="font-text-18px-regular">- Не вірно вказана ступень тяжкості поранення.</p>
</div>
<p className="font-text-18px-regular textbeg">Не рідко військово - лікарська комісія упереджено та не обʼєктивно проводить огляд військового або військо-возобовʼязаного, внаслідок чого приймає незаконне рішення. Тому, в ході оскарження рішення ВЛК наша 
команда фахівців, яку очолює адвокат з медичного права, залучає лікарів, для написання максимально якісної заяви на перегляд рішення ВЛК.
</p>
<OpenMenuButton></OpenMenuButton>
</div>
<Image
 src="/icons/vislav.webp"  
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

export default Oskargenyavlk;
