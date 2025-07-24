import{R as e}from"./index-Hemj67b4.js";import{F as r}from"./Flex-DIvs4XZj.js";import{C as n}from"./Chips-Dept289b.js";import{T as t}from"./Text-C0CU0_Vh.js";import{S as ae}from"./Search-B-rolvjp.js";import{A as v}from"./Avatar-DumOSK4_.js";import{D as te}from"./DialogContentContainer-CjdfO6CD.js";import{N as E}from"./function-utils-6EQ2u6TA.js";import{r as se}from"./createComponentTemplate-Y0VTmW_y.js";import{a as f}from"./Settings-DOfpeGYp.js";import{b as oe}from"./camelCase-B8c2Dc7Y.js";import{i as ie}from"./_isIterateeCall-6qSKvFMf.js";import{t as ce}from"./toInteger-CHMLPGzw.js";import{c as pe}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";var me=Math.ceil,de=Math.max;function w(o,a,l){(l?ie(o,a,l):a===void 0)?a=1:a=de(ce(a),0);var s=o==null?0:o.length;if(!s||a<1)return[];for(var y=0,le=0,k=Array(me(s/a));y<s;)k[le++]=oe(o,y,y+=a);return k}const i=""+new URL("person1-aM7sweSh.png",import.meta.url).href,F=""+new URL("rotem-u_vdt1rz.png",import.meta.url).href,O=pe({component:n,iconPropNamesArray:["rightIcon","leftIcon"],actionPropsArray:["onDelete","onMouseDown","onClick"]}),he=se(n),ue={title:"Components/Chips",component:n,argTypes:O.argTypes,decorators:O.decorators},c={render:he.bind({}),name:"Overview",args:{label:"This is a chip",onMouseDown:()=>{},onClick:()=>{}},parameters:{docs:{liveEdit:{isEnabled:!1}}}},p={render:()=>e.createElement(n,{label:"Read only chip",readOnly:!0}),name:"Chips with read only state"},m={render:()=>e.createElement(r,{gap:"medium"},e.createElement(n,{label:"Chip with left icon",leftIcon:f}),e.createElement(n,{label:"Chip with right icon",rightIcon:f})),parameters:{docs:{liveEdit:{scope:{Email:f}}}},name:"Chips with icons"},d={render:()=>e.createElement(r,{gap:"medium"},e.createElement(n,{label:"Chip with left avatar",leftAvatar:i}),e.createElement(n,{label:"Chip with right avatar",rightAvatar:i})),parameters:{docs:{liveEdit:{scope:{person1:i}}}},name:"Chips with avatars"},h={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{label:"This is a long chip"}),e.createElement(n,{label:"Chip positive",color:"positive"}),e.createElement(n,{label:"Chip negative",color:"negative"}),e.createElement(n,{label:"Chip warning",color:"warning"}),e.createElement(n,{label:"Disabled",disabled:!0})),name:"Themes"},u={render:()=>e.createElement(r,{direction:"row",gap:"medium",align:"start"},e.createElement(n,{label:"Clickable default chip",readOnly:!0,onClick:E}),e.createElement(n,{label:"Clickable removable chip",onClick:E})),parameters:{docs:{liveEdit:{scope:{NOOP:E}}}},name:"Clickable"},g={render:()=>{const o=[n.colors.DARK_INDIGO,n.colors.BLACKISH],a=w(Object.keys(n.colors).filter(l=>!o.includes(n.colors[l])),7);return e.createElement(r,{style:{width:"100%",height:300},align:"stretch"},a.map(l=>e.createElement(r,{direction:"column",key:l,justify:"space-between",align:"stretch"},l.map(s=>e.createElement(n,{label:s,key:s,color:n.colors[s],readOnly:!0,allowTextSelection:!0})))))},parameters:{docs:{liveEdit:{scope:{_chunk:w}}}},name:"Chips palette"},C={render:()=>e.createElement(r,{style:{width:"100%"},align:"stretch",justify:"start"},e.createElement(r,{align:"center",justify:"center",style:{background:"var(--sb-primary-selected-color)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"}},e.createElement(n,{label:"On selected",showBorder:!0,readOnly:!0})),e.createElement(r,{align:"center",justify:"center",style:{background:"var(--positive-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"}},e.createElement(n,{label:"On positive",showBorder:!0,color:"positive",readOnly:!0})),e.createElement(r,{align:"center",justify:"center",style:{background:"var(--sb-negative-color-selected)",width:"124px",height:"64px",margin:"var(--sb-spacing-small)",borderRadius:"var(--sb-border-radius-small)"}},e.createElement(n,{label:"On negative",showBorder:!0,color:"negative",readOnly:!0}))),name:"On color"},b={render:()=>e.createElement(r,null,e.createElement(te,null,e.createElement(r,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"}},e.createElement("div",null,e.createElement(n,{label:"January",color:"positive"})),e.createElement(ae,null),e.createElement("div",null,e.createElement(n,{label:"August",readOnly:!0,color:"lipstick"})),e.createElement("div",null,e.createElement(n,{label:"April",readOnly:!0,color:"bubble"})),e.createElement("div",null,e.createElement(n,{label:"March",readOnly:!0,color:"egg_yolk"}))))),name:"Colorful chips for different content"},x={render:()=>e.createElement(r,null,e.createElement(te,null,e.createElement(r,{direction:"column",align:"start",gap:"medium",style:{padding:"var(--spacing-small)"}},e.createElement(ae,{placeholder:"Search names, positions, or a team"}),e.createElement(r,{align:"center",justify:"center"},e.createElement(n,{label:"Esther Schanler",leftAvatar:i}),e.createElement(n,{label:"Rotem Dekel",leftAvatar:F})),e.createElement(t,{style:{paddingInlineStart:"var(--spacing-xs)",marginTop:"var(--spacing-xs)"}},"Suggested people"),e.createElement(r,{direction:"column",align:"start",gap:"medium"},e.createElement(r,{align:"center",justify:"center",key:"cont-1",gap:"small"},e.createElement(v,{size:"small",src:i,type:"img"}),e.createElement(r,{gap:"xs"},e.createElement(t,null,"May Kishon "),e.createElement(t,{color:"secondary"},"(UX/UI Product Designer)"))),e.createElement(r,{align:"center",justify:"center",key:"cont-2",gap:"small"},e.createElement(v,{size:"small",backgroundColor:"dark_purple",text:"LC",type:"text"}),e.createElement(r,{gap:"xs"},e.createElement(t,null,"Liron Cohen"),e.createElement(t,{color:"secondary"},"(Customer Experience)"))),e.createElement(r,{align:"center",justify:"center",key:"cont-3",gap:"small"},e.createElement(v,{size:"small",text:"AL",type:"text"}),e.createElement(r,{gap:"xs"},e.createElement(t,null,"Amanda Lawrence"),e.createElement(t,{color:"secondary"},"(Customer Experience Designer)"))),e.createElement(r,{align:"center",justify:"center",key:"cont-4",gap:"small"},e.createElement(v,{size:"small",text:"DY",type:"text",backgroundColor:"peach"}),e.createElement(r,{gap:"xs"},e.createElement(t,null,"Dor Yehuda"),e.createElement(t,{color:"secondary"},"(Customer Experience Designer)"))))))),parameters:{docs:{liveEdit:{scope:{person1:i,rotem:F}}}},name:"Chips in a person picker combo box"};var T,S,A;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,j,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Chips label="Read only chip" readOnly />,
  name: "Chips with read only state"
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var R,_,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(_=m.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var M,L,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(L=d.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var N,K,U;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <>
      <Chips label="This is a long chip" />
      <Chips label="Chip positive" color="positive" />
      <Chips label="Chip negative" color="negative" />
      <Chips label="Chip warning" color="warning" />
      <Chips label="Disabled" disabled />
    </>,
  name: "Themes"
}`,...(U=(K=h.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var W,Y,z;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var X,q,Q;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Q=(q=C.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var V,Z,$;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const ge=["Overview","ChipsWithReadOnlyState","ChipsWithIcons","ChipsWithAvatars","Themes","Clickable","ChipsPalette","OnColor","ColorfulChipsForDifferentContent","ChipsInAPersonPickerComboBox"],De=Object.freeze(Object.defineProperty({__proto__:null,ChipsInAPersonPickerComboBox:x,ChipsPalette:g,ChipsWithAvatars:d,ChipsWithIcons:m,ChipsWithReadOnlyState:p,Clickable:u,ColorfulChipsForDifferentContent:b,OnColor:C,Overview:c,Themes:h,__namedExportsOrder:ge,default:ue},Symbol.toStringTag,{value:"Module"}));export{De as C,c as O,h as T,p as a,m as b,d as c,u as d,g as e,C as f,b as g,x as h};
