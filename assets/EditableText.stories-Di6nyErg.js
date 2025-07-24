import{R as t}from"./index-Hemj67b4.js";import{E as n}from"./EditableText-yvX71pdd.js";import{i as B,d as p,c as g,e as s,h as v,b as y,f as I,j as O}from"./interactions-utils-DlKgNicw.js";import{b as P}from"./test-ids-utils-9ISiqDto.js";import{r as w}from"./interactions-helper-Bq4hWQWq.js";import{F as x}from"./Flex-pz2uwxlA.js";import{r as D}from"./createComponentTemplate-Y0VTmW_y.js";import{c as R}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const u=200,l="This text is an editable text";function i(e){return I(e,P.EDITABLE_TEXT)}function T(e){return O(e,"input")}async function j(e){await p(u);const o=i(e);g(o),await p(u);const a=T(e);s(a).toHaveAttribute("value",l),await w();const r=i(e);s(r).toHaveTextContent(l)}async function q(e){const o=i(e);g(o),await p(u);const a=T(e);await v(a),await y(a,l),s(a).toHaveAttribute("value",l),await w();const r=i(e);s(r).toHaveTextContent(l)}async function V(e){const o=i(e);g(o),await p(u);const a=T(e);await v(a),await w();const r=i(e);s(r).toHaveTextContent(l)}async function k(e){const o=i(e);g(o),await p(u);const a=T(e);await v(a);const r="test";await y(a,r),s(a).toHaveAttribute("value",r),await y(a,"{Escape}");const H=i(e);s(H).toHaveTextContent(l)}const E=B({tests:[j,q,V,k]});try{E.displayName="overviewPlaySuite",E.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const b=R({component:n,actionPropsArray:["onChange"]}),L={title:"Components/EditableText",component:n,argTypes:b.argTypes,decorators:b.decorators},z=D(n),m={render:z.bind({}),args:{value:"This text is an editable text"},play:E,parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>t.createElement(x,{direction:"column",gap:"large",align:"start"},t.createElement(x,{gap:"large"},t.createElement(n,{type:"text1",weight:"normal",value:"Text1 Normal"}),t.createElement(n,{type:"text1",weight:"medium",value:"Text1 Medium"}),t.createElement(n,{type:"text1",weight:"bold",value:"Text1 Bold"})),t.createElement(x,{gap:"large"},t.createElement(n,{type:"text2",weight:"normal",value:"Text2 Normal"}),t.createElement(n,{type:"text2",weight:"medium",value:"Text2 Medium"}),t.createElement(n,{type:"text2",weight:"bold",value:"Text2 Bold"})),t.createElement(x,{gap:"large"},t.createElement(n,{type:"text3",weight:"normal",value:"Text3 Normal"}),t.createElement(n,{type:"text3",weight:"medium",value:"Text3 Medium"})))},d={render:()=>t.createElement(n,{type:"text1",weight:"normal",multiline:!0,value:`This is a multiline
here's the second line`})};var h,f,_;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(f=m.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var S,M,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var F,N,A;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <EditableText type="text1" weight="normal" multiline value={\`This is a multiline
here's the second line\`} />
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const G=["Overview","Types","Multiline"],$=Object.freeze(Object.defineProperty({__proto__:null,Multiline:d,Overview:m,Types:c,__namedExportsOrder:G,default:L},Symbol.toStringTag,{value:"Module"}));export{$ as E,d as M,m as O,c as T};
