/**
 * @description ID slug page for stories
 * @file [...id].jsx
 *
 * @author Deacon Smith
 *
 * @param {Object} story - Object of single story data
 * @param {Number} URL_PARAM - getting the correct value for context
 *
 * @return {JSX.Element} selected story
 *
 * @created 04-09-2023
 * @updated 04-09-2023
 */

import MetaTag from '@/components/metaTag/metaTag.jsx';
import StoryCard from '@/components/card/storyCard.jsx';
import GetStory from '@/utils/getApi/getStory.js';

const URL_PARAM = 1;
const SingleStory = ({ story }) => {
  return (
    <>
      <MetaTag pageTitle={story.title} />
      <StoryCard story={story} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.id[URL_PARAM];
    const story = await GetStory(`item/${id}.json?`);
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
