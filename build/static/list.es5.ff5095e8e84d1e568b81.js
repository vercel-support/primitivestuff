(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a(1),l=a(6),i=a(480),s=a(481),c=a(482),o=a(26),b=a(192),j=a(141),m=a(0);var g=Object(l.connect)((function(e){var t=e.state,a=e.item,r=t.source.author[a.author],n=new Date(a.date);return Object(m.jsx)("article",{className:"col"},Object(m.jsx)(o.a,{link:a.link},Object(m.jsx)(u,{dangerouslySetInnerHTML:{__html:a.title.rendered}})),Object(m.jsx)(x,null,Object(m.jsx)(p,null,n.toDateString()),Object(m.jsx)(O,{link:r.link},Object(m.jsx)(d,null,Object(m.jsx)("b",null,r.name)," was 'ere..."))),t.theme.featured.showOnList&&Object(m.jsx)(O,{link:a.link},Object(m.jsx)(b.a,{id:a.featured_media})),Object(m.jsx)(h,{dangerouslySetInnerHTML:{__html:a.excerpt.rendered}}),Object(m.jsx)(j.a,{text:"Read More",link:a.link,colors:[t.theme.colors.coal,t.theme.colors.green,t.theme.colors.brightlime]}))})),u=Object(r.a)("h2",{target:"e1g1iva0",label:"Title"})({name:"1ckvcjp",styles:"margin:0;padding:1rem 1rem 1.5rem;color:rgba(12,17,43,0.9);text-align:center;&:hover{text-shadow:2px 1px 0 rgba(255,192,203,.8);text-decoration:underline;}"}),x=Object(r.a)("span",{target:"e1g1iva1",label:"Meta"})({name:"xi606m",styles:"text-align:center;"}),d=Object(r.a)("span",{target:"e1g1iva2",label:"Author"})({name:"158q3hb",styles:'color:rgba(12,17,43,0.9);font-family:"Amatic SC";font-size:0.9em;'}),O=Object(r.a)(o.a,{target:"e1g1iva3",label:"StyledLink"})({name:"1wu7n8k",styles:"display:block;margin:0;padding:0;text-align:center;"}),p=Object(r.a)("span",{target:"e1g1iva4",label:"PostDate"})({name:"1vyw25",styles:"display:block;margin:0;padding:0;color:rgba(12,17,43,0.7);font-size:1rem;font-family:Courier;text-align:center;line-height:1.2rem;"}),h=Object(r.a)("div",{target:"e1g1iva5",label:"Excerpt"})({name:"1mvwdxz",styles:"padding:3.2rem 1.5rem 2rem;margin-bottom:5rem;text-align:center;p{color:rgba(12,17,43,.7);font-family:Baskerville,Georgia,serif;font-size:1.5rem;font-weight:550;line-height:2.5rem;text-shadow:1px 1px 0 rgba(255,192,203,.4);}"});var y=Object(l.connect)((function(e){var t=e.state,a=e.actions,r=e.libraries,l=t.source.get(t.router.link).totalPages,i=r.source.parse(t.router.link),s=i.path,c=i.page,b=i.query,j=c<l,g=c>1,u=r.source.stringify({path:s,page:c+1,query:b}),x=r.source.stringify({path:s,page:c-1,query:b});return Object(n.useEffect)((function(){j&&a.source.fetch(u)}),[]),Object(m.jsx)("div",null,j&&Object(m.jsx)(o.a,{link:u},Object(m.jsx)(f,null,"← Older posts")),g&&j&&" - ",g&&Object(m.jsx)(o.a,{link:x},Object(m.jsx)(f,null,"Newer posts →")))})),f=Object(r.a)("em",{target:"e16cnu0g0",label:"Text"})({name:"xhf1f8",styles:"display:inline-block;margin-top:16px;"});t.default=Object(l.connect)((function(e){var t=e.state,a=t.source.get(t.router.link);return Object(m.jsx)(v,{className:"container"},Object(m.jsx)(i.a,null,Object(m.jsx)(s.a,null,Object(m.jsx)(c.a,null,Object(m.jsx)(k,null,"Cavetalk"))),a.isTaxonomy&&Object(m.jsx)(w,null,a.taxonomy,": ",t.source[a.taxonomy][a.id].name),a.isAuthor&&Object(m.jsx)(w,null,"Posts by: ",t.source.author[a.id].name),a.items.map((function(e){var a=e.type,r=e.id,n=t.source[a][r];return Object(m.jsx)(g,{key:n.id,item:n})}))),Object(m.jsx)(y,null))}));var v=Object(r.a)("main",{target:"ediwvi40",label:"StyledMain"})({name:"13m33so",styles:'background-color:transparent;padding:2rem 0 3rem;h2{font-family:"Playfair Display";}'}),k=Object(r.a)("h1",{target:"ediwvi41",label:"PageHead"})({name:"sg5xtt",styles:"margin-bottom:1rem;color:rgba(12,17,43,0.7);text-align:center;text-transform:uppercase;letter-spacing:1.2rem;font-size:1.5rem;line-height:1.6;text-shadow:1px 1px rgba(173,216,230,.5)"}),w=Object(r.a)("h2",{target:"ediwvi42",label:"Header"})({name:"p2cv",styles:"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);"})}}]);