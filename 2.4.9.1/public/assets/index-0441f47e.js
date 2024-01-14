import{d as N,m as j,k as L,l as E,n as R,b,r as k,o as I,c as B,a as e,t as o,f as a,u as s,i as z,w as l,A as v,z as x,q as G,_ as g,F as H,s as q,bQ as Q,ab as S,e as Y,C as T,cU as K,E as W,B as D,cV as X,at as Z}from"./index-9fb4c050.js";import{N as ee}from"./Popconfirm-f7b33c6a.js";import{N as se}from"./Select-c10a6eb0.js";function te(){const _=new Date,r=_.getDate(),u=_.getMonth()+1;return`${_.getFullYear()}-${u}-${r}`}const ae={class:"p-4 space-y-5 min-h-[200px]"},ne={class:"space-y-6"},oe={class:"flex items-center space-x-4"},le={class:"flex-shrink-0 w-[100px]"},ie={class:"flex-1"},ce={class:"flex items-center space-x-4"},re={class:"flex-shrink-0 w-[100px]"},de={class:"w-[200px]"},ue={class:"flex-shrink-0 w-[100px]"},pe={class:"flex flex-wrap items-center gap-4"},fe={class:"flex items-center space-x-4"},me={class:"flex-shrink-0 w-[100px]"},_e={class:"flex flex-wrap items-center gap-4"},he={class:"flex items-center space-x-4"},ve={class:"flex-shrink-0 w-[100px]"},xe={class:"flex flex-wrap items-center gap-4"},ge=N({__name:"General",setup(_){const r=j(),u=L(),{isMobile:d}=E(),c=R(),f=b(()=>r.theme),p=b(()=>u.userInfo),m=k(p.value.avatar??""),C=k(p.value.username??""),y=k(!1),O=b({get(){return r.language},set(t){r.setLanguage(t)}}),A=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],F=[{label:"简体中文",key:"zh-CN",value:"zh-CN"}];async function U(t){try{y.value=!0;const n=await Q(t);if(y.value=!1,!n.success)return c.error(n.message);c.success(S("common.updateUserSuccess")),u.getUserInfo()}catch{y.value=!1}}function M(){const t=te(),n=localStorage.getItem("chatStorage")||"{}",i=JSON.stringify(JSON.parse(n),null,2),h=new Blob([i],{type:"application/json"}),w=URL.createObjectURL(h),$=document.createElement("a");$.href=w,$.download=`chat-store_${t}.json`,document.body.appendChild($),$.click(),document.body.removeChild($)}function J(t){const n=t.target;if(!n||!n.files)return;const i=n.files[0];if(!i)return;const h=new FileReader;h.onload=()=>{try{const w=JSON.parse(h.result);localStorage.setItem("chatStorage",JSON.stringify(w)),c.success(S("common.success")),location.reload()}catch{c.error(S("common.invalidFileFormat"))}},h.readAsText(i)}function P(){localStorage.removeItem("chatStorage"),location.reload()}function V(){const t=document.getElementById("fileInput");t&&t.click()}return(t,n)=>(I(),B("div",ae,[e("div",ne,[e("div",oe,[e("span",le,o(t.$t("setting.avatarLink")),1),e("div",ie,[a(s(z),{value:m.value,"onUpdate:value":n[0]||(n[0]=i=>m.value=i),placeholder:"请填写头像地址"},null,8,["value"])]),a(s(x),{size:"tiny",disabled:y.value,text:"",type:"primary",onClick:n[1]||(n[1]=i=>U({avatar:m.value}))},{default:l(()=>[v(o(t.$t("common.update")),1)]),_:1},8,["disabled"])]),e("div",ce,[e("span",re,o(t.$t("setting.name")),1),e("div",de,[a(s(z),{value:C.value,"onUpdate:value":n[2]||(n[2]=i=>C.value=i),placeholder:"请填写用户名"},null,8,["value"])]),a(s(x),{size:"tiny",disabled:y.value,text:"",type:"primary",onClick:n[3]||(n[3]=i=>U({username:C.value}))},{default:l(()=>[v(o(t.$t("common.update")),1)]),_:1},8,["disabled"])]),e("div",{class:G(["flex items-center space-x-4",s(d)&&"items-start"])},[e("span",ue,o(t.$t("setting.chatHistory")),1),e("div",pe,[a(s(x),{size:"small",onClick:M},{icon:l(()=>[a(s(g),{icon:"ri:download-2-fill"})]),default:l(()=>[v(" "+o(t.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:J},null,32),a(s(x),{size:"small",onClick:V},{icon:l(()=>[a(s(g),{icon:"ri:upload-2-fill"})]),default:l(()=>[v(" "+o(t.$t("common.import")),1)]),_:1}),a(s(ee),{placement:"bottom",onPositiveClick:P},{trigger:l(()=>[a(s(x),{size:"small"},{icon:l(()=>[a(s(g),{icon:"ri:close-circle-line"})]),default:l(()=>[v(" "+o(t.$t("common.clear")),1)]),_:1})]),default:l(()=>[v(" "+o(t.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",fe,[e("span",me,o(t.$t("setting.theme")),1),e("div",_e,[(I(),B(H,null,q(A,i=>a(s(x),{key:i.key,size:"small",type:i.key===s(f)?"primary":void 0,onClick:h=>s(r).setTheme(i.key)},{icon:l(()=>[a(s(g),{icon:i.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",he,[e("span",ve,o(t.$t("setting.language")),1),e("div",xe,[a(s(se),{style:{width:"140px"},value:s(O),options:F,onUpdateValue:n[4]||(n[4]=i=>s(r).setLanguage(i))},null,8,["value"])])])])]))}}),ye={class:"p-4 space-y-5 min-h-[200px]"},$e={class:"flex items-center space-x-4"},ke=e("span",{class:"flex-shrink-0 w-[100px]"},"用户邮箱",-1),we={class:"w-[200px]"},be={class:"flex items-center space-x-4"},Ie=e("span",{class:"flex-shrink-0 w-[100px]"},"用户姓名",-1),Ce={class:"w-[200px]"},Se={class:"flex items-center space-x-4"},Ne=e("span",{class:"flex-shrink-0 w-[100px]"},"问答余额",-1),Ue={class:"w-[200px]"},Be={class:"flex items-center space-x-4"},ze=e("span",{class:"flex-shrink-0 w-[100px]"},"绘画余额",-1),De={class:"w-[200px]"},Le={class:"flex items-center space-x-4"},Te=e("span",{class:"flex-shrink-0 w-[100px]"},"MJToken",-1),Oe={class:"w-[200px]"},Ae={class:"flex items-center space-x-4"},Fe=e("span",{class:"flex-shrink-0 w-[100px]"},"使用金额",-1),Me={class:"w-[200px]"},Je=N({__name:"Personal",setup(_){const r=L(),{userInfo:u,userBalance:d}=r,c=k(!1);Y(async()=>{f()});async function f(){try{c.value=!0,await r.getUserInfo(),c.value=!1}catch{c.value=!1}}return(p,m)=>(I(),T(s(K),{show:c.value},{default:l(()=>[e("div",ye,[e("div",$e,[ke,e("div",we,o(s(u).email||"--"),1)]),e("div",be,[Ie,e("div",Ce,o(s(u).username||"--"),1)]),e("div",Se,[Ne,e("div",Ue,o(s(d).usesLeft||"0")+" 积分 ",1)]),e("div",Be,[ze,e("div",De,o(s(d).paintCount||"0")+" 积分 ",1)]),e("div",Le,[Te,e("div",Oe,o(s(d).balance||"0")+" Token ",1)]),e("div",Ae,[Fe,e("div",Me,o(s(d).useTokens||"0")+" Token ",1)])])]),_:1},8,["show"]))}}),Pe={class:"ml-2"},Ve={class:"ml-2"},je={class:"min-h-[100px]"},He=N({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(_,{emit:r}){const u=_,d=k("personalInfo"),c=b({get(){return u.visible},set(f){r("update:visible",f)}});return(f,p)=>(I(),T(s(Z),{show:s(c),"onUpdate:show":p[1]||(p[1]=m=>X(c)?c.value=m:null),title:"个人中心","auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:l(()=>[e("div",null,[a(s(W),{value:d.value,"onUpdate:value":p[0]||(p[0]=m=>d.value=m),type:"line",animated:""},{default:l(()=>[a(s(D),{name:"personalInfo",tab:"personalInfo"},{tab:l(()=>[a(s(g),{class:"text-lg",icon:"ri:file-user-line"}),e("span",Pe,o(f.$t("setting.personalInfo")),1)]),default:l(()=>[a(Je)]),_:1}),a(s(D),{name:"General",tab:"General"},{tab:l(()=>[a(s(g),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",Ve,o(f.$t("setting.general")),1)]),default:l(()=>[e("div",je,[a(ge)])]),_:1})]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{He as default};
