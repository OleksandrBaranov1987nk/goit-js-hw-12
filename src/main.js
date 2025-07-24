import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { renderMarcup } from "./js/render-functions.js";
import { getImages } from "./js/pixabay-api.js";

const lightbox = new SimpleLightbox('.gallery a', {
    nav: true,
    captions: true,
    captionsData: 'alt',
    captionDelay: 150,
  });

  const form = document.querySelector('.form');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  function showMessageError() {
    iziToast.error({
        
        message: 'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#ef4040',  
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        theme: 'dark',
        position: 'topRight',
        messageSize: '400px',

    }); 
}

function showGallery(searchWord) {
  if (searchWord) {
    form.reset();
    gallery.innerHTML = '';
    loader.style.display = 'block';
    getImages(searchWord)
         .then(data => {
          

             const allImages = data.hits;  
             console.log(allImages);   
             if (allImages.length > 0) {
                 gallery.innerHTML = renderMarcup(allImages); 
                 lightbox.refresh();
             } else {
                 showMessageError(error);
             }
         })
         .catch((error) => showMessageError(error))
         .finally(() => loader.style.display = 'none');
 } 
}


  form.addEventListener('submit', workSub);

  function workSub(event) {
    event.preventDefault();
    const sarchWord = event.target.elements.searchWord.value;
    showGallery(sarchWord);

  }
   

