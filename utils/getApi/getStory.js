/**
 * @description Fetches selected story
 * @file getStory.js
 *
 * @author Deacon Smith
 *
 * @param {Prop} endPoint - Selected endpoint
 * @param {Object} params - Contains param data for fetch request
 * @param {String} print - formatting
 *
 * @returns {request} ApiRequest - Fetches selected endpoint data
 *
 * @created 27-08-2023
 * @updated 04-09-2023
 */

import { storyInstance } from '@/utils/axios/instance.js';

// Fetch Story Data from endPoint

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
