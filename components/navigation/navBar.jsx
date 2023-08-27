import withNoSsr from '@/components/hooks/ssr/ssrWrapper.jsx';
import NavButton from '@/components/navigation/navButton.jsx';
import NavList from '@/components/navigation/navList.jsx';
import NavDropDown from '@/components/navigation/navDropDown.jsx';
import { useState } from 'react';

const NavBar = () => {
  const [mobile, setMobile] = useState(false);

  const toggleMobile = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <nav className={'px-2 py-2 w-full'}>
        <div className={'flex md:justify-between'}>
          <div className={'invisible sm:invisible md:visible'}>
            <NavButton
              route={'/'}
              text={'Hacker News'}
              color={'text-fontColBlack'}
              hover={false}
            />
          </div>
          <div className={`md:${toggleMobile}`} onChange={toggleMobile}>
            {mobile ? <NavList /> : <NavDropDown />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default withNoSsr(NavBar);
