import{r as N,S as w,i as k,s as q,e as m,a as i,b as g,l as E,n as h,d as _,c as I,f as O,g as S,u as A,h as F,j as P,t as b,k as x,m as $,o as T,p as W,q as c,v as z,w as B,x as j,y as K}from"./vendor.535026d9.js";const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};R();var U="/assets/svelte.d72399d3.png";const G=["Find your will to live",'Text your friend "goodnight. I love you." Randomly'];var H=N(G);function J(r){let e,n,o;return{c(){e=m("button"),e.textContent="Dare",i(e,"class","svelte-1vuxe64")},m(t,s){g(t,e,s),n||(o=E(e,"click",r[0]),n=!0)},p:h,i:h,o:h,d(t){t&&_(e),n=!1,o()}}}function Q(r,e,n){let o;I(r,H,l=>n(1,o=l));const t=O();function s(){const l=Math.floor(Math.random()*o.length),u=o[l];t("message",u)}return[s]}class V extends w{constructor(e){super();k(this,e,Q,J,q,{})}}function X(r){let e,n;const o=r[1].default,t=S(o,r,r[0],null);return{c(){e=m("blockquote"),t&&t.c(),i(e,"class","svelte-58xhyf")},m(s,l){g(s,e,l),t&&t.m(e,null),n=!0},p(s,[l]){t&&t.p&&(!n||l&1)&&A(t,o,s,s[0],n?P(o,s[0],l,null):F(s[0]),null)},i(s){n||(b(t,s),n=!0)},o(s){x(t,s),n=!1},d(s){s&&_(e),t&&t.d(s)}}}function Y(r,e,n){let{$$slots:o={},$$scope:t}=e;return r.$$set=s=>{"$$scope"in s&&n(0,t=s.$$scope)},[t,o]}class Z extends w{constructor(e){super();k(this,e,Y,X,q,{})}}const ee=["Until what age do you see yourself still living?","Do you think life is still worth living?","What is your main motivation to live?","What do you think is the reason we live?","In your opinion, how does one truly live?","Does anything matter?"];var te=N(ee);function se(r){let e,n,o;return{c(){e=m("button"),e.textContent="Truth",i(e,"class","svelte-1vuxe64")},m(t,s){g(t,e,s),n||(o=E(e,"click",r[0]),n=!0)},p:h,i:h,o:h,d(t){t&&_(e),n=!1,o()}}}function ne(r,e,n){let o;I(r,te,l=>n(1,o=l));const t=O();function s(){const l=Math.floor(Math.random()*o.length),u=o[l];t("message",u)}return[s]}class oe extends w{constructor(e){super();k(this,e,ne,se,q,{})}}function re(r){let e;return{c(){e=j(r[0])},m(n,o){g(n,e,o)},p(n,o){o&1&&K(e,n[0])},d(n){n&&_(e)}}}function le(r){let e,n,o,t,s,l,u,D,f,C,d,L,p,v;return f=new oe({}),f.$on("message",r[1]),d=new V({}),d.$on("message",r[1]),p=new Z({props:{$$slots:{default:[re]},$$scope:{ctx:r}}}),{c(){e=m("main"),n=m("img"),t=$(),s=m("h1"),s.textContent="Existential Truth-or-Dare!",l=$(),u=m("p"),u.textContent="Truth or dare with more spice!",D=$(),T(f.$$.fragment),C=$(),T(d.$$.fragment),L=$(),T(p.$$.fragment),W(n.src,o=U)||i(n,"src",o),i(n,"alt","Svelte Logo"),i(n,"class","svelte-1bhxzzi"),i(s,"class","svelte-1bhxzzi"),i(u,"class","svelte-1bhxzzi"),i(e,"class","svelte-1bhxzzi")},m(a,y){g(a,e,y),c(e,n),c(e,t),c(e,s),c(e,l),c(e,u),c(e,D),z(f,e,null),c(e,C),z(d,e,null),c(e,L),z(p,e,null),v=!0},p(a,[y]){const M={};y&5&&(M.$$scope={dirty:y,ctx:a}),p.$set(M)},i(a){v||(b(f.$$.fragment,a),b(d.$$.fragment,a),b(p.$$.fragment,a),v=!0)},o(a){x(f.$$.fragment,a),x(d.$$.fragment,a),x(p.$$.fragment,a),v=!1},d(a){a&&_(e),B(f),B(d),B(p)}}}function ae(r,e,n){let o="Choose either one!";function t(s){n(0,o=s.detail)}return[o,t]}class ie extends w{constructor(e){super();k(this,e,ae,le,q,{})}}new ie({target:document.getElementById("app")});
