import{R as e,r as p}from"./index-Hemj67b4.js";import{R as d,i as g}from"./related-components-decorator-CYgnvWO8.js";import{a5 as y}from"./component-description-map-CHamprFI.js";import{S as E}from"./Search-CLpGEDce.js";import{H as u}from"./Heading-C4fcuytm.js";import{T as r}from"./Text-CBUmQ7si.js";import{F as S}from"./Flex-pz2uwxlA.js";const h=""+new URL("emptyStateExample-B4lkTXUM.svg",import.meta.url).href,C="_emptyStateContainer_1isdj_1",_="_emptyStateHeading_1isdj_10",o={emptyStateContainer:C,emptyStateHeading:_},T=()=>e.createElement("div",{className:o.emptyStateContainer,"aria-labelledby":"empty-state-id"},e.createElement("img",{style:{width:"290px"},src:h,alt:"",role:"presentation"}),e.createElement(u,{type:"h2",id:"empty-state-id",className:o.emptyStateHeading},"We haven't found this component in the catalog"),e.createElement(r,{element:"span",type:"text1",style:{width:"50%",textAlign:"center"},ellipsis:!1},"Not all the components have been added to the Catalog already, please, also check the"," ",e.createElement(r,{element:"span",type:"text1",weight:"bold"},"search in the left panel"),".")),f=Array.from(y.keys()).map(a=>a.toLowerCase()).sort(),N=()=>{const[a,c]=p.useState(""),n=f.filter(i=>i.replaceAll("-","").includes(a.toLowerCase()));return e.createElement(S,{direction:"column",gap:"large",align:"stretch",style:{width:"100%"}},e.createElement(E,{placeholder:"Search by component name...",value:a,onChange:c}),e.createElement(d,{componentsNames:n,linkTarget:g.linkTargets.PARENT}),n.length===0&&e.createElement(T,null))},A={title:"Catalog",tags:["internal"]},t={render:()=>e.createElement(N,null),parameters:{docs:{sourceState:"none"},chromatic:{pauseAnimationAtEnd:!0}},tags:["internal"]};var s,l,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const x=["Catalog"],M=Object.freeze(Object.defineProperty({__proto__:null,Catalog:t,__namedExportsOrder:x,default:A},Symbol.toStringTag,{value:"Module"}));export{M as C,t as a};
