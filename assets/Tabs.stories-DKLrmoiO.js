import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{T as r,a as n}from"./TabList-CsLrTfWM.js";import{T as i,a as t,b as a}from"./TabPanels-B6WpmiBt.js";import{T as h}from"./TextField-BtofG5Hy.js";import{B as V}from"./Box-CI4IQ3Nw.js";import{F as R}from"./Flex-2Q04fxOc.js";import{r as m}from"./Calendar-BX7mDXzx.js";import{t as p,a as j}from"./Table-DKnXfo9h.js";const s=({children:k})=>e.jsx(V,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:k}),$={title:"Components/Tabs",component:n,subcomponents:{TabPanel:a,TabPanels:t,TabList:r,TabsContext:i}},l={render:()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"})]}),e.jsxs(t,{children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})})]})]}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},d={render:()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(t,{children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Fourth slide"})})]})]}),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:s}}}}},o={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(r,{tabType:"stretched",children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},c={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(r,{stretchedUnderline:!0,children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},b={render:()=>e.jsxs(R,{direction:"column",gap:"medium",children:[e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(t,{animationDirection:"ltr",children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Fourth slide"})})]})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(t,{animationDirection:"rtl",children:[e.jsx(a,{children:e.jsx(s,{children:"First slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Second slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Third slide"})}),e.jsx(a,{children:e.jsx(s,{children:"Fourth slide"})})]})]})]}),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:s}}}}},T={render:()=>e.jsxs(r,{children:[e.jsx(n,{icon:j,children:"Main Table"}),e.jsx(n,{icon:p,children:"Chart"}),e.jsx(n,{icon:m,children:"Calendar"})]}),parameters:{docs:{liveEdit:{scope:{Table:j,Chart:p,Calendar:m}}}}},x={render:()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Account"})]}),e.jsxs(t,{children:[e.jsxs(a,{children:[e.jsx("h2",{children:"Login Details"}),e.jsx(h,{title:"Profile Name",size:"medium",placeholder:"Profile Name"})]}),e.jsxs(a,{children:[e.jsx("h2",{children:"Account Details"}),e.jsx(h,{title:"Account Name",size:"medium",placeholder:"Account Name"})]})]})]})};var u,C,P;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <TabsContext>
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
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var E,S,F;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var v,f,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var L,g,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(g=c.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var A,y,N;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(y=b.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var O,_,B;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(_=T.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var M,z,U;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(U=(z=x.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};const q=["Overview","Default","Stretched","StretchedUnderline","Motion","BoardViewsTabs","AdminSectionTabs"],Y=Object.freeze(Object.defineProperty({__proto__:null,AdminSectionTabs:x,BoardViewsTabs:T,Default:d,Motion:b,Overview:l,Stretched:o,StretchedUnderline:c,__namedExportsOrder:q,default:$},Symbol.toStringTag,{value:"Module"}));export{x as A,T as B,d as D,b as M,l as O,o as S,Y as T,c as a};
