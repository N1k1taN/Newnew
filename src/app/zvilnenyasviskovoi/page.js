import React from "react";
import Head from 'next/head';
import "../../styles/App.css";
import "../../styles/about.css";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import Image from "next/image";
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
          <h1>Звільнення з військової служби</h1>
          <Image
            src="/icons/zvilnenya.webp"
            alt="Звільнення з війскової служби"
            width={500}
            height={300}
            layout="responsive"
            priority={true}
          />
          <h3>Рапорт на звільнення з військової служби подається за наявністю наступних підстав:</h3>
          <p>-За сімейними обставинами</p>
          <p>-За станом здоров&#39;я</p>
          <p>Існують непоодинокі випадки, коли рапорт на звільнення з військової служби не розглядається, або військовий отримує незаконну відмову.</p>
          <p>Наша команда має великий досвід супроводу звільнення з військової служби, навіть у дійсно важких ситуаціях.</p>
          <OpenMenuButton></OpenMenuButton>
        </div>
      </div>
    </div>
  );
}

export default Zvilnenyasviskovoi;