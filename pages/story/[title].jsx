import ApiRequest from '@/utils/api/getStories.js';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import Grid from '@/components/storyLayout/grid.jsx';

const Stories = ({ title, stories }) => {
  return (
    <>
      <MetaTag pageTitle={title} />
      <Grid story={stories} refPage={`story/${title}`} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const title = context.params.title;
    const stories = await ApiRequest(`${title}.json?`);

    return {
      props: {
        title: title,
        stories: stories,
      },
    };
  } catch (err) {
    return {
      props: {
        stories: [],
      },
    };
  }
};

export default Stories;
