import{R as t}from"./index-Hemj67b4.js";import{u as d}from"./useHover-Bg7Q2h9V.js";import{B as m}from"./Box-DnEG61CI.js";const i={title:"Hooks/useHover"},e={render:()=>{const[a,r]=d();return t.createElement(m,{border:!0,rounded:"small",padding:"medium",ref:a,backgroundColor:r?"greyBackgroundColor":"primaryBackgroundColor"},r?"Boom!":"Hover me")},name:"Overview"};var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    return <Box border rounded="small" padding="medium" ref={hoverRef} backgroundColor={isHovered ? "greyBackgroundColor" : "primaryBackgroundColor"}>
        {isHovered ? "Boom!" : "Hover me"}
      </Box>;
  },
  name: "Overview"
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const u=["Overview"],p=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{e as O,p as U};
