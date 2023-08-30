import { instance } from '@/axios/instance.js';

const ApiRequest = async (endPoint) => {
  try {
    const response = await instance.get(endPoint);

    const storyIds = response.data;

    const promises = storyIds.map((id) => instance.get(`item/${id}.json?`));

    const results = await Promise.all(promises);

    const stories = results.map((result) => result.data);
    console.log(stories);

    return stories;
  } catch (err) {
    console.log(err);
  }
};

export default ApiRequest;
