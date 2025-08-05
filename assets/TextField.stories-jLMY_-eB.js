import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{T as i}from"./TextField-6wOPUDse.js";import{H as J}from"./Heading-D8MV7aea.js";import{k as $,m as u}from"./index-CUPFiJE2.js";import{a as h}from"./CloseSmall-CIab6kaf.js";import{r as x}from"./Check-B_icfwyn.js";import{a as p}from"./Settings-DOfpeGYp.js";import{F as t}from"./Flex-BwTwg4EO.js";import{c as B}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const F=B({component:i,iconPropNamesArray:["secondaryIconName","iconName","labelIconName"]}),G={title:"Components/TextField",component:i,argTypes:F.argTypes,decorators:F.decorators},a={render:Y=>e.jsx("div",{style:{width:300},children:e.jsx(i,{...Y})}),args:{title:"Name",iconName:$,validation:{text:"Helper text"},showCharCount:!0,placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{placeholder:"Small"}),e.jsx(i,{placeholder:"Medium",size:"medium"}),e.jsx(i,{placeholder:"Large",size:"large"})]})},n={render:()=>e.jsxs(t,{gap:"large",children:[e.jsxs(t,{direction:"column",gap:"medium",style:{marginTop:"var(--space-32)",width:300},children:[e.jsx(i,{placeholder:"Disabled",size:"medium",disabled:!0}),e.jsx(i,{placeholder:"With icon",iconName:p,size:"medium"}),e.jsx(i,{placeholder:"With clickable icon",iconTooltipContent:"Copy",iconName:u,onIconClick:()=>{},size:"medium"})]}),e.jsxs(t,{direction:"column",gap:"medium",style:{width:300},children:[e.jsx(i,{placeholder:"With field label",title:"Name",size:"medium"}),e.jsx(i,{placeholder:"Success",validation:{status:"success"},iconName:x,size:"medium"}),e.jsx(i,{placeholder:"Error",validation:{status:"error"},iconName:h,size:"medium"})]})]}),parameters:{docs:{liveEdit:{scope:{Email:p,Check:x,CloseSmall:h,Duplicate:u}}}}},d={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{placeholder:"Validate me",title:"Name",size:"medium",validation:{status:"error",text:"Validation text"}})})},l={render:()=>e.jsxs(t,{align:"stretch",direction:"column",gap:"large",style:{width:300},children:[e.jsx(J,{type:"h1",weight:"bold",maxLines:2,children:"Dark Mode Feedback From"}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(i,{title:"Your Name",size:"medium",placeholder:"John Doe"}),e.jsx(i,{title:"Email",size:"medium",placeholder:"email@monday.com"})]})]}),name:"Text field in a form"},s={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{title:"Invite with email",labelIconName:p,placeholder:"Enter one or more email",size:"medium"})}),parameters:{docs:{liveEdit:{scope:{Email:p}}}},name:"Input field with placeholder text"},o={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{placeholder:"Your email",title:"Email Address",size:"medium",required:!0})}),name:"Required input field"},m={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{size:"medium",type:"date"})}),name:"Input field with date"},c={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(i,{size:"medium",type:"datetime-local"})}),name:"Input field with date and time"};var g,v,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: TextFieldProps) => <div style={{
    width: 300
  }}>
      <TextField {...args} />
    </div>,
  args: {
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
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var y,w,j;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" style={{
    width: 300
  }}>
      <TextField placeholder="Small" />
      <TextField placeholder="Medium" size="medium" />
      <TextField placeholder="Large" size="large" />
    </Flex>
}`,...(j=(w=r.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var z,f,S;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex gap="large">
      <Flex direction="column" gap="medium" style={{
      marginTop: "var(--space-32)",
      width: 300
    }}>
        <TextField placeholder="Disabled" size="medium" disabled />
        <TextField placeholder="With icon" iconName={Email} size="medium" />
        <TextField placeholder="With clickable icon" iconTooltipContent="Copy" iconName={Duplicate} onIconClick={() => {}} size="medium" />
      </Flex>
      <Flex direction="column" gap="medium" style={{
      width: 300
    }}>
        <TextField placeholder="With field label" title="Name" size="medium" />
        <TextField placeholder="Success" validation={{
        status: "success"
      }} iconName={Check} size="medium" />
        <TextField placeholder="Error" validation={{
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
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,E,N;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField placeholder="Validate me" title="Name" size="medium" validation={{
      status: "error",
      text: "Validation text"
    }} />
    </div>
}`,...(N=(E=d.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var b,C,D;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Flex align="stretch" direction="column" gap="large" style={{
    width: 300
  }}>
      <Heading type="h1" weight="bold" maxLines={2}>
        Dark Mode Feedback From
      </Heading>
      <Flex direction="column" gap="medium">
        <TextField title="Your Name" size="medium" placeholder="John Doe" />
        <TextField title="Email" size="medium" placeholder="email@monday.com" />
      </Flex>
    </Flex>,
  name: "Text field in a form"
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,W,A;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField title="Invite with email" labelIconName={Email} placeholder="Enter one or more email" size="medium" />
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
}`,...(A=(W=s.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var P,V,_;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField placeholder="Your email" title="Email Address" size="medium" required />
    </div>,
  name: "Required input field"
}`,...(_=(V=o.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,H,M;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField size="medium" type="date" />
    </div>,
  name: "Input field with date"
}`,...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,R,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField size="medium" type="datetime-local" />
    </div>,
  name: "Input field with date and time"
}`,...(L=(R=c.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};const K=["Overview","Sizes","States","Validation","TextFieldInAForm","InputFieldWithPlaceholderText","RequiredInputField","InputFieldWithDate","InputFieldWithDateAndTime"],ne=Object.freeze(Object.defineProperty({__proto__:null,InputFieldWithDate:m,InputFieldWithDateAndTime:c,InputFieldWithPlaceholderText:s,Overview:a,RequiredInputField:o,Sizes:r,States:n,TextFieldInAForm:l,Validation:d,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{s as I,a as O,o as R,r as S,ne as T,d as V,n as a,l as b,m as c,c as d};
