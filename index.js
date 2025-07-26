import{a as h,S as F,i as c}from"./assets/vendor-D5Cmjq_w.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function w(a){return a.map(e=>`<div class="gallery-item">
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
                </div>`).join("")}const p=document.querySelector(".load-more");function L(){p.classList.remove("is-hidden")}function f(){p.classList.add("is-hidden")}const b="43440045-443c1624e1412379947e54b30",v="https://pixabay.com/api/",S=h.create({baseURL:v,params:{key:b,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function E(a,e){try{const{data:s}=await S.get("",{params:{q:a,page:e}});return s}catch{throw new Error("Failed to fetch images")}}const M=new F(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),q=document.querySelector(".form"),n=document.querySelector(".gallery"),u=document.querySelector(".loader"),C=document.querySelector(".load-more"),P=15;function d(){c.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",position:"topRight",messageSize:"400px"})}function R(){c.info({message:"We're sorry, but you've reached the end of search results.",messageColor:"#FFFFFF",theme:"dark",position:"topRight"})}let i=1,g="",m=0;q.addEventListener("submit",B);C.addEventListener("click",$);async function B(a){a.preventDefault();const e=a.target.elements.searchWord.value.trim();if(!e){c.warning({message:"Please enter a search query!",messageColor:"#FFFFFF",theme:"dark",position:"topRight"});return}i=1,g=e,n.innerHTML="",f(),await y()}async function $(){i+=1,await y(!0)}async function y(a=!1){try{u.style.display="block";const e=await E(g,i),s=e.hits;if(m=e.totalHits,s.length===0&&!a){d();return}const o=w(s);a?n.insertAdjacentHTML("beforeend",o):n.innerHTML=o,M.refresh();const t=Math.ceil(m/P);if(i>=t?(f(),R()):L(),a){const{height:r}=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}catch{d()}finally{u.style.display="none"}}
//# sourceMappingURL=index.js.map
