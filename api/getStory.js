import { singleStoryInstance } from '@/axios/instance.js';

const GetStory = async (endPoint) => {
  try {
    console.log(endPoint);
    const getStory = await singleStoryInstance.get(endPoint);
    const story = getStory.data;
    return story;
  } catch (err) {
    console.log(err);
  }
};

export default GetStory;
