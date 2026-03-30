import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as M}from"./index-CTZeEbLr.js";import{V as L}from"./index-D1D0uiJ1.js";import{c as V,i as q}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{I as o}from"./Icon-BxXgVPAg.js";import{B as l}from"./Workspace-BRy0vdK8.js";import{r as N}from"./createComponentTemplate-B08h-OOW.js";import{S as $}from"./Search-Bllv1uG6.js";import{F as k}from"./Flex-7H_pA1dJ.js";const p=V({component:o,iconPropNamesArray:["icon"]}),D=N(o),Q={title:"Components/Icon",component:o,argTypes:p.argTypes,decorators:p.decorators},r={render:D.bind({}),name:"Overview",args:{id:"overview-icon",icon:l},parameters:{docs:{liveEdit:{isEnabled:!1}}}},s={render:()=>e.jsx(o,{id:"vibe-icon",type:"svg",icon:l,label:"my bolt svg icon",size:16}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},a={render:()=>e.jsx(o,{id:"font-icon",type:"font",label:"my font awesome start icon",icon:"fa fa-star"})},t={render:()=>e.jsx(o,{id:"custom-svg-icon",type:"src",icon:"https://cdn.monday.com/images/apps/custom-icons/Form.svg",label:"my src awesome icon",size:20,useCurrentColor:!0})},c={render:()=>e.jsx("div",{style:{color:"var(--sb-color-sofia_pink)"},children:e.jsx(o,{id:"colored-icon",type:"svg",icon:l,label:"my bolt svg icon",size:16})}),parameters:{docs:{liveEdit:{scope:{Bolt:l}}}}},i={render:()=>{const[m,_]=M.useState("");return e.jsxs("section",{style:{width:"100%"},children:[e.jsx($,{value:m,onChange:_,placeholder:"Search for icons"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"var(--sb-spacing-large)",marginTop:"var(--sb-spacing-large)"},children:q.filter(n=>`${n.tags},${n.name}`.toLowerCase().includes(m.toLowerCase())).map(n=>{const O=n.file.split(".")[0],B=L[O];return e.jsx(e.Fragment,{children:e.jsxs(k,{style:{color:"var(--sb-icon-color)"},gap:"small",children:[e.jsx(o,{icon:B,size:26}),e.jsx("span",{children:n.name})]})})})})]})}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
  render: () => <Icon id="vibe-icon" type="svg" icon={Bolt} label="my bolt svg icon" size={16} />,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Bolt
        }
      }
    }
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,x,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Icon id="font-icon" type="font" label="my font awesome start icon" icon="fa fa-star" />
}`,...(I=(x=a.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var S,C,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Icon id="custom-svg-icon" type="src" icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg" label="my src awesome icon" size={20} useCurrentColor />
}`,...(h=(C=t.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var j,w,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--sb-color-sofia_pink)"
  }}>
      <Icon id="colored-icon" type="svg" icon={Bolt} label="my bolt svg icon" size={16} />
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
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var F,z,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
                    <Icon icon={Component} size={26} />
                    <span>{icon.name}</span>
                  </Flex>
                </>;
        })}
        </div>
      </section>;
  }
}`,...(T=(z=i.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const P=["Overview","VibeIcon","FontIcon","CustomSvg","Color","IconsListStory"],Y=Object.freeze(Object.defineProperty({__proto__:null,Color:c,CustomSvg:t,FontIcon:a,IconsListStory:i,Overview:r,VibeIcon:s,__namedExportsOrder:P,default:Q},Symbol.toStringTag,{value:"Module"}));export{t as C,a as F,Y as I,r as O,s as V,c as a,i as b};
