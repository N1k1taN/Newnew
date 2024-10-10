import React from "react";
import "../../styles/App.css"
import "../../styles/about.css";
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
        <h1>Відстрочка від мобілізації</h1>
  <Image
 src="/icons/vidstr.webp"  
 alt="Відстрочка від мобілізації"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      /> <h3>Відстрочка від військової служби є правом особи, яка повинна його використати за наявністю законних підстав, зокрема:</h3>
<p>-За сімейними обставинами </p>
<p>-Наявністю інвалідності</p>
<p>-Навчання у вищому закладі </p>
<p>Ні для кого не секрет, що ТЦК та СП не завжди об&#39;єктивно оцінює законні підстави для надання відстрочки та намагається мобілізувати військовозобов&#39;язаного, навіть який подав заяву для отримання відстрочки.
</p>
<p>Наша команда має досвід підходу до даного питання та його вирішення навіть у кризових ситуаціях.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Vidstrochka;