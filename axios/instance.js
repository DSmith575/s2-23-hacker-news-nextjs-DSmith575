import axios from 'axios';

const HACKER_NEWS_URL = process.env.HACKER_NEWS_URL;

const instance = axios.create({
  baseURL: HACKER_NEWS_URL,
  params: {
    print: 'pretty',
    orderBy: '"$key"',
    limitToFirst: '40',
  },
});

export default instance;
