import{S as h,a as F,i as l}from"./assets/vendor-DTWVMNYS.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),f=document.querySelector(".load-more"),L=new h(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150});function w(r){return r.map(e=>`
                <div class="gallery-item">
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
                </div>`).join("")}function b(r){const e=w(r);d.insertAdjacentHTML("beforeend",e),L.refresh()}function S(){d.innerHTML=""}function q(){m.style.display="block"}function v(){m.style.display="none"}function E(){f.classList.remove("is-hidden")}function p(){f.classList.add("is-hidden")}const M="43440045-443c1624e1412379947e54b30",C="https://pixabay.com/api/",P=F.create({baseURL:C,params:{key:M,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function R(r,e){try{const{data:a}=await P.get("",{params:{q:r,page:e}});return a}catch{throw new Error("Failed to fetch images")}}const $=document.querySelector(".form"),B=document.querySelector(".gallery");document.querySelector(".loader");const k=document.querySelector(".load-more"),O=15;function c(){l.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",position:"bottomRight",timeout:"5000"})}function H(){l.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",theme:"dark",position:"topRight"})}let n=1,g="",u=0;$.addEventListener("submit",x);k.addEventListener("click",A);async function x(r){r.preventDefault();const e=r.target.elements.searchWord.value.trim();if(!e){l.warning({message:"Please enter a search query!",messageColor:"#FFFFFF",theme:"dark",position:"topRight"});return}n=1,g=e,S(),p(),await y()}async function A(){n+=1,await y(!0)}async function y(r=!1){try{q();const e=await R(g,n),a=e.hits;if(u=e.totalHits,a.length===0&&!r){c();return}b(a);const s=Math.ceil(u/O);if(n>=s?(p(),H()):E(),r){const{height:t}=B.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}catch{c()}finally{v()}}
//# sourceMappingURL=index.js.map
