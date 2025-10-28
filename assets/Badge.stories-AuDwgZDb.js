import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{B as t}from"./Badge-Bs2_JcdL.js";import{L as m}from"./Link-kEB9F9pq.js";import{F as d}from"./Flex-DYzKCQWz.js";import{A as P}from"./Avatar-RIwmYjIN.js";import{r as F}from"./createComponentTemplate-B08h-OOW.js";import{l as a}from"./index-CkcRWdy2.js";import{c}from"./Workspace-DtDO7RvQ.js";import{c as k}from"./createStoryMetaSettingsDecorator-DMY_JaA7.js";import{B as l}from"./Button-BcV-q4GT.js";const g=""+new URL("person-JrBmQF4W.png",import.meta.url).href,u=k({component:t,ignoreControlsPropNamesArray:["children"],actionPropsArray:["onMouseDown"]}),A=F(t),N={title:"Components/Badge",component:t,argTypes:u.argTypes,decorators:u.decorators},n={render:A.bind({}),name:"Overview",args:{id:"overview-badge",children:e.jsx(l,{id:"overview-badge-button",ariaLabel:"What's new button with badge",leftIcon:a,children:"What's new"})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(d,{gap:"large",justify:"start",align:"start",children:[e.jsxs(d,{direction:"column",gap:"medium",align:"start",children:["Indicator",e.jsx(t,{id:"indicator-badge",children:e.jsx(l,{id:"indicator-button",ariaLabel:"What's new button with indicator",leftIcon:a,children:"What's new"})})]}),e.jsxs(d,{direction:"column",gap:"medium",align:"start",children:["Counter",e.jsx(t,{id:"counter-badge",type:"counter",count:100,maxDigits:2,ariaLabel:"100 notifications",children:e.jsx(l,{id:"counter-button",ariaLabel:"What's new button with counter",leftIcon:a,children:"What's new"})})]})]}),parameters:{docs:{liveEdit:{scope:{WhatsNew:a}}}},name:"States"},i={render:()=>e.jsx(t,{id:"button-badge",alignment:"rectangular",children:e.jsx(l,{id:"button-story-button",ariaLabel:"Button with external page icon and badge",leftIcon:c,children:"Button"})}),parameters:{docs:{liveEdit:{scope:{ExternalPage:c}}}},name:"Button"},o={render:()=>e.jsx(t,{id:"avatar-badge",alignment:"circular",children:e.jsx(P,{id:"badge-avatar",size:"large",src:g,type:"img"})}),parameters:{docs:{liveEdit:{scope:{person:g}}}},name:"Avatar"},s={render:()=>e.jsxs(d,{direction:"column",gap:"medium",align:"start",children:[e.jsx(t,{id:"inline-badge-1",alignment:"outside",children:e.jsx(m,{id:"inline-link-1",text:"Read more"})}),e.jsx(t,{id:"inline-badge-2",alignment:"outside",children:e.jsx(m,{id:"inline-link-2",text:"What's new",iconPosition:"start",icon:a})}),e.jsx(t,{id:"inline-badge-3",alignment:"outside",children:e.jsx(m,{id:"inline-link-3",text:"Learn more",iconPosition:"end",icon:c})})]}),parameters:{docs:{liveEdit:{scope:{WhatsNew:a,ExternalPage:c}}}},name:"Inline elements"};var p,b,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: badgeTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-badge",
    children: <Button id="overview-badge-button" ariaLabel="What's new button with badge" leftIcon={WhatsNew}>
        {"What's new"}
      </Button>
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var x,w,B;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Flex gap="large" justify="start" align="start">
      <Flex direction="column" gap="medium" align="start">
        Indicator
        <Badge id="indicator-badge">
          <Button id="indicator-button" ariaLabel="What's new button with indicator" leftIcon={WhatsNew}>
            {"What's new"}
          </Button>
        </Badge>
      </Flex>
      <Flex direction="column" gap="medium" align="start">
        Counter
        <Badge id="counter-badge" type="counter" count={100} maxDigits={2} ariaLabel="100 notifications">
          <Button id="counter-button" ariaLabel="What's new button with counter" leftIcon={WhatsNew}>
            {"What's new"}
          </Button>
        </Badge>
      </Flex>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          WhatsNew
        }
      }
    }
  },
  name: "States"
}`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var v,f,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Badge id="button-badge" alignment="rectangular">
      <Button id="button-story-button" ariaLabel="Button with external page icon and badge" leftIcon={ExternalPage}>
        Button
      </Button>
    </Badge>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          ExternalPage
        }
      }
    }
  },
  name: "Button"
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var W,E,S;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Badge id="avatar-badge" alignment="circular">
      <Avatar id="badge-avatar" size="large" src={person} type="img" />
    </Badge>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person
        }
      }
    }
  },
  name: "Avatar"
}`,...(S=(E=o.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var y,L,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" align="start">
      <Badge id="inline-badge-1" alignment="outside">
        <Link id="inline-link-1" text="Read more" />
      </Badge>
      <Badge id="inline-badge-2" alignment="outside">
        <Link id="inline-link-2" text="What's new" iconPosition="start" icon={WhatsNew} />
      </Badge>
      <Badge id="inline-badge-3" alignment="outside">
        <Link id="inline-link-3" text="Learn more" iconPosition="end" icon={ExternalPage} />
      </Badge>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          WhatsNew,
          ExternalPage
        }
      }
    }
  },
  name: "Inline elements"
}`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const O=["Overview","States","ButtonStory","AvatarStory","InlineElements"],q=Object.freeze(Object.defineProperty({__proto__:null,AvatarStory:o,ButtonStory:i,InlineElements:s,Overview:n,States:r,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{o as A,q as B,s as I,n as O,r as S,i as a,g as p};
