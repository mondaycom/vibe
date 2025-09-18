import{C as b}from"./ColorPicker-CcQQeas4.js";import{userEvent as u,within as Q}from"./index-i7od9_os.js";import{a as r}from"./colors-vars-map-DOupSotq.js";import{r as z}from"./interactions-helper-BLVzu_Hd.js";import{g as X,b as Y}from"./test-ids-utils-CSfXomCJ.js";import{i as F,t as $,e as y}from"./interactions-utils-C-1LoDmD.js";import{r as Z}from"./createComponentTemplate-B08h-OOW.js";import{n as _}from"./index-CkcRWdy2.js";import{r as ee}from"./Check-CxyRTNy4.js";import{c as re}from"./createStoryMetaSettingsDecorator-M9remOuO.js";async function oe(e){await C(e,r.BRIGHT_GREEN),await n(e,r.BRIGHT_GREEN),await $("{arrowDown}",7),await S(e,r.STEEL),await u.keyboard(" "),await S(e,r.STEEL),await n(e,r.STEEL),await T(e,r.BRIGHT_GREEN),await u.keyboard("{arrowDown}"),await k(e,r.STEEL),await u.keyboard("{Enter}"),await T(e,r.STEEL)}const g=F({tests:[oe],afterEach:async()=>{await z()}});async function te(e){await C(e,r.DARK_PURPLE),await n(e,r.DARK_PURPLE),await $("{arrowRight}",3),await S(e,r.INDIGO),await u.keyboard("{Enter}"),await n(e,r.DARK_PURPLE),await n(e,r.INDIGO),await S(e,r.INDIGO),await C(e,r.DARK_PURPLE),await T(e,r.DARK_PURPLE),await n(e,r.INDIGO),await k(e,r.DARK_PURPLE),await k(e,r.INDIGO)}const w=F({tests:[te],afterEach:async()=>{await z()}});async function C(e,o){const t=await I(e,o),J=await Q(t).findByLabelText(o);await u.click(J)}async function n(e,o){const t=await I(e,o);y(t.getAttribute("class")).toContain("selectedColor")}async function T(e,o){const t=await I(e,o);y(t.getAttribute("class")).not.toContain("selectedColor")}async function S(e,o){const t=await I(e,o);y(t.getAttribute("class")).toContain("active")}async function k(e,o){const t=await I(e,o);y(t.getAttribute("class")).not.toContain("active")}async function I(e,o){return await e.findByTestId(X(Y.COLOR_PICKER_ITEM,o))}try{g.displayName="noColorInteractionSuite",g.__docgenInfo={description:"",displayName:"noColorInteractionSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}try{w.displayName="multiSelectionInteractionSuite",w.__docgenInfo={description:"",displayName:"multiSelectionInteractionSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const f=re({component:b,iconPropNamesArray:["ColorIndicatorIcon","SelectedIndicatorIcon","NoColorIcon"],actionPropsArray:[{name:"onSave",linkedToPropValue:"value"}]}),ae={title:"Components/ColorPicker",component:b,argTypes:f.argTypes,decorators:f.decorators},a=Z(b),i={render:a.bind({}),args:{id:"overview-color-picker"},name:"Overview"},c={render:a.bind({}),args:{id:"indicator-color-picker",ColorIndicatorIcon:_},name:"With Indicator"},s={render:a.bind({}),args:{id:"text-indication-color-picker",ColorIndicatorIcon:_,value:"peach",shouldRenderIndicatorWithoutBackground:!0},name:"Text Indication"},l={render:a.bind({}),args:{id:"selected-color-picker",ColorIndicatorIcon:_,colorStyle:"selected"},name:"Selected"},d={render:a.bind({}),args:{id:"no-color-picker",noColorText:"Clear color"},name:"No color",play:g},p={render:a.bind({}),args:{id:"multiselect-color-picker",isMultiselect:!0,SelectedIndicatorIcon:ee,value:"peach"},name:"Selected icon",play:w},m={render:a.bind({}),args:{id:"shapes-color-picker",colorShape:"circle"},name:"Shapes"};var E,h,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "overview-color-picker"
  },
  name: "Overview"
}`,...(P=(h=i.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var R,N,x;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "indicator-color-picker",
    ColorIndicatorIcon: TextColorIndicator
  },
  name: "With Indicator"
}`,...(x=(N=c.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var v,A,O;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "text-indication-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    value: "peach",
    shouldRenderIndicatorWithoutBackground: true
  },
  name: "Text Indication"
}`,...(O=(A=s.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var D,L,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "selected-color-picker",
    ColorIndicatorIcon: TextColorIndicator,
    colorStyle: "selected"
  },
  name: "Selected"
}`,...(B=(L=l.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var G,K,W;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "no-color-picker",
    noColorText: "Clear color"
  },
  name: "No color",
  play: noColorInteractionSuite
}`,...(W=(K=d.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var M,q,U;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "multiselect-color-picker",
    isMultiselect: true,
    SelectedIndicatorIcon: Check,
    value: "peach"
  },
  name: "Selected icon",
  play: multiSelectionInteractionSuite
}`,...(U=(q=p.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var V,H,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: colorPickerTemplate.bind({}),
  args: {
    id: "shapes-color-picker",
    colorShape: "circle"
  },
  name: "Shapes"
}`,...(j=(H=m.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};const ne=["Overview","WithIndicator","TextIndication","Selected","NoColor","SelectedIcon","Shapes"],ye=Object.freeze(Object.defineProperty({__proto__:null,NoColor:d,Overview:i,Selected:l,SelectedIcon:p,Shapes:m,TextIndication:s,WithIndicator:c,__namedExportsOrder:ne,default:ae},Symbol.toStringTag,{value:"Module"}));export{ye as C,d as N,i as O,l as S,s as T,c as W,p as a,m as b};
