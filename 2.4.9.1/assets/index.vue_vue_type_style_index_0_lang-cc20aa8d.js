import{d as se,k as ne,H as re,n as ae,r as u,b as I,I as ie,p as O,e as le,J as ce,c as _,a as s,K as x,F as ue,s as de,o as d,f as w,w as p,u as i,T as pe,t as he,C as L,M as $,_ as P,O as B,v as y,P as fe}from"./index-b012afa9.js";import{c as ve}from"./index-c94da121.js";function ge(a,v){let n,f;return function(...b){f=b,n||(n=setTimeout(()=>{a.apply(this,f),n=null},v))}}const me={class:"min-h-full overflow-hidden flex flex-col"},_e={class:"flex-1 min-h-full p-4 relative"},xe=["id"],we=["id","src","onLoad","onError","onClick"],ye={class:"menu p-2 text-[#cbd5e1]"},be={class:"prompt"},ke={class:"flex justify-end items-end space-x-2"},Ce=["onClick"],Ie={class:"text-sm dark:text-slate-400"},Le=s("span",null,"画同款",-1),$e=["onClick"],Pe={class:"text-sm dark:text-slate-400"},Be=s("span",null,"使用当前画同款",-1),Me=["onClick"],Ee={class:"text-sm dark:text-slate-400"},We=s("span",null,"复制提示词",-1),De=s("div",{id:"footer",class:"w-full absolute bottom-[350px]"},null,-1),Ne=se({__name:"index",props:{dataList:null,scaleWidth:null,isDrawLike:{type:Boolean},usePropmpt:{type:Boolean},copyPropmpt:{type:Boolean},gap:{default:5},preOrigin:{type:Boolean}},emits:["loadMore","usePropmptDraw"],setup(a,{emit:v}){var N;const n=a,f=ne(),M=(N=re())==null?void 0:N.appContext.config.globalProperties.$viewerApi,b=ae(),E=u({}),W=u(0),l=u(160),h=u(0),k=u([]),C=u(null),D=u(0),S=I(()=>f.isLogin),H=I(()=>n.scaleWidth?Number(n.scaleWidth)*2+n.gap+150:150),A=ie();function U(){F(),J();const t=h.value,o=l.value,e=[];n.dataList.forEach((c,r)=>{const{width:Z,height:ee}=c.fileInfo,te=o/Z,R=ee*te+n.gap+W.value,m=E.value[c.id];if(e.length<t)m.style.top="0px",m.style.left=`${(o+n.gap)*r}px`,e.push(R);else{const T=Math.min.apply(null,e),z=e.findIndex(oe=>oe===T);m.style.top=`${T+0}px`,m.style.left=`${z*(l.value+n.gap)}px`,e[z]+=R}}),D.value=Math.max(...e)+100}function V(t,o){t&&o&&(E.value[o.id]=t)}function F(){const{showName:t=0,showOther:o=0}={};W.value=[t,o].filter(e=>e).length*15}O(()=>n.scaleWidth,t=>{g()}),O(()=>n.dataList,t=>{t&&fe(()=>{g()})},{immediate:!0});function J(){if(!C.value)return;const t=C.value.clientWidth;h.value=Math.floor(t/H.value);const o=t-h.value*H.value,e=(h.value-1)*n.gap;o-e<0&&(h.value-=1),l.value=Math.floor((t-e)/h.value)}function K(t,o){k.value.push(o.id)}function q(t,o){k.value.push(o.id)}function G(t){if(!S.value)return f.setLoginDialog(!0);const{prompt:o}=t;ve({text:o}),b.success("复制prompt成功")}function Q(t){A.push(`/midjourney?mjId=${t.id}`)}function X(t){const{prompt:o}=t;v("usePropmptDraw",o)}function Y(t){const{fileInfo:o}=t,{cosUrl:e}=o;M({options:{},images:[e]})}const j=I(()=>t=>{const{fileInfo:o}=t,{width:e,height:c}=o;return c/(e/l.value)}),g=ge(function(){U()},200);return le(async()=>{window.addEventListener("resize",g);const t=document.getElementById("footer");new IntersectionObserver((e,c)=>{e.forEach(r=>{r.isIntersecting&&v("loadMore")})}).observe(t)}),ce(()=>{window.removeEventListener("resize",g)}),(t,o)=>(d(),_("div",me,[s("div",_e,[s("div",{id:"wapper",ref_key:"wapperRef",ref:C,class:"wapper",style:x({height:`${D.value}px`})},[(d(!0),_(ue,null,de(a.dataList,(e,c)=>(d(),_("div",{id:e.id,key:c,ref_for:!0,ref:r=>V(r,e),class:"wapper-item",style:x({width:`${l.value}px`})},[w(pe,{name:"img",css:!0},{default:p(()=>[s("img",{id:e.id,class:"item-file rounded-sm",style:x({width:`${l.value}px`,height:`${i(j)(e)}px`}),src:a.preOrigin?e.fileInfo.cosUrl:e.fileInfo.thumbImg,loading:"lazy",onLoad:r=>K(r,e),onError:r=>q(r,e),onClick:r=>Y(e)},null,44,we)]),_:2},1024),s("div",ye,[s("div",be,he(e.fullPrompt),1),s("div",ke,[a.isDrawLike?(d(),L(i(B),{key:0,trigger:"hover"},{trigger:p(()=>[s("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:$(r=>Q(e),["stop"])},[s("span",Ie,[w(i(P),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,Ce)]),default:p(()=>[Le]),_:2},1024)):y("",!0),a.usePropmpt?(d(),L(i(B),{key:1,trigger:"hover"},{trigger:p(()=>[s("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:$(r=>X(e),["stop"])},[s("span",Pe,[w(i(P),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,$e)]),default:p(()=>[Be]),_:2},1024)):y("",!0),a.copyPropmpt?(d(),L(i(B),{key:2,trigger:"hover"},{trigger:p(()=>[s("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:$(r=>G(e),["stop"])},[s("span",Ee,[w(i(P),{icon:"tabler:copy",class:"text-sm"})])],8,Me)]),default:p(()=>[We]),_:2},1024)):y("",!0)])]),k.value.includes(e.id)?y("",!0):(d(),_("div",{key:0,class:"item-loading",style:x({width:`${l.value}px`,height:`${i(j)(e)}px`})},null,4))],12,xe))),128)),De],4)])]))}});export{Ne as _};
