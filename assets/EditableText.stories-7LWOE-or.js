import{j as t}from"./jsx-runtime-lwGtIXvq.js";import{c as O}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{i as P,d as u,c as T,e as s,r as E,h as y,b as h,f as I,j as D}from"./interactions-utils-xQn6HIjI.js";import{C as W}from"./useMergeRef-DmpwoaL5.js";import{r as R}from"./createComponentTemplate-B08h-OOW.js";import{E as a}from"./EditableText-M_gThpFY.js";import{F as b}from"./Flex-DIp2zxrn.js";const p=200,o="This text is an editable text";function r(e){return I(e,W.EDITABLE_TEXT)}function g(e){return D(e,"input")}async function k(e){await u(p);const n=r(e);T(n),await u(p);const l=g(e);s(l).toHaveAttribute("value",o),await E();const i=r(e);s(i).toHaveTextContent(o)}async function z(e){const n=r(e);T(n),await u(p);const l=g(e);await y(l),await h(l,o),s(l).toHaveAttribute("value",o),await E();const i=r(e);s(i).toHaveTextContent(o)}async function G(e){const n=r(e);T(n),await u(p);const l=g(e);await y(l),await E();const i=r(e);s(i).toHaveTextContent(o)}async function V(e){const n=r(e);T(n),await u(p);const l=g(e);await y(l);const i="test";await h(l,i),s(l).toHaveAttribute("value",i),await h(l,"{Escape}");const N=r(e);s(N).toHaveTextContent(o)}const X=P({tests:[k,z,G,V]}),w=O({component:a,actionPropsArray:["onChange"]}),Y={title:"Components/EditableText",component:a,argTypes:w.argTypes,decorators:w.decorators},q=R(a),x={render:q.bind({}),args:{ariaLabel:"Editable text",value:"This text is an editable text"},play:X,parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>t.jsxs(b,{direction:"column",gap:"large",align:"start",children:[t.jsxs(b,{gap:"large",children:[t.jsx(a,{ariaLabel:"Text1 normal editable text",type:"text1",weight:"normal",value:"Text1 Normal"}),t.jsx(a,{ariaLabel:"Text1 medium editable text",type:"text1",weight:"medium",value:"Text1 Medium"}),t.jsx(a,{ariaLabel:"Text1 bold editable text",type:"text1",weight:"bold",value:"Text1 Bold"})]}),t.jsxs(b,{gap:"large",children:[t.jsx(a,{ariaLabel:"Text2 normal editable text",type:"text2",weight:"normal",value:"Text2 Normal"}),t.jsx(a,{ariaLabel:"Text2 medium editable text",type:"text2",weight:"medium",value:"Text2 Medium"}),t.jsx(a,{ariaLabel:"Text2 bold editable text",type:"text2",weight:"bold",value:"Text2 Bold"})]}),t.jsxs(b,{gap:"large",children:[t.jsx(a,{ariaLabel:"Text3 normal editable text",type:"text3",weight:"normal",value:"Text3 Normal"}),t.jsx(a,{ariaLabel:"Text3 medium editable text",type:"text3",weight:"medium",value:"Text3 Medium"})]})]})},m={render:()=>t.jsx(a,{ariaLabel:"Multiline editable text",type:"text1",weight:"normal",multiline:!0,value:`This is a multiline
here's the second line`})},c={render:()=>t.jsx(a,{ariaLabel:"Editable text with placeholder",value:"Clear text to see placeholder",placeholder:"Enter your text here..."})};var v,L,f;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: EditableTextTemplate.bind({}),
  args: {
    ariaLabel: "Editable text",
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
}`,...(f=(L=x.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var j,C,M;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="large" align="start">
      <Flex gap="large">
        <EditableText ariaLabel="Text1 normal editable text" type="text1" weight="normal" value="Text1 Normal" />
        <EditableText ariaLabel="Text1 medium editable text" type="text1" weight="medium" value="Text1 Medium" />
        <EditableText ariaLabel="Text1 bold editable text" type="text1" weight="bold" value="Text1 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText ariaLabel="Text2 normal editable text" type="text2" weight="normal" value="Text2 Normal" />
        <EditableText ariaLabel="Text2 medium editable text" type="text2" weight="medium" value="Text2 Medium" />
        <EditableText ariaLabel="Text2 bold editable text" type="text2" weight="bold" value="Text2 Bold" />
      </Flex>
      <Flex gap="large">
        <EditableText ariaLabel="Text3 normal editable text" type="text3" weight="normal" value="Text3 Normal" />
        <EditableText ariaLabel="Text3 medium editable text" type="text3" weight="medium" value="Text3 Medium" />
      </Flex>
    </Flex>
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var S,F,_;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <EditableText ariaLabel="Multiline editable text" type="text1" weight="normal" multiline value={\`This is a multiline
here's the second line\`} />
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var A,H,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <EditableText ariaLabel="Editable text with placeholder" value="Clear text to see placeholder" placeholder="Enter your text here..." />
}`,...(B=(H=c.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};const J=["Overview","Types","Multiline","WithPlaceholder"],ae=Object.freeze(Object.defineProperty({__proto__:null,Multiline:m,Overview:x,Types:d,WithPlaceholder:c,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{ae as E,m as M,x as O,d as T,c as W};
