import axios from "axios";

const KEY = '43440045-443c1624e1412379947e54b30';
const BASE_URL = 'https://pixabay.com/api/';



export async function getImagesByQuery(query, page) {
  const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });

    const url = `${BASE_URL}?${searchParams}`;


    const response = await axios.get(url);
    return response.data;

  }
    // loader.style.display = 'block'; /-------появился----/


