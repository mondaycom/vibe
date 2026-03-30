import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{c as P}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{i as I,d as u,c as T,e as s,r as E,h as y,b as h,f as D,j as W}from"./interactions-utils-CrzSbhpz.js";import{C as L}from"./constants-CenpDJY1.js";import{E as a}from"./EditableText-DqCOqnnT.js";import{r as R}from"./createComponentTemplate-B08h-OOW.js";import{F as b}from"./Flex-7H_pA1dJ.js";const p=200,o="This text is an editable text";function r(e){return D(e,L.EDITABLE_TEXT)}function g(e){return W(e,"input")}async function k(e){await u(p);const n=r(e);T(n),await u(p);const l=g(e);s(l).toHaveAttribute("value",o),await E();const i=r(e);s(i).toHaveTextContent(o)}async function z(e){const n=r(e);T(n),await u(p);const l=g(e);await y(l),await h(l,o),s(l).toHaveAttribute("value",o),await E();const i=r(e);s(i).toHaveTextContent(o)}async function G(e){const n=r(e);T(n),await u(p);const l=g(e);await y(l),await E();const i=r(e);s(i).toHaveTextContent(o)}async function V(e){const n=r(e);T(n),await u(p);const l=g(e);await y(l);const i="test";await h(l,i),s(l).toHaveAttribute("value",i),await h(l,"{Escape}");const O=r(e);s(O).toHaveTextContent(o)}const X=I({tests:[k,z,G,V]}),w=P({component:a,actionPropsArray:["onChange"]}),Y={title:"Components/EditableText",component:a,argTypes:w.argTypes,decorators:w.decorators},q=R(a),x={render:q.bind({}),args:{"aria-label":"Editable text",value:"This text is an editable text"},play:X,parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>t.jsxs(b,{direction:"column",gap:"large",align:"start",children:[t.jsxs(b,{gap:"large",children:[t.jsx(a,{"aria-label":"Text1 normal editable text",type:"text1",weight:"normal",value:"Text1 Normal"}),t.jsx(a,{"aria-label":"Text1 medium editable text",type:"text1",weight:"medium",value:"Text1 Medium"}),t.jsx(a,{"aria-label":"Text1 bold editable text",type:"text1",weight:"bold",value:"Text1 Bold"})]}),t.jsxs(b,{gap:"large",children:[t.jsx(a,{"aria-label":"Text2 normal editable text",type:"text2",weight:"normal",value:"Text2 Normal"}),t.jsx(a,{"aria-label":"Text2 medium editable text",type:"text2",weight:"medium",value:"Text2 Medium"}),t.jsx(a,{"aria-label":"Text2 bold editable text",type:"text2",weight:"bold",value:"Text2 Bold"})]}),t.jsxs(b,{gap:"large",children:[t.jsx(a,{"aria-label":"Text3 normal editable text",type:"text3",weight:"normal",value:"Text3 Normal"}),t.jsx(a,{"aria-label":"Text3 medium editable text",type:"text3",weight:"medium",value:"Text3 Medium"})]})]})},m={render:()=>t.jsx(a,{"aria-label":"Multiline editable text",type:"text1",weight:"normal",multiline:!0,value:`This is a multiline
here's the second line`})},c={render:()=>t.jsx(a,{"aria-label":"Editable text with placeholder",value:"Clear text to see placeholder",placeholder:"Enter your text here..."})};var v,f,j;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: EditableTextTemplate.bind({}),
  args: {
    "aria-label": "Editable text",
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
}`,...(j=(f=x.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var C,M,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" align="start">
      <Flex gap="large">
        <EditableText aria-label="Text1 normal editable text" type="text1" weight="normal" value="Text1 Normal" />
        <EditableText aria-label="Text1 medium editable text" type="text1" weight="medium" value="Text1 Medium" />
        <EditableText aria-label="Text1 bold editable text" type="text1" weight="bold" value="Text1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText aria-label="Text2 normal editable text" type="text2" weight="normal" value="Text2 Normal" />
        <EditableText aria-label="Text2 medium editable text" type="text2" weight="medium" value="Text2 Medium" />
        <EditableText aria-label="Text2 bold editable text" type="text2" weight="bold" value="Text2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText aria-label="Text3 normal editable text" type="text3" weight="normal" value="Text3 Normal" />
        <EditableText aria-label="Text3 medium editable text" type="text3" weight="medium" value="Text3 Medium" />
      </Flex>
    </Flex>
}`,...(S=(M=d.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var F,_,A;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <EditableText aria-label="Multiline editable text" type="text1" weight="normal" multiline value={\`This is a multiline
here's the second line\`} />
}`,...(A=(_=m.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var H,B,N;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <EditableText aria-label="Editable text with placeholder" value="Clear text to see placeholder" placeholder="Enter your text here..." />
}`,...(N=(B=c.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const J=["Overview","Types","Multiline","WithPlaceholder"],ae=Object.freeze(Object.defineProperty({__proto__:null,Multiline:m,Overview:x,Types:d,WithPlaceholder:c,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{ae as E,m as M,x as O,d as T,c as W};
