import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import ApiRequest from '@/api/apiRequest.js';

const BestStories = ({ bestStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Best Stories'} />
      <Grid story={bestStories} refPage={'bestStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const stories = await ApiRequest('beststories.json?');
    return {
      props: {
        bestStories: stories,
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

export default BestStories;
