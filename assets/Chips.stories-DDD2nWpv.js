import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as de}from"./createStoryMetaSettingsDecorator-DHxXl1St.js";import{E as o}from"./Email-BmMi5Ll_.js";import{p as l}from"./person1-D9Wcho68.js";import{p as k}from"./person3-BX6ktRh1.js";import{C as a}from"./Chips-CibYHSOP.js";import{r as pe}from"./createComponentTemplate-B08h-OOW.js";import{C as F}from"./colors-utils-Bs_kbYdf.js";import{F as r}from"./Flex-CikfezJC.js";import{D as te}from"./DialogContentContainer-BenjnFfs.js";import{S as oe}from"./Search-BOHYurfs.js";import{T as n}from"./Text-B9A6RG_q.js";import{A as w}from"./Avatar-DoU9xMWB.js";function O(y,s){if(!Number.isInteger(s)||s<=0)throw new Error("Size must be an integer greater than zero.");const j=Math.ceil(y.length/s),f=Array(j);for(let i=0;i<j;i++){const t=i*s,ce=t+s;f[i]=y.slice(t,ce)}return f}const S=de({component:a,iconPropNamesArray:["rightIcon","leftIcon"],actionPropsArray:["onDelete","onMouseDown","onClick"]}),he=pe(a),me={title:"Components/Chips",component:a,argTypes:S.argTypes,decorators:S.decorators},c={render:he.bind({}),name:"Overview",args:{id:"overview-chip","aria-label":"Overview chip",label:"This is a chip",onMouseDown:()=>{},onClick:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>e.jsx(a,{id:"readonly-chip","aria-label":"Read only chip",label:"Read only chip",readOnly:!0}),name:"Chips with read only state"},p={render:()=>e.jsxs(r,{gap:"medium",children:[e.jsx(a,{id:"chip-left-icon","aria-label":"Chip with left email icon",label:"Chip with left icon",leftIcon:o}),e.jsx(a,{id:"chip-right-icon","aria-label":"Chip with right email icon",label:"Chip with right icon",rightIcon:o})]}),parameters:{docs:{liveEdit:{scope:{Email:o}}}},name:"Chips with icons"},h={render:()=>e.jsxs(r,{gap:"medium",children:[e.jsx(a,{id:"chip-left-avatar","aria-label":"Chip with left avatar",label:"Chip with left avatar",leftAvatar:l}),e.jsx(a,{id:"chip-right-avatar","aria-label":"Chip with right avatar",label:"Chip with right avatar",rightAvatar:l})]}),parameters:{docs:{liveEdit:{scope:{person1:l}}}},name:"Chips with avatars"},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{id:"theme-long","aria-label":"Long chip",label:"This is a long chip"}),e.jsx(a,{id:"theme-positive","aria-label":"Positive chip",label:"Chip positive",color:"positive"}),e.jsx(a,{id:"theme-negative","aria-label":"Negative chip",label:"Chip negative",color:"negative"}),e.jsx(a,{id:"theme-warning","aria-label":"Warning chip",label:"Chip warning",color:"warning"}),e.jsx(a,{id:"theme-neutral","aria-label":"Neutral chip",label:"Chip neutral",color:"neutral"}),e.jsx(a,{id:"theme-disabled","aria-label":"Disabled chip",label:"Disabled",disabled:!0})]}),name:"Themes"},u={render:()=>e.jsxs(r,{direction:"row",gap:"medium",align:"start",children:[e.jsx(a,{id:"clickable-default","aria-label":"Clickable default chip",label:"Clickable default chip",readOnly:!0,onClick:()=>{}}),e.jsx(a,{id:"clickable-removable","aria-label":"Clickable removable chip",label:"Clickable removable chip",onClick:()=>{}})]}),name:"Clickable"},g={render:()=>e.jsxs(r,{direction:"column",gap:"medium",align:"start",children:[e.jsxs(r,{gap:"medium",align:"center",children:[e.jsx(a,{id:"size-medium","aria-label":"Medium chip",label:"Medium chip",readOnly:!0}),e.jsx(a,{id:"size-medium-icon","aria-label":"Medium chip with icon",label:"With icon",leftIcon:o,readOnly:!0}),e.jsx(a,{id:"size-medium-avatar","aria-label":"Medium chip with avatar",label:"With avatar",leftAvatar:l,readOnly:!0})]}),e.jsxs(r,{gap:"medium",align:"center",children:[e.jsx(a,{id:"size-small","aria-label":"Small chip",label:"Small chip",size:"small",readOnly:!0}),e.jsx(a,{id:"size-small-icon","aria-label":"Small chip with icon",label:"With icon",size:"small",leftIcon:o,readOnly:!0}),e.jsx(a,{id:"size-small-avatar","aria-label":"Small chip with avatar",label:"With avatar",size:"small",leftAvatar:l,readOnly:!0})]})]}),parameters:{docs:{liveEdit:{scope:{Email:o,person1:l}}}},name:"Sizes"},x={render:()=>{const y=["dark_indigo","blackish"],s=["positive","negative","primary","warning","neutral"],j=[...F.contentColors.filter(i=>!y.includes(i)),...s],f=O(j,7);return e.jsx(r,{style:{width:"100%",height:300},align:"stretch",children:f.map(i=>e.jsx(r,{direction:"column",justify:"space-between",align:"stretch",children:i.map(t=>e.jsx(a,{label:t,color:t,readOnly:!0,allowTextSelection:!0},t))},i))})},parameters:{docs:{liveEdit:{scope:{_chunk:O,ColorUtils:F}}}},name:"Chips palette"},b={render:()=>e.jsxs(r,{style:{width:"100%"},align:"stretch",justify:"start",children:[e.jsx(r,{align:"center",justify:"center",style:{background:"var(--sb-primary-selected-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(a,{label:"On selected",showBorder:!0,readOnly:!0})}),e.jsx(r,{align:"center",justify:"center",style:{background:"var(--positive-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(a,{label:"On positive",showBorder:!0,color:"positive",readOnly:!0})}),e.jsx(r,{align:"center",justify:"center",style:{background:"var(--sb-negative-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(a,{label:"On negative",showBorder:!0,color:"negative",readOnly:!0})}),e.jsx(r,{align:"center",justify:"center",style:{background:"var(--ui-background-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(a,{label:"On neutral",showBorder:!0,color:"neutral",readOnly:!0})})]}),name:"On color"},C={render:()=>e.jsx(r,{children:e.jsx(te,{children:e.jsxs(r,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--space-8)"},children:[e.jsx("div",{children:e.jsx(a,{label:"January",color:"positive"})}),e.jsx(oe,{}),e.jsx("div",{children:e.jsx(a,{label:"August",readOnly:!0,color:"lipstick"})}),e.jsx("div",{children:e.jsx(a,{label:"April",readOnly:!0,color:"bubble"})}),e.jsx("div",{children:e.jsx(a,{label:"March",readOnly:!0,color:"egg_yolk"})})]})})}),name:"Colorful chips for different content"},v={render:()=>e.jsx(r,{children:e.jsx(te,{children:e.jsxs(r,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--space-8)"},children:[e.jsx(oe,{placeholder:"Search names, positions, or a team"}),e.jsxs(r,{align:"center",justify:"center",children:[e.jsx(a,{label:"Julia Martinez",leftAvatar:l}),e.jsx(a,{label:"Juan Rodriguez",leftAvatar:k})]}),e.jsx(n,{style:{paddingInlineStart:"var(--space-4)",marginTop:"var(--space-4)"},children:"Suggested people"}),e.jsxs(r,{direction:"column",align:"start",gap:"medium",children:[e.jsxs(r,{align:"center",justify:"center",gap:"small",children:[e.jsx(w,{size:"small",src:l,type:"img"}),e.jsxs(r,{gap:"xs",children:[e.jsx(n,{children:"May Kishon "}),e.jsx(n,{color:"secondary",children:"(UX/UI Product Designer)"})]})]},"cont-1"),e.jsxs(r,{align:"center",justify:"center",gap:"small",children:[e.jsx(w,{size:"small",backgroundColor:"dark_purple",text:"LC",type:"text"}),e.jsxs(r,{gap:"xs",children:[e.jsx(n,{children:"Liron Cohen"}),e.jsx(n,{color:"secondary",children:"(Customer Experience)"})]})]},"cont-2"),e.jsxs(r,{align:"center",justify:"center",gap:"small",children:[e.jsx(w,{size:"small",text:"AL",type:"text"}),e.jsxs(r,{gap:"xs",children:[e.jsx(n,{children:"Amanda Lawrence"}),e.jsx(n,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-3"),e.jsxs(r,{align:"center",justify:"center",gap:"small",children:[e.jsx(w,{size:"small",text:"DY",type:"text",backgroundColor:"peach"}),e.jsxs(r,{gap:"xs",children:[e.jsx(n,{children:"Dor Yehuda"}),e.jsx(n,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-4")]})]})})}),parameters:{docs:{liveEdit:{scope:{person1:l,person3:k}}}},name:"Chips in a person picker combo box"};var T,z,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: chipsTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-chip",
    "aria-label": "Overview chip",
    label: "This is a chip",
    onMouseDown: () => {},
    onClick: () => {}
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var E,D,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Chips id="readonly-chip" aria-label="Read only chip" label="Read only chip" readOnly />,
  name: "Chips with read only state"
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var I,R,W;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Chips id="chip-left-icon" aria-label="Chip with left email icon" label="Chip with left icon" leftIcon={Email} />
      <Chips id="chip-right-icon" aria-label="Chip with right email icon" label="Chip with right icon" rightIcon={Email} />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Email
        }
      }
    }
  },
  name: "Chips with icons"
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,P,L;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Chips id="chip-left-avatar" aria-label="Chip with left avatar" label="Chip with left avatar" leftAvatar={person1} />
      <Chips id="chip-right-avatar" aria-label="Chip with right avatar" label="Chip with right avatar" rightAvatar={person1} />
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1
        }
      }
    }
  },
  name: "Chips with avatars"
}`,...(L=(P=h.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var B,N,U;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <Chips id="theme-long" aria-label="Long chip" label="This is a long chip" />
      <Chips id="theme-positive" aria-label="Positive chip" label="Chip positive" color="positive" />
      <Chips id="theme-negative" aria-label="Negative chip" label="Chip negative" color="negative" />
      <Chips id="theme-warning" aria-label="Warning chip" label="Chip warning" color="warning" />
      <Chips id="theme-neutral" aria-label="Neutral chip" label="Chip neutral" color="neutral" />
      <Chips id="theme-disabled" aria-label="Disabled chip" label="Disabled" disabled />
    </>,
  name: "Themes"
}`,...(U=(N=m.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var J,Y,K;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="row" gap="medium" align="start">
        <Chips id="clickable-default" aria-label="Clickable default chip" label="Clickable default chip" readOnly onClick={() => {}} />
        <Chips id="clickable-removable" aria-label="Clickable removable chip" label="Clickable removable chip" onClick={() => {}} />
      </Flex>;
  },
  name: "Clickable"
}`,...(K=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var X,q,G;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium" align="start">
      <Flex gap="medium" align="center">
        <Chips id="size-medium" aria-label="Medium chip" label="Medium chip" readOnly />
        <Chips id="size-medium-icon" aria-label="Medium chip with icon" label="With icon" leftIcon={Email} readOnly />
        <Chips id="size-medium-avatar" aria-label="Medium chip with avatar" label="With avatar" leftAvatar={person1} readOnly />
      </Flex>
      <Flex gap="medium" align="center">
        <Chips id="size-small" aria-label="Small chip" label="Small chip" size="small" readOnly />
        <Chips id="size-small-icon" aria-label="Small chip with icon" label="With icon" size="small" leftIcon={Email} readOnly />
        <Chips id="size-small-avatar" aria-label="Small chip with avatar" label="With avatar" size="small" leftAvatar={person1} readOnly />
      </Flex>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Email,
          person1
        }
      }
    }
  },
  name: "Sizes"
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,Q,V;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const excludedColors = ["dark_indigo", "blackish"];
    const stateColors = ["positive", "negative", "primary", "warning", "neutral"];
    const allColors = [...ColorUtils.contentColors.filter((c: string) => !excludedColors.includes(c)), ...stateColors];
    const allowedColorsChunks = _chunk(allColors, 7);
    return <Flex style={{
      width: "100%",
      height: 300
    }} align="stretch">
        {allowedColorsChunks.map((colorChunk: any) => {
        return <Flex direction="column" key={colorChunk} justify="space-between" align="stretch">
              {colorChunk.map((colorName: any) => <Chips label={colorName} key={colorName} color={colorName} readOnly allowTextSelection />)}
            </Flex>;
      })}
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          _chunk,
          ColorUtils
        }
      }
    }
  },
  name: "Chips palette"
}`,...(V=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Flex style={{
    width: "100%"
  }} align="stretch" justify="start">
      <Flex align="center" justify="center" style={{
      background: "var(--sb-primary-selected-color)",
      width: "124px",
      height: "64px",
      margin: "var(--sb-spacing-small)",
      borderRadius: "var(--sb-border-radius-small)"
    }}>
        <Chips label="On selected" showBorder readOnly />
      </Flex>
      <Flex align="center" justify="center" style={{
      background: "var(--positive-color-selected)",
      width: "124px",
      height: "64px",
      margin: "var(--sb-spacing-small)",
      borderRadius: "var(--sb-border-radius-small)"
    }}>
        <Chips label="On positive" showBorder color="positive" readOnly />
      </Flex>
      <Flex align="center" justify="center" style={{
      background: "var(--sb-negative-color-selected)",
      width: "124px",
      height: "64px",
      margin: "var(--sb-spacing-small)",
      borderRadius: "var(--sb-border-radius-small)"
    }}>
        <Chips label="On negative" showBorder color="negative" readOnly />
      </Flex>
      <Flex align="center" justify="center" style={{
      background: "var(--ui-background-color)",
      width: "124px",
      height: "64px",
      margin: "var(--sb-spacing-small)",
      borderRadius: "var(--sb-border-radius-small)"
    }}>
        <Chips label="On neutral" showBorder color="neutral" readOnly />
      </Flex>
    </Flex>,
  name: "On color"
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,ie;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Flex direction="column" align="start" gap="medium" style={{
        padding: "var(--space-8)"
      }}>
          <div>
            <Chips label="January" color="positive" />
          </div>
          <Search />
          <div>
            <Chips label="August" readOnly color="lipstick" />
          </div>
          <div>
            <Chips label="April" readOnly color="bubble" />
          </div>
          <div>
            <Chips label="March" readOnly color="egg_yolk" />
          </div>
        </Flex>
      </DialogContentContainer>
    </Flex>,
  name: "Colorful chips for different content"
}`,...(ie=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ne,le,se;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Flex direction="column" align="start" gap="medium" style={{
        padding: "var(--space-8)"
      }}>
          <Search placeholder="Search names, positions, or a team" />
          <Flex align="center" justify="center">
            <Chips label="Julia Martinez" leftAvatar={person1} />
            <Chips label="Juan Rodriguez" leftAvatar={person3} />
          </Flex>
          <Text style={{
          paddingInlineStart: "var(--space-4)",
          marginTop: "var(--space-4)"
        }}>
            Suggested people
          </Text>
          <Flex direction="column" align="start" gap="medium">
            <Flex align="center" justify="center" key="cont-1" gap="small">
              <Avatar size="small" src={person1} type="img" />
              <Flex gap="xs">
                <Text>May Kishon </Text>
                <Text color="secondary">(UX/UI Product Designer)</Text>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" key="cont-2" gap="small">
              <Avatar size="small" backgroundColor="dark_purple" text="LC" type="text" />
              <Flex gap="xs">
                <Text>Liron Cohen</Text>
                <Text color="secondary">(Customer Experience)</Text>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" key="cont-3" gap="small">
              <Avatar size="small" text="AL" type="text" />
              <Flex gap="xs">
                <Text>Amanda Lawrence</Text>
                <Text color="secondary">(Customer Experience Designer)</Text>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" key="cont-4" gap="small">
              <Avatar size="small" text="DY" type="text" backgroundColor="peach" />
              <Flex gap="xs">
                <Text>Dor Yehuda</Text>
                <Text color="secondary">(Customer Experience Designer)</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </DialogContentContainer>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          person3
        }
      }
    }
  },
  name: "Chips in a person picker combo box"
}`,...(se=(le=v.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const ue=["Overview","ChipsWithReadOnlyState","ChipsWithIcons","ChipsWithAvatars","Themes","Clickable","Sizes","ChipsPalette","OnColor","ColorfulChipsForDifferentContent","ChipsInAPersonPickerComboBox"],Te=Object.freeze(Object.defineProperty({__proto__:null,ChipsInAPersonPickerComboBox:v,ChipsPalette:x,ChipsWithAvatars:h,ChipsWithIcons:p,ChipsWithReadOnlyState:d,Clickable:u,ColorfulChipsForDifferentContent:C,OnColor:b,Overview:c,Sizes:g,Themes:m,__namedExportsOrder:ue,default:me},Symbol.toStringTag,{value:"Module"}));export{Te as C,c as O,m as T,d as a,p as b,h as c,u as d,x as e,b as f,C as g,v as h};
