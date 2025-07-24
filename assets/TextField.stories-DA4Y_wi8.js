import{R as e}from"./index-Hemj67b4.js";import{T as t}from"./TextField-Dc_mArgZ.js";import{H as J}from"./Heading-ILPymVjj.js";import{k as $,m as u}from"./index-BA_MN9l1.js";import{a as h}from"./CloseSmall-CIab6kaf.js";import{r as x}from"./Check-B_icfwyn.js";import{a as p}from"./Settings-DOfpeGYp.js";import{F as a}from"./Flex-DIvs4XZj.js";import{c as B}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const E=B({component:t,iconPropNamesArray:["secondaryIconName","iconName","labelIconName"]}),G={title:"Components/TextField",component:t,argTypes:E.argTypes,decorators:E.decorators},i={render:j=>e.createElement("div",{style:{width:300}},e.createElement(t,{...j})),args:{title:"Name",iconName:$,validation:{text:"Helper text"},showCharCount:!0,placeholder:"Placeholder text here"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.createElement(a,{direction:"column",gap:"medium",style:{width:300}},e.createElement(t,{placeholder:"Small"}),e.createElement(t,{placeholder:"Medium",size:"medium"}),e.createElement(t,{placeholder:"Large",size:"large"}))},n={render:()=>e.createElement(a,{gap:"large"},e.createElement(a,{direction:"column",gap:"medium",style:{marginTop:"var(--space-32)",width:300}},e.createElement(t,{placeholder:"Disabled",size:"medium",disabled:!0}),e.createElement(t,{placeholder:"With icon",iconName:p,size:"medium"}),e.createElement(t,{placeholder:"With clickable icon",iconTooltipContent:"Copy",iconName:u,onIconClick:()=>{},size:"medium"})),e.createElement(a,{direction:"column",gap:"medium",style:{width:300}},e.createElement(t,{placeholder:"With field label",title:"Name",size:"medium"}),e.createElement(t,{placeholder:"Success",validation:{status:"success"},iconName:x,size:"medium"}),e.createElement(t,{placeholder:"Error",validation:{status:"error"},iconName:h,size:"medium"}))),parameters:{docs:{liveEdit:{scope:{Email:p,Check:x,CloseSmall:h,Duplicate:u}}}}},l={render:()=>e.createElement("div",{style:{width:300}},e.createElement(t,{placeholder:"Validate me",title:"Name",size:"medium",validation:{status:"error",text:"Validation text"}}))},d={render:()=>e.createElement(a,{align:"stretch",direction:"column",gap:"large",style:{width:300}},e.createElement(J,{type:"h1",weight:"bold",maxLines:2},"Dark Mode Feedback From"),e.createElement(a,{direction:"column",gap:"medium"},e.createElement(t,{title:"Your Name",size:"medium",placeholder:"John Doe"}),e.createElement(t,{title:"Email",size:"medium",placeholder:"email@monday.com"}))),name:"Text field in a form"},o={render:()=>e.createElement("div",{style:{width:300}},e.createElement(t,{title:"Invite with email",labelIconName:p,placeholder:"Enter one or more email",size:"medium"})),parameters:{docs:{liveEdit:{scope:{Email:p}}}},name:"Input field with placeholder text"},m={render:()=>e.createElement("div",{style:{width:300}},e.createElement(t,{placeholder:"Your email",title:"Email Address",size:"medium",required:!0})),name:"Required input field"},s={render:()=>e.createElement("div",{style:{width:300}},e.createElement(t,{size:"medium",type:"date"})),name:"Input field with date"},c={render:()=>e.createElement("div",{style:{width:300}},e.createElement(t,{size:"medium",type:"datetime-local"})),name:"Input field with date and time"};var F,g,v;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var T,y,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" style={{
    width: 300
  }}>
      <TextField placeholder="Small" />
      <TextField placeholder="Medium" size="medium" />
      <TextField placeholder="Large" size="large" />
    </Flex>
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var z,f,S;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var I,N,b;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField placeholder="Validate me" title="Name" size="medium" validation={{
      status: "error",
      text: "Validation text"
    }} />
    </div>
}`,...(b=(N=l.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var C,D,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var W,A,P;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(A=o.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var R,V,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField placeholder="Your email" title="Email Address" size="medium" required />
    </div>,
  name: "Required input field"
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,H,M;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField size="medium" type="date" />
    </div>,
  name: "Input field with date"
}`,...(M=(H=s.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,L,Y;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <TextField size="medium" type="datetime-local" />
    </div>,
  name: "Input field with date and time"
}`,...(Y=(L=c.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};const K=["Overview","Sizes","States","Validation","TextFieldInAForm","InputFieldWithPlaceholderText","RequiredInputField","InputFieldWithDate","InputFieldWithDateAndTime"],ne=Object.freeze(Object.defineProperty({__proto__:null,InputFieldWithDate:s,InputFieldWithDateAndTime:c,InputFieldWithPlaceholderText:o,Overview:i,RequiredInputField:m,Sizes:r,States:n,TextFieldInAForm:d,Validation:l,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{o as I,i as O,m as R,r as S,ne as T,l as V,n as a,d as b,s as c,c as d};
