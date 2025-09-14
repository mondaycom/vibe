import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{D as f}from"./useGridKeyboardNavigationContext.stories.helpers-BG1Rquzo.js";import{userEvent as S,within as D}from"./index-i7od9_os.js";import{r as oe}from"./interactions-helper-BLVzu_Hd.js";import{i as re,a as j,w,c as ue,e as I,p as u,k as E,j as ae}from"./interactions-utils-BiS5KEZv.js";import{N as a}from"./test-ids-utils-CSfXomCJ.js";import{M as n}from"./MenuItem-DbN6rgof.js";import{M as l}from"./MenuTitle-Dn3ub_Dg.js";import{M as U}from"./MenuDivider-XgXLauw3.js";import{a as N,t as J,e as b,l as Q}from"./Settings-WHGZN_3r.js";import{t as Y}from"./Info-jvFNh0HS.js";import{t as g,b as Z,r as ee,a as ne,l as me}from"./Invite-BJsiPZ1j.js";import{M as v}from"./MenuGridItem-C8ls64ic.js";import{M as t}from"./useMenuItemKeyboardEvents-fL9CsK7e.js";import{F as _}from"./Flex-D6jv3OvD.js";import{D as m}from"./DialogContentContainer-CyLYKep7.js";const i={TOP_MENU_SUB_MENU_ITEM:"With Sub menu",SUB_MENU_ITEM:"Sub Sub menu",SUB_SUB_MENU_ITEM:"Sub sub item",TOP_MENU_NON_SUB_MENU_ITEM:"Another item"},r="[aria-hidden]",le=async s=>{const o=te(s),T=j(o,i.TOP_MENU_SUB_MENU_ITEM,{ignore:r});await S.hover(T);const ie=j(o,i.SUB_MENU_ITEM,{ignore:r});await S.hover(ie);const se=await w(()=>D(o).findByText(i.SUB_SUB_MENU_ITEM,{ignore:r}));await ue(se),I(document.activeElement).toHaveTextContent(i.SUB_SUB_MENU_ITEM),await S.hover(j(o,i.TOP_MENU_NON_SUB_MENU_ITEM,{ignore:r})),I(s.queryByText(i.SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument(),I(s.queryByText(i.SUB_SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument()},Me=async s=>{const o=te(s),T=j(o,i.TOP_MENU_SUB_MENU_ITEM,{ignore:r});await S.click(T),await u(a.DOWN_ARROW),await u(a.DOWN_ARROW),await u(a.RIGHT_ARROW),await w(()=>D(o).findByText(new RegExp(`^${i.SUB_MENU_ITEM}$`),{ignore:r})),E(i.SUB_MENU_ITEM),await u(a.DOWN_ARROW),await u(a.DOWN_ARROW),await u(a.RIGHT_ARROW),await w(()=>D(o).findByText(new RegExp(`^${i.SUB_SUB_MENU_ITEM}$`),{ignore:r})),E(i.SUB_SUB_MENU_ITEM),await u(a.LEFT_ARROW),I(s.queryByText(o,i.SUB_SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument(),E(i.SUB_MENU_ITEM),await S.keyboard("{escape}"),I(s.queryByText(o,i.SUB_MENU_ITEM)).not.toBeInTheDocument(),E(i.TOP_MENU_SUB_MENU_ITEM)},y=re({tests:[le,Me],afterEach:async()=>{await oe()}});function te(s){return ae(s,"menu")}try{y.displayName="menuWithTwoDepthsSuite",y.__docgenInfo={description:"",displayName:"menuWithTwoDepthsSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const ce={title:"Components/Menu/Menu",component:t},de=s=>e.jsxs(t,{...s,children:[e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]}),M={render:de.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>[e.jsxs(_,{gap:"medium",children:[e.jsx(m,{children:e.jsxs(t,{size:t.sizes.SMALL,children:[e.jsx(l,{caption:"Small menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"small"),e.jsx(m,{children:e.jsxs(t,{size:t.sizes.MEDIUM,children:[e.jsx(l,{caption:"Medium menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"md"),e.jsx(m,{children:e.jsxs(t,{size:t.sizes.LARGE,children:[e.jsx(l,{caption:"Large menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"lg")]})],name:"Sizes",args:{size:t.sizes.SMALL}},d={render:()=>e.jsx(_,{children:e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(n,{icon:N,title:"Send"}),e.jsx(n,{icon:J,title:"Delete",disabled:!0}),e.jsx(n,{icon:Y,title:"More info"})]})})}),name:"Menu with icons"},x={render:()=>e.jsx(_,{children:e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(n,{title:"Menu item without sub menu",icon:g}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(t,{children:[e.jsx(n,{icon:N,title:"Send"}),e.jsx(n,{icon:J,title:"Delete",disabled:!0}),e.jsx(n,{icon:Y,title:"More info"})]})}),e.jsx(n,{title:"Another item",icon:b})]})})}),name:"Menu with sub menu"},h={render:()=>e.jsx(_,{align:"start",style:{height:"500px"},children:e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(n,{title:"Menu item",icon:Q}),e.jsx(l,{caption:"Top level grid item"}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(t,{children:[e.jsx(n,{icon:Z,title:"More info"}),e.jsx(l,{caption:"1st level grid item"}),e.jsx(v,{children:e.jsx(f,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(n,{icon:ee,title:"With Sub menu",children:e.jsxs(t,{children:[e.jsx(l,{caption:"2nd level grid item"}),e.jsx(v,{children:e.jsx(f,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(n,{icon:ne,title:"Another sub sub item"}),e.jsx(n,{icon:b,title:"More sub sub items"})]})})]})}),e.jsx(n,{title:"Another item",icon:b})]})})}),name:"Menu with grid items and sub menu"},p={render:()=>e.jsx(_,{children:e.jsx(m,{children:e.jsxs(t,{children:[e.jsx(n,{title:"Menu item",icon:Q}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(t,{children:[e.jsx(n,{icon:me,title:"Send"}),e.jsx(n,{icon:ee,title:"Sub Sub menu",children:e.jsxs(t,{children:[e.jsx(n,{icon:N,title:"Sub sub item"}),e.jsx(n,{icon:ne,title:"Another sub sub item"}),e.jsx(n,{icon:b,title:"More sub sub items"})]})}),e.jsx(n,{icon:Z,title:"More info"})]})}),e.jsx(n,{title:"Another item",icon:b})]})})}),name:"Menu with 2-depth sub menu",play:y};var B,C,O;M.parameters={...M.parameters,docs:{...(B=M.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: menuTemplate.bind({}),
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(O=(C=M.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var W,A,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => [<Flex gap="medium">
      <DialogContentContainer key="small">
        <Menu size={Menu.sizes.SMALL}>
          <MenuTitle caption="Small menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer key="md">
        <Menu size={Menu.sizes.MEDIUM}>
          <MenuTitle caption="Medium menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer key="lg">
        <Menu size={Menu.sizes.LARGE}>
          <MenuTitle caption="Large menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
    </Flex>],
  name: "Sizes",
  args: {
    size: Menu.sizes.SMALL
  }
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var z,F,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Menu>
          <MenuItem icon={Email} title="Send" />
          <MenuItem icon={Delete} title="Delete" disabled />
          <MenuItem icon={Info} title="More info" />
        </Menu>
      </DialogContentContainer>
    </Flex>,
  name: "Menu with icons"
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var G,k,$;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Menu>
          <MenuItem title="Menu item without sub menu" icon={Activity} />
          <MenuItem title="With Sub menu" icon={Activity}>
            <Menu>
              <MenuItem icon={Email} title="Send" />
              <MenuItem icon={Delete} title="Delete" disabled />
              <MenuItem icon={Info} title="More info" />
            </Menu>
          </MenuItem>
          <MenuItem title="Another item" icon={Settings} />
        </Menu>
      </DialogContentContainer>
    </Flex>,
  name: "Menu with sub menu"
}`,...($=(k=x.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var P,q,H;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex align="start" style={{
    height: "500px"
  }}>
      <DialogContentContainer>
        <Menu>
          <MenuItem title="Menu item" icon={Favorite} />
          <MenuTitle caption="Top level grid item" />
          <MenuItem title="With Sub menu" icon={Activity}>
            <Menu>
              <MenuItem icon={Feedback} title="More info" />
              <MenuTitle caption="1st level grid item" />
              <MenuGridItem>
                <DummyNavigableGrid itemsCount={6} numberOfItemsInLine={3} withoutBorder />
              </MenuGridItem>
              <MenuItem icon={Code} title="With Sub menu">
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
    </Flex>,
  name: "Menu with grid items and sub menu"
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var V,K,X;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Menu>
          <MenuItem title="Menu item" icon={Favorite} />
          <MenuItem title="With Sub menu" icon={Activity}>
            <Menu>
              <MenuItem icon={Emoji} title="Send" />
              <MenuItem icon={Code} title="Sub Sub menu">
                <Menu>
                  <MenuItem icon={Email} title="Sub sub item" />
                  <MenuItem icon={Invite} title="Another sub sub item" />
                  <MenuItem icon={Settings} title="More sub sub items" />
                </Menu>
              </MenuItem>
              <MenuItem icon={Feedback} title="More info" />
            </Menu>
          </MenuItem>
          <MenuItem title="Another item" icon={Settings} />
        </Menu>
      </DialogContentContainer>
    </Flex>,
  name: "Menu with 2-depth sub menu",
  play: menuWithTwoDepthsSuite
}`,...(X=(K=p.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const xe=["Overview","Sizes","MenuWithIcons","MenuWithSubMenu","MenuWithGridItemsAndSubMenu","MenuWith2DepthSubMenu"],ve=Object.freeze(Object.defineProperty({__proto__:null,MenuWith2DepthSubMenu:p,MenuWithGridItemsAndSubMenu:h,MenuWithIcons:d,MenuWithSubMenu:x,Overview:M,Sizes:c,__namedExportsOrder:xe,default:ce},Symbol.toStringTag,{value:"Module"}));export{ve as M,M as O,c as S,d as a,x as b,p as c,h as d};
