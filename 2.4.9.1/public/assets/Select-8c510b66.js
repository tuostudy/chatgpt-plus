import{aD as Le,aA as oe,cE as Ne,d as Ee,aG as $e,aH as de,r as d,aJ as j,aK as re,b as v,c6 as Ke,cX as We,aI as He,p as Ge,aL as Je,bv as Xe,co as N,ac as F,cL as Ye,cM as Ze,cY as qe,cN as Qe,T as et,bh as tt,bi as nt,bp as se,cf as lt,cZ as at,cg as it,c_ as ot,c$ as L,d0 as rt,d1 as st,ch as ue,d2 as ut,aU as g,cj as dt}from"./index-ed418456.js";const ct=Le([oe("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),oe("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Ne({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ft=Object.assign(Object.assign({},de.props),{to:N.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),vt=Ee({name:"Select",props:ft,setup(n){const{mergedClsPrefixRef:c,mergedBorderedRef:S,namespaceRef:O,inlineThemeDisabled:u}=$e(n),E=de("Select","-select",ct,at,n,c),D=d(n.defaultValue),ce=j(n,"value"),M=re(ce,D),T=d(!1),y=d(""),fe=v(()=>{const{valueField:e,childrenField:t}=n,l=dt(e,t);return it(me.value,l)}),$=v(()=>ot(H.value,n.valueField,n.childrenField)),A=d(!1),f=re(j(n,"show"),A),h=d(null),K=d(null),C=d(null),{localeRef:he}=Ke("Select"),ve=v(()=>{var e;return(e=n.placeholder)!==null&&e!==void 0?e:he.value.placeholder}),z=We(n,["items","options"]),R=[],m=d([]),b=d([]),P=d(new Map),W=v(()=>{const{fallbackOption:e}=n;if(e===void 0){const{labelField:t,valueField:l}=n;return r=>({[t]:String(r),[l]:r})}return e===!1?!1:t=>Object.assign(e(t),{value:t})}),H=v(()=>b.value.concat(m.value).concat(z.value)),ge=v(()=>{const{filter:e}=n;if(e)return e;const{labelField:t,valueField:l}=n;return(r,a)=>{if(!a)return!1;const o=a[t];if(typeof o=="string")return L(r,o);const i=a[l];return typeof i=="string"?L(r,i):typeof i=="number"?L(r,String(i)):!1}}),me=v(()=>{if(n.remote)return z.value;{const{value:e}=H,{value:t}=y;return!t.length||!n.filterable?e:rt(e,ge.value,t,n.childrenField)}});function U(e){const t=n.remote,{value:l}=P,{value:r}=$,{value:a}=W,o=[];return e.forEach(i=>{if(r.has(i))o.push(r.get(i));else if(t&&l.has(i))o.push(l.get(i));else if(a){const s=a(i);s&&o.push(s)}}),o}const G=v(()=>{if(n.multiple){const{value:e}=M;return Array.isArray(e)?U(e):[]}return null}),J=v(()=>{const{value:e}=M;return!n.multiple&&!Array.isArray(e)?e===null?null:U([e])[0]||null:null}),_=He(n),{mergedSizeRef:pe,mergedDisabledRef:V,mergedStatusRef:be}=_;function x(e,t){const{onChange:l,"onUpdate:value":r,onUpdateValue:a}=n,{nTriggerFormChange:o,nTriggerFormInput:i}=_;l&&g(l,e,t),a&&g(a,e,t),r&&g(r,e,t),D.value=e,o(),i()}function X(e){const{onBlur:t}=n,{nTriggerFormBlur:l}=_;t&&g(t,e),l()}function Oe(){const{onClear:e}=n;e&&g(e)}function Fe(e){const{onFocus:t,showOnFocus:l}=n,{nTriggerFormFocus:r}=_;t&&g(t,e),r(),l&&B()}function ye(e){const{onSearch:t}=n;t&&g(t,e)}function we(e){const{onScroll:t}=n;t&&g(t,e)}function Y(){var e;const{remote:t,multiple:l}=n;if(t){const{value:r}=P;if(l){const{valueField:a}=n;(e=G.value)===null||e===void 0||e.forEach(o=>{r.set(o[a],o)})}else{const a=J.value;a&&r.set(a[n.valueField],a)}}}function Z(e){const{onUpdateShow:t,"onUpdate:show":l}=n;t&&g(t,e),l&&g(l,e),A.value=e}function B(){V.value||(Z(!0),A.value=!0,n.filterable&&le())}function p(){Z(!1)}function q(){y.value="",b.value=R}const k=d(!1);function Se(){n.filterable&&(k.value=!0)}function Me(){n.filterable&&(k.value=!1,f.value||q())}function Te(){V.value||(f.value?n.filterable?le():p():B())}function Ce(e){var t,l;!((l=(t=C.value)===null||t===void 0?void 0:t.selfRef)===null||l===void 0)&&l.contains(e.relatedTarget)||(T.value=!1,X(e),p())}function Re(e){Fe(e),T.value=!0}function Be(e){T.value=!0}function Ae(e){var t;!((t=h.value)===null||t===void 0)&&t.$el.contains(e.relatedTarget)||(T.value=!1,X(e),p())}function Pe(){var e;(e=h.value)===null||e===void 0||e.focus(),p()}function _e(e){var t;f.value&&(!((t=h.value)===null||t===void 0)&&t.$el.contains(st(e))||p())}function Ve(e){if(!Array.isArray(e))return[];if(W.value)return Array.from(e);{const{remote:t}=n,{value:l}=$;if(t){const{value:r}=P;return e.filter(a=>l.has(a)||r.has(a))}else return e.filter(r=>l.has(r))}}function Q(e){I(e.rawNode)}function I(e){if(V.value)return;const{tag:t,remote:l,clearFilterAfterSelect:r,valueField:a}=n;if(t&&!l){const{value:o}=b,i=o[0]||null;if(i){const s=m.value;s.length?s.push(i):m.value=[i],b.value=R}}if(l&&P.value.set(e[a],e),n.multiple){const o=Ve(M.value),i=o.findIndex(s=>s===e[a]);if(~i){if(o.splice(i,1),t&&!l){const s=ee(e[a]);~s&&(m.value.splice(s,1),r&&(y.value=""))}}else o.push(e[a]),r&&(y.value="");x(o,U(o))}else{if(t&&!l){const o=ee(e[a]);~o?m.value=[m.value[o]]:m.value=R}ne(),p(),x(e[a],e)}}function ee(e){return m.value.findIndex(l=>l[n.valueField]===e)}function xe(e){f.value||B();const{value:t}=e.target;y.value=t;const{tag:l,remote:r}=n;if(ye(t),l&&!r){if(!t){b.value=R;return}const{onCreate:a}=n,o=a?a(t):{[n.labelField]:t,[n.valueField]:t},{valueField:i}=n;z.value.some(s=>s[i]===o[i])||m.value.some(s=>s[i]===o[i])?b.value=R:b.value=[o]}}function ke(e){e.stopPropagation();const{multiple:t}=n;!t&&n.filterable&&p(),Oe(),t?x([],[]):x(null,null)}function Ie(e){!ue(e,"action")&&!ue(e,"empty")&&e.preventDefault()}function De(e){we(e)}function te(e){var t,l,r,a,o;switch(e.key){case" ":if(n.filterable)break;e.preventDefault();case"Enter":if(!(!((t=h.value)===null||t===void 0)&&t.isComposing)){if(f.value){const i=(l=C.value)===null||l===void 0?void 0:l.getPendingTmNode();i?Q(i):n.filterable||(p(),ne())}else if(B(),n.tag&&k.value){const i=b.value[0];if(i){const s=i[n.valueField],{value:ie}=M;n.multiple&&Array.isArray(ie)&&ie.some(je=>je===s)||I(i)}}}e.preventDefault();break;case"ArrowUp":if(e.preventDefault(),n.loading)return;f.value&&((r=C.value)===null||r===void 0||r.prev());break;case"ArrowDown":if(e.preventDefault(),n.loading)return;f.value?(a=C.value)===null||a===void 0||a.next():B();break;case"Escape":f.value&&(ut(e),p()),(o=h.value)===null||o===void 0||o.focus();break}}function ne(){var e;(e=h.value)===null||e===void 0||e.focus()}function le(){var e;(e=h.value)===null||e===void 0||e.focusInput()}function ze(){var e;f.value&&((e=K.value)===null||e===void 0||e.syncPosition())}Y(),Ge(j(n,"options"),Y);const Ue={focus:()=>{var e;(e=h.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=h.value)===null||e===void 0||e.blur()}},ae=v(()=>{const{self:{menuBoxShadow:e}}=E.value;return{"--n-menu-box-shadow":e}}),w=u?Je("select",void 0,ae,n):void 0;return Object.assign(Object.assign({},Ue),{mergedStatus:be,mergedClsPrefix:c,mergedBordered:S,namespace:O,treeMate:fe,isMounted:Xe(),triggerRef:h,menuRef:C,pattern:y,uncontrolledShow:A,mergedShow:f,adjustedTo:N(n),uncontrolledValue:D,mergedValue:M,followerRef:K,localizedPlaceholder:ve,selectedOption:J,selectedOptions:G,mergedSize:pe,mergedDisabled:V,focused:T,activeWithoutMenuOpen:k,inlineThemeDisabled:u,onTriggerInputFocus:Se,onTriggerInputBlur:Me,handleTriggerOrMenuResize:ze,handleMenuFocus:Be,handleMenuBlur:Ae,handleMenuTabOut:Pe,handleTriggerClick:Te,handleToggle:Q,handleDeleteOption:I,handlePatternInput:xe,handleClear:ke,handleTriggerBlur:Ce,handleTriggerFocus:Re,handleKeydown:te,handleMenuAfterLeave:q,handleMenuClickOutside:_e,handleMenuScroll:De,handleMenuKeydown:te,handleMenuMousedown:Ie,mergedTheme:E,cssVars:u?void 0:ae,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender})},render(){return F("div",{class:`${this.mergedClsPrefix}-select`},F(Ye,null,{default:()=>[F(Ze,null,{default:()=>F(qe,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var n,c;return[(c=(n=this.$slots).arrow)===null||c===void 0?void 0:c.call(n)]}})}),F(Qe,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===N.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>F(et,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var n,c,S;return this.mergedShow||this.displayDirective==="show"?((n=this.onRender)===null||n===void 0||n.call(this),tt(F(lt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(c=this.menuProps)===null||c===void 0?void 0:c.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(S=this.menuProps)===null||S===void 0?void 0:S.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var O,u;return[(u=(O=this.$slots).empty)===null||u===void 0?void 0:u.call(O)]},action:()=>{var O,u;return[(u=(O=this.$slots).action)===null||u===void 0?void 0:u.call(O)]}}),this.displayDirective==="show"?[[nt,this.mergedShow],[se,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[se,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{vt as N};
