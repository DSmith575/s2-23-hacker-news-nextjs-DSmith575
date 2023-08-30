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

const NavList = () => {
  return (
    <>
      <ul
        className={`bg-white  rounded ml-4 flex flex-col z-50 md:flex-row md:bg-inherit `}>
        <li>
          <NavButton
            route={'/story/askstories'}
            text={'Ask Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/story/beststories'}
            text={'Best Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/story/jobstories'}
            text={'Job Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/story/newstories'}
            text={'New Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/story/showstories'}
            text={'Show Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/story/topstories'}
            text={'Top Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
      </ul>
    </>
  );
};

export default NavList;
