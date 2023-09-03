import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import ApiRequest from '@/utils/api/getStories.js';

const NewStories = ({ newStories }) => {
  return (
    <>
      <MetaTag pageTitle={'New Stories'} />
      <Grid story={newStories} refPage={'newStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const stories = await ApiRequest('newstories.json?');
    return {
      props: {
        newStories: stories,
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

export default NewStories;
