import{R as e}from"./index-Hemj67b4.js";import{a as t,B as r}from"./BreadcrumbItem-DybSdVXO.js";import{A as C}from"./Avatar-DumOSK4_.js";import{c as O}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{B as P,a as u}from"./BreadcrumbMenuItem-DFJZ42dV.js";import{v as _,n as p}from"./index-BA_MN9l1.js";import{j as i,d,i as B}from"./Workspace-BIJf5qCK.js";import{F as R}from"./Flex-DIvs4XZj.js";import{T as j}from"./Text-C0CU0_Vh.js";const b=""+new URL("person3-D84NPWTh.png",import.meta.url).href,D="_list_1rdx3_1",x={list:D},I=O({component:t}),z={title:"Components/BreadcrumbsBar/BreadcrumbsBar",component:t,argTypes:{...I.argTypes,children:{description:"Breadcrumb item, each containing text and an optional icon, or a BreadcrumbMenu",control:"object",table:{type:{summary:"(BreadcrumbItemProps | BreadcrumbMenuProps)[]",detail:`{
            text: string;
            icon?: React.ReactNode;
            children?: BreadcrumbMenuItemProps[];
          }[]`},defaultValue:{summary:'[ { text: "Workspace", icon: <IconName /> } ]'}}}},decorators:I.decorators,parameters:{docs:{transformSource:a=>a.replace(/icon:\s*function[^{]+\{[^}]+\}/g,"icon: <Icon />"),liveEdit:{scope:{Board:d,Group:i,Item:_}}}}},n={render:a=>e.createElement(t,{...a},a.children&&a.children.map(l=>e.createElement(r,{key:l.text,text:l.text,icon:l.icon}))),args:{children:[{text:"Workspace",icon:B},{text:"Folder",icon:p},{text:"Board",icon:d},{text:"Group",icon:i}]},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement(t,{type:"indication"},e.createElement(r,{text:"Workspace",isCurrent:!0}),e.createElement(r,{text:"Folder"}),e.createElement(r,{text:"Board"}),e.createElement(r,{text:"Group"})),name:"Text only"},c={render:()=>e.createElement(t,{type:"navigation"},e.createElement(r,{text:"Workspace",icon:B,isCurrent:!0}),e.createElement(r,{text:"Folder",icon:p}),e.createElement(r,{text:"Board",icon:d}),e.createElement(r,{text:"Group",icon:i})),parameters:{docs:{liveEdit:{scope:{Workspace:B,Folder:p}}}},name:"With icons"},s={render:()=>e.createElement(R,{gap:"small"},e.createElement(C,{size:"medium",src:b,type:"img"}),e.createElement("div",{className:x.list},e.createElement(j,{type:"text1",weight:"medium"},"Rotem Dekel"),e.createElement(t,{type:"navigation"},e.createElement(r,{text:"User research",icon:d}),e.createElement(r,{text:"Video sessions",icon:i})))),parameters:{docs:{liveEdit:{scope:{styles:x,person3:b}}}},name:"Navigatable breadcrumbs"},m={render:()=>e.createElement(t,{type:"navigation"},e.createElement(r,{text:"Board",icon:d}),e.createElement(r,{text:"Group",icon:i}),e.createElement(P,null,e.createElement(u,{title:"Item 1",onClick:()=>alert("Item 1 clicked")}),e.createElement(u,{title:"Item 2",link:"https://www.monday.com"}),e.createElement(u,{title:"Item 3",link:"https://www.monday.com"})),e.createElement(r,{text:"My Item",icon:_,isCurrent:!0}))};var E,g,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,h,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <BreadcrumbsBar type="indication">
      <BreadcrumbItem text="Workspace" isCurrent />
      <BreadcrumbItem text="Folder" />
      <BreadcrumbItem text="Board" />
      <BreadcrumbItem text="Group" />
    </BreadcrumbsBar>,
  name: "Text only"
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var W,f,w;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var M,F,G;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(F=s.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var T,S,N;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(S=m.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const A=["Overview","TextOnly","WithIcons","NavigatableBreadcrumbs","WithBreadcrumbMenu"],X=Object.freeze(Object.defineProperty({__proto__:null,NavigatableBreadcrumbs:s,Overview:n,TextOnly:o,WithBreadcrumbMenu:m,WithIcons:c,__namedExportsOrder:A,default:z},Symbol.toStringTag,{value:"Module"}));export{X as B,s as N,n as O,o as T,c as W,m as a,b as p,x as s};
