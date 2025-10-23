import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as B}from"./index-CTZeEbLr.js";import{I as o}from"./Icon-BKjd_X8Z.js";import{V as F}from"./index-CkcRWdy2.js";import{o as D}from"./iconsMetaData-DNlBVpvD.js";import{c as M}from"./createStoryMetaSettingsDecorator-K9sSFMcX.js";import{l}from"./Workspace-DtDO7RvQ.js";function V(m){return n=>e.jsx(m,Object.assign({},n))}const p=M({component:o,iconPropNamesArray:["icon"]}),q=V(o),N={title:"Components/Icon",component:o,argTypes:p.argTypes,decorators:p.decorators},r={render:q.bind({}),name:"Overview",args:{id:"overview-icon",icon:l},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsx(o,{id:"vibe-icon",iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},a={render:()=>e.jsx(o,{id:"font-icon",iconType:"font",iconLabel:"my font awesome start icon",icon:"fa fa-star"})},c={render:()=>e.jsx(o,{id:"custom-svg-icon",iconType:"src",icon:"https://cdn.monday.com/images/apps/custom-icons/Form.svg",iconLabel:"my src awesome icon",useCurrentColor:!0})},i={render:()=>e.jsx("div",{style:{color:"var(--sb-color-sofia_pink)"},children:e.jsx(o,{id:"colored-icon",iconType:"svg",icon:l,iconLabel:"my bolt svg icon",iconSize:16})}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},t={render:()=>{const[m]=B.useState("");return e.jsx("section",{style:{width:"100%"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"var(--sb-spacing-large)",marginTop:"var(--sb-spacing-large)"},children:D.filter(n=>`${n.tags},${n.name}`.toLowerCase().includes(m.toLowerCase())).map(n=>{const _=n.file.split(".")[0],z=F[_];return e.jsx(e.Fragment,{children:e.jsxs("div",{style:{color:"var(--sb-icon-color)",display:"flex",flexDirection:"row",gap:"var(--space-8)"},children:[e.jsx(o,{icon:z,iconSize:26}),e.jsx("span",{children:n.name})]})})})})})}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,f,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,S,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Icon id="font-icon" iconType="font" iconLabel="my font awesome start icon" icon="fa fa-star" />
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,C,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Icon id="custom-svg-icon" iconType="src" icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg" iconLabel="my src awesome icon" useCurrentColor />
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,j,h;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var L,O,E;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    interface IconMeta {
      name: string;
      tags: string;
      file: string;
    }
    const [query] = useState("");
    return <section style={{
      width: "100%"
    }}>
        {/* TODO: use Search component again */}
        {/* <Search value={query} onChange={setQuery} placeholder="Search for icons" /> */}
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
                  {/* TODO: replace with Flex component */}
                  <div style={{
              color: "var(--sb-icon-color)",
              display: "flex",
              flexDirection: "row",
              gap: "var(--space-8)"
            }}>
                    <Icon icon={Component} iconSize={26} />
                    <span>{icon.name}</span>
                  </div>
                </>;
        })}
        </div>
      </section>;
  }
}`,...(E=(O=t.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const $=["Overview","VibeIcon","FontIcon","CustomSvg","Color","IconsListStory"],J=Object.freeze(Object.defineProperty({__proto__:null,Color:i,CustomSvg:c,FontIcon:a,IconsListStory:t,Overview:r,VibeIcon:s,__namedExportsOrder:$,default:N},Symbol.toStringTag,{value:"Module"}));export{c as C,a as F,J as I,r as O,s as V,i as a,t as b};
