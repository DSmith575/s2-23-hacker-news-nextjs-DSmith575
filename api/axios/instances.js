import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
  params: {
    'print': 'pretty',
    'orderBy': '"$key"',
    'limitToFirst': "40",
  }
});


export default instance;