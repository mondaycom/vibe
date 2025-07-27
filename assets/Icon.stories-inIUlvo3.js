import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as B}from"./index-Hemj67b4.js";import{I as o}from"./Icon-CDdqL_gb.js";import{V as M}from"./index-BA_MN9l1.js";import{S as V}from"./Search-D8FmmD_W.js";import{F as q}from"./Flex-Cp1baZ2x.js";import{c as N,o as $}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{l}from"./Workspace-BIJf5qCK.js";import{r as k}from"./createComponentTemplate-Y0VTmW_y.js";const p=N({component:o,iconPropNamesArray:["icon"]}),Q=k(o),D={title:"Components/Icon",component:o,argTypes:p.argTypes,decorators:p.decorators},r={render:Q.bind({}),name:"Overview",args:{icon:l},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsx(o,{iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},a={render:()=>e.jsx(o,{iconType:"font",iconLabel:"my font awesome start icon",icon:"fa fa-star"})},c={render:()=>e.jsx(o,{iconType:"src",icon:"https://cdn.monday.com/images/apps/custom-icons/Form.svg",iconLabel:"my src awesome icon",useCurrentColor:!0})},t={render:()=>e.jsx("div",{style:{color:"var(--sb-color-sofia_pink)"},children:e.jsx(o,{iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16})}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},i={render:()=>{const[m,_]=B.useState("");return e.jsxs("section",{style:{width:"100%"},children:[e.jsx(V,{value:m,onChange:_,placeholder:"Search for icons"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"var(--sb-spacing-large)",marginTop:"var(--sb-spacing-large)"},children:$.filter(n=>`${n.tags},${n.name}`.toLowerCase().includes(m.toLowerCase())).map(n=>{const O=n.file.split(".")[0],z=M[O];return e.jsx(e.Fragment,{children:e.jsxs(q,{style:{color:"var(--sb-icon-color)"},gap:"small",children:[e.jsx(o,{icon:z,iconSize:26}),e.jsx("span",{children:n.name})]})})})})]})}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,v,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,S,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Icon iconType="font" iconLabel="my font awesome start icon" icon="fa fa-star" />
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,C,h;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Icon iconType="src" icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg" iconLabel="my src awesome icon" useCurrentColor />
}`,...(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var T,j,w;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var L,E,F;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(E=i.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const P=["Overview","VibeIcon","FontIcon","CustomSvg","Color","IconsListStory"],Y=Object.freeze(Object.defineProperty({__proto__:null,Color:t,CustomSvg:c,FontIcon:a,IconsListStory:i,Overview:r,VibeIcon:s,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{c as C,a as F,Y as I,r as O,s as V,t as a,i as b};
