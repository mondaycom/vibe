import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{F as n}from"./Flex-2Q04fxOc.js";import{C as r}from"./Chips-Bf7CQjgg.js";import{T as s}from"./Text-BdZ2Jiqm.js";import{S as ae}from"./Search-DEqjCZg_.js";import{A as v}from"./Avatar-CXX6HRKl.js";import{D as se}from"./DialogContentContainer-CTtMW4dm.js";import{N as j}from"./function-utils-6EQ2u6TA.js";import{r as te}from"./createComponentTemplate-Y0VTmW_y.js";import{a as f}from"./Settings-DOfpeGYp.js";import{b as ie}from"./camelCase-B8c2Dc7Y.js";import{i as oe}from"./_isIterateeCall-6qSKvFMf.js";import{t as ce}from"./toInteger-CHMLPGzw.js";import{c as pe}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";var de=Math.ceil,he=Math.max;function w(i,a,l){(l?oe(i,a,l):a===void 0)?a=1:a=he(ce(a),0);var t=i==null?0:i.length;if(!t||a<1)return[];for(var y=0,le=0,k=Array(de(t/a));y<t;)k[le++]=ie(i,y,y+=a);return k}const o=""+new URL("person1-aM7sweSh.png",import.meta.url).href,F=""+new URL("rotem-u_vdt1rz.png",import.meta.url).href,O=pe({component:r,iconPropNamesArray:["rightIcon","leftIcon"],actionPropsArray:["onDelete","onMouseDown","onClick"]}),me=te(r),xe={title:"Components/Chips",component:r,argTypes:O.argTypes,decorators:O.decorators},c={render:me.bind({}),name:"Overview",args:{label:"This is a chip",onMouseDown:()=>{},onClick:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},p={render:()=>e.jsx(r,{label:"Read only chip",readOnly:!0}),name:"Chips with read only state"},d={render:()=>e.jsxs(n,{gap:"medium",children:[e.jsx(r,{label:"Chip with left icon",leftIcon:f}),e.jsx(r,{label:"Chip with right icon",rightIcon:f})]}),parameters:{docs:{liveEdit:{scope:{Email:f}}}},name:"Chips with icons"},h={render:()=>e.jsxs(n,{gap:"medium",children:[e.jsx(r,{label:"Chip with left avatar",leftAvatar:o}),e.jsx(r,{label:"Chip with right avatar",rightAvatar:o})]}),parameters:{docs:{liveEdit:{scope:{person1:o}}}},name:"Chips with avatars"},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"This is a long chip"}),e.jsx(r,{label:"Chip positive",color:"positive"}),e.jsx(r,{label:"Chip negative",color:"negative"}),e.jsx(r,{label:"Chip warning",color:"warning"}),e.jsx(r,{label:"Disabled",disabled:!0})]}),name:"Themes"},x={render:()=>e.jsxs(n,{direction:"row",gap:"medium",align:"start",children:[e.jsx(r,{label:"Clickable default chip",readOnly:!0,onClick:j}),e.jsx(r,{label:"Clickable removable chip",onClick:j})]}),parameters:{docs:{liveEdit:{scope:{NOOP:j}}}},name:"Clickable"},g={render:()=>{const i=[r.colors.DARK_INDIGO,r.colors.BLACKISH],a=w(Object.keys(r.colors).filter(l=>!i.includes(r.colors[l])),7);return e.jsx(n,{style:{width:"100%",height:300},align:"stretch",children:a.map(l=>e.jsx(n,{direction:"column",justify:"space-between",align:"stretch",children:l.map(t=>e.jsx(r,{label:t,color:r.colors[t],readOnly:!0,allowTextSelection:!0},t))},l))})},parameters:{docs:{liveEdit:{scope:{_chunk:w}}}},name:"Chips palette"},u={render:()=>e.jsxs(n,{style:{width:"100%"},align:"stretch",justify:"start",children:[e.jsx(n,{align:"center",justify:"center",style:{background:"var(--sb-primary-selected-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On selected",showBorder:!0,readOnly:!0})}),e.jsx(n,{align:"center",justify:"center",style:{background:"var(--positive-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On positive",showBorder:!0,color:"positive",readOnly:!0})}),e.jsx(n,{align:"center",justify:"center",style:{background:"var(--sb-negative-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"},children:e.jsx(r,{label:"On negative",showBorder:!0,color:"negative",readOnly:!0})})]}),name:"On color"},C={render:()=>e.jsx(n,{children:e.jsx(se,{children:e.jsxs(n,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx("div",{children:e.jsx(r,{label:"January",color:"positive"})}),e.jsx(ae,{}),e.jsx("div",{children:e.jsx(r,{label:"August",readOnly:!0,color:"lipstick"})}),e.jsx("div",{children:e.jsx(r,{label:"April",readOnly:!0,color:"bubble"})}),e.jsx("div",{children:e.jsx(r,{label:"March",readOnly:!0,color:"egg_yolk"})})]})})}),name:"Colorful chips for different content"},b={render:()=>e.jsx(n,{children:e.jsx(se,{children:e.jsxs(n,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"},children:[e.jsx(ae,{placeholder:"Search names, positions, or a team"}),e.jsxs(n,{align:"center",justify:"center",children:[e.jsx(r,{label:"Esther Schanler",leftAvatar:o}),e.jsx(r,{label:"Rotem Dekel",leftAvatar:F})]}),e.jsx(s,{style:{paddingInlineStart:"var(--spacing-xs)",marginTop:"var(--spacing-xs)"},children:"Suggested people"}),e.jsxs(n,{direction:"column",align:"start",gap:"medium",children:[e.jsxs(n,{align:"center",justify:"center",gap:"small",children:[e.jsx(v,{size:"small",src:o,type:"img"}),e.jsxs(n,{gap:"xs",children:[e.jsx(s,{children:"May Kishon "}),e.jsx(s,{color:"secondary",children:"(UX/UI Product Designer)"})]})]},"cont-1"),e.jsxs(n,{align:"center",justify:"center",gap:"small",children:[e.jsx(v,{size:"small",backgroundColor:"dark_purple",text:"LC",type:"text"}),e.jsxs(n,{gap:"xs",children:[e.jsx(s,{children:"Liron Cohen"}),e.jsx(s,{color:"secondary",children:"(Customer Experience)"})]})]},"cont-2"),e.jsxs(n,{align:"center",justify:"center",gap:"small",children:[e.jsx(v,{size:"small",text:"AL",type:"text"}),e.jsxs(n,{gap:"xs",children:[e.jsx(s,{children:"Amanda Lawrence"}),e.jsx(s,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-3"),e.jsxs(n,{align:"center",justify:"center",gap:"small",children:[e.jsx(v,{size:"small",text:"DY",type:"text",backgroundColor:"peach"}),e.jsxs(n,{gap:"xs",children:[e.jsx(s,{children:"Dor Yehuda"}),e.jsx(s,{color:"secondary",children:"(Customer Experience Designer)"})]})]},"cont-4")]})]})})}),parameters:{docs:{liveEdit:{scope:{person1:o,rotem:F}}}},name:"Chips in a person picker combo box"};var T,S,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: chipsTemplate.bind({}),
  name: "Overview",
  args: {
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
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,E,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Chips label="Read only chip" readOnly />,
  name: "Chips with read only state"
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var R,_,P;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Chips label="Chip with left icon" leftIcon={Email} />
      <Chips label="Chip with right icon" rightIcon={Email} />
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
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var M,L,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Flex gap="medium">
      <Chips label="Chip with left avatar" leftAvatar={person1} />
      <Chips label="Chip with right avatar" rightAvatar={person1} />
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
}`,...(B=(L=h.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var N,K,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <>
      <Chips label="This is a long chip" />
      <Chips label="Chip positive" color="positive" />
      <Chips label="Chip negative" color="negative" />
      <Chips label="Chip warning" color="warning" />
      <Chips label="Disabled" disabled />
    </>,
  name: "Themes"
}`,...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var W,Y,z;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="row" gap="medium" align="start">
        <Chips label="Clickable default chip" readOnly onClick={NOOP} />
        <Chips label="Clickable removable chip" onClick={NOOP} />
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
}`,...(z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var X,q,Q;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(q=u.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var V,Z,$;C.parameters={...C.parameters,docs:{...(V=C.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};const ge=["Overview","ChipsWithReadOnlyState","ChipsWithIcons","ChipsWithAvatars","Themes","Clickable","ChipsPalette","OnColor","ColorfulChipsForDifferentContent","ChipsInAPersonPickerComboBox"],De=Object.freeze(Object.defineProperty({__proto__:null,ChipsInAPersonPickerComboBox:b,ChipsPalette:g,ChipsWithAvatars:h,ChipsWithIcons:d,ChipsWithReadOnlyState:p,Clickable:x,ColorfulChipsForDifferentContent:C,OnColor:u,Overview:c,Themes:m,__namedExportsOrder:ge,default:xe},Symbol.toStringTag,{value:"Module"}));export{De as C,c as O,m as T,p as a,d as b,h as c,x as d,g as e,u as f,C as g,b as h};
