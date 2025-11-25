import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as B}from"./index-CTZeEbLr.js";import{V as M}from"./index-BVKo2bYj.js";import{c as V,o as q}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{l}from"./Workspace-CefzN9Lt.js";import{r as N}from"./createComponentTemplate-B08h-OOW.js";import{S as $}from"./Search-1tqW-CcQ.js";import{I as o}from"./Icon-CMBPUOKb.js";import{F as k}from"./Flex-Bimzf4jb.js";const p=V({component:o,iconPropNamesArray:["icon"]}),Q=N(o),D={title:"Components/Icon",component:o,argTypes:p.argTypes,decorators:p.decorators},r={render:Q.bind({}),name:"Overview",args:{id:"overview-icon",icon:l},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsx(o,{id:"vibe-icon",iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},a={render:()=>e.jsx(o,{id:"font-icon",iconType:"font",iconLabel:"my font awesome start icon",icon:"fa fa-star"})},c={render:()=>e.jsx(o,{id:"custom-svg-icon",iconType:"src",icon:"https://cdn.monday.com/images/apps/custom-icons/Form.svg",iconLabel:"my src awesome icon",useCurrentColor:!0})},i={render:()=>e.jsx("div",{style:{color:"var(--sb-color-sofia_pink)"},children:e.jsx(o,{id:"colored-icon",iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16})}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},t={render:()=>{const[m,_]=B.useState("");return e.jsxs("section",{style:{width:"100%"},children:[e.jsx($,{value:m,onChange:_,placeholder:"Search for icons"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"var(--sb-spacing-large)",marginTop:"var(--sb-spacing-large)"},children:q.filter(n=>`${n.tags},${n.name}`.toLowerCase().includes(m.toLowerCase())).map(n=>{const O=n.file.split(".")[0],z=M[O];return e.jsx(e.Fragment,{children:e.jsxs(k,{style:{color:"var(--sb-icon-color)"},gap:"small",children:[e.jsx(o,{icon:z,iconSize:26}),e.jsx("span",{children:n.name})]})})})})]})}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: iconTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-icon",
    icon: Bolt
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,y,f;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Icon id="vibe-icon" iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Bolt
        }
      }
    }
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,S,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Icon id="font-icon" iconType="font" iconLabel="my font awesome start icon" icon="fa fa-star" />
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,C,h;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Icon id="custom-svg-icon" iconType="src" icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg" iconLabel="my src awesome icon" useCurrentColor />
}`,...(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var T,j,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--sb-color-sofia_pink)"
  }}>
      <Icon id="colored-icon" iconType="svg" icon={Bolt} iconLabel="my bolt svg icon" iconSize={16} />
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
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var L,E,F;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(E=t.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const P=["Overview","VibeIcon","FontIcon","CustomSvg","Color","IconsListStory"],Y=Object.freeze(Object.defineProperty({__proto__:null,Color:i,CustomSvg:c,FontIcon:a,IconsListStory:t,Overview:r,VibeIcon:s,__namedExportsOrder:P,default:D},Symbol.toStringTag,{value:"Module"}));export{c as C,a as F,Y as I,r as O,s as V,i as a,t as b};
