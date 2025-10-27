import{C as g}from"./ColorPicker-CDAwYYt-.js";import{userEvent as u,within as q}from"./index-i7od9_os.js";import{a as o}from"./colors-vars-map-DOupSotq.js";import{r as z}from"./interactions-helper-BLVzu_Hd.js";import{g as J,b as Q}from"./test-ids-utils-B1IbFLmr.js";import{i as F,t as V,e as w}from"./interactions-utils-Brumg6Ey.js";import{r as X}from"./createComponentTemplate-B08h-OOW.js";import{n as y}from"./index-CkcRWdy2.js";import{r as Y}from"./Check-CxyRTNy4.js";import{c as Z}from"./createStoryMetaSettingsDecorator-DMY_JaA7.js";async function ee(e){await C(e,o.BRIGHT_GREEN),await n(e,o.BRIGHT_GREEN),await V("{arrowDown}",7),await S(e,o.STEEL),await u.keyboard(" "),await S(e,o.STEEL),await n(e,o.STEEL),await T(e,o.BRIGHT_GREEN),await u.keyboard("{arrowDown}"),await k(e,o.STEEL),await u.keyboard("{Enter}"),await T(e,o.STEEL)}const oe=F({tests:[ee],afterEach:async()=>{await z()}});async function re(e){await C(e,o.DARK_PURPLE),await n(e,o.DARK_PURPLE),await V("{arrowRight}",3),await S(e,o.INDIGO),await u.keyboard("{Enter}"),await n(e,o.DARK_PURPLE),await n(e,o.INDIGO),await S(e,o.INDIGO),await C(e,o.DARK_PURPLE),await T(e,o.DARK_PURPLE),await n(e,o.INDIGO),await k(e,o.DARK_PURPLE),await k(e,o.INDIGO)}const te=F({tests:[re],afterEach:async()=>{await z()}});async function C(e,r){const t=await I(e,r),$=await q(t).findByLabelText(r);await u.click($)}async function n(e,r){const t=await I(e,r);w(t.getAttribute("class")).toContain("selectedColor")}async function T(e,r){const t=await I(e,r);w(t.getAttribute("class")).not.toContain("selectedColor")}async function S(e,r){const t=await I(e,r);w(t.getAttribute("class")).toContain("active")}async function k(e,r){const t=await I(e,r);w(t.getAttribute("class")).not.toContain("active")}async function I(e,r){return await e.findByTestId(J(Q.COLOR_PICKER_ITEM,r))}const E=Z({component:g,iconPropNamesArray:["ColorIndicatorIcon","SelectedIndicatorIcon","NoColorIcon"],actionPropsArray:[{name:"onSave",linkedToPropValue:"value"}]}),ae={title:"Components/ColorPicker",component:g,argTypes:E.argTypes,decorators:E.decorators},a=X(g),c={render:a.bind({}),args:{id:"overview-color-picker"},name:"Overview"},i={render:a.bind({}),args:{id:"indicator-color-picker",ColorIndicatorIcon:y},name:"With Indicator"},s={render:a.bind({}),args:{id:"text-indication-color-picker",ColorIndicatorIcon:y,value:"peach",shouldRenderIndicatorWithoutBackground:!0},name:"Text Indication"},l={render:a.bind({}),args:{id:"selected-color-picker",ColorIndicatorIcon:y,colorStyle:"selected"},name:"Selected"},d={render:a.bind({}),args:{id:"no-color-picker",noColorText:"Clear color"},name:"No color",play:oe},p={render:a.bind({}),args:{id:"multiselect-color-picker",isMultiselect:!0,SelectedIndicatorIcon:Y,value:"peach"},name:"Selected icon",play:te},m={render:a.bind({}),args:{id:"shapes-color-picker",colorShape:"circle"},name:"Shapes"};var b,P,f;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "overview-color-picker"
  },
  name: "Overview"
}`,...(f=(P=c.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};var h,R,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "indicator-color-picker",
    ColorIndicatorIcon: TextColorIndicator
  },
  name: "With Indicator"
}`,...(x=(R=i.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var N,_,A;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "text-indication-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    value: "peach",
    shouldRenderIndicatorWithoutBackground: true
  },
  name: "Text Indication"
}`,...(A=(_=s.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var O,D,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "selected-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    colorStyle: "selected"
  },
  name: "Selected"
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var B,G,K;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "no-color-picker",
    noColorText: "Clear color"
  },
  name: "No color",
  play: noColorInteractionSuite
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var W,v,M;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(H=m.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const ne=["Overview","WithIndicator","TextIndication","Selected","NoColor","SelectedIcon","Shapes"],we=Object.freeze(Object.defineProperty({__proto__:null,NoColor:d,Overview:c,Selected:l,SelectedIcon:p,Shapes:m,TextIndication:s,WithIndicator:i,__namedExportsOrder:ne,default:ae},Symbol.toStringTag,{value:"Module"}));export{we as C,d as N,c as O,l as S,s as T,i as W,p as a,m as b};
