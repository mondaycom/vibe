import{j as t}from"./jsx-runtime-DDzbWKUH.js";import{E as a}from"./EditableHeading-hDYCbOIQ.js";import{i as C,d,c as m,e as s,h as v,b as y,f as F,j as N}from"./interactions-utils-BDSgavBb.js";import{b as A}from"./test-ids-utils-9ISiqDto.js";import{r as w}from"./interactions-helper-Bq4hWQWq.js";import{F as c}from"./Flex-2Q04fxOc.js";import{r as B}from"./createComponentTemplate-Y0VTmW_y.js";import{c as M}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const g=200,l="This heading is an editable heading";function o(e){return F(e,A.EDITABLE_HEADING)}function h(e){return N(e,"input")}async function L(e){await d(g);const r=o(e);m(r),await d(g);const i=h(e);s(i).toHaveAttribute("value",l),await w();const n=o(e);s(n).toHaveTextContent(l)}async function I(e){const r=o(e);m(r),await d(g);const i=h(e);await v(i),await y(i,l),s(i).toHaveAttribute("value",l),await w();const n=o(e);s(n).toHaveTextContent(l)}async function O(e){const r=o(e);m(r),await d(g);const i=h(e);await v(i),await w();const n=o(e);s(n).toHaveTextContent(l)}async function P(e){const r=o(e);m(r),await d(g);const i=h(e);await v(i),await d(g);const n="test";await y(i,n),s(i).toHaveAttribute("value",n),await y(i,"{Escape}");const S=o(e);s(S).toHaveTextContent(l)}const H=C({tests:[L,I,O,P]});try{H.displayName="overviewPlaySuite",H.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const b=M({component:a,actionPropsArray:["onChange"]}),D={title:"Components/EditableHeading",component:a,argTypes:b.argTypes,decorators:b.decorators},q=B(a),p={render:q.bind({}),args:{value:"This heading is an editable heading"},play:H,parameters:{docs:{liveEdit:{isEnabled:!1}}}},u={render:()=>t.jsxs(c,{direction:"column",gap:"large",align:"start",children:[t.jsxs(c,{gap:"large",children:[t.jsx(a,{type:"h1",weight:"light",value:"H1 Light"}),t.jsx(a,{type:"h1",weight:"normal",value:"H1 Normal"}),t.jsx(a,{type:"h1",weight:"medium",value:"H1 Medium"}),t.jsx(a,{type:"h1",weight:"bold",value:"H1 Bold"})]}),t.jsxs(c,{gap:"large",children:[t.jsx(a,{type:"h2",weight:"light",value:"H2 Light"}),t.jsx(a,{type:"h2",weight:"normal",value:"H2 Normal"}),t.jsx(a,{type:"h2",weight:"medium",value:"H2 Medium"}),t.jsx(a,{type:"h2",weight:"bold",value:"H2 Bold"})]}),t.jsxs(c,{gap:"large",children:[t.jsx(a,{type:"h3",weight:"light",value:"H3 Light"}),t.jsx(a,{type:"h3",weight:"normal",value:"H3 Normal"}),t.jsx(a,{type:"h3",weight:"medium",value:"H3 Medium"}),t.jsx(a,{type:"h3",weight:"bold",value:"H3 Bold"})]})]})};var x,E,f;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(E=p.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var T,j,_;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(j=u.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};const R=["Overview","Types"],U=Object.freeze(Object.defineProperty({__proto__:null,Overview:p,Types:u,__namedExportsOrder:R,default:D},Symbol.toStringTag,{value:"Module"}));export{U as E,p as O,u as T};
