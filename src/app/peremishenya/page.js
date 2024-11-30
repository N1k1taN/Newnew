import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";

export const metadata = {
  title: "Переміщення Військовослужбовців | Військовий Адвокат",
  description: "Отримайте юридичну допомогу з питання переміщення військовослужбовців до іншої частини. NLAW Company надає консультації та супровід військовослужбовцям.",
  keywords: "переміщення військовослужбовців, юридична допомога, військовий адвокат, NLAW Company, військове право, рапорт на переміщення, бажаний підрозділ",
  robots: "index, follow",
  openGraph: {
    title: "Переміщення Військовослужбовців | Військовий Адвокат",
    description: "NLAW Company надає допомогу у питаннях переміщення військовослужбовців: юридичний супровід та консультації для військових, які прагнуть змінити місце служби.",
    images: [
      {
        url: "/icons/peremishenya.webp",
        width: 500,
        height: 300,
        alt: "Переміщення військовослужбовців"
      }
    ],
    type: "website",
    url: "https://nlawcompany.com/peremishenya"
  },
  icons: {
    icon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    icon16: "/favicon-16x16.png",
    icon32: "/favicon-32x32.png"
  }
};




function Vidstrochka() {

  return (
    
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Переміщення в іншу військову частину</h1>
  <Image
 src="/icons/peremishenya.webp"  
 alt="Відстрочка від мобілізації"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      />
<p>Порядок переміщення військовослужбовців до іншої військової частини передбачено та розгляд таких рапортів передбачено численними законодавчими актами України, у тому числі законами Верховної Ради, постановами Кабінету Міністрів, наказами Міністра Оборони. </p>
<p>Та не дивлячись про те, що існує мобільний застосунок для військовослужбовців Армія +, проблем в цьому питанні менше не стало.</p>
<p>Наша команда досвідчених юристів, яка вже мала численний досвід переміщення військовослужбовців не мало зможе розказати про всі підводні камені у цьому питанні та в деяких випадках допомогти потрапити у бажаний підрозділ.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Vidstrochka;