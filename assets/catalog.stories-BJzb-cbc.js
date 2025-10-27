import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as c}from"./index-CTZeEbLr.js";import{R as d,i as g,D as y}from"./related-components-decorator-D_ts2ivh.js";import{S as h}from"./Search-C81d4DZP.js";import{H as S}from"./Heading-D9en9pf2.js";import{T as s}from"./Text-BwLUW2oo.js";import{F as u}from"./Flex-DYzKCQWz.js";const x=""+new URL("emptyStateExample-B4lkTXUM.svg",import.meta.url).href,C="_emptyStateContainer_1isdj_1",_="_emptyStateHeading_1isdj_10",n={emptyStateContainer:C,emptyStateHeading:_},E=()=>e.jsxs("div",{className:n.emptyStateContainer,"aria-labelledby":"empty-state-id",children:[e.jsx("img",{style:{width:"290px"},src:x,alt:"",role:"presentation"}),e.jsx(S,{type:"h2",id:"empty-state-id",className:n.emptyStateHeading,children:"We haven't found this component in the catalog"}),e.jsxs(s,{element:"span",type:"text1",style:{width:"50%",textAlign:"center"},ellipsis:!1,children:["Not all the components have been added to the Catalog already, please, also check the"," ",e.jsx(s,{element:"span",type:"text1",weight:"bold",children:"search in the left panel"}),"."]})]}),T=Array.from(y.keys()).sort(),f=()=>{const[a,m]=c.useState(""),o=T.filter(p=>p.toLowerCase().replaceAll("-","").includes(a.toLowerCase()));return e.jsxs(u,{direction:"column",gap:"large",align:"stretch",style:{width:"100%"},children:[e.jsx(h,{placeholder:"Search by component name...",value:a,onChange:m}),e.jsx(d,{componentsNames:o,linkTarget:g.linkTargets.PARENT}),o.length===0&&e.jsx(E,{})]})},j={title:"Catalog"},t={render:()=>e.jsx(f,{}),parameters:{docs:{sourceState:"none"},chromatic:{pauseAnimationAtEnd:!0}},tags:["!dev"]};var r,l,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <CatalogTemplate />,
  parameters: {
    docs: {
      sourceState: "none"
    },
    chromatic: {
      pauseAnimationAtEnd: true
    }
  },
  tags: ["!dev"]
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const N=["Catalog"],P=Object.freeze(Object.defineProperty({__proto__:null,Catalog:t,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{P as C,t as a};
