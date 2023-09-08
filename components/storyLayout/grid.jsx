/**
 * @description Grid Component for Displaying stories/leaders
 * @file grid.jsx
 *
 * @author Deacon Smith
 *
 * @returns {JSX.Element} - Grid Layout
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import Link from 'next/link';

const Grid = ({ story, subPage }) => {
  return (
    <>
      <div>
        <ul
          className={
            'gap-2 px-4 text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          }>
          {story.map((value) => (
            <li key={value.id}>
              <div
                className={
                  'mt-4 mx-auto lg:shadow-3xl group border border-greenBlueColor w-[75%] h-20 flex justify-center items-center ring-2 ring-greenBlueColor rounded-md hover:bg-white'
                }>
                <Link
                  className={
                    'text-center text-sm break-all group-hover:font-bold group-hover:text-greenBlueColor group-hover:uppercase hover:ease-linear group-hover:duration-100'
                  }
                  href={`./${subPage}/${value.id}`}>
                  {value.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Grid;
