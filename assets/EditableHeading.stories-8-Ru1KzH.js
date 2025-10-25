import{j as a}from"./jsx-runtime-lwGtIXvq.js";import{E as i}from"./EditableHeading-CmdW81mJ.js";import{i as A,d as h,c,e as o,h as w,b as H,f as B,j as M}from"./interactions-utils-Brumg6Ey.js";import{b as P}from"./test-ids-utils-B1IbFLmr.js";import{r as v}from"./interactions-helper-BLVzu_Hd.js";import{F as u}from"./Flex-DYzKCQWz.js";import{r as I}from"./createComponentTemplate-B08h-OOW.js";import{c as O}from"./createStoryMetaSettingsDecorator-DMY_JaA7.js";const g=200,r="This heading is an editable heading";function l(e){return B(e,P.EDITABLE_HEADING)}function b(e){return M(e,"input")}async function D(e){await h(g);const d=l(e);c(d),await h(g);const t=b(e);o(t).toHaveAttribute("value",r),await v();const n=l(e);o(n).toHaveTextContent(r)}async function q(e){const d=l(e);c(d),await h(g);const t=b(e);await w(t),await H(t,r),o(t).toHaveAttribute("value",r),await v();const n=l(e);o(n).toHaveTextContent(r)}async function R(e){const d=l(e);c(d),await h(g);const t=b(e);await w(t),await v();const n=l(e);o(n).toHaveTextContent(r)}async function V(e){const d=l(e);c(d),await h(g);const t=b(e);await w(t),await h(g);const n="test";await H(t,n),o(t).toHaveAttribute("value",n),await H(t,"{Escape}");const N=l(e);o(N).toHaveTextContent(r)}const y=A({tests:[D,q,R,V]});try{y.displayName="overviewPlaySuite",y.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const x=O({component:i,actionPropsArray:["onChange"]}),W={title:"Components/EditableHeading",component:i,argTypes:x.argTypes,decorators:x.decorators},k=I(i),s={render:k.bind({}),args:{value:"This heading is an editable heading"},play:y,parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>a.jsxs(u,{direction:"column",gap:"large",align:"start",children:[a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h1-light",ariaLabel:"H1 light heading",type:"h1",weight:"light",value:"H1 Light"}),a.jsx(i,{id:"h1-normal",ariaLabel:"H1 normal heading",type:"h1",weight:"normal",value:"H1 Normal"}),a.jsx(i,{id:"h1-medium",ariaLabel:"H1 medium heading",type:"h1",weight:"medium",value:"H1 Medium"}),a.jsx(i,{id:"h1-bold",ariaLabel:"H1 bold heading",type:"h1",weight:"bold",value:"H1 Bold"})]}),a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h2-light",ariaLabel:"H2 light heading",type:"h2",weight:"light",value:"H2 Light"}),a.jsx(i,{id:"h2-normal",ariaLabel:"H2 normal heading",type:"h2",weight:"normal",value:"H2 Normal"}),a.jsx(i,{id:"h2-medium",ariaLabel:"H2 medium heading",type:"h2",weight:"medium",value:"H2 Medium"}),a.jsx(i,{id:"h2-bold",ariaLabel:"H2 bold heading",type:"h2",weight:"bold",value:"H2 Bold"})]}),a.jsxs(u,{gap:"large",children:[a.jsx(i,{id:"h3-light",ariaLabel:"H3 light heading",type:"h3",weight:"light",value:"H3 Light"}),a.jsx(i,{id:"h3-normal",ariaLabel:"H3 normal heading",type:"h3",weight:"normal",value:"H3 Normal"}),a.jsx(i,{id:"h3-medium",ariaLabel:"H3 medium heading",type:"h3",weight:"medium",value:"H3 Medium"}),a.jsx(i,{id:"h3-bold",ariaLabel:"H3 bold heading",type:"h3",weight:"bold",value:"H3 Bold"})]})]})},p={render:()=>a.jsx(i,{id:"with-placeholder",ariaLabel:"Editable heading with placeholder",value:"Clear heading to see placeholder",placeholder:"Enter your heading here..."})};var E,L,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(f=(L=s.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var T,j,_;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(j=m.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var S,C,F;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <EditableHeading id="with-placeholder" ariaLabel="Editable heading with placeholder" value="Clear heading to see placeholder" placeholder="Enter your heading here..." />
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const G=["Overview","Types","WithPlaceholder"],$=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,Types:m,WithPlaceholder:p,__namedExportsOrder:G,default:W},Symbol.toStringTag,{value:"Module"}));export{$ as E,s as O,m as T,p as W};
