const KEY = '43440045-443c1624e1412379947e54b30';
const BASE_URL = 'https://pixabay.com/api/';



 export function getImages(searchWord) {

    const searchParamObj = new URLSearchParams({
        key: KEY,
        q: searchWord,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      });
    const LINK = `${BASE_URL}?${searchParamObj}`;

    // loader.style.display = 'block'; /-------появился----/

    return fetch(LINK)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    
}