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

const NavDropDown = () => {
  const [clicked, setClicked] = useState(false);

  const toggleDropDown = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div class={'block md:hidden'} onClick={toggleDropDown}>
        <GiHamburgerMenu size={40} />
        {clicked && (
          <div className={'my-4'}>
            <NavList />
          </div>
        )}
      </div>
    </>
  );
};

export default NavDropDown;
