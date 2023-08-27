/**
 * @file Navbar List
 * @author Deacon Smith
 *
 * @component
 * @description UL list containing NavButton components for the navbar component
 *
 * @param {Array} - Tuple containing menuOpen boolean & toggle function
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
        className={`bg-white md:bg-inherit rounded ml-4 flex flex-col z-50 md:flex-row`}>
        <li>
          <NavButton
            route={'askStories'}
            text={'Ask Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/bestStories'}
            text={'Best Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/jobStories'}
            text={'Job Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/newStories'}
            text={'New Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/showStories'}
            text={'Show Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/topStories'}
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
