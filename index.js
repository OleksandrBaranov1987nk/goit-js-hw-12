import{a as u,S as m,i as f}from"./assets/vendor-D5Cmjq_w.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function g(a){return a.map(e=>`<div class="gallery-item">
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
                </div>`).join("")}const y="43440045-443c1624e1412379947e54b30",d="https://pixabay.com/api/";async function h(a,e){const o=new URLSearchParams({key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}),t=`${d}?${o}`;return(await u.get(t)).data}const L=new m(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),p=document.querySelector(".form"),i=document.querySelector(".gallery"),l=document.querySelector(".loader");function c(){f.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",position:"topRight",messageSize:"400px"})}function F(a,e=1){a&&(p.reset(),i.innerHTML="",l.style.display="block",h(a,e).then(o=>{const t=o.hits;console.log(t),t.length>0?(i.innerHTML=g(t),L.refresh()):c(error)}).catch(o=>c()).finally(()=>l.style.display="none"))}p.addEventListener("submit",b);function b(a){a.preventDefault();const e=a.target.elements.searchWord.value;F(e)}
//# sourceMappingURL=index.js.map
