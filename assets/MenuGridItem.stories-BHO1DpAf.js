import{R as e}from"./index-Hemj67b4.js";import{D as s}from"./useGridKeyboardNavigationContext.stories.helpers-DvHcj3g3.js";import{M as n}from"./MenuGridItem-DDtig_x_.js";import{l as C,e as u}from"./Settings-DOfpeGYp.js";import{t as y,b as G,r as T,a as O}from"./Invite-CWwo6O26.js";import{c as w}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{M as a}from"./useMenuItemKeyboardEvents-BQybGziJ.js";import{M as t}from"./MenuItem-BUVVUzCQ.js";import{M as r}from"./MenuTitle-CWznX3_Z.js";import{D as h}from"./DialogContentContainer-CjdfO6CD.js";const l=w({component:n}),D={title:"Components/Menu/MenuGridItem",component:n,argTypes:l.argTypes,decorators:l.decorators},S=f=>e.createElement(a,null,e.createElement(t,{title:"This is a menu button"}),e.createElement(r,{caption:"Try keyboard navigation :)"}),e.createElement(n,{...f},e.createElement(s,{itemsCount:8,numberOfItemsInLine:3,withoutBorder:!0}))),i={render:S.bind({}),name:"Overview"},m={render:()=>e.createElement(h,null,e.createElement(a,null,e.createElement(r,{caption:"This grid has disabled items"}),e.createElement(n,null,e.createElement(s,{itemsCount:4,numberOfItemsInLine:2,disabledIndexes:[2],withoutBorder:!0})),e.createElement(t,{title:"I'm a regular item"}),e.createElement(r,{caption:"The grid below is disabled entirely"}),e.createElement(n,{disabled:!0},e.createElement(s,{itemsCount:4,numberOfItemsInLine:2,withoutBorder:!0})))),name:"With disabled states"},o={render:()=>e.createElement("div",{className:"storybook-menu-grid-item-long-story"},e.createElement(h,null,e.createElement(a,null,e.createElement(t,{title:"Menu item",icon:C}),e.createElement(r,{caption:"Top level grid item"}),e.createElement(t,{title:"Hover me to see the sub menu",icon:y},e.createElement(a,null,e.createElement(t,{icon:G,title:"More info"}),e.createElement(r,{caption:"1st level grid item"}),e.createElement(n,null,e.createElement(s,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})),e.createElement(t,{icon:T,title:"Hover me to see the sub menu"},e.createElement(a,null,e.createElement(r,{caption:"2nd level grid item"}),e.createElement(n,null,e.createElement(s,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})),e.createElement(t,{icon:O,title:"Another sub sub item"}),e.createElement(t,{icon:u,title:"More sub sub items"}))))),e.createElement(t,{title:"Another item",icon:u})))),name:"Inside sub-menus"};var d,c,b;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: menuGridItemTemplate.bind({}),
  name: "Overview"
}`,...(b=(c=i.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var M,I,p;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(p=(I=m.parameters)==null?void 0:I.docs)==null?void 0:p.source}}};var g,E,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(E=o.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};const B=["Overview","WithDisabledStates","InsideSubMenus"],R=Object.freeze(Object.defineProperty({__proto__:null,InsideSubMenus:o,Overview:i,WithDisabledStates:m,__namedExportsOrder:B,default:D},Symbol.toStringTag,{value:"Module"}));export{o as I,R as M,i as O,m as W};
