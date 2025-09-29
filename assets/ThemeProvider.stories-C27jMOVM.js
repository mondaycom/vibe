import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as Z}from"./index-CTZeEbLr.js";import{S as re}from"./index-BmijoK2W.js";import{T as o,a as oe,g as k,b as te,S as ae}from"./ThemeProvider-CNVc1TSJ.js";import{B as t}from"./Button-BmfXCbqd.js";import{D as ne}from"./Dropdown-BSiFzu4T.js";import{F as x}from"./Flex-Brm3wHG7.js";import{C as se}from"./colors-description-DS3zsy0T.js";import{r as le}from"./usage-guidelines-DaF3e-2f.js";import{l as ie}from"./tip-CK87uV3P.js";import{a as me}from"./link-CVYAeutz.js";import{userEvent as ce}from"./index-i7od9_os.js";import{i as de,e as u}from"./interactions-utils-BR-zX9e0.js";import{h as he,g as pe}from"./Chips-yvejpgSg.js";import{c as ye}from"./createStoryMetaSettingsDecorator-M9remOuO.js";const ue={name:"product-theme-1",colors:{light:{"primary-color":"#007f9b","primary-hover-color":"#006278","primary-selected-color":"#bee3e8","primary-selected-hover-color":"#d4ebef","brand-colors":{"brand-color":"#007f9b","brand-hover-color":"#006278","text-color-on-brand":"#ffffff"}},dark:{"primary-color":"#007f9b","primary-hover-color":"#006278","primary-selected-color":"#004858","primary-selected-hover-color":"#003844","brand-colors":{"brand-color":"#007f9b","brand-hover-color":"#006278","text-color-on-brand":"#ffffff"}},black:{"primary-color":"#007f9b","primary-hover-color":"#006278","primary-selected-color":"#004858","primary-selected-hover-color":"#003844","brand-colors":{"brand-color":"#007f9b","brand-hover-color":"#006278","text-color-on-brand":"#ffffff"}}}},ge={name:"product-theme-2",colors:{light:{"primary-color":"#d14900","primary-hover-color":"#ad4005","primary-selected-color":"#f8dccf","primary-selected-hover-color":"#f1d3c4"},dark:{"primary-color":"#d14900","primary-hover-color":"#ad4005","primary-selected-color":"#6d2702","primary-selected-hover-color":"#491b03"},black:{"primary-color":"#d14900","primary-hover-color":"#ad4005","primary-selected-color":"#6d2702","primary-selected-hover-color":"#491b03"}}},fe={name:"product-theme-4",colors:{light:{"primary-color":"#e21277","primary-hover-color":"#bb0c61","primary-selected-color":"#f8d4e6","primary-selected-hover-color":"#f1d8dc"},dark:{"primary-color":"#e21277","primary-hover-color":"#bb0c61","primary-selected-color":"#5c0631","primary-selected-hover-color":"#480627"},black:{"primary-color":"#e21277","primary-hover-color":"#ae085a","primary-selected-color":"#5c0631","primary-selected-hover-color":"#480627"}}},Te={name:"product-theme-3",colors:{light:{"primary-color":"#00854d","primary-hover-color":"#025231","primary-selected-color":"#c6e9d5","primary-selected-hover-color":"#a7ddbe","primary-selected-on-secondary-color":"var(--primary-selected-color)","brand-colors":{"primary-color":"#181b34","primary-hover-color":"#393d60","primary-selected-hover-color":"#d4d6de","brand-color":"#00854d","brand-hover-color":"#025231","brand-selected-color":"#c6e9d5","brand-selected-hover-color":"#a7ddbe","text-color-on-primary":"#ffffff","text-color-on-brand":"#ffffff","primary-selected-color":"var(--disabled-background-color)"}},dark:{"primary-color":"#00854d","primary-hover-color":"#025231","primary-selected-color":"#013c29","primary-selected-hover-color":"#0c3125","primary-selected-on-secondary-color":"var(--primary-selected-color)","brand-colors":{"primary-color":"#ffffff","primary-hover-color":"#c5c7d0","primary-selected-hover-color":"#30324e","brand-color":"#00854d","brand-hover-color":"#025231","brand-selected-color":"#4b4e69","brand-selected-hover-color":"#30324e","text-color-on-primary":"#323338","text-color-on-brand":"#ffffff","primary-selected-color":"var(--disabled-background-color)"}},black:{"primary-color":"#00854d","primary-hover-color":"#025231","primary-selected-color":"#013c29","primary-selected-hover-color":"#0c3125","primary-selected-on-secondary-color":"var(--primary-selected-color)","brand-colors":{"primary-color":"#ffffff","primary-hover-color":"#c5c7d0","primary-selected-hover-color":"#30324e","brand-color":"#00854d","brand-hover-color":"#025231","brand-selected-color":"#4b4e69","brand-selected-hover-color":"#30324e","text-color-on-primary":"#323338","text-color-on-brand":"#ffffff","primary-selected-color":"var(--disabled-background-color)"}}}},ve=()=>e.jsx(se,{colorNames:Object.values(oe)}),f=r=>e.jsx(e.Fragment,{children:e.jsx(o,{...r,children:e.jsx(t,{children:"Themed"})})}),T=r=>e.jsxs(e.Fragment,{children:[e.jsx(o,{themeConfig:{name:"theming-scope-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"},dark:{"primary-color":"slateblue","primary-hover-color":"darkslateblue"},black:{"primary-color":"salmon","primary-hover-color":"darksalmon"}}},children:e.jsx(t,{children:"Themed"})}),e.jsx(t,{children:"Not themed"})]}),v=r=>e.jsx(o,{themeConfig:{name:"outer-theme",colors:{light:{"primary-color":"red","primary-hover-color":"darkred"}}},children:e.jsx("div",{children:e.jsx(o,{themeConfig:{name:"inner-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"}}},children:e.jsx(t,{children:"Themed"})})})}),b=r=>{const a=[{value:ue,label:"Product 1"},{value:ge,label:"Product 2"},{value:Te,label:"Product 3"},{value:fe,label:"Product 4"}],[n,y]=Z.useState(null);return e.jsx(o,{themeConfig:n==null?void 0:n.value,children:e.jsxs(x,{gap:"large",align:"start",wrap:!0,style:{height:"200px"},children:[e.jsx("div",{style:{width:"250px"},children:e.jsx(ne,{placeholder:"No theme selected",options:a,value:n,onClear:()=>y(null),onOptionSelect:g=>y(g)})}),e.jsx(t,{children:"Themed"}),e.jsx("div",{className:"brand-colors",children:e.jsx(t,{color:"brand",children:"Themed branded"})})]})})},S=r=>e.jsx(o,{themeConfig:{name:"theme-with-custom-class-selector",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen","custom-class":{"primary-color":"slateblue","primary-hover-color":"darkslateblue"}}}},children:e.jsxs(x,{gap:"large",direction:"row",children:[e.jsx(t,{children:"Themed"}),e.jsx("div",{className:"custom-class",children:e.jsx(t,{children:"Themed by custom class"})})]})}),Je=()=>e.jsx(o,{themeConfig:{name:"positive-example-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"}}},children:e.jsx(t,{children:"Hover me"})}),Ke=()=>e.jsx(o,{themeConfig:{name:"negative-example-theme",colors:{light:{"primary-color":"green"}}},children:e.jsx(t,{children:"Hover me"})}),Xe=()=>e.jsxs(ie,{title:"Dev tip",children:["Use ",e.jsx("code",{children:"ThemeProvider.systemThemes"})," and ",e.jsx("code",{children:"ThemeProvider.colors"})," enums to unleash the power of auto-completion"]}),He=()=>e.jsx(le,{guidelines:[e.jsxs(e.Fragment,{children:["Control themes in your application by setting theme classes (e.g. ",e.jsx("code",{children:".light-app-theme"}),") on your"," ",e.jsx("code",{children:"body"})," and render everything else inside it. Or use ",e.jsx("code",{children:"systemTheme"})," prop to make ThemeProvider set the theme class on the ",e.jsx("code",{children:"body"})," for you."]}),e.jsxs(e.Fragment,{children:["In most common case ThemeProvider should be rendered only once on the root level of the application - below the"," ",e.jsx("code",{children:"body"}),"."]}),e.jsxs(e.Fragment,{children:["ThemeProvider is populating theme name ",e.jsx("code",{children:"className"})," to the new added ",e.jsx("code",{children:"div"})," container which wraps the children."]})]}),Le=()=>e.jsxs(e.Fragment,{children:["When developing an external application for monday.com (iframe). You can use ",e.jsx("code",{children:"ThemeProvider"})," in combination with the"," ",e.jsx(me,{href:"https://developer.monday.com/apps/docs/mondayget#sample-context-objects-for-each-feature-type",withoutSpacing:!0,children:"monday.com SDK"}),", to apply monday.com ",e.jsx("b",{children:"system"})," and ",e.jsx("b",{children:"product"})," themes to your application. This will allow your application to be consistent with the monday.com UI."]}),be=`
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
`;try{f.displayName="ThemeProviderTemplateOverview",f.__docgenInfo={description:"",displayName:"ThemeProviderTemplateOverview",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"SystemTheme"}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{T.displayName="ThemeProviderThemingScopeTemplate",T.__docgenInfo={description:"",displayName:"ThemeProviderThemingScopeTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"SystemTheme"}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{v.displayName="ThemeProviderFoldedThemingTemplate",v.__docgenInfo={description:"",displayName:"ThemeProviderFoldedThemingTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"SystemTheme"}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{b.displayName="ThemeProviderProductThemingTemplate",b.__docgenInfo={description:"",displayName:"ThemeProviderProductThemingTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"SystemTheme"}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{S.displayName="ThemeProviderCustomClassTemplate",S.__docgenInfo={description:"",displayName:"ThemeProviderCustomClassTemplate",props:{themeConfig:{defaultValue:null,description:"The theme configuration to apply. It consists of a `name` (a unique CSS class name added to the children)\nand an object of color overrides for each system theme.",name:"themeConfig",required:!1,type:{name:"Theme"}},children:{defaultValue:null,description:"The children to be rendered with the applied theme.",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},themeClassSpecifier:{defaultValue:null,description:"A string added to the theme name selector to make it more specific, in case `themeConfig.name`\ncollides with another class name.",name:"themeClassSpecifier",required:!1,type:{name:"string"}},systemTheme:{defaultValue:null,description:"The system theme to apply to the `body` element on mount,\nif there is no system theme class name on the body already.",name:"systemTheme",required:!1,type:{name:"SystemTheme"}},className:{defaultValue:null,description:"Class name applied to the wrapping `div`.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const $=r=>he(pe(document.body,r)),_=async r=>await r.findByTestId("system-theme-toggle-button"),j=async r=>window.getComputedStyle(r).getPropertyValue("background-color"),Se=$("primary-color"),Ce=$("positive-color"),xe=te(ae.DARK);async function ke(r){u(k()).toBeNull();const a=await _(r),n=await j(a);u(n).toBe(Se),await ce.click(a);const y=k();u(y).toBe(xe);const g=await _(r),ee=await j(g);u(ee).toBe(Ce)}const C=de({tests:[ke]});try{C.displayName="themeProviderSystemThemeSuite",C.__docgenInfo={description:"",displayName:"themeProviderSystemThemeSuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const P=ye({component:o}),_e={title:"Theming/ThemeProvider [alpha]",component:o,argTypes:P.argTypes,decorators:P.decorators},s={render:f.bind({}),name:"Overview",args:{themeConfig:{name:"overview-theme",colors:{light:{"primary-color":"green","primary-hover-color":"darkgreen"},dark:{"primary-color":"salmon","primary-hover-color":"darksalmon"},black:{"primary-color":"slateblue","primary-hover-color":"darkslateblue"}}}}},l={render:()=>e.jsx(ve,{}),name:"Colors eligible for theming"},i={render:T.bind({}),name:"Theming scope"},m={render:v.bind({}),name:"Folded theming"},c={render:b.bind({}),name:"Product theming"},d={render:S.bind({}),name:"Custom class selector"},h={render:()=>{const[r,a]=Z.useState(null),n=()=>{switch(r){case"light":a("dark");break;case"dark":a("light");break;default:a("dark")}};return e.jsx(x,{direction:"row",gap:"large",children:e.jsx(o,{themeConfig:{name:"with-system-theme",colors:{dark:{"primary-color":"var(--positive-color)","primary-hover-color":"var(--positive-color-hover)"}}},systemTheme:r,children:e.jsx(t,{onClick:n,"data-testid":"system-theme-toggle-button",children:"Themed"})})})},name:"With systemTheme",play:C},p={render:()=>e.jsx(re,{code:be}),name:"monday.com SDK integration"};var w,q,N;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(q=s.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var V,E,F;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ColorsEligibleForThemingTemplate />,
  name: "Colors eligible for theming"
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var I,O,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ThemeProviderThemingScopeTemplate.bind({}),
  name: "Theming scope"
}`,...(B=(O=i.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var A,R,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ThemeProviderFoldedThemingTemplate.bind({}),
  name: "Folded theming"
}`,...(D=(R=m.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var M,W,J;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: ThemeProviderProductThemingTemplate.bind({}),
  name: "Product theming"
}`,...(J=(W=c.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var K,X,H;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: ThemeProviderCustomClassTemplate.bind({}),
  name: "Custom class selector"
}`,...(H=(X=d.parameters)==null?void 0:X.docs)==null?void 0:H.source}}};var L,U,G;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(U=h.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var Y,z,Q;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    return <Source code={MondaySdkIntegrationSourceCode}></Source>;
  },
  name: "monday.com SDK integration"
}`,...(Q=(z=p.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const je=["Overview","ColorsEligibleForTheming","ThemingScope","FoldedTheming","ProductTheming","CustomClassSelector","WithSystemTheme","MondaySdkIntegration"],Ue=Object.freeze(Object.defineProperty({__proto__:null,ColorsEligibleForTheming:l,CustomClassSelector:d,FoldedTheming:m,MondaySdkIntegration:p,Overview:s,ProductTheming:c,ThemingScope:i,WithSystemTheme:h,__namedExportsOrder:je,default:_e},Symbol.toStringTag,{value:"Module"}));export{l as C,Le as D,m as F,p as M,s as O,c as P,Ue as T,He as U,h as W,Xe as a,i as b,d as c,Ke as d,Je as e};
