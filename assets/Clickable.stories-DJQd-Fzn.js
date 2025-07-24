import{R as e}from"./index-Hemj67b4.js";import{C as r}from"./Clickable-L_6z1d8K.js";import{F as f}from"./Flex-DIvs4XZj.js";import{i as v,g as c,p as i,e as n}from"./interactions-utils-BDSgavBb.js";import{r as L}from"./interactions-helper-Bq4hWQWq.js";import{N as s}from"./test-ids-utils-9ISiqDto.js";import{B as o}from"./Box-CI4IQ3Nw.js";async function S(a){const C="clickable button",E="disabled clickable button",g=await c(a,C),B=await c(a,E);await i(s.TAB),n(document.activeElement).toEqual(g),await i(s.TAB),n(document.activeElement).not.toEqual(B),n(a).not.toContain(document.activeElement)}const y=v({tests:[S],afterEach:async()=>{await L()}}),x={title:"Accessibility/Clickable",component:r},_=a=>e.createElement(r,{onClick:()=>alert("clicked"),...a},e.createElement(o,{border:!0,padding:"small",rounded:"small"},"I act like a button")),l={render:_.bind({}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>e.createElement(f,{gap:"medium"},e.createElement(r,{onClick:()=>alert("clicked"),ariaLabel:"clickable button"},e.createElement(o,{border:!0,padding:"small",rounded:"small"},"Regular clickable element")),e.createElement(r,{onClick:()=>alert("clicked"),disabled:!0,ariaLabel:"disabled clickable button"},e.createElement(o,{border:!0,backgroundColor:"greyBackgroundColor",padding:"small",rounded:"small"},"Disabled clickable element"))),name:"States",play:y};var d,m,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(k=t.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const w=["Overview","States"],K=Object.freeze(Object.defineProperty({__proto__:null,Overview:l,States:t,__namedExportsOrder:w,default:x},Symbol.toStringTag,{value:"Module"}));export{K as C,l as O,t as S};
