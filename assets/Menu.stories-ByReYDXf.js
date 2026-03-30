import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{A as g,F as X,C as J,I as Q,E as oe}from"./Invite-0V4zx4R3.js";import{D as Y}from"./Delete-rsE7lq-b.js";import{E as B}from"./Email-BmMi5Ll_.js";import{S as p,F as Z}from"./Settings-Dllwc6G3.js";import{I as ee}from"./Info-LYrK74vc.js";import{D as v}from"./useGridKeyboardNavigationContext.stories.helpers-DM3I_8yt.js";import{userEvent as S,within as D}from"./index-i7od9_os.js";import{i as se,r as re,a as _,w,c as ue,e as b,p as u,k as E,j as me,N as m}from"./interactions-utils-CrzSbhpz.js";import{M as i}from"./useMenuItemKeyboardEvents-DJxhfpSP.js";import{M as n}from"./MenuItem-CxaLwcyB.js";import{F as j}from"./Flex-7H_pA1dJ.js";import{D as a}from"./DialogContentContainer-BenjnFfs.js";import{M as l}from"./MenuTitle-CRYdo6jI.js";import{M as U}from"./MenuDivider-C35QhXB-.js";import{M as N}from"./MenuGridItem-DPO8Oc1E.js";const t={TOP_MENU_SUB_MENU_ITEM:"With Sub menu",SUB_MENU_ITEM:"Sub Sub menu",SUB_SUB_MENU_ITEM:"Sub sub item",TOP_MENU_NON_SUB_MENU_ITEM:"Another item"},r="[aria-hidden]",ae=async o=>{const s=ne(o),T=_(s,t.TOP_MENU_SUB_MENU_ITEM,{ignore:r});await S.hover(T);const te=_(s,t.SUB_MENU_ITEM,{ignore:r});await S.hover(te);const ie=await w(()=>D(s).findByText(t.SUB_SUB_MENU_ITEM,{ignore:r}));await ue(ie),b(document.activeElement).toHaveTextContent(t.SUB_SUB_MENU_ITEM),await S.hover(_(s,t.TOP_MENU_NON_SUB_MENU_ITEM,{ignore:r})),b(o.queryByText(t.SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument(),b(o.queryByText(t.SUB_SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument()},le=async o=>{const s=ne(o),T=_(s,t.TOP_MENU_SUB_MENU_ITEM,{ignore:r});await S.click(T),await u(m.DOWN_ARROW),await u(m.DOWN_ARROW),await u(m.RIGHT_ARROW),await w(()=>D(s).findByText(new RegExp(`^${t.SUB_MENU_ITEM}$`),{ignore:r})),E(t.SUB_MENU_ITEM),await u(m.DOWN_ARROW),await u(m.DOWN_ARROW),await u(m.RIGHT_ARROW),await w(()=>D(s).findByText(new RegExp(`^${t.SUB_SUB_MENU_ITEM}$`),{ignore:r})),E(t.SUB_SUB_MENU_ITEM),await u(m.LEFT_ARROW),b(o.queryByText(s,t.SUB_SUB_MENU_ITEM,{ignore:r})).not.toBeInTheDocument(),E(t.SUB_MENU_ITEM),await S.keyboard("{escape}"),b(o.queryByText(s,t.SUB_MENU_ITEM)).not.toBeInTheDocument(),E(t.TOP_MENU_SUB_MENU_ITEM)},Me=se({tests:[ae,le],afterEach:async()=>{await re()}});function ne(o){return me(o,"menu")}const ce={title:"Components/Menu/Menu",component:i},de=o=>e.jsxs(i,{...o,children:[e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]}),M={render:de.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>[e.jsxs(j,{gap:"medium",children:[e.jsx(a,{children:e.jsxs(i,{size:"small",children:[e.jsx(l,{caption:"Small menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"small"),e.jsx(a,{children:e.jsxs(i,{size:"medium",children:[e.jsx(l,{caption:"Medium menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"md"),e.jsx(a,{children:e.jsxs(i,{size:"large",children:[e.jsx(l,{caption:"Large menu"}),e.jsx(U,{}),e.jsx(n,{title:"Menu item 1"}),e.jsx(n,{title:"Menu item 2",disabled:!0}),e.jsx(n,{title:"Menu item 3"})]})},"lg")]})],name:"Sizes",args:{size:"small"}},d={render:()=>e.jsx(j,{children:e.jsx(a,{children:e.jsxs(i,{children:[e.jsx(n,{icon:B,title:"Send"}),e.jsx(n,{icon:Y,title:"Delete",disabled:!0}),e.jsx(n,{icon:ee,title:"More info"})]})})}),name:"Menu with icons"},x={render:()=>e.jsx(j,{children:e.jsx(a,{children:e.jsxs(i,{children:[e.jsx(n,{title:"Menu item without sub menu",icon:g}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(i,{children:[e.jsx(n,{icon:B,title:"Send"}),e.jsx(n,{icon:Y,title:"Delete",disabled:!0}),e.jsx(n,{icon:ee,title:"More info"})]})}),e.jsx(n,{title:"Another item",icon:p})]})})}),name:"Menu with sub menu"},h={render:()=>e.jsx(j,{align:"start",style:{height:"500px"},children:e.jsx(a,{children:e.jsxs(i,{children:[e.jsx(n,{title:"Menu item",icon:Z}),e.jsx(l,{caption:"Top level grid item"}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(i,{children:[e.jsx(n,{icon:X,title:"More info"}),e.jsx(l,{caption:"1st level grid item"}),e.jsx(N,{children:e.jsx(v,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(n,{icon:J,title:"With Sub menu",children:e.jsxs(i,{children:[e.jsx(l,{caption:"2nd level grid item"}),e.jsx(N,{children:e.jsx(v,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})}),e.jsx(n,{icon:Q,title:"Another sub sub item"}),e.jsx(n,{icon:p,title:"More sub sub items"})]})})]})}),e.jsx(n,{title:"Another item",icon:p})]})})}),name:"Menu with grid items and sub menu"},I={render:()=>e.jsx(j,{children:e.jsx(a,{children:e.jsxs(i,{children:[e.jsx(n,{title:"Menu item",icon:Z}),e.jsx(n,{title:"With Sub menu",icon:g,children:e.jsxs(i,{children:[e.jsx(n,{icon:oe,title:"Send"}),e.jsx(n,{icon:J,title:"Sub Sub menu",children:e.jsxs(i,{children:[e.jsx(n,{icon:B,title:"Sub sub item"}),e.jsx(n,{icon:Q,title:"Another sub sub item"}),e.jsx(n,{icon:p,title:"More sub sub items"})]})}),e.jsx(n,{icon:X,title:"More info"})]})}),e.jsx(n,{title:"Another item",icon:p})]})})}),name:"Menu with 2-depth sub menu",play:Me};var C,f,y;M.parameters={...M.parameters,docs:{...(C=M.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=(f=M.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var O,W,A;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => [<Flex gap="medium">
      <DialogContentContainer key="small">
        <Menu size="small">
          <MenuTitle caption="Small menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer key="md">
        <Menu size="medium">
          <MenuTitle caption="Medium menu" />
          <MenuDivider />
          <MenuItem title="Menu item 1" />
          <MenuItem title="Menu item 2" disabled />
          <MenuItem title="Menu item 3" />
        </Menu>
      </DialogContentContainer>
      <DialogContentContainer key="lg">
        <Menu size="large">
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
    size: "small"
  }
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,R,z;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,k,L;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(L=(k=x.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var P,H,q;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(H=h.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var $,K,V;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(K=I.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const xe=["Overview","Sizes","MenuWithIcons","MenuWithSubMenu","MenuWithGridItemsAndSubMenu","MenuWith2DepthSubMenu"],Ce=Object.freeze(Object.defineProperty({__proto__:null,MenuWith2DepthSubMenu:I,MenuWithGridItemsAndSubMenu:h,MenuWithIcons:d,MenuWithSubMenu:x,Overview:M,Sizes:c,__namedExportsOrder:xe,default:ce},Symbol.toStringTag,{value:"Module"}));export{Ce as M,M as O,c as S,d as a,x as b,I as c,h as d};
