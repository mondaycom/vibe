import{R as e}from"./index-Hemj67b4.js";import{M as t}from"./MenuItem-DLCA1wC-.js";import{M as n}from"./useMenuItemKeyboardEvents-BQybGziJ.js";import{c as D}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{t as c}from"./Invite-CWwo6O26.js";const s=D({component:t,iconPropNamesArray:["icon"]}),L={title:"Components/Menu/MenuItem",component:t,argTypes:s.argTypes,decorators:s.decorators},N=R=>e.createElement(n,null,e.createElement(t,{...R})),i={render:N.bind({}),args:{title:"Menu item"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>e.createElement(n,null,e.createElement(t,{title:"Regular menu item"}),e.createElement(t,{title:"Selected menu item",selected:!0}),e.createElement(t,{title:"Disabled menu item",disabled:!0}))},o={render:()=>e.createElement(n,null,e.createElement(t,{title:"SVG icon",icon:c}),e.createElement(t,{title:"Font icon",icon:"fa fa-star",iconType:"font"})),parameters:{docs:{liveEdit:{scope:{Activity:c}}}}},a={render:()=>e.createElement(n,null,e.createElement(t,{title:"Menu item",label:"New"})),parameters:{chromatic:{pauseAnimationAtEnd:!0}}},m={render:()=>e.createElement(n,null,e.createElement(t,{title:"Opens on item hover"},e.createElement(n,{tabIndex:0,id:"sub-menu"},e.createElement(t,{title:"Sub menu item 1",onClick:()=>alert("clicked on sub menu item 1")}),e.createElement(t,{title:"Sub menu item 2",onClick:()=>alert("clicked on sub menu item 2")}),e.createElement(t,{title:"Sub menu item 3",onClick:()=>alert("clicked on sub menu item 3")}))),e.createElement(t,{title:"Opens on icon hover",splitMenuItem:!0,onClick:()=>alert("clicked on menu item")},e.createElement(n,{tabIndex:0,id:"sub-menu"},e.createElement(t,{title:"Sub menu item 1",onClick:()=>alert("clicked on sub menu item 1")}),e.createElement(t,{title:"Sub menu item 2",onClick:()=>alert("clicked on sub menu item 2")}),e.createElement(t,{title:"Sub menu item 3",onClick:()=>alert("clicked on sub menu item 3")})))),name:"Sub menu"},r={render:()=>e.createElement(n,null,e.createElement(t,{title:"short text"}),e.createElement(t,{title:"long text - bla bla bla bla bla bla bla bla bla bla bla"}),e.createElement(t,{title:"long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla"},e.createElement(n,{tabIndex:0,id:"sub-menu"},e.createElement(t,{title:"Sub menu item 1"}),e.createElement(t,{title:"Sub menu item 2"}),e.createElement(t,{title:"Sub menu item 3"}))))},u={render:()=>e.createElement(n,null,e.createElement(t,{title:"Menu item with tooltip",tooltipContent:"I am tooltip"}),e.createElement(t,{title:"Disabled menu item with tooltip",disabled:!0,disableReason:"I am a disabled tooltip"}),e.createElement(t,{title:"I am a very very very very long text please hover me to get a tooltip"}),e.createElement(t,{title:"Menu item with bottom tooltip",tooltipContent:"I am tooltip",tooltipPosition:"bottom"}),e.createElement(t,{title:"Menu item with icon and tooltip",tooltipContent:"Menu item with icon and tooltip",tooltipPosition:"left",icon:c,iconType:"svg"})),name:"Tooltip",parameters:{docs:{liveEdit:{scope:{Activity:c}}}}};var b,d,p;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var M,I,E;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Regular menu item" />
      <MenuItem title="Selected menu item" selected />
      <MenuItem title="Disabled menu item" disabled />
    </Menu>
}`,...(E=(I=l.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var S,v,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var g,y,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Menu item" label="New" />
    </Menu>,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var C,f,w;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(w=(f=m.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var x,T,O;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(O=(T=r.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var A,_,P;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(_=u.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const j=["Overview","States","Icons","Label","SubMenu","Overflow","TooltipStory"],B=Object.freeze(Object.defineProperty({__proto__:null,Icons:o,Label:a,Overflow:r,Overview:i,States:l,SubMenu:m,TooltipStory:u,__namedExportsOrder:j,default:L},Symbol.toStringTag,{value:"Module"}));export{o as I,a as L,B as M,i as O,l as S,u as T,m as a,r as b};
