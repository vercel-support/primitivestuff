(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{78:function(e,t,a){"use strict";a.r(t);var r=a(3),o=a(1),i=a(4),l=a(115),n=a(116),s=a(117),c=a(0);var b=Object(i.connect)(e=>{var{state:t,item:a}=e;return Object(c.jsx)(d,null,Object(c.jsx)(m,{highlight:t.theme.colors.warning},a.acf.year),Object(c.jsx)(j,{color:t.theme.colors.coal,dangerouslySetInnerHTML:{__html:a.title.rendered}}))}),d=Object(r.a)("div",{target:"e1mae5j80",label:"StyledMarker"})({name:"1bijln8",styles:"position:relative;height:100vh;z-index:-10;"}),m=Object(r.a)("div",{target:"e1mae5j81",label:"EventDate"})("z-index:-1;position:relative;font-family:'Slabo 27px';font-size:6rem;color:",e=>e.highlight,";opacity:.5;&:before{content:'☞';display:block;position:absolute;width:10rem;height:10rem;z-index:-3;top:1rem;left:-10rem;opacity:.5;}&:after{content:'';display:block;position:absolute;width:15rem;height:8rem;z-index:-2;top:.6rem;left:-2.5rem;background:white;opacity:.8;border-radius:15rem / 8rem;box-shadow:-2px -4px 3px #efefef,1px 1px 4px ",e=>e.highlight,";}"),j=Object(r.a)("h3",{target:"e1mae5j82",label:"Title"})("font-size:6rem;color:",e=>e.color,";opacity:.1;"),g=a(118),x=a(120),p=a(23);t.default=Object(i.connect)(e=>{var{state:t,actions:a}=e,r=t.source.get("/evolution-of-digital-stuff/");return Object(o.useEffect)(()=>{a.source.fetch("/evolution-of-digital-stuff/")},[]),console.log("@cpt-timeline: data",r),r.items.sort(Object(p.d)("year")),Object(c.jsx)(u,{className:"container-fluid"},Object(c.jsx)(h,null,Object(c.jsx)(l.a,null,Object(c.jsx)(n.a,null,Object(c.jsx)(s.a,null,Object(c.jsx)("h1",null,Object(c.jsx)("span",{className:"scribe"},"The Evolution of "),"Digital Stuff and Other Things"))))),Object(c.jsx)(O,null,Object(c.jsx)(l.a,null,r.isTaxonomy&&Object(c.jsx)(TimelineHeader,null,r.taxonomy,": ",t.source[r.taxonomy][r.id].name),Object(c.jsx)(g.a,{items:r.items}),Object(c.jsx)(f,null,r.items.map(e=>{var{type:a,id:r}=e,o=t.source[a][r];return Object(c.jsx)(b,{key:o.id,item:o})})))),Object(c.jsx)(x.a,null))});var u=Object(r.a)("main",{target:"e1b7lr230",label:"StyledList"})({name:"joz4tw",styles:"background-color:transparent;border-top:3px solid rgba(12,17,43,0.9);"}),h=Object(r.a)("header",{target:"e1b7lr231",label:"PageHeader"})({name:"1ccolw1",styles:".container{padding-left:2rem;padding-right:2rem;div{margin-top:1rem;padding:1rem;text-align:center;color:ivory;background:rgba(12,17,43,0.9);border-radius:5rem;h1{font-weight:400;}h1 span{display:block;color:#f79862;font-weight:300;text-shadow:2px 1px 1px rgba(123,76,49,0.9);}.col{margin-top:0;padding-top:1rem;margin-left:1.2rem;margin-right:1.2rem;border-radius:3rem;border:none;box-shadow:1px 2px 6px #000;}}}"}),O=Object(r.a)("section",{target:"e1b7lr232",label:"PageBody"})(""),f=Object(r.a)("div",{target:"e1b7lr233",label:"Midground"})({name:"138nyma",styles:"z-index:-10;"})}}]);