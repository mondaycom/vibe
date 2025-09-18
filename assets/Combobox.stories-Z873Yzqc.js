import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as a}from"./index-CTZeEbLr.js";import{C as t}from"./Combobox-DieJsc_r.js";import{p as F}from"./person1-D9Wcho68.js";import{p as M,a as T}from"./person3-B60Gf7uf.js";import{i as Ge,c as fe,p as G,a as W,e as d,b as je,f as De,g as we}from"./interactions-utils-C-1LoDmD.js";import{queryByText as We}from"./index-i7od9_os.js";import{r as ke}from"./interactions-helper-BLVzu_Hd.js";import{g as Ee,b as Pe,N as w}from"./test-ids-utils-CSfXomCJ.js";import{D as i}from"./DialogContentContainer-CyLYKep7.js";import{B as Se}from"./Button-lmknnYep.js";import{D as Fe}from"./Tooltip-Cf28_m_C.js";import{A as Me}from"./Avatar-Bn0v7pS3.js";import{F as l}from"./Flex-D6jv3OvD.js";import{I as Te}from"./Icon-B1P6-uxB.js";import{T as z}from"./Text-1SYDbpP1.js";import{t as j}from"./Upgrade-CC_w3yRG.js";import{b as D}from"./Workspace-DtDO7RvQ.js";import{o as P,b as B,p as A}from"./index-CkcRWdy2.js";import{t as S}from"./ThumbsUp-WQ1WzAOd.js";import{t as v}from"./Wand-CS0YeGd1.js";import{p as ze}from"./story-description-B8U8K6Zm.js";import{c as Be}from"./createStoryMetaSettingsDecorator-M9remOuO.js";async function E(n){const o=De(n,Pe.COMBOBOX),r=we(o,"Search for content");return{comboboxElement:o,searchElement:r}}async function Ae(n){const{comboboxElement:o,searchElement:r}=await E(n);await je(r,"jjj",400),d(We(o,"Option 1")).toBeNull()}async function Re(n){const{comboboxElement:o,searchElement:r}=await E(n);await je(r,"jjj",400);const s=De(o,Ee(Pe.CLEAN_SEARCH_BUTTON,"combobox-search"));await fe(s),d(r).toHaveValue("");const p=W(o,"Option 1");d(p).toBeInTheDocument()}async function _e(n){const{comboboxElement:o,searchElement:r}=await E(n);await fe(r),await G(w.DOWN_ARROW);const s=W(o,"Option 1").parentElement;let p=r.getAttribute("aria-activedescendant");d(p).toEqual(s.id),await G(w.DOWN_ARROW);const ve=W(o,"Option 2").parentElement;p=r.getAttribute("aria-activedescendant"),d(p).toEqual(ve.id),await G(w.UP_ARROW),p=r.getAttribute("aria-activedescendant"),d(p).toEqual(s.id)}const k=Ge({tests:[_e,Ae,Re],afterEach:async()=>{await ke()}});try{k.displayName="defaultPlaySuite",k.__docgenInfo={description:"",displayName:"defaultPlaySuite",props:{canvasElement:{defaultValue:null,description:"",name:"canvasElement",required:!0,type:{name:'Screen<typeof import("/home/runner/work/vibe/vibe/node_modules/@testing-library/react/node_modules/@testing-library/dom/types/queries")>'}},args:{defaultValue:null,description:"",name:"args",required:!0,type:{name:"Record<string, any>"}}}}}catch{}const R=Be({component:t,iconPropNamesArray:["searchIcon"],actionPropsArray:["onOptionHover","onOptionLeave","onFilterChanged"]}),Ue={title:"Components/Combobox",component:t,argTypes:R.argTypes,decorators:R.decorators},Ve=n=>e.jsx(i,{children:e.jsx(t,{...n})}),c={render:Ve.bind({}),args:{options:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],onClick:()=>alert("clicked"),placeholder:"Placeholder text here",clearFilterOnSelection:!0},parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],[]);return e.jsx(t,{placeholder:"Placeholder text here",options:n})},play:k},g={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"}],[]);return e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Placeholder text here"})})},name:"Combobox inside a dialog"},u={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"}],[]);return e.jsxs(l,{gap:"large",children:[e.jsx(i,{children:e.jsx(t,{options:n,size:"small",placeholder:"Placeholder text here"})}),e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Placeholder text here"})}),e.jsx(i,{children:e.jsx(t,{options:n,size:"large",placeholder:"Placeholder text here"})})]})}},b={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Favorites",categoryId:"favorites"},{id:"2",label:"Main workspace",categoryId:"workspace"},{id:"3",label:"Client Foundations",categoryId:"workspace"},{id:"4",label:"Design",categoryId:"workspace"},{id:"5",label:"Marketing Cluster",categoryId:"workspace"},{id:"6",label:"Mobile",categoryId:"workspace"}],[]),o=a.useMemo(()=>({favorites:{id:"favorites",label:"Favorites"},workspace:{id:"Workspaces",label:"Workspaces"}}),[]);return e.jsxs(l,{gap:"large",justify:"start",align:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",align:"start",children:["Regular",e.jsx(i,{style:{height:"200px"},children:e.jsx(t,{options:n,categories:o,placeholder:"Placeholder text here"})})]}),e.jsxs(l,{direction:"column",gap:"medium",align:"start",children:["Sticky mode",e.jsx(i,{style:{height:"200px"},children:e.jsx(t,{stickyCategories:!0,options:n,categories:o,placeholder:"Placeholder text here"})})]}),e.jsxs(l,{direction:"column",gap:"medium",align:"start",children:["With divider",e.jsx(i,{style:{height:"200px"},children:e.jsx(t,{stickyCategories:!0,options:n,categories:o,withCategoriesDivider:!0,placeholder:"Placeholder text here"})})]})]})},name:"With categories"},h={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1",leftIcon:v},{id:"2",label:"Option 2",leftIcon:S},{id:"3",label:"Option 3",leftIcon:P},{id:"4",label:"Option 4",leftIcon:D},{id:"5",label:"Option 5",leftIcon:j}],[]);return e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Placeholder text here"})})},parameters:{docs:{liveEdit:{scope:{Wand:v,ThumbsUp:S,Time:P,Update:D,Upgrade:j}}}},name:"With icons"},x={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"},{id:"6",label:"Option 6"},{id:"7",label:"Option 7"},{id:"8",label:"Option 8"},{id:"9",label:"Option 9"}],[]),o=r=>e.jsxs("div",{children:[e.jsx(Te,{icon:B})," I can render anything with ",r.label]});return e.jsx(i,{children:e.jsx(t,{options:n,optionRenderer:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})},parameters:{docs:{liveEdit:{scope:{Person:B}}}},name:"With optionRenderer"},O={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1",leftIcon:v},{id:"2",label:"Option 2",leftIcon:S},{id:"3",label:"Option 3",leftIcon:P},{id:"4",label:"Option 4",leftIcon:D},{id:"5",label:"Option 5",leftIcon:j}],[]);return e.jsx(i,{children:e.jsxs(l,{direction:"column",align:"stretch",children:[e.jsx(t,{options:n,placeholder:"Placeholder text here"}),e.jsx(Se,{kind:"tertiary",leftIcon:A,children:"Edit"})]})})},parameters:{docs:{liveEdit:{scope:{Wand:v,ThumbsUp:S,Time:P,Update:D,Upgrade:j,Edit:A}}}}},y={render:()=>{const[n,o]=a.useState([]);return e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Type to create",addNewLabel:"Create new item",onAddNew:()=>o([...n,{id:n.length+1,label:`Option: ${n.length+1}`}])})})}},C={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1",categoryId:"Group1"},{id:"2",label:"Option 2",categoryId:"Group1"},{id:"3",label:"Option 3",categoryId:"Group1"},{id:"4",label:"Option 4",categoryId:"Group1"},{id:"5",label:"Option 5",categoryId:"Group1"},{id:"6",label:"Option 6",categoryId:"Group1"},{id:"7",label:"Option 7",categoryId:"Group1"},{id:"8",label:"Option 8",categoryId:"Group1"},{id:"9",label:"Option 9",categoryId:"Group1"},{id:"10",label:"Option 10",categoryId:"Group2"},{id:"11",label:"Option 11",categoryId:"Group2"},{id:"12",label:"Option 12",categoryId:"Group2"},{id:"13",label:"Option 13",categoryId:"Group2"},{id:"14",label:"Option 14",categoryId:"Group2"},{id:"15",label:"Option 15",categoryId:"Group2"},{id:"16",label:"Option 16",categoryId:"Group2"},{id:"17",label:"Option 17",categoryId:"Group2"},{id:"18",label:"Option 18",categoryId:"Group2"},{id:"19",label:"Option 19",categoryId:"Group2"},{id:"20",label:"Option 20",categoryId:"Group2"}],[]),o=a.useMemo(()=>({Group1:{id:"Group1",label:"Group 1"},Group2:{id:"Group2",label:"Group 2"}}),[]);return e.jsxs(l,{gap:"large",justify:"center",align:"start",children:[e.jsxs(l,{direction:"column",gap:"small",align:"start",children:["Virtualization without categories",e.jsx(i,{children:e.jsx(t,{options:n,renderOnlyVisibleOptions:!0,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})]}),e.jsxs(l,{direction:"column",gap:"small",align:"start",children:["Virtualization with categories",e.jsx(i,{children:e.jsx(t,{options:n,renderOnlyVisibleOptions:!0,categories:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})]}),e.jsxs(l,{direction:"column",gap:"small",align:"start",children:["Virtualization with sticky categories",e.jsx(i,{children:e.jsx(t,{stickyCategories:!0,options:n,renderOnlyVisibleOptions:!0,categories:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})]})]})},parameters:{docs:{liveEdit:{scope:{StoryDescription:ze}}}},name:"With virtualization optimization"},I={render:()=>{const n=a.useMemo(()=>[],[]);return e.jsx(i,{children:e.jsx(t,{loading:!0,options:n,placeholder:"Board name"})})},name:"Loading state"},f={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Julia Martinez",src:F,type:"img",position:"(Frontend Developer)",categoryId:"suggestedPeople"},{id:"2",label:"Marco DiAngelo",src:T,type:"img",position:"(Product Designer)",categoryId:"suggestedPeople"},{id:"3",label:"Liam Caldwell",src:M,type:"img",position:"(Brand Designer)",categoryId:"suggestedPeople"}],[]),o=a.useMemo(()=>({suggestedPeople:{id:"suggestedPeople",label:"Suggested people"}}),[]),r=s=>e.jsxs(l,{gap:"xs",children:[e.jsx(Me,{customSize:22,src:s.src,type:"img"},s.id),e.jsx(z,{children:s.label}),e.jsx(z,{color:"secondary",children:s.position})]});return e.jsx(l,{style:{height:"270px"},flex:"1",justify:"center",align:"start",children:e.jsx(Fe,{content:()=>e.jsx(i,{children:e.jsx(t,{options:n,categories:o,optionRenderer:r,size:"small",placeholder:"Search"})}),tooltip:!0,position:"bottom",open:!0,children:e.jsx(Se,{kind:"secondary",size:"small",children:"Select people"})})})},parameters:{docs:{liveEdit:{scope:{person1:F,person2:T,person3:M}}}},name:"Combobox as person picker"};var _,U,V;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: comboboxTemplate.bind({}),
  args: {
    options: [{
      id: "1",
      label: "Option 1"
    }, {
      id: "2",
      label: "Option 2"
    }, {
      id: "3",
      label: "Option 3"
    }],
    onClick: () => alert("clicked"),
    placeholder: "Placeholder text here",
    clearFilterOnSelection: true
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(V=(U=c.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var N,L,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Option 1"
    }, {
      id: "2",
      label: "Option 2"
    }, {
      id: "3",
      label: "Option 3"
    }], []);
    return <Combobox placeholder="Placeholder text here" options={options} />;
  },
  play: defaultPlaySuite
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var $,H,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Option 1"
    }, {
      id: "2",
      label: "Option 2"
    }, {
      id: "3",
      label: "Option 3"
    }, {
      id: "4",
      label: "Option 4"
    }, {
      id: "5",
      label: "Option 5"
    }], []);
    return <DialogContentContainer>
        <Combobox options={options} placeholder="Placeholder text here" />
      </DialogContentContainer>;
  },
  name: "Combobox inside a dialog"
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,X,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Option 1"
    }, {
      id: "2",
      label: "Option 2"
    }, {
      id: "3",
      label: "Option 3"
    }, {
      id: "4",
      label: "Option 4"
    }, {
      id: "5",
      label: "Option 5"
    }], []);
    return <Flex gap="large">
        <DialogContentContainer>
          <Combobox options={options} size="small" placeholder="Placeholder text here" />
        </DialogContentContainer>
        <DialogContentContainer>
          <Combobox options={options} placeholder="Placeholder text here" />
        </DialogContentContainer>
        <DialogContentContainer>
          <Combobox options={options} size="large" placeholder="Placeholder text here" />
        </DialogContentContainer>
      </Flex>;
  }
}`,...(Q=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Favorites",
      categoryId: "favorites"
    }, {
      id: "2",
      label: "Main workspace",
      categoryId: "workspace"
    }, {
      id: "3",
      label: "Client Foundations",
      categoryId: "workspace"
    }, {
      id: "4",
      label: "Design",
      categoryId: "workspace"
    }, {
      id: "5",
      label: "Marketing Cluster",
      categoryId: "workspace"
    }, {
      id: "6",
      label: "Mobile",
      categoryId: "workspace"
    }], []);
    const categories = useMemo(() => ({
      favorites: {
        id: "favorites",
        label: "Favorites"
      },
      workspace: {
        id: "Workspaces",
        label: "Workspaces"
      }
    }), []);
    return <Flex gap="large" justify="start" align="start">
        <Flex direction="column" gap="medium" align="start">
          Regular
          <DialogContentContainer style={{
          height: "200px"
        }}>
            <Combobox options={options} categories={categories} placeholder="Placeholder text here" />
          </DialogContentContainer>
        </Flex>
        <Flex direction="column" gap="medium" align="start">
          Sticky mode
          <DialogContentContainer style={{
          height: "200px"
        }}>
            <Combobox stickyCategories options={options} categories={categories} placeholder="Placeholder text here" />
          </DialogContentContainer>
        </Flex>
        <Flex direction="column" gap="medium" align="start">
          With divider
          <DialogContentContainer style={{
          height: "200px"
        }}>
            <Combobox stickyCategories options={options} categories={categories} withCategoriesDivider placeholder="Placeholder text here" />
          </DialogContentContainer>
        </Flex>
      </Flex>;
  },
  name: "With categories"
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,oe,te;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Option 1",
      leftIcon: Wand
    }, {
      id: "2",
      label: "Option 2",
      leftIcon: ThumbsUp
    }, {
      id: "3",
      label: "Option 3",
      leftIcon: Time
    }, {
      id: "4",
      label: "Option 4",
      leftIcon: Update
    }, {
      id: "5",
      label: "Option 5",
      leftIcon: Upgrade
    }], []);
    return <DialogContentContainer>
        <Combobox options={options} placeholder="Placeholder text here" />
      </DialogContentContainer>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Wand,
          ThumbsUp,
          Time,
          Update,
          Upgrade
        }
      }
    }
  },
  name: "With icons"
}`,...(te=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,re,ae;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Option 1"
    }, {
      id: "2",
      label: "Option 2"
    }, {
      id: "3",
      label: "Option 3"
    }, {
      id: "4",
      label: "Option 4"
    }, {
      id: "5",
      label: "Option 5"
    }, {
      id: "6",
      label: "Option 6"
    }, {
      id: "7",
      label: "Option 7"
    }, {
      id: "8",
      label: "Option 8"
    }, {
      id: "9",
      label: "Option 9"
    }], []);
    const optionRenderer = (option: any) => <div>
        <Icon icon={Person} /> I can render anything with {option.label}
      </div>;
    return <DialogContentContainer>
        <Combobox options={options} optionRenderer={optionRenderer} placeholder="Placeholder text here" maxOptionsWithoutScroll={3} />
      </DialogContentContainer>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Person
        }
      }
    }
  },
  name: "With optionRenderer"
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var le,se,pe;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Option 1",
      leftIcon: Wand
    }, {
      id: "2",
      label: "Option 2",
      leftIcon: ThumbsUp
    }, {
      id: "3",
      label: "Option 3",
      leftIcon: Time
    }, {
      id: "4",
      label: "Option 4",
      leftIcon: Update
    }, {
      id: "5",
      label: "Option 5",
      leftIcon: Upgrade
    }], []);
    return <DialogContentContainer>
        <Flex direction="column" align="stretch">
          <Combobox options={options} placeholder="Placeholder text here" />
          <Button kind="tertiary" leftIcon={Edit}>
            Edit
          </Button>
        </Flex>
      </DialogContentContainer>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Wand,
          ThumbsUp,
          Time,
          Update,
          Upgrade,
          Edit
        }
      }
    }
  }
}`,...(pe=(se=O.parameters)==null?void 0:se.docs)==null?void 0:pe.source}}};var de,ce,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState([]);
    return <DialogContentContainer>
        <Combobox options={options} placeholder="Type to create" addNewLabel="Create new item" onAddNew={() => setOptions([...options, {
        id: options.length + 1,
        label: \`Option: \${options.length + 1}\`
      }])} />
      </DialogContentContainer>;
  }
}`,...(me=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ge,ue,be;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Option 1",
      categoryId: "Group1"
    }, {
      id: "2",
      label: "Option 2",
      categoryId: "Group1"
    }, {
      id: "3",
      label: "Option 3",
      categoryId: "Group1"
    }, {
      id: "4",
      label: "Option 4",
      categoryId: "Group1"
    }, {
      id: "5",
      label: "Option 5",
      categoryId: "Group1"
    }, {
      id: "6",
      label: "Option 6",
      categoryId: "Group1"
    }, {
      id: "7",
      label: "Option 7",
      categoryId: "Group1"
    }, {
      id: "8",
      label: "Option 8",
      categoryId: "Group1"
    }, {
      id: "9",
      label: "Option 9",
      categoryId: "Group1"
    }, {
      id: "10",
      label: "Option 10",
      categoryId: "Group2"
    }, {
      id: "11",
      label: "Option 11",
      categoryId: "Group2"
    }, {
      id: "12",
      label: "Option 12",
      categoryId: "Group2"
    }, {
      id: "13",
      label: "Option 13",
      categoryId: "Group2"
    }, {
      id: "14",
      label: "Option 14",
      categoryId: "Group2"
    }, {
      id: "15",
      label: "Option 15",
      categoryId: "Group2"
    }, {
      id: "16",
      label: "Option 16",
      categoryId: "Group2"
    }, {
      id: "17",
      label: "Option 17",
      categoryId: "Group2"
    }, {
      id: "18",
      label: "Option 18",
      categoryId: "Group2"
    }, {
      id: "19",
      label: "Option 19",
      categoryId: "Group2"
    }, {
      id: "20",
      label: "Option 20",
      categoryId: "Group2"
    }], []);
    const categories = useMemo(() => ({
      Group1: {
        id: "Group1",
        label: "Group 1"
      },
      Group2: {
        id: "Group2",
        label: "Group 2"
      }
    }), []);
    return <Flex gap="large" justify="center" align="start">
        <Flex direction="column" gap="small" align="start">
          Virtualization without categories
          <DialogContentContainer>
            <Combobox options={options} renderOnlyVisibleOptions placeholder="Placeholder text here" maxOptionsWithoutScroll={3} />
          </DialogContentContainer>
        </Flex>
        <Flex direction="column" gap="small" align="start">
          Virtualization with categories
          <DialogContentContainer>
            <Combobox options={options} renderOnlyVisibleOptions categories={categories} placeholder="Placeholder text here" maxOptionsWithoutScroll={3} />
          </DialogContentContainer>
        </Flex>
        <Flex direction="column" gap="small" align="start">
          Virtualization with sticky categories
          <DialogContentContainer>
            <Combobox stickyCategories options={options} renderOnlyVisibleOptions categories={categories} placeholder="Placeholder text here" maxOptionsWithoutScroll={3} />
          </DialogContentContainer>
        </Flex>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          StoryDescription
        }
      }
    }
  },
  name: "With virtualization optimization"
}`,...(be=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var he,xe,Oe;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [], []);
    return <DialogContentContainer>
        <Combobox loading options={options} placeholder="Board name" />
      </DialogContentContainer>;
  },
  name: "Loading state"
}`,...(Oe=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source}}};var ye,Ce,Ie;f.parameters={...f.parameters,docs:{...(ye=f.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      id: "1",
      label: "Julia Martinez",
      src: person1,
      type: "img",
      position: "(Frontend Developer)",
      categoryId: "suggestedPeople"
    }, {
      id: "2",
      label: "Marco DiAngelo",
      src: person2,
      type: "img",
      position: "(Product Designer)",
      categoryId: "suggestedPeople"
    }, {
      id: "3",
      label: "Liam Caldwell",
      src: person3,
      type: "img",
      position: "(Brand Designer)",
      categoryId: "suggestedPeople"
    }], []);
    const categories = useMemo(() => ({
      suggestedPeople: {
        id: "suggestedPeople",
        label: "Suggested people"
      }
    }), []);
    const optionRenderer = (option: any) => <Flex gap="xs">
        <Avatar customSize={22} src={option.src} type="img" key={option.id} />
        <Text>{option.label}</Text>
        <Text color="secondary">{option.position}</Text>
      </Flex>;
    return <Flex style={{
      height: "270px"
    }} flex="1" justify="center" align="start">
        <Dialog content={() => <DialogContentContainer>
              <Combobox options={options} categories={categories} optionRenderer={optionRenderer} size="small" placeholder="Search" />
            </DialogContentContainer>} tooltip position="bottom" open>
          <Button kind="secondary" size="small">
            Select people
          </Button>
        </Dialog>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          person2,
          person3
        }
      }
    }
  },
  name: "Combobox as person picker"
}`,...(Ie=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:Ie.source}}};const Ne=["Overview","Default","ComboboxInsideADialog","Sizes","WithCategories","WithIcons","WithOptionRenderer","WithButton","WithCreation","WithVirtualizationOptimization","LoadingState","ComboboxAsPersonPicker"],un=Object.freeze(Object.defineProperty({__proto__:null,ComboboxAsPersonPicker:f,ComboboxInsideADialog:g,Default:m,LoadingState:I,Overview:c,Sizes:u,WithButton:O,WithCategories:b,WithCreation:y,WithIcons:h,WithOptionRenderer:x,WithVirtualizationOptimization:C,__namedExportsOrder:Ne,default:Ue},Symbol.toStringTag,{value:"Module"}));export{un as C,m as D,I as L,c as O,u as S,b as W,g as a,h as b,x as c,O as d,y as e,C as f,f as g};
