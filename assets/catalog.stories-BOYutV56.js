import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as c}from"./index-Hemj67b4.js";import{R as d,i as g}from"./related-components-decorator-Doi47vP3.js";import{a5 as y}from"./component-description-map-CeVoAdev.js";import{S as h}from"./Search-COdCPLHa.js";import{H as S}from"./Heading-BZd342nE.js";import{T as s}from"./Text-C4UM3wLo.js";import{F as u}from"./Flex-2Q04fxOc.js";const x=""+new URL("emptyStateExample-B4lkTXUM.svg",import.meta.url).href,C="_emptyStateContainer_1isdj_1",_="_emptyStateHeading_1isdj_10",r={emptyStateContainer:C,emptyStateHeading:_},E=()=>e.jsxs("div",{className:r.emptyStateContainer,"aria-labelledby":"empty-state-id",children:[e.jsx("img",{style:{width:"290px"},src:x,alt:"",role:"presentation"}),e.jsx(S,{type:"h2",id:"empty-state-id",className:r.emptyStateHeading,children:"We haven't found this component in the catalog"}),e.jsxs(s,{element:"span",type:"text1",style:{width:"50%",textAlign:"center"},ellipsis:!1,children:["Not all the components have been added to the Catalog already, please, also check the"," ",e.jsx(s,{element:"span",type:"text1",weight:"bold",children:"search in the left panel"}),"."]})]}),f=Array.from(y.keys()).map(a=>a.toLowerCase()).sort(),T=()=>{const[a,m]=c.useState(""),o=f.filter(p=>p.replaceAll("-","").includes(a.toLowerCase()));return e.jsxs(u,{direction:"column",gap:"large",align:"stretch",style:{width:"100%"},children:[e.jsx(h,{placeholder:"Search by component name...",value:a,onChange:m}),e.jsx(d,{componentsNames:o,linkTarget:g.linkTargets.PARENT}),o.length===0&&e.jsx(E,{})]})},j={title:"Catalog"},t={render:()=>e.jsx(T,{}),parameters:{docs:{sourceState:"none"},chromatic:{pauseAnimationAtEnd:!0}},tags:["!dev"]};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const N=["Catalog"],M=Object.freeze(Object.defineProperty({__proto__:null,Catalog:t,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{M as C,t as a};
