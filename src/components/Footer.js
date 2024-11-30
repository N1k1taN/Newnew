"use client";
import React from "react";



const Footer=()=> {    
return<div className="footer">
<div className="footer-info">
  <img src="/icons/logo.png"></img>
  <div className="contact">
  <h2 className="font-h2">Контакти</h2>
  <h3 className="font-h4"><img></img>+380937452557</h3>
  <h3 className="font-h4"><img></img>nlawcompany@gmail.com</h3>
  </div>
<div className="grafik">
<h2 className="font-h2">Графік</h2>
  <h3 className="font-h4">Пн-Пт     10:00 по 19:00</h3>
  <h3 className="font-h4">Сб-Нд     по домовленості</h3>
</div>
<div className="address">
  <h2 className="font-h2">Адреса</h2>
  <h3 className="font-h4">м. Київ, вул. Білоруська 30 
  (10 хвилин пішки від метро Лукʼянівська)</h3>
</div>
<div className="footer-socials">
  <h2 className="font-h2">Follow us</h2>
  <div className="socials">
    <a className="social"><img src="/icons/socials/tiktok.svg"></img></a>
    <a className="social"></a>
    <a className="social"></a>
    <a className="social"></a>
  </div>
</div>
</div>
<div className="footer-end">
  <h3 className="font-h3">© 2024 NLaw Company | Усі права захищено.   Код ЄДРПОУ:45432286</h3>
</div>
</div>
}
export default Footer