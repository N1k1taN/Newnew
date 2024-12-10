import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";

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
            <h1 className="font-h1">ПЕРЕМІЩЕННЯ В ІНШУ ВІЙСЬКОВУ ЧАСТИНУ</h1>
            <hr></hr>
            <h2 className="font-h4">ПОРЯДОК ПЕРЕМІЩЕННЯ ВІЙСЬКОВОСЛУЖБОВЦІВ ДО ІНШОЇ ВІЙСЬКОВОЇ ЧАСТИНИ ПЕРЕДБАЧЕНО ТА РОЗГЛЯД ТАКИХ РАПОРТІВ ПЕРЕДБАЧЕНО:</h2>
    <div className="about-main">
    <div className="p-text-enb">
    <p className="font-text2">- Численними законодавчими актами України, у тому числі законами Верховної Ради, постановами Кабінету Міністрів, наказами Міністра Оборони. </p>
    </div>
    <div className="about-text">
      <div className="p-text-dis">
    <p className="font-text2">- Численними законодавчими актами України, у тому числі законами Верховної Ради, постановами Кабінету Міністрів, наказами Міністра Оборони.</p>
    </div>
    <p className="font-text4 textbeg">Та не дивлячись про те, що існує мобільний застосунок для військовослужбовців Армія +, проблем в цьому питанні менше не стало.
    Наша команда досвідчених юристів, яка вже мала численний досвід переміщення військовослужбовців не мало зможе розказати про всі підводні камені у цьому питанні та в деяких випадках допомогти потрапити у бажаний підрозділ.
    </p>
    <OpenMenuButton></OpenMenuButton>
    </div>
    <Image
     src="/icons/peremishenya.webp"  
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

export default Vidstrochka;