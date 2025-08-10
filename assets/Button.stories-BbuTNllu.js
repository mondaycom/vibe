import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as y}from"./index-Hemj67b4.js";import{c as ne}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";import{B as r}from"./Button-DCp_JBfk.js";import{T as g}from"./Text-eVptYCOt.js";import{r as oe}from"./createComponentTemplate-Y0VTmW_y.js";import{r as h}from"./Calendar-BX7mDXzx.js";import{r as v}from"./Check-B_icfwyn.js";import{i as S}from"./index-CUPFiJE2.js";import{r as b}from"./Remove-C7LZQ9Te.js";const j=ne({component:r,iconPropNamesArray:["leftIcon","rightIcon","successIcon"],actionPropsArray:["onClick"]}),te={title:"Components/Button",component:r,argTypes:j.argTypes,decorators:j.decorators},se=oe(r),o={render:se.bind({}),args:{children:"Button"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Primary"}),e.jsx(r,{kind:"secondary",children:"Secondary"}),e.jsx(r,{kind:"tertiary",children:"Tertiary"})]}),name:"Button kinds"},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"large",children:"Large"}),e.jsx(r,{size:"medium",children:"Medium"}),e.jsx(r,{size:"small",children:"Small"})]})},a={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{disabled:!0,children:"Primary"}),e.jsx(r,{kind:"secondary",disabled:!0,children:"Secondary"}),e.jsx(r,{kind:"tertiary",disabled:!0,children:"Tertiary"})]})},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"Regular"}),e.jsx(r,{active:!0,children:"Active"})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{color:"positive",children:"Positive"}),e.jsx(r,{color:"negative",children:"Negative"})]}),name:"Positive and Negative"},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{rightIcon:h,children:"Right icon"}),e.jsx(r,{leftIcon:h,children:"Left icon"})]}),parameters:{docs:{liveEdit:{scope:{Calendar:h}}}}},l={render:()=>{const[B,n]=y.useState(!1),x=y.useCallback(()=>{n(!0)},[n]);return e.jsx(r,{loading:B,onClick:x,children:"Click here for loading"})},name:"Loading state"},m={render:()=>{const[B,n]=y.useState(!1),x=y.useCallback(()=>{n(!0)},[n]);return e.jsx(r,{success:B,onClick:x,successIcon:v,successText:"Success",children:"Click here for success"})},parameters:{docs:{liveEdit:{scope:{Check:v}}}},name:"Success state"},u={render:()=>e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{type:g.types.TEXT1,style:{marginBottom:"var(--sb-spacing-small)"},children:"Regular"}),e.jsxs("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"},children:[e.jsx(r,{color:"on-primary-color",marginRight:!0,children:"Primary on color"}),e.jsx(r,{color:"on-primary-color",kind:"secondary",marginRight:!0,children:"Secondary on color"}),e.jsx(r,{color:"on-primary-color",kind:"tertiary",children:"Tertiary on color"})]}),e.jsx("br",{}),e.jsx(g,{type:g.types.TEXT1,style:{marginBottom:"var(--sb-spacing-small)"},children:"Disabled"}),e.jsxs("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"},children:[e.jsx(r,{color:"on-primary-color",disabled:!0,marginRight:!0,children:"Primary on color"}),e.jsx(r,{color:"on-primary-color",disabled:!0,marginRight:!0,kind:"secondary",children:"Secondary on color"}),e.jsx(r,{color:"on-primary-color",disabled:!0,kind:"tertiary",children:"Tertiary on color"})]})]})}),name:"On color states"},p={render:()=>e.jsxs("div",{children:[e.jsx(r,{kind:"secondary",size:"small",ariaLabel:"decrease zoom level",rightFlat:!0,children:e.jsx(b,{})}),e.jsx(r,{kind:"secondary",size:"small",ariaLabel:"increase zoom level",leftFlat:!0,children:e.jsx(S,{})})]}),parameters:{docs:{liveEdit:{scope:{Remove:b,Add:S}}}},name:"Adjacent buttons"};var k,f,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: buttonTemplate.bind({}),
  args: {
    children: "Button"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(C=(f=o.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var T,P,R;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
      <Button>Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="tertiary">Tertiary</Button>
    </>,
  name: "Button kinds"
}`,...(R=(P=t.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var z,E,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </>
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var A,I,F;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <>
      <Button disabled>Primary</Button>
      <Button kind="secondary" disabled>
        Secondary
      </Button>
      <Button kind="tertiary" disabled>
        Tertiary
      </Button>
    </>
}`,...(F=(I=a.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var O,D,N;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <>
      <Button>Regular</Button>
      <Button active>Active</Button>
    </>
}`,...(N=(D=c.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,M,X;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Button color="positive">Positive</Button>
      <Button color="negative">Negative</Button>
    </>,
  name: "Positive and Negative"
}`,...(X=(M=i.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var $,w,K;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <>
      <Button rightIcon={Calendar}>Right icon</Button>
      <Button leftIcon={Calendar}>Left icon</Button>
    </>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Calendar
        }
      }
    }
  }
}`,...(K=(w=d.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var q,G,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);
    return <Button loading={loading} onClick={onClick}>
        Click here for loading
      </Button>;
  },
  name: "Loading state"
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [success, setSuccess] = useState(false);
    const onClick = useCallback(() => {
      setSuccess(true);
    }, [setSuccess]);
    return <Button success={success} onClick={onClick} successIcon={Check} successText="Success">
        Click here for success
      </Button>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Check
        }
      }
    }
  },
  name: "Success state"
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
        <Text type={Text.types.TEXT1} style={{
        marginBottom: "var(--sb-spacing-small)"
      }}>
          Regular
        </Text>
        <div style={{
        backgroundColor: "var(--sb-primary-color)",
        padding: "16px"
      }}>
          <Button color="on-primary-color" marginRight>
            Primary on color
          </Button>
          <Button color="on-primary-color" kind="secondary" marginRight>
            Secondary on color
          </Button>
          <Button color="on-primary-color" kind="tertiary">
            Tertiary on color
          </Button>
        </div>
        <br />
        <Text type={Text.types.TEXT1} style={{
        marginBottom: "var(--sb-spacing-small)"
      }}>
          Disabled
        </Text>
        <div style={{
        backgroundColor: "var(--sb-primary-color)",
        padding: "16px"
      }}>
          <Button color="on-primary-color" disabled marginRight>
            Primary on color
          </Button>
          <Button color="on-primary-color" disabled marginRight kind="secondary">
            Secondary on color
          </Button>
          <Button color="on-primary-color" disabled kind="tertiary">
            Tertiary on color
          </Button>
        </div>
      </div>
    </>,
  name: "On color states"
}`,...(Y=(W=u.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div>
      <Button kind="secondary" size="small" ariaLabel="decrease zoom level" rightFlat>
        <Remove />
      </Button>
      <Button kind="secondary" size="small" ariaLabel="increase zoom level" leftFlat>
        <Add />
      </Button>
    </div>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Remove,
          Add
        }
      }
    }
  },
  name: "Adjacent buttons"
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ae=["Overview","ButtonKinds","Sizes","Disabled","States","PositiveAndNegative","Icons","LoadingState","SuccessState","OnColorStates","AdjacentButtons"],xe=Object.freeze(Object.defineProperty({__proto__:null,AdjacentButtons:p,ButtonKinds:t,Disabled:a,Icons:d,LoadingState:l,OnColorStates:u,Overview:o,PositiveAndNegative:i,Sizes:s,States:c,SuccessState:m,__namedExportsOrder:ae,default:te},Symbol.toStringTag,{value:"Module"}));export{p as A,xe as B,a as D,d as I,l as L,o as O,i as P,s as S,t as a,c as b,m as c,u as d};
