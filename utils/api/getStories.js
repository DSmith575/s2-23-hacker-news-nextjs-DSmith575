import { storyInstance } from '@/utils/axios/API.js';

const ApiRequest = async (endPoint) => {
  try {
    const response = await storyInstance.get(endPoint, {
      params: {
        print: 'pretty',
        orderBy: '"$key"',
        limitToFirst: '40',
      },
    });

    const storyIds = response.data;

    const promises = storyIds.map((id) =>
      storyInstance.get(`item/${id}.json?`),
    );

    const results = await Promise.all(promises);

    const stories = results.map((result) => result.data);

    return stories;
  } catch (err) {
    console.log(err);
  }
};

export default ApiRequest;
