import instance from '@/axios/instance';

const ApiRequest = async (endPoint) => {
  try {
    const response = await instance.get(endPoint);

    const storyIds = response.data;

    const promises = storyIds.map((id) => instance.get(`item/${id}.json?`));

    const results = await Promise.all(promises);

    const stories = results.map((result) => result.data);

    return stories;
  } catch (err) {
    console.log(err);
  }
};

export default ApiRequest;
