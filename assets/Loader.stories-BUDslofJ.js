import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as c}from"./index-CTZeEbLr.js";import{L as r}from"./Loader-DOG4Zj1G.js";import{c as B}from"./createStoryMetaSettingsDecorator-K9sSFMcX.js";import{B as O}from"./Button-H2uVdl--.js";const m=B({component:r}),E={title:"Components/Loader",component:r,argTypes:m.argTypes,decorators:m.decorators},a={render:l=>e.jsx(r,{id:"overview-loader",size:"medium",...l}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"60px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Xs",e.jsx(r,{id:"loader-xs",size:"xs"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Small",e.jsx(r,{id:"loader-small",size:"small"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Medium",e.jsx(r,{id:"loader-medium",size:"medium"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Large",e.jsx(r,{id:"loader-large",size:"large"})]})]}),name:"Size variants"},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"60px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Primary",e.jsx(r,{id:"loader-primary",size:"medium",color:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Secondary",e.jsx(r,{id:"loader-secondary",size:"medium",color:"secondary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Dark",e.jsx(r,{id:"loader-dark",size:"medium",color:"dark"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["OnPrimary",e.jsxs("div",{style:{display:"flex"},children:[e.jsx("div",{style:{background:"var(--sb-primary-text-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-primary",size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-negative-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-negative",size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-positive-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-positive",size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-primary-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-primary-color",size:"medium",color:"onPrimary"})})]})]})]}),name:"Color variants"},s={render:()=>e.jsx("div",{style:{color:"var(--color-dark-red)"},children:e.jsx(r,{id:"loader-custom-color",size:"medium"})}),name:"Custom colors"},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"60px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["Casual",e.jsx("div",{children:e.jsx(r,{id:"loader-casual",size:"medium"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-24)",alignItems:"center"},children:["With background",e.jsx("div",{children:e.jsx(r,{id:"loader-with-background",size:"medium",hasBackground:!0})})]})]}),name:"Visual variants"},d={render:()=>{const[l,t]=c.useState(!1),V=c.useCallback(()=>{t(!0)},[t]);return e.jsx(O,{loading:l,onClick:V,children:"Click here for loading"})},name:"Loader in button"};var p,v,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: LoaderProps) => <Loader id="overview-loader" size="medium" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,x,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "60px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Xs
        <Loader id="loader-xs" size="xs" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Small
        <Loader id="loader-small" size="small" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Medium
        <Loader id="loader-medium" size="medium" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Large
        <Loader id="loader-large" size="large" />
      </div>
    </div>,
  name: "Size variants"
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,j,z;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "60px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Primary
        <Loader id="loader-primary" size="medium" color="primary" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Secondary
        <Loader id="loader-secondary" size="medium" color="secondary" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Dark
        <Loader id="loader-dark" size="medium" color="dark" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        OnPrimary
        <div style={{
        display: "flex"
      }}>
          <div style={{
          background: "var(--sb-primary-text-color)",
          padding: "var(--space-4)"
        }}>
            <Loader id="loader-on-primary" size="medium" color="onPrimary" />
          </div>
          <div style={{
          background: "var(--sb-negative-color)",
          padding: "var(--space-4)"
        }}>
            <Loader id="loader-on-negative" size="medium" color="onPrimary" />
          </div>
          <div style={{
          background: "var(--sb-positive-color)",
          padding: "var(--space-4)"
        }}>
            <Loader id="loader-on-positive" size="medium" color="onPrimary" />
          </div>
          <div style={{
          background: "var(--sb-primary-color)",
          padding: "var(--space-4)"
        }}>
            <Loader id="loader-on-primary-color" size="medium" color="onPrimary" />
          </div>
        </div>
      </div>
    </div>,
  name: "Color variants"
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var L,b,h;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--color-dark-red)"
  }}>
      <Loader id="loader-custom-color" size="medium" />
    </div>,
  name: "Custom colors"
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,D,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "60px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        Casual
        <div>
          <Loader id="loader-casual" size="medium" />
        </div>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-24)",
      alignItems: "center"
    }}>
        With background
        <div>
          <Loader id="loader-with-background" size="medium" hasBackground />
        </div>
      </div>
    </div>,
  name: "Visual variants"
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var C,I,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);
    return <Button loading={loading} onClick={onClick}>
        Click here for loading
      </Button>;
  },
  name: "Loader in button"
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const _=["Overview","SizeVariants","ColorVariants","CustomColors","VisualVariants","LoaderInButton"],R=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:i,CustomColors:s,LoaderInButton:d,Overview:a,SizeVariants:n,VisualVariants:o,__namedExportsOrder:_,default:E},Symbol.toStringTag,{value:"Module"}));export{i as C,R as L,a as O,n as S,o as V,s as a,d as b};
