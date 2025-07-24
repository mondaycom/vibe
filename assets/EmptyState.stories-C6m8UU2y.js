import{R as t}from"./index-Hemj67b4.js";import{E as o}from"./EmptyState-Bspv-A9r.js";import{F as $}from"./Flex-DIvs4XZj.js";import{c as H}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{L as J}from"./Link-s0y4jlGK.js";import{j as Q}from"./index-BA_MN9l1.js";import{b as X}from"./Workspace-BIJf5qCK.js";import{B as Z}from"./Button-DEM-Hn8V.js";const i=""+new URL("image-DW1oF2i0.png",import.meta.url).href,tt=H({component:o}),et={title:"Components/EmptyState",component:o,argTypes:{title:{control:"text",description:"Optional title for the empty state"},description:{control:"text",description:"Required description text explaining the empty state"},visual:{control:"object",description:"Optional visual element like image, animation, video, or illustration"},layout:{control:"select",options:["default","compact"],description:"Layout style of the empty state"},mainAction:{control:"object",description:"Main action button configuration"},supportingAction:{control:"object",description:"Supporting action (link or tertiary button) configuration"}},decorators:tt.decorators},n={render:e=>t.createElement(o,{title:"The title should be concise and reflect the purpose",description:"This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below.",visual:t.createElement("img",{src:i,alt:"No items found",width:280,height:184}),mainAction:{text:"Main Action",onClick:()=>{console.log("Main action clicked")}},supportingAction:{text:"Read more",href:"#",onClick:()=>{console.log("Supporting action clicked")}},...e}),name:"Overview",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:e=>t.createElement(o,{title:"Visualize data from multiple boards",description:"Use charts, timelines, and other widgets to see your data clearly.",visual:t.createElement("img",{src:i,alt:"No items found",width:280,height:184}),mainAction:{text:"Add your first widget",onClick:()=>{console.log("Main action clicked")}},supportingAction:{text:"Read more",href:"#",onClick:()=>{console.log("Supporting action clicked")}},...e}),name:"Default",args:{},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:e=>t.createElement(o,{description:"No data available yet. Add some items to get started.",visual:t.createElement("img",{src:i,alt:"No data available",width:280,height:184}),mainAction:{text:"Add item",onClick:()=>{console.log("Main action clicked")}},supportingAction:{text:"Read more",href:"#",onClick:()=>{console.log("Supporting action clicked")}},...e}),name:"Without title"},c={render:e=>t.createElement(o,{title:"Visualize data from multiple boards",description:"Use charts, timelines, and other widgets to see your data clearly.",visual:t.createElement("img",{src:i,alt:"No notifications",width:280,height:184}),layout:"compact",mainAction:{text:"Add your first widget",onClick:()=>{console.log("Main action clicked")}},supportingAction:{text:"Read more",href:"#",onClick:()=>{console.log("Supporting action clicked")}},...e}),name:"Compact"},s={render:e=>t.createElement(o,{title:"No files uploaded",description:"Upload files to share with your team members.",visual:t.createElement("img",{src:i,alt:"No files uploaded",width:280,height:184}),mainAction:{kind:"primary",text:"Upload files",leftIcon:X,onClick:()=>{console.log("Main action clicked")}},supportingAction:{text:"Import from drive",leftIcon:Q,onClick:()=>{console.log("Supporting action clicked")}},...e}),name:"With button supporting action"},l={render:e=>t.createElement(o,{title:"Processing data",description:"Your data is being processed. This might take a few minutes.",visual:t.createElement("img",{src:i,alt:"Processing data",width:280,height:184}),mainAction:{kind:"secondary",text:"Refresh",disabled:!0,loading:!0,onClick:()=>{console.log("Main action clicked")}},supportingAction:{text:"Cancel",disabled:!0,onClick:()=>{console.log("Supporting action clicked")}},...e}),name:"With disabled actions"},d={render:e=>t.createElement($,{direction:"row",gap:"large"},t.createElement(o,{title:"Your favorites are empty",description:"Add boards, docs, or dashboards to your favorites for quick access.",visual:t.createElement("img",{src:i,alt:"No items found",width:280,height:184}),mainAction:{kind:"secondary",text:"Add favorites",onClick:()=>{console.log("First view - Add item clicked")}}}),t.createElement(o,{title:"Your favorites are empty",description:"Add boards, docs, or dashboards to your favorites for quick access.",visual:t.createElement("img",{src:i,alt:"No items found",width:280,height:184}),mainAction:{kind:"primary",text:"Add favorites",onClick:()=>{console.log("Second view - View details clicked")}},...e})),name:"Actions comparison"},p={render:e=>t.createElement(o,{title:"This workspace is empty",description:'To get started, click the "+" above, then click "add new board".',supportingAction:{href:"https://example.com/help",text:"Read more"},...e}),name:"With link only"},m={render:e=>t.createElement(o,{title:"This workspace is empty",description:"Get started by choosing a board template or creating a board from scratch.",mainAction:{kind:"secondary",text:"Browse templates",onClick:()=>{console.log("Main action clicked")}},supportingAction:{kind:"tertiary",text:"Start from scratch",onClick:()=>{console.log("Supporting action clicked")}},...e}),name:"With two buttons"},g={render:e=>t.createElement($,{direction:"row",gap:"large",justify:"space-between",style:{width:"100%"}},t.createElement(o,{title:"Create your first Gantt chart",description:"Gantt charts keep your projects organized.",mainAction:{kind:"secondary",text:"Connect boards to start",onClick:()=>{console.log("Main action clicked")}}}),t.createElement(o,{description:"Create your first Gantt chart",mainAction:{kind:"secondary",text:"Connect boards to start",onClick:()=>{console.log("Main action clicked")}},...e})),name:"With and without title comparison"},u={render:e=>t.createElement(o,{title:"No notifications",description:"You're all caught up! Check back later for new notifications.",visual:t.createElement("img",{src:i,alt:"No notifications",width:280,height:184}),mainAction:t.createElement(Z,{kind:"secondary",onClick:()=>{console.log("Main action clicked")}},"Check notifications"),supportingAction:t.createElement(J,{href:"#",text:"Manage notification settings",onClick:()=>{console.log("Supporting action clicked")}}),...e}),name:"With action element props"};var h,k,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="The title should be concise and reflect the purpose" description="This optional paragraph should be use to extend the title. Keep it short and to the point. For longer texts add a link below." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
    text: "Main Action",
    onClick: () => {
      console.log("Main action clicked");
    }
  }} supportingAction={{
    text: "Read more",
    href: "#",
    onClick: () => {
      console.log("Supporting action clicked");
    }
  }} {...args} />,
  name: "Overview",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var y,S,A;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="Visualize data from multiple boards" description="Use charts, timelines, and other widgets to see your data clearly." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
    text: "Add your first widget",
    onClick: () => {
      console.log("Main action clicked");
    }
  }} supportingAction={{
    text: "Read more",
    href: "#",
    onClick: () => {
      console.log("Supporting action clicked");
    }
  }} {...args} />,
  name: "Default",
  args: {},
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(A=(S=a.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var b,w,E;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState description="No data available yet. Add some items to get started." visual={<img src={emptyStateImage} alt="No data available" width={280} height={184} />} mainAction={{
    text: "Add item",
    onClick: () => {
      console.log("Main action clicked");
    }
  }} supportingAction={{
    text: "Read more",
    href: "#",
    onClick: () => {
      console.log("Supporting action clicked");
    }
  }} {...args} />,
  name: "Without title"
}`,...(E=(w=r.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var C,v,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="Visualize data from multiple boards" description="Use charts, timelines, and other widgets to see your data clearly." visual={<img src={emptyStateImage} alt="No notifications" width={280} height={184} />} layout="compact" mainAction={{
    text: "Add your first widget",
    onClick: () => {
      console.log("Main action clicked");
    }
  }} supportingAction={{
    text: "Read more",
    href: "#",
    onClick: () => {
      console.log("Supporting action clicked");
    }
  }} {...args} />,
  name: "Compact"
}`,...(x=(v=c.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var W,M,N;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="No files uploaded" description="Upload files to share with your team members." visual={<img src={emptyStateImage} alt="No files uploaded" width={280} height={184} />} mainAction={{
    kind: "primary",
    text: "Upload files",
    leftIcon: Update,
    onClick: () => {
      console.log("Main action clicked");
    }
  }} supportingAction={{
    text: "Import from drive",
    leftIcon: Download,
    onClick: () => {
      console.log("Supporting action clicked");
    }
  }} {...args} />,
  name: "With button supporting action"
}`,...(N=(M=s.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var T,P,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="Processing data" description="Your data is being processed. This might take a few minutes." visual={<img src={emptyStateImage} alt="Processing data" width={280} height={184} />} mainAction={{
    kind: "secondary",
    text: "Refresh",
    disabled: true,
    loading: true,
    onClick: () => {
      console.log("Main action clicked");
    }
  }} supportingAction={{
    text: "Cancel",
    disabled: true,
    onClick: () => {
      console.log("Supporting action clicked");
    }
  }} {...args} />,
  name: "With disabled actions"
}`,...(I=(P=l.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var R,O,F;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <Flex direction="row" gap="large">
      <EmptyState title="Your favorites are empty" description="Add boards, docs, or dashboards to your favorites for quick access." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
      kind: "secondary",
      text: "Add favorites",
      onClick: () => {
        console.log("First view - Add item clicked");
      }
    }} />
      <EmptyState title="Your favorites are empty" description="Add boards, docs, or dashboards to your favorites for quick access." visual={<img src={emptyStateImage} alt="No items found" width={280} height={184} />} mainAction={{
      kind: "primary",
      text: "Add favorites",
      onClick: () => {
        console.log("Second view - View details clicked");
      }
    }} {...args} />
    </Flex>,
  name: "Actions comparison"
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var j,B,D;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="This workspace is empty" description='To get started, click the "+" above, then click "add new board".' supportingAction={{
    href: "https://example.com/help",
    text: "Read more"
  }} {...args} />,
  name: "With link only"
}`,...(D=(B=p.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var U,G,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="This workspace is empty" description="Get started by choosing a board template or creating a board from scratch." mainAction={{
    kind: "secondary",
    text: "Browse templates",
    onClick: () => {
      console.log("Main action clicked");
    }
  }} supportingAction={{
    kind: "tertiary",
    text: "Start from scratch",
    onClick: () => {
      console.log("Supporting action clicked");
    }
  }} {...args} />,
  name: "With two buttons"
}`,...(Y=(G=m.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var z,L,_;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <Flex direction="row" gap="large" justify="space-between" style={{
    width: "100%"
  }}>
      <EmptyState title="Create your first Gantt chart" description="Gantt charts keep your projects organized." mainAction={{
      kind: "secondary",
      text: "Connect boards to start",
      onClick: () => {
        console.log("Main action clicked");
      }
    }} />
      <EmptyState description="Create your first Gantt chart" mainAction={{
      kind: "secondary",
      text: "Connect boards to start",
      onClick: () => {
        console.log("Main action clicked");
      }
    }} {...args} />
    </Flex>,
  name: "With and without title comparison"
}`,...(_=(L=g.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var V,q,K;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: EmptyStateProps) => <EmptyState title="No notifications" description="You're all caught up! Check back later for new notifications." visual={<img src={emptyStateImage} alt="No notifications" width={280} height={184} />} mainAction={<Button kind="secondary" onClick={() => {
    console.log("Main action clicked");
  }}>
          Check notifications
        </Button>} supportingAction={<Link href="#" text="Manage notification settings" onClick={() => {
    console.log("Supporting action clicked");
  }} />} {...args} />,
  name: "With action element props"
}`,...(K=(q=u.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const ot=["Overview","Default","WithoutTitle","Compact","WithButtonSupportingAction","WithDisabledActions","ActionsComparison","WithLinkOnly","WithTwoButtons","WithAndWithoutTitleComparison","WithActionElementProps"],pt=Object.freeze(Object.defineProperty({__proto__:null,ActionsComparison:d,Compact:c,Default:a,Overview:n,WithActionElementProps:u,WithAndWithoutTitleComparison:g,WithButtonSupportingAction:s,WithDisabledActions:l,WithLinkOnly:p,WithTwoButtons:m,WithoutTitle:r,__namedExportsOrder:ot,default:et},Symbol.toStringTag,{value:"Module"}));export{d as A,c as C,a as D,pt as E,n as O,p as W,m as a,g as b};
