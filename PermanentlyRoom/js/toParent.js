!function(){"use strict";const t=function(t){return new Promise((e=>{e(window.parent.messageRelay(t))}))};document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=location.hostname;/xgt\.xgcomm\.net/.test(t)&&(document.domain="xgt.xgcomm.net")})(),function(){$.fn._get=$.fn.get;const e=/^tabnaviapp/;$.get=function(n,o){if(!e.test(n))return jQuery.fn._get.apply(this,arguments);t(n).then((t=>o(t)))}}(),(()=>{const t=document.querySelectorAll(".tabnaviapp");for(let e=0;e<t.length;e++)t[e].addEventListener("click",(t=>{t.preventDefault();const e=t.currentTarget.dataset.tabnaviapp;window.parent.postMessage({type:"specURL",href:e},"*")}))})()}),!1)}();