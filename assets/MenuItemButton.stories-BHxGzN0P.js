import{R as e}from"./index-Hemj67b4.js";import{M as n}from"./MenuItemButton-Bwxmxulz.js";import{M as t}from"./useMenuItemKeyboardEvents-BQybGziJ.js";import{r as g}from"./createComponentTemplate-Y0VTmW_y.js";import{a as i}from"./Invite-CWwo6O26.js";import{c as E}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const m=E({component:n,iconPropNamesArray:["leftIcon","rightIcon"]}),f=g(n),T={title:"Components/Menu/MenuItemButton",component:n,argTypes:m.argTypes,decorators:m.decorators},r={render:f.bind({}),name:"Overview",args:{children:"Menu item children"}},a={render:()=>[e.createElement(t,{key:"Primary"},e.createElement(n,{kind:"primary"},"Primary")),e.createElement(t,{key:"Secondary"},e.createElement(n,{kind:"secondary"},"Secondary")),e.createElement(t,{key:"Tertiary"},e.createElement(n,{kind:"tertiary"},"Tertiary"))],name:"States"},o={render:()=>[e.createElement(t,{key:"disabled-Primary"},e.createElement(n,{kind:"primary",disabled:!0,disableReason:"Disabled reason"},"Primary")),e.createElement(t,{key:"disabled-Secondary"},e.createElement(n,{kind:"secondary",disabled:!0,disableReason:"Disabled reason"},"Secondary")),e.createElement(t,{key:"disabled-Tertiary"},e.createElement(n,{kind:"tertiary",disabled:!0,disableReason:"Disabled reason"},"Tertiary"))],name:"Disabled"},s={render:()=>[e.createElement(t,{key:"left"},e.createElement(n,{leftIcon:i},"Left icon")),e.createElement(t,{key:"right"},e.createElement(n,{rightIcon:i},"Right icon"))],name:"Icons"};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: menuItemButtonTemplate.bind({}),
  name: "Overview",
  args: {
    children: "Menu item children"
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,y,M;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => [<Menu key="Primary">
      <MenuItemButton kind="primary">Primary</MenuItemButton>
    </Menu>, <Menu key="Secondary">
      <MenuItemButton kind="secondary">Secondary</MenuItemButton>
    </Menu>, <Menu key="Tertiary">
      <MenuItemButton kind="tertiary">Tertiary</MenuItemButton>
    </Menu>],
  name: "States"
}`,...(M=(y=a.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var p,I,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var k,S,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => [<Menu key="left">
      <MenuItemButton leftIcon={Invite}>Left icon</MenuItemButton>
    </Menu>, <Menu key="right">
      <MenuItemButton rightIcon={Invite}>Right icon</MenuItemButton>
    </Menu>],
  name: "Icons"
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const D=["Overview","States","Disabled","Icons"],w=Object.freeze(Object.defineProperty({__proto__:null,Disabled:o,Icons:s,Overview:r,States:a,__namedExportsOrder:D,default:T},Symbol.toStringTag,{value:"Module"}));export{o as D,s as I,w as M,r as O,a as S};
