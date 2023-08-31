import MetaTag from '@/components/metaTag/metaTag.jsx';
import Card from '@/components/card/card.jsx';
import GetStory from '@/utils/api/getStory.js';

const URL_PARAM = 1;
const SingleStory = ({ story }) => {
  return (
    <>
      <MetaTag pageTitle={story.title} />
      <Card story={story} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.id[URL_PARAM];
    const story = await GetStory(`item/${id}/.json?`);

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
