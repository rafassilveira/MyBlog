(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("pIFo"),n("8+KV"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("DNiP"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n("q1tI")),a=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],d=!1;function m(e,t){var n=t.onNewComment,r=t.language,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var o in i)e.page[o]=i[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return l.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return o.default.createElement("div",t,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!d){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),d=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){m(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){m(this,t)},this.addDisqusScript())}}]),t}(o.default.Component);u.displayName="DisqusThread",u.propTypes={id:a.default.string,shortname:a.default.string.isRequired,identifier:a.default.string,title:a.default.string,url:a.default.string,category_id:a.default.string,onNewComment:a.default.func,language:a.default.string},u.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=u},yZlL:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("Zttt"),a=n("vrFN"),s=n("vOnD"),l=n("Wbzz"),d=s.b.section.withConfig({displayName:"styled__RecommendedWrapper",componentId:"n81uje-0"})(["border-bottom:1px solid #38444d;border-top:1px solid #38444d;background:#192734;display:flex;"]),m=Object(s.b)(l.Link).withConfig({displayName:"styled__RecommendedLink",componentId:"n81uje-1"})(['align-items:center;background:#192734;color:#1fa1f2;display:flex;padding:3rem;text-decoration:none;transition:background 0.5s;width:50%;&:hover{background:#38444d;}&.previous{border-right:1px solid #38444d;}&.next{justify-content:flex-end;}&.previous:before{content:"\\2190";margin-right:0.5rem;}&.next:after{content:"\\2192";margin-left:0.5rem;}']),u=function(e){var t=e.next,n=e.previous;return i.a.createElement(d,null,n&&i.a.createElement(m,{to:n.fields.slug,className:"previous"},n.frontmatter.title),t&&i.a.createElement(m,{to:t.fields.slug,className:"next"},t.frontmatter.title))},c=n("RPjP"),f=n.n(c),p=s.b.section.withConfig({displayName:"styled__CommentsWrapper",componentId:"sc-18i4vss-0"})(['margin:auto;max-width:70rem;padding:3rem 6.4rm 3rem;iframe[src*="ads-iframe"]{display:none/}#disqus_thread{a{color:#1fa1f2 !important;}}']),g=s.b.h2.withConfig({displayName:"styled__CommentsTitle",componentId:"sc-18i4vss-1"})(["color:#fff;font-size:2.1rem;font-weight:700;padding-bottom:2rem"]),h=function(e){var t=e.url,n=e.title,r="https://rafaelssilveira.com"+t;return i.a.createElement(p,null,i.a.createElement(g,null,"Comentários"),i.a.createElement(f.a,{shortname:"rafaelssilveira",identifier:r,title:n,url:r}))},y=s.b.header.withConfig({displayName:"styled__PostHeader",componentId:"sc-1cishmr-0"})(["color:#fff;margin:auto;max-width:70rem;padding:5rem 5rem 0;"]),b=s.b.h1.withConfig({displayName:"styled__PostTitle",componentId:"sc-1cishmr-1"})(["font-size:4rem;font-weight:700;padding:0 1.4rem;margin:1rem auto;"]),w=s.b.h2.withConfig({displayName:"styled__PostDescription",componentId:"sc-1cishmr-2"})(["font-size:2rem;font-weight:200;padding:0 1.4rem;"]),v=s.b.p.withConfig({displayName:"styled__PostDate",componentId:"sc-1cishmr-3"})(["font-size:1.1rem;font-weight:100;padding:0 1.4rem;"]),_=s.b.section.withConfig({displayName:"styled__MainContent",componentId:"sc-1cishmr-4"})(["margin:auto;max-width:70rem;padding:2rem 5rem;p,h1,h2,h3,h4,ul,ol,.tags,iframe,.button-post{color:#fff;font-size:1.25rem;font-weight:300;line-height:1.7;letter-spacing:0.069rem;padding:0 1.4rem;}p{margin:0 auto 1.6rem;}h1,h2,h3,h4,h5{margin:2.4rem auto 1rem;}ul,ol{list-style:disc;padding-left:2.5rem;margin:0 auto 1.6rem;}li{padding:0.625rem 0;& > ul{margin-bottom:0;}}p,li{code{word-wrap:break-word;}}img{display:block;max-width:100%;margin:1.875rem auto;}iframe{padding:0 1.6rem 1.6rem;width:100%;}blockquote{color:#fff;border-left:0.3rem solid #1fa1f2;padding:0 1.875rem;margin:3.125rem auto;}hr{border:1px solid #38444d;margin:3rem auto;}#twitter-widget-0,.instagram-media,.twitter-tweet{margin:20px auto !important;}h1,h2,h3,h4,h5{font-weight:800;letter-spacing:0.069rem;line-height:1.4;}h1{font-size:2.8rem;}h2{font-size:2.1rem;}h3{font-size:1.6rem;}h4{font-size:1.4rem;}h5{font-size:1.2rem;}strong{font-weight:700;}.gatsby-resp-image-background-image{z-index:2;opacity:1 !important;}.gatsby-resp-image-image{box-shadow:none !important;transition:opacity 0.2s;&.lazyload{opacity:0;}&.lazyloaded{opacity:1;z-index:3;}}.gatsby-highlight{padding:0 1.6rem 1.6rem;}.instagram-media{margin:1rem auto !important;}a{border-bottom:1px dashed #1fa1f2;color:#1fa1f2;text-decoration:none;transition:opacity 0.5s;svg{color:#fff;}&:hover{opacity:0.8;}}"]);n.d(t,"query",(function(){return x}));var x="1126272150";t.default=function(e){var t=e.data,n=e.pageContext,r=t.markdownRemark,s=n.nextPost,l=n.previousPost;return i.a.createElement(o.a,null,i.a.createElement(a.a,{title:r.frontmatter.title}),i.a.createElement(y,null,i.a.createElement(v,null,r.frontmatter.date," • ",r.timeToRead," min de leitura"),i.a.createElement(b,null,r.frontmatter.title),i.a.createElement(w,null,r.frontmatter.description)),i.a.createElement(_,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),i.a.createElement(u,{next:s,previous:l}),i.a.createElement(h,{url:r.fields.slug,title:r.frontmatter.title}),"s")}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-53b910ac556284a0aee7.js.map