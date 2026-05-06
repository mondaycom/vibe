import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as p}from"./index-CTZeEbLr.js";import{A as h}from"./index-D1D0uiJ1.js";import{C as v}from"./Calendar-DUM0ORSW.js";import{C as B}from"./Check-BhuJDOHf.js";import{R as x}from"./Remove-BN6wnPjE.js";import{c as ne}from"./createStoryMetaSettingsDecorator-C07DgdqT.js";import{B as r}from"./Button-CAkxRwa_.js";import{r as ae}from"./createComponentTemplate-B08h-OOW.js";import{T as S}from"./Text-Bn4lX0iC.js";const k=ne({component:r,iconPropNamesArray:["leftIcon","rightIcon","successIcon"],actionPropsArray:["onClick"]}),oe={title:"Components/Button",component:r,argTypes:k.argTypes,decorators:k.decorators},te=ae(r),a={render:te.bind({}),args:{id:"overview-button","aria-label":"Button",children:"Button"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"button-kinds-primary","aria-label":"Primary button",children:"Primary"}),e.jsx(r,{id:"button-kinds-secondary","aria-label":"Secondary button",kind:"secondary",children:"Secondary"}),e.jsx(r,{id:"button-kinds-tertiary","aria-label":"Tertiary button",kind:"tertiary",children:"Tertiary"})]}),name:"Button kinds"},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"sizes-large","aria-label":"Large button",size:"large",children:"Large"}),e.jsx(r,{id:"sizes-medium","aria-label":"Medium button",size:"medium",children:"Medium"}),e.jsx(r,{id:"sizes-small","aria-label":"Small button",size:"small",children:"Small"})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"disabled-primary","aria-label":"Primary button disabled",disabled:!0,children:"Primary"}),e.jsx(r,{id:"disabled-secondary","aria-label":"Secondary button disabled",kind:"secondary",disabled:!0,children:"Secondary"}),e.jsx(r,{id:"disabled-tertiary","aria-label":"Tertiary button disabled",kind:"tertiary",disabled:!0,children:"Tertiary"})]})},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"state-regular","aria-label":"Regular button",children:"Regular"}),e.jsx(r,{id:"state-active","aria-label":"Active button",active:!0,children:"Active"})]})},l={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"color-positive","aria-label":"Positive button",color:"positive",children:"Positive"}),e.jsx(r,{id:"color-negative","aria-label":"Negative button",color:"negative",children:"Negative"})]}),name:"Positive and Negative"},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"icons-right",rightIcon:v,"aria-label":"Open calendar on the right icon button",children:"Right icon"}),e.jsx(r,{id:"icons-left",leftIcon:v,"aria-label":"Open calendar on the left icon button",children:"Left icon"})]}),parameters:{docs:{liveEdit:{scope:{Calendar:v}}}}},d={render:()=>{const[y,n]=p.useState(!1),g=p.useCallback(()=>{n(!0)},[n]);return e.jsx(r,{id:"loading-state-button","aria-label":"Start loading",loading:y,onClick:g,children:"Click here for loading"})},name:"Loading state"},u={render:()=>{const[y,n]=p.useState(!1),g=p.useCallback(()=>{n(!0)},[n]);return e.jsx(r,{id:"success-state-button","aria-label":"Trigger success",success:y,onClick:g,successIcon:B,successText:"Success",children:"Click here for success"})},parameters:{docs:{liveEdit:{scope:{Check:B}}}},name:"Success state"},m={render:()=>e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(S,{type:"text1",children:"Regular"}),e.jsxs("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"},children:[e.jsx(r,{id:"on-color-primary","aria-label":"Primary on color",color:"on-primary-color",marginRight:!0,children:"Primary on color"}),e.jsx(r,{id:"on-color-secondary","aria-label":"Secondary on color",color:"on-primary-color",kind:"secondary",marginRight:!0,children:"Secondary on color"}),e.jsx(r,{id:"on-color-tertiary","aria-label":"Tertiary on color",color:"on-primary-color",kind:"tertiary",children:"Tertiary on color"})]}),e.jsx("br",{}),e.jsx(S,{type:"text1",style:{marginBottom:"var(--sb-spacing-small)"},children:"Disabled"}),e.jsxs("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"},children:[e.jsx(r,{id:"on-color-primary-disabled","aria-label":"Primary on color disabled",color:"on-primary-color",disabled:!0,marginRight:!0,children:"Primary on color"}),e.jsx(r,{id:"on-color-secondary-disabled","aria-label":"Secondary on color disabled",color:"on-primary-color",disabled:!0,marginRight:!0,kind:"secondary",children:"Secondary on color"}),e.jsx(r,{id:"on-color-tertiary-disabled","aria-label":"Tertiary on color disabled",color:"on-primary-color",disabled:!0,kind:"tertiary",children:"Tertiary on color"})]})]})}),name:"On color states"},b={render:()=>e.jsxs("div",{children:[e.jsx(r,{id:"decrease-zoom-button",kind:"secondary",size:"small","aria-label":"Decrease zoom level",rightFlat:!0,children:e.jsx(x,{})}),e.jsx(r,{id:"increase-zoom-button",kind:"secondary",size:"small","aria-label":"Increase zoom level",leftFlat:!0,children:e.jsx(h,{})})]}),parameters:{docs:{liveEdit:{scope:{Remove:x,Add:h}}}},name:"Adjacent buttons"};var j,f,C;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: buttonTemplate.bind({}),
  args: {
    id: "overview-button",
    "aria-label": "Button",
    children: "Button"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(C=(f=a.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var T,P,z;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
      <Button id="button-kinds-primary" aria-label="Primary button">
        Primary
      </Button>
      <Button id="button-kinds-secondary" aria-label="Secondary button" kind="secondary">
        Secondary
      </Button>
      <Button id="button-kinds-tertiary" aria-label="Tertiary button" kind="tertiary">
        Tertiary
      </Button>
    </>,
  name: "Button kinds"
}`,...(z=(P=o.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var R,A,L;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <>
      <Button id="sizes-large" aria-label="Large button" size="large">
        Large
      </Button>
      <Button id="sizes-medium" aria-label="Medium button" size="medium">
        Medium
      </Button>
      <Button id="sizes-small" aria-label="Small button" size="small">
        Small
      </Button>
    </>
}`,...(L=(A=t.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var I,O,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <>
      <Button id="disabled-primary" aria-label="Primary button disabled" disabled>
        Primary
      </Button>
      <Button id="disabled-secondary" aria-label="Secondary button disabled" kind="secondary" disabled>
        Secondary
      </Button>
      <Button id="disabled-tertiary" aria-label="Tertiary button disabled" kind="tertiary" disabled>
        Tertiary
      </Button>
    </>
}`,...(E=(O=i.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var F,D,N;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
      <Button id="state-regular" aria-label="Regular button">
        Regular
      </Button>
      <Button id="state-active" aria-label="Active button" active>
        Active
      </Button>
    </>
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,M,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Button id="color-positive" aria-label="Positive button" color="positive">
        Positive
      </Button>
      <Button id="color-negative" aria-label="Negative button" color="negative">
        Negative
      </Button>
    </>,
  name: "Positive and Negative"
}`,...(w=(M=l.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var K,q,G;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <>
      <Button id="icons-right" rightIcon={Calendar} aria-label="Open calendar on the right icon button">
        Right icon
      </Button>
      <Button id="icons-left" leftIcon={Calendar} aria-label="Open calendar on the left icon button">
        Left icon
      </Button>
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
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,Q;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);
    return <Button id="loading-state-button" aria-label="Start loading" loading={loading} onClick={onClick}>
        Click here for loading
      </Button>;
  },
  name: "Loading state"
}`,...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,V,W;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [success, setSuccess] = useState(false);
    const onClick = useCallback(() => {
      setSuccess(true);
    }, [setSuccess]);
    return <Button id="success-state-button" aria-label="Trigger success" success={success} onClick={onClick} successIcon={Check} successText="Success">
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
}`,...(W=(V=u.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }}>
        <Text type="text1">Regular</Text>
        <div style={{
        backgroundColor: "var(--sb-primary-color)",
        padding: "16px"
      }}>
          <Button id="on-color-primary" aria-label="Primary on color" color="on-primary-color" marginRight>
            Primary on color
          </Button>
          <Button id="on-color-secondary" aria-label="Secondary on color" color="on-primary-color" kind="secondary" marginRight>
            Secondary on color
          </Button>
          <Button id="on-color-tertiary" aria-label="Tertiary on color" color="on-primary-color" kind="tertiary">
            Tertiary on color
          </Button>
        </div>
        <br />
        <Text type="text1" style={{
        marginBottom: "var(--sb-spacing-small)"
      }}>
          Disabled
        </Text>
        <div style={{
        backgroundColor: "var(--sb-primary-color)",
        padding: "16px"
      }}>
          <Button id="on-color-primary-disabled" aria-label="Primary on color disabled" color="on-primary-color" disabled marginRight>
            Primary on color
          </Button>
          <Button id="on-color-secondary-disabled" aria-label="Secondary on color disabled" color="on-primary-color" disabled marginRight kind="secondary">
            Secondary on color
          </Button>
          <Button id="on-color-tertiary-disabled" aria-label="Tertiary on color disabled" color="on-primary-color" disabled kind="tertiary">
            Tertiary on color
          </Button>
        </div>
      </div>
    </>,
  name: "On color states"
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div>
      <Button id="decrease-zoom-button" kind="secondary" size="small" aria-label="Decrease zoom level" rightFlat>
        <Remove />
      </Button>
      <Button id="increase-zoom-button" kind="secondary" size="small" aria-label="Increase zoom level" leftFlat>
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
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ie=["Overview","ButtonKinds","Sizes","Disabled","States","PositiveAndNegative","Icons","LoadingState","SuccessState","OnColorStates","AdjacentButtons"],ve=Object.freeze(Object.defineProperty({__proto__:null,AdjacentButtons:b,ButtonKinds:o,Disabled:i,Icons:c,LoadingState:d,OnColorStates:m,Overview:a,PositiveAndNegative:l,Sizes:t,States:s,SuccessState:u,__namedExportsOrder:ie,default:oe},Symbol.toStringTag,{value:"Module"}));export{b as A,ve as B,i as D,c as I,d as L,a as O,l as P,t as S,o as a,s as b,u as c,m as d};
