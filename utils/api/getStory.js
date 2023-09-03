import { storyInstance } from '@/utils/axios/API.js';

const GetStory = async (endPoint) => {
  try {
    const getStory = await storyInstance.get(endPoint, {
      params: {
        print: 'pretty',
      },
    });
    const story = getStory.data;
    return story;
  } catch (err) {
    console.log(err);
  }
};

export default GetStory;
