(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{261:function(t,e,n){"use strict";var o=n(262),r=n.n(o);e.default=r.a},262:function(t,e){},263:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("13828767",content,!0,{sourceMap:!1})},264:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("982fafbe",content,!0,{sourceMap:!1})},265:function(t,e,n){t.exports=n.p+"img/logo_ska-400.e375b3d.png"},266:function(t,e,n){"use strict";n(263)},267:function(t,e,n){var o=n(29)(!1);o.push([t.i,".text-vertical-line{line-height:50px!important}",""]),t.exports=o},268:function(t,e,n){"use strict";n(266);var o=n(15),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"bg-white pt-2 pb-5 assessoria"},[o("b-container",[o("b-row",[o("b-col",{staticClass:"mt-4",attrs:{cols:"12",md:"12",lg:"12"}},[o("h3",{staticClass:"text-title text-imobanco title-font"},[t._v("Assessoria de Imprensa")])]),t._v(" "),o("b-col",{staticClass:"mt-2",attrs:{cols:"6",md:"4",lg:"2"}},[o("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:n(265),alt:"ska"}})]),t._v(" "),o("b-col",{staticClass:"pt-5",attrs:{cols:"12",md:"4",lg:"4"}},[o("p",{staticClass:"text-content"},[t._v("contato@skacomunicacao.com.br"),o("br"),t._v("www.skacomunicacao.com.br")])])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("0f94f911",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";var o=n(275),r=n(261),c=(n(272),n(15)),component=Object(c.a)(r.default,o.a,o.b,!1,null,null,null);e.default=component.exports},271:function(t,e,n){t.exports=n.p+"img/g4570imprensa.8d98c80.png"},272:function(t,e,n){"use strict";n(264)},273:function(t,e,n){var o=n(29),r=n(116),c=n(274),l=o(!1),f=r(c);l.push([t.i,".slideimprensa{height:500px;background-image:url("+f+")!important;background-color:#4032ec;background-size:100% auto cover;background-position:top;background-repeat:no-repeat}",""]),t.exports=l},274:function(t,e,n){t.exports=n.p+"img/bg-imprensa.bde6e71.jpg"},275:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"pt-5"},[o("b-container",[o("b-row",{staticClass:"mt-lg-5 mt-md-3"},[o("b-col",{staticClass:"text-centet",attrs:{cols:"12",md:"6",lg:"6"}},[o("h1",{staticClass:"text-title text-imobanco mt-5 title-font"},[t._v("Imprensa")]),t._v(" "),o("p",{staticClass:"text-content"},[t._v("Comunicados, Realease e notícias.")])]),t._v(" "),o("b-col",{staticClass:"text-centet",attrs:{cols:"12",md:"6",lg:"6"}},[o("img",{staticClass:"img-fluid",attrs:{src:n(271),alt:""}})])],1)],1)],1)},r=[]},276:function(t,e,n){"use strict";n(269)},277:function(t,e,n){var o=n(29)(!1);o.push([t.i,"section[data-v-160abb45]{padding-top:25px;padding-bottom:50px}",""]),t.exports=o},278:function(t,e,n){"use strict";var o=n(20),r=(n(61),n(9),{name:"App",props:["titulo"],components:{Noticias:n(117).a},data:function(){return{response:null}},methods:{getContent:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$prismic.client.query(t.$prismic.Predicates.at("document.type","post"));case 2:n=e.sent,t.response=n.results.slice(0,3);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getContent()}}),c=(n(276),n(15)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-container",[n("b-row",[n("b-col",{staticClass:"text-left",attrs:{cols:"12",md:"6",lg:"12"}},[n("h3",{staticClass:"text-imobanco text-title title-font"},[t._v(t._s(t.titulo))])])],1),t._v(" "),n("b-row",t._l(t.response,(function(e){return n("b-col",{key:e,staticClass:"text-left mt-2",attrs:{cols:"12",md:"6",lg:"4","v-if":t.response}},[n("Noticias",{attrs:{post_id:t.response[t.response.indexOf(e)].id,post_title:t.response[t.response.indexOf(e)].data.titulo[0].text,post_image:t.response[t.response.indexOf(e)].data.imagem.url,post_date:t.response[t.response.indexOf(e)].first_publication_date.split("T")[0].split("-").reverse().join("/"),post_content:t.response[t.response.indexOf(e)].data.conteudo[0].text}})],1)})),1)],1)],1)}),[],!1,null,"160abb45",null);e.a=component.exports},303:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("c56e82b6",content,!0,{sourceMap:!1})},358:function(t,e,n){"use strict";n(303)},359:function(t,e,n){var o=n(29)(!1);o.push([t.i,".box[data-v-6b486696]{box-shadow:1px 4px 5px -2px rgba(80,79,79,.75);-webkit-box-shadow:1px 4px 5px -2px rgba(80,79,79,.75);-moz-box-shadow:1px 4px 5px -2px rgba(80,79,79,.75)}",""]),t.exports=o},390:function(t,e,n){"use strict";n.r(e);var o=n(20),r=(n(61),n(9),{props:["release"],data:function(){return{link:"/release-single/?post_id="}}}),c=n(15),l={name:"App",components:{Release:Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{staticClass:"text-left",attrs:{cols:"12",md:"12",lg:"12"}},[n("p",{staticStyle:{"font-size":"12px"}},[t._v("Entrevista "+t._s(t.release.data.data.split("-").reverse().join("/")))])]),t._v(" "),n("b-col",{staticClass:"text-left",attrs:{cols:"12",md:"12",lg:"3"}},[n("img",{staticClass:"img-fluid pb-3",attrs:{src:"image/bg-imo.jpg",alt:""}})]),t._v(" "),n("b-col",{staticClass:"text-left",attrs:{cols:"12",md:"12",lg:"9"}},[n("a",{staticStyle:{color:"#121421"},attrs:{href:t.link+t.release.id}},[n("h5",[t._v(t._s(t.release.data.titulo[0].text))])]),t._v(" "),n("p",[t._v(t._s(t.release.data.conteudo[0].text))]),t._v(" "),n("a",{staticClass:"text-success",staticStyle:{"font-size":"14px"},attrs:{href:t.link+t.release.id}},[t._v("Leia mais")])])],1)}),[],!1,null,"50d41b5b",null).exports},data:function(){return{response:null}},methods:{getContent:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$prismic.client.query(t.$prismic.Predicates.at("document.type","releases"));case 2:n=e.sent,t.response=n.results.slice(0,2);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getContent()}},f=(n(358),Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"justify-content-center pt-5 pb-5"},[n("b-col",{staticClass:"text-left",attrs:{cols:"12",md:"12",lg:"12"}},[n("h1",{staticClass:"text-imobanco text-title mt-3 mb-4 title-font"},[t._v("Release imprensa")])]),t._v(" "),n("b-col",{staticClass:"text-left bg-graylight form-radius pt-5 pb-5 box",attrs:{cols:"12",md:"12",lg:"12"}},t._l(t.response,(function(e){return n("div",{key:e,attrs:{"v-if":t.response}},[n("Release",{attrs:{release:e,release_id:e.id}})],1)})),0)],1)],1)}),[],!1,null,"6b486696",null).exports),d=n(270),m=n(278),x=n(268),v={components:{ReleaseSection:f,ImprensaSlide:d.default,NoticiasSection:m.a,FooterImprensa:x.a}},_=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("imprensa-slide"),t._v(" "),n("ReleaseSection"),t._v(" "),n("noticias-section",{attrs:{titulo:"Notícias"}}),t._v(" "),n("footer-imprensa")],1)}),[],!1,null,null,null);e.default=_.exports}}]);