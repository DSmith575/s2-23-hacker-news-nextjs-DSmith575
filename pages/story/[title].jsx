/**
 * @description Slug page for stories
 * @file [title].jsx
 *
 * @author Deacon Smith
 *
 * @param {String} title - Displays current title of page
 * @param {Object} stories - Object of story data

 * @return {JSX.Element} - Component containing Grid list of stories
 *
 * @created 04-09-2023
 * @updated 04-09-2023
 */

import GetStories from '@/utils/getApi/getStories.js';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import Grid from '@/components/storyLayout/grid.jsx';

const Stories = ({ title, stories }) => {
  return (
    <>
      <MetaTag pageTitle={title} />
      <Grid story={stories} refPage={title} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const title = await context.params.title;
    const stories = await GetStories(`${title}.json?`);

    return {
      props: {
        title: title,
        stories: stories,
      },
    };
  } catch (err) {
    return {
      props: {
        title: title,
        stories: [],
      },
    };
  }
};

export default Stories;
