import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as a}from"./index-Hemj67b4.js";import{C as t}from"./Combobox-C_pVm6sc.js";import{p as E}from"./person1-D9Wcho68.js";import{p as F,a as M}from"./person3-B60Gf7uf.js";import{i as Ge,c as Ie,p as v,a as W,e as c,b as fe,f as je,g as ve}from"./interactions-utils-DDQLEz6W.js";import{queryByText as we}from"./index-JSOB3pIc.js";import{r as We}from"./interactions-helper-Bq4hWQWq.js";import{g as ke,b as De,N as w}from"./test-ids-utils-CSfXomCJ.js";import{D as i}from"./DialogContentContainer-lbi8em3I.js";import{B as Pe}from"./Button-bpAINS_f.js";import{D as Ee}from"./Tooltip-CegK04wV.js";import{A as Fe}from"./Avatar-DLbSE9uc.js";import{F as l}from"./Flex-DyEHjGyy.js";import{I as Me}from"./Icon-CXcoWofk.js";import{T}from"./Text-DCxsFWAH.js";import{t as j}from"./Upgrade-Jax58DJ-.js";import{b as D}from"./Workspace-BIJf5qCK.js";import{o as P,b as z,p as B}from"./index-VC5anwLh.js";import{t as S}from"./ThumbsUp-DnZbk6gE.js";import{t as G}from"./Wand-Cv7iNunW.js";import{p as Te}from"./story-description-B5F6CX2L.js";import{c as ze}from"./createStoryMetaSettingsDecorator-CZWEfz_r.js";async function k(n){const o=je(n,De.COMBOBOX),r=ve(o,"Search for content");return{comboboxElement:o,searchElement:r}}async function Be(n){const{comboboxElement:o,searchElement:r}=await k(n);await fe(r,"jjj",400),c(we(o,"Option 1")).toBeNull()}async function Ae(n){const{comboboxElement:o,searchElement:r}=await k(n);await fe(r,"jjj",400);const s=je(o,ke(De.CLEAN_SEARCH_BUTTON,"combobox-search"));await Ie(s),c(r).toHaveValue("");const p=W(o,"Option 1");c(p).toBeInTheDocument()}async function Re(n){const{comboboxElement:o,searchElement:r}=await k(n);await Ie(r),await v(w.DOWN_ARROW);const s=W(o,"Option 1").parentElement;let p=r.getAttribute("aria-activedescendant");c(p).toEqual(s.id),await v(w.DOWN_ARROW);const Se=W(o,"Option 2").parentElement;p=r.getAttribute("aria-activedescendant"),c(p).toEqual(Se.id),await v(w.UP_ARROW),p=r.getAttribute("aria-activedescendant"),c(p).toEqual(s.id)}const Ue=Ge({tests:[Re,Be,Ae],afterEach:async()=>{await We()}}),A=ze({component:t,iconPropNamesArray:["searchIcon"],actionPropsArray:["onOptionHover","onOptionLeave","onFilterChanged"]}),Ve={title:"Components/Combobox",component:t,argTypes:A.argTypes,decorators:A.decorators},Ne=n=>e.jsx(i,{children:e.jsx(t,{...n})}),d={render:Ne.bind({}),args:{options:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],onClick:()=>alert("clicked"),placeholder:"Placeholder text here",clearFilterOnSelection:!0},parameters:{docs:{liveEdit:{isEnabled:!1}}}},m={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"}],[]);return e.jsx(t,{placeholder:"Placeholder text here",options:n})},play:Ue},g={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"}],[]);return e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Placeholder text here"})})},name:"Combobox inside a dialog"},u={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"}],[]);return e.jsxs(l,{gap:"large",children:[e.jsx(i,{children:e.jsx(t,{options:n,size:"small",placeholder:"Placeholder text here"})}),e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Placeholder text here"})}),e.jsx(i,{children:e.jsx(t,{options:n,size:"large",placeholder:"Placeholder text here"})})]})}},b={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Favorites",categoryId:"favorites"},{id:"2",label:"Main workspace",categoryId:"workspace"},{id:"3",label:"Client Foundations",categoryId:"workspace"},{id:"4",label:"Design",categoryId:"workspace"},{id:"5",label:"Marketing Cluster",categoryId:"workspace"},{id:"6",label:"Mobile",categoryId:"workspace"}],[]),o=a.useMemo(()=>({favorites:{id:"favorites",label:"Favorites"},workspace:{id:"Workspaces",label:"Workspaces"}}),[]);return e.jsxs(l,{gap:"large",justify:"start",align:"start",children:[e.jsxs(l,{direction:"column",gap:"medium",align:"start",children:["Regular",e.jsx(i,{style:{height:"200px"},children:e.jsx(t,{options:n,categories:o,placeholder:"Placeholder text here"})})]}),e.jsxs(l,{direction:"column",gap:"medium",align:"start",children:["Sticky mode",e.jsx(i,{style:{height:"200px"},children:e.jsx(t,{stickyCategories:!0,options:n,categories:o,placeholder:"Placeholder text here"})})]}),e.jsxs(l,{direction:"column",gap:"medium",align:"start",children:["With divider",e.jsx(i,{style:{height:"200px"},children:e.jsx(t,{stickyCategories:!0,options:n,categories:o,withCategoriesDivider:!0,placeholder:"Placeholder text here"})})]})]})},name:"With categories"},h={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1",leftIcon:G},{id:"2",label:"Option 2",leftIcon:S},{id:"3",label:"Option 3",leftIcon:P},{id:"4",label:"Option 4",leftIcon:D},{id:"5",label:"Option 5",leftIcon:j}],[]);return e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Placeholder text here"})})},parameters:{docs:{liveEdit:{scope:{Wand:G,ThumbsUp:S,Time:P,Update:D,Upgrade:j}}}},name:"With icons"},x={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"},{id:"5",label:"Option 5"},{id:"6",label:"Option 6"},{id:"7",label:"Option 7"},{id:"8",label:"Option 8"},{id:"9",label:"Option 9"}],[]),o=r=>e.jsxs("div",{children:[e.jsx(Me,{icon:z})," I can render anything with ",r.label]});return e.jsx(i,{children:e.jsx(t,{options:n,optionRenderer:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})},parameters:{docs:{liveEdit:{scope:{Person:z}}}},name:"With optionRenderer"},O={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1",leftIcon:G},{id:"2",label:"Option 2",leftIcon:S},{id:"3",label:"Option 3",leftIcon:P},{id:"4",label:"Option 4",leftIcon:D},{id:"5",label:"Option 5",leftIcon:j}],[]);return e.jsx(i,{children:e.jsxs(l,{direction:"column",align:"stretch",children:[e.jsx(t,{options:n,placeholder:"Placeholder text here"}),e.jsx(Pe,{kind:"tertiary",leftIcon:B,children:"Edit"})]})})},parameters:{docs:{liveEdit:{scope:{Wand:G,ThumbsUp:S,Time:P,Update:D,Upgrade:j,Edit:B}}}}},y={render:()=>{const[n,o]=a.useState([]);return e.jsx(i,{children:e.jsx(t,{options:n,placeholder:"Type to create",addNewLabel:"Create new item",onAddNew:()=>o([...n,{id:n.length+1,label:`Option: ${n.length+1}`}])})})}},C={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Option 1",categoryId:"Group1"},{id:"2",label:"Option 2",categoryId:"Group1"},{id:"3",label:"Option 3",categoryId:"Group1"},{id:"4",label:"Option 4",categoryId:"Group1"},{id:"5",label:"Option 5",categoryId:"Group1"},{id:"6",label:"Option 6",categoryId:"Group1"},{id:"7",label:"Option 7",categoryId:"Group1"},{id:"8",label:"Option 8",categoryId:"Group1"},{id:"9",label:"Option 9",categoryId:"Group1"},{id:"10",label:"Option 10",categoryId:"Group2"},{id:"11",label:"Option 11",categoryId:"Group2"},{id:"12",label:"Option 12",categoryId:"Group2"},{id:"13",label:"Option 13",categoryId:"Group2"},{id:"14",label:"Option 14",categoryId:"Group2"},{id:"15",label:"Option 15",categoryId:"Group2"},{id:"16",label:"Option 16",categoryId:"Group2"},{id:"17",label:"Option 17",categoryId:"Group2"},{id:"18",label:"Option 18",categoryId:"Group2"},{id:"19",label:"Option 19",categoryId:"Group2"},{id:"20",label:"Option 20",categoryId:"Group2"}],[]),o=a.useMemo(()=>({Group1:{id:"Group1",label:"Group 1"},Group2:{id:"Group2",label:"Group 2"}}),[]);return e.jsxs(l,{gap:"large",justify:"center",align:"start",children:[e.jsxs(l,{direction:"column",gap:"small",align:"start",children:["Virtualization without categories",e.jsx(i,{children:e.jsx(t,{options:n,renderOnlyVisibleOptions:!0,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})]}),e.jsxs(l,{direction:"column",gap:"small",align:"start",children:["Virtualization with categories",e.jsx(i,{children:e.jsx(t,{options:n,renderOnlyVisibleOptions:!0,categories:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})]}),e.jsxs(l,{direction:"column",gap:"small",align:"start",children:["Virtualization with sticky categories",e.jsx(i,{children:e.jsx(t,{stickyCategories:!0,options:n,renderOnlyVisibleOptions:!0,categories:o,placeholder:"Placeholder text here",maxOptionsWithoutScroll:3})})]})]})},parameters:{docs:{liveEdit:{scope:{StoryDescription:Te}}}},name:"With virtualization optimization"},I={render:()=>{const n=a.useMemo(()=>[],[]);return e.jsx(i,{children:e.jsx(t,{loading:!0,options:n,placeholder:"Board name"})})},name:"Loading state"},f={render:()=>{const n=a.useMemo(()=>[{id:"1",label:"Julia Martinez",src:E,type:"img",position:"(Frontend Developer)",categoryId:"suggestedPeople"},{id:"2",label:"Marco DiAngelo",src:M,type:"img",position:"(Product Designer)",categoryId:"suggestedPeople"},{id:"3",label:"Liam Caldwell",src:F,type:"img",position:"(Brand Designer)",categoryId:"suggestedPeople"}],[]),o=a.useMemo(()=>({suggestedPeople:{id:"suggestedPeople",label:"Suggested people"}}),[]),r=s=>e.jsxs(l,{gap:"xs",children:[e.jsx(Fe,{customSize:22,src:s.src,type:"img"},s.id),e.jsx(T,{children:s.label}),e.jsx(T,{color:"secondary",children:s.position})]});return e.jsx(l,{style:{height:"270px"},flex:"1",justify:"center",align:"start",children:e.jsx(Ee,{content:()=>e.jsx(i,{children:e.jsx(t,{options:n,categories:o,optionRenderer:r,size:"small",placeholder:"Search"})}),tooltip:!0,position:"bottom",open:!0,children:e.jsx(Pe,{kind:"secondary",size:"small",children:"Select people"})})})},parameters:{docs:{liveEdit:{scope:{person1:E,person2:M,person3:F}}}},name:"Combobox as person picker"};var R,U,V;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(U=d.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var N,L,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var te,ie,re;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,le,se;O.parameters={...O.parameters,docs:{...(ae=O.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(le=O.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var pe,ce,de;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = useState([]);
    return <DialogContentContainer>
        <Combobox options={options} placeholder="Type to create" addNewLabel="Create new item" onAddNew={() => setOptions([...options, {
        id: options.length + 1,
        label: \`Option: \${options.length + 1}\`
      }])} />
      </DialogContentContainer>;
  }
}`,...(de=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ge,ue;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var be,he,xe;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [], []);
    return <DialogContentContainer>
        <Combobox loading options={options} placeholder="Board name" />
      </DialogContentContainer>;
  },
  name: "Loading state"
}`,...(xe=(he=I.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Oe,ye,Ce;f.parameters={...f.parameters,docs:{...(Oe=f.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ce=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:Ce.source}}};const Le=["Overview","Default","ComboboxInsideADialog","Sizes","WithCategories","WithIcons","WithOptionRenderer","WithButton","WithCreation","WithVirtualizationOptimization","LoadingState","ComboboxAsPersonPicker"],un=Object.freeze(Object.defineProperty({__proto__:null,ComboboxAsPersonPicker:f,ComboboxInsideADialog:g,Default:m,LoadingState:I,Overview:d,Sizes:u,WithButton:O,WithCategories:b,WithCreation:y,WithIcons:h,WithOptionRenderer:x,WithVirtualizationOptimization:C,__namedExportsOrder:Le,default:Ve},Symbol.toStringTag,{value:"Module"}));export{un as C,m as D,I as L,d as O,u as S,b as W,g as a,h as b,x as c,O as d,y as e,C as f,f as g};
