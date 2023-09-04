/**
 * @description Mobile view dropdown menu
 * @file navDropDown.jsx
 * 
 * @author Deacon Smith
 *
 * @param {Array} NavDropDown - Tuple containing menuOpen boolean & toggle function
 * @param {Icon} GiHamburgerMenu - Hamburger icon
 * @param {Icon} AiOutlineClose - X icon
 * 
 * @returns {JSX.Element} - Component for dropdown routing links
 *
 * @created 27-08-2023
 * @updated 04-09-2023
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
