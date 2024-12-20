
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import Accordions from "../components/accordion";
import '../styles/App.scss';
import OpenMenuButton from "../components/callpage";
import Callpg from '../components/callpg';
import classNames from 'classnames';
import Image from 'next/image';
import { CaseResults,Comments } from '@/components/sliders';
import Steps from '@/components/steps';
import PanelRech from '@/components/ownerb';
import '../styles/accordionanim.scss';
import "../styles/variables.scss"
import Messenger from '@/components/messenger';
import ConsultationForm from '@/components/consulting';


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
          <h1 className='font-h1'>ВІЙСЬКОВИЙ АДВОКАТ</h1>
          <h2 className='font-h2 mobile-enable'>НАЙКРАЩІ у ВИРІШЕННІ ЮРИДИЧНИХ ПИТАНЬ З ВІЙСЬКОВОГО ПРАВА</h2>
          <h2 className='font-h2 mobile-disable'>ОДНІ З НАЙКРАЩИХ У ВИРІШЕННІ ЮРИДИЧНИХ ПИТАНЬ З ВІЙСЬКОВОГО ПРАВА</h2>
          <h2 className='font-foinfo mobile-enable'>ЗАХИЩАЄМО ВАШІ ПРАВА ПО ВСІЙ УКРАЇНІ</h2>
          <h2 className='font-h2 mobile-disable'>ПРАЦЮЄМО ПО ВСІЙ УКРАЇНІ</h2>
          <OpenMenuButton />
        </div>

        <div className='achievment'>
<div className='achiv'>
  <p className='font-numbers pnumber'>2000+</p>
  <p className='font-text1'>консультацій проведених нашими спеціалістами 
  по всій Україні.</p>
</div>
<div className='achiv'>
<p className='font-numbers pnumber'>7+</p>
  <p className='font-text1'>років практичного досвіду вирішення юридичних питань.</p>
</div>
<div className='achiv'>
<p className='font-numbers pnumber'>400+</p>
  <p className='font-text1'>проведено більше 400 справ клієнтів.</p>
</div>
</div>
      </div>

      <div className="main">
      
        <div className="help" id="help">
          <h2 className='font-h3'>НАШІ ПОСЛУГИ</h2>
          <Accordions />
        </div>
        <PanelRech></PanelRech>
      <Steps></Steps> 
      <Messenger></Messenger>
<CaseResults></CaseResults>
<Comments></Comments>
<ConsultationForm></ConsultationForm>
      </div>
    </div>
  );
}

export default Homepage;