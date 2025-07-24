import{R as e,r as M}from"./index-Hemj67b4.js";import{I as n}from"./Icon-zHybxhV-.js";import{V}from"./index-BA_MN9l1.js";import{S as q}from"./Search-B-rolvjp.js";import{F as N}from"./Flex-DIvs4XZj.js";import{c as $,o as k}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{l}from"./Workspace-BIJf5qCK.js";import{r as Q}from"./createComponentTemplate-Y0VTmW_y.js";const p=$({component:n,iconPropNamesArray:["icon"]}),j=Q(n),D={title:"Components/Icon",component:n,argTypes:p.argTypes,decorators:p.decorators},r={render:j.bind({}),name:"Overview",args:{icon:l},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.createElement(n,{iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},s={render:()=>e.createElement(n,{iconType:"font",iconLabel:"my font awesome start icon",icon:"fa fa-star"})},t={render:()=>e.createElement(n,{iconType:"src",icon:"https://cdn.monday.com/images/apps/custom-icons/Form.svg",iconLabel:"my src awesome icon",useCurrentColor:!0})},c={render:()=>e.createElement("div",{style:{color:"var(--sb-color-sofia_pink)"}},e.createElement(n,{iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16})),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},i={render:()=>{const[m,O]=M.useState("");return e.createElement("section",{style:{width:"100%"}},e.createElement(q,{value:m,onChange:O,placeholder:"Search for icons"}),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"var(--sb-spacing-large)",marginTop:"var(--sb-spacing-large)"}},k.filter(o=>`${o.tags},${o.name}`.toLowerCase().includes(m.toLowerCase())).map(o=>{const z=o.file.split(".")[0],B=V[z];return e.createElement(e.Fragment,null,e.createElement(N,{style:{color:"var(--sb-icon-color)"},gap:"small"},e.createElement(n,{icon:B,iconSize:26}),e.createElement("span",null,o.name)))})))}};var d,u,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: iconTemplate.bind({}),
  name: "Overview",
  args: {
    icon: Bolt
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var y,v,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Bolt
        }
      }
    }
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,S,I;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Icon iconType="font" iconLabel="my font awesome start icon" icon="fa fa-star" />
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var E,C,T;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Icon iconType="src" icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg" iconLabel="my src awesome icon" useCurrentColor />
}`,...(T=(C=t.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var w,L,h;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--sb-color-sofia_pink)"
  }}>
      <Icon iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Bolt
        }
      }
    }
  }
}`,...(h=(L=c.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var x,F,_;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    interface IconMeta {
      name: string;
      tags: string;
      file: string;
    }
    const [query, setQuery] = useState("");
    return <section style={{
      width: "100%"
    }}>
        <Search value={query} onChange={setQuery} placeholder="Search for icons" />
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "var(--sb-spacing-large)",
        marginTop: "var(--sb-spacing-large)"
      }}>
          {iconsMetaData.filter((icon: IconMeta) => {
          return \`\${icon.tags},\${icon.name}\`.toLowerCase().includes(query.toLowerCase());
        }).map((icon: IconMeta) => {
          const fileName = icon.file.split(".")[0] as string;
          const Component = allIcons[fileName as keyof typeof allIcons] as SubIcon;
          return <>
                  <Flex style={{
              color: "var(--sb-icon-color)"
            }} gap="small">
                    <Icon icon={Component} iconSize={26} />
                    <span>{icon.name}</span>
                  </Flex>
                </>;
        })}
        </div>
      </section>;
  }
}`,...(_=(F=i.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};const P=["Overview","VibeIcon","FontIcon","CustomSvg","Color","IconsListStory"],X=Object.freeze(Object.defineProperty({__proto__:null,Color:c,CustomSvg:t,FontIcon:s,IconsListStory:i,Overview:r,VibeIcon:a,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{t as C,s as F,X as I,r as O,a as V,c as a,i as b};
