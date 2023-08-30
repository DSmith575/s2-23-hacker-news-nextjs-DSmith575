import ApiRequest from '@/api/apiRequest.js';

const Index = ({ title }) => {
  // get the title from params
  return <h1>{title}</h1>;
};

export const getServerSideProps = async (context) => {
  try {
    const title = context.params.title;
    const stories = await ApiRequest(`${title}stories.json?`);

    return {
      props: {
        title: title,
        stories: stories,
      },
    };
  } catch (err) {
    return {
      props: {
        stories: [],
      },
    };
  }
};

export default Index;
