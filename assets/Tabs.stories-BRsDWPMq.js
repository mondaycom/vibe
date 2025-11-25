import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{T as i,a as o,b as d}from"./TabPanels-BVuqQ04X.js";import{T as r,a as n}from"./TabList-CYYyEiWV.js";import{r as T}from"./Calendar-NzkLrIBg.js";import{t as u,a as p}from"./Table-DaDp-EUK.js";import{B as a}from"./Box-BwRYjhPo.js";import{F as V}from"./Flex-Bimzf4jb.js";import{T as g}from"./TextField-D2v604IJ.js";const R={title:"Components/Tabs",component:n,subcomponents:{TabPanel:d,TabPanels:o,TabList:r,TabsContext:i}},s={render:U=>e.jsxs(i,{id:"overview-tabs",...U,children:[e.jsxs(r,{id:"overview-tab-list",children:[e.jsx(n,{id:"overview-tab-first",children:"First"}),e.jsx(n,{id:"overview-tab-second",children:"Second"}),e.jsx(n,{id:"overview-tab-third",children:"Third"})]}),e.jsxs(o,{id:"overview-tab-panels",children:[e.jsx(d,{id:"overview-panel-first",children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"First slide"})}),e.jsx(d,{id:"overview-panel-second",children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Second slide"})}),e.jsx(d,{id:"overview-panel-third",children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Third slide"})})]})]}),name:"Overview",parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>e.jsxs(i,{id:"default-tabs",children:[e.jsxs(r,{id:"default-tab-list",children:[e.jsx(n,{id:"default-tab-first",children:"First"}),e.jsx(n,{id:"default-tab-second",children:"Second"}),e.jsx(n,{id:"default-tab-third",children:"Third"}),e.jsx(n,{id:"default-tab-disabled",disabled:!0,children:"Disabled"})]}),e.jsxs(o,{id:"default-tab-panels",children:[e.jsx(d,{id:"default-panel-first",children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"First slide"})}),e.jsx(d,{id:"default-panel-second",children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Second slide"})}),e.jsx(d,{id:"default-panel-third",children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Third slide"})}),e.jsx(d,{id:"default-panel-fourth",children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Fourth slide"})})]})]})},t={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(r,{tabType:"stretched",children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},c={render:()=>e.jsx("div",{style:{width:"100%"},children:e.jsxs(r,{stretchedUnderline:!0,children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]})})},h={render:()=>e.jsxs(V,{direction:"column",gap:"medium",children:[e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(o,{animationDirection:"ltr",children:[e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"First slide"})}),e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Second slide"})}),e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Third slide"})}),e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Fourth slide"})})]})]}),e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"First"}),e.jsx(n,{children:"Second"}),e.jsx(n,{children:"Third"}),e.jsx(n,{disabled:!0,children:"Disabled"})]}),e.jsxs(o,{animationDirection:"rtl",children:[e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"First slide"})}),e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Second slide"})}),e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Third slide"})}),e.jsx(d,{children:e.jsx(a,{backgroundColor:"greyBackgroundColor",padding:"medium",style:{width:"480px",height:"111px"},children:"Fourth slide"})})]})]})]})},b={render:()=>e.jsxs(r,{children:[e.jsx(n,{icon:p,children:"Main Table"}),e.jsx(n,{icon:u,children:"Chart"}),e.jsx(n,{icon:T,children:"Calendar"})]}),parameters:{docs:{liveEdit:{scope:{Table:p,Chart:u,Calendar:T}}}}},x={render:()=>e.jsxs(i,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Account"})]}),e.jsxs(o,{children:[e.jsxs(d,{children:[e.jsx("h2",{children:"Login Details"}),e.jsx(g,{title:"Profile Name",size:"medium",placeholder:"Profile Name"})]}),e.jsxs(d,{children:[e.jsx("h2",{children:"Account Details"}),e.jsx(g,{title:"Account Name",size:"medium",placeholder:"Account Name"})]})]})]})};var m,j,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: TabProps) => <TabsContext id="overview-tabs" {...args}>
      <TabList id="overview-tab-list">
        <Tab id="overview-tab-first">First</Tab>
        <Tab id="overview-tab-second">Second</Tab>
        <Tab id="overview-tab-third">Third</Tab>
      </TabList>
      <TabPanels id="overview-tab-panels">
        <TabPanel id="overview-panel-first">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
          width: "480px",
          height: "111px"
        }}>
            First slide
          </Box>
        </TabPanel>
        <TabPanel id="overview-panel-second">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
          width: "480px",
          height: "111px"
        }}>
            Second slide
          </Box>
        </TabPanel>
        <TabPanel id="overview-panel-third">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
          width: "480px",
          height: "111px"
        }}>
            Third slide
          </Box>
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
}`,...(C=(j=s.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,B,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
          width: "480px",
          height: "111px"
        }}>
            First slide
          </Box>
        </TabPanel>
        <TabPanel id="default-panel-second">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
          width: "480px",
          height: "111px"
        }}>
            Second slide
          </Box>
        </TabPanel>
        <TabPanel id="default-panel-third">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
          width: "480px",
          height: "111px"
        }}>
            Third slide
          </Box>
        </TabPanel>
        <TabPanel id="default-panel-fourth">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
          width: "480px",
          height: "111px"
        }}>
            Fourth slide
          </Box>
        </TabPanel>
      </TabPanels>
    </TabsContext>
}`,...(k=(B=l.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var w,v,P;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(v=t.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var f,S,F;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(F=(S=c.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var D,L,A;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              First slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              Second slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              Third slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              Fourth slide
            </Box>
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
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              First slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              Second slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              Third slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{
            width: "480px",
            height: "111px"
          }}>
              Fourth slide
            </Box>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </Flex>
}`,...(A=(L=h.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var E,N,O;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(O=(N=b.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var _,M,z;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(z=(M=x.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};const $=["Overview","Default","Stretched","StretchedUnderline","Motion","BoardViewsTabs","AdminSectionTabs"],X=Object.freeze(Object.defineProperty({__proto__:null,AdminSectionTabs:x,BoardViewsTabs:b,Default:l,Motion:h,Overview:s,Stretched:t,StretchedUnderline:c,__namedExportsOrder:$,default:R},Symbol.toStringTag,{value:"Module"}));export{x as A,b as B,l as D,h as M,s as O,t as S,X as T,c as a};
