/*! For license information please see 17896441.aa4c47cf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{191:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var c=l.apply(null,n);c&&e.push(c)}else if("object"===r)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},92:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(344),c=a(203),i=a(182),m=a(197),o=a(198);var s=function(e){const{metadata:t}=e;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],c=[];function i(){const i=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:r}=l.getBoundingClientRect();r>=0&&r<=a&&(t=l),e+=1}return t}();if(i){let a=0,n=!1;for(c=document.getElementsByClassName(e);a<c.length&&!n;){const e=c[a],{href:m}=e,o=decodeURIComponent(m.substring(m.indexOf("#")+1));i.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),n=!0),a+=1}}}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}})},u=a(191),v=a.n(u),E=a(93),g=a.n(E);function p({headings:e}){return d("table-of-contents__link","table-of-contents__link--active",100),l.a.createElement("div",{className:"col col--3"},l.a.createElement("div",{className:g.a.tableOfContents},l.a.createElement(f,{headings:e})))}function f({headings:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map(e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(f,{isChild:!0,headings:e.children})))):null}t.default=function(e){const{siteConfig:t={}}=Object(i.a)(),{url:a,title:n}=t,{content:o}=e,{metadata:d}=o,{description:u,title:E,permalink:f,editUrl:h,lastUpdatedAt:_,lastUpdatedBy:b,version:N}=d,{frontMatter:{image:y,keywords:w,hide_title:k,hide_table_of_contents:x}}=o,C=E?`${E} | ${n}`:n;let L=a+Object(m.a)(y);return Object(c.a)(y)||(L=y),l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,C),l.a.createElement("meta",{property:"og:title",content:C}),u&&l.a.createElement("meta",{name:"description",content:u}),u&&l.a.createElement("meta",{property:"og:description",content:u}),w&&w.length&&l.a.createElement("meta",{name:"keywords",content:w.join(",")}),y&&l.a.createElement("meta",{property:"og:image",content:L}),y&&l.a.createElement("meta",{property:"twitter:image",content:L}),y&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),f&&l.a.createElement("meta",{property:"og:url",content:a+f}),f&&l.a.createElement("link",{rel:"canonical",href:a+f})),l.a.createElement("div",{className:v()("container padding-vert--lg",g.a.docItemWrapper)},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:v()("col",{[g.a.docItemCol]:!x})},l.a.createElement("div",{className:g.a.docItemContainer},l.a.createElement("article",null,N&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",N)),!k&&l.a.createElement("header",null,l.a.createElement("h1",{className:g.a.docTitle},E)),l.a.createElement("div",{className:"markdown"},l.a.createElement(o,null))),(h||_||b)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(_||b)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",_&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*_).toISOString(),className:g.a.docLastUpdatedAt},new Date(1e3*_).toLocaleDateString()),b&&" "),b&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,b)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:d})))),!x&&o.rightToc&&l.a.createElement(p,{headings:o.rightToc}))))}}}]);