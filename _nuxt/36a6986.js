(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,l){"use strict";l.r(t);var n=l(24),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("footer",[l("hr"),e._v(" "),l("div",{staticClass:"mx-auto mt-4 text-center"},[l("div",[e._v("Ningbo Yinzhou Jianfeng Tempered Glass Co.,Ltd")]),e._v("\n    JF GlassTech\n  ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Footer:l(130).default})},135:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"flex justify-center py-5 mb-6"},[l("b-img",{attrs:{width:"100",src:e.blok.image.filename+"/m/"}}),e._v(" "),l("div",{staticClass:"self-center ml-1 text-gray-500"},[e._v(e._s(e.blok.name))])],1)}),[],!1,null,null,null);t.default=component.exports},166:function(e,t,l){"use strict";l.r(t);var n=l(135),r={props:{blok:{type:Object,required:!0}},components:{CategoryItem:n.default}},o=l(24),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}]},[l("div",{staticClass:"text-center text-lg text-blue-400"},[e._v("\n    "+e._s(e.blok.categoryName)+"\n  ")]),e._v(" "),l("div",e._l(e.blok.items,(function(e){return l("div",{key:e._uid},[l("categoryItem",{attrs:{blok:e}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports},167:function(e,t,l){"use strict";l.r(t);var n=l(24),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("b-navbar",[l("div",{staticClass:"flex flex-col w-full md:flex-row content-center md:justify-start"},[l("b-navbar-brand",{staticClass:"text-center mr-0 mr-md-2",attrs:{to:"/"}},[l("span",{staticClass:"text-blue-500"},[e._v("JF GlassTech")])]),e._v(" "),l("b-navbar-nav",{staticClass:"justify-center"},[l("b-nav-item",{attrs:{to:"#showroom"}},[e._v("Showroom")]),e._v(" "),l("b-nav-item",{attrs:{to:"#categories"}},[e._v("Categories")]),e._v(" "),l("b-nav-item",{attrs:{to:"#contactUs"}},[e._v("Contact Us")])],1)],1)])}),[],!1,null,null,null);t.default=component.exports},171:function(e,t,l){"use strict";var n=l(8),r=l(241),o=l(242),c=l(166),d=l(135),m=l(243),f=l(244),v=l(245),_=l(246),k=l(247);n.default.component("page",r.default),n.default.component("categories",o.default),n.default.component("category",c.default),n.default.component("categoryItem",d.default),n.default.component("showroom",m.default),n.default.component("myImage",f.default),n.default.component("contactUs",v.default),n.default.component("info",_.default),n.default.component("infoLink",k.default)},172:function(e,t,l){"use strict";t.a=function(e){var t=e.query,l=e.enablePreview;t.preview&&l()}},240:function(e,t,l){"use strict";var n=l(167),r=l(130),o={components:{Header:n.default,Footer:r.default},beforeMount:function(){var e,t,l,g,s;function n(){dataLayer.push(arguments)}e=document,t="script",l="https://app.chatwoot.com",g=e.createElement(t),s=e.getElementsByTagName(t)[0],g.src=l+"/packs/js/sdk.js",g.defer=!0,g.async=!0,s.parentNode.insertBefore(g,s),g.onload=function(){window.chatwootSDK.run({websiteToken:"L3vvGw8ULU9AXYEBP24GuUYW",baseUrl:l})},window.dataLayer=window.dataLayer||[],n("js",new Date),n("config","G-F003WTTPBP")}},c=o,d=l(24),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("Header",{staticClass:"max-w-5xl w-full mx-auto py-8"}),e._v(" "),l("Nuxt",{staticClass:"w-full pb-8"}),e._v(" "),l("Footer",{staticClass:"max-w-5xl w-full mx-auto pb-20"})],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:l(167).default,Footer:l(130).default})},241:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"mx-auto"},e._l(e.blok.body,(function(e){return l(e.component,{key:e._uid,tag:"component",attrs:{blok:e}})})),1)}),[],!1,null,null,null);t.default=component.exports},242:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"max-w-5xl mx-auto",attrs:{id:"categories"}},[l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"flex flex-col md:flex-row justify-center py-8"},e._l(e.blok.categories,(function(e){return l("div",{key:e._uid,staticClass:"bg-gray-50 mx-2 flex-auto md:mb-0 mb-10"},[l("category",{attrs:{blok:e}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Category:l(166).default})},243:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}},data:function(){return{loading:!0}},methods:{imgLoad:function(){this.loading=!1}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"max-w-5xl mx-auto",attrs:{id:"showroom"}},[l("b-carousel",{attrs:{controls:"","img-width":"1024","img-height":"480",fade:""}},[l("b-skeleton-wrapper",{attrs:{loading:e.loading},scopedSlots:e._u([{key:"loading",fn:function(){return[l("b-skeleton-img",{attrs:{aspect:"1024:480"}})]},proxy:!0}])},[e._v(" "),e._l(e.blok.images,(function(t){return l("b-carousel-slide",{key:t._uid,attrs:{"img-src":t.image.filename+"/m/",load:e.imgLoad()}})}))],2)],1)],1)}),[],!1,null,null,null);t.default=component.exports},244:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"flex py-8 mb-6"},[l("img",{attrs:{src:e.blok.image.filename}})])}),[],!1,null,null,null);t.default=component.exports},245:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"contactUs"}},[l("ul",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"max-w-5xl mx-auto py-8 mb-6"},e._l(e.blok.infos,(function(e){return l("li",{key:e._uid,staticClass:"px-6"},[l(e.component,{tag:"component",attrs:{blok:e}})],1)})),0)])}),[],!1,null,null,null);t.default=component.exports},246:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"py-8 mb-6"},[l("div",[e._v(e._s(e.blok.name))]),e._v(" "),l("div",[e._v(e._s(e.blok.value))])])}),[],!1,null,null,null);t.default=component.exports},247:function(e,t,l){"use strict";l.r(t);var n={props:{blok:{type:Object,required:!0}}},r=l(24),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"editable",rawName:"v-editable",value:e.blok,expression:"blok"}],staticClass:"flex py-4 mb-6"},[l("b-img",{attrs:{width:"20",src:e.blok.icon.filename}}),e._v(" "),l("span",{staticClass:"ml-1"},[e._v(e._s(e.blok.name))]),e._v(" "),l("b-link",{staticClass:"ml-2",attrs:{href:e.blok.link}},[l("span",{staticClass:"text-sm"},[e._v(e._s(e.blok.value))])])],1)}),[],!1,null,null,null);t.default=component.exports},249:function(e,t,l){l(250),e.exports=l(251)}},[[249,3,1,4]]]);