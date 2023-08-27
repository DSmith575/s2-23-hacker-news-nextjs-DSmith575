/**
 * @file Navigation link button
 * @author Deacon Smith
 *
 * @description Button for handling next/link routing
 *
 * @component
 * @param {string} route - Page to move to {'/askStories'}
 * @param {string} text - text to display {'AskStories'}
 * @param {string} color - Font color {'text-sky-400'}
 * @param {boolean} hover - Boolean to handle if button has a hover effect or not {true}
 *
 * @return {JSX.Element} - Component for link buttons
 *
 * @created 27-08-2023
 * @updated 28-08-2023
 */

import Link from 'next/link';
import withNoSsr from '@/components/hooks/ssr/ssrWrapper.jsx';

const NavButton = ({ route, text, color, hover }) => {
  return (
    <>
      <Link href={`${route}`}>
        <div
          className={`text-md lg:text-lg font-bold px-4 py-2 ${color}
            ${
              hover
                ? `hover:bg-oldRose hover:text-white hover:rounded hover:underline hover:decoration-2 hover:decoration-wavy`
                : ''
            }
            `}>
          {text}
        </div>
      </Link>
    </>
  );
};

export default withNoSsr(NavButton);
