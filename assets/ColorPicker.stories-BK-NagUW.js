import{c as q}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{userEvent as u,within as J}from"./index-i7od9_os.js";import{i as z,r as F,t as V,e as w}from"./interactions-utils-CEzMMPBA.js";import{g as Q,C as X}from"./useMergeRef-Cs5OHCni.js";import{r as Y}from"./createComponentTemplate-B08h-OOW.js";import{u as k}from"./index-BVKo2bYj.js";import{r as Z}from"./Check-CxyRTNy4.js";import{C as E}from"./ColorPicker-BKWxfTsI.js";const o={BRIGHT_GREEN:"bright-green",STEEL:"steel",DARK_PURPLE:"dark_purple",INDIGO:"indigo"};async function ee(e){await C(e,o.BRIGHT_GREEN),await n(e,o.BRIGHT_GREEN),await V("{arrowDown}",7),await S(e,o.STEEL),await u.keyboard(" "),await S(e,o.STEEL),await n(e,o.STEEL),await T(e,o.BRIGHT_GREEN),await u.keyboard("{arrowDown}"),await g(e,o.STEEL),await u.keyboard("{Enter}"),await T(e,o.STEEL)}const oe=z({tests:[ee],afterEach:async()=>{await F()}});async function re(e){await C(e,o.DARK_PURPLE),await n(e,o.DARK_PURPLE),await V("{arrowRight}",3),await S(e,o.INDIGO),await u.keyboard("{Enter}"),await n(e,o.DARK_PURPLE),await n(e,o.INDIGO),await S(e,o.INDIGO),await C(e,o.DARK_PURPLE),await T(e,o.DARK_PURPLE),await n(e,o.INDIGO),await g(e,o.DARK_PURPLE),await g(e,o.INDIGO)}const te=z({tests:[re],afterEach:async()=>{await F()}});async function C(e,r){const t=await I(e,r),$=await J(t).findByLabelText(r);await u.click($)}async function n(e,r){const t=await I(e,r);w(t.getAttribute("class")).toContain("selectedColor")}async function T(e,r){const t=await I(e,r);w(t.getAttribute("class")).not.toContain("selectedColor")}async function S(e,r){const t=await I(e,r);w(t.getAttribute("class")).toContain("active")}async function g(e,r){const t=await I(e,r);w(t.getAttribute("class")).not.toContain("active")}async function I(e,r){return await e.findByTestId(Q(X.COLOR_PICKER_ITEM,r))}const y=q({component:E,iconPropNamesArray:["ColorIndicatorIcon","SelectedIndicatorIcon","NoColorIcon"],actionPropsArray:[{name:"onSave",linkedToPropValue:"value"}]}),ae={title:"Components/ColorPicker",component:E,argTypes:y.argTypes,decorators:y.decorators},a=Y(E),c={render:a.bind({}),args:{id:"overview-color-picker"},name:"Overview"},i={render:a.bind({}),args:{id:"indicator-color-picker",ColorIndicatorIcon:k},name:"With Indicator"},s={render:a.bind({}),args:{id:"text-indication-color-picker",ColorIndicatorIcon:k,value:"peach",shouldRenderIndicatorWithoutBackground:!0},name:"Text Indication"},l={render:a.bind({}),args:{id:"selected-color-picker",ColorIndicatorIcon:k,colorStyle:"selected"},name:"Selected"},d={render:a.bind({}),args:{id:"no-color-picker",noColorText:"Clear color"},name:"No color",play:oe},p={render:a.bind({}),args:{id:"multiselect-color-picker",isMultiselect:!0,SelectedIndicatorIcon:Z,value:"peach"},name:"Selected icon",play:te},m={render:a.bind({}),args:{id:"shapes-color-picker",colorShape:"circle"},name:"Shapes"};var P,b,h;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "overview-color-picker"
  },
  name: "Overview"
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var R,f,_;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "indicator-color-picker",
    ColorIndicatorIcon: TextColorIndicator
  },
  name: "With Indicator"
}`,...(_=(f=i.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var N,x,A;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "text-indication-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    value: "peach",
    shouldRenderIndicatorWithoutBackground: true
  },
  name: "Text Indication"
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var D,O,L;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "selected-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    colorStyle: "selected"
  },
  name: "Selected"
}`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var G,B,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "no-color-picker",
    noColorText: "Clear color"
  },
  name: "No color",
  play: noColorInteractionSuite
}`,...(K=(B=d.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var W,v,M;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "multiselect-color-picker",
    isMultiselect: true,
    SelectedIndicatorIcon: Check,
    value: "peach"
  },
  name: "Selected icon",
  play: multiSelectionInteractionSuite
}`,...(M=(v=p.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var U,H,j;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "shapes-color-picker",
    colorShape: "circle"
  },
  name: "Shapes"
}`,...(j=(H=m.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const ne=["Overview","WithIndicator","TextIndication","Selected","NoColor","SelectedIcon","Shapes"],Ie=Object.freeze(Object.defineProperty({__proto__:null,NoColor:d,Overview:c,Selected:l,SelectedIcon:p,Shapes:m,TextIndication:s,WithIndicator:i,__namedExportsOrder:ne,default:ae},Symbol.toStringTag,{value:"Module"}));export{Ie as C,d as N,c as O,l as S,s as T,i as W,p as a,m as b};
