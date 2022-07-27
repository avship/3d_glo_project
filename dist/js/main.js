(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");let r=null;const s=e=>{const{hours:s,minutes:n,seconds:c}=(e=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(e);+s+ +n+ +c<0?clearInterval(r):(t.textContent=String(s).padStart(2,"0"),a.textContent=String(n).padStart(2,"0"),l.textContent=String(c).padStart(2,"0"))};s(e),r=setInterval(s,1e3,e)})("31 july 2022"),(()=>{const e=document.querySelector("menu"),t=e=>{e.scrollIntoView({block:"start",behavior:"smooth"})};document.body.addEventListener("click",(a=>{(a=>{a.target.closest(".close-btn")||a.target.closest(".menu")?(a.preventDefault(),e.classList.toggle("active-menu")):a.target.closest("menu")&&"A"===a.target.tagName?(a=>{if(a.preventDefault(),e.classList.toggle("active-menu"),"A"===a.path[0].tagName){const e=a.target.getAttribute("href"),l=document.querySelector(e);t(l)}})(a):a.target.closest("#next_section")?(a.preventDefault(),e.classList.contains("active-menu")&&e.classList.remove("active-menu"),t(a.target.closest("#next_section"))):!a.target.closest("menu")&&e.classList.contains("active-menu")&&e.classList.remove("active-menu")})(a)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),a=(e.querySelector(".popup-close"),e.querySelector(".popup-content"));let l;const r=()=>{l=requestAnimationFrame(r),parseInt(a.style.top)<20?a.style.top=`${parseInt(a.style.top)+2}%`:cancelAnimationFrame(l)};t.forEach((t=>t.addEventListener("click",(()=>{a.style.top="-100%",e.style.display="block",document.documentElement.clientWidth>=768?r():a.style.top="30%"})))),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.closest(".popup-close")||(e.style.display="none")}))})(),(()=>{const e=e=>{e.target.value=e.target.value.replace(/\D+/,"")},t=e=>{console.log(e.target.value),e.target.value=e.target.value.replace(/[^А-Яа-яёЁ \-]/,""),console.log(e.target.value)},a=e=>{e.target.value=e.target.value.replace(/[^\w@\.\-\_\!\~\*]/,"")},l=e=>{e.target.value=e.target.value.replace(/[^\d\-\(\)\+]/,"")},r=document.querySelectorAll(".calc-block input"),s=document.querySelector("#form2-message"),n=document.querySelectorAll(".form-email"),c=document.querySelectorAll(".form-phone");document.querySelectorAll('input[placeholder="Ваше имя"]').forEach((e=>{e.addEventListener("input",(e=>{t(e),e.target.value=e.target.value.split(" ").map((e=>e.slice(0,1).toUpperCase()+e.slice(1))).join(" ")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.trim(),e.target.value=e.target.value.replace(/[\- ]+$/g,""),e.target.value=e.target.value.replace(/^[\- ]+/g,""),e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.replace(/\.+/g,"."),e.target.value=e.target.value.replace(/ +/g," ")}))})),r.forEach((t=>{t.addEventListener("input",e)})),s.addEventListener("input",t),s.addEventListener("blur",(e=>{t(e),e.target.value=e.target.value.trim(),e.target.value=e.target.value.replace(/ +/g," "),e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1)})),n.forEach((e=>{e.addEventListener("input",a),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\-+$/g,""),e.target.value=e.target.value.replace(/^\-+/g,""),e.target.value=e.target.value.replace(/@+/g,"@"),e.target.value=e.target.value.replace(/\.+/g,".")}))})),c.forEach((e=>{e.addEventListener("input",l),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.replace(/\(+/g,"("),e.target.value=e.target.value.replace(/\)+/g,")"),e.target.value=e.target.value.replace(/\++/g,"+"),e.target.value=e.target.value.replace(/\-+$/g,""),e.target.value=e.target.value.replace(/^\-+/g,"")}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelectorAll(".service-header-tab");document.querySelector(".service-header").addEventListener("click",(a=>{if(a.target.closest(".service-header-tab")){const l=a.target.closest(".service-header-tab");t.forEach(((t,a)=>{t===l?(t.classList.add("active"),e[a].classList.remove("d-none")):(t.classList.remove("active"),e[a].classList.add("d-none"))}))}}))})(),(e=>{let{sliderClass:t=null,sliderItemsClass:a=null,sliderItemsClassActive:l="slide-active",arrows:r=!1,arrowLeftClass:s="slider-arrow-left",arrowRightClass:n="slider-arrow-rught",dots:c=!1,dotsParams:{dotContainer:o="dot-container",dotItemClass:i="item-dot",dotActiveClass:u="active-dot"}={},debug:d=!1,timerInterval:g=2e3}=e;const v=[];if(t||v.push("Не указан класс контейнера слайдера"),a||v.push("Не указано класс элемента слайдера"),v.length)return void(d&&console.log("Ошибки слайдера",v));g=isNaN(parseInt(g))?2e3:parseInt(g),"."!==t.slice(0,1)&&(t=`.${t}`),"."!==a.slice(0,1)&&(a=`.${a}`),"."!==o.slice(0,1)&&(o=`.${o}`),"."!==i.slice(0,1)&&(i=`.${i}`);const p=document.querySelector(t);null===p&&v.push("В вёрстке отсутствует дом элемент, где будет располагаться слайдер");const m=document.querySelectorAll(a);if(m.length||v.push("Нет ни одного слайда на странице"),v.length)return void(d&&console.log("Ошибки слайдере",v));let h,L;var y;c&&(h=document.createElement("ul"),h.classList.add(o.slice(1)),p.appendChild(h),y=h,m.forEach(((e,t)=>{const a=document.createElement("li");a.classList.add(i.slice(1)),0===t&&a.classList.add("dot-active"),y.appendChild(a)})),L=document.querySelectorAll(i)),L&&L.length||(c=!1),r&&[s,n].forEach(((e,t)=>{const a=document.createElement("a");e.split(" ").forEach((e=>{(e=e.trim())&&("."===e.slice(0,1)&&(e=e.slice(1)),a.classList.add(e)),a.classList.add("slider-btn-handler"),0===t?a.classList.add("slider-btn-handler-prev"):a.classList.add("slider-btn-handler-next")})),p.appendChild(a)}));let f,E=0;const b=(e,t,a)=>{e[t].classList.remove(a)},S=(e,t,a)=>{e[t].classList.add(a)},C=()=>{b(m,E,l),c&&b(L,E,u),E++,E>=m.length&&(E=0),S(m,E,l),c&&S(L,E,u)},q=()=>{f=setInterval(C,g)};q(),p.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(i,".slider-btn-handler")&&(r&&b(m,E,l),c&&b(L,E,u),e.target.matches(".slider-btn-handler-next")&&(E++,E>=m.length&&(E=0)),e.target.matches("slider-btn-handler-prev")&&(E--,E<0&&(E=m.length-1)),e.target.classList.contains(i)&&L.forEach(((t,a)=>{t===e.target&&(E=a)})),r&&S(m,E,l),c&&S(L,E,u))})),p.addEventListener("mouseenter",(e=>{(e.target.classList.contains("slider-btn-handler")||e.target.classList.contains(i.slice(1)))&&(c&&b(L,E,u),clearInterval(f))}),!0),p.addEventListener("mouseleave",(e=>{(e.target.classList.contains("slider-btn-handler")||e.target.classList.contains(i))&&(c&&b(L,E,u),q())}),!0)})({sliderClass:"portfolio-content",sliderItemsClass:"portfolio-item",sliderItemsClassActive:"portfolio-item-active",arrowLeftClass:"portfolio-btn prev",arrowRightClass:"portfolio-btn next",dots:!0,dotsParams:{dotContainer:"portfolio-dots",dotItemClass:"dot",dotActiveClass:"dot-active"},debug:!0,timerInterval:2e3}),((e=100)=>{const t=document.querySelector(".calc-block"),a=t.querySelector("select"),l=t.querySelector(".calc-square"),r=t.querySelector(".calc-count"),s=t.querySelector(".calc-day"),n=t.querySelector("#total");t.addEventListener("input",(t=>{t.target!==a&&t.target!==l&&t.target!==r&&t.target!==s||(()=>{if(!a.selectedIndex||!l.value)return void(n.textContent=0);"0"===s.value&&(s.value="");const t=+a.options[a.selectedIndex].value,c=+l.value;console.log();let o=1,i=1;r.value>1&&(o+=+r.value/10),s.value&&s.value<5?i=2:s.value&&s.value<10&&(i=1.5);let u=e*t*c*o*i;n.textContent=Math.round(u)})()}))})(100)})();