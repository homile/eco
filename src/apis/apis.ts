import axios from 'axios';
const { VITE_BASE_URI } = import.meta.env;

const api = axios.create({
  baseURL: VITE_BASE_URI,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export const GetPostsList = async () => {
  try {
    return await api.get('/posts.json');
  } catch (error) {
    console.log(error);
  }
};

export const PostData = async (data: object) => {
  try {
    return await axios.post('/posts.json', data);
  } catch (error) {
    console.log(error);
  }
};
