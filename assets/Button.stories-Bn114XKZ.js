import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as y}from"./index-CTZeEbLr.js";import{c as ne}from"./createStoryMetaSettingsDecorator-M9remOuO.js";import{B as r}from"./Button-BoWJ_5zm.js";import{T as p}from"./Text-BdGfTGe8.js";import{r as ae}from"./createComponentTemplate-B08h-OOW.js";import{r as h}from"./Calendar-NzkLrIBg.js";import{r as B}from"./Check-CxyRTNy4.js";import{i as L}from"./index-CkcRWdy2.js";import{r as S}from"./Remove-B_sTt2Ao.js";const x=ne({component:r,iconPropNamesArray:["leftIcon","rightIcon","successIcon"],actionPropsArray:["onClick"]}),oe={title:"Components/Button",component:r,argTypes:x.argTypes,decorators:x.decorators},te=ae(r),a={render:te.bind({}),args:{id:"overview-button",ariaLabel:"Button",children:"Button"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"button-kinds-primary",ariaLabel:"Primary button",children:"Primary"}),e.jsx(r,{id:"button-kinds-secondary",ariaLabel:"Secondary button",kind:"secondary",children:"Secondary"}),e.jsx(r,{id:"button-kinds-tertiary",ariaLabel:"Tertiary button",kind:"tertiary",children:"Tertiary"})]}),name:"Button kinds"},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"sizes-large",ariaLabel:"Large button",size:"large",children:"Large"}),e.jsx(r,{id:"sizes-medium",ariaLabel:"Medium button",size:"medium",children:"Medium"}),e.jsx(r,{id:"sizes-small",ariaLabel:"Small button",size:"small",children:"Small"})]})},i={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"disabled-primary",ariaLabel:"Primary button disabled",disabled:!0,children:"Primary"}),e.jsx(r,{id:"disabled-secondary",ariaLabel:"Secondary button disabled",kind:"secondary",disabled:!0,children:"Secondary"}),e.jsx(r,{id:"disabled-tertiary",ariaLabel:"Tertiary button disabled",kind:"tertiary",disabled:!0,children:"Tertiary"})]})},s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"state-regular",ariaLabel:"Regular button",children:"Regular"}),e.jsx(r,{id:"state-active",ariaLabel:"Active button",active:!0,children:"Active"})]})},c={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"color-positive",ariaLabel:"Positive button",color:"positive",children:"Positive"}),e.jsx(r,{id:"color-negative",ariaLabel:"Negative button",color:"negative",children:"Negative"})]}),name:"Positive and Negative"},d={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"icons-right",rightIcon:h,ariaLabel:"Open calendar on the right icon button",children:"Right icon"}),e.jsx(r,{id:"icons-left",leftIcon:h,ariaLabel:"Open calendar on the left icon button",children:"Left icon"})]}),parameters:{docs:{liveEdit:{scope:{Calendar:h}}}}},l={render:()=>{const[g,n]=y.useState(!1),v=y.useCallback(()=>{n(!0)},[n]);return e.jsx(r,{id:"loading-state-button",ariaLabel:"Start loading",loading:g,onClick:v,children:"Click here for loading"})},name:"Loading state"},u={render:()=>{const[g,n]=y.useState(!1),v=y.useCallback(()=>{n(!0)},[n]);return e.jsx(r,{id:"success-state-button",ariaLabel:"Trigger success",success:g,onClick:v,successIcon:B,successText:"Success",children:"Click here for success"})},parameters:{docs:{liveEdit:{scope:{Check:B}}}},name:"Success state"},m={render:()=>e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(p,{type:p.types.TEXT1,style:{marginBottom:"var(--sb-spacing-small)"},children:"Regular"}),e.jsxs("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"},children:[e.jsx(r,{id:"on-color-primary",ariaLabel:"Primary on color",color:"on-primary-color",marginRight:!0,children:"Primary on color"}),e.jsx(r,{id:"on-color-secondary",ariaLabel:"Secondary on color",color:"on-primary-color",kind:"secondary",marginRight:!0,children:"Secondary on color"}),e.jsx(r,{id:"on-color-tertiary",ariaLabel:"Tertiary on color",color:"on-primary-color",kind:"tertiary",children:"Tertiary on color"})]}),e.jsx("br",{}),e.jsx(p,{type:p.types.TEXT1,style:{marginBottom:"var(--sb-spacing-small)"},children:"Disabled"}),e.jsxs("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"},children:[e.jsx(r,{id:"on-color-primary-disabled",ariaLabel:"Primary on color disabled",color:"on-primary-color",disabled:!0,marginRight:!0,children:"Primary on color"}),e.jsx(r,{id:"on-color-secondary-disabled",ariaLabel:"Secondary on color disabled",color:"on-primary-color",disabled:!0,marginRight:!0,kind:"secondary",children:"Secondary on color"}),e.jsx(r,{id:"on-color-tertiary-disabled",ariaLabel:"Tertiary on color disabled",color:"on-primary-color",disabled:!0,kind:"tertiary",children:"Tertiary on color"})]})]})}),name:"On color states"},b={render:()=>e.jsxs("div",{children:[e.jsx(r,{id:"decrease-zoom-button",kind:"secondary",size:"small",ariaLabel:"Decrease zoom level",rightFlat:!0,children:e.jsx(S,{})}),e.jsx(r,{id:"increase-zoom-button",kind:"secondary",size:"small",ariaLabel:"Increase zoom level",leftFlat:!0,children:e.jsx(L,{})})]}),parameters:{docs:{liveEdit:{scope:{Remove:S,Add:L}}}},name:"Adjacent buttons"};var k,j,T;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: buttonTemplate.bind({}),
  args: {
    id: "overview-button",
    ariaLabel: "Button",
    children: "Button"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var f,C,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <>
      <Button id="button-kinds-primary" ariaLabel="Primary button">
        Primary
      </Button>
      <Button id="button-kinds-secondary" ariaLabel="Secondary button" kind="secondary">
        Secondary
      </Button>
      <Button id="button-kinds-tertiary" ariaLabel="Tertiary button" kind="tertiary">
        Tertiary
      </Button>
    </>,
  name: "Button kinds"
}`,...(P=(C=o.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var z,R,E;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <Button id="sizes-large" ariaLabel="Large button" size="large">
        Large
      </Button>
      <Button id="sizes-medium" ariaLabel="Medium button" size="medium">
        Medium
      </Button>
      <Button id="sizes-small" ariaLabel="Small button" size="small">
        Small
      </Button>
    </>
}`,...(E=(R=t.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var A,I,O;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <>
      <Button id="disabled-primary" ariaLabel="Primary button disabled" disabled>
        Primary
      </Button>
      <Button id="disabled-secondary" ariaLabel="Secondary button disabled" kind="secondary" disabled>
        Secondary
      </Button>
      <Button id="disabled-tertiary" ariaLabel="Tertiary button disabled" kind="tertiary" disabled>
        Tertiary
      </Button>
    </>
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var F,D,N;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
      <Button id="state-regular" ariaLabel="Regular button">
        Regular
      </Button>
      <Button id="state-active" ariaLabel="Active button" active>
        Active
      </Button>
    </>
}`,...(N=(D=s.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var _,M,w;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Button id="color-positive" ariaLabel="Positive button" color="positive">
        Positive
      </Button>
      <Button id="color-negative" ariaLabel="Negative button" color="negative">
        Negative
      </Button>
    </>,
  name: "Positive and Negative"
}`,...(w=(M=c.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var X,$,K;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <>
      <Button id="icons-right" rightIcon={Calendar} ariaLabel="Open calendar on the right icon button">
        Right icon
      </Button>
      <Button id="icons-left" leftIcon={Calendar} ariaLabel="Open calendar on the left icon button">
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
}`,...(K=($=d.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var q,G,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);
    return <Button id="loading-state-button" ariaLabel="Start loading" loading={loading} onClick={onClick}>
        Click here for loading
      </Button>;
  },
  name: "Loading state"
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [success, setSuccess] = useState(false);
    const onClick = useCallback(() => {
      setSuccess(true);
    }, [setSuccess]);
    return <Button id="success-state-button" ariaLabel="Trigger success" success={success} onClick={onClick} successIcon={Check} successText="Success">
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
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
          <Button id="on-color-primary" ariaLabel="Primary on color" color="on-primary-color" marginRight>
            Primary on color
          </Button>
          <Button id="on-color-secondary" ariaLabel="Secondary on color" color="on-primary-color" kind="secondary" marginRight>
            Secondary on color
          </Button>
          <Button id="on-color-tertiary" ariaLabel="Tertiary on color" color="on-primary-color" kind="tertiary">
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
          <Button id="on-color-primary-disabled" ariaLabel="Primary on color disabled" color="on-primary-color" disabled marginRight>
            Primary on color
          </Button>
          <Button id="on-color-secondary-disabled" ariaLabel="Secondary on color disabled" color="on-primary-color" disabled marginRight kind="secondary">
            Secondary on color
          </Button>
          <Button id="on-color-tertiary-disabled" ariaLabel="Tertiary on color disabled" color="on-primary-color" disabled kind="tertiary">
            Tertiary on color
          </Button>
        </div>
      </div>
    </>,
  name: "On color states"
}`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div>
      <Button id="decrease-zoom-button" kind="secondary" size="small" ariaLabel="Decrease zoom level" rightFlat>
        <Remove />
      </Button>
      <Button id="increase-zoom-button" kind="secondary" size="small" ariaLabel="Increase zoom level" leftFlat>
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
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ie=["Overview","ButtonKinds","Sizes","Disabled","States","PositiveAndNegative","Icons","LoadingState","SuccessState","OnColorStates","AdjacentButtons"],ve=Object.freeze(Object.defineProperty({__proto__:null,AdjacentButtons:b,ButtonKinds:o,Disabled:i,Icons:d,LoadingState:l,OnColorStates:m,Overview:a,PositiveAndNegative:c,Sizes:t,States:s,SuccessState:u,__namedExportsOrder:ie,default:oe},Symbol.toStringTag,{value:"Module"}));export{b as A,ve as B,i as D,d as I,l as L,a as O,c as P,t as S,o as a,s as b,u as c,m as d};
