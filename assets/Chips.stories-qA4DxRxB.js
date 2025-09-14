import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{F as a}from"./Flex-D6jv3OvD.js";import{C as r}from"./Chips-Do6sdvT2.js";import{T as n}from"./Text-BdGfTGe8.js";import{S as ne}from"./Search-DAVDN4z4.js";import{A as y}from"./Avatar-COWDVMz3.js";import{D as ie}from"./DialogContentContainer-CyLYKep7.js";import{N as j}from"./function-utils-CSFuT5hl.js";import{r as le}from"./createComponentTemplate-B08h-OOW.js";import{a as f}from"./Settings-WHGZN_3r.js";import{c as te}from"./createStoryMetaSettingsDecorator-M9remOuO.js";function k(C,i){if(!Number.isInteger(i)||i<=0)throw new Error("Size must be an integer greater than zero.");const s=Math.ceil(C.length/i),l=Array(s);for(let v=0;v<s;v++){const w=v*i,se=w+i;l[v]=C.slice(w,se)}return l}const t=""+new URL("person1-aM7sweSh.png",import.meta.url).href,O=""+new URL("rotem-u_vdt1rz.png",import.meta.url).href,F=te({component:r,iconPropNamesArray:["rightIcon","leftIcon"],actionPropsArray:["onDelete","onMouseDown","onClick"]}),oe=le(r),ce={title:"Components/Chips",component:r,argTypes:F.argTypes,decorators:F.decorators},o={render:oe.bind({}),name:"Overview",args:{id:"overview-chip",ariaLabel:"Overview chip",label:"This is a chip",onMouseDown:()=>{},onClick:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},c={render:()=>e.jsx(r,{id:"readonly-chip",ariaLabel:"Read only chip",label:"Read only chip",readOnly:!0}),name:"Chips with read only state"},p={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-icon",ariaLabel:"Chip with left email icon",label:"Chip with left icon",leftIcon:f}),e.jsx(r,{id:"chip-right-icon",ariaLabel:"Chip with right email icon",label:"Chip with right icon",rightIcon:f})]}),parameters:{docs:{liveEdit:{scope:{Email:f}}}},name:"Chips with icons"},d={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-avatar",ariaLabel:"Chip with left avatar",label:"Chip with left avatar",leftAvatar:t}),e.jsx(r,{id:"chip-right-avatar",ariaLabel:"Chip with right avatar",label:"Chip with right avatar",rightAvatar:t})]}),parameters:{docs:{liveEdit:{scope:{person1:t}}}},name:"Chips with avatars"},h={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"theme-long",ariaLabel:"Long chip",label:"This is a long chip"}),e.jsx(r,{id:"theme-positive",ariaLabel:"Positive chip",label:"Chip positive",color:"positive"}),e.jsx(r,{id:"theme-negative",ariaLabel:"Negative chip",label:"Chip negative",color:"negative"}),e.jsx(r,{id:"theme-warning",ariaLabel:"Warning chip",label:"Chip warning",color:"warning"}),e.jsx(r,{id:"theme-disabled",ariaLabel:"Disabled chip",label:"Disabled",disabled:!0})]}),name:"Themes"},m={render:()=>e.jsxs(a,{direction:"row",gap:"medium",align:"start",children:[e.jsx(r,{id:"clickable-default",ariaLabel:"Clickable default chip",label:"Clickable default chip",readOnly:!0,onClick:j}),e.jsx(r,{id:"clickable-removable",ariaLabel:"Clickable removable chip",label:"Clickable removable chip",onClick:j})]}),parameters:{docs:{liveEdit:{scope:{NOOP:j}}}},name:"Clickable"},g={render:()=>{const C=[r.colors.DARK_INDIGO,r.colors.BLACKISH],i=k(Object.keys(r.colors).filter(s=>!C.includes(r.colors[s])),7);return e.jsx(a,{style:{width:"100%",height:300},align:"stretch",children:i.map(s=>e.jsx(a,{direction:"column",justify:"space-between",align:"stretch",children:s.map(l=>e.jsx(r,{label:l,color:r.colors[l],readOnly:!0,allowTextSelection:!0},l))},s))})},parameters:{docs:{liveEdit:{scope:{_chunk:k}}}},name:"Chips palette"},x={render:()=>e.jsxs(a,{style:{width:"100%"},align:"stretch",justify:"start",children:[e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-primary-selected-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On selected",showBorder:!0,readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--positive-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On positive",showBorder:!0,color:"positive",readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-negative-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On negative",showBorder:!0,color:"negative",readOnly:!0})})]}),name:"On color"},u={render:()=>e.jsx(a,{children:e.jsx(ie,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx("div",{children:e.jsx(r,{label:"January",color:"positive"})}),e.jsx(ne,{}),e.jsx("div",{children:e.jsx(r,{label:"August",readOnly:!0,color:"lipstick"})}),e.jsx("div",{children:e.jsx(r,{label:"April",readOnly:!0,color:"bubble"})}),e.jsx("div",{children:e.jsx(r,{label:"March",readOnly:!0,color:"egg_yolk"})})]})})}),name:"Colorful chips for different content"},b={render:()=>e.jsx(a,{children:e.jsx(ie,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx(ne,{placeholder:"Search names, positions, or a team"}),e.jsxs(a,{align:"center",justify:"center",children:[e.jsx(r,{label:"Esther Schanler",leftAvatar:t}),e.jsx(r,{label:"Rotem Dekel",leftAvatar:O})]}),e.jsx(n,{style:{paddingInlineStart:"var(--spacing-xs)",marginTop:"var(--spacing-xs)"},children:"Suggested people"}),e.jsxs(a,{direction:"column",align:"start",gap:"medium",children:[e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",src:t,type:"img"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"May Kishon "}),e.jsx(n,{color:"secondary",children:"(UX/UI Product Designer)"})]})]},"cont-1"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",backgroundColor:"dark_purple",text:"LC",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"Liron Cohen"}),e.jsx(n,{color:"secondary",children:"(Customer Experience)"})]})]},"cont-2"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",text:"AL",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"Amanda Lawrence"}),e.jsx(n,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-3"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",text:"DY",type:"text",backgroundColor:"peach"}),e.jsxs(a,{gap:"xs",children:[e.jsx(n,{children:"Dor Yehuda"}),e.jsx(n,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-4")]})]})})}),parameters:{docs:{liveEdit:{scope:{person1:t,rotem:O}}}},name:"Chips in a person picker combo box"};var L,T,S;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var A,D,E;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Chips id="readonly-chip" ariaLabel="Read only chip" label="Read only chip" readOnly />,
  name: "Chips with read only state"
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,R,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(R=p.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var _,N,M;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(N=d.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var B,z,W;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <Chips id="theme-long" ariaLabel="Long chip" label="This is a long chip" />
      <Chips id="theme-positive" ariaLabel="Positive chip" label="Chip positive" color="positive" />
      <Chips id="theme-negative" ariaLabel="Negative chip" label="Chip negative" color="negative" />
      <Chips id="theme-warning" ariaLabel="Warning chip" label="Chip warning" color="warning" />
      <Chips id="theme-disabled" ariaLabel="Disabled chip" label="Disabled" disabled />
    </>,
  name: "Themes"
}`,...(W=(z=h.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var K,U,Y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="row" gap="medium" align="start">
        <Chips id="clickable-default" ariaLabel="Clickable default chip" label="Clickable default chip" readOnly onClick={NOOP} />
        <Chips id="clickable-removable" ariaLabel="Clickable removable chip" label="Clickable removable chip" onClick={NOOP} />
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          NOOP
        }
      }
    }
  },
  name: "Clickable"
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var X,q,Q;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
    </Flex>,
  name: "On color"
}`,...(Q=(q=x.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var V,Z,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Flex>
      <DialogContentContainer>
        <Flex direction="column" align="start" gap="medium" style={{
        padding: "var(--spacing-small)"
      }}>
          <Search placeholder="Search names, positions, or a team" />
          <Flex align="center" justify="center">
            <Chips label="Esther Schanler" leftAvatar={person1} />
            <Chips label="Rotem Dekel" leftAvatar={rotem} />
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
          rotem
        }
      }
    }
  },
  name: "Chips in a person picker combo box"
}`,...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const pe=["Overview","ChipsWithReadOnlyState","ChipsWithIcons","ChipsWithAvatars","Themes","Clickable","ChipsPalette","OnColor","ColorfulChipsForDifferentContent","ChipsInAPersonPickerComboBox"],fe=Object.freeze(Object.defineProperty({__proto__:null,ChipsInAPersonPickerComboBox:b,ChipsPalette:g,ChipsWithAvatars:d,ChipsWithIcons:p,ChipsWithReadOnlyState:c,Clickable:m,ColorfulChipsForDifferentContent:u,OnColor:x,Overview:o,Themes:h,__namedExportsOrder:pe,default:ce},Symbol.toStringTag,{value:"Module"}));export{fe as C,o as O,h as T,c as a,p as b,d as c,m as d,g as e,x as f,u as g,b as h};
