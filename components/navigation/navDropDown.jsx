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
import { AiOutlineClose } from 'react-icons/ai';

const NavDropDown = () => {
  const [clicked, setClicked] = useState(false);

  const toggleDropDown = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <div className={'block md:hidden'}>
        {!clicked ? (
          <GiHamburgerMenu size={40} onClick={toggleDropDown} />
        ) : (
          <>
            <AiOutlineClose size={40} onClick={toggleDropDown} />
            <div className={'my-4'} onClick={toggleDropDown}>
              <NavList />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavDropDown;
