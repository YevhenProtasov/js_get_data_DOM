function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t,e=function(t){if(Array.isArray(t))return r(t)}(t=document.querySelectorAll(".population"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=(e=e.map(function(r){return parseInt(r.innerHTML.replace(/,/g,""),10)})).reduce(function(r,t){return r+t}),o=n/e.length,a=document.querySelector(".total-population"),i=document.querySelector(".average-population");function u(r){return r.toLocaleString("en-US")}a.innerHTML=u(n),i.innerHTML=u(o);
//# sourceMappingURL=index.e264d064.js.map
