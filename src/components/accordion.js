"use client"
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Accordions = () => {
  // Function to handle click
  const handleLinkClick = (url) => {
    // Always open the link in a new tab
    window.open(url, '_blank');
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="accorn"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <Accordion.Root className="AccordionRoot" type="multiple" collapsible="true">
        <Accordion.Item className="AccordionItem" value="item-1">
          <AccordionTrigger className="dirk">
            <div
              style={{ cursor: 'pointer' }}
              className='font-h3'
            >
              ВІДСТРОЧКА ВІД ПРИЗОВУ НА ВІЙСЬКОВУ СЛУЖБУ ПІД ЧАС МОБІЛІЗАЦІЇ
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Отримання відстрочки по догляду.</h2>
              <h2 className='font-h3'>- Отримання відстрочки по навчанню.</h2>
              <h2 className='font-h3'>- Отримання відстрочки по групі інвалідності.</h2>
              <h2 className='font-h3'>- Оскарження рішень ТЦК та СП.</h2>
              <h2 className='font-h3'>- Супровід адвоката до ТЦК та СП.</h2>
              <h2 className='font-h3'>- Оскарження штрафів ТЦК та СП.</h2>
              <h2 className='font-h3'>- Незаконна мобілізація.</h2>
              <a className='linkbutton font-h3'onClick={() => handleLinkClick('/vidstrochka')}>Детальніше</a>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger>
            <div
              style={{ cursor: 'pointer' }}
              className='font-h3'

            >
              ЗВІЛЬНЕННЯ З ВІЙСЬКОВОЇ СЛУЖБИ
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- За сімейними обставинами.</h2>
              <h2 className='font-h3'>- За станом здоров'я.</h2>
              <h2 className='font-h3'>- За необхідністю здійснення догляду за своїми батьками чи дружиною.</h2>
              <a className='linkbutton font-h3'              onClick={() => handleLinkClick('/zvilnenyasviskovoi')}
              >Детальніше</a>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger>
            <div
              style={{ cursor: 'pointer' }}
              className='font-h3'
            >
              ПРИЗНАЧЕННЯ АБО ОСКАРЖЕННЯ РІШЕННЯ ВІЙСЬКОВО-ЛІКАРСЬКОЇ КОМІСІЇ (ВЛК)
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Призначення ВЛК у зв'язку з погіршенням стану здоровʼя.</h2>
              <h2 className='font-h3'>- Оскарження ВЛК у зв'язку з не вірним висновком про ступень здоров’я до військової служби.</h2>
              <h2 className='font-h3'>- Оскарження ВЛК у зв'язку з не вірним причинним зв'язком травми, захворювання.</h2>
              <a className='linkbutton font-h3'              onClick={() => handleLinkClick('/oskargenyavlk')} >Детальніше</a>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-4">
          <AccordionTrigger>
            <div
                          className='font-h3'

              style={{ cursor: 'pointer' }}
            >
              ОТРИМАННЯ СТАТУСУ УЧАСНИКА БОЙОВИХ ДІЙ
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Витребування документів для призначення статусу УБД.</h2>
              <h2 className='font-h3'>- Подача заяви на комісію з питань призначення статусу учасника бойових дій.</h2>
              <a className='linkbutton font-h3'  onClick={() => handleLinkClick('/statusubd')} >Детальніше</a>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-5">
          <AccordionTrigger>
            <div
                          className='font-h3'
              style={{ cursor: 'pointer' }}
            >
              ПРИЗНАЧЕННЯ ВИПЛАТИ ВІЙСЬКОВОСЛУЖБОВЦЯМ ТА ЇХ СІМ'ЯМ
            </div>
          </AccordionTrigger >
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Призначення виплати додаткової винагороди за поранення.</h2>
              <h2 className='font-h3'>- Призначення бойових виплат.</h2>
              <h2 className='font-h3'>- Призначення одноразової грошової допомоги у зв'язку з отриманням групи інвалідності.</h2>
              <h2 className='font-h3'>- Призначення одноразової грошової допомоги у зв'язку із загибеллю військовослужбовця.</h2>
              <h2 className='font-h3'>- Призначення виплати сім'ям військовослужбовців, які перебувають у полоні або зниклі безвісти.</h2>
              <a className='linkbutton font-h3' onClick={() => handleLinkClick('/groshovezabez')}>Детальніше</a>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-6">
          <AccordionTrigger>
            <div               className='font-h3'
            >
              ОСКАРЖЕННЯ РІШЕНЬ КОМАНДУВАННЯ ВІЙСЬКОВОЇ ЧАСТИНИ
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Скарга на бездіяльність командування.</h2>
              <h2 className='font-h3'>- Скарга на ігнорування рапорту.</h2>
              <h2 className='font-h3'>- Скарга на незаконні дії чи рішення командирів.</h2>
              <h2 className='font-h3'>- Скарга на не переміщення військовослужбовця.</h2>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-7">
          <AccordionTrigger               className='font-h3'          >
            <div>
              СКЛАДАННЯ РАПОРТІВ
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Рапорт на звільнення.</h2>
              <h2 className='font-h3'>- Рапорт на присвоєння звання.</h2>
              <h2 className='font-h3'>- Рапорт на ВЛК.</h2>
              <h2 className='font-h3'>- Рапорт на переміщення.</h2>
              <h2 className='font-h3'>- Рапорт на лікування.</h2>
              <h2 className='font-h3'>- Рапорт на виплати.</h2>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-8">
          <AccordionTrigger>
            <div               className='font-h3'            >
              ЗАХИСТ АДВОКАТА У КРИМІНАЛЬНІЙ СПРАВІ
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Захист по не явці за повісткою.</h2>
              <h2 className='font-h3'>- Захист по самовільному залишенню військової частини.</h2>
              <h2 className='font-h3'>- Захист по невиконанню наказу.</h2>
            </div>
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-9">
          <AccordionTrigger>
            <div               className='font-h3'
            >
              ЗАХИСТ БІЗНЕСУ
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="AccordionContentText">
              <h2 className='font-h3'>- Супровід перевірок органами ДПС.</h2>
              <h2 className='font-h3'>- Супровід адвоката при перевірках ТЦК та СП.</h2>
              <h2 className='font-h3'>- Оскарження безпідставного відкриття кримінальних справ.</h2>
              <h2 className='font-h3'>- Супровід адвоката у кримінальних справах щодо економічних злочинів.</h2>
            </div>
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </motion.div>
  );
};

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
      asChild
    >
      <motion.div
        initial="collapsed"
        animate="open"
        whileHover="hover"
        whileTap="tap"
        variants={{
          collapsed: {  },
          open: {  },
          hover: { scale: 1.05 },
          tap: { scale: 0.95 },
        }}
      >
        {children}
      </motion.div>
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
    asChild
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = 'AccordionContent';

export default Accordions;
