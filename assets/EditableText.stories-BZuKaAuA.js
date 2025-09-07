import{j as t}from"./jsx-runtime-DDzbWKUH.js";import{E as a}from"./EditableText-DrigwV5P.js";import{i as I,d as c,c as T,e as s,h as E,b as y,f as O,j as D}from"./interactions-utils-DDQLEz6W.js";import{b as q}from"./test-ids-utils-CSfXomCJ.js";import{r as v}from"./interactions-helper-Bq4hWQWq.js";import{F as b}from"./Flex-BEu-Gd_z.js";import{r as R}from"./createComponentTemplate-Y0VTmW_y.js";import{c as V}from"./createStoryMetaSettingsDecorator-CZWEfz_r.js";const p=200,o="This text is an editable text";function l(e){return O(e,q.EDITABLE_TEXT)}function g(e){return D(e,"input")}async function W(e){await c(p);const n=l(e);T(n),await c(p);const i=g(e);s(i).toHaveAttribute("value",o),await v();const r=l(e);s(r).toHaveTextContent(o)}async function k(e){const n=l(e);T(n),await c(p);const i=g(e);await E(i),await y(i,o),s(i).toHaveAttribute("value",o),await v();const r=l(e);s(r).toHaveTextContent(o)}async function z(e){const n=l(e);T(n),await c(p);const i=g(e);await E(i),await v();const r=l(e);s(r).toHaveTextContent(o)}async function G(e){const n=l(e);T(n),await c(p);const i=g(e);await E(i);const r="test";await y(i,r),s(i).toHaveAttribute("value",r),await y(i,"{Escape}");const B=l(e);s(B).toHaveTextContent(o)}const h=I({tests:[W,k,z,G]});try{h.displayName="overviewPlaySuite",h.__docgenInfo={description:"",displayName:"overviewPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const w=V({component:a,actionPropsArray:["onChange"]}),X={title:"Components/EditableText",component:a,argTypes:w.argTypes,decorators:w.decorators},Y=R(a),d={render:Y.bind({}),args:{ariaLabel:"Editable text",value:"This text is an editable text"},play:h,parameters:{docs:{liveEdit:{isEnabled:!1}}}},x={render:()=>t.jsxs(b,{direction:"column",gap:"large",align:"start",children:[t.jsxs(b,{gap:"large",children:[t.jsx(a,{ariaLabel:"Text1 normal editable text",type:"text1",weight:"normal",value:"Text1 Normal"}),t.jsx(a,{ariaLabel:"Text1 medium editable text",type:"text1",weight:"medium",value:"Text1 Medium"}),t.jsx(a,{ariaLabel:"Text1 bold editable text",type:"text1",weight:"bold",value:"Text1 Bold"})]}),t.jsxs(b,{gap:"large",children:[t.jsx(a,{ariaLabel:"Text2 normal editable text",type:"text2",weight:"normal",value:"Text2 Normal"}),t.jsx(a,{ariaLabel:"Text2 medium editable text",type:"text2",weight:"medium",value:"Text2 Medium"}),t.jsx(a,{ariaLabel:"Text2 bold editable text",type:"text2",weight:"bold",value:"Text2 Bold"})]}),t.jsxs(b,{gap:"large",children:[t.jsx(a,{ariaLabel:"Text3 normal editable text",type:"text3",weight:"normal",value:"Text3 Normal"}),t.jsx(a,{ariaLabel:"Text3 medium editable text",type:"text3",weight:"medium",value:"Text3 Medium"})]})]})},m={render:()=>t.jsx(a,{ariaLabel:"Multiline editable text",type:"text1",weight:"normal",multiline:!0,value:`This is a multiline
here's the second line`})},u={render:()=>t.jsx(a,{ariaLabel:"Editable text with placeholder",value:"Clear text to see placeholder",placeholder:"Enter your text here..."})};var f,L,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(L=d.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,S,M;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(S=x.parameters)==null?void 0:S.docs)==null?void 0:M.source}}};var C,F,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <EditableText ariaLabel="Multiline editable text" type="text1" weight="normal" multiline value={\`This is a multiline
here's the second line\`} />
}`,...(N=(F=m.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var A,H,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <EditableText ariaLabel="Editable text with placeholder" value="Clear text to see placeholder" placeholder="Enter your text here..." />
}`,...(P=(H=u.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const J=["Overview","Types","Multiline","WithPlaceholder"],ie=Object.freeze(Object.defineProperty({__proto__:null,Multiline:m,Overview:d,Types:x,WithPlaceholder:u,__namedExportsOrder:J,default:X},Symbol.toStringTag,{value:"Module"}));export{ie as E,m as M,d as O,x as T,u as W};
