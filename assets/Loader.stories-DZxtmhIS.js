import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as p}from"./index-CTZeEbLr.js";import{c as A}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{S as I}from"./Search-1tqW-CcQ.js";import{L as r}from"./Loader-CAl16Bkr.js";import{F as a}from"./Flex-Bimzf4jb.js";import{T as n}from"./Text-DVNPP_6L.js";import{D as M}from"./DialogContentContainer-BBTL4acN.js";import{B as W}from"./Button-zprqw9Vf.js";const x=A({component:r}),X={title:"Components/Loader",component:r,argTypes:x.argTypes,decorators:x.decorators},o={render:c=>e.jsx(r,{id:"overview-loader",size:"medium",...c}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},i={render:()=>e.jsxs(a,{align:"start",gap:60,children:[e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Xs"}),e.jsx(r,{id:"loader-xs",size:"xs"})]}),e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Small"}),e.jsx(r,{id:"loader-small",size:"small"})]}),e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Medium"}),e.jsx(r,{id:"loader-medium",size:"medium"})]}),e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Large"}),e.jsx(r,{id:"loader-large",size:"large"})]})]}),name:"Size variants"},d={render:()=>e.jsxs(a,{direction:"row",gap:60,children:[e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Primary"}),e.jsx(r,{id:"loader-primary",size:"medium",color:"primary"})]}),e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Secondary"}),e.jsx(r,{id:"loader-secondary",size:"medium",color:"secondary"})]}),e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Dark"}),e.jsx(r,{id:"loader-dark",size:"medium",color:"dark"})]}),e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"OnPrimary"}),e.jsxs(a,{direction:"row",children:[e.jsx("div",{style:{background:"var(--sb-primary-text-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-primary",size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-negative-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-negative",size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-positive-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-positive",size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-primary-color)",padding:"var(--space-4)"},children:e.jsx(r,{id:"loader-on-primary-color",size:"medium",color:"onPrimary"})})]})]})]}),name:"Color variants"},s={render:()=>e.jsx("div",{style:{color:"var(--color-dark-red)"},children:e.jsx(r,{id:"loader-custom-color",size:"medium"})}),name:"Custom colors"},t={render:()=>e.jsxs(a,{direction:"row",gap:"large",children:[e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"Casual"}),e.jsx("div",{children:e.jsx(r,{id:"loader-casual",size:"medium"})})]}),e.jsxs(a,{direction:"column",gap:"small",children:[e.jsx(n,{type:"text1",weight:"medium",children:"With background"}),e.jsx("div",{children:e.jsx(r,{id:"loader-with-background",size:"medium",hasBackground:!0})})]})]}),name:"Visual variants"},l={render:()=>e.jsx(M,{children:e.jsx(I,{loading:!0,placeholder:"Board name"})}),parameters:{chromatic:{pauseAnimationAtEnd:!0}},name:"Loader in text field"},m={render:()=>{const[c,u]=p.useState(!1),_=p.useCallback(()=>{u(!0)},[u]);return e.jsx(W,{loading:c,onClick:_,children:"Click here for loading"})},name:"Loader in button"};var g,h,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: LoaderProps) => <Loader id="overview-loader" size="medium" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,j,L;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex align="start" gap={60}>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Xs
        </Text>
        <Loader id="loader-xs" size="xs" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Small
        </Text>
        <Loader id="loader-small" size="small" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Medium
        </Text>
        <Loader id="loader-medium" size="medium" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Large
        </Text>
        <Loader id="loader-large" size="large" />
      </Flex>
    </Flex>,
  name: "Size variants"
}`,...(L=(j=i.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var z,w,F;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap={60}>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Primary
        </Text>
        <Loader id="loader-primary" size="medium" color="primary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Secondary
        </Text>
        <Loader id="loader-secondary" size="medium" color="secondary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Dark
        </Text>
        <Loader id="loader-dark" size="medium" color="dark" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          OnPrimary
        </Text>
        <Flex direction="row">
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
        </Flex>
      </Flex>
    </Flex>,
  name: "Color variants"
}`,...(F=(w=d.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var b,k,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--color-dark-red)"
  }}>
      <Loader id="loader-custom-color" size="medium" />
    </div>,
  name: "Custom colors"
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var S,T,f;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap="large">
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Casual
        </Text>
        <div>
          <Loader id="loader-casual" size="medium" />
        </div>
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          With background
        </Text>
        <div>
          <Loader id="loader-with-background" size="medium" hasBackground />
        </div>
      </Flex>
    </Flex>,
  name: "Visual variants"
}`,...(f=(T=t.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var P,V,B;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <DialogContentContainer>
      <Search loading placeholder="Board name" />
    </DialogContentContainer>,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  },
  name: "Loader in text field"
}`,...(B=(V=l.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var E,O,D;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const R=["Overview","SizeVariants","ColorVariants","CustomColors","VisualVariants","LoaderInTextField","LoaderInButton"],Z=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:d,CustomColors:s,LoaderInButton:m,LoaderInTextField:l,Overview:o,SizeVariants:i,VisualVariants:t,__namedExportsOrder:R,default:X},Symbol.toStringTag,{value:"Module"}));export{d as C,Z as L,o as O,i as S,t as V,s as a,l as b,m as c};
