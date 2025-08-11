import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{T as s,a as n}from"./TabList-C09wxrpi.js";import{T as r,a as d,b as a}from"./TabPanels-B6WpmiBt.js";import{T as m}from"./TextField-IZy__gYj.js";import{B as V}from"./Box-BDmFEuj7.js";import{F as R}from"./Flex-BwTwg4EO.js";import{r as p}from"./Calendar-BX7mDXzx.js";import{t as j,a as u}from"./Table-DKnXfo9h.js";const i=({children:x})=>e.jsx(V,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:x}),$={title:"Components/Tabs",component:n,subcomponents:{TabPanel:a,TabPanels:d,TabList:s,TabsContext:r}},t={render:x=>e.jsxs(r,{id:"overview-tabs",...x,children:[e.jsxs(s,{id:"overview-tab-list",children:[e.jsx(n,{id:"overview-tab-first",children:"First"}),e.jsx(n,{id:"overview-tab-second",children:"Second"}),e.jsx(n,{id:"overview-tab-third",children:"Third"})]}),e.jsxs(d,{id:"overview-tab-panels",children:[e.jsx(a,{id:"overview-panel-first",children:e.jsx(i,{children:"First slide"})}),e.jsx(a,{id:"overview-panel-second",children:e.jsx(i,{children:"Second slide"})}),e.jsx(a,{id:"overview-panel-third",children:e.jsx(i,{children:"Third slide"})})]})]}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>e.jsxs(r,{id:"default-tabs",children:[e.jsxs(s,{id:"default-tab-list",children:[e.jsx(n,{id:"default-tab-first",children:"First"}),e.jsx(n,{id:"default-tab-second",children:"Second"}),e.jsx(n,{id:"default-tab-third",children:"Third"}),e.jsx(n,{id:"default-tab-disabled",disabled:!0,children:"Disabled"})]}),e.jsxs(d,{id:"default-tab-panels",children:[e.jsx(a,{id:"default-panel-first",children:e.jsx(i,{children:"First slide"})}),e.jsx(a,{id:"default-panel-second",children:e.jsx(i,{children:"Second slide"})}),e.jsx(a,{id:"default-panel-third",children:e.jsx(i,{children:"Third slide"})}),e.jsx(a,{id:"default-panel-fourth",children:e.jsx(i,{children:"Fourth slide"})})]})]}),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:i}}}}},o={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(s,{tabType:"stretched",children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},b={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(s,{stretchedUnderline:!0,children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},c={render:()=>e.jsxs(R,{direction:"column",gap:"medium",children:[e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(d,{animationDirection:"ltr",children:[e.jsx(a,{children:e.jsx(i,{children:"First slide"})}),e.jsx(a,{children:e.jsx(i,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(i,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(i,{children:"Fourth slide"})})]})]}),e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(d,{animationDirection:"rtl",children:[e.jsx(a,{children:e.jsx(i,{children:"First slide"})}),e.jsx(a,{children:e.jsx(i,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(i,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(i,{children:"Fourth slide"})})]})]})]}),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:i}}}}},T={render:()=>e.jsxs(s,{children:[e.jsx(n,{icon:u,children:"Main Table"}),e.jsx(n,{icon:j,children:"Chart"}),e.jsx(n,{icon:p,children:"Calendar"})]}),parameters:{docs:{liveEdit:{scope:{Table:u,Chart:j,Calendar:p}}}}},h={render:()=>e.jsxs(r,{children:[e.jsxs(s,{children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Account"})]}),e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsx("h2",{children:"Login Details"}),e.jsx(m,{title:"Profile Name",size:"medium",placeholder:"Profile Name"})]}),e.jsxs(a,{children:[e.jsx("h2",{children:"Account Details"}),e.jsx(m,{title:"Account Name",size:"medium",placeholder:"Account Name"})]})]})]})};var v,C,P;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: TabProps) => <TabsContext id="overview-tabs" {...args}>
      <TabList id="overview-tab-list">
        <Tab id="overview-tab-first">First</Tab>
        <Tab id="overview-tab-second">Second</Tab>
        <Tab id="overview-tab-third">Third</Tab>
      </TabList>
      <TabPanels id="overview-tab-panels">
        <TabPanel id="overview-panel-first">
          <ExampleTabContent>First slide</ExampleTabContent>
        </TabPanel>
        <TabPanel id="overview-panel-second">
          <ExampleTabContent>Second slide</ExampleTabContent>
        </TabPanel>
        <TabPanel id="overview-panel-third">
          <ExampleTabContent>Third slide</ExampleTabContent>
        </TabPanel>
      </TabPanels>
    </TabsContext>,
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(P=(C=t.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var f,E,S;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <TabsContext id="default-tabs">
      <TabList id="default-tab-list">
        <Tab id="default-tab-first">First</Tab>
        <Tab id="default-tab-second">Second</Tab>
        <Tab id="default-tab-third">Third</Tab>
        <Tab id="default-tab-disabled" disabled>
          Disabled
        </Tab>
      </TabList>
      <TabPanels id="default-tab-panels">
        <TabPanel id="default-panel-first">
          <ExampleTabContent>First slide</ExampleTabContent>
        </TabPanel>
        <TabPanel id="default-panel-second">
          <ExampleTabContent>Second slide</ExampleTabContent>
        </TabPanel>
        <TabPanel id="default-panel-third">
          <ExampleTabContent>Third slide</ExampleTabContent>
        </TabPanel>
        <TabPanel id="default-panel-fourth">
          <ExampleTabContent>Fourth slide</ExampleTabContent>
        </TabPanel>
      </TabPanels>
    </TabsContext>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          ExampleTabContent
        }
      }
    }
  }
}`,...(S=(E=l.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var F,w,D;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%"
  }}>
      <TabList tabType="stretched">
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
    </div>
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var g,L,A;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: "100%"
  }}>
      <TabList stretchedUnderline>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
    </div>
}`,...(A=(L=b.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var y,N,O;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="medium">
      <TabsContext>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
        <TabPanels animationDirection="ltr">
          <TabPanel>
            <ExampleTabContent>First slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Second slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Third slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Fourth slide</ExampleTabContent>
          </TabPanel>
        </TabPanels>
      </TabsContext>
      <TabsContext>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
        <TabPanels animationDirection="rtl">
          <TabPanel>
            <ExampleTabContent>First slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Second slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Third slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Fourth slide</ExampleTabContent>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </Flex>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          ExampleTabContent
        }
      }
    }
  }
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,B,M;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <TabList>
      <Tab icon={Table}>Main Table</Tab>
      <Tab icon={Chart}>Chart</Tab>
      <Tab icon={Calendar}>Calendar</Tab>
    </TabList>,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Table,
          Chart,
          Calendar
        }
      }
    }
  }
}`,...(M=(B=T.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var z,U,k;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <TabsContext>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Account</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <h2>Login Details</h2>
          <TextField title="Profile Name" size="medium" placeholder="Profile Name" />
        </TabPanel>
        <TabPanel>
          <h2>Account Details</h2>
          <TextField title="Account Name" size="medium" placeholder="Account Name" />
        </TabPanel>
      </TabPanels>
    </TabsContext>
}`,...(k=(U=h.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};const q=["Overview","Default","Stretched","StretchedUnderline","Motion","BoardViewsTabs","AdminSectionTabs"],Y=Object.freeze(Object.defineProperty({__proto__:null,AdminSectionTabs:h,BoardViewsTabs:T,Default:l,Motion:c,Overview:t,Stretched:o,StretchedUnderline:b,__namedExportsOrder:q,default:$},Symbol.toStringTag,{value:"Module"}));export{h as A,T as B,l as D,c as M,t as O,o as S,Y as T,b as a};
