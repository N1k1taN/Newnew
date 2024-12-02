import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";''
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";

export const metadata = {
  title: "Військовий Адвокат - Відстрочка від Мобілізації | Юридична Допомога",
  description: "NLAW Company надає професійну юридичну допомогу військовослужбовцям по всій Україні. Відстрочка від мобілізації, оскарження рішень, звільнення з військової служби та інші послуги.",
  keywords: "військовий адвокат, юридична допомога, відстрочка від мобілізації, оскарження рішень, NLAW Company, військове право, звільнення з військової служби",
  robots: "index, follow",
  openGraph: {
    title: "Військовий Адвокат - Відстрочка від Мобілізації | Юридична Допомога",
    description: "Юридична допомога військовослужбовцям по всій Україні: відстрочка від мобілізації, звільнення з військової служби, оскарження рішень.",
    images: [
      {
        url: "/icons/logo.png",
        width: 500,
        height: 300,
        alt: "Військовий Адвокат"
      }
    ],
    type: "website",
    url: "https://nlawcompany.com"
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
        <h1 className="font-h1">ВІДСТРОЧКА ВІД МОБІЛІЗАЦІЇ</h1>
        <hr></hr>
        <h2 className="font-h5">ВІДСТРОЧКА ВІД ВІЙСОВОЇ СЛУЖБИ Є ПРАВОМ ОСОБИ, ЯКА ПОВИННА ЙОГО ВИКОРИСТАТИ ЗА НАЯВНІСТЮ ПІДСТАВ, ЗОКРЕМА:</h2>
<div className="about-main">
<div className="p-text-enb">
<p className="font-text-18px-regular">-За сімейними обставинами </p>
<p className="font-text-18px-regular">-Наявністю інвалідності</p>
<p className="font-text-18px-regular">-Навчання у вищому закладі </p>
</div>
<div className="about-text">
  <div className="p-text-dis">
<p className="font-text-18px-regular">-За сімейними обставинами </p>
<p className="font-text-18px-regular">-Наявністю інвалідності</p>
<p className="font-text-18px-regular">-Навчання у вищому закладі </p>
</div>
<p className="font-text-18px-regular textbeg">Ні для кого не секрет, що ТЦК та СП не завжди об&#39;єктивно оцінює законні підстави для надання відстрочки та намагається мобілізувати військовозобов&#39;язаного, навіть який подав заяву для отримання відстрочки.
</p>
<p className="font-text-18px-regular">Наша команда має досвід підходу до даного питання та його вирішення навіть у кризових ситуаціях.</p>
<OpenMenuButton></OpenMenuButton>
</div>
<Image
 src="/icons/vidstr.png"  
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