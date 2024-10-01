import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';


const Accordions = () => {
  // Function to handle click
  const handleLinkClick = (url) => {
    // Always open the link in a new tab
    window.open(url, '_blank');
  };

  return (
    <Accordion.Root className="AccordionRoot" type="single" Value="item-1" collapsible>
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger>
          <div
            onClick={() => handleLinkClick('/vidstrochka')}
            style={{ cursor: 'pointer' }}
          >
            ВІДСТРОЧКА ВІД ПРИЗОВУ НА ВІЙСКОВУ СЛУЖБУ ПІД ЧАС МОБІЛЗАЦІЇ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <h2>- Отримання відстрочки по догляду.</h2>
          <h2>- Отримання відстрочки по навчанню.</h2>
          <h2>- Отримання відстрочки по групі інвалідності. </h2>
          <h2>- Оскарження рішень ТЦК та СП.</h2>
          <h2>- Супровід адвоката до ТЦК та СП.</h2>
          <h2>- Оскарження штрафів ТЦК та СП.</h2>
          <h2>- Незаконна мобілізація.</h2>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-2">
        <AccordionTrigger>
          <div
            onClick={() => handleLinkClick('/zvilnenyasviskovoi')}
            style={{ cursor: 'pointer' }}
          >
            ЗВІЛЬНЕННЯ З ВІЙСЬКОВОЇ СЛУЖБИ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <h2>- За сімейними обставинами.</h2>
          <h2>- За станом здоровʼя.</h2>
          <h2>- За необхідністю здійснення догляду за своїми батьками чи дружиною.</h2>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-3">
        <AccordionTrigger>
          <div
            onClick={() => handleLinkClick('/oskargenyavlk')}
            style={{ cursor: 'pointer' }}
          >
            ПРИЗНАЧЕННЯ АБО ОСКАРЖЕННЯ РІШЕННЯ ВІЙСЬКОВО-ЛІКАРСЬКОЇ КОМІСІЇ (ВЛК)
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            <h2>- Призначення ВЛК у звʼязку з погіршенням стану здоровʼя.</h2>
            <h2>- Оскарження ВЛК у звʼязку з не вірним висновком про ступень здоров’я до військової служби.</h2>
            <h2>- Оскарження ВЛК у звʼязку з не вірним причинним звʼязком травми, захворювання.</h2>
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-4">
        <AccordionTrigger>
          <div
            onClick={() => handleLinkClick('/statusubd')}
            style={{ cursor: 'pointer' }}
          >
            ОТРИМАННЯ СТАТУСУ УЧАСНИКА БОЙОВИХ ДІЙ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            <h2>- Витребування документів для призначення статусу УБД.</h2>
            <h2>- Подача заяви на комісію з питань призначення статусу учасника бойових дій.</h2>
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-5">
        <AccordionTrigger>
          <div
            onClick={() => handleLinkClick('/groshovezabez')}
            style={{ cursor: 'pointer' }}
          >
            ПРИЗНАЧЕННЯ ВИПЛАТИ ВІЙСЬКОВОСЛУЖБОВЦЯМ ТА ЇХ СІМ'ЯМ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            <h2>- Призначення виплати додаткової винагороди за поранення.</h2>
            <h2>- Призначення бойових виплат.</h2>
            <h2>- Призначення одноразової грошової допомоги у звʼязку з отриманням групи інвалідності.</h2>
            <h2>- Призначення одноразової грошової допомоги у звʼязку із загибеллю військовослужбовця.</h2>
            <h2>- Призначення виплати сім’ям військовослужбовців, які перебувають у полоні або зниклі безвісти.</h2>
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-6">
        <AccordionTrigger>
          <div>
            ОСКАРЖЕННЯ РІШЕНЬ КОМАНДУВАННЯ ВІЙСЬКОВОЇ ЧАСТИНИ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            <h2>- Скарга на бездіяльність командування.</h2>
            <h2>- Скарга на ігнорування рапорту.</h2>
            <h2>- Скарга на незаконні дії чи рішення командирів.</h2>
            <h2>- Скарга на не переміщення військовослужбовця.</h2>
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-7">
        <AccordionTrigger>
          <div>
            СКЛАДАННЯ РАПОРТІВ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            <h2>- Рапорт на звільнення.</h2>
            <h2>- Рапорт на присвоєння звання.</h2>
            <h2>- Рапорт на ВЛК.</h2>
            <h2>- Рапорт на переміщення.</h2>
            <h2>- Рапорт на лікування.</h2>
            <h2>- Рапорт на виплати.</h2>
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-8">
        <AccordionTrigger>
          <div>
            ЗАХИСТ АДВОКАТА У КРИМІНАЛЬНІЙ СПРАВІ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            <h2>- Захист по не явці за повісткою.</h2>
            <h2>- Захист по самовільному залишенню військової частини.</h2>
            <h2>- Захист по невиконанню наказу.</h2>
          </div>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className="AccordionItem" value="item-9">
        <AccordionTrigger>
          <div>
            ЗАХИСТ БІЗНЕСУ
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="AccordionContentText">
            <h2>- Супровід перевірок органами ДПС.</h2>
            <h2>- Супровід адвоката при перевірках ТЦК та СП.</h2>
            <h2>- Оскарження безпідставного відкриття кримінальних справ.</h2>
            <h2>- Супровід адвоката у кримінальних справах щодо економічних злочинів.</h2>
          </div>
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

export default Accordions;
