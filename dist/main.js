!function(e){var n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(n){return e[n]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){const r=t(1);let a=r;a=r.map(e=>` <span> ${e.name}</span> <br> \n<span> ${e.age}</span> <br> \n<span> ${e.album}</span> <br>\n<span> ${e.single}</span>`);const o=alive.join("");document.getElementById("Lista").innerHTML=o,document.getElementById("criar").addEventListener("submit",e=>{e.preventDefault();const n=document.getElementById("name").value,t=document.getElementById("age").value,r=document.getElementById("album").value,u=document.getElementById("single").value;console.log(n,t,r,u),a.push(` <span> ${rapper.name}</span> <br> \n    <span> ${rapper.age}</span> <br> \n    <span> ${rapper.album}</span> <br>\n    <span> ${rapper.single}</span>`);alive.join("");document.getElementById("Lista").innerHTML=o})},function(e){e.exports=JSON.parse('[{"name":"Djonga","age":26,"almbum":"Ladrão","single":"Ladrão"},{"name":"Emicida","age":30,"almbum":"A rua é nois","single":"Axé"}]')}]);