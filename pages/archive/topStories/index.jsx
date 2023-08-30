import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import ApiRequest from '@/api/apiRequest.js';

const TopStories = ({ topStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Top Stories'} />
      <Grid story={topStories} refPage={'topStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const stories = await ApiRequest('topstories.json?');
    return {
      props: {
        topStories: stories,
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

export default TopStories;
