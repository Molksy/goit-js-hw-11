import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36108889-e9e01e89ef65dcf60af3a8e18';

export async function fetchImages(value, page = 1, perPage = 40) {
  try {
    const response = await axios.get(
      `${BASE_URL}?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}