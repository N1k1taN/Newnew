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
          width={350}
          height={550}
          objectFit="contain"
          priority={true}
        />
      </Link>
      <a href="/#help" className="linked" onClick={(e) => handleSmoothScroll(e, "/#help")}>ПОСЛУГИ</a>
      <a href="/#case" className="linked" onClick={(e) => handleSmoothScroll(e, "/#case")}>КЕЙСИ</a>
      <Link href="/onas" className="linked">
        ПРО НАС
      </Link>
      <a href="/#vidguk" className="linked" onClick={(e) => handleSmoothScroll(e, "/#vidguk")}>ВІДГУКИ</a>
      <a href="/#contacts" className="linked" onClick={(e) => handleSmoothScroll(e, "/#contacts")}>КОНТАКТИ</a>
      <Dropdown></Dropdown>
    </div>
  );
};

export default Navbar;