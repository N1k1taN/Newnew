"use client";
import React from "react";
import "../../styles/App.css"
import "../../styles/about.css";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import { useEffect } from "react";
import Image from "next/image";

function Oskargenyavlk() {
  useEffect(() => {
    document.title = "Оскарження ВЛК";
  })
  return (
    <div>
        <Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Оскарження рішення ВЛК</h1>
        <Image
 src="/icons/vislav.webp"  
 alt="Оскарження рішення ВЛК"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      />  
        <h3>Рішення військово - лікарської комісії підлягає оскарженню в наступних випадках:</h3>
<p>-Необ&#39;єктивність лікарської комісії </p>
<p>-Порушення процедури проведення ВЛК</p>
<p>-Не вірне застосування законодавства військово - лікарською комісією </p>
<p>-Незаконне рішення ВЛК</p>
<p>-Помилковий причинний звʼязок захворювання (травми) </p>
<p>-Не вірно вказана ступень тяжкості поранення</p>
<p>Не рідко військово - лікарська комісія упереджено та не обʼєктивно проводить огляд військового або військовозобовʼязаного, внаслідок чого приймає незаконне рішення.</p>
<p>Тому, в ході оскарження рішення ВЛК наша команда фахівців, яку очолює адвокат з медичного права, залучає лікарів, для написання максимально якісної заяви на перегляд рішення ВЛК.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Oskargenyavlk;
