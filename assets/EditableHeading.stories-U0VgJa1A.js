import{j as a}from"./jsx-runtime-lwGtIXvq.js";import{c as B}from"./createStoryMetaSettingsDecorator-BOvb12cd.js";import{i as M,d as h,c,e as o,r as w,h as y,b as H,f as _,j as N}from"./interactions-utils-xQn6HIjI.js";import{C as I}from"./useMergeRef-DmpwoaL5.js";import{r as O}from"./createComponentTemplate-B08h-OOW.js";import{E as i}from"./EditableHeading-Wx7eLOuB.js";import{F as u}from"./Flex-DIp2zxrn.js";const g=200,r="This heading is an editable heading";function l(e){return _(e,I.EDITABLE_HEADING)}function b(e){return N(e,"input")}async function P(e){await h(g);const d=l(e);c(d),await h(g);const t=b(e);o(t).toHaveAttribute("value",r),await w();const n=l(e);o(n).toHaveTextContent(r)}async function D(e){const d=l(e);c(d),await h(g);const t=b(e);await y(t),await H(t,r),o(t).toHaveAttribute("value",r),await w();const n=l(e);o(n).toHaveTextContent(r)}async function W(e){const d=l(e);c(d),await h(g);const t=b(e);await y(t),await w();const n=l(e);o(n).toHaveTextContent(r)}async function G(e){const d=l(e);c(d),await h(g);const t=b(e);await y(t),await h(g);const n="test";await H(t,n),o(t).toHaveAttribute("value",n),await H(t,"{Escape}");const A=l(e);o(A).toHaveTextContent(r)}const R=M({tests:[P,D,W,G]}),v=B({component:i,actionPropsArray:["onChange"]}),k={title:"Components/EditableHeading",component:i,argTypes:v.argTypes,decorators:v.decorators},z=O(i),s={render:z.bind({}),args:{value:"This heading is an editable heading"},play:R,parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>a.jsxs(u,{direction:"column",gap:"large",align:"start",children:[a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h1-light",ariaLabel:"H1 light heading",type:"h1",weight:"light",value:"H1 Light"}),a.jsx(i,{id:"h1-normal",ariaLabel:"H1 normal heading",type:"h1",weight:"normal",value:"H1 Normal"}),a.jsx(i,{id:"h1-medium",ariaLabel:"H1 medium heading",type:"h1",weight:"medium",value:"H1 Medium"}),a.jsx(i,{id:"h1-bold",ariaLabel:"H1 bold heading",type:"h1",weight:"bold",value:"H1 Bold"})]}),a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h2-light",ariaLabel:"H2 light heading",type:"h2",weight:"light",value:"H2 Light"}),a.jsx(i,{id:"h2-normal",ariaLabel:"H2 normal heading",type:"h2",weight:"normal",value:"H2 Normal"}),a.jsx(i,{id:"h2-medium",ariaLabel:"H2 medium heading",type:"h2",weight:"medium",value:"H2 Medium"}),a.jsx(i,{id:"h2-bold",ariaLabel:"H2 bold heading",type:"h2",weight:"bold",value:"H2 Bold"})]}),a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h3-light",ariaLabel:"H3 light heading",type:"h3",weight:"light",value:"H3 Light"}),a.jsx(i,{id:"h3-normal",ariaLabel:"H3 normal heading",type:"h3",weight:"normal",value:"H3 Normal"}),a.jsx(i,{id:"h3-medium",ariaLabel:"H3 medium heading",type:"h3",weight:"medium",value:"H3 Medium"}),a.jsx(i,{id:"h3-bold",ariaLabel:"H3 bold heading",type:"h3",weight:"bold",value:"H3 Bold"})]})]})},p={render:()=>a.jsx(i,{id:"with-placeholder",ariaLabel:"Editable heading with placeholder",value:"Clear heading to see placeholder",placeholder:"Enter your heading here..."})};var x,E,L;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var T,j,f;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" align="start">
      <Flex gap="large">
        <EditableHeading id="h1-light" ariaLabel="H1 light heading" type="h1" weight="light" value="H1 Light" />
        <EditableHeading id="h1-normal" ariaLabel="H1 normal heading" type="h1" weight="normal" value="H1 Normal" />
        <EditableHeading id="h1-medium" ariaLabel="H1 medium heading" type="h1" weight="medium" value="H1 Medium" />
        <EditableHeading id="h1-bold" ariaLabel="H1 bold heading" type="h1" weight="bold" value="H1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading id="h2-light" ariaLabel="H2 light heading" type="h2" weight="light" value="H2 Light" />
        <EditableHeading id="h2-normal" ariaLabel="H2 normal heading" type="h2" weight="normal" value="H2 Normal" />
        <EditableHeading id="h2-medium" ariaLabel="H2 medium heading" type="h2" weight="medium" value="H2 Medium" />
        <EditableHeading id="h2-bold" ariaLabel="H2 bold heading" type="h2" weight="bold" value="H2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading id="h3-light" ariaLabel="H3 light heading" type="h3" weight="light" value="H3 Light" />
        <EditableHeading id="h3-normal" ariaLabel="H3 normal heading" type="h3" weight="normal" value="H3 Normal" />
        <EditableHeading id="h3-medium" ariaLabel="H3 medium heading" type="h3" weight="medium" value="H3 Medium" />
        <EditableHeading id="h3-bold" ariaLabel="H3 bold heading" type="h3" weight="bold" value="H3 Bold" />
      </Flex>
    </Flex>
}`,...(f=(j=m.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var C,S,F;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <EditableHeading id="with-placeholder" ariaLabel="Editable heading with placeholder" value="Clear heading to see placeholder" placeholder="Enter your heading here..." />
}`,...(F=(S=p.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const V=["Overview","Types","WithPlaceholder"],Z=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,Types:m,WithPlaceholder:p,__namedExportsOrder:V,default:k},Symbol.toStringTag,{value:"Module"}));export{Z as E,s as O,m as T,p as W};
