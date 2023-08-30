import Link from 'next/link';

const convertTime = (timeStamp) => {
  let date = new Date(timeStamp * 1000);
  const todayDate = new Date(Date.now());
  date = todayDate - date;

  return date;
  // returnValue
};

const Card = ({ story }) => {
  return (
    <>
      <div
        className={
          'w-[85%] md:w-[55%] mx-auto p-12 bg-white border border-gray-200 rounded-lg shadow-3xl hover:bg-gray-200'
        }>
        <ul className={''}>
          <li className={'font-bold text-center'}>{story.title}</li>
          <li>
            <span className={'font-bold'}>Type: </span> {story.type}
          </li>
          <li className={''}>
            <span className={'font-bold'}>Poster: </span>
            {story.by}
          </li>
          <li>
            <span className={'font-bold'}>Time: </span>
            {convertTime(story.time)}
          </li>
          <li>
            <span className={'font-bold'}>Score:</span> {story.score}
          </li>
          {story.text ? (
            <>
              <h1 className={'font-bold mt-5'}>Story</h1>
              <li>{story.text}</li>
            </>
          ) : (
            ''
          )}
        </ul>

        {/* Returns story links if API returns any urls */}
        {story.url ? (
          <>
            <div className={'mt-5 ring rounded text-center'}>
              <h1 className={'font-bold text-center pb-5'}>Story Link</h1>
              <Link
                className={
                  'text-greenBlueColor font-bold hover:text-oldRose hover:underline'
                }
                href={story.url}
                target={'_blank'}>
                {story.url}
              </Link>
            </div>
          </>
        ) : (
          ''
        )}
        <div className={'mt-5 text-center ring rounded'}>
          <h1 className={'font-bold text-center pb-5'}>Sub Stories</h1>
          {/* Returns related stories from api.kids slices and returns the first 5 */}
          {story.kids ? (
            story.kids.slice(0, 5).map((index) => (
              <Link
                className={
                  'text-greenBlueColor flex flex-col font-semibold hover:font-bold hover:underline hover:text-oldRose'
                }
                key={index}
                href={`https://hacker-news.firebaseio.com/v0/item/${index}.json?print=pretty`}
                target={'_blank'}>
                {`https://hacker-news.firebaseio.com/v0/item/${index}.json?print=pretty`}
              </Link>
            ))
          ) : (
            <li>No external links</li>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
