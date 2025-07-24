import{S as u,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();function m(s){return s.map(e=>`<div class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
                    </a>
                    <ul class="gallery-item-info">
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Likes: <span>${e.likes}</span>
                            </span>    
                        </li>
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Views: <span>${e.views}</span>
                            </span>    
                        </li>
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Comments: <span>${e.comments}</span>
                            </span>    
                        </li>
                        <li class="gallery-item-info-par">
                            <span class="gallery-item-info-span">Downloads: <span>${e.downloads}</span>
                            </span>    
                        </li>
                    </ul>
                </div>`).join("")}const g="43440045-443c1624e1412379947e54b30",y="https://pixabay.com/api/";function d(s){const e=new URLSearchParams({key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),a=`${y}?${e}`;return fetch(a).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const h=new u(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),p=document.querySelector(".form"),i=document.querySelector(".gallery"),l=document.querySelector(".loader");function c(){f.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",position:"topRight",messageSize:"400px"})}function L(s){s&&(p.reset(),i.innerHTML="",l.style.display="block",d(s).then(e=>{const a=e.hits;console.log(a),a.length>0?(i.innerHTML=m(a),h.refresh()):c(error)}).catch(e=>c()).finally(()=>l.style.display="none"))}p.addEventListener("submit",b);function b(s){s.preventDefault();const e=s.target.elements.searchWord.value;L(e)}
//# sourceMappingURL=index.js.map
