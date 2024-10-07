import React from "react";
import Link from "next/link";
import Dropdown from "./dropdown";
import Image from "next/image";

const Navbar=()=> {    
return <div className="navbar">
    <Link href="/#home" className="logoname">
        <Image src="/icons/logo.png" alt="logo"
                    width={350}
                    height={550}
                    objectFit='contain'
                    priority={true}   />
    </Link>
    <Link href="/#help" className="linked">ПОСЛУГИ</Link>
    <Link href="/#case" className="linked">КЕЙСИ</Link>
    <Link href="/onas" className="linked">ПРО НАС</Link>
    <Link href="/#vidguk" className="linked">ВІДГУКИ</Link>
    <Link href="/#contacts" className="linked">КОНТАКТИ</Link>
    <Dropdown></Dropdown>
        </div>
}
export default Navbar