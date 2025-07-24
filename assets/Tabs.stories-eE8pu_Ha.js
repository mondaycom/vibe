import{R as e}from"./index-Hemj67b4.js";import{T as l,a as n}from"./TabList-BYzueYrr.js";import{T as r,a as s,b as a}from"./TabPanels-DiCnA7sO.js";import{T as E}from"./TextField-Dc_mArgZ.js";import{B as R}from"./Box-CI4IQ3Nw.js";import{F as V}from"./Flex-DIvs4XZj.js";import{r as u}from"./Calendar-BX7mDXzx.js";import{t as p,a as C}from"./Table-DKnXfo9h.js";const t=({children:k})=>e.createElement(R,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"}},k),$={title:"Components/Tabs",component:n,subcomponents:{TabPanel:a,TabPanels:s,TabList:l,TabsContext:r}},i={render:()=>e.createElement(r,null,e.createElement(l,null,e.createElement(n,null,"First"),e.createElement(n,null,"Second"),e.createElement(n,null,"Third")),e.createElement(s,null,e.createElement(a,null,e.createElement(t,null,"First slide")),e.createElement(a,null,e.createElement(t,null,"Second slide")),e.createElement(a,null,e.createElement(t,null,"Third slide")))),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement(r,null,e.createElement(l,null,e.createElement(n,null,"First"),e.createElement(n,null,"Second"),e.createElement(n,null,"Third"),e.createElement(n,{disabled:!0},"Disabled")),e.createElement(s,null,e.createElement(a,null,e.createElement(t,null,"First slide")),e.createElement(a,null,e.createElement(t,null,"Second slide")),e.createElement(a,null,e.createElement(t,null,"Third slide")),e.createElement(a,null,e.createElement(t,null,"Fourth slide")))),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:t}}}}},c={render:()=>e.createElement("div",{style:{width:"100%"}},e.createElement(l,{tabType:"stretched"},e.createElement(n,null,"First"),e.createElement(n,null,"Second"),e.createElement(n,null,"Third"),e.createElement(n,{disabled:!0},"Disabled")))},d={render:()=>e.createElement("div",{style:{width:"100%"}},e.createElement(l,{stretchedUnderline:!0},e.createElement(n,null,"First"),e.createElement(n,null,"Second"),e.createElement(n,null,"Third"),e.createElement(n,{disabled:!0},"Disabled")))},m={render:()=>e.createElement(V,{direction:"column",gap:"medium"},e.createElement(r,null,e.createElement(l,null,e.createElement(n,null,"First"),e.createElement(n,null,"Second"),e.createElement(n,null,"Third"),e.createElement(n,{disabled:!0},"Disabled")),e.createElement(s,{animationDirection:"ltr"},e.createElement(a,null,e.createElement(t,null,"First slide")),e.createElement(a,null,e.createElement(t,null,"Second slide")),e.createElement(a,null,e.createElement(t,null,"Third slide")),e.createElement(a,null,e.createElement(t,null,"Fourth slide")))),e.createElement(r,null,e.createElement(l,null,e.createElement(n,null,"First"),e.createElement(n,null,"Second"),e.createElement(n,null,"Third"),e.createElement(n,{disabled:!0},"Disabled")),e.createElement(s,{animationDirection:"rtl"},e.createElement(a,null,e.createElement(t,null,"First slide")),e.createElement(a,null,e.createElement(t,null,"Second slide")),e.createElement(a,null,e.createElement(t,null,"Third slide")),e.createElement(a,null,e.createElement(t,null,"Fourth slide"))))),parameters:{docs:{liveEdit:{scope:{ExampleTabContent:t}}}}},b={render:()=>e.createElement(l,null,e.createElement(n,{icon:C},"Main Table"),e.createElement(n,{icon:p},"Chart"),e.createElement(n,{icon:u},"Calendar")),parameters:{docs:{liveEdit:{scope:{Table:C,Chart:p,Calendar:u}}}}},T={render:()=>e.createElement(r,null,e.createElement(l,null,e.createElement(n,null,"Profile"),e.createElement(n,null,"Account")),e.createElement(s,null,e.createElement(a,null,e.createElement("h2",null,"Login Details"),e.createElement(E,{title:"Profile Name",size:"medium",placeholder:"Profile Name"})),e.createElement(a,null,e.createElement("h2",null,"Account Details"),e.createElement(E,{title:"Account Name",size:"medium",placeholder:"Account Name"}))))};var h,x,P;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(P=(x=i.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var S,F,v;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(F=o.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var f,D,L;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var g,w,A;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var y,N,O;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,B,M;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(M=(B=b.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var z,U,j;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(j=(U=T.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const q=["Overview","Default","Stretched","StretchedUnderline","Motion","BoardViewsTabs","AdminSectionTabs"],Y=Object.freeze(Object.defineProperty({__proto__:null,AdminSectionTabs:T,BoardViewsTabs:b,Default:o,Motion:m,Overview:i,Stretched:c,StretchedUnderline:d,__namedExportsOrder:q,default:$},Symbol.toStringTag,{value:"Module"}));export{T as A,b as B,o as D,m as M,i as O,c as S,Y as T,d as a};
