import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{U as O,D as F,A as p}from"./index-D1D0uiJ1.js";import{b as L,M as U,A as o}from"./Workspace-BRy0vdK8.js";import{C as r}from"./Check-BhuJDOHf.js";import{F as _}from"./Settings-Dllwc6G3.js";import{c as R}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{S as i,a as n}from"./SplitButtonMenu-WKoPDZSf.js";import{M as t}from"./MenuItem-CxaLwcyB.js";import{B as V}from"./Button-CAkxRwa_.js";import{M as W}from"./useMenuItemKeyboardEvents-DJxhfpSP.js";import{M as X}from"./MenuTitle-CRYdo6jI.js";const y=R({component:n,iconPropNamesArray:["leftIcon","rightIcon"],actionPropsArray:["secondaryDialogContent","onSecondaryDialogDidShow","onSecondaryDialogDidHide","onClick"]}),q={title:"Components/SplitButton",component:n,subcomponents:{SplitButtonMenu:i},argTypes:y.argTypes,decorators:y.decorators,parameters:{docs:{liveEdit:{scope:{Add:p,Announcement:o,Check:r,Download:F,Favorite:_,Moon:U,Sun:L,Upload:O}}}}},s={render:N=>e.jsx(n,{id:"overview-split-button","aria-label":"Overview split button",...N,children:"Button"}),args:{secondaryDialogContent:()=>e.jsxs(i,{id:"overview-split-menu",children:[e.jsx(t,{id:"overview-menu-check",icon:r,title:"Hey"}),e.jsx(t,{id:"overview-menu-announcement",icon:o,title:"There"})]})},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"types-primary","aria-label":"Primary split button",secondaryDialogContent:e.jsxs(i,{id:"types-primary-menu",children:[e.jsx(t,{id:"types-primary-check",icon:r,title:"Hey"}),e.jsx(t,{id:"types-primary-announcement",icon:o,title:"There"})]}),children:"Primary"}),e.jsx(n,{id:"types-secondary","aria-label":"Secondary split button",kind:"secondary",secondaryDialogContent:e.jsxs(i,{id:"types-secondary-menu",children:[e.jsx(t,{id:"types-secondary-check",icon:r,title:"Hey"}),e.jsx(t,{id:"types-secondary-announcement",icon:o,title:"There"})]}),children:"Secondary"}),e.jsx(n,{id:"types-tertiary","aria-label":"Tertiary split button",kind:"tertiary",secondaryDialogContent:e.jsxs(i,{id:"types-tertiary-menu",children:[e.jsx(t,{id:"types-tertiary-check",icon:r,title:"Hey"}),e.jsx(t,{id:"types-tertiary-announcement",icon:o,title:"There"})]}),children:"Tertiary"})]})},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"sizes-small","aria-label":"Small split button",size:"small",secondaryDialogContent:e.jsxs(i,{id:"sizes-small-menu",children:[e.jsx(t,{id:"sizes-small-check",icon:r,title:"Hey"}),e.jsx(t,{id:"sizes-small-announcement",icon:o,title:"There"})]}),children:"Small"}),e.jsx(n,{id:"sizes-medium","aria-label":"Medium split button",size:"medium",secondaryDialogContent:e.jsxs(i,{id:"sizes-medium-menu",children:[e.jsx(t,{id:"sizes-medium-check",icon:r,title:"Hey"}),e.jsx(t,{id:"sizes-medium-announcement",icon:o,title:"There"})]}),children:"Medium"}),e.jsx(n,{id:"sizes-large","aria-label":"Large split button",size:"large",secondaryDialogContent:e.jsxs(i,{id:"sizes-large-menu",children:[e.jsx(t,{id:"sizes-large-check",icon:r,title:"Hey"}),e.jsx(t,{id:"sizes-large-announcement",icon:o,title:"There"})]}),children:"Large"})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"icons-left","aria-label":"Split button with left icon",leftIcon:p,secondaryDialogContent:e.jsxs(i,{id:"icons-left-menu",children:[e.jsx(t,{id:"icons-left-check",icon:r,title:"Hey"}),e.jsx(t,{id:"icons-left-announcement",icon:o,title:"There"})]}),children:"Left icon"}),e.jsx(n,{id:"icons-right","aria-label":"Split button with right icon",rightIcon:p,secondaryDialogContent:e.jsxs(i,{id:"icons-right-menu",children:[e.jsx(t,{id:"icons-right-check",icon:r,title:"Hey"}),e.jsx(t,{id:"icons-right-announcement",icon:o,title:"There"})]}),children:"Right icon"})]}),name:"Split button with icons"},u={render:()=>e.jsx(n,{id:"primary-action","aria-label":"Use template split button",secondaryDialogPosition:"bottom-start",secondaryDialogContent:e.jsxs(i,{id:"primary-action-menu",children:[e.jsx(t,{id:"primary-action-import",icon:F,title:"Import template"}),e.jsx(t,{id:"primary-action-export",icon:O,title:"Export template"})]}),children:"Use template"}),name:"Split button as the primary action"},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{id:"secondary-export","aria-label":"Export options split button",kind:"secondary",secondaryDialogPosition:"bottom-start",secondaryDialogContent:e.jsxs(i,{id:"secondary-export-menu",children:[e.jsx(t,{id:"secondary-export-pdf",title:"Export to PDF"}),e.jsx(t,{id:"secondary-export-docx",title:"Export to DOCX"}),e.jsx(t,{id:"secondary-export-excel",title:"Export to Excel"})]}),children:"Export to CSV"}),e.jsx(V,{id:"new-item-button","aria-label":"Create new item",children:"New item"})]}),name:"Secondary split button"},m={render:()=>e.jsx(n,{id:"custom-menu","aria-label":"Custom menu split button",secondaryDialogContent:e.jsxs(W,{focusItemIndexOnMount:2,id:"custom-menu-content",size:"medium",children:[e.jsx(X,{caption:"Look up, you might see",captionPosition:"top"}),e.jsx(t,{id:"custom-menu-sun",icon:L,type:"svg",title:"The sun"}),e.jsx(t,{id:"custom-menu-moon",icon:U,type:"svg",title:"The moon"}),e.jsx(t,{id:"custom-menu-stars",icon:_,type:"svg",title:"And the stars"})]}),children:"Custom menu"}),name:"Custom menu"};var h,S,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: SplitButtonProps) => <SplitButton id="overview-split-button" aria-label="Overview split button" {...args}>
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
      <SplitButton id="types-primary" aria-label="Primary split button" secondaryDialogContent={<SplitButtonMenu id="types-primary-menu">
            <MenuItem id="types-primary-check" icon={Check} title="Hey" />
            <MenuItem id="types-primary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Primary
      </SplitButton>
      <SplitButton id="types-secondary" aria-label="Secondary split button" kind="secondary" secondaryDialogContent={<SplitButtonMenu id="types-secondary-menu">
            <MenuItem id="types-secondary-check" icon={Check} title="Hey" />
            <MenuItem id="types-secondary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Secondary
      </SplitButton>
      <SplitButton id="types-tertiary" aria-label="Tertiary split button" kind="tertiary" secondaryDialogContent={<SplitButtonMenu id="types-tertiary-menu">
            <MenuItem id="types-tertiary-check" icon={Check} title="Hey" />
            <MenuItem id="types-tertiary-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Tertiary
      </SplitButton>
    </>
}`,...(M=(b=a.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var B,j,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton id="sizes-small" aria-label="Small split button" size="small" secondaryDialogContent={<SplitButtonMenu id="sizes-small-menu">
            <MenuItem id="sizes-small-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-small-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Small
      </SplitButton>
      <SplitButton id="sizes-medium" aria-label="Medium split button" size="medium" secondaryDialogContent={<SplitButtonMenu id="sizes-medium-menu">
            <MenuItem id="sizes-medium-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-medium-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Medium
      </SplitButton>
      <SplitButton id="sizes-large" aria-label="Large split button" size="large" secondaryDialogContent={<SplitButtonMenu id="sizes-large-menu">
            <MenuItem id="sizes-large-check" icon={Check} title="Hey" />
            <MenuItem id="sizes-large-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Large
      </SplitButton>
    </>
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,I,k;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton id="icons-left" aria-label="Split button with left icon" leftIcon={Add} secondaryDialogContent={<SplitButtonMenu id="icons-left-menu">
            <MenuItem id="icons-left-check" icon={Check} title="Hey" />
            <MenuItem id="icons-left-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Left icon
      </SplitButton>
      <SplitButton id="icons-right" aria-label="Split button with right icon" rightIcon={Add} secondaryDialogContent={<SplitButtonMenu id="icons-right-menu">
            <MenuItem id="icons-right-check" icon={Check} title="Hey" />
            <MenuItem id="icons-right-announcement" icon={Announcement} title="There" />
          </SplitButtonMenu>}>
        Right icon
      </SplitButton>
    </>,
  name: "Split button with icons"
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var v,T,f;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <SplitButton id="primary-action" aria-label="Use template split button" secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="primary-action-menu">
          <MenuItem id="primary-action-import" icon={Download} title="Import template" />
          <MenuItem id="primary-action-export" icon={Upload} title="Export template" />
        </SplitButtonMenu>}>
      Use template
    </SplitButton>,
  name: "Split button as the primary action"
}`,...(f=(T=u.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var z,w,A;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <SplitButton id="secondary-export" aria-label="Export options split button" kind="secondary" secondaryDialogPosition="bottom-start" secondaryDialogContent={<SplitButtonMenu id="secondary-export-menu">
            <MenuItem id="secondary-export-pdf" title="Export to PDF" />
            <MenuItem id="secondary-export-docx" title="Export to DOCX" />
            <MenuItem id="secondary-export-excel" title="Export to Excel" />
          </SplitButtonMenu>}>
        Export to CSV
      </SplitButton>
      <Button id="new-item-button" aria-label="Create new item">
        New item
      </Button>
    </>,
  name: "Secondary split button"
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var E,H,P;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <SplitButton id="custom-menu" aria-label="Custom menu split button" secondaryDialogContent={<Menu focusItemIndexOnMount={2} id="custom-menu-content" size="medium">
          <MenuTitle caption="Look up, you might see" captionPosition="top" />
          <MenuItem id="custom-menu-sun" icon={Sun} type="svg" title="The sun" />
          <MenuItem id="custom-menu-moon" icon={Moon} type="svg" title="The moon" />
          <MenuItem id="custom-menu-stars" icon={Favorite} type="svg" title="And the stars" />
        </Menu>}>
      Custom menu
    </SplitButton>,
  name: "Custom menu"
}`,...(P=(H=m.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};const G=["Overview","Types","Sizes","SplitButtonWithIcons","SplitButtonAsThePrimaryAction","SecondarySplitButton","CustomMenu"],re=Object.freeze(Object.defineProperty({__proto__:null,CustomMenu:m,Overview:s,SecondarySplitButton:d,Sizes:c,SplitButtonAsThePrimaryAction:u,SplitButtonWithIcons:l,Types:a,__namedExportsOrder:G,default:q},Symbol.toStringTag,{value:"Module"}));export{m as C,s as O,re as S,a as T,c as a,l as b,u as c,d};
