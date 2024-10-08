
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import Accordions from "../components/accordion";
import '../styles/App.css';
import OpenMenuButton from "../components/callpage";
import Callpg from '../components/callpg';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import { CaseResults,Comments } from '@/components/sliders';
import Steps from '@/components/steps';
import PanelRech from '@/components/ownerb';


function Homepage() {

  return (
    <div>
<Head>
  <title>Військовий Адвокат - Юридична Допомога у Вирішенні Питань з Військового Права</title>
  <meta name="description" content="Військовий адвокат NLAW Company надає професійну юридичну допомогу по всій Україні. Вирішення питань з мобілізації, військової служби, оскарження рішень та інші юридичні послуги." />
  <meta name="keywords" content="військовий адвокат, юридична допомога військовослужбовцям, відстрочка від мобілізації, NLAW Company, оскарження рішень, юридична підтримка, звільнення з військової служби" />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta property="og:title" content="Військовий Адвокат - Юридична Допомога у Вирішенні Питань з Військового Права" />
  <meta property="og:description" content="Юридична допомога військовослужбовцям по всій Україні. Відстрочка від мобілізації, звільнення з військової служби, оскарження рішень та інші послуги." />
  <meta property="og:image" content="/icons/logo.png" />
  <meta property="og:url" content="https://вашсайт.com" />
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</Head>

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
              src="/icons/logo.png"
              alt="Грошове забезпечення"
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