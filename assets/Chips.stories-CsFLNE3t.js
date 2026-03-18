import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as se}from"./createStoryMetaSettingsDecorator-DJeVV-64.js";import{p as t}from"./person1-D9Wcho68.js";import{p as w}from"./person3-BX6ktRh1.js";import{C as r}from"./Chips-_6GUdDoE.js";import{r as te}from"./createComponentTemplate-B08h-OOW.js";import{l as f}from"./Email-TZY0cRuW.js";import{C as k}from"./colors-utils-Bs_kbYdf.js";import{F as a}from"./Flex-DZptE16X.js";import{D as ne}from"./DialogContentContainer-CnYOKF_Z.js";import{S as ie}from"./Search-BgEcjBoi.js";import{T as i}from"./Text-DKH6hkNh.js";import{A as j}from"./Avatar-Bj5skv4H.js";function F(C,l){if(!Number.isInteger(l)||l<=0)throw new Error("Size must be an integer greater than zero.");const v=Math.ceil(C.length/l),y=Array(v);for(let n=0;n<v;n++){const s=n*l,le=s+l;y[n]=C.slice(s,le)}return y}const O=se({component:r,iconPropNamesArray:["rightIcon","leftIcon"],actionPropsArray:["onDelete","onMouseDown","onClick"]}),oe=te(r),ce={title:"Components/Chips",component:r,argTypes:O.argTypes,decorators:O.decorators},o={render:oe.bind({}),name:"Overview",args:{id:"overview-chip","aria-label":"Overview chip",label:"This is a chip",onMouseDown:()=>{},onClick:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>e.jsx(r,{id:"readonly-chip","aria-label":"Read only chip",label:"Read only chip",readOnly:!0}),name:"Chips with read only state"},d={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-icon","aria-label":"Chip with left email icon",label:"Chip with left icon",leftIcon:f}),e.jsx(r,{id:"chip-right-icon","aria-label":"Chip with right email icon",label:"Chip with right icon",rightIcon:f})]}),parameters:{docs:{liveEdit:{scope:{Email:f}}}},name:"Chips with icons"},p={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-avatar","aria-label":"Chip with left avatar",label:"Chip with left avatar",leftAvatar:t}),e.jsx(r,{id:"chip-right-avatar","aria-label":"Chip with right avatar",label:"Chip with right avatar",rightAvatar:t})]}),parameters:{docs:{liveEdit:{scope:{person1:t}}}},name:"Chips with avatars"},h={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"theme-long","aria-label":"Long chip",label:"This is a long chip"}),e.jsx(r,{id:"theme-positive","aria-label":"Positive chip",label:"Chip positive",color:"positive"}),e.jsx(r,{id:"theme-negative","aria-label":"Negative chip",label:"Chip negative",color:"negative"}),e.jsx(r,{id:"theme-warning","aria-label":"Warning chip",label:"Chip warning",color:"warning"}),e.jsx(r,{id:"theme-neutral","aria-label":"Neutral chip",label:"Chip neutral",color:"neutral"}),e.jsx(r,{id:"theme-disabled","aria-label":"Disabled chip",label:"Disabled",disabled:!0})]}),name:"Themes"},m={render:()=>e.jsxs(a,{direction:"row",gap:"medium",align:"start",children:[e.jsx(r,{id:"clickable-default","aria-label":"Clickable default chip",label:"Clickable default chip",readOnly:!0,onClick:()=>{}}),e.jsx(r,{id:"clickable-removable","aria-label":"Clickable removable chip",label:"Clickable removable chip",onClick:()=>{}})]}),name:"Clickable"},g={render:()=>{const C=["dark_indigo","blackish"],l=["positive","negative","primary","warning","neutral"],v=[...k.contentColors.filter(n=>!C.includes(n)),...l],y=F(v,7);return e.jsx(a,{style:{width:"100%",height:300},align:"stretch",children:y.map(n=>e.jsx(a,{direction:"column",justify:"space-between",align:"stretch",children:n.map(s=>e.jsx(r,{label:s,color:s,readOnly:!0,allowTextSelection:!0},s))},n))})},parameters:{docs:{liveEdit:{scope:{_chunk:F,ColorUtils:k}}}},name:"Chips palette"},u={render:()=>e.jsxs(a,{style:{width:"100%"},align:"stretch",justify:"start",children:[e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-primary-selected-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On selected",showBorder:!0,readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--positive-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On positive",showBorder:!0,color:"positive",readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-negative-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On negative",showBorder:!0,color:"negative",readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--ui-background-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On neutral",showBorder:!0,color:"neutral",readOnly:!0})})]}),name:"On color"},x={render:()=>e.jsx(a,{children:e.jsx(ne,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--space-8)"},children:[e.jsx("div",{children:e.jsx(r,{label:"January",color:"positive"})}),e.jsx(ie,{}),e.jsx("div",{children:e.jsx(r,{label:"August",readOnly:!0,color:"lipstick"})}),e.jsx("div",{children:e.jsx(r,{label:"April",readOnly:!0,color:"bubble"})}),e.jsx("div",{children:e.jsx(r,{label:"March",readOnly:!0,color:"egg_yolk"})})]})})}),name:"Colorful chips for different content"},b={render:()=>e.jsx(a,{children:e.jsx(ne,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--space-8)"},children:[e.jsx(ie,{placeholder:"Search names, positions, or a team"}),e.jsxs(a,{align:"center",justify:"center",children:[e.jsx(r,{label:"Julia Martinez",leftAvatar:t}),e.jsx(r,{label:"Juan Rodriguez",leftAvatar:w})]}),e.jsx(i,{style:{paddingInlineStart:"var(--space-4)",marginTop:"var(--space-4)"},children:"Suggested people"}),e.jsxs(a,{direction:"column",align:"start",gap:"medium",children:[e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(j,{size:"small",src:t,type:"img"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"May Kishon "}),e.jsx(i,{color:"secondary",children:"(UX/UI Product Designer)"})]})]},"cont-1"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(j,{size:"small",backgroundColor:"dark_purple",text:"LC",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"Liron Cohen"}),e.jsx(i,{color:"secondary",children:"(Customer Experience)"})]})]},"cont-2"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(j,{size:"small",text:"AL",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"Amanda Lawrence"}),e.jsx(i,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-3"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(j,{size:"small",text:"DY",type:"text",backgroundColor:"peach"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"Dor Yehuda"}),e.jsx(i,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-4")]})]})})}),parameters:{docs:{liveEdit:{scope:{person1:t,person3:w}}}},name:"Chips in a person picker combo box"};var T,S,A;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,E,R;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Chips id="readonly-chip" aria-label="Read only chip" label="Read only chip" readOnly />,
  name: "Chips with read only state"
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var _,I,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var M,z,L;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(L=(z=p.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var B,N,W;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <Chips id="theme-long" aria-label="Long chip" label="This is a long chip" />
      <Chips id="theme-positive" aria-label="Positive chip" label="Chip positive" color="positive" />
      <Chips id="theme-negative" aria-label="Negative chip" label="Chip negative" color="negative" />
      <Chips id="theme-warning" aria-label="Warning chip" label="Chip warning" color="warning" />
      <Chips id="theme-neutral" aria-label="Neutral chip" label="Chip neutral" color="neutral" />
      <Chips id="theme-disabled" aria-label="Disabled chip" label="Disabled" disabled />
    </>,
  name: "Themes"
}`,...(W=(N=h.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var U,J,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="row" gap="medium" align="start">
        <Chips id="clickable-default" aria-label="Clickable default chip" label="Clickable default chip" readOnly onClick={() => {}} />
        <Chips id="clickable-removable" aria-label="Clickable removable chip" label="Clickable removable chip" onClick={() => {}} />
      </Flex>;
  },
  name: "Clickable"
}`,...(Y=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var K,X,q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(q=(X=g.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var G,H,Q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(H=u.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var V,Z,$;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const de=["Overview","ChipsWithReadOnlyState","ChipsWithIcons","ChipsWithAvatars","Themes","Clickable","ChipsPalette","OnColor","ColorfulChipsForDifferentContent","ChipsInAPersonPickerComboBox"],ke=Object.freeze(Object.defineProperty({__proto__:null,ChipsInAPersonPickerComboBox:b,ChipsPalette:g,ChipsWithAvatars:p,ChipsWithIcons:d,ChipsWithReadOnlyState:c,Clickable:m,ColorfulChipsForDifferentContent:x,OnColor:u,Overview:o,Themes:h,__namedExportsOrder:de,default:ce},Symbol.toStringTag,{value:"Module"}));export{ke as C,o as O,h as T,c as a,d as b,p as c,m as d,g as e,u as f,x as g,b as h};
