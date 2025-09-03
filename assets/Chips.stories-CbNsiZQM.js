import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{F as a}from"./Flex-DyEHjGyy.js";import{C as r}from"./Chips-zlQiHh_R.js";import{T as i}from"./Text-CcwGdYkh.js";import{S as ne}from"./Search-BcmPixRs.js";import{A as y}from"./Avatar-C0UHAVWS.js";import{D as ie}from"./DialogContentContainer-BZHGB6tc.js";import{N as j}from"./function-utils-6tFwS_v-.js";import{r as le}from"./createComponentTemplate-Y0VTmW_y.js";import{a as f}from"./Settings-DOfpeGYp.js";import{t as te}from"./toArray-BM6n5NCo.js";import{i as oe}from"./isArrayLike-CCcVsAV0.js";import{c as ce}from"./createStoryMetaSettingsDecorator-Dhc6yWra.js";function pe(s,n){if(!Number.isInteger(n)||n<=0)throw new Error("Size must be an integer greater than zero.");const l=Math.ceil(s.length/n),t=Array(l);for(let v=0;v<l;v++){const w=v*n,se=w+n;t[v]=s.slice(w,se)}return t}function k(s,n=1){return n=Math.max(Math.floor(n),0),n===0||!oe(s)?[]:pe(te(s),n)}const o=""+new URL("person1-aM7sweSh.png",import.meta.url).href,O=""+new URL("rotem-u_vdt1rz.png",import.meta.url).href,F=ce({component:r,iconPropNamesArray:["rightIcon","leftIcon"],actionPropsArray:["onDelete","onMouseDown","onClick"]}),de=le(r),he={title:"Components/Chips",component:r,argTypes:F.argTypes,decorators:F.decorators},c={render:de.bind({}),name:"Overview",args:{id:"overview-chip",ariaLabel:"Overview chip",label:"This is a chip",onMouseDown:()=>{},onClick:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},p={render:()=>e.jsx(r,{id:"readonly-chip",ariaLabel:"Read only chip",label:"Read only chip",readOnly:!0}),name:"Chips with read only state"},d={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-icon",ariaLabel:"Chip with left email icon",label:"Chip with left icon",leftIcon:f}),e.jsx(r,{id:"chip-right-icon",ariaLabel:"Chip with right email icon",label:"Chip with right icon",rightIcon:f})]}),parameters:{docs:{liveEdit:{scope:{Email:f}}}},name:"Chips with icons"},h={render:()=>e.jsxs(a,{gap:"medium",children:[e.jsx(r,{id:"chip-left-avatar",ariaLabel:"Chip with left avatar",label:"Chip with left avatar",leftAvatar:o}),e.jsx(r,{id:"chip-right-avatar",ariaLabel:"Chip with right avatar",label:"Chip with right avatar",rightAvatar:o})]}),parameters:{docs:{liveEdit:{scope:{person1:o}}}},name:"Chips with avatars"},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"theme-long",ariaLabel:"Long chip",label:"This is a long chip"}),e.jsx(r,{id:"theme-positive",ariaLabel:"Positive chip",label:"Chip positive",color:"positive"}),e.jsx(r,{id:"theme-negative",ariaLabel:"Negative chip",label:"Chip negative",color:"negative"}),e.jsx(r,{id:"theme-warning",ariaLabel:"Warning chip",label:"Chip warning",color:"warning"}),e.jsx(r,{id:"theme-disabled",ariaLabel:"Disabled chip",label:"Disabled",disabled:!0})]}),name:"Themes"},g={render:()=>e.jsxs(a,{direction:"row",gap:"medium",align:"start",children:[e.jsx(r,{id:"clickable-default",ariaLabel:"Clickable default chip",label:"Clickable default chip",readOnly:!0,onClick:j}),e.jsx(r,{id:"clickable-removable",ariaLabel:"Clickable removable chip",label:"Clickable removable chip",onClick:j})]}),parameters:{docs:{liveEdit:{scope:{NOOP:j}}}},name:"Clickable"},x={render:()=>{const s=[r.colors.DARK_INDIGO,r.colors.BLACKISH],n=k(Object.keys(r.colors).filter(l=>!s.includes(r.colors[l])),7);return e.jsx(a,{style:{width:"100%",height:300},align:"stretch",children:n.map(l=>e.jsx(a,{direction:"column",justify:"space-between",align:"stretch",children:l.map(t=>e.jsx(r,{label:t,color:r.colors[t],readOnly:!0,allowTextSelection:!0},t))},l))})},parameters:{docs:{liveEdit:{scope:{_chunk:k}}}},name:"Chips palette"},u={render:()=>e.jsxs(a,{style:{width:"100%"},align:"stretch",justify:"start",children:[e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-primary-selected-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On selected",showBorder:!0,readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--positive-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On positive",showBorder:!0,color:"positive",readOnly:!0})}),e.jsx(a,{align:"center",justify:"center",style:{background:"var(--sb-negative-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On negative",showBorder:!0,color:"negative",readOnly:!0})})]}),name:"On color"},b={render:()=>e.jsx(a,{children:e.jsx(ie,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx("div",{children:e.jsx(r,{label:"January",color:"positive"})}),e.jsx(ne,{}),e.jsx("div",{children:e.jsx(r,{label:"August",readOnly:!0,color:"lipstick"})}),e.jsx("div",{children:e.jsx(r,{label:"April",readOnly:!0,color:"bubble"})}),e.jsx("div",{children:e.jsx(r,{label:"March",readOnly:!0,color:"egg_yolk"})})]})})}),name:"Colorful chips for different content"},C={render:()=>e.jsx(a,{children:e.jsx(ie,{children:e.jsxs(a,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx(ne,{placeholder:"Search names, positions, or a team"}),e.jsxs(a,{align:"center",justify:"center",children:[e.jsx(r,{label:"Esther Schanler",leftAvatar:o}),e.jsx(r,{label:"Rotem Dekel",leftAvatar:O})]}),e.jsx(i,{style:{paddingInlineStart:"var(--spacing-xs)",marginTop:"var(--spacing-xs)"},children:"Suggested people"}),e.jsxs(a,{direction:"column",align:"start",gap:"medium",children:[e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",src:o,type:"img"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"May Kishon "}),e.jsx(i,{color:"secondary",children:"(UX/UI Product Designer)"})]})]},"cont-1"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",backgroundColor:"dark_purple",text:"LC",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"Liron Cohen"}),e.jsx(i,{color:"secondary",children:"(Customer Experience)"})]})]},"cont-2"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",text:"AL",type:"text"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"Amanda Lawrence"}),e.jsx(i,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-3"),e.jsxs(a,{align:"center",justify:"center",gap:"small",children:[e.jsx(y,{size:"small",text:"DY",type:"text",backgroundColor:"peach"}),e.jsxs(a,{gap:"xs",children:[e.jsx(i,{children:"Dor Yehuda"}),e.jsx(i,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-4")]})]})})}),parameters:{docs:{liveEdit:{scope:{person1:o,rotem:O}}}},name:"Chips in a person picker combo box"};var L,T,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var A,D,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Chips id="readonly-chip" ariaLabel="Read only chip" label="Read only chip" readOnly />,
  name: "Chips with read only state"
}`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,R,P;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(R=d.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var _,M,N;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var B,W,K;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <>
      <Chips id="theme-long" ariaLabel="Long chip" label="This is a long chip" />
      <Chips id="theme-positive" ariaLabel="Positive chip" label="Chip positive" color="positive" />
      <Chips id="theme-negative" ariaLabel="Negative chip" label="Chip negative" color="negative" />
      <Chips id="theme-warning" ariaLabel="Warning chip" label="Chip warning" color="warning" />
      <Chips id="theme-disabled" ariaLabel="Disabled chip" label="Disabled" disabled />
    </>,
  name: "Themes"
}`,...(K=(W=m.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var U,z,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(z=g.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var G,H,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var X,$,q;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(q=($=u.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var Q,V,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var ee,re,ae;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(re=C.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const me=["Overview","ChipsWithReadOnlyState","ChipsWithIcons","ChipsWithAvatars","Themes","Clickable","ChipsPalette","OnColor","ColorfulChipsForDifferentContent","ChipsInAPersonPickerComboBox"],Le=Object.freeze(Object.defineProperty({__proto__:null,ChipsInAPersonPickerComboBox:C,ChipsPalette:x,ChipsWithAvatars:h,ChipsWithIcons:d,ChipsWithReadOnlyState:p,Clickable:g,ColorfulChipsForDifferentContent:b,OnColor:u,Overview:c,Themes:m,__namedExportsOrder:me,default:he},Symbol.toStringTag,{value:"Module"}));export{Le as C,c as O,m as T,p as a,d as b,h as c,g as d,x as e,u as f,b as g,C as h};
