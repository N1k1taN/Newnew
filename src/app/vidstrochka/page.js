"use client";
import React from "react";
import "../../styles/App.css"
import "../../styles/about.css";
import OpenMenuButton from "../../components/callpage";
import Callpg from "../../components/callpg";
import { useEffect } from "react";
import Image from "next/image";

function Vidstrochka() {
  useEffect(() => {
    document.title = "Відстрочка";
  })
  return (
    <div>
<Callpg></Callpg>
      <div className="alde">
      <div className="about">
        <h1>Відстрочка від мобілізації</h1>
  <Image
 src="/icons/vidstr.webp"  
 alt="Відстрочка від мобілізації"
  width={500}
  height={300}
  layout="responsive"  // делает изображение адаптивным
  priority={true}      // указывает, что изображение должно загружаться с высоким приоритетом

      /> <h3>Відстрочка від військової служби є правом особи, яка повинна його використати за наявністю законних підстав, зокрема:</h3>
<p>-За сімейними обставинами </p>
<p>-Наявністю інвалідності</p>
<p>-Навчання у вищому закладі </p>
<p>Ні для кого не секрет, що ТЦК та СП не завжди об&#39;єктивно оцінює законні підстави для надання відстрочки та намагається мобілізувати військовозобов&#39;язаного, навіть який подав заяву для отримання відстрочки.
</p>
<p>Наша команда має досвід підходу до даного питання та його вирішення навіть у кризових ситуаціях.</p>
<OpenMenuButton></OpenMenuButton>
      </div>
      </div>
    </div>
  );
}

export default Vidstrochka;