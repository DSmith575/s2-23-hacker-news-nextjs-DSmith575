import axios from 'axios';
import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';

const JobStories = ({ bestStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Best Stories'} />
      <Grid story={bestStories} refPage={'bestStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  const api =
    'https://hacker-news.firebaseio.com/v0/jobstories.json?orderBy="$priority"&limitToFirst=40&print=pretty';
  try {
    const response = await axios.get(api);
    const storyIds = response.data;

    const promises = storyIds.map((id) =>
      axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}/.json?print=pretty`,
      ),
    );
    const results = await Promise.all(promises);
    const stories = results.map((result) => result.data);
    return {
      props: {
        bestStories: stories,
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
