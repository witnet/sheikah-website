(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{182:function(t,e,n){var content=n(187);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("b26509f2",content,!0,{sourceMap:!1})},183:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(20),n(71),n(27),n(28),n(14),n(190)),l=n.n(o),c="https://api.github.com/repos/witnet/sheikah/releases/latest";function f(t){var e=t.platform;return["Win","Mac","Linux"].find((function(t){return e.includes(t)}))||"Linux"}function m(t){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(c).then(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,o,l,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e).toLowerCase();case 2:return r=t.sent,t.next=5,n.data.assets.find((function(t){return t.browser_download_url.includes(".dmg")}));case 5:return o=t.sent,t.next=8,n.data.assets.find((function(t){return t.browser_download_url.includes(".AppImage")}));case 8:return l=t.sent,t.next=11,n.data.assets.find((function(t){return t.browser_download_url.includes(".exe")}));case 11:return c=t.sent,m={linux:{platform:"GNU / Linux",releaseUrl:l.browser_download_url,downloadName:l.name},win:{platform:"Windows",releaseUrl:c.browser_download_url,downloadName:c.name},mac:{platform:"Mac OS",releaseUrl:o.browser_download_url,downloadName:c.name}},t.abrupt("return",m[r]);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h={fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(navigator);case 2:t.release=e.sent;case 3:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,data:function(){return{release:{releaseUrl:"",downloadName:"",platform:""}}}},x=n(41),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.release.platform?n("a",{staticClass:"link",attrs:{href:t.release.releaseUrl,download:t.release.downloadName}},[n("ElButton",{staticClass:"btn",attrs:{type:"primary"}},[n("i18n",{attrs:{path:"download",tag:"span"},scopedSlots:t._u([{key:"platform",fn:function(){return[n("span",[t._v(t._s(t.release.platform))])]},proxy:!0}],null,!1,136502316)})],1)],1):n("a",{staticClass:"link",attrs:{href:"https://github.com/witnet/sheikah/releases/latest"}},[n("ElButton",{staticClass:"btn",attrs:{type:"primary"}},[t._v(t._s(t.$t("head.name")))])],1)}),[],!1,null,null,null);e.default=component.exports},184:function(t,e,n){t.exports=n.p+"img/sheikah-icon.4c7c34a.svg"},185:function(t,e,n){t.exports=n.p+"img/sheikah-app-image.7b21fa6.png"},186:function(t,e,n){"use strict";n(182)},187:function(t,e,n){var r=n(45),o=n(188),l=n(189),c=r(!1),f=o(l);c.push([t.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center;background:url("+f+') 100% no-repeat}.container .left-column{max-width:500px}.container .app-image{width:600px;margin-left:112px;box-shadow:0 6px 30px 5px rgba(155,81,224,.25)}.container .header{display:flex;align-items:center}.container .header .logo-title{margin-left:16px;font-size:2em;color:#444258;font-weight:700;font-family:"Catamaran"}.container .header .logo-title .wallet{font-weight:400}.container .title{color:#333;font-family:"Raleway";text-align:left;font-size:3em;font-weight:bolder;margin-top:32px;max-width:500px}.container .description{color:#5d5a77;font-weight:400;margin-top:16px;text-align:left;font-size:1.3em}.container .links{display:flex;margin-top:24px;width:100%}.container .links .link{width:100%}.container .footer{color:#5d5a77;text-align:left;margin-top:16px}@media (max-width:700px){.container .app-image{display:none}.container .left-column{max-width:90vw;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between}.container .left-column .header{margin-top:16px}.container .left-column .footer{margin-bottom:16px}.container .left-column .links{flex-direction:column}.container .left-column .btn{width:100%}.container .left-column .link{margin-top:8px;margin-left:0;justify-content:center}}@media (max-width:1200px) and (min-width:768px){.container{flex-direction:column;justify-content:space-around}.container .app-image{display:block;margin-left:0}.container .left-column{max-width:90vw}.container .left-column .header{margin-top:16px}.container .left-column .footer{margin-bottom:16px}.container .left-column .links{flex-direction:column}.container .left-column .btn{width:100%}.container .left-column .link{margin-top:8px;margin-left:0;justify-content:center}}@media (max-width:700px){.app-image{display:none}.container .left-column{max-width:90vw;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between}.container .left-column .header{margin-top:16px}.container .left-column .footer{margin-bottom:16px}.container .left-column .links{flex-direction:column}.container .left-column .btn{width:100%}.container .left-column .link{margin-top:8px;margin-left:0;justify-content:center}}',""]),t.exports=c},188:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},189:function(t,e,n){t.exports=n.p+"img/sheikah-icon-in-background.5911a0e.png"},199:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:this.$t("head.title"),meta:[{name:this.$t("head.name"),content:this.$t("description")}]}}},o=(n(186),n(41)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"left-column"},[r("div",{staticClass:"header"},[r("img",{staticClass:"logo",attrs:{src:n(184),alt:"sheikah logo"}}),t._v(" "),r("i18n",{staticClass:"logo-title",attrs:{tag:"h1",path:"logo.template"}},[r("span",[t._v(t._s(t.$t("logo.sheikah")))]),t._v(" "),r("span",{staticClass:"wallet"},[t._v(t._s(t.$t("logo.wallet")))])])],1),t._v(" "),r("i18n",{staticClass:"title",attrs:{tag:"h2",path:"title"}},[r("br")]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.$t("description")))]),t._v(" "),r("div",{staticClass:"links"},[r("Download")],1),t._v(" "),r("i18n",{staticClass:"footer",attrs:{path:"source_code",tag:"p"},scopedSlots:t._u([{key:"github",fn:function(){return[r("a",{attrs:{href:"https://github.com/witnet/sheikah"}},[t._v("Github")])]},proxy:!0}])})],1),t._v(" "),r("img",{staticClass:"app-image",attrs:{src:n(185),alt:"app image"}})])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Download:n(183).default})},217:function(t,e,n){"use strict";n.r(e);var r=n(199).default,o=n(41),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports}}]);