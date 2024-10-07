"use client";
import React from "react";



const Footer=()=> {    
return<div className="footer">
<div className="contacts">
  <div className="contactinfo">
    <div>
      <div>
        <p>АДРЕСА</p>
        <p>м. Київ, вул. Білоруська 30 (10 хвилин пішки від метро Лукʼянівська)</p>
      </div>
      <div>
        <p>ГРАФІК</p>
        <p>10:00 по 19:00 ПН-ПТ</p>
        <p>ВИХІДНІ ПО ДОМОВЛЕННОСТІ</p>
      </div>
    </div>
    <div className="giv">
      <div>
        <p>ТЕЛЕФОН</p>
        <p>+380937452557</p>
      </div>
      <div>
        <p>EMAIL</p>
        <p>NLAWCOMPANY@GMAIL.COM</p>
      </div>
    </div>
    <div className="socials">
      <p>МИ В СОЦМЕРЕЖАХ</p>
      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=61566465502728" target="_blank" rel="noopener noreferrer"><img src="/icons/socials/facebook.svg" alt="facebook"></img></a>
        <a href="https://www.instagram.com/nlaw_company?igsh=cWs1MXg4a2poaW5u&utm_source=qr" target="_blank" rel="noopener noreferrer"><img src='/icons/socials/instagram.svg' alt="instagram"></img></a>
        <a href="https://www.tiktok.com/@nlaw.company?_t=8puk4R0nGdx&_r=1" target="_blank" rel="noopener noreferrer"><img src="/icons/socials/tiktok.svg" alt="tiktok"></img></a>
        <a href="http://www.youtube.com/@NLAW_COMPANY" target="_blank" rel="noopener noreferrer"><img src="/icons/socials/youtube-123.svg" alt="youtube"></img></a>
      </div>
    </div>
  </div>
  <div className="messengers" id="contacts">
    <a
      href="viber://chat?number=%2B380937452557"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('android')) {
          e.preventDefault();
          window.location.href = "intent://chat?number=%2B380937452557#Intent;scheme=viber;package=com.viber.voip;end";
        } else if (userAgent.includes('ios')) {
          window.location.href = "https://apps.apple.com/app/id382617920";
        } else {
          window.location.href = "https://www.viber.com/";
        }
      }}
    >
      <img src="/icons/messengers/Viber_icon_white.svg" alt="viber"></img>
    </a>
    <a href="https://signal.me/#eu/F8axajmr2fkdM4fu5Vl8yFJwj1W31Us0SMwc0h0axGvNA8Svn0NL-JkxLsnJBnCC" target="_blank" rel="noopener noreferrer"><img src='/icons/messengers/Signal-Logo-Ultramarine.svg' alt="signal"></img></a>
    <a href="https://t.me/Nlaw_company"><img src="/icons/messengers/teleg.svg" alt="telegram" target="_blank" rel="noopener noreferrer"></img></a>
    <a href="https://wa.me/message/X3PEXBN6BKQHF1" target="_blank" rel="noopener noreferrer"><img src='/icons/messengers/Digital_Glyph_White.svg' alt="whatsapp"></img></a>
  </div>
</div>
<div className="allrights">
  <p>© Усі права захищено.</p>
  <p>2024</p>
</div>
</div>
}
export default Footer