import{r as I,S as w,i as k,s as q,e as d,a as m,b as g,l as M,n as h,d as _,c as N,f as O,g as S,u as F,h as P,j as R,t as b,k as x,m as $,o as T,p as c,q as D,v as B,w as V,x as W}from"./vendor.31dd166a.js";const j=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};j();function A(r){const e=Math.floor(Math.random()*r.length);return r[e]}const K=["Find your will to live",'Text your friend "goodnight. I love you." Randomly',"a","b"];var U=I(K);function z(r){let e,n,o;return{c(){e=d("button"),e.textContent="Dare",m(e,"class","svelte-1vuxe64")},m(t,s){g(t,e,s),n||(o=M(e,"click",r[0]),n=!0)},p:h,i:h,o:h,d(t){t&&_(e),n=!1,o()}}}function G(r,e,n){let o;N(r,U,i=>n(2,o=i));const t=O();let s=o;function l(){const i=A(s);s=s.filter(u=>u!==i),s.length<=0&&(s=o),t("message",i)}return[l]}class H extends w{constructor(e){super();k(this,e,G,z,q,{})}}function J(r){let e,n;const o=r[1].default,t=S(o,r,r[0],null);return{c(){e=d("blockquote"),t&&t.c(),m(e,"class","svelte-20sclv")},m(s,l){g(s,e,l),t&&t.m(e,null),n=!0},p(s,[l]){t&&t.p&&(!n||l&1)&&F(t,o,s,s[0],n?R(o,s[0],l,null):P(s[0]),null)},i(s){n||(b(t,s),n=!0)},o(s){x(t,s),n=!1},d(s){s&&_(e),t&&t.d(s)}}}function Q(r,e,n){let{$$slots:o={},$$scope:t}=e;return r.$$set=s=>{"$$scope"in s&&n(0,t=s.$$scope)},[t,o]}class X extends w{constructor(e){super();k(this,e,Q,J,q,{})}}const Y=["Until what age do you see yourself still living?","Do you think life is still worth living?","What is your main motivation to live?","What do you think is the reason we live?","In your opinion, how does one truly live?","Does anything matter?"];var Z=I(Y);function ee(r){let e,n,o;return{c(){e=d("button"),e.textContent="Truth",m(e,"class","svelte-1vuxe64")},m(t,s){g(t,e,s),n||(o=M(e,"click",r[0]),n=!0)},p:h,i:h,o:h,d(t){t&&_(e),n=!1,o()}}}function te(r,e,n){let o;N(r,Z,i=>n(2,o=i));const t=O();let s=o;function l(){const i=A(o);s=s.filter(u=>u!==i),s.length<=0&&(s=o),t("message",i)}return[l]}class se extends w{constructor(e){super();k(this,e,te,ee,q,{})}}function ne(r){let e;return{c(){e=V(r[0])},m(n,o){g(n,e,o)},p(n,o){o&1&&W(e,n[0])},d(n){n&&_(e)}}}function oe(r){let e,n,o,t,s,l,i,u,C,f,E,p,v;return u=new se({}),u.$on("message",r[1]),f=new H({}),f.$on("message",r[1]),p=new X({props:{$$slots:{default:[ne]},$$scope:{ctx:r}}}),{c(){e=d("main"),n=d("h1"),n.textContent="Existential Truth-or-Dare!",o=$(),t=d("hr"),s=$(),l=d("p"),l.textContent="Truth or dare with more spice!",i=$(),T(u.$$.fragment),C=$(),T(f.$$.fragment),E=$(),T(p.$$.fragment),m(n,"class","svelte-x0sl1i"),m(t,"class","svelte-x0sl1i"),m(l,"class","svelte-x0sl1i"),m(e,"class","svelte-x0sl1i")},m(a,y){g(a,e,y),c(e,n),c(e,o),c(e,t),c(e,s),c(e,l),c(e,i),D(u,e,null),c(e,C),D(f,e,null),c(e,E),D(p,e,null),v=!0},p(a,[y]){const L={};y&5&&(L.$$scope={dirty:y,ctx:a}),p.$set(L)},i(a){v||(b(u.$$.fragment,a),b(f.$$.fragment,a),b(p.$$.fragment,a),v=!0)},o(a){x(u.$$.fragment,a),x(f.$$.fragment,a),x(p.$$.fragment,a),v=!1},d(a){a&&_(e),B(u),B(f),B(p)}}}function re(r,e,n){let o="Choose either one!";function t(s){n(0,o=s.detail)}return[o,t]}class le extends w{constructor(e){super();k(this,e,re,oe,q,{})}}new le({target:document.getElementById("app")});
