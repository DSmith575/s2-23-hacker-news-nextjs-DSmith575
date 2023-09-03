import MetaTag from '@/components/metaTag/metaTag.jsx';
import GetStory from '@/utils/api/getStory.js';
import LeaderCard from '@/components/card/leaderCard.jsx';

const URL_PARAM = 1;
const SingleStory = ({ story }) => {
  return (
    <>
      <MetaTag pageTitle={story.id} />
      <LeaderCard user={story} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.id[URL_PARAM];
    const story = await GetStory(`user/${id}/.json?`);

    return {
      props: {
        story: story,
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

export default SingleStory;
