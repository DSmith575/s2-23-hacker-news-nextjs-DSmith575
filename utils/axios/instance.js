/**
 * @description Axios Instance for env URL
 * @file API.js
 *
 * @author Deacon Smith
 *
 * @param {Env} HACKER_NEWS_URL - Imports url from env file
 *
 * @return {Prop} baseURL - Creates baseURL with env URL
 *
 * @created 04-09-2023
 * @updated 06-09-2023
 */

import axios from 'axios';

const HACKER_NEWS_URL = process.env.NEXT_PUBLIC_HACKER_NEWS_URL;

export const storyInstance = axios.create({
  baseURL: HACKER_NEWS_URL
});
