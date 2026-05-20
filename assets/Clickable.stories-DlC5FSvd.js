import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{i as B,r as v,g as o,p as c,e as r,N as s}from"./interactions-utils-CrzSbhpz.js";import{C as n}from"./Clickable-DnQGpUs5.js";import{B as i}from"./Box-BfMxHC0B.js";import{F as S}from"./Flex-7H_pA1dJ.js";async function y(a){const C="clickable button",g="disabled clickable button",x=await o(a,C),E=await o(a,g);await c(s.TAB),r(document.activeElement).toEqual(x),await c(s.TAB),r(document.activeElement).not.toEqual(E),r(a).not.toContain(document.activeElement)}const f=B({tests:[y],afterEach:async()=>{await v()}}),j={title:"Accessibility/Clickable",component:n},_=a=>e.jsx(n,{onClick:()=>alert("clicked"),...a,children:e.jsx(i,{border:!0,padding:"small",rounded:"small",children:"I act like a button"})}),l={render:_.bind({}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>e.jsxs(S,{gap:"medium",children:[e.jsx(n,{onClick:()=>alert("clicked"),"aria-label":"clickable button",children:e.jsx(i,{border:!0,padding:"small",rounded:"small",children:"Regular clickable element"})}),e.jsx(n,{onClick:()=>alert("clicked"),disabled:!0,"aria-label":"disabled clickable button",children:e.jsx(i,{border:!0,backgroundColor:"greyBackgroundColor",padding:"small",rounded:"small",children:"Disabled clickable element"})})]}),name:"States",play:f};var d,m,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: clickableTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,k,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Clickable onClick={() => alert("clicked")} aria-label="clickable button">
        <Box border padding="small" rounded="small">
          Regular clickable element
        </Box>
      </Clickable>
      <Clickable onClick={() => alert("clicked")} disabled aria-label="disabled clickable button">
        <Box border backgroundColor="greyBackgroundColor" padding="small" rounded="small">
          Disabled clickable element
        </Box>
      </Clickable>
    </Flex>,
  name: "States",
  play: statesPlaySuite
}`,...(p=(k=t.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const L=["Overview","States"],F=Object.freeze(Object.defineProperty({__proto__:null,Overview:l,States:t,__namedExportsOrder:L,default:j},Symbol.toStringTag,{value:"Module"}));export{F as C,l as O,t as S};
