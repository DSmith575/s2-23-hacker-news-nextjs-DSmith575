import Card from '@/components/card/card.jsx';
import axios from 'axios';
import MetaTag from '@/components/metaTag/metaTag.jsx';

const BestStoryPage = ({ story }) => {
  return (
    <>
      <MetaTag pageTitle={story.title} />
      <Card story={story} />;
    </>
  );
};

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const api = `https://hacker-news.firebaseio.com/v0/item/${id}/.json?print=pretty`;
  try {
    const response = await axios.get(api);

    if (response.ok === false) {
      throw new Error('Response Error: ' + response.text);
    }

    return {
      props: {
        story: response.data,
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

export default BestStoryPage;
