import Link from 'next/link';

const Grid = ({ story, refPage }) => {
  return (
    <>
      <div>
        <ul
          className={
            'gap-2 px-4 text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 xl:grid-cols-5'
          }>
          {story.map((value) => (
            <li key={value.id}>
              <div
                className={
                  'mt-4 mx-auto shadow-3xl group border border-greenBlueColor w-[75%] h-20 flex justify-center items-center ring-2 ring-greenBlueColor rounded-md hover:bg-white'
                }>
                <Link
                  className={
                    'text-center text-sm group-hover:font-bold group-hover:text-greenBlueColor group-hover:uppercase hover:ease-linear group-hover:duration-100'
                  }
                  href={`/${refPage}/${value.id}`}>
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
