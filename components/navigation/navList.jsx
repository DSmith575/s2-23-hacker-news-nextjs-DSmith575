/**
 * @description List containing NavButton components for the navbar component
 * @file navList.jsx
 *
 * @author Deacon Smith
 *
 * @returns {JSX.Element} - Component for dropdown routing links
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import NavButton from '@/components/navigation/navButton.jsx';
import { ROUTES } from '@/data/routes.js';

const NavList = ({ isDropDown }) => {
  return (
    <>
      <ul
        className={`bg-slate-200 rounded-md ring mx-4 flex flex-col z-50 md:flex-row md:bg-inherit text-center`}>
        {/* If prop passed through is true, slice the first 2 from the route, otherwise map the full list
          this is purely for assignment sake of only displaying stories in the drop down
          */}
        {isDropDown
          ? ROUTES.slice(2).map((route) => (
              <li key={route.route}>
                <NavButton
                  route={route.route}
                  text={route.text}
                  color={route.color}
                  hover={route.hover}
                />
              </li>
            ))
          : ROUTES.map((route) => (
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
