import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as J}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{q as $,s as u}from"./index-BVKo2bYj.js";import{a as h}from"./CloseSmall-DUYWL2FE.js";import{r as x}from"./Check-CxyRTNy4.js";import{l as p}from"./Email-TZY0cRuW.js";import{T as i}from"./TextField-D2v604IJ.js";import{F as t}from"./Flex-Bimzf4jb.js";import{H as B}from"./Heading-B02tO7j0.js";const f=J({component:i,iconPropNamesArray:["secondaryIconName","iconName","labelIconName"]}),G={title:"Components/TextField",component:i,argTypes:f.argTypes,decorators:f.decorators},a={render:Y=>e.jsx("div",{style:{width:300},children:e.jsx(i,{...Y})}),args:{id:"overview-textfield",title:"Name",iconName:$,validation:{text:"Helper text"},showCharCount:!0,placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{id:"sizes-small",inputAriaLabel:"Small text field",placeholder:"Small"}),e.jsx(i,{id:"sizes-medium",inputAriaLabel:"Medium text field",placeholder:"Medium",size:"medium"}),e.jsx(i,{id:"sizes-large",inputAriaLabel:"Large text field",placeholder:"Large",size:"large"})]})},l={render:()=>e.jsxs(t,{gap:"large",children:[e.jsxs(t,{direction:"column",gap:"medium",style:{marginTop:"var(--space-32)",width:300},children:[e.jsx(i,{id:"states-disabled",inputAriaLabel:"Disabled text field",placeholder:"Disabled",size:"medium",disabled:!0}),e.jsx(i,{id:"states-with-icon",inputAriaLabel:"Text field with icon",placeholder:"With icon",iconName:p,size:"medium"}),e.jsx(i,{id:"states-clickable-icon",inputAriaLabel:"Text field with clickable icon",placeholder:"With clickable icon",iconTooltipContent:"Copy",iconName:u,onIconClick:()=>{},size:"medium"})]}),e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{id:"states-with-label",placeholder:"With field label",title:"Name",size:"medium"}),e.jsx(i,{id:"states-success",inputAriaLabel:"Success text field",placeholder:"Success",validation:{status:"success"},iconName:x,size:"medium"}),e.jsx(i,{id:"states-error",inputAriaLabel:"Error text field",placeholder:"Error",validation:{status:"error"},iconName:h,size:"medium"})]})]}),parameters:{docs:{liveEdit:{scope:{Email:p,Check:x,CloseSmall:h,Duplicate:u}}}}},r={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"validation-textfield",placeholder:"Validate me",title:"Name",size:"medium",validation:{status:"error",text:"Validation text"}})})},n={render:()=>e.jsxs(t,{align:"stretch",direction:"column",gap:"large",style:{width:300},children:[e.jsx(B,{type:"h1",weight:"bold",maxLines:2,children:"Dark Mode Feedback Form"}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(i,{id:"form-name",title:"Your Name",size:"medium",placeholder:"John Doe"}),e.jsx(i,{id:"form-email",title:"Email",size:"medium",placeholder:"email@monday.com"})]})]}),name:"Text field in a form"},s={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"placeholder-text-field",title:"Invite with email",labelIconName:p,placeholder:"Enter one or more email",size:"medium"})}),parameters:{docs:{liveEdit:{scope:{Email:p}}}},name:"Input field with placeholder text"},o={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"required-field",placeholder:"Your email",title:"Email Address",size:"medium",required:!0})}),name:"Required input field"},m={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"date-field",inputAriaLabel:"Select a date",size:"medium",type:"date"})}),name:"Input field with date"},c={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{id:"datetime-field",inputAriaLabel:"Select date and time",size:"medium",type:"datetime-local"})}),name:"Input field with date and time"};var g,F,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <div style={{
    width: 300
  }}>
      <TextField {...args} />
    </div>,
  args: {
    id: "overview-textfield",
    title: "Name",
    iconName: Show,
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
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,y,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex gap="large">
      <Flex direction="column" gap="medium" style={{
      marginTop: "var(--space-32)",
      width: 300
    }}>
        <TextField id="states-disabled" inputAriaLabel="Disabled text field" placeholder="Disabled" size="medium" disabled />
        <TextField id="states-with-icon" inputAriaLabel="Text field with icon" placeholder="With icon" iconName={Email} size="medium" />
        <TextField id="states-clickable-icon" inputAriaLabel="Text field with clickable icon" placeholder="With clickable icon" iconTooltipContent="Copy" iconName={Duplicate} onIconClick={() => {}} size="medium" />
      </Flex>
      <Flex direction="column" gap="medium" style={{
      width: 300
    }}>
        <TextField id="states-with-label" placeholder="With field label" title="Name" size="medium" />
        <TextField id="states-success" inputAriaLabel="Success text field" placeholder="Success" validation={{
        status: "success"
      }} iconName={Check} size="medium" />
        <TextField id="states-error" inputAriaLabel="Error text field" placeholder="Error" validation={{
        status: "error"
      }} iconName={CloseSmall} size="medium" />
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
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,A,E;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField id="validation-textfield" placeholder="Validate me" title="Name" size="medium" validation={{
      status: "error",
      text: "Validation text"
    }} />
    </div>
}`,...(E=(A=r.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,I,N;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(N=(I=n.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var C,D,k;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(D=s.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var W,q,M;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const K=["Overview","Sizes","States","Validation","TextFieldInAForm","InputFieldWithPlaceholderText","RequiredInputField","InputFieldWithDate","InputFieldWithDateAndTime"],le=Object.freeze(Object.defineProperty({__proto__:null,InputFieldWithDate:m,InputFieldWithDateAndTime:c,InputFieldWithPlaceholderText:s,Overview:a,RequiredInputField:o,Sizes:d,States:l,TextFieldInAForm:n,Validation:r,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{s as I,a as O,o as R,d as S,le as T,r as V,l as a,n as b,m as c,c as d};
