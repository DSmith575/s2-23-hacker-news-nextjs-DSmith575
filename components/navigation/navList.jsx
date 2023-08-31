/**
 * @file Navbar List
 * @author Deacon Smith
 *
 * @component
 * @description List containing NavButton components for the navbar component
 *
 * @param {Array} - Tuple containing menuOpen boolean & toggle function
 * @param {ul/lu} - un-ordered list containing navButton links
 * @returns {JSX.Element} - Component for dropdown routing links
 *
 * @created 27-08-2023
 * @updated 28-08-2023
 */

import NavButton from '@/components/navigation/navButton.jsx';
import { ROUTES } from '@/data/routes.js';

const NavList = () => {
  return (
    <>
      <ul
        className={`bg-slate-200 rounded-md ring mx-4 flex flex-col z-50 md:flex-row md:bg-inherit text-center`}>
        {ROUTES.map((route) => (
          <li key={route.route}>
            <NavButton
              route={route.route}
              text={route.text}
              color={route.color}
              hover={route.hover}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavList;
