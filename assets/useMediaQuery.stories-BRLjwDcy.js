import{R as n}from"./index-Hemj67b4.js";import{u as c}from"./index-CZ5T5AuA.js";const o={title:"Hooks/useMediaQuery"},e={render:()=>{const[a]=c(["screen and (max-width: 1023px) and (min-width: 768px)"]);return n.createElement("div",null,'media query - "screen and (max-width: 1023px) and (min-width: 768px)" is matching: ',a?"true":"false")},name:"Single Rule"},r={render:()=>{const[a,l]=c(["screen and (max-width: 1280px) and (min-width: 768px)","prefers-color-scheme: dark"]);return n.createElement("div",null,n.createElement("div",null,'media query - "screen and (max-width: 1280px) and (min-width: 768px)" is matching: ',a?"true":"false"),n.createElement("div",null,"media query - prefers-color-scheme: dark is matching: ",l?"true":"false"))},name:"Multiple Rules"};var i,d,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [mediaQueryIsMatching] = useMediaQuery(["screen and (max-width: 1023px) and (min-width: 768px)"]);
    return <div>
        {\`media query - "screen and (max-width: 1023px) and (min-width: 768px)" is matching: \`}
        {mediaQueryIsMatching ? "true" : "false"}
      </div>;
  },
  name: "Single Rule"
}`,...(s=(d=e.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var t,m,u;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [screenSizeMediaQuery, preferDarkColorScheme] = useMediaQuery(["screen and (max-width: 1280px) and (min-width: 768px)", "prefers-color-scheme: dark"]);
    return <div>
        <div>
          {\`media query - "screen and (max-width: 1280px) and (min-width: 768px)" is matching: \`}
          {screenSizeMediaQuery ? "true" : "false"}
        </div>
        <div>media query - prefers-color-scheme: dark is matching: {preferDarkColorScheme ? "true" : "false"}</div>
      </div>;
  },
  name: "Multiple Rules"
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const p=["SingleRule","MultipleRules"],y=Object.freeze(Object.defineProperty({__proto__:null,MultipleRules:r,SingleRule:e,__namedExportsOrder:p,default:o},Symbol.toStringTag,{value:"Module"}));export{r as M,e as S,y as U};
