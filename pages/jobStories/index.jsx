import axios from 'axios';
import instance from '@/api/axios/instances';
import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';

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
    const response = await instance.get('jobstories.json?')

    const storyIds = response.data;

    const promises = storyIds.map((id) =>
    instance.get(`item/${id}.json?`),
    );
    const results = await Promise.all(promises);
    const stories = results.map((result) => result.data);
    return {
      props: {
        jobStories: stories,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        story: null,
      },
    };
  }
};

export default JobStories;
