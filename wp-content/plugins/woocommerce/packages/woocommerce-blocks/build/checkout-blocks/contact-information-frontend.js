(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[33],{21:function(e,t,c){"use strict";var n=c(0),a=c(4),l=c.n(a);t.a=e=>{let t,{label:c,screenReaderLabel:a,wrapperElement:r,wrapperProps:o={}}=e;const s=null!=c,i=null!=a;return!s&&i?(t=r||"span",o={...o,className:l()(o.className,"screen-reader-text")},Object(n.createElement)(t,o,a)):(t=r||n.Fragment,s&&i&&c!==a?Object(n.createElement)(t,o,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},a)):Object(n.createElement)(t,o,c))}},221:function(e,t){},224:function(e,t,c){"use strict";var n=c(10),a=c.n(n),l=c(0),r=c(4),o=c.n(r);c(8),c(225),t.a=e=>{let{children:t,className:c,headingLevel:n,...r}=e;const s=o()("wc-block-components-title",c),i="h"+n;return Object(l.createElement)(i,a()({className:s},r),t)}},225:function(e,t){},228:function(e,t){},232:function(e,t){},233:function(e,t,c){"use strict";var n=c(1);t.a=e=>{let{defaultTitle:t=Object(n.__)("Step",'woocommerce'),defaultDescription:c=Object(n.__)("Step description text.",'woocommerce'),defaultShowStepNumber:a=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:c},showStepNumber:{type:"boolean",default:a}}}},235:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(0),a=(c(8),c(160));c(221);const l=e=>{let{errorMessage:t="",propertyName:c="",elementId:l=""}=e;const{getValidationError:r,getValidationErrorId:o}=Object(a.b)();if(!t||"string"!=typeof t){const e=r(c)||{};if(!e.message||e.hidden)return null;t=e.message}return Object(n.createElement)("div",{className:"wc-block-components-validation-error",role:"alert"},Object(n.createElement)("p",{id:o(l)},t))}},261:function(e,t,c){"use strict";var n=c(0),a=c(4),l=c.n(a),r=c(224);c(232);const o=e=>{let{title:t,stepHeadingContent:c}=e;return Object(n.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(n.createElement)(r.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!c&&Object(n.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},c))};t.a=e=>{let{id:t,className:c,title:a,legend:r,description:s,children:i,disabled:u=!1,showStepNumber:d=!0,stepHeadingContent:b=(()=>{})}=e;const p=r||a?"fieldset":"div";return Object(n.createElement)(p,{className:l()(c,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":u}),id:t,disabled:u},!(!r&&!a)&&Object(n.createElement)("legend",{className:"screen-reader-text"},r||a),!!a&&Object(n.createElement)(o,{title:a,stepHeadingContent:b()}),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!s&&Object(n.createElement)("p",{className:"wc-block-components-checkout-step__description"},s),Object(n.createElement)("div",{className:"wc-block-components-checkout-step__content"},i)))}},281:function(e,t,c){"use strict";var n=c(10),a=c.n(n),l=c(0),r=c(1),o=c(3),s=c(4),i=c.n(s),u=c(160),d=c(235),b=c(12),p=c(35),m=c(21);c(228);var g=Object(o.forwardRef)((e,t)=>{let{className:c,id:n,type:r="text",ariaLabel:o,ariaDescribedBy:s,label:u,screenReaderLabel:d,disabled:b,help:p,autoCapitalize:g="off",autoComplete:h="off",value:j="",onChange:O,required:f=!1,onBlur:k=(()=>{}),feedback:w,...E}=e;const[v,_]=Object(l.useState)(!1);return Object(l.createElement)("div",{className:i()("wc-block-components-text-input",c,{"is-active":v||j})},Object(l.createElement)("input",a()({type:r,id:n,value:j,ref:t,autoCapitalize:g,autoComplete:h,onChange:e=>{O(e.target.value)},onFocus:()=>_(!0),onBlur:e=>{k(e.target.value),_(!1)},"aria-label":o||u,disabled:b,"aria-describedby":p&&!s?n+"__help":s,required:f},E)),Object(l.createElement)(m.a,{label:u,screenReaderLabel:d||u,wrapperElement:"label",wrapperProps:{htmlFor:n},htmlFor:n}),!!p&&Object(l.createElement)("p",{id:n+"__help",className:"wc-block-components-text-input__help"},p),w)});t.a=Object(b.withInstanceId)(e=>{let{className:t,instanceId:c,id:n,ariaDescribedBy:s,errorId:b,focusOnMount:m=!1,onChange:h,showError:j=!0,errorMessage:O="",value:f="",...k}=e;const[w,E]=Object(o.useState)(!0),v=Object(o.useRef)(null),{getValidationError:_,hideValidationError:C,setValidationErrors:N,clearValidationError:S,getValidationErrorId:y}=Object(u.b)(),A=void 0!==n?n:"textinput-"+c,F=void 0!==b?b:A,B=Object(o.useCallback)((function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=v.current||null;if(!t)return;t.value=t.value.trim();const c=t.checkValidity();c?S(F):N({[F]:{message:t.validationMessage||Object(r.__)("Invalid value.",'woocommerce'),hidden:e}})}),[S,F,N]);Object(o.useEffect)(()=>{var e;w&&m&&(null===(e=v.current)||void 0===e||e.focus()),E(!1)},[m,w,E]),Object(o.useEffect)(()=>{var e,t;(null===(e=v.current)||void 0===e||null===(t=e.ownerDocument)||void 0===t?void 0:t.activeElement)!==v.current&&B(!0)},[f,B]),Object(o.useEffect)(()=>()=>{S(F)},[S,F]);const I=_(F)||{};Object(p.d)(O)&&""!==O&&(I.message=O);const x=I.message&&!I.hidden,R=j&&x&&y(F)?y(F):s;return Object(l.createElement)(g,a()({className:i()(t,{"has-error":x}),"aria-invalid":!0===x,id:A,onBlur:()=>{B(!1)},feedback:j&&Object(l.createElement)(d.a,{errorMessage:O,propertyName:F}),ref:v,onChange:e=>{C(F),h(e)},ariaDescribedBy:R,value:f},k))})},301:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(2),a=c(0),l=c(44),r=c(33);const o=()=>{const{needsShipping:e}=Object(l.b)(),{billingData:t,setBillingData:c,shippingAddress:o,setShippingAddress:s,shippingAsBilling:i,setShippingAsBilling:u}=Object(r.b)(),d=Object(a.useRef)(i),b=Object(a.useRef)(),p=Object(a.useCallback)(e=>{s(e),i&&c(e)},[i,s,c]),m=Object(a.useCallback)(t=>{c(t),e||s(t)},[e,s,c]);Object(a.useEffect)(()=>{if(d.current!==i){if(i)b.current=t,c(o);else{const{email:e,...n}=b.current||t;c({...n})}d.current=i}},[i,c,o,t]);const g=Object(a.useCallback)(e=>{c({email:e})},[c]),h=Object(a.useCallback)(e=>{c({phone:e})},[c]),j=Object(a.useCallback)(e=>{p({phone:e})},[p]);return{defaultAddressFields:n.defaultAddressFields,shippingFields:o,setShippingFields:p,billingFields:t,setBillingFields:m,setEmail:g,setPhone:h,setShippingPhone:j,shippingAsBilling:i,setShippingAsBilling:u,showShippingFields:e,showBillingFields:!e||!d.current}}},389:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(4),l=c.n(a),r=c(110),o=c(261),s=c(31),i=c(1),u=c(281),d=c(301),b=c(38),p=c(2),m=c(13),g=e=>{let{allowCreateAccount:t}=e;const{customerId:c,shouldCreateAccount:a,setShouldCreateAccount:l}=Object(s.b)(),{billingFields:r,setEmail:o}=Object(d.a)(),{dispatchCheckoutEvent:g}=Object(b.a)(),h=!c&&t&&Object(p.getSetting)("checkoutAllowsGuest",!1)&&Object(p.getSetting)("checkoutAllowsSignup",!1)&&Object(n.createElement)(m.CheckboxControl,{className:"wc-block-checkout__create-account",label:Object(i.__)("Create an account?",'woocommerce'),checked:a,onChange:e=>l(e)});return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,{id:"email",type:"email",label:Object(i.__)("Email address",'woocommerce'),value:r.email,autoComplete:"email",onChange:e=>{o(e),g("set-email-address")},required:!0}),h)},h=c(233),j={...Object(h.a)({defaultTitle:Object(i.__)("Contact information",'woocommerce'),defaultDescription:Object(i.__)("We'll use this email to send you details and updates about your order.",'woocommerce')}),className:{type:"string",default:""},lock:{type:"object",default:{remove:!0,move:!0}}};const O=`${c(66).e}?redirect_to=${encodeURIComponent(window.location.href)}`;var f=()=>{const{customerId:e}=Object(s.b)();return!Object(p.getSetting)("checkoutShowLoginReminder",!0)||e?null:Object(n.createElement)(n.Fragment,null,Object(i.__)("Already have an account? ",'woocommerce'),Object(n.createElement)("a",{href:O},Object(i.__)("Log in.",'woocommerce')))},k=c(132);t.default=Object(r.withFilteredAttributes)(j)(e=>{let{title:t,description:c,showStepNumber:a,children:r,className:i}=e;const{isProcessing:u}=Object(s.b)(),{allowCreateAccount:d}=Object(k.b)();return Object(n.createElement)(o.a,{id:"contact-fields",disabled:u,className:l()("wc-block-checkout__contact-fields",i),title:t,description:c,showStepNumber:a,stepHeadingContent:()=>Object(n.createElement)(f,null)},Object(n.createElement)(g,{allowCreateAccount:d}),r)})}}]);