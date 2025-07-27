import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as c}from"./index-Hemj67b4.js";import{R as d,i as g}from"./related-components-decorator-CD_MmT3s.js";import{a5 as y}from"./component-description-map-DxlGEg78.js";import{S as h}from"./Search-D8FmmD_W.js";import{H as S}from"./Heading-DErIpH5H.js";import{T as o}from"./Text-C76qTSxj.js";import{F as u}from"./Flex-Cp1baZ2x.js";const x=""+new URL("emptyStateExample-B4lkTXUM.svg",import.meta.url).href,C="_emptyStateContainer_1isdj_1",_="_emptyStateHeading_1isdj_10",r={emptyStateContainer:C,emptyStateHeading:_},E=()=>e.jsxs("div",{className:r.emptyStateContainer,"aria-labelledby":"empty-state-id",children:[e.jsx("img",{style:{width:"290px"},src:x,alt:"",role:"presentation"}),e.jsx(S,{type:"h2",id:"empty-state-id",className:r.emptyStateHeading,children:"We haven't found this component in the catalog"}),e.jsxs(o,{element:"span",type:"text1",style:{width:"50%",textAlign:"center"},ellipsis:!1,children:["Not all the components have been added to the Catalog already, please, also check the"," ",e.jsx(o,{element:"span",type:"text1",weight:"bold",children:"search in the left panel"}),"."]})]}),f=Array.from(y.keys()).map(a=>a.toLowerCase()).sort(),T=()=>{const[a,m]=c.useState(""),n=f.filter(p=>p.replaceAll("-","").includes(a.toLowerCase()));return e.jsxs(u,{direction:"column",gap:"large",align:"stretch",style:{width:"100%"},children:[e.jsx(h,{placeholder:"Search by component name...",value:a,onChange:m}),e.jsx(d,{componentsNames:n,linkTarget:g.linkTargets.PARENT}),n.length===0&&e.jsx(E,{})]})},j={title:"Catalog",tags:["internal"]},t={render:()=>e.jsx(T,{}),parameters:{docs:{sourceState:"none"},chromatic:{pauseAnimationAtEnd:!0}},tags:["internal"]};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <CatalogTemplate />,
  parameters: {
    docs: {
      sourceState: "none"
    },
    chromatic: {
      pauseAnimationAtEnd: true
    }
  },
  tags: ["internal"]
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const N=["Catalog"],M=Object.freeze(Object.defineProperty({__proto__:null,Catalog:t,__namedExportsOrder:N,default:j},Symbol.toStringTag,{value:"Module"}));export{M as C,t as a};
