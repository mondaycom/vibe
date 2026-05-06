import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as J}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{C as u}from"./Check-BhuJDOHf.js";import{C as h}from"./CloseSmall-s783aDlP.js";import{f as B,g as x}from"./index-D1D0uiJ1.js";import{E as p}from"./Email-BmMi5Ll_.js";import{T as i}from"./TextField-DDXTwBtX.js";import{F as t}from"./Flex-7H_pA1dJ.js";import{H as G}from"./Heading-CE8CoG9V.js";const f=J({component:i,iconPropNamesArray:["secondaryIconName","icon","labelIconName"]}),K={title:"Components/TextField",component:i,argTypes:f.argTypes,decorators:f.decorators},a={render:Y=>e.jsx("div",{style:{width:300},children:e.jsx(i,{...Y})}),args:{id:"overview-textfield",title:"Name",icon:B,validation:{text:"Helper text"},showCharCount:!0,placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{id:"sizes-small",inputAriaLabel:"Small text field",placeholder:"Small"}),e.jsx(i,{id:"sizes-medium",inputAriaLabel:"Medium text field",placeholder:"Medium",size:"medium"}),e.jsx(i,{id:"sizes-large",inputAriaLabel:"Large text field",placeholder:"Large",size:"large"})]})},r={render:()=>e.jsxs(t,{gap:"large",children:[e.jsxs(t,{direction:"column",gap:"medium",style:{marginTop:"var(--space-32)",width:300},children:[e.jsx(i,{id:"states-disabled",inputAriaLabel:"Disabled text field",placeholder:"Disabled",size:"medium",disabled:!0}),e.jsx(i,{id:"states-with-icon",inputAriaLabel:"Text field with icon",placeholder:"With icon",icon:p,size:"medium"}),e.jsx(i,{id:"states-clickable-icon",inputAriaLabel:"Text field with clickable icon",placeholder:"With clickable icon",iconTooltipContent:"Copy",icon:x,onIconClick:()=>{},size:"medium"})]}),e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{id:"states-with-label",placeholder:"With field label",title:"Name",size:"medium"}),e.jsx(i,{id:"states-success",inputAriaLabel:"Success text field",placeholder:"Success",validation:{status:"success"},icon:u,size:"medium"}),e.jsx(i,{id:"states-error",inputAriaLabel:"Error text field",placeholder:"Error",validation:{status:"error"},icon:h,size:"medium"})]})]}),parameters:{docs:{liveEdit:{scope:{Email:p,Check:u,CloseSmall:h,Duplicate:x}}}}},l={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"validation-textfield",placeholder:"Validate me",title:"Name",size:"medium",validation:{status:"error",text:"Validation text"}})})},n={render:()=>e.jsxs(t,{align:"stretch",direction:"column",gap:"large",style:{width:300},children:[e.jsx(G,{type:"h1",weight:"bold",maxLines:2,children:"Dark Mode Feedback Form"}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(i,{id:"form-name",title:"Your Name",size:"medium",placeholder:"John Doe"}),e.jsx(i,{id:"form-email",title:"Email",size:"medium",placeholder:"email@monday.com"})]})]}),name:"Text field in a form"},s={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"placeholder-text-field",title:"Invite with email",labelIconName:p,placeholder:"Enter one or more email",size:"medium"})}),parameters:{docs:{liveEdit:{scope:{Email:p}}}},name:"Input field with placeholder text"},o={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"required-field",placeholder:"Your email",title:"Email Address",size:"medium",required:!0})}),name:"Required input field"},m={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"date-field",inputAriaLabel:"Select a date",size:"medium",type:"date"})}),name:"Input field with date"},c={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"datetime-field",inputAriaLabel:"Select date and time",size:"medium",type:"datetime-local"})}),name:"Input field with date and time"};var g,F,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <div style={{
    width: 300
  }}>
      <TextField {...args} />
    </div>,
  args: {
    id: "overview-textfield",
    title: "Name",
    icon: Show,
    validation: {
      text: "Helper text"
    },
    showCharCount: true,
    placeholder: "Placeholder text here"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(b=(F=a.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var v,w,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" style={{
    width: 300
  }}>
      <TextField id="sizes-small" inputAriaLabel="Small text field" placeholder="Small" />
      <TextField id="sizes-medium" inputAriaLabel="Medium text field" placeholder="Medium" size="medium" />
      <TextField id="sizes-large" inputAriaLabel="Large text field" placeholder="Large" size="large" />
    </Flex>
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,y,S;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex gap="large">
      <Flex direction="column" gap="medium" style={{
      marginTop: "var(--space-32)",
      width: 300
    }}>
        <TextField id="states-disabled" inputAriaLabel="Disabled text field" placeholder="Disabled" size="medium" disabled />
        <TextField id="states-with-icon" inputAriaLabel="Text field with icon" placeholder="With icon" icon={Email} size="medium" />
        <TextField id="states-clickable-icon" inputAriaLabel="Text field with clickable icon" placeholder="With clickable icon" iconTooltipContent="Copy" icon={Duplicate} onIconClick={() => {}} size="medium" />
      </Flex>
      <Flex direction="column" gap="medium" style={{
      width: 300
    }}>
        <TextField id="states-with-label" placeholder="With field label" title="Name" size="medium" />
        <TextField id="states-success" inputAriaLabel="Success text field" placeholder="Success" validation={{
        status: "success"
      }} icon={Check} size="medium" />
        <TextField id="states-error" inputAriaLabel="Error text field" placeholder="Error" validation={{
        status: "error"
      }} icon={CloseSmall} size="medium" />
      </Flex>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Email,
          Check,
          CloseSmall,
          Duplicate
        }
      }
    }
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,A,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="validation-textfield" placeholder="Validate me" title="Name" size="medium" validation={{
      status: "error",
      text: "Validation text"
    }} />
    </div>
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,I,C;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex align="stretch" direction="column" gap="large" style={{
    width: 300
  }}>
      <Heading type="h1" weight="bold" maxLines={2}>
        Dark Mode Feedback Form
      </Heading>
      <Flex direction="column" gap="medium">
        <TextField id="form-name" title="Your Name" size="medium" placeholder="John Doe" />
        <TextField id="form-email" title="Email" size="medium" placeholder="email@monday.com" />
      </Flex>
    </Flex>,
  name: "Text field in a form"
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var D,k,N;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="placeholder-text-field" title="Invite with email" labelIconName={Email} placeholder="Enter one or more email" size="medium" />
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Email
        }
      }
    }
  },
  name: "Input field with placeholder text"
}`,...(N=(k=s.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var W,q,M;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="required-field" placeholder="Your email" title="Email Address" size="medium" required />
    </div>,
  name: "Required input field"
}`,...(M=(q=o.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var P,V,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="date-field" inputAriaLabel="Select a date" size="medium" type="date" />
    </div>,
  name: "Input field with date"
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,O,R;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="datetime-field" inputAriaLabel="Select date and time" size="medium" type="datetime-local" />
    </div>,
  name: "Input field with date and time"
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Q=["Overview","Sizes","States","Validation","TextFieldInAForm","InputFieldWithPlaceholderText","RequiredInputField","InputFieldWithDate","InputFieldWithDateAndTime"],re=Object.freeze(Object.defineProperty({__proto__:null,InputFieldWithDate:m,InputFieldWithDateAndTime:c,InputFieldWithPlaceholderText:s,Overview:a,RequiredInputField:o,Sizes:d,States:r,TextFieldInAForm:n,Validation:l,__namedExportsOrder:Q,default:K},Symbol.toStringTag,{value:"Module"}));export{s as I,a as O,o as R,d as S,re as T,l as V,r as a,n as b,m as c,c as d};
