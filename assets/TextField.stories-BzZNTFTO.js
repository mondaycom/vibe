import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as Q}from"./createStoryMetaSettingsDecorator-Bbe8Ja5t.js";import{C as h}from"./Check-BhuJDOHf.js";import{C as x}from"./CloseSmall-s783aDlP.js";import{f as U,g as f}from"./index-DXCg-GMl.js";import{E as u}from"./Settings-DHIMnErx.js";import{T as i}from"./TextField-CPwbbc5E.js";import{F as t}from"./Flex-D71YaKrR.js";import{H as X}from"./Heading-BbaBWMbr.js";const g=Q({component:i,iconPropNamesArray:["secondaryIconName","icon","labelIconName"]}),Z={title:"Components/TextField",component:i,argTypes:g.argTypes,decorators:g.decorators},a={render:K=>e.jsx("div",{style:{width:300},children:e.jsx(i,{...K})}),args:{id:"overview-textfield",title:"Name",icon:U,validation:{text:"Helper text"},showCharCount:!0,placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{id:"sizes-small",inputAriaLabel:"Small text field",placeholder:"Small"}),e.jsx(i,{id:"sizes-medium",inputAriaLabel:"Medium text field",placeholder:"Medium",size:"medium"}),e.jsx(i,{id:"sizes-large",inputAriaLabel:"Large text field",placeholder:"Large",size:"large"})]})},d={render:()=>e.jsxs(t,{gap:"large",children:[e.jsxs(t,{direction:"column",gap:"medium",style:{marginTop:"var(--space-32)",width:300},children:[e.jsx(i,{id:"states-disabled",inputAriaLabel:"Disabled text field",placeholder:"Disabled",size:"medium",disabled:!0}),e.jsx(i,{id:"states-with-icon",inputAriaLabel:"Text field with icon",placeholder:"With icon",icon:u,size:"medium"}),e.jsx(i,{id:"states-clickable-icon",inputAriaLabel:"Text field with clickable icon",placeholder:"With clickable icon",iconTooltipContent:"Copy",icon:f,onIconClick:()=>{},size:"medium"})]}),e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{id:"states-with-label",placeholder:"With field label",title:"Name",size:"medium"}),e.jsx(i,{id:"states-success",inputAriaLabel:"Success text field",placeholder:"Success",validation:{status:"success"},icon:h,size:"medium"}),e.jsx(i,{id:"states-error",inputAriaLabel:"Error text field",placeholder:"Error",validation:{status:"error"},icon:x,size:"medium"})]})]}),parameters:{docs:{liveEdit:{scope:{Email:u,Check:h,CloseSmall:x,Duplicate:f}}}}},l={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"validation-textfield",placeholder:"Validate me",title:"Name",size:"medium",validation:{status:"error",text:"Validation text"}})})},n={render:()=>e.jsxs(t,{align:"stretch",direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{id:"signin-email",title:"Email",size:"medium",placeholder:"email@monday.com",validation:{status:"error",text:"Invalid email"}}),e.jsx(i,{id:"signin-password",title:"Password",type:"password",size:"medium",required:!0,requiredErrorText:"Password is required"})]}),name:"Validation in a form"},s={render:()=>e.jsxs(t,{align:"stretch",direction:"column",gap:"large",style:{width:300},children:[e.jsx(X,{type:"h1",weight:"bold",maxLines:2,children:"Dark Mode Feedback Form"}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(i,{id:"form-name",title:"Your Name",size:"medium",placeholder:"John Doe"}),e.jsx(i,{id:"form-email",title:"Email",size:"medium",placeholder:"email@monday.com"})]})]}),name:"Text field in a form"},o={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"placeholder-text-field",title:"Invite with email",labelIconName:u,placeholder:"Enter one or more email",size:"medium"})}),parameters:{docs:{liveEdit:{scope:{Email:u}}}},name:"Input field with placeholder text"},m={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"required-field",placeholder:"Your email",title:"Email Address",size:"medium",required:!0})}),name:"Required input field"},c={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"date-field",inputAriaLabel:"Select a date",size:"medium",type:"date"})}),name:"Input field with date"},p={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"datetime-field",inputAriaLabel:"Select date and time",size:"medium",type:"datetime-local"})}),name:"Input field with date and time"};var F,w,b;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(b=(w=a.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var v,T,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" style={{
    width: 300
  }}>
      <TextField id="sizes-small" inputAriaLabel="Small text field" placeholder="Small" />
      <TextField id="sizes-medium" inputAriaLabel="Medium text field" placeholder="Medium" size="medium" />
      <TextField id="sizes-large" inputAriaLabel="Large text field" placeholder="Large" size="large" />
    </Flex>
}`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var z,S,j;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var E,A,I;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="validation-textfield" placeholder="Validate me" title="Name" size="medium" validation={{
      status: "error",
      text: "Validation text"
    }} />
    </div>
}`,...(I=(A=l.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var L,C,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Flex align="stretch" direction="column" gap="medium" style={{
    width: 300
  }}>
      <TextField id="signin-email" title="Email" size="medium" placeholder="email@monday.com" validation={{
      status: "error",
      text: "Invalid email"
    }} />
      <TextField id="signin-password" title="Password" type="password" size="medium" required requiredErrorText="Password is required" />
    </Flex>,
  name: "Validation in a form"
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,q,N;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(q=s.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var W,P,V;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(P=o.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var M,_,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="required-field" placeholder="Your email" title="Email Address" size="medium" required />
    </div>,
  name: "Required input field"
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var O,R,Y;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="date-field" inputAriaLabel="Select a date" size="medium" type="date" />
    </div>,
  name: "Input field with date"
}`,...(Y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var J,B,G;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="datetime-field" inputAriaLabel="Select date and time" size="medium" type="datetime-local" />
    </div>,
  name: "Input field with date and time"
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const $=["Overview","Sizes","States","Validation","ValidationInAForm","TextFieldInAForm","InputFieldWithPlaceholderText","RequiredInputField","InputFieldWithDate","InputFieldWithDateAndTime"],oe=Object.freeze(Object.defineProperty({__proto__:null,InputFieldWithDate:c,InputFieldWithDateAndTime:p,InputFieldWithPlaceholderText:o,Overview:a,RequiredInputField:m,Sizes:r,States:d,TextFieldInAForm:s,Validation:l,ValidationInAForm:n,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{o as I,a as O,m as R,r as S,oe as T,l as V,d as a,s as b,c,p as d};
