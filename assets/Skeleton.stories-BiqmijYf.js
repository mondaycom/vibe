import{R as e,r as m}from"./index-Hemj67b4.js";import{S as t}from"./Skeleton-CSQsAHwF.js";import{A as _}from"./Avatar-DD1JLpr9.js";import{B as p}from"./Button-t0_MS1N7.js";import{F as n}from"./Flex-pz2uwxlA.js";import{T as l}from"./Text-CBUmQ7si.js";import{B as x}from"./Box-DnEG61CI.js";import{t as I,a as O}from"./ThumbsUp-DnZbk6gE.js";const j=""+new URL("person-02JXxArq.png",import.meta.url).href,A={title:"Components/Skeleton",component:t},r={render:a=>e.createElement(n,{direction:"column",gap:"small"},e.createElement(t,{...a}),e.createElement(t,{...a}),e.createElement(t,{...a})),args:{size:"h1",type:"text"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.createElement(n,{align:"end",gap:"large"},e.createElement(n,{direction:"column",align:"stretch",gap:"large"},e.createElement(t,{type:"circle"}),e.createElement(l,{type:"text1"},"Circle")),e.createElement(n,{direction:"column",align:"stretch",gap:"large"},e.createElement(t,null),e.createElement(l,{type:"text1"},"Square")),e.createElement(n,{direction:"column",align:"stretch",gap:"large"},e.createElement(t,{width:112,height:46}),e.createElement(l,{type:"text1"},"Rectangle")))},i={render:()=>e.createElement(n,{align:"end",gap:"large"},e.createElement(n,{direction:"column",align:"stretch",gap:"large"},e.createElement(t,{type:"text",size:"h1"}),e.createElement(l,{type:"text1"},"H1")),e.createElement(n,{direction:"column",align:"stretch",gap:"large"},e.createElement(t,{type:"text",size:"h2"}),e.createElement(l,{type:"text1"},"H2")),e.createElement(n,{direction:"column",align:"stretch",gap:"large"},e.createElement(t,{type:"text",size:"small"}),e.createElement(l,{type:"text1"},"Paragraph"))),name:"Text"},s={render:()=>e.createElement(n,{align:"stretch",direction:"column",gap:"small"},e.createElement(n,{gap:"small"},e.createElement(t,{type:"circle"}),e.createElement(t,{type:"text",width:110,size:"small"})),e.createElement(n,{align:"stretch",gap:"medium"},e.createElement(t,null),e.createElement(n,{align:"stretch",direction:"column",gap:"small"},e.createElement(t,{type:"text",size:"h1"}),e.createElement(t,{type:"text",size:"h4"}),e.createElement(t,{type:"text",size:"h4"}),e.createElement(t,{type:"text",size:"h4"}),e.createElement(t,{type:"text",size:"h4",width:82}))))},c={render:()=>{const[a,d]=m.useState(!1),[C,u]=m.useState(!1),[q,L]=m.useState(!0),U=m.useCallback(()=>{L(!1),u(!1),d(!0),setTimeout(()=>{d(!1)},4e3),setTimeout(()=>{u(!0)},4e3)},[]);return e.createElement(n,{direction:"column",gap:"large",flex:"1"},C&&e.createElement(x,{border:!0},e.createElement(n,{direction:"column",align:"start",gap:"medium",style:{width:"730px",padding:"16px"}},e.createElement(n,{gap:"small"},e.createElement(_,{src:j,type:"img"}),e.createElement(l,{weight:"bold"},"Julia Martinez")),e.createElement(l,{type:"text1",element:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),e.createElement(n,{style:{marginTop:"var(--space-24)",width:"100%"}},e.createElement(p,{style:{flexGrow:1,flexShrink:1,borderBottom:"none",borderRight:"none",borderLeft:"none"},leftIcon:I,kind:"secondary"},"Like"),e.createElement(p,{style:{flexGrow:1,flexShrink:1,borderBottom:"none",borderRight:"none"},leftIcon:O,kind:"secondary"},"Reply"))),a&&e.createElement(x,{border:!0},e.createElement(n,{direction:"column",align:"stretch",gap:"medium",style:{width:"730px",padding:"16px"}},e.createElement(n,{align:"center",gap:"small"},e.createElement(t,{type:"circle",width:50,height:50}),e.createElement(t,{type:"text",size:"h5",width:110})),e.createElement(n,{direction:"column",align:"stretch",gap:"small"},e.createElement(t,{type:"text",size:"small",width:655}),e.createElement(t,{type:"text",size:"small",width:680}),e.createElement(t,{type:"text",size:"small",width:670}),e.createElement(t,{type:"text",size:"small",width:675}),e.createElement(t,{type:"text",size:"small",width:400}))),e.createElement(n,{justify:"center",gap:300,style:{marginTop:"var(--space-24)",width:"100%",paddingBlock:"var(--space-8)"}},e.createElement(t,{type:"text",size:"h2",width:60}),e.createElement(t,{type:"text",size:"h2",width:60}))),e.createElement(p,{kind:"secondary",onClick:U},q?"Load update":"Reload update"))},name:"Update in the system"};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: SkeletonProps) => <Flex direction="column" gap="small">
      <Skeleton {...args} />
      <Skeleton {...args} />
      <Skeleton {...args} />
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
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,k,E;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Flex align="end" gap="large">
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton type="circle" />
        <Text type="text1">Circle</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton />
        <Text type="text1">Square</Text>
      </Flex>
      <Flex direction="column" align="stretch" gap="large">
        <Skeleton width={112} height={46} />
        <Text type="text1">Rectangle</Text>
      </Flex>
    </Flex>
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var w,f,F;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var z,T,b;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var B,v,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const G=["Overview","Shapes","TextSkeleton","ComplexExample","UpdateInTheSystem"],N=Object.freeze(Object.defineProperty({__proto__:null,ComplexExample:s,Overview:r,Shapes:o,TextSkeleton:i,UpdateInTheSystem:c,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{s as C,r as O,N as S,i as T,c as U,o as a};
