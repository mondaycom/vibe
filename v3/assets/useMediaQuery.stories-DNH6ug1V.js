import{j as n}from"./jsx-runtime-lwGtIXvq.js";import{u}from"./index-DCv1sWpj.js";const l={title:"Hooks/useMediaQuery"},e={render:()=>{const[i]=u(["screen and (max-width: 1023px) and (min-width: 768px)"]);return n.jsxs("div",{children:['media query - "screen and (max-width: 1023px) and (min-width: 768px)" is matching: ',i?"true":"false"]})},name:"Single Rule"},r={render:()=>{const[i,o]=u(["screen and (max-width: 1280px) and (min-width: 768px)","prefers-color-scheme: dark"]);return n.jsxs("div",{children:[n.jsxs("div",{children:['media query - "screen and (max-width: 1280px) and (min-width: 768px)" is matching: ',i?"true":"false"]}),n.jsxs("div",{children:["media query - prefers-color-scheme: dark is matching: ",o?"true":"false"]})]})},name:"Multiple Rules"};var a,s,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const [mediaQueryIsMatching] = useMediaQuery(["screen and (max-width: 1023px) and (min-width: 768px)"]);
    return <div>
        {\`media query - "screen and (max-width: 1023px) and (min-width: 768px)" is matching: \`}
        {mediaQueryIsMatching ? "true" : "false"}
      </div>;
  },
  name: "Single Rule"
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var t,c,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const p=["SingleRule","MultipleRules"],y=Object.freeze(Object.defineProperty({__proto__:null,MultipleRules:r,SingleRule:e,__namedExportsOrder:p,default:l},Symbol.toStringTag,{value:"Module"}));export{r as M,e as S,y as U};
