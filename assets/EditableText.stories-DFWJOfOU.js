import{j as t}from"./jsx-runtime-DDzbWKUH.js";import{E as a}from"./EditableText-ClBydXyl.js";import{i as O,d as u,c as T,e as s,h as E,b as h,f as D,j as q}from"./interactions-utils-BDSgavBb.js";import{b as R}from"./test-ids-utils-9ISiqDto.js";import{r as b}from"./interactions-helper-Bq4hWQWq.js";import{F as g}from"./Flex-BwTwg4EO.js";import{r as V}from"./createComponentTemplate-Y0VTmW_y.js";import{c as W}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const x=200,l="This text is an editable text";function o(e){return D(e,R.EDITABLE_TEXT)}function y(e){return q(e,"input")}async function k(e){await u(x);const i=o(e);T(i),await u(x);const r=y(e);s(r).toHaveAttribute("value",l),await b();const n=o(e);s(n).toHaveTextContent(l)}async function L(e){const i=o(e);T(i),await u(x);const r=y(e);await E(r),await h(r,l),s(r).toHaveAttribute("value",l),await b();const n=o(e);s(n).toHaveTextContent(l)}async function z(e){const i=o(e);T(i),await u(x);const r=y(e);await E(r),await b();const n=o(e);s(n).toHaveTextContent(l)}async function G(e){const i=o(e);T(i),await u(x);const r=y(e);await E(r);const n="test";await h(r,n),s(r).toHaveAttribute("value",n),await h(r,"{Escape}");const I=o(e);s(I).toHaveTextContent(l)}const v=O({tests:[k,L,z,G]});try{v.displayName="overviewPlaySuite",v.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const w=W({component:a,actionPropsArray:["onChange"]}),X={title:"Components/EditableText",component:a,argTypes:w.argTypes,decorators:w.decorators},Y=V(a),d={render:Y.bind({}),args:{value:"This text is an editable text"},play:v,parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>t.jsxs(g,{direction:"column",gap:"large",align:"start",children:[t.jsxs(g,{gap:"large",children:[t.jsx(a,{type:"text1",weight:"normal",value:"Text1 Normal"}),t.jsx(a,{type:"text1",weight:"medium",value:"Text1 Medium"}),t.jsx(a,{type:"text1",weight:"bold",value:"Text1 Bold"})]}),t.jsxs(g,{gap:"large",children:[t.jsx(a,{type:"text2",weight:"normal",value:"Text2 Normal"}),t.jsx(a,{type:"text2",weight:"medium",value:"Text2 Medium"}),t.jsx(a,{type:"text2",weight:"bold",value:"Text2 Bold"})]}),t.jsxs(g,{gap:"large",children:[t.jsx(a,{type:"text3",weight:"normal",value:"Text3 Normal"}),t.jsx(a,{type:"text3",weight:"medium",value:"Text3 Medium"})]})]})},p={render:()=>t.jsx(a,{type:"text1",weight:"normal",multiline:!0,value:`This is a multiline
here's the second line`})},m={render:()=>t.jsx(a,{value:"Clear text to see placeholder",placeholder:"Enter your text here..."})};var f,j,_;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(_=(j=d.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var S,C,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(M=(C=c.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var F,N,A;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <EditableText type="text1" weight="normal" multiline value={\`This is a multiline
here's the second line\`} />
}`,...(A=(N=p.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var H,P,B;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <EditableText value="Clear text to see placeholder" placeholder="Enter your text here..." />
}`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const J=["Overview","Types","Multiline","WithPlaceholder"],re=Object.freeze(Object.defineProperty({__proto__:null,Multiline:p,Overview:d,Types:c,WithPlaceholder:m,__namedExportsOrder:J,default:X},Symbol.toStringTag,{value:"Module"}));export{re as E,p as M,d as O,c as T,m as W};
