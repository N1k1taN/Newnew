"use client";
import React from "react";
import "../../styles/App.css"
import "../../styles/about.css";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import { useEffect } from "react";
import Image from "next/image";


function Statusubd() {
  useEffect(() => {
    document.title = "Статус УБД";
  })
  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Отримання статусу УБД</h1>
        <Image
 src="/icons/ubd.webp"  
 alt="Статус УБД"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      />          <h3>Зокрема підставами отримання статусу учасника бойових дій є:</h3>
<p>-Перебування у зоні бойових дій </p>
<p>-Отримання поранення під час захисту Батьківщини</p>
<p>Статус учасника бойових дій дає змогу отримати соціальні пільги військовослужбовцям, навіть тим, які звільненні в запас та членам його сімей.</p>
<p>Наша команда, вже допомогла не одному десятку військовослужбовців з даного питання.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Statusubd;
