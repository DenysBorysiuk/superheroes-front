import{l as t,m as a,o as c}from"./index-23b039c9.js";function n(e=t){const s=e===t?a:c(e);return function(){const{store:o}=s();return o}}const u=n();function i(e=t){const s=e===t?u:n(e);return function(){return s().dispatch}}const h=i(),x=e=>e.heroes.items,l=e=>e.heroes.totalPages,p=e=>e.heroes.isLoading;export{l as a,p as b,x as s,h as u};