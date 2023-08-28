import axios from 'axios';
import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';

const TopStories = ({ topStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Top Stories'} />
      <Grid story={topStories} refPage={'topStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  const api =
    'https://hacker-news.firebaseio.com/v0/topstories.json?orderBy="$priority"&limitToFirst=40&print=pretty';
  try {
    const response = await axios.get(api);
    // Taking the data from response (IDs) and mapping them in a new array of html links
    const promises = response.data.map((id) =>
      axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}/.json?print=pretty`,
      ),
    );
    const results = await Promise.all(promises);
    // making api calls to each link and then mapping that data, to display card titles etc
    const stories = results.map((result) => result.data);
    return {
      props: {
        topStories: stories,
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

export default TopStories;
