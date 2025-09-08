import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{D as N}from"./useGridKeyboardNavigationContext.stories.helpers-CiJXn4j2.js";import{userEvent as S,within as D}from"./index-i7od9_os.js";import{r as se}from"./interactions-helper-BLVzu_Hd.js";import{i as oe,a as _,w,c as re,e as b,p as u,k as j,j as ue}from"./interactions-utils-BZaOSk9V.js";import{N as m}from"./test-ids-utils-CSfXomCJ.js";import{M as n}from"./MenuItem-DwJI7TFd.js";import{M as l}from"./MenuTitle-CT3mYgGk.js";import{M as U}from"./MenuDivider-BgCTxEkg.js";import{a as B,t as X,e as p,l as J}from"./Settings-WHGZN_3r.js";import{t as Q}from"./Info-jvFNh0HS.js";import{t as g,b as Y,r as Z,a as ee,l as me}from"./Invite-BJsiPZ1j.js";import{M as f}from"./MenuGridItem-GRJ0qvYT.js";import{M as t}from"./useMenuItemKeyboardEvents-iEl71uYW.js";import{F as E}from"./Flex-D6oMFEZi.js";import{D as a}from"./DialogContentContainer-DR6uG0yB.js";const i={TOP_MENU_SUB_MENU_ITEM:"With Sub menu",SUB_MENU_ITEM:"Sub Sub menu",SUB_SUB_MENU_ITEM:"Sub sub item",TOP_MENU_NON_SUB_MENU_ITEM:"Another item"},r="[aria-hidden]",ae=async s=>{const o=ne(s),T=_(o,i.TOP_MENU_SUB_MENU_ITEM,{ignore:r});await S.hover(T);const te=_(o,i.SUB_MENU_ITEM,{ignore:r});await S.hover(te);const ie=await w(()=>D(o).findByText(i.SUB_SUB_MENU_ITEM,{ignore:r}));await re(ie),b(document.activeElement).toHaveTextContent(i.SUB_SUB_MENU_ITEM),await S.hover(_(o,i.TOP_MENU_NON_SUB_MENU_ITEM,{ignore:r})),b(s.queryByText(i.SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument(),b(s.queryByText(i.SUB_SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument()},le=async s=>{const o=ne(s),T=_(o,i.TOP_MENU_SUB_MENU_ITEM,{ignore:r});await S.click(T),await u(m.DOWN_ARROW),await u(m.DOWN_ARROW),await u(m.RIGHT_ARROW),await w(()=>D(o).findByText(new RegExp(`^${i.SUB_MENU_ITEM}$`),{ignore:r})),j(i.SUB_MENU_ITEM),await u(m.DOWN_ARROW),await u(m.DOWN_ARROW),await u(m.RIGHT_ARROW),await w(()=>D(o).findByText(new RegExp(`^${i.SUB_SUB_MENU_ITEM}$`),{ignore:r})),j(i.SUB_SUB_MENU_ITEM),await u(m.LEFT_ARROW),b(s.queryByText(o,i.SUB_SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument(),j(i.SUB_MENU_ITEM),await S.keyboard("{escape}"),b(s.queryByText(o,i.SUB_MENU_ITEM)).not.toBeInTheDocument(),j(i.TOP_MENU_SUB_MENU_ITEM)},Me=oe({tests:[ae,le],afterEach:async()=>{await se()}});function ne(s){return ue(s,"menu")}const ce={title:"Components/Menu/Menu",component:t},de=s=>e.jsxs(t,{...s,children:[e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]}),M={render:de.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>[e.jsxs(E,{gap:"medium",children:[e.jsx(a,{children:e.jsxs(t,{size:t.sizes.SMALL,children:[e.jsx(l,{caption:"Small menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"small"),e.jsx(a,{children:e.jsxs(t,{size:t.sizes.MEDIUM,children:[e.jsx(l,{caption:"Medium menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"md"),e.jsx(a,{children:e.jsxs(t,{size:t.sizes.LARGE,children:[e.jsx(l,{caption:"Large menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"lg")]})],name:"Sizes",args:{size:t.sizes.SMALL}},d={render:()=>e.jsx(E,{children:e.jsx(a,{children:e.jsxs(t,{children:[e.jsx(n,{icon:B,title:"Send"}),e.jsx(n,{icon:X,title:"Delete",disabled:!0}),e.jsx(n,{icon:Q,title:"More info"})]})})}),name:"Menu with icons"},x={render:()=>e.jsx(E,{children:e.jsx(a,{children:e.jsxs(t,{children:[e.jsx(n,{title:"Menu item without sub menu",icon:g}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(t,{children:[e.jsx(n,{icon:B,title:"Send"}),e.jsx(n,{icon:X,title:"Delete",disabled:!0}),e.jsx(n,{icon:Q,title:"More info"})]})}),e.jsx(n,{title:"Another item",icon:p})]})})}),name:"Menu with sub menu"},h={render:()=>e.jsx(E,{align:"start",style:{height:"500px"},children:e.jsx(a,{children:e.jsxs(t,{children:[e.jsx(n,{title:"Menu item",icon:J}),e.jsx(l,{caption:"Top level grid item"}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(t,{children:[e.jsx(n,{icon:Y,title:"More info"}),e.jsx(l,{caption:"1st level grid item"}),e.jsx(f,{children:e.jsx(N,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(n,{icon:Z,title:"With Sub menu",children:e.jsxs(t,{children:[e.jsx(l,{caption:"2nd level grid item"}),e.jsx(f,{children:e.jsx(N,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(n,{icon:ee,title:"Another sub sub item"}),e.jsx(n,{icon:p,title:"More sub sub items"})]})})]})}),e.jsx(n,{title:"Another item",icon:p})]})})}),name:"Menu with grid items and sub menu"},I={render:()=>e.jsx(E,{children:e.jsx(a,{children:e.jsxs(t,{children:[e.jsx(n,{title:"Menu item",icon:J}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(t,{children:[e.jsx(n,{icon:me,title:"Send"}),e.jsx(n,{icon:Z,title:"Sub Sub menu",children:e.jsxs(t,{children:[e.jsx(n,{icon:B,title:"Sub sub item"}),e.jsx(n,{icon:ee,title:"Another sub sub item"}),e.jsx(n,{icon:p,title:"More sub sub items"})]})}),e.jsx(n,{icon:Y,title:"More info"})]})}),e.jsx(n,{title:"Another item",icon:p})]})})}),name:"Menu with 2-depth sub menu",play:Me};var v,C,y;M.parameters={...M.parameters,docs:{...(v=M.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(C=M.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var O,W,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var R,z,F;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var L,G,$;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...($=(G=x.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var k,P,H;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(P=h.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};var q,K,V;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(K=I.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const xe=["Overview","Sizes","MenuWithIcons","MenuWithSubMenu","MenuWithGridItemsAndSubMenu","MenuWith2DepthSubMenu"],ve=Object.freeze(Object.defineProperty({__proto__:null,MenuWith2DepthSubMenu:I,MenuWithGridItemsAndSubMenu:h,MenuWithIcons:d,MenuWithSubMenu:x,Overview:M,Sizes:c,__namedExportsOrder:xe,default:ce},Symbol.toStringTag,{value:"Module"}));export{ve as M,M as O,c as S,d as a,x as b,I as c,h as d};
