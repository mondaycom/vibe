import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{i as v,r as j,g as c,p as s,e as o,N as d}from"./interactions-utils-CN96wBoi.js";import{C as n}from"./Clickable-C0kIYxEe.js";import{B as t}from"./Box-DlN4FTzW.js";import{F as y}from"./Flex-D71YaKrR.js";async function _(a){const B="clickable button",f="disabled clickable button",h=await c(a,B),S=await c(a,f);await s(d.TAB),o(document.activeElement).toEqual(h),await s(d.TAB),o(document.activeElement).not.toEqual(S),o(a).not.toContain(document.activeElement)}const L=v({tests:[_],afterEach:async()=>{await j()}}),w={title:"Accessibility/Clickable",component:n},A=a=>e.jsx(n,{onClick:()=>alert("clicked"),...a,children:e.jsx(t,{border:!0,padding:"small",rounded:"small",children:"I act like a button"})}),l={render:A.bind({}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(y,{gap:"medium",children:[e.jsx(n,{onClick:()=>alert("clicked"),"aria-label":"clickable button",children:e.jsx(t,{border:!0,padding:"small",rounded:"small",children:"Regular clickable element"})}),e.jsx(n,{onClick:()=>alert("clicked"),disabled:!0,"aria-label":"disabled clickable button",children:e.jsx(t,{border:!0,backgroundColor:"greyBackgroundColor",padding:"small",rounded:"small",children:"Disabled clickable element"})})]}),name:"States",play:L},i={render:()=>e.jsx(n,{onClick:()=>alert("clicked"),"aria-label":"open filter dialog","aria-haspopup":"dialog","aria-expanded":!1,children:e.jsx(t,{border:!0,padding:"small",rounded:"small",children:"I open a dialog"})}),name:"With dialog popup"};var m,b,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: clickableTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(p=(b=l.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var u,k,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(k=r.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var C,x,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Clickable onClick={() => alert("clicked")} aria-label="open filter dialog" aria-haspopup="dialog" aria-expanded={false}>
      <Box border padding="small" rounded="small">
        I open a dialog
      </Box>
    </Clickable>,
  name: "With dialog popup"
}`,...(E=(x=i.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};const O=["Overview","States","WithDialogPopup"],W=Object.freeze(Object.defineProperty({__proto__:null,Overview:l,States:r,WithDialogPopup:i,__namedExportsOrder:O,default:w},Symbol.toStringTag,{value:"Module"}));export{W as C,l as O,r as S};
