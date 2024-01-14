import{N as ce,_ as pe}from"./index.vue_vue_type_script_setup_true_lang-cca2fff4.js";import{d as z,I as G,o as p,c as w,a as n,u as e,f as a,_ as g,ap as fe,r as d,b as y,l as H,n as me,e as ge,i as I,w as s,z as x,A as m,U as E,F as O,s as ve,t as N,C as $,M as A,v as q,h as _e,aq as be,ar as he,as as _,S as xe,at as we,au as ye,av as ke,aw as Ce,W as Ie,ax as Ae,ay as Ne,m as $e,q as Q,az as qe,ao as ze}from"./index-b012afa9.js";import{N as W}from"./Popconfirm-af802ba1.js";import{N as Me}from"./Select-2d22a366.js";import{N as De}from"./Switch-840b24b4.js";import"./NumberAnimation-10fdfae5.js";import"./LayoutSider-d980b753.js";const Re={class:"m-auto flex h-14 max-w-screen-4xl items-center justify-between px-4"},Pe={class:"flex min-w-0 flex-1 items-center space-x-2 overflow-hidden pr-2"},je=n("h2",{class:"text-base font-bold"}," 我的自定义工作台 ",-1),Le=n("div",{class:"flex items-center space-x-2"},null,-1),Ue=z({__name:"header",setup(M){const i=G();return(c,b)=>(p(),w("div",Re,[n("div",Pe,[n("button",{onClick:b[0]||(b[0]=f=>e(i).go(-1))},[a(e(g),{class:"text-xl",icon:"ri:arrow-left-s-line"})]),je]),Le]))}}),Fe={class:"w-full flex justify-center"},Se={class:"p-6 max-w-screen-4xl px-4 w-full"},Be={class:"flex flex-col space-y-3 justify-between sm:flex-row sm:space-y-0"},Ve={class:"sm:w-full md:w-[300px] sm:mb-3 2xl:w-[380px]"},Te={class:"mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5"},Ee=["onClick"],Oe={class:"w-full h-16 flex items-center mb-3"},Qe={class:"w-14 h-14 flex justify-center items-center rounded-md shadow-md mr-5 border border-[#00000014]"},We=["src"],Ge={class:"text-base font-bold mb-1 text-base text-[#333] dark:text-[#ffffff85]"},He={class:"w-full text-[#999999] text-xs min-h-[40px]"},Je={class:"w-full flex justify-between mt-3"},Ke={class:"p-5 bg-white rounded dark:bg-slate-800"},Xe={class:"font-bold text-base"},Ye={class:"pt-5 mt-6"},Ze=n("p",null,"Tips: 请知悉 ",-1),et=n("p",null,"选择共享提交之后审核状态将无法编辑应用",-1),tt=n("p",null,"审核通过的应用将会在应用广场公开展示",-1),at=n("p",null,"管理审核通过后将会赠送一定的站内额度奖励用户",-1),lt=n("p",null,"一旦提交处于审核中、您将不能再编辑此应用",-1),st=z({__name:"main",setup(M){const i=fe(),c=d(""),b=d(!1),f=d(!1),D=d([]),R=d(null),v=d(0),P=d(!1),J=y(()=>v.value===0?"创建我的个人应用":"更新我的个人应用"),K=y(()=>v.value===0?"创建专属应用":"更新个人应用"),j=y(()=>c.value?i.mineApps.filter(o=>o.appName.includes(c.value)):i.mineApps),L=d("/api/upload/file"),U=()=>({catId:null,name:null,preset:null,des:null,demoData:"",coverImg:"",public:!1}),r=d(U()),X={catId:[{required:!0,message:"请选择分类"}],name:[{required:!0,message:"请输入应用名称",trigger:"blur"},{min:2,max:30,message:"长度应为2到10个字符之间",trigger:"blur"}],preset:[{required:!0,message:"请输入预设prompt",trigger:"blur"},{min:6,max:1200,message:"长度应为6到1200个字符之间",trigger:"blur"}],des:[{required:!0,message:"请输入简短的应用描述",trigger:"blur"},{max:50,message:"长度应为0到50个字符之间",trigger:"blur"}],demoData:[{required:!0,message:"请输入示例数据、按回车换行表示新增一条",trigger:"blur"},{max:100,message:"长度应为0到100个字符之间",trigger:"blur"}],coverImg:[{required:!0,message:"请上传应用Logo",trigger:"change"}],public:[{required:!0,message:"请选择是否公开"}]};H();const h=me(),F=G(),S=d([]),B=d(null);function Y(o){c.value=o}async function Z(o){const l=await ye(),{modelMaps:t}=l.data;if(!t[1])return h.warning("管理员未配置特定应用模型、请联系管理员配置~");F.push({path:"/chat",query:{appId:o.appId}})}async function ee(o){o.loading=!0;try{const l=await ke({appId:o.appId});h.success(l.data),await i.queryMineApps(),o.loading=!1}catch{o.loading=!1}}async function V(){const o=await Ne();S.value=o.data.rows}async function te(o){const l=await Ce({id:o.appId});h.success(l.data),i.queryMineApps()}async function ae(o){if(!o.length)B.value=null;else{const l=o[0].file;B.value=l;const t=new FormData;t.append("file",l);const u=await Ie.post(L.value,t,{headers:{"Content-Type":"multipart/form-data"}});u.data.data?r.value.coverImg=u.data.data:h.error("上传图片失败、请检查后再试试吧！")}}function le({file:o,fileList:l}){return new Promise((t,u)=>{const{size:k,type:C}=o.file;if(C!=="image/png"&&C!=="image/jpg"&&C!=="image/jpeg")return h.error("只能上传png/jpg/jpeg格式的图片"),t(!1);if(k>300*1024)return h.error("图片大小不能超过300k"),t(!1);t(!0)})}ge(()=>{!j.value.length&&i.queryMineApps()});function se(){f.value=!0,V()}function oe(){}function ne(){T()}function T(){v.value=0,P.value=!1,r.value=U()}async function re(o){await V();const{catId:l,appName:t,preset:u,appDes:k,demoData:C,coverImg:ue,public:de}=o;Object.assign(r.value,{catId:l,name:t,preset:u,des:k,demoData:C,coverImg:ue,public:de}),v.value=o.appId,f.value=!0,P.value=o.public}function ie(){var o;(o=R.value)==null||o.validate(async l=>{if(!l){const t=r.value;v.value&&(t.appId=v.value);const u=await Ae(t),k=v.value?"个人应用修改完成！":"个人应用创建完成！";u.success&&h.success(k),i.queryMineApps(),T(),f.value=!1}})}return(o,l)=>(p(),w(O,null,[n("div",Fe,[n("div",Se,[n("div",Be,[n("div",Ve,[a(e(I),{modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=t=>c.value=t),type:"text",placeholder:`您一共收录了${e(j).length}个应用(关键词过滤)`,onInput:Y},null,8,["modelValue","placeholder"])]),a(e(E),null,{default:s(()=>[a(e(x),{onClick:se},{icon:s(()=>[a(e(g),{icon:"gridicons:create"})]),default:s(()=>[m(" 创建自定义应用 ")]),_:1}),a(e(x),{type:"primary",onClick:l[1]||(l[1]=t=>e(F).push("/app-store"))},{icon:s(()=>[a(e(g),{icon:"ri:add-line"})]),default:s(()=>[m(" 前往广场添加应用 ")]),_:1})]),_:1})]),n("div",Te,[(p(!0),w(O,null,ve(e(j),t=>(p(),w("div",{key:t.id,class:"card relative custom-card cursor-pointer border border-[#e0e0e0] dark:border-neutral-800 p-4 pt-2 border rounded-md flex flex-col justify-center items-center hover:bg-neutral-100 dark:hover:bg-[#24272e] select-none",onClick:u=>Z(t)},[n("div",Oe,[n("span",Qe,[n("img",{src:t.coverImg,class:"w-8 h-8 mb-1",alt:""},null,8,We)]),n("span",Ge,N(t.appName),1)]),n("p",He,N(t.appDes),1),n("div",Je,[t.appRole==="system"||t.public?(p(),$(e(W),{key:0,placement:"bottom",onPositiveClick:A(u=>ee(t),["stop"])},{trigger:s(()=>[a(e(x),{size:"tiny",ghost:"",loading:t.loading,onClick:l[2]||(l[2]=A(()=>{},["stop"]))},{icon:s(()=>[a(e(g),{icon:"clarity:favorite-line",class:"text-base"})]),default:s(()=>[m(" 取消收藏 ")]),_:2},1032,["loading"])]),default:s(()=>[m(" 确认取消收藏该应用吗？ ")]),_:2},1032,["onPositiveClick"])):q("",!0),a(e(E),null,{default:s(()=>[t.appRole==="user"&&!t.public?(p(),$(e(W),{key:0,placement:"bottom",onPositiveClick:A(u=>te(t),["stop"])},{trigger:s(()=>[a(e(x),{size:"tiny",ghost:"",loading:t.loading,onClick:l[3]||(l[3]=A(()=>{},["stop"]))},{icon:s(()=>[a(e(g),{icon:"mdi-light:delete",class:"text-base"})]),default:s(()=>[m(" 删除应用 ")]),_:2},1032,["loading"])]),default:s(()=>[m(" 确认移除创建的应用吗？ ")]),_:2},1032,["onPositiveClick"])):q("",!0),t.appRole==="user"&&!t.public?(p(),$(e(x),{key:1,size:"tiny",ghost:"",loading:t.loading,onClick:A(u=>re(t),["stop"])},{icon:s(()=>[a(e(g),{icon:"mdi-light:delete",class:"text-base"})]),default:s(()=>[m(" 编辑应用 ")]),_:2},1032,["loading","onClick"])):q("",!0)]),_:2},1024)]),a(e(g),{icon:"codicon:run-all",class:"run-icon text-xl text-[#5A91FC] absolute right-3 bottom-3"}),t.status===3?(p(),$(e(g),{key:0,icon:"icon-park-twotone:mark",class:"text-xl text-[#5A91FC] absolute right-3 top-3"})):q("",!0)],8,Ee))),128))])])]),a(e(we),{show:f.value,title:"创建",style:{width:"90%","max-width":"640px"},"mask-closable":!1,"on-after-enter":oe,"on-after-leave":ne},{default:s(()=>[n("div",Ke,[n("div",{class:"absolute top-4 left-5 cursor-pointer z-30",onClick:l[4]||(l[4]=t=>f.value=!1)},[n("span",Xe,N(e(K)),1)]),n("div",{class:"absolute top-3 right-3 cursor-pointer z-30",onClick:l[5]||(l[5]=t=>f.value=!1)},[a(e(_e),{size:"20",color:"#0e7a0d"},{default:s(()=>[a(e(be))]),_:1})]),n("div",Ye,[a(e(he),{ref_key:"formRef",ref:R,model:r.value,rules:X,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",style:{maxWidth:"640px"}},{default:s(()=>[a(e(_),{label:"应用分类",path:"catId"},{default:s(()=>[a(e(Me),{value:r.value.catId,"onUpdate:value":l[6]||(l[6]=t=>r.value.catId=t),clearable:"",size:"small","label-field":"name",placeholder:"请输入您的应用分类","value-field":"id",options:S.value},null,8,["value","options"])]),_:1}),a(e(_),{label:"应用名称",path:"name"},{default:s(()=>[a(e(I),{value:r.value.name,"onUpdate:value":l[7]||(l[7]=t=>r.value.name=t),placeholder:"请输入您的应用名称",type:"name",maxlength:30,"show-name-on":"click",tabindex:"0"},null,8,["value"])]),_:1}),a(e(_),{label:"预设指令",path:"preset"},{default:s(()=>[a(e(I),{value:r.value.preset,"onUpdate:value":l[8]||(l[8]=t=>r.value.preset=t),max:255,autosize:{minRows:3,maxRows:10},type:"textarea",placeholder:"请填写prompt预设指令（核心）"},null,8,["value"])]),_:1}),a(e(_),{label:"应用描述",path:"des"},{default:s(()=>[a(e(I),{value:r.value.des,"onUpdate:value":l[9]||(l[9]=t=>r.value.des=t),autosize:{minRows:3,maxRows:10},type:"textarea",placeholder:"请对你的应用做以简要的描述以便于大家认识它！"},null,8,["value"])]),_:1}),a(e(_),{label:"示例内容",path:"demoData"},{default:s(()=>[a(e(I),{value:r.value.demoData,"onUpdate:value":l[10]||(l[10]=t=>r.value.demoData=t),autosize:{minRows:3,maxRows:10},type:"textarea",placeholder:"请填写一个示例、方便快速告诉别人如何使用、每点击回车换行一次则是新增一条示例！"},null,8,["value"])]),_:1}),a(e(_),{label:"应用Logo",path:"coverImg"},{default:s(()=>[a(e(ce),{"on-update:file-list":ae,"on-before-upload":le,max:1,"default-upload":!1,action:L.value,"default-file-list":D.value,"list-type":"image-card"},{default:s(()=>[m(" 点击上传 ")]),_:1},8,["action","default-file-list"])]),_:1}),a(e(_),{label:"是否共享",path:"public"},{default:s(()=>[a(e(De),{value:r.value.public,"onUpdate:value":l[11]||(l[11]=t=>r.value.public=t),disabled:P.value},null,8,["value","disabled"]),a(e(xe),{placement:"top-start",trigger:"hover"},{trigger:s(()=>[a(e(g),{icon:"ri:error-warning-line",class:"text-base ml-3 cursor-pointer"})]),default:s(()=>[Ze,et,tt,at,lt]),_:1})]),_:1}),a(e(_),{class:"mt-3"},{default:s(()=>[a(e(x),{block:"",type:"primary",disabled:b.value,loading:b.value,onClick:ie},{default:s(()=>[m(N(e(J)),1)]),_:1},8,["disabled","loading"])]),_:1})]),_:1},8,["model"])])])]),_:1},8,["show"])],64))}});const ot={class:"flex h-full w-full flex-col bg-white dark:bg-[#111114]"},nt={class:"sticky left-0 right-0 top-0 z-40 border-b bg-white dark:border-b-neutral-800 dark:bg-[#111114]"},rt=z({__name:"index",setup(M){return(i,c)=>(p(),w("div",ot,[n("header",nt,[a(Ue)]),a(st)]))}}),it={class:"h-full dark:bg-[#24272e] transition-all"},vt=z({__name:"role",setup(M){const i=$e(),{isMobile:c}=H(),b=y(()=>i.siderCollapsed),f=y(()=>c.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"]),D=y(()=>["h-full",{"pl-[260px]":!c.value&&!b.value}]);return(R,v)=>(p(),w("div",it,[n("div",{class:Q(["h-full overflow-hidden",e(f)])},[a(e(ze),{class:Q(["z-40 transition",e(D)]),"has-sider":""},{default:s(()=>[a(pe),a(e(qe),{class:"h-full"},{default:s(()=>[a(rt)]),_:1})]),_:1},8,["class"])],2)]))}});export{vt as default};
