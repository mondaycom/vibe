import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{D as a}from"./useGridKeyboardNavigationContext.stories.helpers-B22UtHug.js";import{M as n}from"./MenuGridItem-DxU986Vu.js";import{l as f,e as u}from"./Settings-WHGZN_3r.js";import{t as C,b as y,r as G,a as T}from"./Invite-BJsiPZ1j.js";import{c as O}from"./createStoryMetaSettingsDecorator-DIqYrwas.js";import{M as m}from"./useMenuItemKeyboardEvents-Dqo1H_6y.js";import{M as t}from"./MenuItem-D3RtXc4Z.js";import{M as i}from"./MenuTitle-Ci83IJyL.js";import{D as j}from"./DialogContentContainer-DusAltnv.js";const d=O({component:n}),w={title:"Components/Menu/MenuGridItem",component:n,argTypes:d.argTypes,decorators:d.decorators},D=v=>e.jsxs(m,{children:[e.jsx(t,{title:"This is a menu button"}),e.jsx(i,{caption:"Try keyboard navigation :)"}),e.jsx(n,{...v,children:e.jsx(a,{itemsCount:8,numberOfItemsInLine:3,withoutBorder:!0})})]}),r={render:D.bind({}),name:"Overview"},s={render:()=>e.jsx(j,{children:e.jsxs(m,{children:[e.jsx(i,{caption:"This grid has disabled items"}),e.jsx(n,{children:e.jsx(a,{itemsCount:4,numberOfItemsInLine:2,disabledIndexes:[2],withoutBorder:!0})}),e.jsx(t,{title:"I'm a regular item"}),e.jsx(i,{caption:"The grid below is disabled entirely"}),e.jsx(n,{disabled:!0,children:e.jsx(a,{itemsCount:4,numberOfItemsInLine:2,withoutBorder:!0})})]})}),name:"With disabled states"},o={render:()=>e.jsx("div",{className:"storybook-menu-grid-item-long-story",children:e.jsx(j,{children:e.jsxs(m,{children:[e.jsx(t,{title:"Menu item",icon:f}),e.jsx(i,{caption:"Top level grid item"}),e.jsx(t,{title:"Hover me to see the sub menu",icon:C,children:e.jsxs(m,{children:[e.jsx(t,{icon:y,title:"More info"}),e.jsx(i,{caption:"1st level grid item"}),e.jsx(n,{children:e.jsx(a,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(t,{icon:G,title:"Hover me to see the sub menu",children:e.jsxs(m,{children:[e.jsx(i,{caption:"2nd level grid item"}),e.jsx(n,{children:e.jsx(a,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(t,{icon:T,title:"Another sub sub item"}),e.jsx(t,{icon:u,title:"More sub sub items"})]})})]})}),e.jsx(t,{title:"Another item",icon:u})]})})}),name:"Inside sub-menus"};var l,c,b;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: menuGridItemTemplate.bind({}),
  name: "Overview"
}`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var M,I,p;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <DialogContentContainer>
      <Menu>
        <MenuTitle caption="This grid has disabled items" />
        <MenuGridItem>
          <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} disabledIndexes={[2]} withoutBorder />
        </MenuGridItem>
        <MenuItem title="I'm a regular item" />
        <MenuTitle caption="The grid below is disabled entirely" />
        <MenuGridItem disabled>
          <DummyNavigableGrid itemsCount={4} numberOfItemsInLine={2} withoutBorder />
        </MenuGridItem>
      </Menu>
    </DialogContentContainer>,
  name: "With disabled states"
}`,...(p=(I=s.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};var h,x,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="storybook-menu-grid-item-long-story">
      <DialogContentContainer>
        <Menu>
          <MenuItem title="Menu item" icon={Favorite} />
          <MenuTitle caption="Top level grid item" />
          <MenuItem title="Hover me to see the sub menu" icon={Activity}>
            <Menu>
              <MenuItem icon={Feedback} title="More info" />
              <MenuTitle caption="1st level grid item" />
              <MenuGridItem>
                <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />
              </MenuGridItem>
              <MenuItem icon={Code} title="Hover me to see the sub menu">
                <Menu>
                  <MenuTitle caption="2nd level grid item" />
                  <MenuGridItem>
                    <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />
                  </MenuGridItem>
                  <MenuItem icon={Invite} title="Another sub sub item" />
                  <MenuItem icon={Settings} title="More sub sub items" />
                </Menu>
              </MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem title="Another item" icon={Settings} />
        </Menu>
      </DialogContentContainer>
    </div>,
  name: "Inside sub-menus"
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const S=["Overview","WithDisabledStates","InsideSubMenus"],$=Object.freeze(Object.defineProperty({__proto__:null,InsideSubMenus:o,Overview:r,WithDisabledStates:s,__namedExportsOrder:S,default:w},Symbol.toStringTag,{value:"Module"}));export{o as I,$ as M,r as O,s as W};
