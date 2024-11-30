"use client"
import React from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import Image from "next/image";

const Navbar = () => {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.split("#")[1];
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: "smooth",
      });
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="navbar">
      <Link href="/#home" className="logoname">
        <Image
          src="/icons/logo.png"
          alt="logo"
          width={170}
          height={63}
          objectFit="contain"
        />
      </Link>
      <a href="/#help" className="linked font-menu" onClick={(e) => handleSmoothScroll(e, "/#help")}>ПОСЛУГИ</a>
      <a href="/#case" className="linked font-menu" onClick={(e) => handleSmoothScroll(e, "/#case")}>КЕЙСИ</a>
      <Link href="/onas" className="linked font-menu">
        ПРО НАС
      </Link>
      <a href="/#vidguk" className="linked font-menu" onClick={(e) => handleSmoothScroll(e, "/#vidguk")}>ВІДГУКИ</a>
      <a href="/#contacts" className="linked font-menu" onClick={(e) => handleSmoothScroll(e, "/#contacts")}>КОНТАКТИ</a>
      <a href="" className="linked font-numbers">+380506598496</a>
      <Dropdown></Dropdown>
    </div>
  );
};

export default Navbar;