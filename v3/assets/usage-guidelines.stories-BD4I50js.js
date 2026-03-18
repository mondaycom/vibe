import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as d}from"./index-CTZeEbLr.js";import{L as c}from"./link-Ct1oq02L.js";const g="_usageGuidelines_1q6mt_1",m="_usageGuideline_1q6mt_1",n={usageGuidelines:g,usageGuideline:m},p=({guidelines:i=[]})=>{const l=d.useMemo(()=>i.map((o,u)=>e.jsx("li",{className:n.usageGuideline,children:o},u)),[i]);return e.jsx("ul",{className:n.usageGuidelines,children:l})},h={component:p,title:"Storybook Blocks/UsageGuidelines"},s={args:{guidelines:["Usage guideline #1",e.jsx(e.Fragment,{children:e.jsx("b",{children:"Usage guideline #2 - with JSX element"})}),e.jsxs(e.Fragment,{children:["Usage guideline #3 -",e.jsx(c,{href:"/?path=/docs/welcome--docs",children:"with link"})]})]}};var t,r,a;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    guidelines: ['Usage guideline #1', <>
        <b>Usage guideline #2 - with JSX element</b>
      </>, <>
        Usage guideline #3 -<Link href="/?path=/docs/welcome--docs">with link</Link>
      </>]
  }
}`,...(a=(r=s.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const _=["Overview"],U=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:_,default:h},Symbol.toStringTag,{value:"Module"}));export{s as O,U};
