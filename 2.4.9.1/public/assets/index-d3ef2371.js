import{_ as q}from"./titleBar.vue_vue_type_script_setup_true_lang-2cdf89a8.js";import{d as D,k as V,l as $,n as z,ae as F,b as g,r as v,e as U,c as i,f as o,u as a,q as S,a as e,w as b,K as C,F as N,s as B,v as E,bH as H,o as d,B as M,E as K,t as l,A as Q,_ as X,bO as x,U as P,b_ as Y}from"./index-ce5ede07.js";const Z={class:"main min-h-screen bg-center dark:bg-[#2F2E34] h-full flex flex-col overflow-hidden"},ee={key:0,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 px-4"},te=["onClick"],se={class:"w-full rounded-t-xl overflow-hidden border dark:border-[#ffffff17] relative",style:{height:"40%"}},ae=["src"],ne={class:"absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2 text-lg text-[#fff] ]"},oe={class:"p-5 text-lg h-[160px] border-b dark:border-[#ffffff17] overflow-hidden relative"},le={class:"absolute bottom-1 right-2 font-semibold text-red-500 italic"},re={class:"flex p-4 border-b dark:border-[#ffffff17] flex-col space-y-4"},ie={class:"flex justify-between"},de=e("span",null,"基础模型额度",-1),ce={class:"flex justify-between"},fe=e("span",null,"高级模型额度",-1),ue={class:"flex justify-between"},pe=e("span",null,"MJ绘画额度",-1),he={class:"px-4 flex-1 flex items-center justify-between"},_e={class:"flex items-end"},ge=e("span",null,"套餐有效期 ",-1),xe={class:"ml-2 text-[#3076fd] text-lg"},ye=e("div",{class:"line"},null,-1),ve={key:1,class:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 px-4"},be={class:"w-full rounded-t-xl overflow-hidden",style:{height:"40%"}},me={class:"p-5 text-lg h-[160px] border-b dark:border-[#ffffff17] overflow-ellipsis"},we={class:"flex p-4 border-b dark:border-[#ffffff17] flex-col space-y-4"},ke={class:"px-4 flex-1 flex items-center justify-between"},Be=D({__name:"index",setup(Se){const p=V(),{isMobile:c}=$(),y=z(),h=F(),W=g(()=>{var n;const t=window.navigator.userAgent.toLowerCase();return t.match(/MicroMessenger/i)&&((n=t==null?void 0:t.match(/MicroMessenger/i))==null?void 0:n[0])==="micromessenger"}),f=g(()=>{const{payHupiStatus:t,payEpayStatus:n,payMpayStatus:s,payWechatStatus:r}=p.globalConfig;return Number(r)===1?"wechat":Number(s)===1?"mpay":Number(t)===1?"hupi":Number(n)===1?"epay":null}),j=g(()=>{const{payEpayChannel:t,payMpayChannel:n}=p.globalConfig;return f.value==="wechat"?["wxpay"]:f.value==="epay"?t?JSON.parse(t):[]:f.value==="mpay"?n?JSON.parse(n):[]:f.value==="hupi"?["wxpay"]:[]}),m=v([]),w=v(1),u=v(!1);async function k(){try{u.value=!0;const t=await H({status:1,type:w.value,size:30});m.value=t.data.rows,u.value=!1}catch{u.value=!1}}const I=g(()=>c.value?"尽情探索，欢迎光临我们的在线商店！":"尽情探索，欢迎光临我们的在线商店、感谢您选择我们、让我们一同开启愉悦的购物之旅！");function J(t){w.value=t,k()}async function T(t){j.value.length||y.warning("管理员还未开启支付！"),G(t)}async function G(t){if(W.value&&f.value==="wechat"&&Number(p.globalConfig.payWechatStatus)===1){if(typeof WeixinJSBridge>"u")document.addEventListener?document.addEventListener("WeixinJSBridgeReady",_,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",_),document.attachEvent("onWeixinJSBridgeReady",_));else{const n=await Y({goodsId:t.id,payType:"jsapi"}),{success:s,data:r}=n;s&&_(r)}return}h.updateOrderInfo({pkgInfo:t}),h.updateGoodsDialog(!1),h.updatePayDialog(!0)}function _(t){const{appId:n,timeStamp:s,nonceStr:r,package:L,signType:O,paySign:A}=t;n&&WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:n,timeStamp:s,nonceStr:r,package:L,signType:O,paySign:A},R=>{R.err_msg==="get_brand_wcpay_request:ok"?(y.success("购买成功、祝您使用愉快!"),setTimeout(()=>{p.getUserInfo(),h.updateGoodsDialog(!1)},500)):y.warning("您还没有支付成功哟！")})}return U(()=>{k()}),(t,n)=>(d(),i("div",Z,[o(a(q),{title:"会员商场",des:a(I),class:S([a(c)?"px-3":"px-24"])},null,8,["des","class"]),e("div",{class:"flex justify-center items-center",style:C({height:a(c)?"60px":"180px"})},[o(a(K),{type:"segment",style:C({width:a(c)?"90%":"400px"}),"onUpdate:value":J},{default:b(()=>[o(a(M),{name:1,tab:"会员限时套餐"}),o(a(M),{name:-1,tab:"叠加永久次卡"})]),_:1},8,["style"])],4),e("div",{class:S(["flex-1 pb-10 overflow-y-auto",[a(c)?"px-3":"px-28"]])},[u.value?E("",!0):(d(),i("div",ee,[(d(!0),i(N,null,B(m.value,s=>(d(),i("div",{key:s.id,class:"border dark:border-[#ffffff17] h-[580px] rounded-xl card-item flex flex-col",onClick:r=>T(s)},[e("div",se,[e("img",{src:s.coverImg,class:"object-cover w-full h-full cover",alt:""},null,8,ae),e("div",ne,l(s.name),1)]),e("div",oe,[Q(l(s.des)+" ",1),e("span",le,"￥"+l(s.price),1)]),e("div",re,[e("div",ie,[de,e("span",null,l(s.model3Count||0)+" 积分",1)]),e("div",ce,[fe,e("span",null,l(s.model4Count||0)+" 积分",1)]),e("div",ue,[pe,e("span",null,l(s.drawMjCount||0)+" 积分",1)])]),e("div",he,[e("div",_e,[ge,e("span",xe,l(s.days>0?`${s.days} 天`:"永久"),1)]),ye,e("div",null,[o(a(X),{class:"text-lg right-icon",icon:"bi:arrow-right"})])])],8,te))),128))])),u.value?(d(),i("div",ve,[(d(),i(N,null,B(4,s=>e("div",{key:s,class:"border dark:border-[#ffffff17] h-[580px] rounded-xl card-item flex flex-col"},[e("div",be,[o(a(x),{height:"100%",width:"100%"})]),e("div",me,[o(a(P),{vertical:""},{default:b(()=>[o(a(x),{text:"",repeat:4,width:"100%",sharp:!1})]),_:1})]),e("div",we,[o(a(P),{vertical:""},{default:b(()=>[o(a(x),{text:"",repeat:4,width:"100%",sharp:!1})]),_:1})]),e("div",ke,[o(a(x),{text:"",repeat:1,width:"100%",sharp:!1})])])),64))])):E("",!0)],2)]))}});export{Be as default};
