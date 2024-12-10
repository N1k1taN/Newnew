import React from "react";
import "../../styles/App.scss";
import "../../styles/about.scss";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
import { Comments } from "@/components/sliders";
import Messenger from "@/components/messenger";
export const metadata = {
  title: "Звільнення з військової служби | Військовий Адвокат",
  description: "Отримайте консультацію та допомогу щодо звільнення з військової служби. Підстави звільнення: сімейні обставини, стан здоров'я та інше.",
  keywords: "звільнення з військової служби, рапорт на звільнення, військове право, сімейні обставини, стан здоров'я",
  robots: "index, follow",
  openGraph: {
    title: "Звільнення з військової служби | Військовий Адвокат",
    description: "Допомога у звільненні з військової служби, навіть у складних ситуаціях. Консультації та юридичний супровід.",
    images: [
      {
        url: "/icons/zvilnenya.webp",
        width: 500,
        height: 300,
        alt: "Звільнення з війскової служби"
      }
    ],
    type: "website",
    url: "https://nlawcompany.com/zvilnenyasviskovoi"
  }
};

function Zvilnenyasviskovoi() {
  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1 className="font-h1">ЗВІЛЬНЕННЯ З ВІЙСЬКОВОЇ СЛУЖБИ</h1>
        <hr></hr>
        <h2 className="font-h4">РАПОРТ НА ЗВІЛЬНЕННЯ З ВІЙСЬКОВОЇ СЛУЖБИ ПОДАЄТЬСЯ ЗА НАЯВНІСТЮ НАСТУПНИХ ПІДСТАВ:</h2>
<div className="about-main">
<div className="p-text-enb">
<p className="font-text2">-За сімейними обставинами </p>
<p className="font-text2">- За станом здоров'я.</p>
</div>
<div className="about-text">
  <div className="p-text-dis">
<p className="font-text2">-За сімейними обставинами </p>
<p className="font-text2">- За станом здоров'я.</p>
</div>
<p className="font-text4 textbeg">Існують непоодинокі випадки, коли рапорт на звільнення 
з військової служби не розглядається, або військовий отримує незаконну відмову.
Наша команда має великий досвід супроводу звільнення 
з військової служби, навіть у дійсно важких ситуаціях.
</p>
<p className="font-text4">Наша команда має досвід підходу до даного питання та його вирішення навіть у кризових ситуаціях.</p>
<OpenMenuButton></OpenMenuButton>
</div>
<Image
 src="/icons/zvilnenyia.png"  
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

export default Zvilnenyasviskovoi;