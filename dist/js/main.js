(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),a=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds");let l=null;const c=e=>{const{hours:c,minutes:o,seconds:n}=(e=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})(e);+c+ +o+ +n<0?clearInterval(l):(t.textContent=String(c).padStart(2,"0"),a.textContent=String(o).padStart(2,"0"),r.textContent=String(n).padStart(2,"0"))};c(e),l=setInterval(c,1e3,e)})("31 july 2022"),(()=>{const e=document.querySelector("menu"),t=e=>{e.scrollIntoView({block:"start",behavior:"smooth"})};document.body.addEventListener("click",(a=>{(a=>{a.target.closest(".close-btn")||a.target.closest(".menu")?e.classList.toggle("active-menu"):a.target.closest("menu")&&"A"===a.target.tagName?(a=>{if(a.preventDefault(),e.classList.toggle("active-menu"),"A"===a.path[0].tagName){const e=a.target.getAttribute("href"),r=document.querySelector(e);t(r)}})(a):a.target.closest("#next_section")?(a.preventDefault(),t(a.target.closest("#next_section"))):!a.target.closest("menu")&&e.classList.contains("active-menu")&&e.classList.remove("active-menu")})(a)}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),a=(e.querySelector(".popup-close"),e.querySelector(".popup-content"));let r;const l=()=>{r=requestAnimationFrame(l),parseInt(a.style.top)<20?a.style.top=`${parseInt(a.style.top)+2}%`:cancelAnimationFrame(r)};t.forEach((t=>t.addEventListener("click",(()=>{a.style.top="-100%",e.style.display="block",document.documentElement.clientWidth>=768?l():a.style.top="30%"})))),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.closest(".popup-close")||(e.style.display="none")}))})(),(()=>{const e=e=>{e.target.value=e.target.value.replace(/\D+/,"")},t=e=>{console.log(e.target.value),e.target.value=e.target.value.replace(/[^А-Яа-яёЁ \-]/,""),console.log(e.target.value)},a=e=>{e.target.value=e.target.value.replace(/[^\w@\.\-\_\!\~\*]/,"")},r=e=>{e.target.value=e.target.value.replace(/[^\d\-\(\)\+]/,"")},l=document.querySelectorAll(".calc-block input"),c=document.querySelector("#form2-message"),o=document.querySelectorAll(".form-email"),n=document.querySelectorAll(".form-phone");document.querySelectorAll('input[placeholder="Ваше имя"]').forEach((e=>{e.addEventListener("input",(e=>{t(e),e.target.value=e.target.value.split(" ").map((e=>e.slice(0,1).toUpperCase()+e.slice(1))).join(" ")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.trim(),e.target.value=e.target.value.replace(/[\- ]+$/g,""),e.target.value=e.target.value.replace(/^[\- ]+/g,""),e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.replace(/\.+/g,"."),e.target.value=e.target.value.replace(/ +/g," ")}))})),l.forEach((t=>{t.addEventListener("input",e)})),c.addEventListener("input",t),c.addEventListener("blur",(e=>{t(e),e.target.value=e.target.value.trim(),e.target.value=e.target.value.replace(/ +/g," "),e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.slice(0,1).toUpperCase()+e.target.value.slice(1)})),o.forEach((e=>{e.addEventListener("input",a),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\-+$/g,""),e.target.value=e.target.value.replace(/^\-+/g,""),e.target.value=e.target.value.replace(/@+/g,"@"),e.target.value=e.target.value.replace(/\.+/g,".")}))})),n.forEach((e=>{e.addEventListener("input",r),e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/\-+/g,"-"),e.target.value=e.target.value.replace(/\(+/g,"("),e.target.value=e.target.value.replace(/\)+/g,")"),e.target.value=e.target.value.replace(/\++/g,"+"),e.target.value=e.target.value.replace(/\-+$/g,""),e.target.value=e.target.value.replace(/^\-+/g,"")}))}))})(),(()=>{const e=document.querySelectorAll(".service-tab"),t=document.querySelectorAll(".service-header-tab");document.querySelector(".service-header").addEventListener("click",(a=>{if(a.target.closest(".service-header-tab")){const r=a.target.closest(".service-header-tab");t.forEach(((t,a)=>{t===r?(t.classList.add("active"),e[a].classList.remove("d-none")):(t.classList.remove("active"),e[a].classList.add("d-none"))}))}}))})(),console.log("slider"),document.querySelector(".portfolio-content"),document.querySelectorAll(".portfolio-item")})();