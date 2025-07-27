import{j as t}from"./jsx-runtime-DDzbWKUH.js";import{S as o,a as n}from"./SplitButtonMenu-BwH3fPFG.js";import{B as N}from"./Button-W5GzK7rp.js";import{M as e}from"./MenuItem-Bj4cpvxC.js";import{M as R}from"./useMenuItemKeyboardEvents-AXAWcOeo.js";import{M as V}from"./MenuTitle-B4zDKslO.js";import{h as w,j as F,i as d}from"./index-BA_MN9l1.js";import{f as _,e as L,h as i}from"./Workspace-BIJf5qCK.js";import{l as U}from"./Settings-DOfpeGYp.js";import{r}from"./Check-B_icfwyn.js";import{c as W}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const S=W({component:n,iconPropNamesArray:["leftIcon","rightIcon"],actionPropsArray:["secondaryDialogContent","onSecondaryDialogDidShow","onSecondaryDialogDidHide","onClick"]}),X={title:"Components/SplitButton",component:n,subcomponents:{SplitButtonMenu:o},argTypes:S.argTypes,decorators:S.decorators,parameters:{docs:{liveEdit:{scope:{Add:d,Announcement:i,Check:r,Download:F,Favorite:U,Moon:L,Sun:_,Upload:w}}}}},s={render:$=>t.jsx(n,{...$,children:"Button"}),args:{secondaryDialogContent:()=>t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(n,{secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Primary"}),t.jsx(n,{kind:"secondary",secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Secondary"}),t.jsx(n,{kind:"tertiary",secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Tertiary"})]})},a={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(n,{size:"small",secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Small"}),t.jsx(n,{size:"medium",secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Medium"}),t.jsx(n,{size:"large",secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Large"})]})},c={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(n,{leftIcon:d,secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Left icon"}),t.jsx(n,{rightIcon:d,secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:r,title:"Hey"}),t.jsx(e,{icon:i,title:"There"})]}),children:"Right icon"})]}),name:"Split button with icons"},u={render:()=>t.jsx(n,{secondaryDialogPosition:"bottom-start",secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{icon:F,title:"Import template"}),t.jsx(e,{icon:w,title:"Export template"})]}),children:"Use template"}),name:"Split button as the primary action"},m={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(n,{kind:"secondary",secondaryDialogPosition:"bottom-start",secondaryDialogContent:t.jsxs(o,{id:"split-menu",children:[t.jsx(e,{title:"Export to PDF"}),t.jsx(e,{title:"Export to DOCX"}),t.jsx(e,{title:"Export to Excel"})]}),children:"Export to CSV"}),t.jsx(N,{children:"New item"})]}),name:"Secondary split button"},p={render:()=>t.jsx(n,{secondaryDialogContent:t.jsxs(R,{focusItemIndexOnMount:2,id:"menu",size:"medium",children:[t.jsx(V,{caption:"Look up, you might see",captionPosition:"top"}),t.jsx(e,{icon:_,iconType:"svg",title:"The sun"}),t.jsx(e,{icon:L,iconType:"svg",title:"The moon"}),t.jsx(e,{icon:U,iconType:"svg",title:"And the stars"})]}),children:"Custom menu"}),name:"Custom menu"};var y,h,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,M,B;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(B=(M=l.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var j,C,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(C=a.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var D,T,f;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(f=(T=c.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var A,k,E;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <SplitButton secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="split-menu">
          <MenuItem icon={Download} title="Import template" />
          <MenuItem icon={Upload} title="Export template" />
        </SplitButtonMenu>}>
      Use template
    </SplitButton>,
  name: "Split button as the primary action"
}`,...(E=(k=u.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var H,b,v;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(v=(b=m.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var P,z,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <SplitButton secondaryDialogContent={<Menu focusItemIndexOnMount={2} id="menu" size="medium">
          <MenuTitle caption="Look up, you might see" captionPosition="top" />
          <MenuItem icon={Sun} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} iconType="svg" title="And the stars" />
        </Menu>}>
      Custom menu
    </SplitButton>,
  name: "Custom menu"
}`,...(O=(z=p.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const q=["Overview","Types","Sizes","SplitButtonWithIcons","SplitButtonAsThePrimaryAction","SecondarySplitButton","CustomMenu"],rt=Object.freeze(Object.defineProperty({__proto__:null,CustomMenu:p,Overview:s,SecondarySplitButton:m,Sizes:a,SplitButtonAsThePrimaryAction:u,SplitButtonWithIcons:c,Types:l,__namedExportsOrder:q,default:X},Symbol.toStringTag,{value:"Module"}));export{p as C,s as O,rt as S,l as T,a,c as b,u as c,m as d};
