import axios from "axios";

const KEY = '43440045-443c1624e1412379947e54b30';
const BASE_URL = 'https://pixabay.com/api/';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  },
});

export async function getImagesByQuery(query, page) {
  try {
    const { data } = await instance.get('', {
      params: {
        q: query,
        page,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Failed to fetch images')

  }
}



