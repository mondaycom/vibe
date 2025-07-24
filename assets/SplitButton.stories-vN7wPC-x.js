import{R as e}from"./index-Hemj67b4.js";import{S as o,a as n}from"./SplitButtonMenu-B8V6NT55.js";import{B as j}from"./Button-DEM-Hn8V.js";import{M as t}from"./MenuItem-DLCA1wC-.js";import{M as N}from"./useMenuItemKeyboardEvents-BQybGziJ.js";import{M as V}from"./MenuTitle-tfeCeSy-.js";import{h as F,j as _,i as d}from"./index-BA_MN9l1.js";import{f as L,e as R,h as i}from"./Workspace-BIJf5qCK.js";import{l as U}from"./Settings-DOfpeGYp.js";import{r}from"./Check-B_icfwyn.js";import{c as W}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const S=W({component:n,iconPropNamesArray:["leftIcon","rightIcon"],actionPropsArray:["secondaryDialogContent","onSecondaryDialogDidShow","onSecondaryDialogDidHide","onClick"]}),X={title:"Components/SplitButton",component:n,subcomponents:{SplitButtonMenu:o},argTypes:S.argTypes,decorators:S.decorators,parameters:{docs:{liveEdit:{scope:{Add:d,Announcement:i,Check:r,Download:_,Favorite:U,Moon:R,Sun:L,Upload:F}}}}},a={render:$=>e.createElement(n,{...$},"Button"),args:{secondaryDialogContent:()=>e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Primary"),e.createElement(n,{kind:"secondary",secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Secondary"),e.createElement(n,{kind:"tertiary",secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Tertiary"))},c={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{size:"small",secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Small"),e.createElement(n,{size:"medium",secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Medium"),e.createElement(n,{size:"large",secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Large"))},m={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{leftIcon:d,secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Left icon"),e.createElement(n,{rightIcon:d,secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:r,title:"Hey"}),e.createElement(t,{icon:i,title:"There"}))},"Right icon")),name:"Split button with icons"},s={render:()=>e.createElement(n,{secondaryDialogPosition:"bottom-start",secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{icon:_,title:"Import template"}),e.createElement(t,{icon:F,title:"Export template"}))},"Use template"),name:"Split button as the primary action"},u={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{kind:"secondary",secondaryDialogPosition:"bottom-start",secondaryDialogContent:e.createElement(o,{id:"split-menu"},e.createElement(t,{title:"Export to PDF"}),e.createElement(t,{title:"Export to DOCX"}),e.createElement(t,{title:"Export to Excel"}))},"Export to CSV"),e.createElement(j,null,"New item")),name:"Secondary split button"},p={render:()=>e.createElement(n,{secondaryDialogContent:e.createElement(N,{focusItemIndexOnMount:2,id:"menu",size:"medium"},e.createElement(V,{caption:"Look up, you might see",captionPosition:"top"}),e.createElement(t,{icon:L,iconType:"svg",title:"The sun"}),e.createElement(t,{icon:R,iconType:"svg",title:"The moon"}),e.createElement(t,{icon:U,iconType:"svg",title:"And the stars"}))},"Custom menu"),name:"Custom menu"};var y,E,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: SplitButtonProps) => <SplitButton {...args}>Button</SplitButton>,
  args: {
    secondaryDialogContent: () => <SplitButtonMenu id="split-menu">
        <MenuItem icon={Check} title="Hey" />
        <MenuItem icon={Announcement} title="There" />
      </SplitButtonMenu>
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(g=(E=a.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};var M,B,h;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Primary
      </SplitButton>
      <SplitButton kind="secondary" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Secondary
      </SplitButton>
      <SplitButton kind="tertiary" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Tertiary
      </SplitButton>
    </>
}`,...(h=(B=l.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var C,I,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton size="small" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Small
      </SplitButton>
      <SplitButton size="medium" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Medium
      </SplitButton>
      <SplitButton size="large" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Large
      </SplitButton>
    </>
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var T,f,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton leftIcon={Add} secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Left icon
      </SplitButton>
      <SplitButton rightIcon={Add} secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem icon={Check} title="Hey" />
            <MenuItem icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Right icon
      </SplitButton>
    </>,
  name: "Split button with icons"
}`,...(A=(f=m.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var k,H,b;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <SplitButton secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="split-menu">
          <MenuItem icon={Download} title="Import template" />
          <MenuItem icon={Upload} title="Export template" />
        </SplitButtonMenu>}>
      Use template
    </SplitButton>,
  name: "Split button as the primary action"
}`,...(b=(H=s.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var v,x,P;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton kind="secondary" secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="split-menu">
            <MenuItem title="Export to PDF" />
            <MenuItem title="Export to DOCX" />
            <MenuItem title="Export to Excel" />
          </SplitButtonMenu>}>
        Export to CSV
      </SplitButton>
      <Button>New item</Button>
    </>,
  name: "Secondary split button"
}`,...(P=(x=u.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var z,O,w;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <SplitButton secondaryDialogContent={<Menu focusItemIndexOnMount={2} id="menu" size="medium">
          <MenuTitle caption="Look up, you might see" captionPosition="top" />
          <MenuItem icon={Sun} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} iconType="svg" title="And the stars" />
        </Menu>}>
      Custom menu
    </SplitButton>,
  name: "Custom menu"
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const q=["Overview","Types","Sizes","SplitButtonWithIcons","SplitButtonAsThePrimaryAction","SecondarySplitButton","CustomMenu"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomMenu:p,Overview:a,SecondarySplitButton:u,Sizes:c,SplitButtonAsThePrimaryAction:s,SplitButtonWithIcons:m,Types:l,__namedExportsOrder:q,default:X},Symbol.toStringTag,{value:"Module"}));export{p as C,a as O,re as S,l as T,c as a,m as b,s as c,u as d};
