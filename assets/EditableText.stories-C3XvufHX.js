import{j as t}from"./jsx-runtime-DDzbWKUH.js";import{E as n}from"./EditableText-CQ9xVwmW.js";import{i as H,d as u,c as g,e as s,h as w,b as y,f as B,j as I}from"./interactions-utils-BDSgavBb.js";import{b as O}from"./test-ids-utils-9ISiqDto.js";import{r as b}from"./interactions-helper-Bq4hWQWq.js";import{F as x}from"./Flex-2Q04fxOc.js";import{r as P}from"./createComponentTemplate-Y0VTmW_y.js";import{c as D}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const c=200,l="This text is an editable text";function r(e){return B(e,O.EDITABLE_TEXT)}function T(e){return I(e,"input")}async function q(e){await u(c);const o=r(e);g(o),await u(c);const a=T(e);s(a).toHaveAttribute("value",l),await b();const i=r(e);s(i).toHaveTextContent(l)}async function R(e){const o=r(e);g(o),await u(c);const a=T(e);await w(a),await y(a,l),s(a).toHaveAttribute("value",l),await b();const i=r(e);s(i).toHaveTextContent(l)}async function V(e){const o=r(e);g(o),await u(c);const a=T(e);await w(a),await b();const i=r(e);s(i).toHaveTextContent(l)}async function k(e){const o=r(e);g(o),await u(c);const a=T(e);await w(a);const i="test";await y(a,i),s(a).toHaveAttribute("value",i),await y(a,"{Escape}");const A=r(e);s(A).toHaveTextContent(l)}const v=H({tests:[q,R,V,k]});try{v.displayName="overviewPlaySuite",v.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const h=D({component:n,actionPropsArray:["onChange"]}),L={title:"Components/EditableText",component:n,argTypes:h.argTypes,decorators:h.decorators},z=P(n),d={render:z.bind({}),args:{value:"This text is an editable text"},play:v,parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>t.jsxs(x,{direction:"column",gap:"large",align:"start",children:[t.jsxs(x,{gap:"large",children:[t.jsx(n,{type:"text1",weight:"normal",value:"Text1 Normal"}),t.jsx(n,{type:"text1",weight:"medium",value:"Text1 Medium"}),t.jsx(n,{type:"text1",weight:"bold",value:"Text1 Bold"})]}),t.jsxs(x,{gap:"large",children:[t.jsx(n,{type:"text2",weight:"normal",value:"Text2 Normal"}),t.jsx(n,{type:"text2",weight:"medium",value:"Text2 Medium"}),t.jsx(n,{type:"text2",weight:"bold",value:"Text2 Bold"})]}),t.jsxs(x,{gap:"large",children:[t.jsx(n,{type:"text3",weight:"normal",value:"Text3 Normal"}),t.jsx(n,{type:"text3",weight:"medium",value:"Text3 Medium"})]})]})},p={render:()=>t.jsx(n,{type:"text1",weight:"normal",multiline:!0,value:`This is a multiline
here's the second line`})};var E,f,_;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: EditableTextTemplate.bind({}),
  args: {
    value: "This text is an editable text"
  },
  play: overviewPlaySuite,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(_=(f=d.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var j,S,M;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" align="start">
      <Flex gap="large">
        <EditableText type="text1" weight="normal" value="Text1 Normal" />
        <EditableText type="text1" weight="medium" value="Text1 Medium" />
        <EditableText type="text1" weight="bold" value="Text1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText type="text2" weight="normal" value="Text2 Normal" />
        <EditableText type="text2" weight="medium" value="Text2 Medium" />
        <EditableText type="text2" weight="bold" value="Text2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText type="text3" weight="normal" value="Text3 Normal" />
        <EditableText type="text3" weight="medium" value="Text3 Medium" />
      </Flex>
    </Flex>
}`,...(M=(S=m.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var C,F,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <EditableText type="text1" weight="normal" multiline value={\`This is a multiline
here's the second line\`} />
}`,...(N=(F=p.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};const G=["Overview","Types","Multiline"],$=Object.freeze(Object.defineProperty({__proto__:null,Multiline:p,Overview:d,Types:m,__namedExportsOrder:G,default:L},Symbol.toStringTag,{value:"Module"}));export{$ as E,p as M,d as O,m as T};
