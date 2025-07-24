import{R as e,r as y}from"./index-Hemj67b4.js";import{c as ne}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{B as r}from"./Button-DEM-Hn8V.js";import{T as g}from"./Text-B2fubIt7.js";import{r as te}from"./createComponentTemplate-Y0VTmW_y.js";import{r as E}from"./Calendar-BX7mDXzx.js";import{r as S}from"./Check-B_icfwyn.js";import{i as b}from"./index-BA_MN9l1.js";import{r as k}from"./Remove-C7LZQ9Te.js";const f=ne({component:r,iconPropNamesArray:["leftIcon","rightIcon","successIcon"],actionPropsArray:["onClick"]}),oe={title:"Components/Button",component:r,argTypes:f.argTypes,decorators:f.decorators},ae=te(r),t={render:ae.bind({}),args:{children:"Button"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement(e.Fragment,null,e.createElement(r,null,"Primary"),e.createElement(r,{kind:"secondary"},"Secondary"),e.createElement(r,{kind:"tertiary"},"Tertiary")),name:"Button kinds"},a={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{size:"large"},"Large"),e.createElement(r,{size:"medium"},"Medium"),e.createElement(r,{size:"small"},"Small"))},s={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{disabled:!0},"Primary"),e.createElement(r,{kind:"secondary",disabled:!0},"Secondary"),e.createElement(r,{kind:"tertiary",disabled:!0},"Tertiary"))},c={render:()=>e.createElement(e.Fragment,null,e.createElement(r,null,"Regular"),e.createElement(r,{active:!0},"Active"))},i={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{color:"positive"},"Positive"),e.createElement(r,{color:"negative"},"Negative")),name:"Positive and Negative"},l={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{rightIcon:E},"Right icon"),e.createElement(r,{leftIcon:E},"Left icon")),parameters:{docs:{liveEdit:{scope:{Calendar:E}}}}},d={render:()=>{const[B,n]=y.useState(!1),v=y.useCallback(()=>{n(!0)},[n]);return e.createElement(r,{loading:B,onClick:v},"Click here for loading")},name:"Loading state"},m={render:()=>{const[B,n]=y.useState(!1),v=y.useCallback(()=>{n(!0)},[n]);return e.createElement(r,{success:B,onClick:v,successIcon:S,successText:"Success"},"Click here for success")},parameters:{docs:{liveEdit:{scope:{Check:S}}}},name:"Success state"},u={render:()=>e.createElement(e.Fragment,null,e.createElement("div",{style:{display:"flex",flexDirection:"column"}},e.createElement(g,{type:g.types.TEXT1,style:{marginBottom:"var(--sb-spacing-small)"}},"Regular"),e.createElement("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"}},e.createElement(r,{color:"on-primary-color",marginRight:!0},"Primary on color"),e.createElement(r,{color:"on-primary-color",kind:"secondary",marginRight:!0},"Secondary on color"),e.createElement(r,{color:"on-primary-color",kind:"tertiary"},"Tertiary on color")),e.createElement("br",null),e.createElement(g,{type:g.types.TEXT1,style:{marginBottom:"var(--sb-spacing-small)"}},"Disabled"),e.createElement("div",{style:{backgroundColor:"var(--sb-primary-color)",padding:"16px"}},e.createElement(r,{color:"on-primary-color",disabled:!0,marginRight:!0},"Primary on color"),e.createElement(r,{color:"on-primary-color",disabled:!0,marginRight:!0,kind:"secondary"},"Secondary on color"),e.createElement(r,{color:"on-primary-color",disabled:!0,kind:"tertiary"},"Tertiary on color")))),name:"On color states"},p={render:()=>e.createElement("div",null,e.createElement(r,{kind:"secondary",size:"small",ariaLabel:"decrease zoom level",rightFlat:!0},e.createElement(k,null)),e.createElement(r,{kind:"secondary",size:"small",ariaLabel:"increase zoom level",leftFlat:!0},e.createElement(b,null))),parameters:{docs:{liveEdit:{scope:{Remove:k,Add:b}}}},name:"Adjacent buttons"};var C,T,h;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var x,R,P;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <>
      <Button>Primary</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="tertiary">Tertiary</Button>
    </>,
  name: "Button kinds"
}`,...(P=(R=o.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var z,L,A;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </>
}`,...(A=(L=a.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var I,F,O;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <>
      <Button disabled>Primary</Button>
      <Button kind="secondary" disabled>
        Secondary
      </Button>
      <Button kind="tertiary" disabled>
        Tertiary
      </Button>
    </>
}`,...(O=(F=s.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var D,N,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <>
      <Button>Regular</Button>
      <Button active>Active</Button>
    </>
}`,...(_=(N=c.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var j,M,X;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <>
      <Button color="positive">Positive</Button>
      <Button color="negative">Negative</Button>
    </>,
  name: "Positive and Negative"
}`,...(X=(M=i.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var $,w,K;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(w=l.parameters)==null?void 0:w.docs)==null?void 0:K.source}}};var q,G,H;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const se=["Overview","ButtonKinds","Sizes","Disabled","States","PositiveAndNegative","Icons","LoadingState","SuccessState","OnColorStates","AdjacentButtons"],Be=Object.freeze(Object.defineProperty({__proto__:null,AdjacentButtons:p,ButtonKinds:o,Disabled:s,Icons:l,LoadingState:d,OnColorStates:u,Overview:t,PositiveAndNegative:i,Sizes:a,States:c,SuccessState:m,__namedExportsOrder:se,default:oe},Symbol.toStringTag,{value:"Module"}));export{p as A,Be as B,s as D,l as I,d as L,t as O,i as P,a as S,o as a,c as b,m as c,u as d};
