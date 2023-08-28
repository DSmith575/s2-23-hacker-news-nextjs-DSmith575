import axios from 'axios';
import Grid from '@/components/storyLayout/grid.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';

const AskStories = ({ askStories }) => {
  return (
    <>
      <MetaTag pageTitle={'Ask Stories'} />
      <Grid story={askStories} refPage={'askStories'} />
    </>
  );
};

export const getServerSideProps = async () => {
  const api =
    'https://hacker-news.firebaseio.com/v0/askstories.json?orderBy="$priority"&limitToFirst=40&print=pretty';
  try {
    const response = await axios.get(api);
    if (response.ok === false) {
      throw new Error('Response Error: ' + response.text);
    }

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
        askStories: stories,
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

export default AskStories;
