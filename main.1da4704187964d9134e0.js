(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/nVi":function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("/nVi"),n("JBxO"),n("FdtR"),n("hi3g"),n("RtS0"),n("3dw1");var o=document.querySelector(".gallery"),i=function(t){[].concat(t.hits).forEach((function(t){o.insertAdjacentHTML("beforeend",'<li class="photo-card">\n            <img class="photo" height="400px" width="400px" src="'+t.webformatURL+'" alt="" />\n            <div class="stats">\n                <p class="stats-item">\n                    <i class="material-icons">thumb_up</i>\n                    '+t.likes+'\n                </p>\n                <p class="stats-item">\n                    <i class="material-icons">visibility</i>\n                    '+t.views+'\n                </p>\n                <p class="stats-item">\n                    <i class="material-icons">comment</i>\n                    '+t.comments+'\n                </p>\n                <p class="stats-item">\n                    <i class="material-icons">cloud_download</i>\n                    '+t.downloads+"\n                </p>\n            </div>\n        </li>")}))},a=document.querySelector('[name="query"]'),c=document.querySelector(".gallery"),s=1,r="",l=1,u=function(t,e){return"https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+t+"&page="+e+"&per_page=12&key=18951897-f7110a11ebc58b866f93acf70"},d=document.querySelector("body"),m=["#B8860B","#A52A2A","#BC8F8F","#C0C0C0","#2F4F4F","#483D8B"];document.querySelector(".gallery");document.querySelector(".search-form").addEventListener("submit",(function(t){t.preventDefault(),function t(e){var n=a.value;n===r?(s+=1,fetch(u(n,s)).then((function(t){return t.json()})).then((function(t){var e=document.documentElement.scrollHeight;i(t),window.scrollTo({top:e-50,behavior:"smooth"})}))):(c.innerHTML="",fetch(u(n,s)).then((function(t){return t.json()})).then((function(t){return i(t)}))),1===l&&(document.body.insertAdjacentHTML("beforeend",'<button type="button" class="load-more">Load more...</button>'),document.querySelector(".load-more").addEventListener("click",t),l+=1),r=n}()})),setInterval((function(){var t,e;d.style.backgroundColor=""+m[(t=0,e=5,Math.floor(Math.random()*(e-t+1)+t))],d.style.transition="background-color 3s ease"}),4e3)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.1da4704187964d9134e0.js.map