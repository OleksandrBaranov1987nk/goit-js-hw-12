export function renderMarcup(data) {
    return data
      .map(
        el =>
          `<div class="gallery-item">
                    <a class="gallery-link" href="${el.largeImageURL}">
                        <img class="gallery-image" src="${el.webformatURL}" alt="${el.tags}" />
                    </a>
                    <ul class="gallery-item-info">
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Likes: <span>${el.likes}</span>
                            </span>    
                        </li>
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Views: <span>${el.views}</span>
                            </span>    
                        </li>
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Comments: <span>${el.comments}</span>
                            </span>    
                        </li>
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Downloads: <span>${el.downloads}</span>
                            </span>    
                        </li>
                    </ul>
                </div>`
      )
      .join('');
}

const loadMoreBtn = document.querySelector('.load-more');

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('is-hidden');
}
  
