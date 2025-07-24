import{R as e,r as i}from"./index-Hemj67b4.js";import{C as t}from"./Combobox-BSd3TSY1.js";import{p as F}from"./person1-D9Wcho68.js";import{p as M,a as T}from"./person3-B60Gf7uf.js";import{i as Ge,c as Ee,p as v,a as W,e as p,b as Ie,f as fe,g as ve}from"./interactions-utils-BDSgavBb.js";import{queryByText as we}from"./index-JSOB3pIc.js";import{r as We}from"./interactions-helper-Bq4hWQWq.js";import{g as ke,b as De,N as w}from"./test-ids-utils-9ISiqDto.js";import{D as a}from"./DialogContentContainer-CjdfO6CD.js";import{B as Pe}from"./Button-DEM-Hn8V.js";import{D as Fe}from"./Tooltip-DUrP1YXb.js";import{A as Me}from"./Avatar-DumOSK4_.js";import{F as l}from"./Flex-DIvs4XZj.js";import{I as Te}from"./Icon-zHybxhV-.js";import{T as z}from"./Text-C0CU0_Vh.js";import{t as f}from"./Upgrade-Jax58DJ-.js";import{b as D}from"./Workspace-BIJf5qCK.js";import{p as P,b as B,q as A}from"./index-BA_MN9l1.js";import{t as S}from"./ThumbsUp-DnZbk6gE.js";import{t as G}from"./Wand-Cv7iNunW.js";import{p as ze}from"./story-description-B5F6CX2L.js";import{c as Be}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";async function k(n){const o=fe(n,De.COMBOBOX),r=ve(o,"Search for content");return{comboboxElement:o,searchElement:r}}async function Ae(n){const{comboboxElement:o,searchElement:r}=await k(n);await Ie(r,"jjj",400),p(we(o,"Option 1")).toBeNull()}async function Re(n){const{comboboxElement:o,searchElement:r}=await k(n);await Ie(r,"jjj",400);const s=fe(o,ke(De.CLEAN_SEARCH_BUTTON,"combobox-search"));await Ee(s),p(r).toHaveValue("");const c=W(o,"Option 1");p(c).toBeInTheDocument()}async function Ue(n){const{comboboxElement:o,searchElement:r}=await k(n);await Ee(r),await v(w.DOWN_ARROW);const s=W(o,"Option 1").parentElement;let c=r.getAttribute("aria-activedescendant");p(c).toEqual(s.id),await v(w.DOWN_ARROW);const Se=W(o,"Option 2").parentElement;c=r.getAttribute("aria-activedescendant"),p(c).toEqual(Se.id),await v(w.UP_ARROW),c=r.getAttribute("aria-activedescendant"),p(c).toEqual(s.id)}const Ve=Ge({tests:[Ue,Ae,Re],afterEach:async()=>{await We()}}),R=Be({component:t,iconPropNamesArray:["searchIcon"],actionPropsArray:["onOptionHover","onOptionLeave","onFilterChanged"]}),je={title:"Components/Combobox",component:t,argTypes:R.argTypes,decorators:R.decorators},Ne=n=>e.createElement(a,null,e.createElement(t,{...n})),d={render:Ne.bind({}),args:{options:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],onClick:()=>alert("clicked"),placeholder:"Placeholder text here",clearFilterOnSelection:!0},parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],[]);return e.createElement(t,{placeholder:"Placeholder text here",options:n})},play:Ve},g={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"}],[]);return e.createElement(a,null,e.createElement(t,{options:n,placeholder:"Placeholder text here"}))},name:"Combobox inside a dialog"},u={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"}],[]);return e.createElement(l,{gap:"large"},e.createElement(a,null,e.createElement(t,{options:n,size:"small",placeholder:"Placeholder text here"})),e.createElement(a,null,e.createElement(t,{options:n,placeholder:"Placeholder text here"})),e.createElement(a,null,e.createElement(t,{options:n,size:"large",placeholder:"Placeholder text here"})))}},b={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Favorites",categoryId:"favorites"},{id:"2",label:"Main workspace",categoryId:"workspace"},{id:"3",label:"Client Foundations",categoryId:"workspace"},{id:"4",label:"Design",categoryId:"workspace"},{id:"5",label:"Marketing Cluster",categoryId:"workspace"},{id:"6",label:"Mobile",categoryId:"workspace"}],[]),o=i.useMemo(()=>({favorites:{id:"favorites",label:"Favorites"},workspace:{id:"Workspaces",label:"Workspaces"}}),[]);return e.createElement(l,{gap:"large",justify:"start",align:"start"},e.createElement(l,{direction:"column",gap:"medium",align:"start"},"Regular",e.createElement(a,{style:{height:"200px"}},e.createElement(t,{options:n,categories:o,placeholder:"Placeholder text here"}))),e.createElement(l,{direction:"column",gap:"medium",align:"start"},"Sticky mode",e.createElement(a,{style:{height:"200px"}},e.createElement(t,{stickyCategories:!0,options:n,categories:o,placeholder:"Placeholder text here"}))),e.createElement(l,{direction:"column",gap:"medium",align:"start"},"With divider",e.createElement(a,{style:{height:"200px"}},e.createElement(t,{stickyCategories:!0,options:n,categories:o,withCategoriesDivider:!0,placeholder:"Placeholder text here"}))))},name:"With categories"},h={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Option 1",leftIcon:G},{id:"2",label:"Option 2",leftIcon:S},{id:"3",label:"Option 3",leftIcon:P},{id:"4",label:"Option 4",leftIcon:D},{id:"5",label:"Option 5",leftIcon:f}],[]);return e.createElement(a,null,e.createElement(t,{options:n,placeholder:"Placeholder text here"}))},parameters:{docs:{liveEdit:{scope:{Wand:G,ThumbsUp:S,Time:P,Update:D,Upgrade:f}}}},name:"With icons"},O={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"},{id:"6",label:"Option 6"},{id:"7",label:"Option 7"},{id:"8",label:"Option 8"},{id:"9",label:"Option 9"}],[]),o=r=>e.createElement("div",null,e.createElement(Te,{icon:B})," I can render anything with ",r.label);return e.createElement(a,null,e.createElement(t,{options:n,optionRenderer:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3}))},parameters:{docs:{liveEdit:{scope:{Person:B}}}},name:"With optionRenderer"},y={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Option 1",leftIcon:G},{id:"2",label:"Option 2",leftIcon:S},{id:"3",label:"Option 3",leftIcon:P},{id:"4",label:"Option 4",leftIcon:D},{id:"5",label:"Option 5",leftIcon:f}],[]);return e.createElement(a,null,e.createElement(l,{direction:"column",align:"stretch"},e.createElement(t,{options:n,placeholder:"Placeholder text here"}),e.createElement(Pe,{kind:"tertiary",leftIcon:A},"Edit")))},parameters:{docs:{liveEdit:{scope:{Wand:G,ThumbsUp:S,Time:P,Update:D,Upgrade:f,Edit:A}}}}},C={render:()=>{const[n,o]=i.useState([]);return e.createElement(a,null,e.createElement(t,{options:n,placeholder:"Type to create",addNewLabel:"Create new item",onAddNew:()=>o([...n,{id:n.length+1,label:`Option: ${n.length+1}`}])}))}},x={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Option 1",categoryId:"Group1"},{id:"2",label:"Option 2",categoryId:"Group1"},{id:"3",label:"Option 3",categoryId:"Group1"},{id:"4",label:"Option 4",categoryId:"Group1"},{id:"5",label:"Option 5",categoryId:"Group1"},{id:"6",label:"Option 6",categoryId:"Group1"},{id:"7",label:"Option 7",categoryId:"Group1"},{id:"8",label:"Option 8",categoryId:"Group1"},{id:"9",label:"Option 9",categoryId:"Group1"},{id:"10",label:"Option 10",categoryId:"Group2"},{id:"11",label:"Option 11",categoryId:"Group2"},{id:"12",label:"Option 12",categoryId:"Group2"},{id:"13",label:"Option 13",categoryId:"Group2"},{id:"14",label:"Option 14",categoryId:"Group2"},{id:"15",label:"Option 15",categoryId:"Group2"},{id:"16",label:"Option 16",categoryId:"Group2"},{id:"17",label:"Option 17",categoryId:"Group2"},{id:"18",label:"Option 18",categoryId:"Group2"},{id:"19",label:"Option 19",categoryId:"Group2"},{id:"20",label:"Option 20",categoryId:"Group2"}],[]),o=i.useMemo(()=>({Group1:{id:"Group1",label:"Group 1"},Group2:{id:"Group2",label:"Group 2"}}),[]);return e.createElement(l,{gap:"large",justify:"center",align:"start"},e.createElement(l,{direction:"column",gap:"small",align:"start"},"Virtualization without categories",e.createElement(a,null,e.createElement(t,{options:n,renderOnlyVisibleOptions:!0,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3}))),e.createElement(l,{direction:"column",gap:"small",align:"start"},"Virtualization with categories",e.createElement(a,null,e.createElement(t,{options:n,renderOnlyVisibleOptions:!0,categories:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3}))),e.createElement(l,{direction:"column",gap:"small",align:"start"},"Virtualization with sticky categories",e.createElement(a,null,e.createElement(t,{stickyCategories:!0,options:n,renderOnlyVisibleOptions:!0,categories:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3}))))},parameters:{docs:{liveEdit:{scope:{StoryDescription:ze}}}},name:"With virtualization optimization"},E={render:()=>{const n=i.useMemo(()=>[],[]);return e.createElement(a,null,e.createElement(t,{loading:!0,options:n,placeholder:"Board name"}))},name:"Loading state"},I={render:()=>{const n=i.useMemo(()=>[{id:"1",label:"Julia Martinez",src:F,type:"img",position:"(Frontend Developer)",categoryId:"suggestedPeople"},{id:"2",label:"Marco DiAngelo",src:T,type:"img",position:"(Product Designer)",categoryId:"suggestedPeople"},{id:"3",label:"Liam Caldwell",src:M,type:"img",position:"(Brand Designer)",categoryId:"suggestedPeople"}],[]),o=i.useMemo(()=>({suggestedPeople:{id:"suggestedPeople",label:"Suggested people"}}),[]),r=s=>e.createElement(l,{gap:"xs"},e.createElement(Me,{customSize:22,src:s.src,type:"img",key:s.id}),e.createElement(z,null,s.label),e.createElement(z,{color:"secondary"},s.position));return e.createElement(l,{style:{height:"270px"},flex:"1",justify:"center",align:"start"},e.createElement(Fe,{content:()=>e.createElement(a,null,e.createElement(t,{options:n,categories:o,optionRenderer:r,size:"small",placeholder:"Search"})),tooltip:!0,position:"bottom",open:!0},e.createElement(Pe,{kind:"secondary",size:"small"},"Select people")))},parameters:{docs:{liveEdit:{scope:{person1:F,person2:T,person3:M}}}},name:"Combobox as person picker"};var U,V,j;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var N,L,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var $,q,H;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,K,X;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(K=u.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Q,Y,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,oe;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,ae,re;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=O.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,le,se;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(le=y.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,pe,de;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState([]);
    return <DialogContentContainer>
        <Combobox options={options} placeholder="Type to create" addNewLabel="Create new item" onAddNew={() => setOptions([...options, {
        id: options.length + 1,
        label: \`Option: \${options.length + 1}\`
      }])} />
      </DialogContentContainer>;
  }
}`,...(de=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ge,ue;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var be,he,Oe;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [], []);
    return <DialogContentContainer>
        <Combobox loading options={options} placeholder="Board name" />
      </DialogContentContainer>;
  },
  name: "Loading state"
}`,...(Oe=(he=E.parameters)==null?void 0:he.docs)==null?void 0:Oe.source}}};var ye,Ce,xe;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(xe=(Ce=I.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};const Le=["Overview","Default","ComboboxInsideADialog","Sizes","WithCategories","WithIcons","WithOptionRenderer","WithButton","WithCreation","WithVirtualizationOptimization","LoadingState","ComboboxAsPersonPicker"],gn=Object.freeze(Object.defineProperty({__proto__:null,ComboboxAsPersonPicker:I,ComboboxInsideADialog:g,Default:m,LoadingState:E,Overview:d,Sizes:u,WithButton:y,WithCategories:b,WithCreation:C,WithIcons:h,WithOptionRenderer:O,WithVirtualizationOptimization:x,__namedExportsOrder:Le,default:je},Symbol.toStringTag,{value:"Module"}));export{gn as C,m as D,E as L,d as O,u as S,b as W,g as a,h as b,O as c,y as d,C as e,x as f,I as g};
