import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{T as r,a as n}from"./TabList-CRmKKXDZ.js";import{T as i,a as t,b as a}from"./TabPanels-B6WpmiBt.js";import{T as m}from"./TextField-kBLzmMAS.js";import{B as V}from"./Box-tjS_L1BV.js";import{F as R}from"./Flex-2Q04fxOc.js";import{r as p}from"./Calendar-BX7mDXzx.js";import{t as j,a as u}from"./Table-DKnXfo9h.js";const s=({children:h})=>e.jsx(V,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:h}),$={title:"Components/Tabs",component:n,subcomponents:{TabPanel:a,TabPanels:t,TabList:r,TabsContext:i}},l={render:h=>e.jsxs(i,{...h,children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"})]}),e.jsxs(t,{children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})})]})]}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(t,{children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Fourth slide"})})]})]}),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:s}}}}},o={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(r,{tabType:"stretched",children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},c={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(r,{stretchedUnderline:!0,children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},b={render:()=>e.jsxs(R,{direction:"column",gap:"medium",children:[e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(t,{animationDirection:"ltr",children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Fourth slide"})})]})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(t,{animationDirection:"rtl",children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Fourth slide"})})]})]})]}),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:s}}}}},T={render:()=>e.jsxs(r,{children:[e.jsx(n,{icon:u,children:"Main Table"}),e.jsx(n,{icon:j,children:"Chart"}),e.jsx(n,{icon:p,children:"Calendar"})]}),parameters:{docs:{liveEdit:{scope:{Table:u,Chart:j,Calendar:p}}}}},x={render:()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Account"})]}),e.jsxs(t,{children:[e.jsxs(a,{children:[e.jsx("h2",{children:"Login Details"}),e.jsx(m,{title:"Profile Name",size:"medium",placeholder:"Profile Name"})]}),e.jsxs(a,{children:[e.jsx("h2",{children:"Account Details"}),e.jsx(m,{title:"Account Name",size:"medium",placeholder:"Account Name"})]})]})]})};var C,P,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: TabProps) => <TabsContext {...args}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ExampleTabContent>First slide</ExampleTabContent>
        </TabPanel>
        <TabPanel>
          <ExampleTabContent>Second slide</ExampleTabContent>
        </TabPanel>
        <TabPanel>
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
}`,...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var S,F,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <TabsContext>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
      <TabPanels>
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
}`,...(v=(F=d.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var f,D,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(D=o.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var L,w,A;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(w=c.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var y,N,O;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,B,M;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(B=T.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var z,U,k;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(k=(U=x.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};const q=["Overview","Default","Stretched","StretchedUnderline","Motion","BoardViewsTabs","AdminSectionTabs"],Y=Object.freeze(Object.defineProperty({__proto__:null,AdminSectionTabs:x,BoardViewsTabs:T,Default:d,Motion:b,Overview:l,Stretched:o,StretchedUnderline:c,__namedExportsOrder:q,default:$},Symbol.toStringTag,{value:"Module"}));export{x as A,T as B,d as D,b as M,l as O,o as S,Y as T,c as a};
