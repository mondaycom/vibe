import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as D}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{t as u}from"./Invite-BJsiPZ1j.js";import{M as t}from"./MenuItem-BdqWNiw_.js";import{M as n}from"./useMenuItemKeyboardEvents-DsZYQISP.js";import{F as c}from"./Flex-Bimzf4jb.js";import{T as d}from"./Text-DVNPP_6L.js";const b=D({component:t,iconPropNamesArray:["icon","rightIcon"]}),L={title:"Components/Menu/MenuItem",component:t,argTypes:b.argTypes,decorators:b.decorators},G=P=>e.jsx(n,{children:e.jsx(t,{...P})}),i={render:G.bind({}),args:{title:"Menu item"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"Regular menu item"}),e.jsx(t,{title:"Selected menu item",selected:!0}),e.jsx(t,{title:"Disabled menu item",disabled:!0})]})},l={render:()=>e.jsxs(c,{gap:"large",align:"start",justify:"start",children:[e.jsxs(c,{direction:"column",gap:"medium",children:[e.jsx(d,{children:"Left icon"}),e.jsxs(n,{children:[e.jsx(t,{title:"SVG icon",icon:u}),e.jsx(t,{title:"Font icon",icon:"fa fa-star",iconType:"font"})]})]}),e.jsxs(c,{direction:"column",gap:"medium",children:[e.jsx(d,{children:"Right icon"}),e.jsxs(n,{children:[e.jsx(t,{title:"SVG right icon",rightIcon:u}),e.jsx(t,{title:"Font right icon",rightIcon:"fa fa-star",rightIconType:"font"})]})]})]}),parameters:{docs:{liveEdit:{scope:{Activity:u}}}}},r={render:()=>e.jsx(n,{children:e.jsx(t,{title:"Menu item",label:"New"})}),parameters:{chromatic:{pauseAnimationAtEnd:!0}}},a={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"Opens on item hover",children:e.jsxs(n,{tabIndex:0,id:"sub-menu",children:[e.jsx(t,{title:"Sub menu item 1",onClick:()=>alert("clicked on sub menu item 1")}),e.jsx(t,{title:"Sub menu item 2",onClick:()=>alert("clicked on sub menu item 2")}),e.jsx(t,{title:"Sub menu item 3",onClick:()=>alert("clicked on sub menu item 3")})]})}),e.jsx(t,{title:"Opens on icon hover",splitMenuItem:!0,onClick:()=>alert("clicked on menu item"),children:e.jsxs(n,{tabIndex:0,id:"sub-menu",children:[e.jsx(t,{title:"Sub menu item 1",onClick:()=>alert("clicked on sub menu item 1")}),e.jsx(t,{title:"Sub menu item 2",onClick:()=>alert("clicked on sub menu item 2")}),e.jsx(t,{title:"Sub menu item 3",onClick:()=>alert("clicked on sub menu item 3")})]})})]}),name:"Sub menu"},s={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"short text"}),e.jsx(t,{title:"long text - bla bla bla bla bla bla bla bla bla bla bla"}),e.jsx(t,{title:"long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla",children:e.jsxs(n,{tabIndex:0,id:"sub-menu",children:[e.jsx(t,{title:"Sub menu item 1"}),e.jsx(t,{title:"Sub menu item 2"}),e.jsx(t,{title:"Sub menu item 3"})]})})]})},m={render:()=>e.jsxs(n,{children:[e.jsx(t,{title:"Menu item with tooltip",tooltipContent:"I am tooltip"}),e.jsx(t,{title:"Disabled menu item with tooltip",disabled:!0,disableReason:"I am a disabled tooltip"}),e.jsx(t,{title:"I am a very very very very long text please hover me to get a tooltip"}),e.jsx(t,{title:"Menu item with bottom tooltip",tooltipContent:"I am tooltip",tooltipPosition:"bottom"}),e.jsx(t,{title:"Menu item with icon and tooltip",tooltipContent:"Menu item with icon and tooltip",tooltipPosition:"left",icon:u,iconType:"svg"})]}),name:"Tooltip",parameters:{docs:{liveEdit:{scope:{Activity:u}}}}};var p,M,x;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(M=i.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};var I,h,g;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Regular menu item" />
      <MenuItem title="Selected menu item" selected />
      <MenuItem title="Disabled menu item" disabled />
    </Menu>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var j,S,v;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex gap="large" align="start" justify="start">
      <Flex direction="column" gap="medium">
        <Text>Left icon</Text>
        <Menu>
          <MenuItem title="SVG icon" icon={Activity} />
          <MenuItem title="Font icon" icon="fa fa-star" iconType="font" />
        </Menu>
      </Flex>
      <Flex direction="column" gap="medium">
        <Text>Right icon</Text>
        <Menu>
          <MenuItem title="SVG right icon" rightIcon={Activity} />
          <MenuItem title="Font right icon" rightIcon="fa fa-star" rightIconType="font" />
        </Menu>
      </Flex>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Activity
        }
      }
    }
  }
}`,...(v=(S=l.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,y,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Menu>
      <MenuItem title="Menu item" label="New" />
    </Menu>,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
}`,...(k=(y=r.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var T,C,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(C=a.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var A,E,F;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(E=s.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,R,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(R=m.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const V=["Overview","States","Icons","Label","SubMenu","Overflow","TooltipStory"],Q=Object.freeze(Object.defineProperty({__proto__:null,Icons:l,Label:r,Overflow:s,Overview:i,States:o,SubMenu:a,TooltipStory:m,__namedExportsOrder:V,default:L},Symbol.toStringTag,{value:"Module"}));export{l as I,r as L,Q as M,i as O,o as S,m as T,a,s as b};
