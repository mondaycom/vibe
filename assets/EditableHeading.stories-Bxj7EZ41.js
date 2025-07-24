import{R as t}from"./index-Hemj67b4.js";import{E as a}from"./EditableHeading-BU4LFrZB.js";import{i as F,d as s,c as u,e as d,h as E,b as y,f as N,j as A}from"./interactions-utils-BDSgavBb.js";import{b as B}from"./test-ids-utils-9ISiqDto.js";import{r as v}from"./interactions-helper-Bq4hWQWq.js";import{F as p}from"./Flex-DIvs4XZj.js";import{r as M}from"./createComponentTemplate-Y0VTmW_y.js";import{c as L}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const g=200,l="This heading is an editable heading";function r(e){return N(e,B.EDITABLE_HEADING)}function h(e){return A(e,"input")}async function I(e){await s(g);const o=r(e);u(o),await s(g);const n=h(e);d(n).toHaveAttribute("value",l),await v();const i=r(e);d(i).toHaveTextContent(l)}async function O(e){const o=r(e);u(o),await s(g);const n=h(e);await E(n),await y(n,l),d(n).toHaveAttribute("value",l),await v();const i=r(e);d(i).toHaveTextContent(l)}async function P(e){const o=r(e);u(o),await s(g);const n=h(e);await E(n),await v();const i=r(e);d(i).toHaveTextContent(l)}async function D(e){const o=r(e);u(o),await s(g);const n=h(e);await E(n),await s(g);const i="test";await y(n,i),d(n).toHaveAttribute("value",i),await y(n,"{Escape}");const C=r(e);d(C).toHaveTextContent(l)}const H=F({tests:[I,O,P,D]});try{H.displayName="overviewPlaySuite",H.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const w=L({component:a,actionPropsArray:["onChange"]}),R={title:"Components/EditableHeading",component:a,argTypes:w.argTypes,decorators:w.decorators},j=M(a),m={render:j.bind({}),args:{value:"This heading is an editable heading"},play:H,parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>t.createElement(p,{direction:"column",gap:"large",align:"start"},t.createElement(p,{gap:"large"},t.createElement(a,{type:"h1",weight:"light",value:"H1 Light"}),t.createElement(a,{type:"h1",weight:"normal",value:"H1 Normal"}),t.createElement(a,{type:"h1",weight:"medium",value:"H1 Medium"}),t.createElement(a,{type:"h1",weight:"bold",value:"H1 Bold"})),t.createElement(p,{gap:"large"},t.createElement(a,{type:"h2",weight:"light",value:"H2 Light"}),t.createElement(a,{type:"h2",weight:"normal",value:"H2 Normal"}),t.createElement(a,{type:"h2",weight:"medium",value:"H2 Medium"}),t.createElement(a,{type:"h2",weight:"bold",value:"H2 Bold"})),t.createElement(p,{gap:"large"},t.createElement(a,{type:"h3",weight:"light",value:"H3 Light"}),t.createElement(a,{type:"h3",weight:"normal",value:"H3 Normal"}),t.createElement(a,{type:"h3",weight:"medium",value:"H3 Medium"}),t.createElement(a,{type:"h3",weight:"bold",value:"H3 Bold"})))};var b,f,T;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(f=m.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,_,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(_=c.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const q=["Overview","Types"],U=Object.freeze(Object.defineProperty({__proto__:null,Overview:m,Types:c,__namedExportsOrder:q,default:R},Symbol.toStringTag,{value:"Module"}));export{U as E,m as O,c as T};
