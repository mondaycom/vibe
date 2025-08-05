import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as x}from"./index-Hemj67b4.js";import{L as r}from"./Loader-DmaXbwBu.js";import{S as A}from"./Search-H_T6nYop.js";import{c as I}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";import{F as n}from"./Flex-2Q04fxOc.js";import{T as a}from"./Text-C9ywLJgn.js";import{D as M}from"./DialogContentContainer-Cj9UqVh2.js";import{B as W}from"./Button-CmXrS9k2.js";const p=I({component:r}),X={title:"Components/Loader",component:r,argTypes:p.argTypes,decorators:p.decorators},i={render:c=>e.jsx(r,{size:"medium",...c}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsxs(n,{align:"start",gap:60,children:[e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Xs"}),e.jsx(r,{size:"xs"})]}),e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Small"}),e.jsx(r,{size:"small"})]}),e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Medium"}),e.jsx(r,{size:"medium"})]}),e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Large"}),e.jsx(r,{size:"large"})]})]}),name:"Size variants"},s={render:()=>e.jsxs(n,{direction:"row",gap:60,children:[e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Primary"}),e.jsx(r,{size:"medium",color:"primary"})]}),e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Secondary"}),e.jsx(r,{size:"medium",color:"secondary"})]}),e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Dark"}),e.jsx(r,{size:"medium",color:"dark"})]}),e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"OnPrimary"}),e.jsxs(n,{direction:"row",children:[e.jsx("div",{style:{background:"var(--sb-primary-text-color)",padding:"var(--space-4)"},children:e.jsx(r,{size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-negative-color)",padding:"var(--space-4)"},children:e.jsx(r,{size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-positive-color)",padding:"var(--space-4)"},children:e.jsx(r,{size:"medium",color:"onPrimary"})}),e.jsx("div",{style:{background:"var(--sb-primary-color)",padding:"var(--space-4)"},children:e.jsx(r,{size:"medium",color:"onPrimary"})})]})]})]}),name:"Color variants"},t={render:()=>e.jsx("div",{style:{color:"var(--color-dark-red)"},children:e.jsx(r,{size:"medium"})}),name:"Custom colors"},d={render:()=>e.jsxs(n,{direction:"row",gap:"large",children:[e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"Casual"}),e.jsx("div",{children:e.jsx(r,{size:"medium"})})]}),e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(a,{type:"text1",weight:"medium",children:"With background"}),e.jsx("div",{children:e.jsx(r,{size:"medium",hasBackground:!0})})]})]}),name:"Visual variants"},l={render:()=>e.jsx(M,{children:e.jsx(A,{loading:!0,placeholder:"Board name"})}),parameters:{chromatic:{pauseAnimationAtEnd:!0}},name:"Loader in text field"},m={render:()=>{const[c,u]=x.useState(!1),_=x.useCallback(()=>{u(!0)},[u]);return e.jsx(W,{loading:c,onClick:_,children:"Click here for loading"})},name:"Loader in button"};var g,h,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: LoaderProps) => <Loader size="medium" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,j,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Flex align="start" gap={60}>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Xs
        </Text>
        <Loader size="xs" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Small
        </Text>
        <Loader size="small" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Medium
        </Text>
        <Loader size="medium" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Large
        </Text>
        <Loader size="large" />
      </Flex>
    </Flex>,
  name: "Size variants"
}`,...(L=(j=o.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var z,F,b;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap={60}>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Primary
        </Text>
        <Loader size="medium" color="primary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Secondary
        </Text>
        <Loader size="medium" color="secondary" />
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Dark
        </Text>
        <Loader size="medium" color="dark" />
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
            <Loader size="medium" color="onPrimary" />
          </div>
          <div style={{
          background: "var(--sb-negative-color)",
          padding: "var(--space-4)"
        }}>
            <Loader size="medium" color="onPrimary" />
          </div>
          <div style={{
          background: "var(--sb-positive-color)",
          padding: "var(--space-4)"
        }}>
            <Loader size="medium" color="onPrimary" />
          </div>
          <div style={{
          background: "var(--sb-primary-color)",
          padding: "var(--space-4)"
        }}>
            <Loader size="medium" color="onPrimary" />
          </div>
        </Flex>
      </Flex>
    </Flex>,
  name: "Color variants"
}`,...(b=(F=s.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var w,C,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--color-dark-red)"
  }}>
      <Loader size="medium" />
    </div>,
  name: "Custom colors"
}`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,k,f;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap="large">
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          Casual
        </Text>
        <div>
          <Loader size="medium" />
        </div>
      </Flex>
      <Flex direction="column" gap="small">
        <Text type="text1" weight="medium">
          With background
        </Text>
        <div>
          <Loader size="medium" hasBackground />
        </div>
      </Flex>
    </Flex>,
  name: "Visual variants"
}`,...(f=(k=d.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var P,V,B;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(D=(O=m.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const R=["Overview","SizeVariants","ColorVariants","CustomColors","VisualVariants","LoaderInTextField","LoaderInButton"],Z=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:s,CustomColors:t,LoaderInButton:m,LoaderInTextField:l,Overview:i,SizeVariants:o,VisualVariants:d,__namedExportsOrder:R,default:X},Symbol.toStringTag,{value:"Module"}));export{s as C,Z as L,i as O,o as S,d as V,t as a,l as b,m as c};
