"use client";
import React from "react";
import "../../styles/App.css"
import "../../styles/about.css";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import { useEffect } from "react";
import Image from "next/image";

function Groshovezabez() {
  useEffect(() => {
    document.title = "Грошовове забезспечення";
  })
  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Грошове забезпечення та додаткова винагорода</h1>
        <Image
 src="/icons/grosh.webp"  
 alt="Грошове забезпечення"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      />        <p>Відповідно до чинного законодавства України, 
            військовослужбовці повинні мати достатній рівень грошового забезпечення, а у разі ведення військового стану мають право на додаткову винагороду за наступних підстав: </p>
<p>-Перебування в зоні бойових дій (Бойові) </p>
<p>-Стаціонарне лікування внаслідок поранення у лікувальних закладах</p>
<p>-Не вірне застосування законодавства військово - лікарською комісією </p>
<p>-Перебування у відпустці за станом здоров’я</p>
<p>Нажаль не завжди фінансова частина нараховує всі відповідні виплати.</p>
<p>Наша команда має успішні кейси по вирішенню зазначеного питання, навіть у досудовому порядку</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Groshovezabez;
