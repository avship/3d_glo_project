(()=>{"use strict";function e({timing:e,draw:t,duration:a}){let r=performance.now();requestAnimationFrame((function l(s){let n=(s-r)/a;n>1&&(n=1);let o=e(n);t(o),n<1&&requestAnimationFrame(l)}))}const t=({formId:e,someElem:t=[]})=>{const a=document.querySelector(`#${e}`),r=document.createElement("div"),l=e=>{let t=!0;return 11!=e.value.trim().replace(/[^\d]/g,"").length&&(t=!1),t},s=e=>{let t=!0;return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(e.value).toLowerCase())&&""!==e.value?e.classList.remove("error"):(e.classList.add("error"),t=!1),t},n=e=>{let t=!0;return e.value.length<2&&(e.classList.add("error"),t=!1),e.value.length>=2&&e.classList.remove("error"),t},o=e=>{"user_name"!==e.getAttribute("name")||e.classList.contains("not-sent")||n(e),"user_email"!==e.getAttribute("name")||e.classList.contains("not-sent")||s(e),"user_phone"!==e.getAttribute("name")||e.classList.contains("not-sent")||l(e)};try{if(!a)throw new Error("Вернииите формту на место, пожААААААлуйста!!!");a.querySelectorAll("input").forEach((e=>{e.classList.add("not-sent")})),a.addEventListener("input",(e=>{e.target.value=e.target.value.trim(),o(e.target)})),a.addEventListener("submit",(e=>{e.preventDefault(),a.querySelectorAll("input").forEach((e=>{e.classList.remove("not-sent"),o(e)}));let c=!0;a.querySelectorAll("input").forEach(((e,t)=>{e.value=e.value.trim(),e.classList.contains("error")&&(c=!1),""===e.value&&"user_message"!==e.getAttribute("name")&&(e.classList.add("error"),c=!1)})),c&&((()=>{const e=a.querySelectorAll("input"),o=new FormData(a),c={};var i;r.style.color="#FFF",r.textContent="Загрузка...",a.append(r),o.forEach(((e,t)=>{""!==e.trim()&&(c[t]=e)})),t.forEach((e=>{const t=document.getElementById(e.id);t&&("block"===e.type&&""!==t.textContent.trim()&&"0"!==t.textContent.trim()&&(c[e.id]=t.textContent.trim()),"input"===e.type&&""!==t.value.trim()&&"0"!==t.value.trim()&&(c[e.id]=t.value.trim()))})),(e=>{let t=!0;const r=a.querySelector('input[name="user_name"]'),o=a.querySelector('input[name="user_email"]'),c=a.querySelector('input[name="user_phone"]');return n(r)&&s(o)&&l(c)||(t=!1),t})()&&(i=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{console.log(t),e.forEach((e=>{e.value=""})),a.closest(".popup")&&(r.style.color="#FFF"),r.textContent="Спасибо, наш менеджер встретится с вами",setTimeout((()=>{r.textContent=""}),4e3)})).catch((e=>{a.closest(".popup")&&(r.style.color="#FFF"),r.textContent="Ошибка...",setTimeout((()=>{r.textContent=""}),3e3)}))})(),a.querySelectorAll("input").forEach((e=>{e.classList.contains("error")&&(e.value="")})),a.closest(".popup")&&setTimeout((()=>{a.closest(".popup").style.display="none"}),3e3))}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l=null;const s=e=>{const{hours:s,minutes:n,seconds:o}=(e=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(e);+s+ +n+ +o<0?clearInterval(l):(t.textContent=String(s).padStart(2,"0"),a.textContent=String(n).padStart(2,"0"),r.textContent=String(o).padStart(2,"0"))};s(e),l=setInterval(s,1e3,e)})("7 august 2022"),(()=>{const t=document.querySelector("menu"),a=t=>{const a=t.getBoundingClientRect().top;console.log(a);const r=a/1e3;console.log(r),e({duration:1e3,timing:e=>e,draw(e){document.documentElement.scrollBy(0,r),document.documentElement.scrollTop=a*e,console.log(document.documentElement.scrollTop,a)}})};document.body.addEventListener("click",(e=>{(e=>{e.target.closest(".close-btn")||e.target.closest(".menu")?(e.preventDefault(),t.classList.toggle("active-menu")):e.target.closest("menu")&&"A"===e.target.tagName?(e=>{if(e.preventDefault(),t.classList.toggle("active-menu"),"A"===e.path[0].tagName){const t=e.target.getAttribute("href"),r=document.querySelector(t);a(r)}})(e):e.target.closest("#next_section")?(e.preventDefault(),t.classList.contains("active-menu")&&t.classList.remove("active-menu"),a(e.target.closest("#next_section"))):!e.target.closest("menu")&&t.classList.contains("active-menu")&&t.classList.remove("active-menu")})(e)}))})(),(()=>{const t=document.querySelector(".popup"),a=document.querySelectorAll(".popup-btn"),r=(t.querySelector(".popup-close"),t.querySelector(".popup-content"));a.forEach((a=>a.addEventListener("click",(()=>{if(r.style.top="-100%",t.style.display="block",document.documentElement.clientWidth>=768){const t=parseInt(r.style.top);e({duration:1e3,timing:e=>e,draw(e){r.style.top=`${t+(Math.abs(t)+30)*e}%`}})}else r.style.top="30%"})))),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.closest(".popup-close")||(t.style.display="none",document.querySelectorAll(".popup input").forEach((e=>{e.classList.remove("error")})))}))})(),(()=>{const e=e=>{e.target.value=e.target.value.replace(/\D+/,"")},t=e=>{e.target.value=e.target.value.replace(/[^А-Яа-яёЁ \-]/,"")},a=e=>{e.target.value=e.target.value.replace(/[^\w@\.\-\_\!\~\*]/,"")},r=e=>{e.target.value=e.target.value.replace(/[^\d\-\(\)\+]/,"")},l=document.querySelectorAll(".calc-block input"),s=document.querySelector("#form2-message"),n=document.querySelectorAll(".form-email"),o=document.querySelectorAll(".form-phone");document.querySelectorAll('input[placeholder="Ваше имя"]').forEach((e=>{e.addEventListener("input",(e=>{t(e),e.target.value=e.target.value.split(" ").map((e=>e.slice(0,1).toUpperCase()+e.slice(1))).join(" ")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.trim(),e.target.value=e.target.value.replace(/[\- ]+$/g,""),e.target.value=e.target.value.replace(/^[\- ]+/g,""),e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.replace(/\.+/g,"."),e.target.value=e.target.value.replace(/ +/g," ")}))})),l.forEach((t=>{t.addEventListener("input",e)})),s.addEventListener("input",t),s.addEventListener("blur",(e=>{t(e),e.target.value=e.target.value.trim(),e.target.value=e.target.value.replace(/ +/g," "),e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1)})),n.forEach((e=>{e.addEventListener("input",a),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\-+$/g,""),e.target.value=e.target.value.replace(/^\-+/g,""),e.target.value=e.target.value.replace(/@+/g,"@"),e.target.value=e.target.value.replace(/\.+/g,".")}))})),o.forEach((e=>{e.addEventListener("input",r),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.replace(/\(+/g,"("),e.target.value=e.target.value.replace(/\)+/g,")"),e.target.value=e.target.value.replace(/\++/g,"+"),e.target.value=e.target.value.replace(/\-+$/g,""),e.target.value=e.target.value.replace(/^\-+/g,"")}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelectorAll(".service-header-tab");document.querySelector(".service-header").addEventListener("click",(a=>{if(a.target.closest(".service-header-tab")){const r=a.target.closest(".service-header-tab");t.forEach(((t,a)=>{t===r?(t.classList.add("active"),e[a].classList.remove("d-none")):(t.classList.remove("active"),e[a].classList.add("d-none"))}))}}))})(),(e=>{let{sliderClass:t=null,sliderItemsClass:a=null,sliderItemsClassActive:r="slide-active",arrows:l=!1,arrowLeftClass:s="slider-arrow-left",arrowRightClass:n="slider-arrow-rught",dots:o=!1,dotsParams:{dotContainer:c="dot-container",dotItemClass:i="item-dot",dotActiveClass:u="active-dot"}={},debug:d=!1,timerInterval:g=2e3}=e;const v=[];if(t||v.push("Не указан класс контейнера слайдера"),a||v.push("Не указано класс элемента слайдера"),v.length)return void(d&&console.log("Ошибки слайдера",v));g=isNaN(parseInt(g))?2e3:parseInt(g),"."!==t.slice(0,1)&&(t=`.${t}`),"."!==a.slice(0,1)&&(a=`.${a}`),"."!==c.slice(0,1)&&(c=`.${c}`),"."!==i.slice(0,1)&&(i=`.${i}`);const m=document.querySelector(t);null===m&&v.push("В вёрстке отсутствует дом элемент, где будет располагаться слайдер");const p=document.querySelectorAll(a);if(p.length||v.push("Нет ни одного слайда на странице"),v.length)return void(d&&console.log("Ошибки слайдере",v));let h,f;var y;o&&(h=document.createElement("ul"),h.classList.add(c.slice(1)),m.appendChild(h),y=h,p.forEach(((e,t)=>{const a=document.createElement("li");a.classList.add(i.slice(1)),0===t&&a.classList.add("dot-active"),y.appendChild(a)})),f=document.querySelectorAll(i)),f&&f.length||(o=!1),l&&[s,n].forEach(((e,t)=>{const a=document.createElement("a");e.split(" ").forEach((e=>{(e=e.trim())&&("."===e.slice(0,1)&&(e=e.slice(1)),a.classList.add(e)),a.classList.add("slider-btn-handler"),0===t?a.classList.add("slider-btn-handler-prev"):a.classList.add("slider-btn-handler-next")})),m.appendChild(a)}));let L,E=0;const b=(e,t,a)=>{e[t].classList.remove(a)},S=(e,t,a)=>{e[t].classList.add(a)},C=()=>{b(p,E,r),o&&b(f,E,u),E++,E>=p.length&&(E=0),S(p,E,r),o&&S(f,E,u)},q=()=>{L=setInterval(C,g)};q(),m.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(i)&&(b(p,E,r),b(f,E,u),f.forEach(((t,a)=>{t===e.target&&(E=a)})),S(p,E,r),S(f,E,u)),(e.target.matches(".slider-btn-handler-next")||e.target.matches(".slider-btn-handler-prev"))&&(l&&b(p,E,r),o&&b(f,E,u),e.target.matches(".slider-btn-handler-next")&&(E++,E>=p.length&&(E=0)),e.target.matches(".slider-btn-handler-prev")&&(E--,E<0&&(E=p.length-1)),e.target.classList.contains(i)&&f.forEach(((t,a)=>{t===e.target&&(E=a)})),l&&S(p,E,r),o&&S(f,E,u))})),m.addEventListener("mouseenter",(e=>{(e.target.classList.contains("slider-btn-handler-next")||e.target.classList.contains("slider-btn-handler-prev")||e.target.classList.contains(i.slice(1)))&&clearInterval(L)}),!0),m.addEventListener("mouseleave",(e=>{(e.target.classList.contains("slider-btn-handler-next")||e.target.classList.contains(i.slice(1))||e.target.classList.contains("slider-btn-handler-prev"))&&q()}),!0)})({sliderClass:"portfolio-content",sliderItemsClass:"portfolio-item",sliderItemsClassActive:"portfolio-item-active",arrows:!0,arrowLeftClass:"portfolio-btn prev",arrowRightClass:"portfolio-btn next",dots:!0,dotsParams:{dotContainer:"portfolio-dots",dotItemClass:"dot",dotActiveClass:"dot-active"},debug:!0,timerInterval:2e3}),((t=100)=>{const a=document.querySelector(".calc-block"),r=a.querySelector("select"),l=a.querySelector(".calc-square"),s=a.querySelector(".calc-count"),n=a.querySelector(".calc-day"),o=a.querySelector("#total");a.addEventListener("input",(a=>{a.target!==r&&a.target!==l&&a.target!==s&&a.target!==n||(()=>{if(!r.selectedIndex||!l.value)return void(o.textContent=0);"0"===n.value&&(n.value="");const a=+r.options[r.selectedIndex].value,c=+l.value;console.log();let i=1,u=1;s.value>1&&(i+=+s.value/10),n.value&&n.value<5?u=2:n.value&&n.value<10&&(u=1.5),console.log(u);let d=t*a*c*i*u;const g=+o.textContent,v=d;g!=d&&e({duration:600,timing:e=>e,draw(e){o.textContent=Math.round(g+e*(v-g))}}),o.textContent=Math.round(d)})()}))})(100),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),function(e,t="+7 (__) --"){const a=document.querySelectorAll(e);function r(e){const a=e.keyCode,r=t,l=r.replace(/\D/g,""),s=this.value.replace(/\D/g,"");console.log(r);let n=0,o=r.replace(/[_\d]/g,(function(e){return n<s.length?s.charAt(n++)||l.charAt(n):e}));n=o.indexOf("_"),-1!=n&&(o=o.slice(0,n));let c=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||a>47&&a<58)&&(this.value=o),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of a)e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}('[type="tel"]',"+7 (___) ___-__-__")})();