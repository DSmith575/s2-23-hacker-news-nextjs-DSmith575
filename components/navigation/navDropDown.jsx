import NavList from '@/components/navigation/navList.jsx';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavDropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div
        className={'text-grimace absolute top-0 left-0'}
        onClick={toggleMenu}>
        <GiHamburgerMenu size={50} />
        <div className={'z-50'} onClick={toggleMenu}>
          {menuOpen && <NavList />}
        </div>
      </div>
    </>
  );
};

export default NavDropDown;
