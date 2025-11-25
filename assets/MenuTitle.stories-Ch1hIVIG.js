import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as d}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as x}from"./createComponentTemplate-B08h-OOW.js";import{M as r}from"./MenuTitle-BIam9mKg.js";import{F as I}from"./Flex-Bimzf4jb.js";import{D as i}from"./DialogContentContainer-BBTL4acN.js";import{M as a}from"./useMenuItemKeyboardEvents-DsZYQISP.js";import{M as t}from"./MenuItem-BdqWNiw_.js";const s=d({component:r}),C={title:"Components/Menu/MenuTitle",component:r,argTypes:s.argTypes,decorators:s.decorators},g=x(r),n={render:g.bind({}),name:"Overview",args:{caption:"Menu title"}},o={render:()=>e.jsxs(I,{gap:80,children:[e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(r,{caption:"Left menu title",captionPosition:"top"}),e.jsx(t,{title:"Item 1"}),e.jsx(t,{title:"Item 2"}),e.jsx(t,{title:"Item 3"})]})}),e.jsx(i,{children:e.jsxs(a,{children:[e.jsx(r,{caption:"Center menu title",captionPosition:"center"}),e.jsx(t,{title:"Item 1"}),e.jsx(t,{title:"Item 2"}),e.jsx(t,{title:"Item 3"})]})})]}),name:"Caption placements"};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: menuTitleTemplate.bind({}),
  name: "Overview",
  args: {
    caption: "Menu title"
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,M;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex gap={80}>
      <DialogContentContainer>
        <Menu>
          <MenuTitle caption="Left menu title" captionPosition="top" />
          <MenuItem title="Item 1" />
          <MenuItem title="Item 2" />
          <MenuItem title="Item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer>
        <Menu>
          <MenuTitle caption="Center menu title" captionPosition="center" />
          <MenuItem title="Item 1" />
          <MenuItem title="Item 2" />
          <MenuItem title="Item 3" />
        </Menu>
      </DialogContentContainer>
    </Flex>,
  name: "Caption placements"
}`,...(M=(u=o.parameters)==null?void 0:u.docs)==null?void 0:M.source}}};const j=["Overview","CaptionPlacements"],b=Object.freeze(Object.defineProperty({__proto__:null,CaptionPlacements:o,Overview:n,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{o as C,b as M,n as O};
