import{R as e}from"./index-Hemj67b4.js";import{c as d}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{M as r}from"./MenuTitle-DkIza1QG.js";import{M as a}from"./useMenuItemKeyboardEvents-Cw7yAwIM.js";import{F as I}from"./Flex-pz2uwxlA.js";import{M as t}from"./MenuItem-DIL5X-F6.js";import{D as i}from"./DialogContentContainer-BmCeWtAc.js";import{r as C}from"./createComponentTemplate-Y0VTmW_y.js";const m=d({component:r}),g={title:"Components/Menu/MenuTitle",component:r,argTypes:m.argTypes,decorators:m.decorators},E=C(r),n={render:E.bind({}),name:"Overview",args:{caption:"Menu title"}},o={render:()=>e.createElement(I,{gap:80},e.createElement(i,null,e.createElement(a,null,e.createElement(r,{caption:"Left menu title",captionPosition:"top"}),e.createElement(t,{title:"Item 1"}),e.createElement(t,{title:"Item 2"}),e.createElement(t,{title:"Item 3"}))),e.createElement(i,null,e.createElement(a,null,e.createElement(r,{caption:"Center menu title",captionPosition:"center"}),e.createElement(t,{title:"Item 1"}),e.createElement(t,{title:"Item 2"}),e.createElement(t,{title:"Item 3"})))),name:"Caption placements"};var l,c,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: menuTitleTemplate.bind({}),
  name: "Overview",
  args: {
    caption: "Menu title"
  }
}`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var p,u,M;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(M=(u=o.parameters)==null?void 0:u.docs)==null?void 0:M.source}}};const f=["Overview","CaptionPlacements"],x=Object.freeze(Object.defineProperty({__proto__:null,CaptionPlacements:o,Overview:n,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{o as C,x as M,n as O};
