import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import ApiRequest from '@/utils/api/apiRequest.js';

const ShowStories = ({ showStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Show Stories'} />
      <Grid story={showStories} refPage={'showStories'} />
    </>
  );
};
export const getServerSideProps = async () => {
  try {
    const stories = await ApiRequest('showstories.json?');
    return {
      props: {
        showStories: stories,
      },
    };
  } catch (err) {
    return {
      props: {
        story: [],
      },
    };
  }
};

export default ShowStories;
