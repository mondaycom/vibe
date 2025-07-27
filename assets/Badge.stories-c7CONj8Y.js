import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{B as t}from"./Badge-CzVS5Kb_.js";import{L as l}from"./Link-BU7s9Y2d.js";import{B as d}from"./Button-CVjt-pk_.js";import{F as c}from"./Flex-2Q04fxOc.js";import{A}from"./Avatar-86at8YMn.js";import{r as b}from"./createComponentTemplate-Y0VTmW_y.js";import{l as r}from"./index-BA_MN9l1.js";import{c as m}from"./Workspace-BIJf5qCK.js";import{c as N}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const p=""+new URL("person-JrBmQF4W.png",import.meta.url).href,g=N({component:t,ignoreControlsPropNamesArray:["children"],actionPropsArray:["onMouseDown"]}),L=b(t),O={title:"Components/Badge",component:t,argTypes:g.argTypes,decorators:g.decorators},a={render:L.bind({}),name:"Overview",args:{children:e.jsx(d,{leftIcon:r,children:"What's new"})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},n={render:()=>e.jsxs(c,{gap:"large",justify:"start",align:"start",children:[e.jsxs(c,{direction:"column",gap:"medium",align:"start",children:["Indicator",e.jsx(t,{children:e.jsx(d,{leftIcon:r,children:"What's new"})})]}),e.jsxs(c,{direction:"column",gap:"medium",align:"start",children:["Counter",e.jsx(t,{type:"counter",count:100,maxDigits:2,children:e.jsx(d,{leftIcon:r,children:"What's new"})})]})]}),parameters:{docs:{liveEdit:{scope:{WhatsNew:r}}}},name:"States"},s={render:()=>e.jsx(t,{alignment:"rectangular",children:e.jsx(d,{leftIcon:m,children:"Button"})}),parameters:{docs:{liveEdit:{scope:{ExternalPage:m}}}},name:"Button"},o={render:()=>e.jsx(t,{alignment:"circular",children:e.jsx(A,{size:"large",src:p,type:"img"})}),parameters:{docs:{liveEdit:{scope:{person:p}}}},name:"Avatar"},i={render:()=>e.jsxs(c,{direction:"column",gap:"medium",align:"start",children:[e.jsx(t,{alignment:"outside",children:e.jsx(l,{text:"Read more"})}),e.jsx(t,{alignment:"outside",children:e.jsx(l,{text:"What's new",iconPosition:"start",icon:r})}),e.jsx(t,{alignment:"outside",children:e.jsx(l,{text:"Learn more",iconPosition:"end",icon:m})})]}),parameters:{docs:{liveEdit:{scope:{WhatsNew:r,ExternalPage:m}}}},name:"Inline elements"};var u,x,B;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var h,f,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var v,w,E;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var S,y,W;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(W=(y=o.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var I,P,F;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(P=i.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const _=["Overview","States","ButtonStory","AvatarStory","InlineElements"],q=Object.freeze(Object.defineProperty({__proto__:null,AvatarStory:o,ButtonStory:s,InlineElements:i,Overview:a,States:n,__namedExportsOrder:_,default:O},Symbol.toStringTag,{value:"Module"}));export{o as A,q as B,i as I,a as O,n as S,s as a,p};
