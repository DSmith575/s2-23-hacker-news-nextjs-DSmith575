/**
 * @file DropDown for navigation bar
 * @author Deacon Smith
 *
 * @component
 * @description Mobile view dropdown menu
 *
 * @param {Array} - Tuple containing menuOpen boolean & toggle function
 * @returns {JSX.Element} - Component for dropdown routing links
 * @param {GiHamburgerMenu} - Hamburger icon
 *
 * @created 27-08-2023
 * @updated 28-08-2023
 */

import NavList from '@/components/navigation/navList.jsx';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavButton from '@/components/navigation/navButton.jsx';

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
        <GiHamburgerMenu size={40} />
        <div className={'z-50'} onClick={toggleMenu}>
          {menuOpen && (
            <>
              <NavButton route={'/'} text={'Home'} color={'text-sky-400'} />
              <NavList />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavDropDown;
