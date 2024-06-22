import { useEffect, useState } from 'react';

import menuOpen from '../assets/menuOpen.svg';
import menuClose from '../assets/menuClose.svg';
import NavbarLink from './NavbarLink';
import Logo from './Logo';

export default function Navbar() {
  const [isLarge, setIsLarge] = useState(false);

  const screenSize = window.innerWidth;

  useEffect(() => {
      screenSize >= 769 ? setIsLarge(false) : setIsLarge(true);
  }, [screenSize])




  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleClick() {
    setMenuIsOpen((prev) => !prev);
  }

  const menuStatus = menuIsOpen ? 'right-0' : 'right-[-500px] hidden';
  const menuLogo = menuIsOpen ? menuClose : menuOpen;

  return (
    <>
    <nav
      className={`relative flex justify-between items-center w-screen p-5 bg-[#F3EEEA] md:px-10`}
    >
      <Logo />
      <ul
        className={`${menuStatus} bg-swirl-200 fixed top-1 flex flex-col justify-center items-center w-full h-screen z-[1]`}
      >
        <NavbarLink name='Home' link='#home' onClick={handleClick} />
        <NavbarLink name='Services' link='#services' onClick={handleClick} />
        <NavbarLink name='Portfolio' link='#portfolio' onClick={handleClick} />
        <NavbarLink name='Contact Me' link='#contact' onClick={handleClick} />
      </ul>
      <button onClick={handleClick} className='fixed right-5 z-10 bg-[#f3eeea79] p-2 rounded-full'>
        <img src={menuLogo} alt='Menu logo' className='w-[40px]' />
      </button>
    </nav>
    </>
  );
}
