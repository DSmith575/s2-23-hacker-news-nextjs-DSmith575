/**
 * @description Fetches a list of story IDs and returns their data
 * @file getStories.js
 *
 * @author Deacon Smith
 *
 * @param {Prop} endPoint - Selected endpoint
 * @param {Object} params - Contains param data for fetch request
 * @param {String} print - formatting
 * @param {String} orderBy - Required for limitToFirst
 * @param {String} limitToFirst - Returns only n amount of data
 *
 * @returns {request} ApiRequest - Fetches selected endpoint data
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import { storyInstance } from '@/utils/axios/API.js';

// Fetch API IDs then maps to their full url
// Waits for promise then maps all returned data
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
