import{j as t}from"./jsx-runtime-DDzbWKUH.js";import{E as a}from"./EditableHeading-Y-HtHf66.js";import{i as B,d,c as m,e as s,h as w,b as H,f as M,j as L}from"./interactions-utils-BDSgavBb.js";import{b as P}from"./test-ids-utils-9ISiqDto.js";import{r as b}from"./interactions-helper-Bq4hWQWq.js";import{F as h}from"./Flex-2Q04fxOc.js";import{r as I}from"./createComponentTemplate-Y0VTmW_y.js";import{c as O}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const g=200,l="This heading is an editable heading";function r(e){return M(e,P.EDITABLE_HEADING)}function y(e){return L(e,"input")}async function D(e){await d(g);const o=r(e);m(o),await d(g);const i=y(e);s(i).toHaveAttribute("value",l),await b();const n=r(e);s(n).toHaveTextContent(l)}async function q(e){const o=r(e);m(o),await d(g);const i=y(e);await w(i),await H(i,l),s(i).toHaveAttribute("value",l),await b();const n=r(e);s(n).toHaveTextContent(l)}async function R(e){const o=r(e);m(o),await d(g);const i=y(e);await w(i),await b();const n=r(e);s(n).toHaveTextContent(l)}async function V(e){const o=r(e);m(o),await d(g);const i=y(e);await w(i),await d(g);const n="test";await H(i,n),s(i).toHaveAttribute("value",n),await H(i,"{Escape}");const A=r(e);s(A).toHaveTextContent(l)}const v=B({tests:[D,q,R,V]});try{v.displayName="overviewPlaySuite",v.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const x=O({component:a,actionPropsArray:["onChange"]}),W={title:"Components/EditableHeading",component:a,argTypes:x.argTypes,decorators:x.decorators},k=I(a),p={render:k.bind({}),args:{value:"This heading is an editable heading"},play:v,parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>t.jsxs(h,{direction:"column",gap:"large",align:"start",children:[t.jsxs(h,{gap:"large",children:[t.jsx(a,{type:"h1",weight:"light",value:"H1 Light"}),t.jsx(a,{type:"h1",weight:"normal",value:"H1 Normal"}),t.jsx(a,{type:"h1",weight:"medium",value:"H1 Medium"}),t.jsx(a,{type:"h1",weight:"bold",value:"H1 Bold"})]}),t.jsxs(h,{gap:"large",children:[t.jsx(a,{type:"h2",weight:"light",value:"H2 Light"}),t.jsx(a,{type:"h2",weight:"normal",value:"H2 Normal"}),t.jsx(a,{type:"h2",weight:"medium",value:"H2 Medium"}),t.jsx(a,{type:"h2",weight:"bold",value:"H2 Bold"})]}),t.jsxs(h,{gap:"large",children:[t.jsx(a,{type:"h3",weight:"light",value:"H3 Light"}),t.jsx(a,{type:"h3",weight:"normal",value:"H3 Normal"}),t.jsx(a,{type:"h3",weight:"medium",value:"H3 Medium"}),t.jsx(a,{type:"h3",weight:"bold",value:"H3 Bold"})]})]})},u={render:()=>t.jsx(a,{value:"Clear heading to see placeholder",placeholder:"Enter your heading here..."})};var E,f,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(f=p.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var j,_,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" align="start">
      <Flex gap="large">
        <EditableHeading type="h1" weight="light" value="H1 Light" />
        <EditableHeading type="h1" weight="normal" value="H1 Normal" />
        <EditableHeading type="h1" weight="medium" value="H1 Medium" />
        <EditableHeading type="h1" weight="bold" value="H1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading type="h2" weight="light" value="H2 Light" />
        <EditableHeading type="h2" weight="normal" value="H2 Normal" />
        <EditableHeading type="h2" weight="medium" value="H2 Medium" />
        <EditableHeading type="h2" weight="bold" value="H2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableHeading type="h3" weight="light" value="H3 Light" />
        <EditableHeading type="h3" weight="normal" value="H3 Normal" />
        <EditableHeading type="h3" weight="medium" value="H3 Medium" />
        <EditableHeading type="h3" weight="bold" value="H3 Bold" />
      </Flex>
    </Flex>
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var C,F,N;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <EditableHeading value="Clear heading to see placeholder" placeholder="Enter your heading here..." />
}`,...(N=(F=u.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const G=["Overview","Types","WithPlaceholder"],$=Object.freeze(Object.defineProperty({__proto__:null,Overview:p,Types:c,WithPlaceholder:u,__namedExportsOrder:G,default:W},Symbol.toStringTag,{value:"Module"}));export{$ as E,p as O,c as T,u as W};
