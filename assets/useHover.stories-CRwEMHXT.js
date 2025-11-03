import{j as a}from"./jsx-runtime-lwGtIXvq.js";import{u as t}from"./useHover-CaOkuGFv.js";import{B as m}from"./Box-BwRYjhPo.js";const i={title:"Hooks/useHover"},e={render:()=>{const[d,r]=t();return a.jsx(m,{border:!0,rounded:"small",padding:"medium",ref:d,backgroundColor:r?"greyBackgroundColor":"primaryBackgroundColor",children:r?"Boom!":"Hover me"})},name:"Overview"};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    return <Box border rounded="small" padding="medium" ref={hoverRef} backgroundColor={isHovered ? "greyBackgroundColor" : "primaryBackgroundColor"}>
        {isHovered ? "Boom!" : "Hover me"}
      </Box>;
  },
  name: "Overview"
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const u=["Overview"],p=Object.freeze(Object.defineProperty({__proto__:null,Overview:e,__namedExportsOrder:u,default:i},Symbol.toStringTag,{value:"Module"}));export{e as O,p as U};
