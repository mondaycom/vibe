import{R as e}from"./index-Hemj67b4.js";import{D as v}from"./useGridKeyboardNavigationContext.stories.helpers-DvHcj3g3.js";import{userEvent as b,within as B}from"./index-JSOB3pIc.js";import{r as re}from"./interactions-helper-Bq4hWQWq.js";import{i as me,a as T,w as N,c as ae,e as p,p as o,k as h,j as oe}from"./interactions-utils-BDSgavBb.js";import{N as u}from"./test-ids-utils-9ISiqDto.js";import{M as t}from"./MenuItem-DLCA1wC-.js";import{M as s}from"./MenuTitle-tfeCeSy-.js";import{M as w}from"./MenuDivider-B3_uBgz_.js";import{a as f,t as X,e as _,l as J}from"./Settings-DOfpeGYp.js";import{t as Q}from"./Info-BB4o2YOm.js";import{t as U,b as Y,r as Z,a as ee,l as ue}from"./Invite-CWwo6O26.js";import{M as C}from"./MenuGridItem-DDtig_x_.js";import{M as n}from"./useMenuItemKeyboardEvents-BQybGziJ.js";import{F as g}from"./Flex-DIvs4XZj.js";import{D as l}from"./DialogContentContainer-CjdfO6CD.js";const i={TOP_MENU_SUB_MENU_ITEM:"With Sub menu",SUB_MENU_ITEM:"Sub Sub menu",SUB_SUB_MENU_ITEM:"Sub sub item",TOP_MENU_NON_SUB_MENU_ITEM:"Another item"},a="[aria-hidden]",le=async r=>{const m=te(r),D=T(m,i.TOP_MENU_SUB_MENU_ITEM,{ignore:a});await b.hover(D);const ne=T(m,i.SUB_MENU_ITEM,{ignore:a});await b.hover(ne);const ie=await N(()=>B(m).findByText(i.SUB_SUB_MENU_ITEM,{ignore:a}));await ae(ie),p(document.activeElement).toHaveTextContent(i.SUB_SUB_MENU_ITEM),await b.hover(T(m,i.TOP_MENU_NON_SUB_MENU_ITEM,{ignore:a})),p(r.queryByText(i.SUB_MENU_ITEM,{ignore:a})).not.toBeInTheDocument(),p(r.queryByText(i.SUB_SUB_MENU_ITEM,{ignore:a})).not.toBeInTheDocument()},se=async r=>{const m=te(r),D=T(m,i.TOP_MENU_SUB_MENU_ITEM,{ignore:a});await b.click(D),await o(u.DOWN_ARROW),await o(u.DOWN_ARROW),await o(u.RIGHT_ARROW),await N(()=>B(m).findByText(new RegExp(`^${i.SUB_MENU_ITEM}$`),{ignore:a})),h(i.SUB_MENU_ITEM),await o(u.DOWN_ARROW),await o(u.DOWN_ARROW),await o(u.RIGHT_ARROW),await N(()=>B(m).findByText(new RegExp(`^${i.SUB_SUB_MENU_ITEM}$`),{ignore:a})),h(i.SUB_SUB_MENU_ITEM),await o(u.LEFT_ARROW),p(r.queryByText(m,i.SUB_SUB_MENU_ITEM,{ignore:a})).not.toBeInTheDocument(),h(i.SUB_MENU_ITEM),await b.keyboard("{escape}"),p(r.queryByText(m,i.SUB_MENU_ITEM)).not.toBeInTheDocument(),h(i.TOP_MENU_SUB_MENU_ITEM)},ce=me({tests:[le,se],afterEach:async()=>{await re()}});function te(r){return oe(r,"menu")}const Me={title:"Components/Menu/Menu",component:n},Ee=r=>e.createElement(n,{...r},e.createElement(t,{title:"Menu item 1"}),e.createElement(t,{title:"Menu item 2",disabled:!0}),e.createElement(t,{title:"Menu item 3"})),c={render:Ee.bind({}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},M={render:()=>[e.createElement(g,{gap:"medium"},e.createElement(l,{key:"small"},e.createElement(n,{size:n.sizes.SMALL},e.createElement(s,{caption:"Small menu"}),e.createElement(w,null),e.createElement(t,{title:"Menu item 1"}),e.createElement(t,{title:"Menu item 2",disabled:!0}),e.createElement(t,{title:"Menu item 3"}))),e.createElement(l,{key:"md"},e.createElement(n,{size:n.sizes.MEDIUM},e.createElement(s,{caption:"Medium menu"}),e.createElement(w,null),e.createElement(t,{title:"Menu item 1"}),e.createElement(t,{title:"Menu item 2",disabled:!0}),e.createElement(t,{title:"Menu item 3"}))),e.createElement(l,{key:"lg"},e.createElement(n,{size:n.sizes.LARGE},e.createElement(s,{caption:"Large menu"}),e.createElement(w,null),e.createElement(t,{title:"Menu item 1"}),e.createElement(t,{title:"Menu item 2",disabled:!0}),e.createElement(t,{title:"Menu item 3"}))))],name:"Sizes",args:{size:n.sizes.SMALL}},E={render:()=>e.createElement(g,null,e.createElement(l,null,e.createElement(n,null,e.createElement(t,{icon:f,title:"Send"}),e.createElement(t,{icon:X,title:"Delete",disabled:!0}),e.createElement(t,{icon:Q,title:"More info"})))),name:"Menu with icons"},d={render:()=>e.createElement(g,null,e.createElement(l,null,e.createElement(n,null,e.createElement(t,{title:"Menu item without sub menu",icon:U}),e.createElement(t,{title:"With Sub menu",icon:U},e.createElement(n,null,e.createElement(t,{icon:f,title:"Send"}),e.createElement(t,{icon:X,title:"Delete",disabled:!0}),e.createElement(t,{icon:Q,title:"More info"}))),e.createElement(t,{title:"Another item",icon:_})))),name:"Menu with sub menu"},I={render:()=>e.createElement(g,{align:"start",style:{height:"500px"}},e.createElement(l,null,e.createElement(n,null,e.createElement(t,{title:"Menu item",icon:J}),e.createElement(s,{caption:"Top level grid item"}),e.createElement(t,{title:"With Sub menu",icon:U},e.createElement(n,null,e.createElement(t,{icon:Y,title:"More info"}),e.createElement(s,{caption:"1st level grid item"}),e.createElement(C,null,e.createElement(v,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})),e.createElement(t,{icon:Z,title:"With Sub menu"},e.createElement(n,null,e.createElement(s,{caption:"2nd level grid item"}),e.createElement(C,null,e.createElement(v,{itemsCount:6,numberOfItemsInLine:3,withoutBorder:!0})),e.createElement(t,{icon:ee,title:"Another sub sub item"}),e.createElement(t,{icon:_,title:"More sub sub items"}))))),e.createElement(t,{title:"Another item",icon:_})))),name:"Menu with grid items and sub menu"},S={render:()=>e.createElement(g,null,e.createElement(l,null,e.createElement(n,null,e.createElement(t,{title:"Menu item",icon:J}),e.createElement(t,{title:"With Sub menu",icon:U},e.createElement(n,null,e.createElement(t,{icon:ue,title:"Send"}),e.createElement(t,{icon:Z,title:"Sub Sub menu"},e.createElement(n,null,e.createElement(t,{icon:f,title:"Sub sub item"}),e.createElement(t,{icon:ee,title:"Another sub sub item"}),e.createElement(t,{icon:_,title:"More sub sub items"}))),e.createElement(t,{icon:Y,title:"More info"}))),e.createElement(t,{title:"Another item",icon:_})))),name:"Menu with 2-depth sub menu",play:ce};var y,O,W;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var A,x,R;M.parameters={...M.parameters,docs:{...(A=M.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(x=M.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var z,F,L;E.parameters={...E.parameters,docs:{...(z=E.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(F=E.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var G,k,$;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...($=(k=d.parameters)==null?void 0:k.docs)==null?void 0:$.source}}};var P,H,j;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(j=(H=I.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var q,K,V;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(K=S.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const de=["Overview","Sizes","MenuWithIcons","MenuWithSubMenu","MenuWithGridItemsAndSubMenu","MenuWith2DepthSubMenu"],ye=Object.freeze(Object.defineProperty({__proto__:null,MenuWith2DepthSubMenu:S,MenuWithGridItemsAndSubMenu:I,MenuWithIcons:E,MenuWithSubMenu:d,Overview:c,Sizes:M,__namedExportsOrder:de,default:Me},Symbol.toStringTag,{value:"Module"}));export{ye as M,c as O,M as S,E as a,d as b,S as c,I as d};
