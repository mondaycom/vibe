import{R as e}from"./index-Hemj67b4.js";import{B as t}from"./Badge-DPfqFnxX.js";import{L as d}from"./Link-s0y4jlGK.js";import{B as m}from"./Button-DEM-Hn8V.js";import{F as c}from"./Flex-DIvs4XZj.js";import{A as b}from"./Avatar-DumOSK4_.js";import{r as N}from"./createComponentTemplate-Y0VTmW_y.js";import{l as a}from"./index-BA_MN9l1.js";import{c as l}from"./Workspace-BIJf5qCK.js";import{c as L}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const p=""+new URL("person-JrBmQF4W.png",import.meta.url).href,g=L({component:t,ignoreControlsPropNamesArray:["children"],actionPropsArray:["onMouseDown"]}),O=N(t),_={title:"Components/Badge",component:t,argTypes:g.argTypes,decorators:g.decorators},r={render:O.bind({}),name:"Overview",args:{children:e.createElement(m,{leftIcon:a},"What's new")},parameters:{docs:{liveEdit:{isEnabled:!1}}}},n={render:()=>e.createElement(c,{gap:"large",justify:"start",align:"start"},e.createElement(c,{direction:"column",gap:"medium",align:"start"},"Indicator",e.createElement(t,null,e.createElement(m,{leftIcon:a},"What's new"))),e.createElement(c,{direction:"column",gap:"medium",align:"start"},"Counter",e.createElement(t,{type:"counter",count:100,maxDigits:2},e.createElement(m,{leftIcon:a},"What's new")))),parameters:{docs:{liveEdit:{scope:{WhatsNew:a}}}},name:"States"},o={render:()=>e.createElement(t,{alignment:"rectangular"},e.createElement(m,{leftIcon:l},"Button")),parameters:{docs:{liveEdit:{scope:{ExternalPage:l}}}},name:"Button"},s={render:()=>e.createElement(t,{alignment:"circular"},e.createElement(b,{size:"large",src:p,type:"img"})),parameters:{docs:{liveEdit:{scope:{person:p}}}},name:"Avatar"},i={render:()=>e.createElement(c,{direction:"column",gap:"medium",align:"start"},e.createElement(t,{alignment:"outside"},e.createElement(d,{text:"Read more"})),e.createElement(t,{alignment:"outside"},e.createElement(d,{text:"What's new",iconPosition:"start",icon:a})),e.createElement(t,{alignment:"outside"},e.createElement(d,{text:"Learn more",iconPosition:"end",icon:l}))),parameters:{docs:{liveEdit:{scope:{WhatsNew:a,ExternalPage:l}}}},name:"Inline elements"};var u,E,B;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: badgeTemplate.bind({}),
  name: "Overview",
  args: {
    children: <Button leftIcon={WhatsNew}>{"What's new"}</Button>
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(B=(E=r.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var f,v,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Flex gap="large" justify="start" align="start">
      <Flex direction="column" gap="medium" align="start">
        Indicator
        <Badge>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
        </Badge>
      </Flex>
      <Flex direction="column" gap="medium" align="start">
        Counter
        <Badge type="counter" count={100} maxDigits={2}>
          <Button leftIcon={WhatsNew}>{"What's new"}</Button>
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
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,h,S;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Badge alignment="rectangular">
      <Button leftIcon={ExternalPage}>Button</Button>
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
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,W,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Badge alignment="circular">
      <Avatar size="large" src={person} type="img" />
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
}`,...(I=(W=s.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var P,F,A;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" align="start">
      <Badge alignment="outside">
        <Link text="Read more" />
      </Badge>
      <Badge alignment="outside">
        <Link text="What's new" iconPosition="start" icon={WhatsNew} />
      </Badge>
      <Badge alignment="outside">
        <Link text="Learn more" iconPosition="end" icon={ExternalPage} />
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
}`,...(A=(F=i.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};const R=["Overview","States","ButtonStory","AvatarStory","InlineElements"],q=Object.freeze(Object.defineProperty({__proto__:null,AvatarStory:s,ButtonStory:o,InlineElements:i,Overview:r,States:n,__namedExportsOrder:R,default:_},Symbol.toStringTag,{value:"Module"}));export{s as A,q as B,i as I,r as O,n as S,o as a,p};
