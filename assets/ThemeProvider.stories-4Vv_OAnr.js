import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as Q}from"./index-Hemj67b4.js";import{T as o,a as ee,b as x,c as re,S as oe,d as te}from"./index-B5o_entQ.js";import{B as t}from"./Button-B3Hc6Y0x.js";import{D as ae}from"./Dropdown-DDoAVX10.js";import{F as S}from"./Flex-BwTwg4EO.js";import{C as ne}from"./colors-description-DEyx_L2v.js";import{r as se}from"./usage-guidelines-CjZwxEOd.js";import{l as le}from"./tip-BKixvd9t.js";import{n as ie}from"./link-ByEAMSgF.js";import{userEvent as me}from"./index-JSOB3pIc.js";import{i as ce,e as y}from"./interactions-utils-DlKgNicw.js";import{h as de,g as he}from"./Chips-Dz6w7jaX.js";import{c as pe}from"./createStoryMetaSettingsDecorator-DIIwAjh2.js";const ue={name:"product-theme-1",colors:{light:{"primary-color":"#007f9b","primary-hover-color":"#006278","primary-selected-color":"#bee3e8","primary-selected-hover-color":"#d4ebef","brand-colors":{"brand-color":"#007f9b","brand-hover-color":"#006278","text-color-on-brand":"#ffffff"}},dark:{"primary-color":"#007f9b","primary-hover-color":"#006278","primary-selected-color":"#004858","primary-selected-hover-color":"#003844","brand-colors":{"brand-color":"#007f9b","brand-hover-color":"#006278","text-color-on-brand":"#ffffff"}},black:{"primary-color":"#007f9b","primary-hover-color":"#006278","primary-selected-color":"#004858","primary-selected-hover-color":"#003844","brand-colors":{"brand-color":"#007f9b","brand-hover-color":"#006278","text-color-on-brand":"#ffffff"}}}},ye={name:"product-theme-2",colors:{light:{"primary-color":"#d14900","primary-hover-color":"#ad4005","primary-selected-color":"#f8dccf","primary-selected-hover-color":"#f1d3c4"},dark:{"primary-color":"#d14900","primary-hover-color":"#ad4005","primary-selected-color":"#6d2702","primary-selected-hover-color":"#491b03"},black:{"primary-color":"#d14900","primary-hover-color":"#ad4005","primary-selected-color":"#6d2702","primary-selected-hover-color":"#491b03"}}},ge={name:"product-theme-4",colors:{light:{"primary-color":"#e21277","primary-hover-color":"#bb0c61","primary-selected-color":"#f8d4e6","primary-selected-hover-color":"#f1d8dc"},dark:{"primary-color":"#e21277","primary-hover-color":"#bb0c61","primary-selected-color":"#5c0631","primary-selected-hover-color":"#480627"},black:{"primary-color":"#e21277","primary-hover-color":"#ae085a","primary-selected-color":"#5c0631","primary-selected-hover-color":"#480627"}}},fe={name:"product-theme-3",colors:{light:{"primary-color":"#00854d","primary-hover-color":"#025231","primary-selected-color":"#c6e9d5","primary-selected-hover-color":"#a7ddbe","primary-selected-on-secondary-color":"var(--primary-selected-color)","brand-colors":{"primary-color":"#181b34","primary-hover-color":"#393d60","primary-selected-hover-color":"#d4d6de","brand-color":"#00854d","brand-hover-color":"#025231","brand-selected-color":"#c6e9d5","brand-selected-hover-color":"#a7ddbe","text-color-on-primary":"#ffffff","text-color-on-brand":"#ffffff","primary-selected-color":"var(--disabled-background-color)"}},dark:{"primary-color":"#00854d","primary-hover-color":"#025231","primary-selected-color":"#013c29","primary-selected-hover-color":"#0c3125","primary-selected-on-secondary-color":"var(--primary-selected-color)","brand-colors":{"primary-color":"#ffffff","primary-hover-color":"#c5c7d0","primary-selected-hover-color":"#30324e","brand-color":"#00854d","brand-hover-color":"#025231","brand-selected-color":"#4b4e69","brand-selected-hover-color":"#30324e","text-color-on-primary":"#323338","text-color-on-brand":"#ffffff","primary-selected-color":"var(--disabled-background-color)"}},black:{"primary-color":"#00854d","primary-hover-color":"#025231","primary-selected-color":"#013c29","primary-selected-hover-color":"#0c3125","primary-selected-on-secondary-color":"var(--primary-selected-color)","brand-colors":{"primary-color":"#ffffff","primary-hover-color":"#c5c7d0","primary-selected-hover-color":"#30324e","brand-color":"#00854d","brand-hover-color":"#025231","brand-selected-color":"#4b4e69","brand-selected-hover-color":"#30324e","text-color-on-primary":"#323338","text-color-on-brand":"#ffffff","primary-selected-color":"var(--disabled-background-color)"}}}},ve=()=>e.jsx(ne,{colorNames:Object.values(ee)}),f=r=>e.jsx(e.Fragment,{children:e.jsx(o,{...r,children:e.jsx(t,{children:"Themed"})})}),v=r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{themeConfig:{name:"theming-scope-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"},dark:{"primary-color":"slateblue","primary-hover-color":"darkslateblue"},black:{"primary-color":"salmon","primary-hover-color":"darksalmon"}}},children:e.jsx(t,{children:"Themed"})}),e.jsx(t,{children:"Not themed"})]}),T=r=>e.jsx(o,{themeConfig:{name:"outer-theme",colors:{light:{"primary-color":"red","primary-hover-color":"darkred"}}},children:e.jsx("div",{children:e.jsx(o,{themeConfig:{name:"inner-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"}}},children:e.jsx(t,{children:"Themed"})})})}),b=r=>{const a=[{value:ue,label:"Product 1"},{value:ye,label:"Product 2"},{value:fe,label:"Product 3"},{value:ge,label:"Product 4"}],[n,u]=Q.useState(null);return e.jsx(o,{themeConfig:n==null?void 0:n.value,children:e.jsxs(S,{gap:"large",align:"start",wrap:!0,style:{height:"200px"},children:[e.jsx("div",{style:{width:"250px"},children:e.jsx(ae,{placeholder:"No theme selected",options:a,value:n,onClear:()=>u(null),onOptionSelect:g=>u(g)})}),e.jsx(t,{children:"Themed"}),e.jsx("div",{className:"brand-colors",children:e.jsx(t,{color:"brand",children:"Themed branded"})})]})})},C=r=>e.jsx(o,{themeConfig:{name:"theme-with-custom-class-selector",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen","custom-class":{"primary-color":"slateblue","primary-hover-color":"darkslateblue"}}}},children:e.jsxs(S,{gap:"large",direction:"row",children:[e.jsx(t,{children:"Themed"}),e.jsx("div",{className:"custom-class",children:e.jsx(t,{children:"Themed by custom class"})})]})}),We=()=>e.jsx(o,{themeConfig:{name:"positive-example-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"}}},children:e.jsx(t,{children:"Hover me"})}),Je=()=>e.jsx(o,{themeConfig:{name:"negative-example-theme",colors:{light:{"primary-color":"green"}}},children:e.jsx(t,{children:"Hover me"})}),Ke=()=>e.jsxs(le,{title:"Dev tip",children:["Use ",e.jsx("code",{children:"ThemeProvider.systemThemes"})," and ",e.jsx("code",{children:"ThemeProvider.colors"})," enums to unleash the power of auto-completion"]}),Xe=()=>e.jsx(se,{guidelines:[e.jsxs(e.Fragment,{children:["Control themes in your application by setting theme classes (e.g. ",e.jsx("code",{children:".light-app-theme"}),") on your"," ",e.jsx("code",{children:"body"})," and render everything else inside it. Or use ",e.jsx("code",{children:"systemTheme"})," prop to make ThemeProvider set the theme class on the ",e.jsx("code",{children:"body"})," for you."]}),e.jsxs(e.Fragment,{children:["In most common case ThemeProvider should be rendered only once on the root level of the application - below the"," ",e.jsx("code",{children:"body"}),"."]}),e.jsxs(e.Fragment,{children:["ThemeProvider is populating theme name ",e.jsx("code",{children:"className"})," to the new added ",e.jsx("code",{children:"div"})," container which wraps the children."]})]}),He=()=>e.jsxs(e.Fragment,{children:["When developing an external application for monday.com (iframe). You can use ",e.jsx("code",{children:"ThemeProvider"})," in combination with the"," ",e.jsx(ie,{href:"https://developer.monday.com/apps/docs/mondayget#sample-context-objects-for-each-feature-type",withoutSpacing:!0,children:"monday.com SDK"}),", to apply monday.com ",e.jsx("b",{children:"system"})," and ",e.jsx("b",{children:"product"})," themes to your application. This will allow your application to be consistent with the monday.com UI."]}),Te=`
import { ThemeProvider } from "@vibe/core";
import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

const useGetContext = () => {
  const [context, setContext] = useState({});
  
  useEffect(() => {
    monday.listen("context", (res) => {
      setContext(res.data);
    });
  }, []);
  
  return context;
};

const AppWrapper = () => {
  const context = useGetContext();

  return (
    <ThemeProvider themeConfig={context.themeConfig} systemTheme={context.theme}>
      <App />
    </ThemeProvider>
  );
};
`;try{f.displayName="ThemeProviderTemplateOverview",f.__docgenInfo={description:"",displayName:"ThemeProviderTemplateOverview",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="ThemeProviderThemingScopeTemplate",v.__docgenInfo={description:"",displayName:"ThemeProviderThemingScopeTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{T.displayName="ThemeProviderFoldedThemingTemplate",T.__docgenInfo={description:"",displayName:"ThemeProviderFoldedThemingTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="ThemeProviderProductThemingTemplate",b.__docgenInfo={description:"",displayName:"ThemeProviderProductThemingTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{C.displayName="ThemeProviderCustomClassTemplate",C.__docgenInfo={description:"",displayName:"ThemeProviderCustomClassTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'},{value:'"black"'}]}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const Z=r=>de(he(document.body,r)),k=async r=>await r.findByTestId("system-theme-toggle-button"),j=async r=>window.getComputedStyle(r).getPropertyValue("background-color"),be=Z("primary-color"),Ce=Z("positive-color"),Se=re(oe.DARK);async function xe(r){y(x()).toBeNull();const a=await k(r),n=await j(a);y(n).toBe(be),await me.click(a);const u=x();y(u).toBe(Se);const g=await k(r),$=await j(g);y($).toBe(Ce)}const ke=ce({tests:[xe]}),P=pe({component:o}),je={title:"Theming/ThemeProvider [alpha]",component:o,argTypes:P.argTypes,decorators:P.decorators},s={render:f.bind({}),name:"Overview",args:{themeConfig:{name:"overview-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"},dark:{"primary-color":"salmon","primary-hover-color":"darksalmon"},black:{"primary-color":"slateblue","primary-hover-color":"darkslateblue"}}}}},l={render:()=>e.jsx(ve,{}),name:"Colors eligible for theming"},i={render:v.bind({}),name:"Theming scope"},m={render:T.bind({}),name:"Folded theming"},c={render:b.bind({}),name:"Product theming"},d={render:C.bind({}),name:"Custom class selector"},h={render:()=>{const[r,a]=Q.useState(null),n=()=>{switch(r){case"light":a("dark");break;case"dark":a("light");break;default:a("dark")}};return e.jsx(S,{direction:"row",gap:"large",children:e.jsx(o,{themeConfig:{name:"with-system-theme",colors:{dark:{"primary-color":"var(--positive-color)","primary-hover-color":"var(--positive-color-hover)"}}},systemTheme:r,children:e.jsx(t,{onClick:n,"data-testid":"system-theme-toggle-button",children:"Themed"})})})},name:"With systemTheme",play:ke},p={render:()=>e.jsx(te,{code:Te}),name:"monday.com SDK integration"};var _,w,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: ThemeProviderTemplateOverview.bind({}),
  name: "Overview",
  args: {
    themeConfig: {
      name: "overview-theme",
      colors: {
        light: {
          "primary-color": "green",
          "primary-hover-color": "darkgreen"
        },
        dark: {
          "primary-color": "salmon",
          "primary-hover-color": "darksalmon"
        },
        black: {
          "primary-color": "slateblue",
          "primary-hover-color": "darkslateblue"
        }
      }
    }
  }
}`,...(N=(w=s.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var q,V,E;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <ColorsEligibleForThemingTemplate />,
  name: "Colors eligible for theming"
}`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var F,I,O;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ThemeProviderThemingScopeTemplate.bind({}),
  name: "Theming scope"
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var B,A,D;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ThemeProviderFoldedThemingTemplate.bind({}),
  name: "Folded theming"
}`,...(D=(A=m.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var R,M,W;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: ThemeProviderProductThemingTemplate.bind({}),
  name: "Product theming"
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var J,K,X;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: ThemeProviderCustomClassTemplate.bind({}),
  name: "Custom class selector"
}`,...(X=(K=d.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var H,L,U;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [systemTheme, setSystemTheme] = useState(null);
    const onToggleButtonClick = () => {
      switch (systemTheme) {
        case "light":
          setSystemTheme("dark");
          break;
        case "dark":
          setSystemTheme("light");
          break;
        default:
          setSystemTheme("dark");
      }
    };
    return <Flex direction="row" gap="large">
        <ThemeProvider themeConfig={{
        name: "with-system-theme",
        colors: {
          dark: {
            "primary-color": "var(--positive-color)",
            "primary-hover-color": "var(--positive-color-hover)"
          }
        }
      }} systemTheme={systemTheme}>
          <Button onClick={onToggleButtonClick} data-testid={"system-theme-toggle-button"}>
            Themed
          </Button>
        </ThemeProvider>
      </Flex>;
  },
  name: "With systemTheme",
  play: themeProviderSystemThemeSuite
}`,...(U=(L=h.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var G,Y,z;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    return <Source code={MondaySdkIntegrationSourceCode}></Source>;
  },
  name: "monday.com SDK integration"
}`,...(z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};const Pe=["Overview","ColorsEligibleForTheming","ThemingScope","FoldedTheming","ProductTheming","CustomClassSelector","WithSystemTheme","MondaySdkIntegration"],Le=Object.freeze(Object.defineProperty({__proto__:null,ColorsEligibleForTheming:l,CustomClassSelector:d,FoldedTheming:m,MondaySdkIntegration:p,Overview:s,ProductTheming:c,ThemingScope:i,WithSystemTheme:h,__namedExportsOrder:Pe,default:je},Symbol.toStringTag,{value:"Module"}));export{l as C,He as D,m as F,p as M,s as O,c as P,Le as T,Xe as U,h as W,Ke as a,i as b,d as c,Je as d,We as e};
