import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as d}from"./index-CTZeEbLr.js";import{S as t}from"./Skeleton-D0Wu-TTV.js";import{A as U}from"./Avatar-B9pKr73o.js";import{B as p}from"./Button-F5qCuF-h.js";import{F as n}from"./Flex-D6oMFEZi.js";import{T as l}from"./Text-Yn3VG6Pg.js";import{B as h}from"./Box-8M5YYPh1.js";import{t as _,a as I}from"./ThumbsUp-WQ1WzAOd.js";const O=""+new URL("person-02JXxArq.png",import.meta.url).href,A={title:"Components/Skeleton",component:t},i={render:s=>e.jsxs(n,{direction:"column",gap:"small",children:[e.jsx(t,{id:"overview-skeleton-1",...s}),e.jsx(t,{id:"overview-skeleton-2",...s}),e.jsx(t,{id:"overview-skeleton-3",...s})]}),args:{size:"h1",type:"text"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},r={render:()=>e.jsxs(n,{align:"end",gap:"large",children:[e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{id:"shapes-circle",type:"circle"}),e.jsx(l,{type:"text1",children:"Circle"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{id:"shapes-square"}),e.jsx(l,{type:"text1",children:"Square"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{id:"shapes-rectangle",width:112,height:46}),e.jsx(l,{type:"text1",children:"Rectangle"})]})]})},o={render:()=>e.jsxs(n,{align:"end",gap:"large",children:[e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{type:"text",size:"h1"}),e.jsx(l,{type:"text1",children:"H1"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{type:"text",size:"h2"}),e.jsx(l,{type:"text1",children:"H2"})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"large",children:[e.jsx(t,{type:"text",size:"small"}),e.jsx(l,{type:"text1",children:"Paragraph"})]})]}),name:"Text"},a={render:()=>e.jsxs(n,{align:"stretch",direction:"column",gap:"small",children:[e.jsxs(n,{gap:"small",children:[e.jsx(t,{type:"circle"}),e.jsx(t,{type:"text",width:110,size:"small"})]}),e.jsxs(n,{align:"stretch",gap:"medium",children:[e.jsx(t,{}),e.jsxs(n,{align:"stretch",direction:"column",gap:"small",children:[e.jsx(t,{type:"text",size:"h1"}),e.jsx(t,{type:"text",size:"h4"}),e.jsx(t,{type:"text",size:"h4"}),e.jsx(t,{type:"text",size:"h4"}),e.jsx(t,{type:"text",size:"h4",width:82})]})]})]})},c={render:()=>{const[s,x]=d.useState(!1),[C,m]=d.useState(!1),[q,E]=d.useState(!0),L=d.useCallback(()=>{E(!1),m(!1),x(!0),setTimeout(()=>{x(!1)},4e3),setTimeout(()=>{m(!0)},4e3)},[]);return e.jsxs(n,{direction:"column",gap:"large",flex:"1",children:[C&&e.jsxs(h,{border:!0,children:[e.jsxs(n,{direction:"column",align:"start",gap:"medium",style:{width:"730px",padding:"16px"},children:[e.jsxs(n,{gap:"small",children:[e.jsx(U,{src:O,type:"img"}),e.jsx(l,{weight:"bold",children:"Julia Martinez"})]}),e.jsx(l,{type:"text1",element:"p",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),e.jsxs(n,{style:{marginTop:"var(--space-24)",width:"100%"},children:[e.jsx(p,{style:{flexGrow:1,flexShrink:1,borderBottom:"none",borderRight:"none",borderLeft:"none"},leftIcon:_,kind:"secondary",children:"Like"}),e.jsx(p,{style:{flexGrow:1,flexShrink:1,borderBottom:"none",borderRight:"none"},leftIcon:I,kind:"secondary",children:"Reply"})]})]}),s&&e.jsxs(h,{border:!0,children:[e.jsxs(n,{direction:"column",align:"stretch",gap:"medium",style:{width:"730px",padding:"16px"},children:[e.jsxs(n,{align:"center",gap:"small",children:[e.jsx(t,{type:"circle",width:50,height:50}),e.jsx(t,{type:"text",size:"h5",width:110})]}),e.jsxs(n,{direction:"column",align:"stretch",gap:"small",children:[e.jsx(t,{type:"text",size:"small",width:655}),e.jsx(t,{type:"text",size:"small",width:680}),e.jsx(t,{type:"text",size:"small",width:670}),e.jsx(t,{type:"text",size:"small",width:675}),e.jsx(t,{type:"text",size:"small",width:400})]})]}),e.jsxs(n,{justify:"center",gap:300,style:{marginTop:"var(--space-24)",width:"100%",paddingBlock:"var(--space-8)"},children:[e.jsx(t,{type:"text",size:"h2",width:60}),e.jsx(t,{type:"text",size:"h2",width:60})]})]}),e.jsx(p,{kind:"secondary",onClick:L,children:q?"Load update":"Reload update"})]})},name:"Update in the system"};var u,g,y;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var k,S,j;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(S=r.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,f,F;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(F=(f=o.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var z,T,b;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var v,B,R;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};const G=["Overview","Shapes","TextSkeleton","ComplexExample","UpdateInTheSystem"],Q=Object.freeze(Object.defineProperty({__proto__:null,ComplexExample:a,Overview:i,Shapes:r,TextSkeleton:o,UpdateInTheSystem:c,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{a as C,i as O,Q as S,o as T,c as U,r as a};
