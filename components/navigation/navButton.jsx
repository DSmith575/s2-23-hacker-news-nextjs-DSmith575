import Link from 'next/link';
import withNoSsr from '@/components/hooks/ssr/ssrWrapper.jsx';

const NavButton = ({
  route,
  text,
  color,
  startChar,
  startCharColor,
  hover,
}) => {
  return (
    <>
      <Link href={`${route}`}>
        <div
          className={`text-lg font-bold ${color}
            ${
              hover
                ? `hover:bg-blush hover:text-white rounded px-3`
                : `border border-transparent`
            }
            `}>
          <span className={`${startCharColor}`}>{startChar}</span>
          {text}
        </div>
      </Link>
    </>
  );
};

export default withNoSsr(NavButton);
