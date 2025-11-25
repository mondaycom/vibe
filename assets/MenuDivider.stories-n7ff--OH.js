import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{M as s}from"./MenuDivider-UYB_gb1E.js";import{r as h}from"./createComponentTemplate-B08h-OOW.js";import{M as d}from"./useMenuItemKeyboardEvents-DsZYQISP.js";import{M as r}from"./MenuItem-BdqWNiw_.js";const j={title:"Components/Menu/MenuDivider",component:s},x=h(s),n={render:x.bind({}),name:"Overview"},t={render:()=>e.jsx("div",{style:{width:200},children:e.jsxs(d,{children:[e.jsx(r,{title:"Menu item 1"}),e.jsx(s,{}),e.jsx(r,{title:"Menu item 2"})]})}),name:"Menu with divider"},i={render:()=>e.jsx("div",{style:{width:200,height:90},children:e.jsx(d,{children:e.jsx(r,{title:"Item with sub menu",children:e.jsxs(d,{children:[e.jsx(r,{title:"Item 1"}),e.jsx(s,{}),e.jsx(r,{title:"Item 2"})]})})})}),name:"Sub menu with divider"};var m,u,o;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: menuDividerTemplate.bind({}),
  name: "Overview"
}`,...(o=(u=n.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var a,M,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(M=t.parameters)==null?void 0:M.docs)==null?void 0:c.source}}};var l,v,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(v=i.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};const w=["Overview","MenuWithDivider","SubMenuWithDivider"],O=Object.freeze(Object.defineProperty({__proto__:null,MenuWithDivider:t,Overview:n,SubMenuWithDivider:i,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{O as M,n as O,i as S,t as a};
