(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[6],{208:function(e,t,c){},219:function(e,t,c){"use strict";c.r(t);var a=c(4),r=c(1),n=c(42),s=c(24),i=c(25),o=c(28),l=c(30),u=c(31),j=c(0),h=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(i.a)(c,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(j.jsx)(u.a,{}):this.props.children}}]),c}(r.Component),b=c(41),d=c(34),m=(c(97),c.p+"static/media/mjolnir.61f31e18.png"),f=function(e){var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=r.includes("image_not_available")?{objectFit:"contain"}:{};return Object(j.jsxs)("div",{className:"randomchar__block",children:[Object(j.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(j.jsxs)("div",{className:"randomchar__info",children:[Object(j.jsx)("p",{className:"randomchar__name",children:c}),Object(j.jsx)("p",{className:"randomchar__descr",children:a}),Object(j.jsxs)("div",{className:"randomchar__btns",children:[Object(j.jsx)("a",{href:n,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},O=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(d.a)(),i=s.process,o=s.setProcess,l=s.getCharacter,u=s.clearError,h=function(){u();var e=Math.floor(400*Math.random()+1011e3);l(e).then(O).then((function(){return o("confirmed")}))},O=function(e){n(e)};return Object(r.useEffect)((function(){h()}),[]),Object(j.jsxs)("div",{className:"randomchar",children:[Object(b.a)(i,f,c),Object(j.jsxs)("div",{className:"randomchar__static",children:[Object(j.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(j.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(j.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(j.jsx)("button",{className:"button button__main",onClick:h,children:Object(j.jsx)("div",{className:"inner",children:"try it"})}),Object(j.jsx)("img",{src:m,alt:"mjolnir",className:"randomchar__decoration"})]})]})},p=c(36),x=c.n(p),v=c(33),_=c(37),g=c(9),N=(c(98),function(e){var t=Object(d.a)(),c=t.process,n=t.setProcess,s=t.getAllCharacters,i=t.baseLimit,o=t.baseOffset,l=Object(r.useState)([]),h=Object(a.a)(l,2),b=h[0],m=h[1],f=Object(r.useState)(!1),O=Object(a.a)(f,2),p=O[0],N=O[1],k=Object(r.useState)(o),w=Object(a.a)(k,2),y=w[0],C=w[1],E=Object(r.useState)(!1),S=Object(a.a)(E,2),F=S[0],P=S[1];Object(r.useEffect)((function(){T(y,!0)}),[]);var T=function(e,t){N(!t),s(e).then(M).then((function(){return n("confirmed")}))},M=function(){var e=Object(_.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=!1,t.length<i&&(c=!0),m([].concat(Object(v.a)(b),Object(v.a)(t))),N(!1),C(y+i),P(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(r.useRef)([]),I=function(e){D.current.forEach((function(e){return e.classList.remove("char__item_selected")})),D.current[e].classList.add("char__item_selected"),D.current[e].focus()},L=Object(r.useMemo)((function(){return function(e,t,c){switch(e){case"waiting":return Object(j.jsx)(g.a,{});case"loading":return c?Object(j.jsx)(t,{}):Object(j.jsx)(g.a,{});case"confirmed":return Object(j.jsx)(t,{});case"error":return Object(j.jsx)(u.a,{});default:throw new Error("Unexpected process state")}}(c,(function(){return function(t){var c=t.map((function(t,c){var a=t.name,r=t.thumbnail,n=t.id,s=r.includes("image_not_available")?{objectPosition:"top",objectFit:"fill"}:{};return Object(j.jsxs)("li",{className:"char__item",tabIndex:"0",ref:function(e){return D.current[c]=e},onClick:function(){e.onCharSelected(n),I(c)},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(n),I(c))},children:[Object(j.jsx)("img",{src:r,alt:a,style:s}),Object(j.jsx)("div",{className:"char__name",children:a})]})}));return Object(j.jsx)("ul",{className:"char__grid",children:c})}(b)}),p)}),[c]);return Object(j.jsxs)("div",{className:"char__list",children:[L,Object(j.jsx)("button",{disabled:p,style:{display:F?"none":"block"},className:"button button__main button__long",onClick:function(){return T(y)},children:Object(j.jsx)("div",{className:"inner",children:p?"loading...":"load more"})})]})}),k=c(5),w=(c(99),function(e){for(var t=e.data,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o=r.includes("image_not_available")?{objectFit:"contain"}:{},l=[],u=0;u<i.length&&!(u>=10);u++){var h=i[u].resourceURI.match(/\d{2,}/g)[0];l.push(Object(j.jsx)("li",{className:"char__comics-item",children:h?Object(j.jsx)(k.b,{to:"/comics/".concat(h),children:i[u].name}):Object(j.jsx)("span",{children:i[u].name})},u))}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"char__basics",children:[Object(j.jsx)("img",{src:r,alt:c,style:o}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"char__info-name",children:c}),Object(j.jsxs)("div",{className:"char__btns",children:[Object(j.jsx)("a",{href:n,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(j.jsx)("div",{className:"char__descr",children:a}),Object(j.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(j.jsx)("ul",{className:"char__comics-list",children:l.length>0?l:"There is no comics about this character."})]})}),y=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),n=c[0],s=c[1],i=Object(d.a)(),o=i.process,l=i.setProcess,u=i.getCharacter,h=i.clearError,m=function(e){s(e)};return Object(r.useEffect)((function(){!function(){var t=e.charID;t&&(h(),u(t).then(m).then((function(){return l("confirmed")})))}()}),[e.charID]),Object(j.jsx)("div",{className:"char__info",children:Object(b.a)(o,w,n)})},C=c(213),E=c(214),S=(c(208),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],s=Object(d.a)(),i=s.process,o=s.setProcess,l=s.getCharacterByName,u=s.clearError,h=function(e){n(e)},m="error"===i?Object(j.jsx)("div",{className:"char__search-critical-error",children:Object(b.a)("error")}):null,f=c?c.length>0?Object(j.jsxs)("div",{className:"char__search-wrapper",children:[Object(j.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(j.jsx)(k.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"To page"})})]}):Object(j.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(j.jsxs)("div",{className:"char__search-form",children:[Object(j.jsx)(C.d,{initialValues:{charName:""},validationSchema:Object(E.a)({charName:Object(E.b)().min(2,"Min 2 symbols").required("This field is required")}),onSubmit:function(e){return function(e){u(),l(e).then(h).then((function(){return o("confirmed")}))}(e.charName)},children:Object(j.jsxs)(C.c,{children:[Object(j.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(j.jsxs)("div",{className:"char__search-wrapper",children:[Object(j.jsx)(C.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(j.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===i,children:Object(j.jsx)("div",{className:"inner",children:"loading"===i?"searching...":"Find"})})]}),Object(j.jsx)(C.a,{component:"div",className:"char__search-error",name:"charName"})]})}),m,f]})}),F=c.p+"static/media/vision.067d4ae1.png";t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(n.a,{children:[Object(j.jsx)("meta",{name:"description",content:"Marvel information portal"}),Object(j.jsx)("title",{children:"Marvel information portal"})]}),Object(j.jsx)(h,{children:Object(j.jsx)(O,{})}),Object(j.jsxs)("div",{className:"char__content",children:[Object(j.jsx)(h,{children:Object(j.jsx)(N,{onCharSelected:function(e){s(e)}})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{children:Object(j.jsx)(y,{charID:c})}),Object(j.jsx)(h,{children:Object(j.jsx)(S,{})})]})]}),Object(j.jsx)("img",{className:"bg-decoration",src:F,alt:"vision"})]})}},31:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(0);t.a=function(){return Object(r.jsx)("img",{src:a,alt:"Error",style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"}})}},34:function(e,t,c){"use strict";var a=c(36),r=c.n(a),n=c(37),s=c(4),i=c(1),o=function(){var e=Object(i.useState)("waiting"),t=Object(s.a)(e,2),c=t[0],a=t[1];return{request:Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a("loading"),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),a("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){return a("loading")}),[]),process:c,setProcess:a}};t.a=function(){var e=o(),t=e.request,c=e.clearError,a=e.process,s=e.setProcess,i="https://gateway.marvel.com:443/v1/public/",l="apikey=e2f258598bf2326923fd80f90969ebb1",u=120,j=function(e){return{id:e.id,name:e.name,description:e.description||"There is no data about this character.",thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},h=function(e){return{id:e.id,title:e.title,thumbnail:"".concat(e.thumbnail.path,".").concat(e.thumbnail.extension),price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available",description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us"}},b=function(){var e=Object(n.a)(r.a.mark((function e(){var c,a,n,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.length>0&&void 0!==s[0]?s[0]:u,a=s.length>1&&void 0!==s[1]?s[1]:9,e.next=4,t("".concat(i,"characters?limit=").concat(a,"&offset=").concat(c,"&").concat(l));case 4:return n=e.sent,e.abrupt("return",n.data.results.map(j));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(i,"characters/").concat(c,"?").concat(l));case 2:return a=e.sent,e.abrupt("return",j(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(r.a.mark((function e(){var c,a,n,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.length>0&&void 0!==s[0]?s[0]:u,a=s.length>1&&void 0!==s[1]?s[1]:8,e.next=4,t("".concat(i,"comics?orderBy=issueNumber&limit=").concat(a,"&offset=").concat(c,"&").concat(l));case 4:return n=e.sent,e.abrupt("return",n.data.results.map(h));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(i,"comics/").concat(c,"?").concat(l));case 2:return a=e.sent,e.abrupt("return",h(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{process:a,baseLimit:9,baseLimitForComics:8,baseOffset:u,getAllCharacters:b,getCharacter:d,getCharacterByName:function(){var e=Object(n.a)(r.a.mark((function e(c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t("".concat(i,"characters?name=").concat(c,"&").concat(l));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(j));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllComics:m,getComics:f,clearError:c,setProcess:s}}},41:function(e,t,c){"use strict";c(51);var a=c(0),r=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(a.jsxs)("div",{className:"skeleton",children:[Object(a.jsxs)("div",{className:"pulse skeleton__header",children:[Object(a.jsx)("div",{className:"pulse skeleton__circle"}),Object(a.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"}),Object(a.jsx)("div",{className:"pulse skeleton__block"})]})]})},n=c(9),s=c(31);t.a=function(e,t,c){switch(e){case"waiting":return Object(a.jsx)(r,{});case"loading":return Object(a.jsx)(n.a,{});case"confirmed":return Object(a.jsx)(t,{data:c});case"error":return Object(a.jsx)(s.a,{});default:throw new Error("Unexpected process state")}}},51:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}}]);
//# sourceMappingURL=6.a86fd446.chunk.js.map