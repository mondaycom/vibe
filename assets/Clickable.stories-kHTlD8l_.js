import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{C as r}from"./Clickable-CzbLyDBE.js";import{F as _}from"./Flex-Brm3wHG7.js";import{i as f,g as s,p as c,e as n}from"./interactions-utils-DCM75KeF.js";import{r as v}from"./interactions-helper-BLVzu_Hd.js";import{N as d}from"./test-ids-utils-B1IbFLmr.js";import{B as i}from"./Box-w8MOY9Yi.js";async function S(a){const C="clickable button",y="disabled clickable button",E=await s(a,C),x=await s(a,y);await c(d.TAB),n(document.activeElement).toEqual(E),await c(d.TAB),n(document.activeElement).not.toEqual(x),n(a).not.toContain(document.activeElement)}const o=f({tests:[S],afterEach:async()=>{await v()}});try{o.displayName="statesPlaySuite",o.__docgenInfo={description:"",displayName:"statesPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const B={title:"Accessibility/Clickable",component:r},L=a=>e.jsx(r,{onClick:()=>alert("clicked"),...a,children:e.jsx(i,{border:!0,padding:"small",rounded:"small",children:"I act like a button"})}),l={render:L.bind({}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>e.jsxs(_,{gap:"medium",children:[e.jsx(r,{onClick:()=>alert("clicked"),ariaLabel:"clickable button",children:e.jsx(i,{border:!0,padding:"small",rounded:"small",children:"Regular clickable element"})}),e.jsx(r,{onClick:()=>alert("clicked"),disabled:!0,ariaLabel:"disabled clickable button",children:e.jsx(i,{border:!0,backgroundColor:"greyBackgroundColor",padding:"small",rounded:"small",children:"Disabled clickable element"})})]}),name:"States",play:o};var m,u,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: clickableTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(b=(u=l.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,k,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(k=t.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const j=["Overview","States"],I=Object.freeze(Object.defineProperty({__proto__:null,Overview:l,States:t,__namedExportsOrder:j,default:B},Symbol.toStringTag,{value:"Module"}));export{I as C,l as O,t as S};
