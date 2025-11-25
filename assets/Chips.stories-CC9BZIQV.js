import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as le}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{p as t}from"./person1-D9Wcho68.js";import{p as w}from"./person3-BX6ktRh1.js";import{r as se}from"./createComponentTemplate-B08h-OOW.js";import{l as j}from"./Email-TZY0cRuW.js";import{S as ae}from"./Search-1tqW-CcQ.js";import{C as r}from"./Chips-B0mGgHv5.js";import{F as a}from"./Flex-Bimzf4jb.js";import{D as ne}from"./DialogContentContainer-BBTL4acN.js";import{T as n}from"./Text-DVNPP_6L.js";import{A as y}from"./Avatar-CwVuOGB7.js";function k(C,i){if(!Number.isInteger(i)||i<=0)throw new Error("Size must be an integer greater than zero.");const l=Math.ceil(C.length/i),s=Array(l);for(let v=0;v<l;v++){const f=v*i,ie=f+i;s[v]=C.slice(f,ie)}return s}const F=le({component:r,iconPropNamesArray:["rightIcon","leftIcon"],actionPropsArray:["onDelete","onMouseDown","onClick"]}),te=se(r),oe={title:"Components/Chips",component:r,argTypes:F.argTypes,decorators:F.decorators},o={render:te.bind({}),name:"Overview",args:{id:"overview-chip",ariaLabel:"Overview chip",label:"This is a chip",onMouseDown:()=>{},onClick:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>e.jsx(r,{id:"readonly-chip",ariaLabel:"Read only chip",label:"Read only chip",readOnly:!0}),name:"Chips with read only state"},d={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-icon",ariaLabel:"Chip with left email icon",label:"Chip with left icon",leftIcon:j}),e.jsx(r,{id:"chip-right-icon",ariaLabel:"Chip with right email icon",label:"Chip with right icon",rightIcon:j})]}),parameters:{docs:{liveEdit:{scope:{Email:j}}}},name:"Chips with icons"},p={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-avatar",ariaLabel:"Chip with left avatar",label:"Chip with left avatar",leftAvatar:t}),e.jsx(r,{id:"chip-right-avatar",ariaLabel:"Chip with right avatar",label:"Chip with right avatar",rightAvatar:t})]}),parameters:{docs:{liveEdit:{scope:{person1:t}}}},name:"Chips with avatars"},h={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"theme-long",ariaLabel:"Long chip",label:"This is a long chip"}),e.jsx(r,{id:"theme-positive",ariaLabel:"Positive chip",label:"Chip positive",color:"positive"}),e.jsx(r,{id:"theme-negative",ariaLabel:"Negative chip",label:"Chip negative",color:"negative"}),e.jsx(r,{id:"theme-warning",ariaLabel:"Warning chip",label:"Chip warning",color:"warning"}),e.jsx(r,{id:"theme-neutral",ariaLabel:"Neutral chip",label:"Chip neutral",color:"neutral"}),e.jsx(r,{id:"theme-disabled",ariaLabel:"Disabled chip",label:"Disabled",disabled:!0})]}),name:"Themes"},m={render:()=>e.jsxs(a,{direction:"row",gap:"medium",align:"start",children:[e.jsx(r,{id:"clickable-default",ariaLabel:"Clickable default chip",label:"Clickable default chip",readOnly:!0,onClick:()=>{}}),e.jsx(r,{id:"clickable-removable",ariaLabel:"Clickable removable chip",label:"Clickable removable chip",onClick:()=>{}})]}),name:"Clickable"},g={render:()=>{const C=[r.colors.DARK_INDIGO,r.colors.BLACKISH],i=k(Object.keys(r.colors).filter(l=>!C.includes(r.colors[l])),7);return e.jsx(a,{style:{width:"100%",height:300},align:"stretch",children:i.map(l=>e.jsx(a,{direction:"column",justify:"space-between",align:"stretch",children:l.map(s=>e.jsx(r,{label:s,color:r.colors[s],readOnly:!0,allowTextSelection:!0},s))},l))})},parameters:{docs:{liveEdit:{scope:{_chunk:k}}}},name:"Chips palette"},u={render:()=>e.jsxs(a,{style:{width:"100%"},align:"stretch",justify:"start",children:[e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-primary-selected-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On selected",showBorder:!0,readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--positive-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On positive",showBorder:!0,color:"positive",readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-negative-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On negative",showBorder:!0,color:"negative",readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--ui-background-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On neutral",showBorder:!0,color:"neutral",readOnly:!0})})]}),name:"On color"},x={render:()=>e.jsx(a,{children:e.jsx(ne,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx("div",{children:e.jsx(r,{label:"January",color:"positive"})}),e.jsx(ae,{}),e.jsx("div",{children:e.jsx(r,{label:"August",readOnly:!0,color:"lipstick"})}),e.jsx("div",{children:e.jsx(r,{label:"April",readOnly:!0,color:"bubble"})}),e.jsx("div",{children:e.jsx(r,{label:"March",readOnly:!0,color:"egg_yolk"})})]})})}),name:"Colorful chips for different content"},b={render:()=>e.jsx(a,{children:e.jsx(ne,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx(ae,{placeholder:"Search names, positions, or a team"}),e.jsxs(a,{align:"center",justify:"center",children:[e.jsx(r,{label:"Julia Martinez",leftAvatar:t}),e.jsx(r,{label:"Juan Rodriguez",leftAvatar:w})]}),e.jsx(n,{style:{paddingInlineStart:"var(--spacing-xs)",marginTop:"var(--spacing-xs)"},children:"Suggested people"}),e.jsxs(a,{direction:"column",align:"start",gap:"medium",children:[e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",src:t,type:"img"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"May Kishon "}),e.jsx(n,{color:"secondary",children:"(UX/UI Product Designer)"})]})]},"cont-1"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",backgroundColor:"dark_purple",text:"LC",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"Liron Cohen"}),e.jsx(n,{color:"secondary",children:"(Customer Experience)"})]})]},"cont-2"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",text:"AL",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"Amanda Lawrence"}),e.jsx(n,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-3"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",text:"DY",type:"text",backgroundColor:"peach"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"Dor Yehuda"}),e.jsx(n,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-4")]})]})})}),parameters:{docs:{liveEdit:{scope:{person1:t,person3:w}}}},name:"Chips in a person picker combo box"};var O,L,T;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: chipsTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-chip",
    ariaLabel: "Overview chip",
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
}`,...(T=(L=o.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var A,S,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Chips id="readonly-chip" ariaLabel="Read only chip" label="Read only chip" readOnly />,
  name: "Chips with read only state"
}`,...(D=(S=c.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,I,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Chips id="chip-left-icon" ariaLabel="Chip with left email icon" label="Chip with left icon" leftIcon={Email} />
      <Chips id="chip-right-icon" ariaLabel="Chip with right email icon" label="Chip with right icon" rightIcon={Email} />
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
}`,...(R=(I=d.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var _,P,B;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Chips id="chip-left-avatar" ariaLabel="Chip with left avatar" label="Chip with left avatar" leftAvatar={person1} />
      <Chips id="chip-right-avatar" ariaLabel="Chip with right avatar" label="Chip with right avatar" rightAvatar={person1} />
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
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var M,z,N;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <>
      <Chips id="theme-long" ariaLabel="Long chip" label="This is a long chip" />
      <Chips id="theme-positive" ariaLabel="Positive chip" label="Chip positive" color="positive" />
      <Chips id="theme-negative" ariaLabel="Negative chip" label="Chip negative" color="negative" />
      <Chips id="theme-warning" ariaLabel="Warning chip" label="Chip warning" color="warning" />
      <Chips id="theme-neutral" ariaLabel="Neutral chip" label="Chip neutral" color="neutral" />
      <Chips id="theme-disabled" ariaLabel="Disabled chip" label="Disabled" disabled />
    </>,
  name: "Themes"
}`,...(N=(z=h.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var W,J,K;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="row" gap="medium" align="start">
        <Chips id="clickable-default" ariaLabel="Clickable default chip" label="Clickable default chip" readOnly onClick={() => {}} />
        <Chips id="clickable-removable" ariaLabel="Clickable removable chip" label="Clickable removable chip" onClick={() => {}} />
      </Flex>;
  },
  name: "Clickable"
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,Y,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const excludedColors = [Chips.colors.DARK_INDIGO, Chips.colors.BLACKISH];
    const allowedColorsChunks = _chunk(
    // @ts-ignore
    Object.keys(Chips.colors).filter(k => !excludedColors.includes(Chips.colors[k])), 7);
    return <Flex style={{
      width: "100%",
      height: 300
    }} align="stretch">
        {allowedColorsChunks.map((colorChunk: any) => {
        return <Flex direction="column" key={colorChunk} justify="space-between" align="stretch">
              {colorChunk.map((colorName: any) =>
          // @ts-ignore
          <Chips label={colorName} key={colorName} color={Chips.colors[colorName]} readOnly allowTextSelection />)}
            </Flex>;
      })}
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          _chunk
        }
      }
    }
  },
  name: "Chips palette"
}`,...(G=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var H,X,q;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};var Q,V,Z;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Flex direction="column" align="start" gap="medium" style={{
        padding: "var(--spacing-small)"
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
}`,...(Z=(V=x.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var $,ee,re;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Flex direction="column" align="start" gap="medium" style={{
        padding: "var(--spacing-small)"
      }}>
          <Search placeholder="Search names, positions, or a team" />
          <Flex align="center" justify="center">
            <Chips label="Julia Martinez" leftAvatar={person1} />
            <Chips label="Juan Rodriguez" leftAvatar={person3} />
          </Flex>
          <Text style={{
          paddingInlineStart: "var(--spacing-xs)",
          marginTop: "var(--spacing-xs)"
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
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ce=["Overview","ChipsWithReadOnlyState","ChipsWithIcons","ChipsWithAvatars","Themes","Clickable","ChipsPalette","OnColor","ColorfulChipsForDifferentContent","ChipsInAPersonPickerComboBox"],fe=Object.freeze(Object.defineProperty({__proto__:null,ChipsInAPersonPickerComboBox:b,ChipsPalette:g,ChipsWithAvatars:p,ChipsWithIcons:d,ChipsWithReadOnlyState:c,Clickable:m,ColorfulChipsForDifferentContent:x,OnColor:u,Overview:o,Themes:h,__namedExportsOrder:ce,default:oe},Symbol.toStringTag,{value:"Module"}));export{fe as C,o as O,h as T,c as a,d as b,p as c,m as d,g as e,u as f,x as g,b as h};
