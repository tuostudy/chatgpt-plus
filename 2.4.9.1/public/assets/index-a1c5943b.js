import{d as b,I as E,ae as B,r as I,b as c,m as S,p as C,e as L,cS as D,Z as F,c as h,q as g,u as r,a as i,v as M,cT as T,j as W,o as _}from"./index-086eae10.js";const A={class:"w-full h-full relative"},N={class:"loading"},U=W('<span class="loading-text-words">内</span><span class="loading-text-words">容</span><span class="loading-text-words">正</span><span class="loading-text-words">在</span><span class="loading-text-words">加</span><span class="loading-text-words">载</span><span class="loading-text-words">中</span>',7),V=[U],j=["src"],z=b({__name:"index",setup(G){const v=E(),l=B(),n=I(!1),u=c(()=>l.iframeUrl),o=S(),p=c(()=>o.theme==="dark");function w(){const e=document.getElementById("iframe");e!=null&&e.addEventListener||e==null||e.attachEvent("onload",d),e==null||e.addEventListener("load",d,!0)}const m=c(()=>o.theme);C(m,e=>{s({type:"theme",data:e})}),L(()=>{if(!u.value)return v.push("/");n.value=!0,w(),window.addEventListener("message",f)});async function f(e){const{type:t,data:a}=e.data;t==="theme"&&o.setTheme(a==="dark"?"dark":"light"),t==="chat"&&x(a)}function x(e){D({prompt:e}).then(t=>{const{code:a,data:k}=t;a===200&&s({type:"chat",data:y(k)})})}function y(e){const t=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;return e.replace(t,"")}function s(e){document.getElementById("iframe").contentWindow.postMessage(e,"*")}function d(){s({type:"theme",data:m.value});const e=T();e&&s({type:"token",data:e}),n.value=!1}return F(()=>{l.updateIframeUrl("");const e=document.getElementById("iframe");e==null||e.removeEventListener("load",d),window.removeEventListener("message",f)}),(e,t)=>(_(),h("div",A,[n.value?(_(),h("div",{key:0,class:g(["main-container absolute left-0 right-0 bottom-0 top-0 backdrop-blur",[r(p)?"dark:bg-black/20":"bg-white/80"]])},[i("div",N,[i("div",{class:g(["loading-text ",r(p)?"text-[#fff]":"text-[#000]"]),id:"loading-text"},V,2)])],2)):M("",!0),i("iframe",{id:"iframe",src:r(u),style:{width:"100%",height:"100%",border:"none"}},null,8,j)]))}});export{z as default};
