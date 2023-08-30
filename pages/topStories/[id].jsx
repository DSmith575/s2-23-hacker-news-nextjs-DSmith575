import Card from '@/components/card/card.jsx';
import MetaTag from '@/components/metaTag/metaTag.jsx';
import GetStory from '@/api/getStory.js';

const TopStoryPage = ({ story }) => {
  return (
    <>
      <MetaTag pageTitle={story.title} />
      <Card story={story} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const id = context.params.id;
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

export default TopStoryPage;
