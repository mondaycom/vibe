import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as d}from"./index-CTZeEbLr.js";import{p as _}from"./person1-D9Wcho68.js";import{c as I}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{f as O,k as G}from"./index-BVKo2bYj.js";import{S as t}from"./Skeleton-rkx_Czm8.js";import{F as n}from"./Flex-Bimzf4jb.js";import{T as s}from"./Text-DVNPP_6L.js";import{B as h}from"./Box-BwRYjhPo.js";import{A as H}from"./Avatar-CwVuOGB7.js";import{B as p}from"./Button-zprqw9Vf.js";const u=I({component:t}),M={title:"Components/Skeleton",component:t,argTypes:u.argTypes,decorators:u.decorators},i={render:l=>e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(t,{id:"overview-skeleton-1",...l}),e.jsx(t,{id:"overview-skeleton-2",...l}),e.jsx(t,{id:"overview-skeleton-3",...l})]}),args:{size:"h1",type:"text"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(n,{align:"end",gap:"large",children:[e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{id:"shapes-circle",type:"circle"}),e.jsx(s,{type:"text1",children:"Circle"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{id:"shapes-square"}),e.jsx(s,{type:"text1",children:"Square"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{id:"shapes-rectangle",width:112,height:46}),e.jsx(s,{type:"text1",children:"Rectangle"})]})]})},o={render:()=>e.jsxs(n,{align:"end",gap:"large",children:[e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{type:"text",size:"h1"}),e.jsx(s,{type:"text1",children:"H1"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{type:"text",size:"h2"}),e.jsx(s,{type:"text1",children:"H2"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{type:"text",size:"small"}),e.jsx(s,{type:"text1",children:"Paragraph"})]})]}),name:"Text"},a={render:()=>e.jsxs(n,{align:"stretch",direction:"column",gap:"small",children:[e.jsxs(n,{gap:"small",children:[e.jsx(t,{type:"circle"}),e.jsx(t,{type:"text",width:110,size:"small"})]}),e.jsxs(n,{align:"stretch",gap:"medium",children:[e.jsx(t,{}),e.jsxs(n,{align:"stretch",direction:"column",gap:"small",children:[e.jsx(t,{type:"text",size:"h1"}),e.jsx(t,{type:"text",size:"h4"}),e.jsx(t,{type:"text",size:"h4"}),e.jsx(t,{type:"text",size:"h4"}),e.jsx(t,{type:"text",size:"h4",width:82})]})]})]})},c={render:()=>{const[l,x]=d.useState(!1),[q,m]=d.useState(!1),[E,L]=d.useState(!0),U=d.useCallback(()=>{L(!1),m(!1),x(!0),setTimeout(()=>{x(!1)},4e3),setTimeout(()=>{m(!0)},4e3)},[]);return e.jsxs(n,{direction:"column",gap:"large",flex:"1",children:[q&&e.jsxs(h,{border:!0,children:[e.jsxs(n,{direction:"column",align:"start",gap:"medium",style:{width:"730px",padding:"16px"},children:[e.jsxs(n,{gap:"small",children:[e.jsx(H,{src:_,type:"img"}),e.jsx(s,{weight:"bold",children:"Julia Martinez"})]}),e.jsx(s,{type:"text1",element:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),e.jsxs(n,{style:{marginTop:"var(--space-24)",width:"100%"},children:[e.jsx(p,{style:{flexGrow:1,flexShrink:1,borderBottom:"none",borderRight:"none",borderLeft:"none"},leftIcon:O,kind:"secondary",children:"Like"}),e.jsx(p,{style:{flexGrow:1,flexShrink:1,borderBottom:"none",borderRight:"none"},leftIcon:G,kind:"secondary",children:"Reply"})]})]}),l&&e.jsxs(h,{border:!0,children:[e.jsxs(n,{direction:"column",align:"stretch",gap:"medium",style:{width:"730px",padding:"16px"},children:[e.jsxs(n,{align:"center",gap:"small",children:[e.jsx(t,{type:"circle",width:50,height:50}),e.jsx(t,{type:"text",size:"h5",width:110})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"small",children:[e.jsx(t,{type:"text",size:"small",width:655}),e.jsx(t,{type:"text",size:"small",width:680}),e.jsx(t,{type:"text",size:"small",width:670}),e.jsx(t,{type:"text",size:"small",width:675}),e.jsx(t,{type:"text",size:"small",width:400})]})]}),e.jsxs(n,{justify:"center",gap:300,style:{marginTop:"var(--space-24)",width:"100%",paddingBlock:"var(--space-8)"},children:[e.jsx(t,{type:"text",size:"h2",width:60}),e.jsx(t,{type:"text",size:"h2",width:60})]})]}),e.jsx(p,{kind:"secondary",onClick:U,children:E?"Load update":"Reload update"})]})},name:"Update in the system"};var g,y,S;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: SkeletonProps) => <Flex direction="column" gap="small">
      <Skeleton id="overview-skeleton-1" {...args} />
      <Skeleton id="overview-skeleton-2" {...args} />
      <Skeleton id="overview-skeleton-3" {...args} />
    </Flex>,
  args: {
    size: "h1",
    type: "text"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(S=(y=i.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var k,j,w;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex align="end" gap="large">
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton id="shapes-circle" type="circle" />
        <Text type="text1">Circle</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton id="shapes-square" />
        <Text type="text1">Square</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton id="shapes-rectangle" width={112} height={46} />
        <Text type="text1">Rectangle</Text>
      </Flex>
    </Flex>
}`,...(w=(j=r.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var f,F,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Flex align="end" gap="large">
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="text" size="h1" />
        <Text type="text1">H1</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="text" size="h2" />
        <Text type="text1">H2</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="text" size="small" />
        <Text type="text1">Paragraph</Text>
      </Flex>
    </Flex>,
  name: "Text"
}`,...(z=(F=o.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var T,b,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    return <Flex align="stretch" direction="column" gap="small">
        <Flex gap="small">
          <Skeleton type="circle" />
          <Skeleton type="text" width={110} size="small" />
        </Flex>
        <Flex align="stretch" gap="medium">
          <Skeleton />
          <Flex align="stretch" direction="column" gap="small">
            <Skeleton type="text" size="h1" />
            <Skeleton type="text" size="h4" />
            <Skeleton type="text" size="h4" />
            <Skeleton type="text" size="h4" />
            <Skeleton type="text" size="h4" width={82} />
          </Flex>
        </Flex>
      </Flex>;
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,R,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [showBlock, setShowBlock] = useState(false);
    const [showReload, setShowReload] = useState(true);
    const onClickCallback = useCallback(() => {
      setShowReload(false);
      setShowBlock(false);
      setShowSkeleton(true);
      setTimeout(() => {
        setShowSkeleton(false);
      }, 4000);
      setTimeout(() => {
        setShowBlock(true);
      }, 4000);
    }, []);
    return <Flex direction="column" gap="large" flex="1">
        {showBlock && <Box border>
            <Flex direction="column" align="start" gap="medium" style={{
          width: "730px",
          padding: "16px"
        }}>
              <Flex gap="small">
                <Avatar src={person} type="img" />
                <Text weight="bold">Julia Martinez</Text>
              </Flex>
              <Text type="text1" element="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Text>
            </Flex>
            <Flex style={{
          marginTop: "var(--space-24)",
          width: "100%"
        }}>
              <Button style={{
            flexGrow: 1,
            flexShrink: 1,
            borderBottom: "none",
            borderRight: "none",
            borderLeft: "none"
          }} leftIcon={ThumbsUp} kind="secondary">
                Like
              </Button>
              <Button style={{
            flexGrow: 1,
            flexShrink: 1,
            borderBottom: "none",
            borderRight: "none"
          }} leftIcon={Reply} kind="secondary">
                Reply
              </Button>
            </Flex>
          </Box>}
        {showSkeleton && <Box border>
            <Flex direction="column" align="stretch" gap="medium" style={{
          width: "730px",
          padding: "16px"
        }}>
              <Flex align="center" gap="small">
                <Skeleton type="circle" width={50} height={50} />
                <Skeleton type="text" size="h5" width={110} />
              </Flex>
              <Flex direction="column" align="stretch" gap="small">
                <Skeleton type="text" size="small" width={655} />
                <Skeleton type="text" size="small" width={680} />
                <Skeleton type="text" size="small" width={670} />
                <Skeleton type="text" size="small" width={675} />
                <Skeleton type="text" size="small" width={400} />
              </Flex>
            </Flex>
            <Flex justify="center" gap={300} style={{
          marginTop: "var(--space-24)",
          width: "100%",
          paddingBlock: "var(--space-8)"
        }}>
              <Skeleton type="text" size="h2" width={60} />
              <Skeleton type="text" size="h2" width={60} />
            </Flex>
          </Box>}
        <Button kind="secondary" onClick={onClickCallback}>
          {showReload ? "Load update" : "Reload update"}
        </Button>
      </Flex>;
  },
  name: "Update in the system"
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};const P=["Overview","Shapes","TextSkeleton","ComplexExample","UpdateInTheSystem"],Z=Object.freeze(Object.defineProperty({__proto__:null,ComplexExample:a,Overview:i,Shapes:r,TextSkeleton:o,UpdateInTheSystem:c,__namedExportsOrder:P,default:M},Symbol.toStringTag,{value:"Module"}));export{a as C,i as O,Z as S,o as T,c as U,r as a};
