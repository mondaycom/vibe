import{R as e,r as s}from"./index-Hemj67b4.js";import{userEvent as ro,waitFor as lo}from"./index-JSOB3pIc.js";import{i as ao,j as T,e as L,b as Y,c as V,a as H,l as io}from"./interactions-utils-BDSgavBb.js";import{A as po}from"./Avatar-DumOSK4_.js";import{M as j}from"./ModalExampleContent-Br0uGe_r.js";import{l as co}from"./tip-BKixvd9t.js";import{m as c}from"./storybook-link-CJQ6zkLU.js";import{D as t}from"./Dropdown-CHn-63l7.js";import{p as r}from"./story-description-B5F6CX2L.js";import{C as q}from"./index-BA_MN9l1.js";import{a as z}from"./Settings-DOfpeGYp.js";import{M as uo,L as mo}from"./LegacyModal-BlRZYiIk.js";import{c as wo}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";import{F as p}from"./Flex-DIvs4XZj.js";import{a as _}from"./Label-CoAw5UaU.js";import{D as ho}from"./DialogContentContainer-CjdfO6CD.js";import{B as vo}from"./Box-CI4IQ3Nw.js";import{B as so}from"./Button-DEM-Hn8V.js";const go=async o=>{const n=await T(o,"combobox");await V(n),await Y(n,"Option");const a=H(o,"Option 1");await V(a);const l=io("clear-indicator");await V(l),H(o,"Placeholder text here")},bo=async o=>{const n=await T(o,"combobox");await V(n),await H(o,"Option 1"),await Y(n,"{escape}");const a=await o.queryByText("Option 1");L(a).toBeNull()},Do=ao({beforeEach:async o=>{const n=await T(o,"combobox");await ro.clear(n),L(n.value).toEqual(""),await Y(n,"{escape}");const a=await o.queryByText("Option 1");L(a).toBeNull()},tests:[go,bo]}),yo=async o=>{const n=await o.queryByText("+2");await V(n),await lo(async()=>{const a=await T(document.body,"dialog");L(a).toBeInTheDocument()})},Eo=ao({tests:[yo]}),k=""+new URL("person-BWCqTmiy.png",import.meta.url).href,F=""+new URL("person3-D84NPWTh.png",import.meta.url).href,P="data:image/png;base64,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",W=({src:o,type:n,size:a,name:l,position:i})=>e.createElement("div",{className:"dropdown-stories-styles_inline-container"},e.createElement(po,{size:a,src:o,type:n,key:l}),e.createElement("span",{className:"dropdown-stories-styles_name"},l,e.createElement("span",null,i)));W.__docgenInfo={description:"",methods:[],displayName:"OptionRenderer"};const Yo=()=>e.createElement(co,{title:"Dev tip"},"For more details about dropdowns APIs for displaying correctly inside"," ",e.createElement(c,{page:"Components/Dialog/Dialog",size:c.sizes.SMALL},"Dialogs,")," ",e.createElement(c,{page:"Components/Modal",size:c.sizes.SMALL},"Modals")," ","and other popovers click"," ",e.createElement(c,{page:"Technical patterns/Dropdowns inside pop overs",story:"Modal with damaged dropdown",size:c.sizes.SMALL},"here"),"."),U=()=>new Promise(o=>{setTimeout(()=>{const n=[{id:"1",name:"Yossi Saadi"},{id:"2",name:"Shahar Zilberman"},{id:"3",name:"Tal Koren"},{id:"4",name:"Meirav Ron"},{id:"5",name:"Yael Bein"}];o({json:()=>Promise.resolve(n)})},1e3)}),G=(o=100)=>{const n=[];for(let a=0;a<o;a++)n.push({value:a,label:`Item ${a}`});return n};try{G.displayName="generateItems",G.__docgenInfo={description:"",displayName:"generateItems",props:{}}}catch{}const Q=wo({component:t,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),fo={title:"Components/Dropdown",component:t,argTypes:Q.argTypes,decorators:Q.decorators},Oo=o=>{const n=s.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.createElement("div",{style:{height:"150px"}},e.createElement(t,{options:n,...o}))},d={render:Oo.bind({}),args:{placeholder:"Placeholder text here",className:"dropdown-stories-styles_spacing"},parameters:{docs:{liveEdit:{isEnabled:!1}}},play:Do},u={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{placeholder:"Small",size:"small",className:"dropdown-stories-styles_spacing"}),e.createElement(t,{placeholder:"Medium",size:"medium",className:"dropdown-stories-styles_spacing"}),e.createElement(t,{placeholder:"Large",size:"large",className:"dropdown-stories-styles_spacing"}))},m={render:()=>{const o=s.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]);return e.createElement(p,{direction:"row"},e.createElement(t,{defaultValue:[o[0]],options:o,disabled:!0,className:"dropdown-stories-styles_spacing"}),e.createElement(t,{multi:!0,defaultValue:[o[0],o[1]],options:o,disabled:!0,className:"dropdown-stories-styles_spacing"}))}},w={render:()=>{const o=s.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]);return e.createElement(p,{direction:"row"},e.createElement(t,{defaultValue:[o[0]],options:o,readOnly:!0,className:"dropdown-stories-styles_spacing"}),e.createElement(t,{multi:!0,defaultValue:[o[0],o[1]],options:o,readOnly:!0,className:"dropdown-stories-styles_spacing"}))}},h={render:()=>e.createElement(e.Fragment,null,e.createElement(t,{placeholder:"Left to right (default)",className:"dropdown-stories-styles_spacing"}),e.createElement(t,{placeholder:"מימין לשמאל",className:"dropdown-stories-styles_spacing",rtl:!0})),name:"RTL"},v={render:()=>{const o=s.useMemo(()=>[{value:"Rotem",label:"Rotem Dekel"},{value:"Hadas",label:"Hadas Farhi"},{value:"Netta",label:"Netta Muller"},{value:"Dor",label:"Dor Yehuda"}],[]);return e.createElement(p,{wrap:!0,gap:"medium"},e.createElement(r,{description:"Single line",vertical:!0},e.createElement("div",{style:{width:"400px"}},e.createElement(t,{placeholder:"Single line multi state",defaultValue:[o[0]],options:o,multi:!0,className:"dropdown-stories-styles_with-chips"}))),e.createElement(r,{description:"Multiple lines",vertical:!0},e.createElement("div",{style:{width:"400px"}},e.createElement(t,{placeholder:"Multiple line multi state",defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"}))),e.createElement(r,{description:"Mandatory default values",vertical:!0,headerStyle:{width:190}},e.createElement("div",{style:{width:"400px"}},e.createElement(t,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips",withMandatoryDefaultOptions:!0}))),e.createElement(r,{description:"Hidden options list",vertical:!0,headerStyle:{width:190}},e.createElement("div",{style:{width:"400px"}},e.createElement(t,{defaultValue:[...o],options:o,multi:!0,className:"dropdown-stories-styles_with-chips"}))))},play:Eo,parameters:{docs:{liveEdit:{scope:{StoryDescription:r}}}},name:"Multi-choice with different states"},g={render:()=>{const o=async n=>{try{return(await(await U()).json()).filter(i=>i.name.toLowerCase().includes(n.toLowerCase())).map(i=>({label:i.name,value:i.id}))}catch(a){console.error("Error fetching user data:",a)}return[]};return e.createElement("div",{style:{width:"400px"}},e.createElement(t,{asyncOptions:o,placeholder:"Async options",cacheOptions:!0,defaultOptions:!0}))},parameters:{docs:{liveEdit:{scope:{fakeFetchUsers:U}}}}},b={render:()=>{const o=s.useMemo(()=>[{value:"Rotem",label:"Rotem Dekel",leftAvatar:k},{value:"Hadas",label:"Hadas Farhi",leftAvatar:P},{value:"Netta",label:"Netta Muller",leftAvatar:F}],[]);return e.createElement(p,{gap:"small"},e.createElement(r,{vertical:!0,description:"Single value"},e.createElement("div",null,e.createElement(t,{defaultValue:[o[0]],options:o,className:"dropdown-stories-styles_with-chips"}))),e.createElement(r,{vertical:!0,description:"Multiple values"},e.createElement("div",null,e.createElement(t,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"}))))},parameters:{docs:{liveEdit:{scope:{person1:k,person2:P,person3:F,StoryDescription:r}}}},name:"Dropdown with avatar"},D={render:()=>{const o=s.useMemo(()=>[{value:"email",label:"Email",leftIcon:z},{value:"attach",label:"Attach",leftIcon:q}],[]);return e.createElement(p,{gap:"small"},e.createElement(r,{vertical:!0,description:"Single value"},e.createElement("div",null,e.createElement(t,{defaultValue:[o[0]],options:o,className:"dropdown-stories-styles_with-chips"}))),e.createElement(r,{vertical:!0,description:"Multiple values"},e.createElement("div",null,e.createElement(t,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"}))))},parameters:{docs:{liveEdit:{scope:{Email:z,Attach:q,StoryDescription:r}}}},name:"Dropdown with icon"},y={render:()=>{const o=s.useMemo(()=>[{value:"Rotem",label:"Rotem Dekel",chipColor:"negative"},{value:"Hadas",label:"Hadas Farhi",chipColor:"positive"},{value:"Netta",label:"Netta Muller",chipColor:"primary"}],[]);return e.createElement(r,{vertical:!0},e.createElement("div",null,e.createElement(t,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"})))},parameters:{docs:{liveEdit:{scope:{StoryDescription:r}}}},name:"Dropdown with chip colors"},E={render:()=>{const o=s.useMemo(()=>[{value:"Option 1",label:"Option 1",tooltipProps:{content:"Description for option 1"}},{value:"Option 2",label:"Option 2",tooltipProps:{content:"Description for option 2"}}],[]);return e.createElement(r,{vertical:!0},e.createElement("div",null,e.createElement(t,{placeholder:"Placeholder text here",options:o,className:"dropdown-stories-styles_with-chips"})))},parameters:{docs:{liveEdit:{scope:{StoryDescription:r}}}},name:"Dropdown with tooltips on items"},f={render:()=>{const o=s.useMemo(()=>[{value:"Dor Yehuda",label:"Hadas Farhi",src:k,type:"img",size:"small",name:"Dor Yehuda",position:"(Full Stack Developer)"},{value:"No",label:"Rotem Dekel",src:F,type:"img",size:"small",name:"Rotem Dekel",position:"(Product Designer)"},{value:"Yes",label:"Netta Muller",src:P,type:"img",size:"small",name:"Netta Muller",position:"(Brand Designer)"}],[]);return e.createElement(t,{defaultValue:[o[0]],options:o,multi:!0,placeholder:"Dropdown with chips",optionRenderer:W,className:"dropdown-stories-styles_with-chips"})},parameters:{docs:{liveEdit:{scope:{person1:k,person2:P,person3:F,OptionRenderer:W}}}},name:"Dropdown with chips"},O={render:()=>{const[o,n]=s.useState(""),a=s.useMemo(()=>[{value:"Red",label:"Red"},{value:"Orange",label:"Orange"},{value:"Yellow",label:"Yellow"},{value:"Green",label:"Green"},{value:"Blue",label:"Blue"},{value:"Indigo",label:"Indigo"},{value:"Violet",label:"Violet"}],[]),l=s.useMemo(()=>o?a.filter(B=>B.label.toLowerCase().includes(o.toLowerCase())):a,[a,o]),i=B=>n(B);return e.createElement(t,{options:l,multi:!0,placeholder:"Select colors",className:"dropdown-stories-styles_with-chips",onInputChange:i})},name:"Searchable dropdown"},S={render:()=>{const o=s.useCallback(({label:a,color:l})=>e.createElement(_,{text:a,color:l}),[]),n=s.useMemo(()=>[{value:"success",label:"Success",color:_.colors.POSITIVE},{value:"failed",label:"Failed",color:_.colors.NEGATIVE},{value:"in progress",label:"In progress"}],[]);return e.createElement(t,{placeholder:"Placeholder text here",options:n,defaultValue:[n[0]],className:"dropdown-stories-styles_big-spacing",optionRenderer:o,valueRenderer:o})},name:"Dropdown with labels"},N={render:()=>{const o=s.useMemo(()=>G(300),[]);return e.createElement(t,{options:o,isVirtualized:!0,className:"dropdown-stories-styles_with-chips"})},name:"Virtualized dropdown"},M={render:()=>{const o=s.useMemo(()=>[{value:"Sometimes",label:"Sometimes"},{value:"No",label:"No"},{value:"Yes",label:"Yes"}],[]);return e.createElement("div",null,e.createElement("h5",{className:"dropdown-stories-styles_title"},"Are you usually a Dark mode person?"),e.createElement(t,{defaultValue:[o[0]],placeholder:"Placeholder text here",options:o,className:"dropdown-stories-styles_big-spacing"}))},name:"Dropdown inside a form"},C={render:()=>{const o=s.useMemo(()=>[{label:"Group 1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]},{label:"Group 2",options:[{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}]}],[]),n=s.useMemo(()=>[{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]},{options:[{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}]}],[]);return e.createElement(p,{gap:p.gaps.LARGE},e.createElement("div",null,e.createElement(t,{placeholder:"Groups with group title",options:o,className:"dropdown-stories-styles_big-spacing"})),e.createElement("div",null,e.createElement(t,{placeholder:"Groups with group divider",options:n,withGroupDivider:!0,className:"dropdown-stories-styles_big-spacing"})))},name:"Dropdown with groups"},A={render:()=>{const o=s.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),[n,a]=s.useState(!1),l=s.useCallback(()=>{a(!1)},[a]),i={width:"350px",height:"200px",overflow:"auto"};return e.createElement(p,{gap:"large"},e.createElement(ho,{style:i},e.createElement(j,null),e.createElement(vo,{marginTop:"medium",marginBottom:"xxl"},e.createElement(t,{placeholder:"Dropdown inside DialogContentContainer",options:o,menuPosition:"fixed"}))),e.createElement("div",null,e.createElement(so,{onClick:()=>a(!0)},"Open Modal"),e.createElement(uo,{title:"Modal with dropdown",show:n,onClose:l},e.createElement(mo,null,e.createElement(t,{placeholder:"Dropdown",options:o,menuPosition:"fixed"})))))},parameters:{docs:{liveEdit:{scope:{ModalExampleContent:j}}}},name:"Dropdown inside popover"},x={render:()=>{const[o,n]=s.useState(!1),a=s.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]),l=s.useCallback(()=>{n(!0),setTimeout(()=>{n(!1)},1e3)},[]);return e.createElement(t,{placeholder:"Type to start loading",options:a,isLoading:o,loadingMessage:()=>"Loading options...",className:"dropdown-stories-styles_big-spacing",onInputChange:l})},name:"Dropdown with loading"},I={render:()=>{const o=s.useRef(),n=s.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]),a=s.useCallback(()=>{o.current.select.focus()},[]);return e.createElement(p,{direction:"row"},e.createElement(t,{placeholder:"Dropdown with ref",options:n,ref:o,className:"dropdown-stories-styles_spacing"}),e.createElement(so,{onClick:a,className:"dropdown-stories-styles_button"},"Focus dropdown input"))},name:"Dropdown with ref"},R={render:()=>{const o=s.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]);return e.createElement(p,{gap:"large"},e.createElement(t,{placeholder:"Tab selects value",options:o,className:"dropdown-stories-styles_big-spacing"}),e.createElement(t,{placeholder:"Tab does not select value",options:o,tabSelectsValue:!1,className:"dropdown-stories-styles_big-spacing"}))},name:"Dropdown value selection"};var X,K,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: dropdownTemplate.bind({}),
  args: {
    placeholder: "Placeholder text here",
    className: "dropdown-stories-styles_spacing"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  },
  play: overviewPlaySuite
}`,...(Z=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var J,$,ee;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <>
      <Dropdown placeholder="Small" size="small" className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="Medium" size="medium" className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="Large" size="large" className="dropdown-stories-styles_spacing" />
    </>
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,ne,te;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }], []);
    return <Flex direction="row">
        <Dropdown defaultValue={[options[0]]} options={options} disabled className="dropdown-stories-styles_spacing" />
        <Dropdown multi defaultValue={[options[0], options[1]]} options={options} disabled className="dropdown-stories-styles_spacing" />
      </Flex>;
  }
}`,...(te=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,se,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }], []);
    return <Flex direction="row">
        <Dropdown defaultValue={[options[0]]} options={options} readOnly className="dropdown-stories-styles_spacing" />
        <Dropdown multi defaultValue={[options[0], options[1]]} options={options} readOnly className="dropdown-stories-styles_spacing" />
      </Flex>;
  }
}`,...(re=(se=w.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var le,ie,pe;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <>
      <Dropdown placeholder="Left to right (default)" className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="מימין לשמאל" className="dropdown-stories-styles_spacing" rtl />
    </>,
  name: "RTL"
}`,...(pe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var ce,de,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "Rotem",
      label: "Rotem Dekel"
    }, {
      value: "Hadas",
      label: "Hadas Farhi"
    }, {
      value: "Netta",
      label: "Netta Muller"
    }, {
      value: "Dor",
      label: "Dor Yehuda"
    }], []);
    return <Flex wrap gap="medium">
        <StoryDescription description="Single line" vertical>
          <div style={{
          width: "400px"
        }}>
            <Dropdown placeholder="Single line multi state" defaultValue={[options[0]]} options={options} multi className="dropdown-stories-styles_with-chips" />
          </div>
        </StoryDescription>
        <StoryDescription description="Multiple lines" vertical>
          <div style={{
          width: "400px"
        }}>
            <Dropdown placeholder="Multiple line multi state" defaultValue={[options[0]]} options={options} multi multiline className="dropdown-stories-styles_with-chips" />
          </div>
        </StoryDescription>
        <StoryDescription description="Mandatory default values" vertical headerStyle={{
        width: 190
      }}>
          <div style={{
          width: "400px"
        }}>
            <Dropdown defaultValue={[options[0]]} options={options} multi multiline className="dropdown-stories-styles_with-chips" withMandatoryDefaultOptions />
          </div>
        </StoryDescription>
        <StoryDescription description="Hidden options list" vertical headerStyle={{
        width: 190
      }}>
          <div style={{
          width: "400px"
        }}>
            <Dropdown defaultValue={[...options]} options={options} multi className="dropdown-stories-styles_with-chips" />
          </div>
        </StoryDescription>
      </Flex>;
  },
  play: multiInteractionTests,
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          StoryDescription
        }
      }
    }
  },
  name: "Multi-choice with different states"
}`,...(ue=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,we,he;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const fetchUserOptions = async searchTerm => {
      try {
        const response = await fakeFetchUsers();
        const users = await response.json();
        return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())).map(user => ({
          label: user.name,
          value: user.id
        }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      return [];
    };
    return <div style={{
      width: "400px"
    }}>
        <Dropdown asyncOptions={fetchUserOptions} placeholder="Async options" cacheOptions defaultOptions />
      </div>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          fakeFetchUsers
        }
      }
    }
  }
}`,...(he=(we=g.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var ve,ge,be;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const optionsAvatar = useMemo(() => [{
      value: "Rotem",
      label: "Rotem Dekel",
      leftAvatar: person1
    }, {
      value: "Hadas",
      label: "Hadas Farhi",
      leftAvatar: person2
    }, {
      value: "Netta",
      label: "Netta Muller",
      leftAvatar: person3
    }], []);
    return <Flex gap="small">
        <StoryDescription vertical description="Single value">
          <div>
            <Dropdown defaultValue={[optionsAvatar[0]]} options={optionsAvatar} className="dropdown-stories-styles_with-chips" />
          </div>
        </StoryDescription>
        <StoryDescription vertical description="Multiple values">
          <div>
            <Dropdown defaultValue={[optionsAvatar[0]]} options={optionsAvatar} multi multiline className="dropdown-stories-styles_with-chips" />
          </div>
        </StoryDescription>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          person2,
          person3,
          StoryDescription
        }
      }
    }
  },
  name: "Dropdown with avatar"
}`,...(be=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var De,ye,Ee;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const optionsIcons = useMemo(() => [{
      value: "email",
      label: "Email",
      leftIcon: Email
    }, {
      value: "attach",
      label: "Attach",
      leftIcon: Attach
    }], []);
    return <Flex gap="small">
        <StoryDescription vertical description="Single value">
          <div>
            <Dropdown defaultValue={[optionsIcons[0]]} options={optionsIcons} className="dropdown-stories-styles_with-chips" />
          </div>
        </StoryDescription>
        <StoryDescription vertical description="Multiple values">
          <div>
            <Dropdown defaultValue={[optionsIcons[0]]} options={optionsIcons} multi multiline className="dropdown-stories-styles_with-chips" />
          </div>
        </StoryDescription>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Email,
          Attach,
          StoryDescription
        }
      }
    }
  },
  name: "Dropdown with icon"
}`,...(Ee=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:Ee.source}}};var fe,Oe,Se;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const optionsWithChipColors = useMemo(() => [{
      value: "Rotem",
      label: "Rotem Dekel",
      chipColor: "negative"
    }, {
      value: "Hadas",
      label: "Hadas Farhi",
      chipColor: "positive"
    }, {
      value: "Netta",
      label: "Netta Muller",
      chipColor: "primary"
    }], []);
    return <StoryDescription vertical>
        <div>
          <Dropdown defaultValue={[optionsWithChipColors[0]]} options={optionsWithChipColors} multi multiline className="dropdown-stories-styles_with-chips" />
        </div>
      </StoryDescription>;
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
  name: "Dropdown with chip colors"
}`,...(Se=(Oe=y.parameters)==null?void 0:Oe.docs)==null?void 0:Se.source}}};var Ne,Me,Ce;E.parameters={...E.parameters,docs:{...(Ne=E.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const optionsWithTooltips = useMemo(() => [{
      value: "Option 1",
      label: "Option 1",
      tooltipProps: {
        content: "Description for option 1"
      }
    }, {
      value: "Option 2",
      label: "Option 2",
      tooltipProps: {
        content: "Description for option 2"
      }
    }], []);
    return <StoryDescription vertical>
        <div>
          <Dropdown placeholder={"Placeholder text here"} options={optionsWithTooltips} className="dropdown-stories-styles_with-chips" />
        </div>
      </StoryDescription>;
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
  name: "Dropdown with tooltips on items"
}`,...(Ce=(Me=E.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var Ae,xe,Ie;f.parameters={...f.parameters,docs:{...(Ae=f.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "Dor Yehuda",
      label: "Hadas Farhi",
      src: person1,
      type: "img",
      size: "small",
      name: "Dor Yehuda",
      position: "(Full Stack Developer)"
    }, {
      value: "No",
      label: "Rotem Dekel",
      src: person3,
      type: "img",
      size: "small",
      name: "Rotem Dekel",
      position: "(Product Designer)"
    }, {
      value: "Yes",
      label: "Netta Muller",
      src: person2,
      type: "img",
      size: "small",
      name: "Netta Muller",
      position: "(Brand Designer)"
    }], []);
    return <Dropdown defaultValue={[options[0]]} options={options} multi placeholder="Dropdown with chips" optionRenderer={OptionRenderer} className="dropdown-stories-styles_with-chips" />;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          person2,
          person3,
          OptionRenderer
        }
      }
    }
  },
  name: "Dropdown with chips"
}`,...(Ie=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Re,Ve,Le;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const [searchValue, setSearchValue] = useState("");
    const allOptions = useMemo(() => [{
      value: "Red",
      label: "Red"
    }, {
      value: "Orange",
      label: "Orange"
    }, {
      value: "Yellow",
      label: "Yellow"
    }, {
      value: "Green",
      label: "Green"
    }, {
      value: "Blue",
      label: "Blue"
    }, {
      value: "Indigo",
      label: "Indigo"
    }, {
      value: "Violet",
      label: "Violet"
    }], []);
    const options = useMemo(() => {
      if (!searchValue) return allOptions;
      return allOptions.filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()));
    }, [allOptions, searchValue]);
    const onInputChange = value => setSearchValue(value);
    return <Dropdown options={options} multi placeholder="Select colors" className="dropdown-stories-styles_with-chips" onInputChange={onInputChange} />;
  },
  name: "Searchable dropdown"
}`,...(Le=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var ke,Fe,Pe;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const labelRenderer = useCallback(({
      label,
      color
    }) => {
      return <Label text={label} color={color} />;
    }, []);
    const options = useMemo(() => [{
      value: "success",
      label: "Success",
      color: Label.colors.POSITIVE
    }, {
      value: "failed",
      label: "Failed",
      color: Label.colors.NEGATIVE
    }, {
      value: "in progress",
      label: "In progress"
    }], []);
    return <Dropdown placeholder="Placeholder text here" options={options} defaultValue={[options[0]]} className="dropdown-stories-styles_big-spacing" optionRenderer={labelRenderer} valueRenderer={labelRenderer} />;
  },
  name: "Dropdown with labels"
}`,...(Pe=(Fe=S.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Te,Be,_e;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => generateItems(300), []);
    return <Dropdown options={options} isVirtualized className="dropdown-stories-styles_with-chips" />;
  },
  name: "Virtualized dropdown"
}`,...(_e=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};var He,We,Ge;M.parameters={...M.parameters,docs:{...(He=M.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "Sometimes",
      label: "Sometimes"
    }, {
      value: "No",
      label: "No"
    }, {
      value: "Yes",
      label: "Yes"
    }], []);
    return <div>
        <h5 className="dropdown-stories-styles_title">Are you usually a Dark mode person?</h5>
        <Dropdown defaultValue={[options[0]]} placeholder="Placeholder text here" options={options} className="dropdown-stories-styles_big-spacing" />
      </div>;
  },
  name: "Dropdown inside a form"
}`,...(Ge=(We=M.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};var Ye,je,qe;C.parameters={...C.parameters,docs:{...(Ye=C.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      label: "Group 1",
      options: [{
        value: "1",
        label: "Option 1"
      }, {
        value: "2",
        label: "Option 2"
      }]
    }, {
      label: "Group 2",
      options: [{
        value: "3",
        label: "Option 3"
      }, {
        value: "4",
        label: "Option 4"
      }]
    }], []);
    const optionsWithoutGroupLabel = useMemo(() => [{
      options: [{
        value: "1",
        label: "Option 1"
      }, {
        value: "2",
        label: "Option 2"
      }]
    }, {
      options: [{
        value: "3",
        label: "Option 3"
      }, {
        value: "4",
        label: "Option 4"
      }]
    }], []);
    return <Flex gap={Flex.gaps.LARGE}>
        <div>
          <Dropdown placeholder="Groups with group title" options={options} className="dropdown-stories-styles_big-spacing" />
        </div>
        <div>
          <Dropdown placeholder="Groups with group divider" options={optionsWithoutGroupLabel} withGroupDivider className="dropdown-stories-styles_big-spacing" />
        </div>
      </Flex>;
  },
  name: "Dropdown with groups"
}`,...(qe=(je=C.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var ze,Ue,Qe;A.parameters={...A.parameters,docs:{...(ze=A.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }, {
      value: "4",
      label: "Option 4"
    }, {
      value: "5",
      label: "Option 5"
    }, {
      value: "6",
      label: "Option 6"
    }, {
      value: "7",
      label: "Option 7"
    }, {
      value: "8",
      label: "Option 8"
    }, {
      value: "9",
      label: "Option 9"
    }, {
      value: "10",
      label: "Option 10"
    }, {
      value: "11",
      label: "Option 11"
    }, {
      value: "12",
      label: "Option 12"
    }, {
      value: "13",
      label: "Option 13"
    }, {
      value: "14",
      label: "Option 14"
    }, {
      value: "15",
      label: "Option 15"
    }], []);
    const [show, setShow] = useState(false);
    const closeModal = useCallback(() => {
      setShow(false);
    }, [setShow]);
    const dialogStyle = {
      width: "350px",
      height: "200px",
      overflow: "auto"
    };
    return <Flex gap="large">
        <DialogContentContainer style={dialogStyle}>
          <ModalExampleContent />
          <Box marginTop="medium" marginBottom="xxl">
            <Dropdown placeholder="Dropdown inside DialogContentContainer" options={options} menuPosition="fixed" />
          </Box>
        </DialogContentContainer>
        <div>
          <Button onClick={() => setShow(true)}>Open Modal</Button>
          <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
            <ModalContent>
              <Dropdown placeholder="Dropdown" options={options} menuPosition="fixed" />
            </ModalContent>
          </Modal>
        </div>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          ModalExampleContent
        }
      }
    }
  },
  name: "Dropdown inside popover"
}`,...(Qe=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Qe.source}}};var Xe,Ke,Ze;x.parameters={...x.parameters,docs:{...(Xe=x.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const options = useMemo(() => [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }], []);
    const loadingOnInputChange = useCallback(() => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);
    return <Dropdown placeholder={"Type to start loading"} options={options} isLoading={isLoading} loadingMessage={() => "Loading options..."} className="dropdown-stories-styles_big-spacing" onInputChange={loadingOnInputChange} />;
  },
  name: "Dropdown with loading"
}`,...(Ze=(Ke=x.parameters)==null?void 0:Ke.docs)==null?void 0:Ze.source}}};var Je,$e,eo;I.parameters={...I.parameters,docs:{...(Je=I.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef();
    const options = useMemo(() => [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }], []);
    const focusDropdownInput = useCallback(() => {
      ref.current.select.focus();
    }, []);
    return <Flex direction="row">
        <Dropdown placeholder="Dropdown with ref" options={options} ref={ref} className="dropdown-stories-styles_spacing" />
        <Button onClick={focusDropdownInput} className="dropdown-stories-styles_button">
          Focus dropdown input
        </Button>
      </Flex>;
  },
  name: "Dropdown with ref"
}`,...(eo=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:eo.source}}};var oo,no,to;R.parameters={...R.parameters,docs:{...(oo=R.parameters)==null?void 0:oo.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "1",
      label: "Option 1"
    }, {
      value: "2",
      label: "Option 2"
    }, {
      value: "3",
      label: "Option 3"
    }], []);
    return <Flex gap="large">
        <Dropdown placeholder="Tab selects value" options={options} className="dropdown-stories-styles_big-spacing" />
        <Dropdown placeholder="Tab does not select value" options={options} tabSelectsValue={false} className="dropdown-stories-styles_big-spacing" />
      </Flex>;
  },
  name: "Dropdown value selection"
}`,...(to=(no=R.parameters)==null?void 0:no.docs)==null?void 0:to.source}}};const So=["Overview","Sizes","Disabled","Readonly","Rtl","MultiChoiceWithDifferentStates","AsyncDropdown","DropdownWithAvatar","DropdownWithIcon","DropdownWithChipColors","DropdownWithTooltipsOnItems","DropdownWithChips","SearchableDropdown","DropdownWithLabels","VirtualizedDropdown","DropdownInsideAForm","DropdownWithGroups","DropdownInsidePopover","DropdownWithLoading","DropdownWithRef","DropdownValueSelection"],jo=Object.freeze(Object.defineProperty({__proto__:null,AsyncDropdown:g,Disabled:m,DropdownInsideAForm:M,DropdownInsidePopover:A,DropdownValueSelection:R,DropdownWithAvatar:b,DropdownWithChipColors:y,DropdownWithChips:f,DropdownWithGroups:C,DropdownWithIcon:D,DropdownWithLabels:S,DropdownWithLoading:x,DropdownWithRef:I,DropdownWithTooltipsOnItems:E,MultiChoiceWithDifferentStates:v,Overview:d,Readonly:w,Rtl:h,SearchableDropdown:O,Sizes:u,VirtualizedDropdown:N,__namedExportsOrder:So,default:fo},Symbol.toStringTag,{value:"Module"}));export{g as A,jo as D,v as M,d as O,w as R,u as S,Yo as T,N as V,m as a,h as b,b as c,D as d,y as e,E as f,f as g,O as h,S as i,M as j,C as k,A as l,x as m,I as n,R as o};
