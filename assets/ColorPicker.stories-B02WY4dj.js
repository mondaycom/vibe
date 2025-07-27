import{C as y}from"./ColorPicker-CVNKGJxW.js";import{userEvent as u,within as q}from"./index-JSOB3pIc.js";import{a as o}from"./colors-vars-map-DOupSotq.js";import{r as z}from"./interactions-helper-Bq4hWQWq.js";import{g as J,b as Q}from"./test-ids-utils-9ISiqDto.js";import{i as F,t as V,e as C}from"./interactions-utils-BDSgavBb.js";import{r as X}from"./createComponentTemplate-Y0VTmW_y.js";import{o as E}from"./index-BA_MN9l1.js";import{r as Y}from"./Check-B_icfwyn.js";import{c as Z}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";async function ee(e){await w(e,o.BRIGHT_GREEN),await n(e,o.BRIGHT_GREEN),await V("{arrowDown}",7),await S(e,o.STEEL),await u.keyboard(" "),await S(e,o.STEEL),await n(e,o.STEEL),await T(e,o.BRIGHT_GREEN),await u.keyboard("{arrowDown}"),await g(e,o.STEEL),await u.keyboard("{Enter}"),await T(e,o.STEEL)}const oe=F({tests:[ee],afterEach:async()=>{await z()}});async function te(e){await w(e,o.DARK_PURPLE),await n(e,o.DARK_PURPLE),await V("{arrowRight}",3),await S(e,o.INDIGO),await u.keyboard("{Enter}"),await n(e,o.DARK_PURPLE),await n(e,o.INDIGO),await S(e,o.INDIGO),await w(e,o.DARK_PURPLE),await T(e,o.DARK_PURPLE),await n(e,o.INDIGO),await g(e,o.DARK_PURPLE),await g(e,o.INDIGO)}const re=F({tests:[te],afterEach:async()=>{await z()}});async function w(e,t){const r=await I(e,t),$=await q(r).findByLabelText(t);await u.click($)}async function n(e,t){const r=await I(e,t);C(r.getAttribute("class")).toContain("selectedColor")}async function T(e,t){const r=await I(e,t);C(r.getAttribute("class")).not.toContain("selectedColor")}async function S(e,t){const r=await I(e,t);C(r.getAttribute("class")).toContain("active")}async function g(e,t){const r=await I(e,t);C(r.getAttribute("class")).not.toContain("active")}async function I(e,t){return await e.findByTestId(J(Q.COLOR_PICKER_ITEM,t))}const b=Z({component:y,iconPropNamesArray:["ColorIndicatorIcon","SelectedIndicatorIcon","NoColorIcon"],actionPropsArray:[{name:"onSave",linkedToPropValue:"value"}]}),ae={title:"Components/ColorPicker",component:y,argTypes:b.argTypes,decorators:b.decorators},a=X(y),c={render:a.bind({}),name:"Overview"},i={render:a.bind({}),args:{ColorIndicatorIcon:E},name:"With Indicator"},s={render:a.bind({}),args:{ColorIndicatorIcon:E,value:"peach",shouldRenderIndicatorWithoutBackground:!0},name:"Text Indication"},l={render:a.bind({}),args:{ColorIndicatorIcon:E,colorStyle:"selected"},name:"Selected"},d={render:a.bind({}),args:{noColorText:"Clear color"},name:"No color",play:oe},m={render:a.bind({}),args:{isMultiselect:!0,SelectedIndicatorIcon:Y,value:"peach"},name:"Selected icon",play:re},p={render:a.bind({}),args:{colorShape:"circle"},name:"Shapes"};var P,f,h;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  name: "Overview"
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var R,k,N;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    ColorIndicatorIcon: TextColorIndicator
  },
  name: "With Indicator"
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var _,x,A;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    ColorIndicatorIcon: TextColorIndicator,
    value: "peach",
    shouldRenderIndicatorWithoutBackground: true
  },
  name: "Text Indication"
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var O,D,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    ColorIndicatorIcon: TextColorIndicator,
    colorStyle: "selected"
  },
  name: "Selected"
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var B,G,K;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    noColorText: "Clear color"
  },
  name: "No color",
  play: noColorInteractionSuite
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var W,M,U;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    isMultiselect: true,
    SelectedIndicatorIcon: Check,
    value: "peach"
  },
  name: "Selected icon",
  play: multiSelectionInteractionSuite
}`,...(U=(M=m.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var v,H,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    colorShape: "circle"
  },
  name: "Shapes"
}`,...(j=(H=p.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const ne=["Overview","WithIndicator","TextIndication","Selected","NoColor","SelectedIcon","Shapes"],Ce=Object.freeze(Object.defineProperty({__proto__:null,NoColor:d,Overview:c,Selected:l,SelectedIcon:m,Shapes:p,TextIndication:s,WithIndicator:i,__namedExportsOrder:ne,default:ae},Symbol.toStringTag,{value:"Module"}));export{Ce as C,d as N,c as O,l as S,s as T,i as W,m as a,p as b};
