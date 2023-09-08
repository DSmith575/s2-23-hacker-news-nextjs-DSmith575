/**
 * @description Renders the selected story information
 * @file storyCard.jsx
 *
 * @author Deacon Smith
 *
 * @returns {JSX.Element} - Story Information Page
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import Link from 'next/link';
import { convertTime } from '@/utils/dateTime/convertUnix.js';
import { decodeSanitize } from '@/utils/decode/decodeSanitize.js';

const StoryCard = ({ story }) => {
  return (
    <>
      <div
        className={
          'w-[85%] mx-auto mt-12 mb-12 p-12 bg-white border border-gray-200 rounded-lg shadow-3xl hover:bg-gray-200 break-words'
        }>
        <ul>
          <li className={'font-bold text-center pb-2'}>{story.title}</li>
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
          {/* Returns storytext if API returns any value */}
          {story.text && (
            <>
              <h1 className={'font-bold mt-5 break-words pb-2'}>Story</h1>
              <li dangerouslySetInnerHTML={decodeSanitize(story.text)}></li>
            </>
          )}
        </ul>

        {/* Returns story links if API returns any urls */}
        {story.url && (
          <>
            <div className={'mt-5 ring rounded text-center'}>
              <h1 className={'font-bold text-center pb-5'}>Story Link</h1>
              <Link
                className={
                  'text-greenBlueColor font-bold hover:text-oldRose hover:underline break-words'
                }
                href={story.url}
                target={'_blank'}>
                {story.url}
              </Link>
            </div>
          </>
        )}

        {/* Returns related stories from api.kids slices and returns the first 5 */}
        {story.kids && (
          <>
            <div className={'mt-5 text-center ring rounded'}>
              <h1 className={'font-bold text-center pb-5'}>Sub Stories</h1>
              {story.kids.slice(0, 5).map((index) => (
                <Link
                  className={
                    'text-greenBlueColor flex flex-col font-semibold hover:font-bold hover:underline hover:text-oldRose break-words pb-2'
                  }
                  key={index}
                  href={`https://hacker-news.firebaseio.com/v0/item/${index}.json?print=pretty`}
                  target={'_blank'}>
                  {`https://hacker-news.firebaseio.com/v0/item/${index}.json?print=pretty`}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default StoryCard;
