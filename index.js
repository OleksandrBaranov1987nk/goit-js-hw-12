import{a as y,S as h,i as d}from"./assets/vendor-D5Cmjq_w.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();function F(r){return r.map(e=>`<div class="gallery-item">
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
                </div>`).join("")}const m=document.querySelector(".load-more");function L(){m.classList.remove("is-hidden")}function p(){m.classList.add("is-hidden")}const w="43440045-443c1624e1412379947e54b30",b="https://pixabay.com/api/",S=y.create({baseURL:b,params:{key:w,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function v(r,e){try{const{data:s}=await S.get("",{params:{q:r,page:e}});return s}catch{throw new Error("Failed to fetch images")}}const q=new h(".gallery a",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),M=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),B=document.querySelector(".load-more");function u(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",position:"topRight",messageSize:"400px"})}let l=1,f="";M.addEventListener("submit",E);B.addEventListener("click",$);async function E(r){r.preventDefault();const e=r.target.elements.searchWord.value.trim();if(!e){d.warning({message:"Please enter a search query!",messageColor:"#FFFFFF",theme:"dark",position:"topRight"});return}l=1,f=e,n.innerHTML="",p(),await g()}async function $(){l+=1,await g(!0)}async function g(r=!1){try{c.style.display="block";const s=(await v(f,l)).hits;if(s.length===0&&!r){u();return}const o=F(s);if(r?n.insertAdjacentHTML("beforeend",o):n.innerHTML=o,q.refresh(),s.length<15?p():L(),r){const{height:t}=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}catch{u()}finally{c.style.display="none"}}
//# sourceMappingURL=index.js.map
