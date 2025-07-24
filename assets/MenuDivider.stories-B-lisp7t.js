import{R as e}from"./index-Hemj67b4.js";import{M as m}from"./MenuDivider-B3_uBgz_.js";import{M as a}from"./useMenuItemKeyboardEvents-BQybGziJ.js";import{M as i}from"./MenuItem-BUVVUzCQ.js";import{r as h}from"./createComponentTemplate-Y0VTmW_y.js";const w={title:"Components/Menu/MenuDivider",component:m},E=h(m),t={render:E.bind({}),name:"Overview"},n={render:()=>e.createElement("div",{style:{width:200}},e.createElement(a,null,e.createElement(i,{title:"Menu item 1"}),e.createElement(m,null),e.createElement(i,{title:"Menu item 2"}))),name:"Menu with divider"},r={render:()=>e.createElement("div",{style:{width:200,height:90}},e.createElement(a,null,e.createElement(i,{title:"Item with sub menu"},e.createElement(a,null,e.createElement(i,{title:"Item 1"}),e.createElement(m,null),e.createElement(i,{title:"Item 2"}))))),name:"Sub menu with divider"};var u,s,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: menuDividerTemplate.bind({}),
  name: "Overview"
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var o,l,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 200
  }}>
      <Menu>
        <MenuItem title="Menu item 1" />
        <MenuDivider />
        <MenuItem title="Menu item 2" />
      </Menu>
    </div>,
  name: "Menu with divider"
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var M,v,p;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 200,
    height: 90
  }}>
      <Menu>
        <MenuItem title="Item with sub menu">
          <Menu>
            <MenuItem title="Item 1" />
            <MenuDivider />
            <MenuItem title="Item 2" />
          </Menu>
        </MenuItem>
      </Menu>
    </div>,
  name: "Sub menu with divider"
}`,...(p=(v=r.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};const I=["Overview","MenuWithDivider","SubMenuWithDivider"],g=Object.freeze(Object.defineProperty({__proto__:null,MenuWithDivider:n,Overview:t,SubMenuWithDivider:r,__namedExportsOrder:I,default:w},Symbol.toStringTag,{value:"Module"}));export{g as M,t as O,r as S,n as a};
