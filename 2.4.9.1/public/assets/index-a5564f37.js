import{d as O,o,c as r,j as ee,b as x,k as te,l as se,m as ae,r as m,n as le,p as ne,e as oe,f as n,u as a,a as e,t as k,w as u,q as h,F as g,s as b,v as re,x as ie,y as ce,i as ue,z as de,h as pe,A as me,L as he,B as S,C as q,D as j,E as fe,G as ve}from"./index-bfa3fd30.js";import{_ as _e}from"./titleBar.vue_vue_type_script_setup_true_lang-6342e6a3.js";import{_ as V}from"./index.vue_vue_type_style_index_0_lang-1c1db598.js";import{N as xe}from"./InputGroup-73d19719.js";import"./index-c94da121.js";const ke={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ge=ee('<path d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></ellipse><path d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',5),be=[ge],we=O({name:"ImagesOutline",render:function(D,N){return o(),r("svg",ke,be)}}),ye={class:"flex my-5"},Le=e("p",{class:"mx-2 text-[#707384] select-none flex-shrink-0"}," Prompt示例： ",-1),Ce={class:"text-[#707384]"},De=e("h4",{class:"text-base mb-2"}," 参数设置 ",-1),Ne={class:"flex items-center mt-5"},Ie=e("span",{class:"mr-2 inline-block w-16 flex-shrink-0"},"图片尺寸:",-1),Me=["onClick"],$e={class:"flex items-center mt-5"},Be=e("span",{class:"mr-2 inline-block w-16 flex-shrink-0"},"图片质量:",-1),Ee=["onClick"],ze=e("div",{class:"flex mt-5"},[e("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 修饰词参考 "),e("p",{class:"text-[#707384]"}," 您可参考或选用下列各类修饰词丰富您的输入文本，尝试生成更加多样的图像，更多修饰词可参考 Prompt指南 或 自由输入 探索大模型作画更多未知能力 ")],-1),Ae={class:"flex mt-5"},Pe=e("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 图像类型 ",-1),Se=["onClick"],qe={key:0,class:"mt-8 pb-10"},je=e("div",{class:"flex justify-center"}," ----------- 正在生成中、图片越大数量越多所需时间越多、预计25S ----------- ",-1),Ve={class:"flex flex-wrap mt-8"},Oe={key:0,class:"min-h-screen"},Te={key:0,class:"min-h-screen"},Ke=O({__name:"index",setup(T){const D=x(()=>I.theme),N=te(),U=x(()=>D.value==="dark"?"#fff":"#000"),{isMobile:d}=se(),I=ae(),F=x(()=>N.isLogin),f=m(0),i=m(!1),w=le(),y=m([]),L=m([]),G=x(()=>I.theme==="dark");ne(F,async(s,c)=>{s&&!c&&C()});const M=["超级逼真的未来世界，真实照片，虚幻引擎","帅哥，二次元，赛博朋克风格，精致脸庞","兔子，可爱，高质量，高品质"],W=[{label:"1024x1024",value:"1024x1024"},{label:"1024x1792",value:"1024x1792"},{label:"1792x1024",value:"1792x1024"}],H=[{label:"标准(2积分)",value:"standard"},{label:"优质(4积分)",value:"hd"}],$=["古风","二次元","写实照片","油画","水彩画","油墨画","黑白雕版画","雕塑","3D模型","手绘草图","炭笔画","极简线条画","电影质感","机械感"],l=m({prompt:"",n:1,size:"1024x1024",quality:"standard"});function J(){f.value=f.value+1>=M.length?0:f.value+1}async function C(){const s=await ce({model:"DALL-E2"});s.success&&(y.value=A(s.data))}async function B(){const s=await ie({size:999,rec:1,model:"DALL-E2"});if(!s.success)return w.error(s.message);L.value=A(s.data.rows)}function E(){}function z(s){l.value.prompt=s}function A(s){if(!s)return[];const c=[];return s.forEach(t=>{const{id:p,fileInfo:v,prompt:P,thumbImg:R}=t;let _=null;if(typeof v=="string")try{_=JSON.parse(v)}catch{_={}}else _=v||{};const{width:X,height:Y,cosUrl:Z}=_;c.push({id:p,prompt:P,fullPrompt:P,fileInfo:{thumbImg:R,width:X,height:Y,cosUrl:Z}})}),c.filter(t=>t.fileInfo&&t.fileInfo.width)}async function K(){if(!l.value.prompt)return w.error("请输入您想要生成的图片描述信息！");try{i.value=!0,await ve(l.value),w.success("生成图片成完成、前往我的生成查看图片！"),await C(),i.value=!1}catch{i.value=!1}}function Q(s){s==="mine"&&C(),s==="all"&&B()}return oe(()=>{B()}),(s,c)=>(o(),r("div",{class:h(["main min-h-screen bg-center dark:bg-[#2F2E34]",[a(G)?"darkBg":"lightBg",a(d)?"px-3":"px-10"]])},[n(a(_e),{title:"DALL-E绘画",des:"基于DALL-E的绘画、速度较快、同步等待到结束后在我的绘画中可以看到结果！",padding:a(d)?2:20},null,8,["padding"]),e("div",{class:h(a(d)?["px-2"]:["px-20"])},[e("div",ye,[e("b",{class:"text-primary cursor-pointer select-none flex-shrink-0",onClick:J},"换示例"),Le,e("p",Ce,k(M[f.value]),1)]),n(a(xe),null,{default:u(()=>[n(a(ue),{value:l.value.prompt,"onUpdate:value":c[0]||(c[0]=t=>l.value.prompt=t),disabled:i.value,clearable:"",placeholder:"请输入您想要生成的图片描述信息、可以参考上面的示例文字、我们将会对其转为英文绘画、请知悉！"},null,8,["value","disabled"]),n(a(de),{type:"success",loading:i.value,disabled:i.value,onClick:K},{icon:u(()=>[n(a(pe),null,{default:u(()=>[n(a(we))]),_:1})]),default:u(()=>[me(" 生成图片 ")]),_:1},8,["loading","disabled"])]),_:1}),e("div",{class:h(["mt-5 py-4 bg-[#e7eaf380] dark:bg-[#2c2c32] rounded-lg",a(d)?"px-0":"px-4"])},[De,e("div",Ne,[Ie,e("div",null,[(o(),r(g,null,b(W,t=>e("span",{key:t.value,class:h(["rounded ml-2 select-none cursor-pointer inline-block mb-2",[t.value===l.value.size?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"],a(d)?"px-1.5 py-0.5":"px-3 py-1"]]),onClick:p=>l.value.size=t.value},k(t.label),11,Me)),64))])]),e("div",$e,[Be,e("div",null,[(o(),r(g,null,b(H,t=>e("span",{key:t.value,class:h(["py-0.5 px-2.5 rounded ml-2 select-none cursor-pointer inline-block mb-2",t.value===l.value.quality?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"]]),onClick:p=>l.value.quality=t.value},k(t.label),11,Ee)),64))])]),ze,e("div",Ae,[Pe,e("div",null,[(o(),r(g,null,b($,(t,p)=>e("span",{key:t,class:"cursor-pointer hover:text-primary",onClick:v=>l.value.prompt+=l.value.prompt?`，${t}`:t},k(`${t} ${p+1===$.length?"":"、"}`),9,Se)),64))])])],2),i.value?(o(),r("div",qe,[je,e("div",Ve,[(o(!0),r(g,null,b(l.value.n,t=>(o(),r("div",{class:"w-44 h-44 border rounded-md relative ml-4 mt-4",key:t},[n(he,{"text-color":a(U),words:["图","片","绘","制","中"]},null,8,["text-color"])]))),128))])])):re("",!0),n(a(fe),{type:"line",animated:"",class:"mt-5","onUpdate:value":Q},{default:u(()=>[n(a(S),{name:"all",tab:"公共生成"},{default:u(()=>[L.value.length?(o(),r("div",Oe,[n(V,{onLoadMore:E,usePropmpt:"",gap:8,preOrigin:"",onUsePropmptDraw:z,dataList:L.value,scaleWidth:50},null,8,["dataList"])])):(o(),q(a(j),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))]),_:1}),n(a(S),{name:"mine",tab:"我的生成"},{default:u(()=>[y.value.length?(o(),r("div",Te,[n(V,{onLoadMore:E,usePropmpt:"",gap:8,preOrigin:"",onUsePropmptDraw:z,dataList:y.value,scaleWidth:50},null,8,["dataList"])])):(o(),q(a(j),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))]),_:1})]),_:1})],2)],2))}});export{Ke as default};
