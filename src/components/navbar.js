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

      </Link>
      <a href="/#help" className="linked men-sum" onClick={(e) => handleSmoothScroll(e, "/#help")}>ПОСЛУГИ</a>
      <a href="/#case" className="linked men-sum" onClick={(e) => handleSmoothScroll(e, "/#case")}>КЕЙСИ</a>
      <Link href="/onas" className="linked men-sum">
        ПРО НАС
      </Link>
      <a href="/#vidguk" className="linked men-sum" onClick={(e) => handleSmoothScroll(e, "/#vidguk")}>ВІДГУКИ</a>
      <a href="/#contate" className="linked men-sum" onClick={(e) => handleSmoothScroll(e, "/#contate")}>КОНТАКТИ</a>
      <p href="" className="linked d font-menu-tel">+380937452557</p>
      <Dropdown></Dropdown>
    </div>
  );
};

export default Navbar;