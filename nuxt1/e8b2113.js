(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{348:function(t,n,o){"use strict";o.r(n);var e={data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge((function(){var n=new StoryblokBridge;n.on("input",(function(n){console.log(t.story.content),n.story.id===t.story.id&&(t.story.content=n.story.content)})),n.on(["published","change"],(function(n){t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/home",{version:"draft"}).then((function(t){return t.data})).catch((function(n){n.response?(console.error(n.response.data),t.error({statusCode:n.response.status,message:n.response.data})):(console.error(n),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},r=o(28),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",[t.story.content.component?o(t.story.content.component,{key:t.story.content._uid,tag:"component",attrs:{blok:t.story.content}}):t._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);