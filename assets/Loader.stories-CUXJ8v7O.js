import{R as e,r as p}from"./index-Hemj67b4.js";import{L as r}from"./Loader-DF-6VJjt.js";import{S as I}from"./Search-CBvUGcBN.js";import{c as M}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as a}from"./Flex-DIvs4XZj.js";import{T as t}from"./Text-B2fubIt7.js";import{D as j}from"./DialogContentContainer-CjdfO6CD.js";import{B as R}from"./Button-DEM-Hn8V.js";const g=M({component:r}),W={title:"Components/Loader",component:r,argTypes:g.argTypes,decorators:g.decorators},n={render:d=>e.createElement(r,{size:"medium",...d}),parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement(a,{align:"start",gap:60},e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Xs"),e.createElement(r,{size:"xs"})),e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Small"),e.createElement(r,{size:"small"})),e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Medium"),e.createElement(r,{size:"medium"})),e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Large"),e.createElement(r,{size:"large"}))),name:"Size variants"},i={render:()=>e.createElement(a,{direction:"row",gap:60},e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Primary"),e.createElement(r,{size:"medium",color:"primary"})),e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Secondary"),e.createElement(r,{size:"medium",color:"secondary"})),e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Dark"),e.createElement(r,{size:"medium",color:"dark"})),e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"OnPrimary"),e.createElement(a,{direction:"row"},e.createElement("div",{style:{background:"var(--sb-primary-text-color)",padding:"var(--space-4)"}},e.createElement(r,{size:"medium",color:"onPrimary"})),e.createElement("div",{style:{background:"var(--sb-negative-color)",padding:"var(--space-4)"}},e.createElement(r,{size:"medium",color:"onPrimary"})),e.createElement("div",{style:{background:"var(--sb-positive-color)",padding:"var(--space-4)"}},e.createElement(r,{size:"medium",color:"onPrimary"})),e.createElement("div",{style:{background:"var(--sb-primary-color)",padding:"var(--space-4)"}},e.createElement(r,{size:"medium",color:"onPrimary"}))))),name:"Color variants"},m={render:()=>e.createElement("div",{style:{color:"var(--color-dark-red)"}},e.createElement(r,{size:"medium"})),name:"Custom colors"},l={render:()=>e.createElement(a,{direction:"row",gap:"large"},e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"Casual"),e.createElement("div",null,e.createElement(r,{size:"medium"}))),e.createElement(a,{direction:"column",gap:"small"},e.createElement(t,{type:"text1",weight:"medium"},"With background"),e.createElement("div",null,e.createElement(r,{size:"medium",hasBackground:!0})))),name:"Visual variants"},s={render:()=>e.createElement(j,null,e.createElement(I,{loading:!0,placeholder:"Board name"})),parameters:{chromatic:{pauseAnimationAtEnd:!0}},name:"Loader in text field"},c={render:()=>{const[d,u]=p.useState(!1),A=p.useCallback(()=>{u(!0)},[u]);return e.createElement(R,{loading:d,onClick:A},"Click here for loading")},name:"Loader in button"};var x,y,E;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: LoaderProps) => <Loader size="medium" {...args} />,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(E=(y=n.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var v,L,z;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(z=(L=o.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var h,F,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(F=i.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var w,C,S;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    color: "var(--color-dark-red)"
  }}>
      <Loader size="medium" />
    </div>,
  name: "Custom colors"
}`,...(S=(C=m.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var T,k,f;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(f=(k=l.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var P,V,B;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <DialogContentContainer>
      <Search loading placeholder="Board name" />
    </DialogContentContainer>,
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  },
  name: "Loader in text field"
}`,...(B=(V=s.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var O,D,_;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const X=["Overview","SizeVariants","ColorVariants","CustomColors","VisualVariants","LoaderInTextField","LoaderInButton"],Y=Object.freeze(Object.defineProperty({__proto__:null,ColorVariants:i,CustomColors:m,LoaderInButton:c,LoaderInTextField:s,Overview:n,SizeVariants:o,VisualVariants:l,__namedExportsOrder:X,default:W},Symbol.toStringTag,{value:"Module"}));export{i as C,Y as L,n as O,o as S,l as V,m as a,s as b,c};
