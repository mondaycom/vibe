import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{M as n}from"./MenuItemButton-Bg1QjSYB.js";import{M as r}from"./useMenuItemKeyboardEvents-DpQOoFXq.js";import{r as j}from"./createComponentTemplate-Y0VTmW_y.js";import{a as i}from"./Invite-CWwo6O26.js";import{c as k}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const d=k({component:n,iconPropNamesArray:["leftIcon","rightIcon"]}),x=j(n),g={title:"Components/Menu/MenuItemButton",component:n,argTypes:d.argTypes,decorators:d.decorators},t={render:x.bind({}),name:"Overview",args:{children:"Menu item children"}},a={render:()=>[e.jsx(r,{children:e.jsx(n,{kind:"primary",children:"Primary"})},"Primary"),e.jsx(r,{children:e.jsx(n,{kind:"secondary",children:"Secondary"})},"Secondary"),e.jsx(r,{children:e.jsx(n,{kind:"tertiary",children:"Tertiary"})},"Tertiary")],name:"States"},s={render:()=>[e.jsx(r,{children:e.jsx(n,{kind:"primary",disabled:!0,disableReason:"Disabled reason",children:"Primary"})},"disabled-Primary"),e.jsx(r,{children:e.jsx(n,{kind:"secondary",disabled:!0,disableReason:"Disabled reason",children:"Secondary"})},"disabled-Secondary"),e.jsx(r,{children:e.jsx(n,{kind:"tertiary",disabled:!0,disableReason:"Disabled reason",children:"Tertiary"})},"disabled-Tertiary")],name:"Disabled"},o={render:()=>[e.jsx(r,{children:e.jsx(n,{leftIcon:i,children:"Left icon"})},"left"),e.jsx(r,{children:e.jsx(n,{rightIcon:i,children:"Right icon"})},"right")],name:"Icons"};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: menuItemButtonTemplate.bind({}),
  name: "Overview",
  args: {
    children: "Menu item children"
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,y,M;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => [<Menu key="Primary">
      <MenuItemButton kind="primary">Primary</MenuItemButton>
    </Menu>, <Menu key="Secondary">
      <MenuItemButton kind="secondary">Secondary</MenuItemButton>
    </Menu>, <Menu key="Tertiary">
      <MenuItemButton kind="tertiary">Tertiary</MenuItemButton>
    </Menu>],
  name: "States"
}`,...(M=(y=a.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var p,I,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => [<Menu key="disabled-Primary">
      <MenuItemButton kind="primary" disabled disableReason="Disabled reason">
        Primary
      </MenuItemButton>
    </Menu>, <Menu key="disabled-Secondary">
      <MenuItemButton kind="secondary" disabled disableReason="Disabled reason">
        Secondary
      </MenuItemButton>
    </Menu>, <Menu key="disabled-Tertiary">
      <MenuItemButton kind="tertiary" disabled disableReason="Disabled reason">
        Tertiary
      </MenuItemButton>
    </Menu>],
  name: "Disabled"
}`,...(b=(I=s.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var h,S,B;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => [<Menu key="left">
      <MenuItemButton leftIcon={Invite}>Left icon</MenuItemButton>
    </Menu>, <Menu key="right">
      <MenuItemButton rightIcon={Invite}>Right icon</MenuItemButton>
    </Menu>],
  name: "Icons"
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const f=["Overview","States","Disabled","Icons"],_=Object.freeze(Object.defineProperty({__proto__:null,Disabled:s,Icons:o,Overview:t,States:a,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{s as D,o as I,_ as M,t as O,a as S};
