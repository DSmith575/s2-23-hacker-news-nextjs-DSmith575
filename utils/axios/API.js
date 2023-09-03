import axios from 'axios';

const HACKER_NEWS_URL = process.env.HACKER_NEWS_URL;

export const storyInstance = axios.create({
  baseURL: HACKER_NEWS_URL,
});
