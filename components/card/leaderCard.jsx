/**
 * @description Renders the selected leader information
 * @file leaderCard.jsx
 *
 * @author Deacon Smith
 *
 * @returns {JSX.Element} - User Information Page
 *
 * @created 04-09-2023
 * @updated 04-09-2023
 */

import Link from 'next/link';
import { convertTime } from '@/utils/dateTime/convertUnix.js';
import { decodeSanitize } from '@/utils/decode/decodeSanitize.js';

const LeaderCard = ({ user }) => {
  return (
    <>
      <div
        className={
          'w-[85%] mx-auto p-12 bg-white border border-gray-200 rounded-lg shadow-3xl hover:bg-gray-200 break-words mt-12'
        }>
        <ul>
          <li className={''}>
            <li className={'font-bold text-center'}>
              <span>ID: </span>
              {user.id}
            </li>
          </li>
          <li>
            <span className={'font-bold'}>Created: </span>
            {convertTime(user.created)}
          </li>
          <li>
            <span className={'font-bold'}>Karma:</span> {user.karma}
          </li>
          {/* Returns user about section if API returns any value */}
          {user.about && (
            <>
              <h1 className={'font-bold mt-5 break-words'}>About</h1>
              <li dangerouslySetInnerHTML={decodeSanitize(user.about)}/>
            </>
          )}
        </ul>
        {/* Returns submitted posts from user from api.submitted slices and returns the first 10 */}
        {user.submitted && (
          <>
            <div className={'mt-5 text-center ring rounded'}>
              <h1 className={'font-bold text-center pb-5'}>Submitted</h1>
              {user.submitted.slice(0, 10).map((index) => (
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

export default LeaderCard;
