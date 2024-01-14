import{_ as R}from"./index-393f84c9.js";import{a as x}from"./config-544341a7.js";import{d as U,Q as I,r as g,x as L,o as q,c as N,e,f as l,a as h,k as B,E as w,h as i,q as b}from"./index-4223df14.js";const C={class:"flex justify-between"},j=h("b",null,"微信开发者配置设置",-1),E=U({__name:"wechat",setup(M){const a=I({wechatRegisterStatus:"",wechatSilentLoginStatus:"",wechatOfficialName:"",wechatOfficialAppId:"",wechatOfficialToken:"",wechatOfficialAppSecret:"",officialSubscribeText:"",officialBindAccountText:"",officialScanLoginText:"",officialAutoReplyText:""}),S=g({wechatOfficialName:[{required:!1,trigger:"blur",message:"请填写微信公众号名称"}],wechatOfficialAppId:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 AppId"}],wechatOfficialToken:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 Token"}],wechatOfficialAppSecret:[{required:!1,trigger:"blur",message:"请填写微信公众号开发配置 AppSecret"}]}),r=g();async function p(){const u=await x.queryConfig({keys:["wechatOfficialName","wechatOfficialAppId","wechatOfficialToken","wechatOfficialAppSecret","officialSubscribeText","officialBindAccountText","officialScanLoginText","officialAutoReplyText","wechatRegisterStatus","wechatSilentLoginStatus"]});Object.assign(a,u.data)}function V(){var u;(u=r.value)==null||u.validate(async t=>{if(t){try{await x.setConfig({settings:T(a)}),w.success("变更配置信息成功")}catch{}p()}else w.error("请填写完整信息")})}function T(u){return Object.keys(u).map(t=>({configKey:t,configVal:u[t]}))}return L(()=>{p()}),(u,t)=>{const s=i("el-alert"),A=R,O=i("el-button"),m=i("el-switch"),_=i("el-tooltip"),n=i("el-form-item"),f=i("el-col"),c=i("el-row"),d=i("el-input"),y=i("el-divider"),k=i("el-form"),v=i("el-card");return q(),N("div",null,[e(A,null,{default:l(()=>[e(s,{closable:!1,"show-icon":"",title:"微信设置说明[仔细阅读]",description:"系统微信登录通过关联公众号实现[请务必注册为服务号、个人公众号没有二维码等此类权限]、以便于后期联动小程序、开发文档前往微信公众平台 https://mp.weixin.qq.com/ 、拿到开发者配置信息即可、如果用户对公众号发送消息、我们将会从自定义回复管理当中的内容进行匹配自动回复、如果没有匹配到结果则回复下面设置的自定义回复默认信息、同时别忘记在微信公众号平台将自己的ip加为ip白名单、配置位置为公众号后台->基本配置：服务复制参考 https://域名/api/official/notify 将域名修改为您的域名 下方Token对应自己后台设置的Token、加密秘钥随机即可、当设置不指定首页并且配置了微信登录即可默认打开静默登录！",type:"warning"})]),_:1}),e(v,{style:{margin:"20px"}},{header:l(()=>[h("div",C,[j,e(O,{class:"button",text:"",onClick:V},{default:l(()=>[B(" 保存设置 ")]),_:1})])]),default:l(()=>[e(k,{ref_key:"formRef",ref:r,rules:S.value,model:a,"label-width":"170px"},{default:l(()=>[e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"是否开启微信登录注册",prop:"wechatRegisterStatus"},{default:l(()=>[e(_,{class:"box-item",effect:"dark",content:"如您启用微信注册、则用户端则可以通过微信扫码方式注册或登录！",placement:"right"},{default:l(()=>[e(m,{modelValue:a.wechatRegisterStatus,"onUpdate:modelValue":t[0]||(t[0]=o=>a.wechatRegisterStatus=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"是否开启微信静默",prop:"wechatSilentLoginStatus"},{default:l(()=>[e(_,{class:"box-item",effect:"dark",content:"如您启用静默登录、则用户在微信环境打开则直接自动登录！",placement:"right"},{default:l(()=>[e(m,{modelValue:a.wechatSilentLoginStatus,"onUpdate:modelValue":t[1]||(t[1]=o=>a.wechatSilentLoginStatus=o),"active-value":"1","inactive-value":"0"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"公众号名称",prop:"wechatOfficialName"},{default:l(()=>[e(d,{modelValue:a.wechatOfficialName,"onUpdate:modelValue":t[2]||(t[2]=o=>a.wechatOfficialName=o),placeholder:"公众号名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"AppId",prop:"wechatOfficialAppId"},{default:l(()=>[e(d,{modelValue:a.wechatOfficialAppId,"onUpdate:modelValue":t[3]||(t[3]=o=>a.wechatOfficialAppId=o),placeholder:"公众号开发信息 AppId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"Token",prop:"wechatOfficialToken"},{default:l(()=>[e(d,{modelValue:a.wechatOfficialToken,"onUpdate:modelValue":t[4]||(t[4]=o=>a.wechatOfficialToken=o),placeholder:"公众号Token配置",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"AppSecret",prop:"wechatOfficialAppSecret"},{default:l(()=>[e(d,{modelValue:a.wechatOfficialAppSecret,"onUpdate:modelValue":t[5]||(t[5]=o=>a.wechatOfficialAppSecret=o),placeholder:"公众号开发信息 AppSecret",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"订阅公众号欢迎消息",prop:"officialSubscribeText"},{default:l(()=>[e(d,{modelValue:a.officialSubscribeText,"onUpdate:modelValue":t[6]||(t[6]=o=>a.officialSubscribeText=o),type:"textarea",rows:3,placeholder:"订阅你的公众号后对他的欢迎语！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"绑定账号回复消息",prop:"officialBindAccountText"},{default:l(()=>[e(d,{modelValue:a.officialBindAccountText,"onUpdate:modelValue":t[7]||(t[7]=o=>a.officialBindAccountText=o),type:"textarea",rows:3,placeholder:"非微信登录用户首次绑定微信的欢迎语",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"扫码登录回复消息",prop:"officialScanLoginText"},{default:l(()=>[e(d,{modelValue:a.officialScanLoginText,"onUpdate:modelValue":t[8]||(t[8]=o=>a.officialScanLoginText=o),type:"textarea",rows:3,placeholder:"用户扫码登录成功时自动回复的内容",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(c,null,{default:l(()=>[e(f,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(n,{label:"自定义回复的默认信息",prop:"officialAutoReplyText"},{default:l(()=>[e(d,{modelValue:a.officialAutoReplyText,"onUpdate:modelValue":t[9]||(t[9]=o=>a.officialAutoReplyText=o),type:"textarea",rows:3,placeholder:"当用户对公众号发了消息不在自动回复列表时回复的兜底内容",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof b=="function"&&b(E);export{E as default};
