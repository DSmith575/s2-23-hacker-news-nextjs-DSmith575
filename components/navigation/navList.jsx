import NavButton from '@/components/navigation/navButton.jsx';

const NavList = () => {
  return (
    <>
      <ul className={`flex flex-col relative`}>
        <li>
          <NavButton
            route={'askStories'}
            startChar={'A'}
            startCharColor={'text-grimace'}
            text={'sk Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/bestStories'}
            startChar={'B'}
            startCharColor={'text-grimace'}
            text={'est Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/jobStories'}
            startChar={'J'}
            startCharColor={'text-grimace'}
            text={'ob Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/newStories'}
            startChar={'N'}
            startCharColor={'text-grimace'}
            text={'ew Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/showStories'}
            startChar={'S'}
            startCharColor={'text-grimace'}
            text={'how Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
        <li>
          <NavButton
            route={'/topStories'}
            startChar={'T'}
            startCharColor={'text-grimace'}
            text={'op Stories'}
            color={'text-sky-400'}
            hover={true}
          />
        </li>
      </ul>
    </>
  );
};

export default NavList;
