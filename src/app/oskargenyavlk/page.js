import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
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
        <h1>Оскарження рішення ВЛК</h1>
        <Image
 src="/icons/vislav.webp"  
 alt="Оскарження рішення ВЛК"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      />  
        <h3>Рішення військово - лікарської комісії підлягає оскарженню в наступних випадках:</h3>
<p>-Необ&#39;єктивність лікарської комісії </p>
<p>-Порушення процедури проведення ВЛК</p>
<p>-Не вірне застосування законодавства військово - лікарською комісією </p>
<p>-Незаконне рішення ВЛК</p>
<p>-Помилковий причинний звʼязок захворювання (травми) </p>
<p>-Не вірно вказана ступень тяжкості поранення</p>
<p>Не рідко військово - лікарська комісія упереджено та не обʼєктивно проводить огляд військового або військовозобовʼязаного, внаслідок чого приймає незаконне рішення.</p>
<p>Тому, в ході оскарження рішення ВЛК наша команда фахівців, яку очолює адвокат з медичного права, залучає лікарів, для написання максимально якісної заяви на перегляд рішення ВЛК.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Oskargenyavlk;
