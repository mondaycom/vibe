import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{C as r}from"./Clickable-DcKY_gW1.js";import{F as B}from"./Flex-D6oMFEZi.js";import{i as f,g as o,p as c,e as n}from"./interactions-utils-BZaOSk9V.js";import{r as v}from"./interactions-helper-BLVzu_Hd.js";import{N as s}from"./test-ids-utils-CSfXomCJ.js";import{B as i}from"./Box-8M5YYPh1.js";async function L(a){const C="clickable button",g="disabled clickable button",x=await o(a,C),E=await o(a,g);await c(s.TAB),n(document.activeElement).toEqual(x),await c(s.TAB),n(document.activeElement).not.toEqual(E),n(a).not.toContain(document.activeElement)}const S=f({tests:[L],afterEach:async()=>{await v()}}),y={title:"Accessibility/Clickable",component:r},j=a=>e.jsx(r,{onClick:()=>alert("clicked"),...a,children:e.jsx(i,{border:!0,padding:"small",rounded:"small",children:"I act like a button"})}),l={render:j.bind({}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>e.jsxs(B,{gap:"medium",children:[e.jsx(r,{onClick:()=>alert("clicked"),ariaLabel:"clickable button",children:e.jsx(i,{border:!0,padding:"small",rounded:"small",children:"Regular clickable element"})}),e.jsx(r,{onClick:()=>alert("clicked"),disabled:!0,ariaLabel:"disabled clickable button",children:e.jsx(i,{border:!0,backgroundColor:"greyBackgroundColor",padding:"small",rounded:"small",children:"Disabled clickable element"})})]}),name:"States",play:S};var d,m,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <Clickable onClick={() => alert("clicked")} ariaLabel="clickable button">
        <Box border padding="small" rounded="small">
          Regular clickable element
        </Box>
      </Clickable>
      <Clickable onClick={() => alert("clicked")} disabled ariaLabel="disabled clickable button">
        <Box border backgroundColor="greyBackgroundColor" padding="small" rounded="small">
          Disabled clickable element
        </Box>
      </Clickable>
    </Flex>,
  name: "States",
  play: statesPlaySuite
}`,...(p=(k=t.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const _=["Overview","States"],I=Object.freeze(Object.defineProperty({__proto__:null,Overview:l,States:t,__namedExportsOrder:_,default:y},Symbol.toStringTag,{value:"Module"}));export{I as C,l as O,t as S};
