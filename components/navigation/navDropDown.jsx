/**
 * @description Mobile view dropdown menu
 * @file navDropDown.jsx
 *
 * @author Deacon Smith
 *
 * @param {Array} NavDropDown - Tuple containing menuOpen boolean & toggle function
 * @param {Icon} GiHamburgerMenu - Hamburger icon
 * @param {Icon} AiOutLineHome - Home icon
 * @param {Icon} MdOutlineLeaderBoard - LeaderBoard icon
 * @param {Icon} AiOutlineClose - X icon
 *
 * @returns {JSX.Element} - Component for dropdown routing links
 *
 * @created 27-08-2023
 * @updated 09-09-2023
 */

import NavList from '@/components/navigation/navList.jsx';
import NavButton from '@/components/navigation/navButton.jsx';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineLeaderboard } from 'react-icons/md';

const NavDropDown = () => {
  const [clicked, setClicked] = useState(false);

  const toggleDropDown = () => {
    setClicked(!clicked);
  };
  return (
    <>
      {/* When in Desktop view, icons are hidden until md breakdown
    Will then display the Home/Leader/Dropdown icons
    */}
      <div className={'block md:hidden'}>
        <div className={'flex justify-between justify-items-center'}>
          <NavButton
            text={<AiOutlineHome size={40} title={'Icon-Home'} />}
            route={`/`}
          />

          <NavButton
            text={<MdOutlineLeaderboard size={40} title={'Icon-LeaderBoard'} />}
            route={`/leaders/top/`}
          />

          {/* If clicked is false, the hamburger icon will be displayed
else the X icon will be displayed and the dropdown will open the navLinks
to required stories
*/}
          {!clicked ? (
            <div className={'px-4 py-2'}>
              <GiHamburgerMenu
                title={'Icon-Hamburger'}
                size={40}
                onClick={toggleDropDown}
              />
            </div>
          ) : (
            <div className={'px-4 py-2'}>
              <AiOutlineClose
                title={'Icon-Cross'}
                size={40}
                onClick={toggleDropDown}
              />
            </div>
          )}
        </div>
        {/* If clicked is true, show the Drop down menu
      This also contains a toggleDropDown to close the navList when a route is clicked
      */}
        {clicked && (
          <div onClick={toggleDropDown}>
            <NavList isDropDown={true} />
          </div>
        )}
      </div>
    </>
  );
};

export default NavDropDown;
