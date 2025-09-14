import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as u}from"./index-CTZeEbLr.js";import{L as g}from"./link-CmdT0LNT.js";const c="_usageGuidelines_1q6mt_1",m="_usageGuideline_1q6mt_1",n={usageGuidelines:c,usageGuideline:m},p=({guidelines:i=[]})=>{const l=u.useMemo(()=>i.map((o,d)=>e.jsx("li",{className:n.usageGuideline,children:o},d)),[i]);return e.jsx("ul",{className:n.usageGuidelines,children:l})};try{usageguidelines.displayName="usageguidelines",usageguidelines.__docgenInfo={description:"",displayName:"usageguidelines",props:{guidelines:{defaultValue:{value:"[]"},description:"",name:"guidelines",required:!1,type:{name:"ElementContent[]"}}}}}catch{}const _={component:p,title:"Storybook Blocks/UsageGuidelines"},s={args:{guidelines:["Usage guideline #1",e.jsx(e.Fragment,{children:e.jsx("b",{children:"Usage guideline #2 - with JSX element"})}),e.jsxs(e.Fragment,{children:["Usage guideline #3 -",e.jsx(g,{href:"/?path=/docs/welcome--docs",children:"with link"})]})]}};var a,t,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    guidelines: ['Usage guideline #1', <>
        <b>Usage guideline #2 - with JSX element</b>
      </>, <>
        Usage guideline #3 -<Link href="/?path=/docs/welcome--docs">with link</Link>
      </>]
  }
}`,...(r=(t=s.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const h=["Overview"],j=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:h,default:_},Symbol.toStringTag,{value:"Module"}));export{s as O,j as U};
