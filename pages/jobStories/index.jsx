import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import ApiRequest from '@/api/apiRequest.js';

const JobStories = ({ jobStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Job Stories'} />
      <Grid story={jobStories} refPage={'jobStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const stories = await ApiRequest('jobstories.json?');
    return {
      props: {
        jobStories: stories,
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

export default JobStories;
