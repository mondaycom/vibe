import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{M as t}from"./MenuItem-2Pbim4jm.js";import{M as n}from"./useMenuItemKeyboardEvents-DGvnAHeq.js";import{c as D}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";import{t as u}from"./Invite-CWwo6O26.js";const c=D({component:t,iconPropNamesArray:["icon"]}),R={title:"Components/Menu/MenuItem",component:t,argTypes:c.argTypes,decorators:c.decorators},L=P=>e.jsx(n,{children:e.jsx(t,{...P})}),i={render:L.bind({}),args:{title:"Menu item"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"Regular menu item"}),e.jsx(t,{title:"Selected menu item",selected:!0}),e.jsx(t,{title:"Disabled menu item",disabled:!0})]})},l={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"SVG icon",icon:u}),e.jsx(t,{title:"Font icon",icon:"fa fa-star",iconType:"font"})]}),parameters:{docs:{liveEdit:{scope:{Activity:u}}}}},a={render:()=>e.jsx(n,{children:e.jsx(t,{title:"Menu item",label:"New"})}),parameters:{chromatic:{pauseAnimationAtEnd:!0}}},s={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"Opens on item hover",children:e.jsxs(n,{tabIndex:0,id:"sub-menu",children:[e.jsx(t,{title:"Sub menu item 1",onClick:()=>alert("clicked on sub menu item 1")}),e.jsx(t,{title:"Sub menu item 2",onClick:()=>alert("clicked on sub menu item 2")}),e.jsx(t,{title:"Sub menu item 3",onClick:()=>alert("clicked on sub menu item 3")})]})}),e.jsx(t,{title:"Opens on icon hover",splitMenuItem:!0,onClick:()=>alert("clicked on menu item"),children:e.jsxs(n,{tabIndex:0,id:"sub-menu",children:[e.jsx(t,{title:"Sub menu item 1",onClick:()=>alert("clicked on sub menu item 1")}),e.jsx(t,{title:"Sub menu item 2",onClick:()=>alert("clicked on sub menu item 2")}),e.jsx(t,{title:"Sub menu item 3",onClick:()=>alert("clicked on sub menu item 3")})]})})]}),name:"Sub menu"},r={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"short text"}),e.jsx(t,{title:"long text - bla bla bla bla bla bla bla bla bla bla bla"}),e.jsx(t,{title:"long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla",children:e.jsxs(n,{tabIndex:0,id:"sub-menu",children:[e.jsx(t,{title:"Sub menu item 1"}),e.jsx(t,{title:"Sub menu item 2"}),e.jsx(t,{title:"Sub menu item 3"})]})})]})},m={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"Menu item with tooltip",tooltipContent:"I am tooltip"}),e.jsx(t,{title:"Disabled menu item with tooltip",disabled:!0,disableReason:"I am a disabled tooltip"}),e.jsx(t,{title:"I am a very very very very long text please hover me to get a tooltip"}),e.jsx(t,{title:"Menu item with bottom tooltip",tooltipContent:"I am tooltip",tooltipPosition:"bottom"}),e.jsx(t,{title:"Menu item with icon and tooltip",tooltipContent:"Menu item with icon and tooltip",tooltipPosition:"left",icon:u,iconType:"svg"})]}),name:"Tooltip",parameters:{docs:{liveEdit:{scope:{Activity:u}}}}};var d,b,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: menuItemTemplate.bind({}),
  args: {
    title: "Menu item"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var M,x,I;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Regular menu item" />
      <MenuItem title="Selected menu item" selected />
      <MenuItem title="Disabled menu item" disabled />
    </Menu>
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var S,j,h;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="SVG icon" icon={Activity} />
      <MenuItem title="Font icon" icon="fa fa-star" iconType="font" />
    </Menu>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Activity
        }
      }
    }
  }
}`,...(h=(j=l.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var v,k,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Menu item" label="New" />
    </Menu>,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var y,C,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Opens on item hover">
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" onClick={() => alert("clicked on sub menu item 1")} />
          <MenuItem title="Sub menu item 2" onClick={() => alert("clicked on sub menu item 2")} />
          <MenuItem title="Sub menu item 3" onClick={() => alert("clicked on sub menu item 3")} />
        </Menu>
      </MenuItem>
      <MenuItem title="Opens on icon hover" splitMenuItem onClick={() => alert("clicked on menu item")}>
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" onClick={() => alert("clicked on sub menu item 1")} />
          <MenuItem title="Sub menu item 2" onClick={() => alert("clicked on sub menu item 2")} />
          <MenuItem title="Sub menu item 3" onClick={() => alert("clicked on sub menu item 3")} />
        </Menu>
      </MenuItem>
    </Menu>,
  name: "Sub menu"
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var w,T,E;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="short text" />
      <MenuItem title="long text - bla bla bla bla bla bla bla bla bla bla bla" />
      <MenuItem title="long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla">
        <Menu tabIndex={0} id="sub-menu">
          <MenuItem title="Sub menu item 1" />
          <MenuItem title="Sub menu item 2" />
          <MenuItem title="Sub menu item 3" />
        </Menu>
      </MenuItem>
    </Menu>
}`,...(E=(T=r.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var O,A,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Menu item with tooltip" tooltipContent="I am tooltip" />
      <MenuItem title="Disabled menu item with tooltip" disabled={true} disableReason="I am a disabled tooltip" />
      <MenuItem title="I am a very very very very long text please hover me to get a tooltip" />
      <MenuItem title="Menu item with bottom tooltip" tooltipContent="I am tooltip" tooltipPosition="bottom" />
      <MenuItem title="Menu item with icon and tooltip" tooltipContent="Menu item with icon and tooltip" tooltipPosition="left" icon={Activity} iconType="svg" />
    </Menu>,
  name: "Tooltip",
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Activity
        }
      }
    }
  }
}`,...(_=(A=m.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const N=["Overview","States","Icons","Label","SubMenu","Overflow","TooltipStory"],B=Object.freeze(Object.defineProperty({__proto__:null,Icons:l,Label:a,Overflow:r,Overview:i,States:o,SubMenu:s,TooltipStory:m,__namedExportsOrder:N,default:R},Symbol.toStringTag,{value:"Module"}));export{l as I,a as L,B as M,i as O,o as S,m as T,s as a,r as b};
