import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as _}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{r as N,B as l}from"./index-BVKo2bYj.js";import{j as m,d,i as x}from"./Workspace-CefzN9Lt.js";import{a as t,B as r}from"./BreadcrumbItem-C7-4QTUT.js";import{B as C,a as p}from"./BreadcrumbMenuItem-tQnXur3p.js";import{F as O}from"./Flex-Bimzf4jb.js";import{A as P}from"./Avatar-CwVuOGB7.js";import{T as R}from"./Text-DVNPP_6L.js";const B=""+new URL("person3-D84NPWTh.png",import.meta.url).href,D="_list_1rdx3_1",b={list:D},I=_({component:t}),z={title:"Components/BreadcrumbsBar/BreadcrumbsBar",component:t,argTypes:{...I.argTypes,children:{description:"Breadcrumb item, each containing text and an optional icon, or a BreadcrumbMenu",control:"object",table:{type:{summary:"(BreadcrumbItemProps | BreadcrumbMenuProps)[]",detail:`{
            text: string;
            icon?: React.ReactNode;
            children?: BreadcrumbMenuItemProps[];
          }[]`},defaultValue:{summary:'[ { text: "Workspace", icon: <IconName /> } ]'}}}},decorators:I.decorators,parameters:{docs:{transformSource:a=>a.replace(/icon:\s*function[^{]+\{[^}]+\}/g,"icon: <Icon />"),liveEdit:{scope:{Board:d,Group:m,Item:N}}}}},n={render:a=>e.jsx(t,{...a,children:a.children&&a.children.map(u=>e.jsx(r,{text:u.text,icon:u.icon},u.text))}),args:{children:[{text:"Workspace",icon:x},{text:"Folder",icon:l},{text:"Board",icon:d},{text:"Group",icon:m}]},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsxs(t,{type:"indication",children:[e.jsx(r,{text:"Workspace",isCurrent:!0}),e.jsx(r,{text:"Folder"}),e.jsx(r,{text:"Board"}),e.jsx(r,{text:"Group"})]}),name:"Text only"},o={render:()=>e.jsxs(t,{type:"navigation",children:[e.jsx(r,{text:"Workspace",icon:x,isCurrent:!0}),e.jsx(r,{text:"Folder",icon:l}),e.jsx(r,{text:"Board",icon:d}),e.jsx(r,{text:"Group",icon:m})]}),parameters:{docs:{liveEdit:{scope:{Workspace:x,Folder:l}}}},name:"With icons"},c={render:()=>e.jsxs(O,{gap:"small",children:[e.jsx(P,{size:"medium",src:B,type:"img"}),e.jsxs("div",{className:b.list,children:[e.jsx(R,{type:"text1",weight:"medium",children:"Rotem Dekel"}),e.jsxs(t,{type:"navigation",children:[e.jsx(r,{text:"User research",icon:d}),e.jsx(r,{text:"Video sessions",icon:m})]})]})]}),parameters:{docs:{liveEdit:{scope:{styles:b,person3:B}}}},name:"Navigatable breadcrumbs"},i={render:()=>e.jsxs(t,{type:"navigation",children:[e.jsx(r,{text:"Board",icon:d}),e.jsx(r,{text:"Group",icon:m}),e.jsxs(C,{children:[e.jsx(p,{title:"Item 1",onClick:()=>alert("Item 1 clicked")}),e.jsx(p,{title:"Item 2",link:"https://www.monday.com"}),e.jsx(p,{title:"Item 3",link:"https://www.monday.com"})]}),e.jsx(r,{text:"My Item",icon:N,isCurrent:!0})]})};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: BreadcrumbBarProps) => <BreadcrumbsBar {...args}>
      {args.children && (args.children as BreadcrumbItemProps[]).map(item => <BreadcrumbItem key={item.text} text={item.text} icon={item.icon} />)}
    </BreadcrumbsBar>,
  args: {
    children: [{
      text: "Workspace",
      icon: Workspace
    }, {
      text: "Folder",
      icon: Folder
    }, {
      text: "Board",
      icon: Board
    }, {
      text: "Group",
      icon: Group
    }]
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,v,k;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <BreadcrumbsBar type="indication">
      <BreadcrumbItem text="Workspace" isCurrent />
      <BreadcrumbItem text="Folder" />
      <BreadcrumbItem text="Board" />
      <BreadcrumbItem text="Group" />
    </BreadcrumbsBar>,
  name: "Text only"
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var W,f,w;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <BreadcrumbsBar type="navigation">
      <BreadcrumbItem text="Workspace" icon={Workspace} isCurrent />
      <BreadcrumbItem text="Folder" icon={Folder} />
      <BreadcrumbItem text="Board" icon={Board} />
      <BreadcrumbItem text="Group" icon={Group} />
    </BreadcrumbsBar>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Workspace,
          Folder
        }
      }
    }
  },
  name: "With icons"
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var M,F,G;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Flex gap="small">
      <Avatar size="medium" src={person3} type="img" />
      <div className={styles.list}>
        <Text type="text1" weight="medium">
          Rotem Dekel
        </Text>
        <BreadcrumbsBar type="navigation">
          <BreadcrumbItem text="User research" icon={Board} />
          <BreadcrumbItem text="Video sessions" icon={Group} />
        </BreadcrumbsBar>
      </div>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          styles,
          person3
        }
      }
    }
  },
  name: "Navigatable breadcrumbs"
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var T,S,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <BreadcrumbsBar type="navigation">
      <BreadcrumbItem text="Board" icon={Board} />
      <BreadcrumbItem text="Group" icon={Group} />
      <BreadcrumbMenu>
        <BreadcrumbMenuItem title="Item 1" onClick={() => alert("Item 1 clicked")} />
        <BreadcrumbMenuItem title="Item 2" link="https://www.monday.com" />
        <BreadcrumbMenuItem title="Item 3" link="https://www.monday.com" />
      </BreadcrumbMenu>
      <BreadcrumbItem text="My Item" icon={Item} isCurrent />
    </BreadcrumbsBar>
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const A=["Overview","TextOnly","WithIcons","NavigatableBreadcrumbs","WithBreadcrumbMenu"],X=Object.freeze(Object.defineProperty({__proto__:null,NavigatableBreadcrumbs:c,Overview:n,TextOnly:s,WithBreadcrumbMenu:i,WithIcons:o,__namedExportsOrder:A,default:z},Symbol.toStringTag,{value:"Module"}));export{X as B,c as N,n as O,s as T,o as W,i as a,B as p,b as s};
