import withNoSsr from '@/components/hooks/ssr/ssrWrapper.jsx';
import NavButton from '@/components/navigation/navButton.jsx';
import NavList from '@/components/navigation/navList.jsx';

const NavBar = () => {
  return (
    <>
      <nav className={'px-2 py-2 w-full invisible sm:invisible md:visible'}>
        <div className={'flex md:justify-between'}>
          <NavButton
            route={'/'}
            text={'Hacker News'}
            color={'text-mint'}
            hover={false}
          />
          <NavList />
        </div>
      </nav>
    </>
  );
};

export default withNoSsr(NavBar);
