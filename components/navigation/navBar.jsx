/**
 * @description Navigation bar for handling routing buttons
 * @file navBar.jsx
 *
 * @author Deacon Smith
 *
 * @returns {JSX.Element} - Component for navigation
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import withNoSsr from '@/components/hooks/ssr/ssrWrapper.jsx';
import NavButton from '@/components/navigation/navButton.jsx';
import NavList from '@/components/navigation/navList.jsx';
import NavDropDown from '@/components/navigation/navDropDown.jsx';

const NavBar = () => {
  return (
    <>
      <nav className={'px-2 py-2 block'}>
        <div className={'visible sm:visible md:invisible'}>
          <NavDropDown />
        </div>
        <div
          className={
            'hidden md:flex sm:justify-start md:justify-center xl:justify-between'
          }>
          <div className={'hidden sm:hidden md:hidden lg:hidden xl:block'}>
            <NavButton
              route={'/'}
              text={'Hacker News'}
              color={'text-fontColBlack'}
              hover={false}
            />
          </div>
          <div className={'invisible sm:invisible md:visible'}>
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
};

export default withNoSsr(NavBar);
