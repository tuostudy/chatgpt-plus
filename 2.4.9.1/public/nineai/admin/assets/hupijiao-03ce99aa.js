import{_ as h}from"./index-393f84c9.js";import{a as f}from"./config-544341a7.js";import{d as I,Q as q,r as y,x as C,o as N,c as k,e,f as l,a as H,k as G,E as _,h as u,q as g}from"./index-4223df14.js";const R={class:"flex justify-between"},j=H("b",null,"虎皮椒支付参数设置",-1),B=I({__name:"hupijiao",setup(E){const t=q({payHupiStatus:"",payHupiAppId:"",payHupiSecret:"",payHupiGatewayUrl:"",payHupiNotifyUrl:"",payHupiReturnUrl:""}),b=y({payHupiStatus:[{required:!0,trigger:"change",message:"请选择当前支付开启状态"}],payHupiSecret:[{required:!0,trigger:"blur",message:"请填写支付秘钥"}],payHupiGatewayUrl:[{required:!0,trigger:"blur",message:"请填写网关"}],payHupiAppId:[{required:!0,trigger:"blur",message:"请填写Appid"}],payHupiNotifyUrl:[{required:!0,trigger:"blur",message:"请填写支付通知地址"}]}),d=y();async function c(){const o=await f.queryConfig({keys:["payHupiSecret","payHupiNotifyUrl","payHupiGatewayUrl","payHupiReturnUrl","payHupiAppId","payHupiStatus"]});Object.assign(t,o.data)}function x(){var o;(o=d.value)==null||o.validate(async a=>{if(a){try{await f.setConfig({settings:U(t)}),_.success("变更配置信息成功")}catch{}c()}else _.error("请填写完整信息")})}function U(o){return Object.keys(o).map(a=>({configKey:a,configVal:o[a]}))}return C(()=>{c()}),(o,a)=>{const m=u("el-alert"),V=h,w=u("el-button"),S=u("el-switch"),r=u("el-form-item"),n=u("el-col"),i=u("el-row"),s=u("el-input"),v=u("el-form"),A=u("el-card");return N(),k("div",null,[e(V,null,{default:l(()=>[e(m,{closable:!1,"show-icon":"",title:"虎皮椒支付参数说明",description:"虎皮椒支付为三方支付、接入请购买微信渠道、详细参数参照 https://www.xunhupay.com/ 目前优先开通微信支付渠道、同时开启开启多种支付、我们将优先按照菜单顺序调用、所有的支付通知地址统一为 https://域名/api/pay/notify 将域名修改为您的域名即可！",type:"success"})]),_:1}),e(A,{style:{margin:"20px"}},{header:l(()=>[H("div",R,[j,e(w,{class:"button",text:"",onClick:x},{default:l(()=>[G(" 保存设置 ")]),_:1})])]),default:l(()=>[e(v,{ref_key:"formRef",ref:d,rules:b.value,model:t,"label-width":"120px"},{default:l(()=>[e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"启用当前支付",prop:"payHupiAppId"},{default:l(()=>[e(S,{modelValue:t.payHupiStatus,"onUpdate:modelValue":a[0]||(a[0]=p=>t.payHupiStatus=p),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付AppId",prop:"payHupiAppId"},{default:l(()=>[e(s,{modelValue:t.payHupiAppId,"onUpdate:modelValue":a[1]||(a[1]=p=>t.payHupiAppId=p),placeholder:"请填写AppId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付网关地址",prop:"payHupiGatewayUrl"},{default:l(()=>[e(s,{modelValue:t.payHupiGatewayUrl,"onUpdate:modelValue":a[2]||(a[2]=p=>t.payHupiGatewayUrl=p),placeholder:"请填写支付网关地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"Secret秘钥",prop:"payHupiSecret"},{default:l(()=>[e(s,{modelValue:t.payHupiSecret,"onUpdate:modelValue":a[3]||(a[3]=p=>t.payHupiSecret=p),placeholder:"请填写支付秘钥",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付通知地址",prop:"payHupiSecret"},{default:l(()=>[e(s,{modelValue:t.payHupiNotifyUrl,"onUpdate:modelValue":a[4]||(a[4]=p=>t.payHupiNotifyUrl=p),placeholder:"请填写支付通知地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,null,{default:l(()=>[e(n,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(r,{label:"支付回调地址",prop:"payHupiSecret"},{default:l(()=>[e(s,{modelValue:t.payHupiReturnUrl,"onUpdate:modelValue":a[5]||(a[5]=p=>t.payHupiReturnUrl=p),placeholder:"请填写支付成功后的回跳地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof g=="function"&&g(B);export{B as default};
