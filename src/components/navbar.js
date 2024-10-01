import React from "react";
import Link from "next/link";
import Dropdown from "./dropdown";

const Navbar=()=> {    
return <div className="navbar">
    <Link href="/#home" className="logoname">
        <img src="/icons/logo.png" alt="logo"></img>
    </Link>
    <Link href="/#help" className="linked">ПОСЛУГИ</Link>
    <Link href="/#about" className="linked">ПРО НАС</Link>
    <Link href="/#vidguk" className="linked">ВІДГУКИ</Link>
    <Link href="/#case" className="linked">КЕЙСИ</Link>
    <Link href="/#contacts" className="linked">КОНТАКТИ</Link>
    <Dropdown></Dropdown>
        </div>
}
export default Navbar