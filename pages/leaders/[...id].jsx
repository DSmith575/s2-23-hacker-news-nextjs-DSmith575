/**
 * @description ID slug page for user profile
 * @file [...id].jsx
 *
 * @author Deacon Smith
 *
 * @param {Object} story - Object of user data
 * @param {Number} URL_PARAM - getting the correct value for context
 * @return {JSX.Element} Single User Profile
 *
 * @created 04-09-2023
 * @updated 04-09-2023
 */

import MetaTag from '@/components/metaTag/metaTag.jsx';
import GetStory from '@/utils/getApi/getStory.js';
import LeaderCard from '@/components/card/leaderCard.jsx';

const URL_PARAM = 1;
const SingleStory = ({ story }) => {
  return (
    <>
      <MetaTag pageTitle={story.id} />
      <LeaderCard user={story} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.id[URL_PARAM];
    const story = await GetStory(`user/${id}.json?`);

    return {
      props: {
        story: story,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        story: [],
      },
    };
  }
};

export default SingleStory;
