var Client=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){const n=document.querySelectorAll(".skills-icon"),o=document.getElementById("skills-icons-container"),i=document.getElementById("skill-explain");for(let e of n)e.addEventListener("mouseover",(function(){i.innerHTML=e.id}));o.addEventListener("mouseout",(function(){i.innerHTML=""}))},function(e,t){var n=document.getElementsByTagName("body");document.getElementById("main-container");const o=document.querySelectorAll("button.modalBtn");var i=document.querySelectorAll("span.Close");for(let e of o){const t=e.id,o=document.getElementById(t.split("-")[0]+"-modal");e.addEventListener("click",(function(){setTimeout((function(){n.className="is-blurred",o.className="Modal"}),300)}))}for(let e of i){const t=e.id,o=document.getElementById(t.split("-")[0]+"-modal");e.addEventListener("click",(function(){o.className="Modal is-hidden",n.className=""}))}window.addEventListener("click",(function(e){const t=document.querySelectorAll(".Modal");for(let o of t)e.target==o&&(o.className="Modal is-hidden",n.className="")}))},function(e,t,n){"use strict";function o(){const e=document.querySelectorAll("div.magic-appear");for(let t of e)u(t)?"contact-jump"===t.id?(t.style.opacity="1",t.style.transitionDelay="5s",t.style.transitionDuration="6s"):(t.style.opacity="1",t.style.transitionDelay="0s",t.style.transitionDuration="6s"):(t.style.opacity="0",t.style.transitionDelay="0s")}function i(e){if(e.querySelector("h2")){const t=e.querySelector("h2");t.style.width="15%",t.style.transitionDuration="3s"}}function l(e){if(e.querySelector("h2")){e.querySelector("h2").style.width="100%"}}n.r(t),n.d(t,"setActive",(function(){return a})),n.d(t,"createNavLinks",(function(){return d})),n.d(t,"showHidden",(function(){return o})),n.d(t,"sectionAnimations",(function(){return i})),n.d(t,"disableAnimations",(function(){return l})),n.d(t,"skillAnimation",(function(){return f.skillAnimation}));const r=document.getElementById("nav-items"),c=document.querySelectorAll("section"),s=document.querySelectorAll("div.section-in-viewport");function d(){for(let e of c){let t=document.createElement("li");t.id=e.id+"-nav",t.innerText=e.getAttribute("data-nav"),t.addEventListener("click",(function(){e.scrollIntoView({behavior:"smooth"})})),r.appendChild(t)}}function u(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function a(){for(let e of s){const t=e.id.split("-"),n=document.getElementById(t[0]+"-"+t[1]),o=document.getElementById(n.id+"-nav");u(e)?(o.classList.add("nav-active"),i(n)):(o.classList.remove("nav-active"),l(n))}}var f=n(0);n(1);document.addEventListener("scroll",(function(){a(),o(),function(){const e=document.getElementById("work-section-viewbox"),t=document.querySelectorAll(".project-pic-container");if(u(e))for(let e of t)e.classList.contains("left")?e.classList.add("slide-left"):e.classList.add("slide-right");else for(let e of t)e.classList.remove("slide-left"),e.classList.remove("slide-right")}()})),d()}]);