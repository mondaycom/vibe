import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{p as g}from"./person1-D9Wcho68.js";import{c as P}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as k}from"./createComponentTemplate-B08h-OOW.js";import{l as a}from"./index-BVKo2bYj.js";import{t as c}from"./Workspace-CefzN9Lt.js";import{B as t}from"./Badge-D2i3oTwh.js";import{B as l}from"./Button-zprqw9Vf.js";import{F as d}from"./Flex-Bimzf4jb.js";import{A}from"./Avatar-CwVuOGB7.js";import{L as m}from"./Link-CePbMRWx.js";const u=P({component:t,ignoreControlsPropNamesArray:["children"],actionPropsArray:["onMouseDown"]}),F=k(t),N={title:"Components/Badge",component:t,argTypes:u.argTypes,decorators:u.decorators},n={render:F.bind({}),name:"Overview",args:{id:"overview-badge",children:e.jsx(l,{id:"overview-badge-button",ariaLabel:"What's new button with badge",leftIcon:a,children:"What's new"})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(d,{gap:"large",justify:"start",align:"start",children:[e.jsxs(d,{direction:"column",gap:"medium",align:"start",children:["Indicator",e.jsx(t,{id:"indicator-badge",children:e.jsx(l,{id:"indicator-button",ariaLabel:"What's new button with indicator",leftIcon:a,children:"What's new"})})]}),e.jsxs(d,{direction:"column",gap:"medium",align:"start",children:["Counter",e.jsx(t,{id:"counter-badge",type:"counter",count:100,maxDigits:2,ariaLabel:"100 notifications",children:e.jsx(l,{id:"counter-button",ariaLabel:"What's new button with counter",leftIcon:a,children:"What's new"})})]})]}),parameters:{docs:{liveEdit:{scope:{WhatsNew:a}}}},name:"States"},i={render:()=>e.jsx(t,{id:"button-badge",alignment:"rectangular",children:e.jsx(l,{id:"button-story-button",ariaLabel:"Button with external page icon and badge",leftIcon:c,children:"Button"})}),parameters:{docs:{liveEdit:{scope:{ExternalPage:c}}}},name:"Button"},o={render:()=>e.jsx(t,{id:"avatar-badge",alignment:"circular",children:e.jsx(A,{id:"badge-avatar",size:"large",src:g,type:"img"})}),parameters:{docs:{liveEdit:{scope:{person:g}}}},name:"Avatar"},s={render:()=>e.jsxs(d,{direction:"column",gap:"medium",align:"start",children:[e.jsx(t,{id:"inline-badge-1",alignment:"outside",children:e.jsx(m,{id:"inline-link-1",text:"Read more"})}),e.jsx(t,{id:"inline-badge-2",alignment:"outside",children:e.jsx(m,{id:"inline-link-2",text:"What's new",iconPosition:"start",icon:a})}),e.jsx(t,{id:"inline-badge-3",alignment:"outside",children:e.jsx(m,{id:"inline-link-3",text:"Learn more",iconPosition:"end",icon:c})})]}),parameters:{docs:{liveEdit:{scope:{WhatsNew:a,ExternalPage:c}}}},name:"Inline elements"};var p,b,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var E,W,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(W=o.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var y,L,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(I=(L=s.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const O=["Overview","States","ButtonStory","AvatarStory","InlineElements"],K=Object.freeze(Object.defineProperty({__proto__:null,AvatarStory:o,ButtonStory:i,InlineElements:s,Overview:n,States:r,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{o as A,K as B,s as I,n as O,r as S,i as a};
