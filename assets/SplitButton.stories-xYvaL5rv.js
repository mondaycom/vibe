import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as N}from"./createStoryMetaSettingsDecorator-ByqFV25U.js";import{p as P,q as O,i as p}from"./index-B9Z9g-zy.js";import{f as F,e as _,h as o}from"./Workspace-CefzN9Lt.js";import{l as U}from"./Settings-DqG0P6p1.js";import{r}from"./Check-CxyRTNy4.js";import{S as i,a as n}from"./SplitButtonMenu-BSzWYn97.js";import{M as t}from"./MenuItem-jEan1CzE.js";import{B as R}from"./Button-DE1bV8I3.js";import{M as V}from"./useMenuItemKeyboardEvents-DmKbwaIK.js";import{M as W}from"./MenuTitle-DQoZSa3T.js";const y=N({component:n,iconPropNamesArray:["leftIcon","rightIcon"],actionPropsArray:["secondaryDialogContent","onSecondaryDialogDidShow","onSecondaryDialogDidHide","onClick"]}),X={title:"Components/SplitButton",component:n,subcomponents:{SplitButtonMenu:i},argTypes:y.argTypes,decorators:y.decorators,parameters:{docs:{liveEdit:{scope:{Add:p,Announcement:o,Check:r,Download:O,Favorite:U,Moon:_,Sun:F,Upload:P}}}}},s={render:$=>e.jsx(n,{id:"overview-split-button",ariaLabel:"Overview split button",...$,children:"Button"}),args:{secondaryDialogContent:()=>e.jsxs(i,{id:"overview-split-menu",children:[e.jsx(t,{id:"overview-menu-check",icon:r,title:"Hey"}),e.jsx(t,{id:"overview-menu-announcement",icon:o,title:"There"})]})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"types-primary",ariaLabel:"Primary split button",secondaryDialogContent:e.jsxs(i,{id:"types-primary-menu",children:[e.jsx(t,{id:"types-primary-check",icon:r,title:"Hey"}),e.jsx(t,{id:"types-primary-announcement",icon:o,title:"There"})]}),children:"Primary"}),e.jsx(n,{id:"types-secondary",ariaLabel:"Secondary split button",kind:"secondary",secondaryDialogContent:e.jsxs(i,{id:"types-secondary-menu",children:[e.jsx(t,{id:"types-secondary-check",icon:r,title:"Hey"}),e.jsx(t,{id:"types-secondary-announcement",icon:o,title:"There"})]}),children:"Secondary"}),e.jsx(n,{id:"types-tertiary",ariaLabel:"Tertiary split button",kind:"tertiary",secondaryDialogContent:e.jsxs(i,{id:"types-tertiary-menu",children:[e.jsx(t,{id:"types-tertiary-check",icon:r,title:"Hey"}),e.jsx(t,{id:"types-tertiary-announcement",icon:o,title:"There"})]}),children:"Tertiary"})]})},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"sizes-small",ariaLabel:"Small split button",size:"small",secondaryDialogContent:e.jsxs(i,{id:"sizes-small-menu",children:[e.jsx(t,{id:"sizes-small-check",icon:r,title:"Hey"}),e.jsx(t,{id:"sizes-small-announcement",icon:o,title:"There"})]}),children:"Small"}),e.jsx(n,{id:"sizes-medium",ariaLabel:"Medium split button",size:"medium",secondaryDialogContent:e.jsxs(i,{id:"sizes-medium-menu",children:[e.jsx(t,{id:"sizes-medium-check",icon:r,title:"Hey"}),e.jsx(t,{id:"sizes-medium-announcement",icon:o,title:"There"})]}),children:"Medium"}),e.jsx(n,{id:"sizes-large",ariaLabel:"Large split button",size:"large",secondaryDialogContent:e.jsxs(i,{id:"sizes-large-menu",children:[e.jsx(t,{id:"sizes-large-check",icon:r,title:"Hey"}),e.jsx(t,{id:"sizes-large-announcement",icon:o,title:"There"})]}),children:"Large"})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"icons-left",ariaLabel:"Split button with left icon",leftIcon:p,secondaryDialogContent:e.jsxs(i,{id:"icons-left-menu",children:[e.jsx(t,{id:"icons-left-check",icon:r,title:"Hey"}),e.jsx(t,{id:"icons-left-announcement",icon:o,title:"There"})]}),children:"Left icon"}),e.jsx(n,{id:"icons-right",ariaLabel:"Split button with right icon",rightIcon:p,secondaryDialogContent:e.jsxs(i,{id:"icons-right-menu",children:[e.jsx(t,{id:"icons-right-check",icon:r,title:"Hey"}),e.jsx(t,{id:"icons-right-announcement",icon:o,title:"There"})]}),children:"Right icon"})]}),name:"Split button with icons"},u={render:()=>e.jsx(n,{id:"primary-action",ariaLabel:"Use template split button",secondaryDialogPosition:"bottom-start",secondaryDialogContent:e.jsxs(i,{id:"primary-action-menu",children:[e.jsx(t,{id:"primary-action-import",icon:O,title:"Import template"}),e.jsx(t,{id:"primary-action-export",icon:P,title:"Export template"})]}),children:"Use template"}),name:"Split button as the primary action"},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"secondary-export",ariaLabel:"Export options split button",kind:"secondary",secondaryDialogPosition:"bottom-start",secondaryDialogContent:e.jsxs(i,{id:"secondary-export-menu",children:[e.jsx(t,{id:"secondary-export-pdf",title:"Export to PDF"}),e.jsx(t,{id:"secondary-export-docx",title:"Export to DOCX"}),e.jsx(t,{id:"secondary-export-excel",title:"Export to Excel"})]}),children:"Export to CSV"}),e.jsx(R,{id:"new-item-button",ariaLabel:"Create new item",children:"New item"})]}),name:"Secondary split button"},m={render:()=>e.jsx(n,{id:"custom-menu",ariaLabel:"Custom menu split button",secondaryDialogContent:e.jsxs(V,{focusItemIndexOnMount:2,id:"custom-menu-content",size:"medium",children:[e.jsx(W,{caption:"Look up, you might see",captionPosition:"top"}),e.jsx(t,{id:"custom-menu-sun",icon:F,iconType:"svg",title:"The sun"}),e.jsx(t,{id:"custom-menu-moon",icon:_,iconType:"svg",title:"The moon"}),e.jsx(t,{id:"custom-menu-stars",icon:U,iconType:"svg",title:"And the stars"})]}),children:"Custom menu"}),name:"Custom menu"};var h,S,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: SplitButtonProps) => <SplitButton id="overview-split-button" ariaLabel="Overview split button" {...args}>
      Button
    </SplitButton>,
  args: {
    secondaryDialogContent: () => <SplitButtonMenu id="overview-split-menu">
        <MenuItem id="overview-menu-check" icon={Check} title="Hey" />
        <MenuItem id="overview-menu-announcement" icon={Announcement} title="There" />
      </SplitButtonMenu>
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var g,b,M;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton id="types-primary" ariaLabel="Primary split button" secondaryDialogContent={<SplitButtonMenu id="types-primary-menu">
            <MenuItem id="types-primary-check" icon={Check} title="Hey" />
            <MenuItem id="types-primary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Primary
      </SplitButton>
      <SplitButton id="types-secondary" ariaLabel="Secondary split button" kind="secondary" secondaryDialogContent={<SplitButtonMenu id="types-secondary-menu">
            <MenuItem id="types-secondary-check" icon={Check} title="Hey" />
            <MenuItem id="types-secondary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Secondary
      </SplitButton>
      <SplitButton id="types-tertiary" ariaLabel="Tertiary split button" kind="tertiary" secondaryDialogContent={<SplitButtonMenu id="types-tertiary-menu">
            <MenuItem id="types-tertiary-check" icon={Check} title="Hey" />
            <MenuItem id="types-tertiary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Tertiary
      </SplitButton>
    </>
}`,...(M=(b=a.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var B,j,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton id="sizes-small" ariaLabel="Small split button" size="small" secondaryDialogContent={<SplitButtonMenu id="sizes-small-menu">
            <MenuItem id="sizes-small-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-small-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Small
      </SplitButton>
      <SplitButton id="sizes-medium" ariaLabel="Medium split button" size="medium" secondaryDialogContent={<SplitButtonMenu id="sizes-medium-menu">
            <MenuItem id="sizes-medium-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-medium-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Medium
      </SplitButton>
      <SplitButton id="sizes-large" ariaLabel="Large split button" size="large" secondaryDialogContent={<SplitButtonMenu id="sizes-large-menu">
            <MenuItem id="sizes-large-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-large-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Large
      </SplitButton>
    </>
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var T,I,D;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton id="icons-left" ariaLabel="Split button with left icon" leftIcon={Add} secondaryDialogContent={<SplitButtonMenu id="icons-left-menu">
            <MenuItem id="icons-left-check" icon={Check} title="Hey" />
            <MenuItem id="icons-left-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Left icon
      </SplitButton>
      <SplitButton id="icons-right" ariaLabel="Split button with right icon" rightIcon={Add} secondaryDialogContent={<SplitButtonMenu id="icons-right-menu">
            <MenuItem id="icons-right-check" icon={Check} title="Hey" />
            <MenuItem id="icons-right-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Right icon
      </SplitButton>
    </>,
  name: "Split button with icons"
}`,...(D=(I=l.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var k,f,v;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <SplitButton id="primary-action" ariaLabel="Use template split button" secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="primary-action-menu">
          <MenuItem id="primary-action-import" icon={Download} title="Import template" />
          <MenuItem id="primary-action-export" icon={Upload} title="Export template" />
        </SplitButtonMenu>}>
      Use template
    </SplitButton>,
  name: "Split button as the primary action"
}`,...(v=(f=u.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var z,L,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton id="secondary-export" ariaLabel="Export options split button" kind="secondary" secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="secondary-export-menu">
            <MenuItem id="secondary-export-pdf" title="Export to PDF" />
            <MenuItem id="secondary-export-docx" title="Export to DOCX" />
            <MenuItem id="secondary-export-excel" title="Export to Excel" />
          </SplitButtonMenu>}>
        Export to CSV
      </SplitButton>
      <Button id="new-item-button" ariaLabel="Create new item">
        New item
      </Button>
    </>,
  name: "Secondary split button"
}`,...(w=(L=d.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var A,E,H;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <SplitButton id="custom-menu" ariaLabel="Custom menu split button" secondaryDialogContent={<Menu focusItemIndexOnMount={2} id="custom-menu-content" size="medium">
          <MenuTitle caption="Look up, you might see" captionPosition="top" />
          <MenuItem id="custom-menu-sun" icon={Sun} iconType="svg" title="The sun" />
          <MenuItem id="custom-menu-moon" icon={Moon} iconType="svg" title="The moon" />
          <MenuItem id="custom-menu-stars" icon={Favorite} iconType="svg" title="And the stars" />
        </Menu>}>
      Custom menu
    </SplitButton>,
  name: "Custom menu"
}`,...(H=(E=m.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const q=["Overview","Types","Sizes","SplitButtonWithIcons","SplitButtonAsThePrimaryAction","SecondarySplitButton","CustomMenu"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomMenu:m,Overview:s,SecondarySplitButton:d,Sizes:c,SplitButtonAsThePrimaryAction:u,SplitButtonWithIcons:l,Types:a,__namedExportsOrder:q,default:X},Symbol.toStringTag,{value:"Module"}));export{m as C,s as O,re as S,a as T,c as a,l as b,u as c,d};
