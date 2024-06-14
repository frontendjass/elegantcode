import { useState } from "react";

import menuOpen from '../assets/menuOpen.svg';
import menuClose from '../assets/menuClose.svg';
import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

export default function Navbar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function handleClick() {
        setMenuIsOpen(prev => !prev)
    }

    const menuStatus = menuIsOpen ? '' : 'hidden';
    const menuLogo = menuIsOpen ? menuClose : menuOpen;

    return (
        <nav className={`relative flex justify-between items-center w-screen p-5`}>
            <Logo />
            <ul className={`${menuStatus} absolute top-1 flex flex-col justify-center items-center w-full h-screen z-[-1]`}>
                <NavbarLink name='About' link='#'/>
                <NavbarLink name='Services' link='#'/>
                <NavbarLink name='Portfolio' link='#'/>
                <NavbarLink name='Contact Me' link='#'/>
            </ul>
            <button onClick={handleClick}><img src={menuLogo} alt="Menu logo" className="w-[40px]"/></button>
        </nav>
    )
}