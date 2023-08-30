import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import ApiRequest from '@/api/apiRequest.js';

const AskStories = ({ askStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Ask Stories'} />
      <Grid story={askStories} refPage={'askStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const stories = await ApiRequest('askstories.json?');
    console.log(stories);
    return {
      props: {
        askStories: stories,
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

export default AskStories;
