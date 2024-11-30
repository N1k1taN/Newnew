import React from "react";
import "../../styles/App.scss"
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";

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
        <h1 className="font-h1">Відстрочка від мобілізації</h1>
        <hr></hr>
        <h2 className="font-h2">Відстрочка від військової служби є правом особи, яка повинна його використати за наявністю законних підстав, зокрема:</h2>
<div className="about-main">
<div className="about-text">
<p className="font-text-18px-regular">-За сімейними обставинами </p>
<p className="font-text-18px-regular">-Наявністю інвалідності</p>
<p className="font-text-18px-regular">-Навчання у вищому закладі </p>
<p className="font-text-18px-regular textbeg">Ні для кого не секрет, що ТЦК та СП не завжди об&#39;єктивно оцінює законні підстави для надання відстрочки та намагається мобілізувати військовозобов&#39;язаного, навіть який подав заяву для отримання відстрочки.
</p>
<p className="font-text-18px-regular">Наша команда має досвід підходу до даного питання та його вирішення навіть у кризових ситуаціях.</p>
<OpenMenuButton></OpenMenuButton>
</div>
<Image
 src="/icons/vidstr.webp"  
 alt="Відстрочка від мобілізації"
  width={300}
  height={300}
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      /> 

</div>
      </div>
      </div>
    </div>
  );
}

export default Vidstrochka;