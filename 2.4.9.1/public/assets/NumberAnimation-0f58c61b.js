import{cb as b,cc as I,cd as v,d as R,c6 as S,r as V,b as N,e as A,b8 as T}from"./index-ce5ede07.js";var F=1/0,x=17976931348623157e292;function E(t){if(!t)return t===0?t:0;if(t=b(t),t===F||t===-F){var e=t<0?-1:1;return e*x}return t===t?t:0}function _(t){var e=E(t),a=e%1;return e===e?a?e-a:e:0}var p=I.isFinite,B=Math.min;function L(t){var e=Math[t];return function(a,n){if(a=b(a),n=n==null?0:B(_(n),292),n&&p(a)){var r=(v(a)+"e").split("e"),i=e(r[0]+"e"+(+r[1]+n));return r=(v(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return e(a)}}var O=L("round");const P=O,U=t=>1-Math.pow(1-t,5);function j(t){const{from:e,to:a,duration:n,onUpdate:r,onFinish:i}=t,c=()=>{const u=performance.now(),s=Math.min(u-d,n),f=e+(a-e)*U(s/n);if(s===n){i();return}r(f),requestAnimationFrame(c)},d=performance.now();c()}const k={to:{type:Number,default:0},precision:{type:Number,default:0},showSeparator:Boolean,locale:String,from:{type:Number,default:0},active:{type:Boolean,default:!0},duration:{type:Number,default:2e3},onFinish:Function},G=R({name:"NumberAnimation",props:k,setup(t){const{localeRef:e}=S("name"),{duration:a}=t,n=V(t.from),r=N(()=>{const{locale:o}=t;return o!==void 0?o:e.value});let i=!1;const c=o=>{n.value=o},d=()=>{var o;n.value=t.to,i=!1,(o=t.onFinish)===null||o===void 0||o.call(t)},u=(o=t.from,m=t.to)=>{i=!0,n.value=t.from,o!==m&&j({from:o,to:m,duration:a,onUpdate:c,onFinish:d})},s=N(()=>{var o;const l=P(n.value,t.precision).toFixed(t.precision).split("."),h=new Intl.NumberFormat(r.value),M=(o=h.formatToParts(.5).find(y=>y.type==="decimal"))===null||o===void 0?void 0:o.value,g=t.showSeparator?h.format(Number(l[0])):l[0],w=l[1];return{integer:g,decimal:w,decimalSeparator:M}});function f(){i||u()}return A(()=>{T(()=>{t.active&&u()})}),Object.assign({formattedValue:s},{play:f})},render(){const{formattedValue:{integer:t,decimal:e,decimalSeparator:a}}=this;return[t,e?a:null,e]}});export{G as N};
