
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import Accordions from "../components/accordion";
import '../styles/App.css';
import OpenMenuButton from "../components/callpage";
import Callpg from '../components/callpg';
import classNames from 'classnames';
import Image from 'next/image';
import { CaseResults,Comments } from '@/components/sliders';
import Steps from '@/components/steps';
import PanelRech from '@/components/ownerb';
import Head from 'next/head';
import '../styles/accordionanim.css';

export const metadata = {
  title: "ВІЙСЬКОВИЙ АДВОКАТ, ЮРИСТ ПО ВІЙСЬКОВИМ СПРАВАМ",
  description: "Одні з найкращих в Україні. Повний Юридичний супровід. ВЛК, звільнення. відстрочка,УБД, виплати,рапорт,СЗЧ,повістка,наказ.",
  keywords: "військовий адвокат, юридична допомога, відстрочка від мобілізації, оскарження рішень, NLAW Company, військове право, звільнення з військової служби",
  robots: "index, follow",
  openGraph: {
    title: "ВІЙСЬКОВИЙ АДВОКАТ, ЮРИСТ ПО ВІЙСЬКОВИМ СПРАВАМ",
    description: "Юридична допомога військовослужбовцям по всій Україні: відстрочка від мобілізації, звільнення з військової служби, оскарження рішень.",
    images: [
      {
        url: "/icons/logo.webp",
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

function Homepage() {

  return (
    <div>


      <Callpg />
      <div className="mainpage" id="home">
        <div className="info">
          <h1>ВІЙСЬКОВИЙ АДВОКАТ</h1>
          <h2>ОДНІ З НАЙКРАЩИХ У ВИРІШЕННІ ЮРИДИЧНИХ ПИТАНЬ З ВІЙСЬКОВОГО ПРАВА</h2>
          <h2>ПРАЦЮЄМО ПО ВСІЙ УКРАЇНІ</h2>
          <OpenMenuButton />
        </div>
      </div>

      <div className="main">
        <div className="help" id="help">
          <h2>ПРОФЕСІЙНО НАДАЄМО ПОСЛУГИ:</h2>
          <Accordions />
        </div>
      <Steps></Steps> 
        <div className="consulting" id="about">
          <h3 className="bods">
            <Image
              src="/icons/logo.webp"
              alt="ЛОГО"
              width={500}
              height={300}
              layout="responsive" // делает изображение адаптивным
            />
          </h3>
     </div>
     <PanelRech></PanelRech>
<CaseResults></CaseResults>
<Comments></Comments>
      </div>
    </div>
  );
}

export default Homepage;