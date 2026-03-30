import{j as a}from"./jsx-runtime-lwGtIXvq.js";import{c as M}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{i as _,d as h,c,e as o,r as w,h as y,b as H,f as L,j as N}from"./interactions-utils-CrzSbhpz.js";import{C as I}from"./constants-CenpDJY1.js";import{E as i}from"./EditableHeading-CuS7H4Pk.js";import{r as O}from"./createComponentTemplate-B08h-OOW.js";import{F as u}from"./Flex-7H_pA1dJ.js";const g=200,r="This heading is an editable heading";function n(e){return L(e,I.EDITABLE_HEADING)}function b(e){return N(e,"input")}async function P(e){await h(g);const d=n(e);c(d),await h(g);const t=b(e);o(t).toHaveAttribute("value",r),await w();const l=n(e);o(l).toHaveTextContent(r)}async function D(e){const d=n(e);c(d),await h(g);const t=b(e);await y(t),await H(t,r),o(t).toHaveAttribute("value",r),await w();const l=n(e);o(l).toHaveTextContent(r)}async function W(e){const d=n(e);c(d),await h(g);const t=b(e);await y(t),await w();const l=n(e);o(l).toHaveTextContent(r)}async function G(e){const d=n(e);c(d),await h(g);const t=b(e);await y(t),await h(g);const l="test";await H(t,l),o(t).toHaveAttribute("value",l),await H(t,"{Escape}");const B=n(e);o(B).toHaveTextContent(r)}const R=_({tests:[P,D,W,G]}),v=M({component:i,actionPropsArray:["onChange"]}),k={title:"Components/EditableHeading",component:i,argTypes:v.argTypes,decorators:v.decorators},z=O(i),s={render:z.bind({}),args:{value:"This heading is an editable heading"},play:R,parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>a.jsxs(u,{direction:"column",gap:"large",align:"start",children:[a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h1-light","aria-label":"H1 light heading",type:"h1",weight:"light",value:"H1 Light"}),a.jsx(i,{id:"h1-normal","aria-label":"H1 normal heading",type:"h1",weight:"normal",value:"H1 Normal"}),a.jsx(i,{id:"h1-medium","aria-label":"H1 medium heading",type:"h1",weight:"medium",value:"H1 Medium"}),a.jsx(i,{id:"h1-bold","aria-label":"H1 bold heading",type:"h1",weight:"bold",value:"H1 Bold"})]}),a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h2-light","aria-label":"H2 light heading",type:"h2",weight:"light",value:"H2 Light"}),a.jsx(i,{id:"h2-normal","aria-label":"H2 normal heading",type:"h2",weight:"normal",value:"H2 Normal"}),a.jsx(i,{id:"h2-medium","aria-label":"H2 medium heading",type:"h2",weight:"medium",value:"H2 Medium"}),a.jsx(i,{id:"h2-bold","aria-label":"H2 bold heading",type:"h2",weight:"bold",value:"H2 Bold"})]}),a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h3-light","aria-label":"H3 light heading",type:"h3",weight:"light",value:"H3 Light"}),a.jsx(i,{id:"h3-normal","aria-label":"H3 normal heading",type:"h3",weight:"normal",value:"H3 Normal"}),a.jsx(i,{id:"h3-medium","aria-label":"H3 medium heading",type:"h3",weight:"medium",value:"H3 Medium"}),a.jsx(i,{id:"h3-bold","aria-label":"H3 bold heading",type:"h3",weight:"bold",value:"H3 Bold"})]})]})},p={render:()=>a.jsx(i,{id:"with-placeholder","aria-label":"Editable heading with placeholder",value:"Clear heading to see placeholder",placeholder:"Enter your heading here..."})};var x,E,T;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: editableHeadingTemplate.bind({}),
  args: {
    value: "This heading is an editable heading"
  },
  play: overviewPlaySuite,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var j,f,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" align="start">
      <Flex gap="large">
        <EditableHeading id="h1-light" aria-label="H1 light heading" type="h1" weight="light" value="H1 Light" />
        <EditableHeading id="h1-normal" aria-label="H1 normal heading" type="h1" weight="normal" value="H1 Normal" />
        <EditableHeading id="h1-medium" aria-label="H1 medium heading" type="h1" weight="medium" value="H1 Medium" />
        <EditableHeading id="h1-bold" aria-label="H1 bold heading" type="h1" weight="bold" value="H1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading id="h2-light" aria-label="H2 light heading" type="h2" weight="light" value="H2 Light" />
        <EditableHeading id="h2-normal" aria-label="H2 normal heading" type="h2" weight="normal" value="H2 Normal" />
        <EditableHeading id="h2-medium" aria-label="H2 medium heading" type="h2" weight="medium" value="H2 Medium" />
        <EditableHeading id="h2-bold" aria-label="H2 bold heading" type="h2" weight="bold" value="H2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading id="h3-light" aria-label="H3 light heading" type="h3" weight="light" value="H3 Light" />
        <EditableHeading id="h3-normal" aria-label="H3 normal heading" type="h3" weight="normal" value="H3 Normal" />
        <EditableHeading id="h3-medium" aria-label="H3 medium heading" type="h3" weight="medium" value="H3 Medium" />
        <EditableHeading id="h3-bold" aria-label="H3 bold heading" type="h3" weight="bold" value="H3 Bold" />
      </Flex>
    </Flex>
}`,...(C=(f=m.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,F,A;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <EditableHeading id="with-placeholder" aria-label="Editable heading with placeholder" value="Clear heading to see placeholder" placeholder="Enter your heading here..." />
}`,...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const V=["Overview","Types","WithPlaceholder"],Z=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,Types:m,WithPlaceholder:p,__namedExportsOrder:V,default:k},Symbol.toStringTag,{value:"Module"}));export{Z as E,s as O,m as T,p as W};
