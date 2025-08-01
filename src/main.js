import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from "./js/render-functions.js";
import { getImagesByQuery } from "./js/pixabay-api.js";


  const form = document.querySelector('.form');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');
  const loadMoreBtn = document.querySelector('.load-more');
  const PER_PAGE = 15;

  function showMessageError() {
    iziToast.error({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      backgroundColor: '#ef4040',
      titleColor: '#FFFFFF',
      messageColor: '#FFFFFF',
      theme: 'dark',
      position: 'bottomRight',
      timeout: '5000',
 
    });
  }

    function showEndCollectionMessage() {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: '#FFFFFF',
      theme: 'dark',
      position: 'topRight',
    });
  }

  let page = 1;
  let currentQuery = '';
  let totalHits = 0;

  form.addEventListener('submit', onSearch);
  loadMoreBtn.addEventListener('click', onLoadMore);

  async function onSearch(event) {
    event.preventDefault();
    const query = event.target.elements.searchWord.value.trim();
    if (!query) {
      iziToast.warning({
        message: 'Please enter a search query!',
        messageColor: '#FFFFFF',
        theme: 'dark',
        position: 'topRight',
      });
      return;
    }

    page = 1;
    currentQuery = query;
    clearGallery();
    hideLoadMoreButton();
    await fetchImages();
  }

  async function onLoadMore() {
    page += 1;
    await fetchImages(true);
  }

  async function fetchImages(isLoadMore = false) {
    try {
      showLoader();
      const data = await getImagesByQuery(currentQuery, page);
      const hits = data.hits;
      totalHits = data.totalHits;

      if (hits.length === 0 && !isLoadMore) {
        showMessageError();
        return;
      }

      createGallery(hits);

      const totalPages = Math.ceil(totalHits / PER_PAGE);
      if (page >= totalPages) {
        hideLoadMoreButton();
        showEndCollectionMessage();
      } else {
        showLoadMoreButton();
      }

      if (isLoadMore) {
        const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
        window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
      }
    } catch (error) {
      showMessageError();
    } finally {
      hideLoader();
    }

  }



