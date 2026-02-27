import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as a}from"./index-CTZeEbLr.js";import{c as ro}from"./createStoryMetaSettingsDecorator-DPBO6pDt.js";import{userEvent as lo,waitFor as io}from"./index-i7od9_os.js";import{i as to,j as A,e as R,b as G,c as E,a as W,l as po}from"./interactions-utils-Dm-vasmR.js";import{p as F}from"./person1-D9Wcho68.js";import{p as L}from"./person3-BX6ktRh1.js";import{p as T}from"./person2-D4QHDNDB.js";import{A as co}from"./Avatar-DwH_CuFo.js";import{M as Y}from"./ModalExampleContent-_u2FT-Et.js";import{l as uo}from"./tip-CK87uV3P.js";import{m as d}from"./storybook-link-C39zfePb.js";import{p as r}from"./story-description-B8U8K6Zm.js";import{b as H}from"./index-dYystfuL.js";import{l as U}from"./Email-TZY0cRuW.js";import{M as mo,L as ho}from"./LegacyModal-BUbVLLZf.js";import{D as s}from"./Dropdown-2S-zlUxi.js";import{F as p}from"./Flex-DIp2zxrn.js";import{L as P}from"./Label-CpF5OaXH.js";import{D as wo}from"./DialogContentContainer-BeKFb57x.js";import{B as vo}from"./Box-CSuEa9xb.js";import{B as ao}from"./Button-Dnxv6-sL.js";const bo=async o=>{const n=await A(o,"combobox");await E(n),await G(n,"Option");const t=W(o,"Option 1");await E(t);const l=po("clear-indicator");await E(l),W(o,"Placeholder text here")},go=async o=>{const n=await A(o,"combobox");await E(n),await W(o,"Option 1"),await G(n,"{escape}");const t=await o.queryByText("Option 1");R(t).toBeNull()},yo=to({beforeEach:async o=>{const n=await A(o,"combobox");await lo.clear(n),R(n.value).toEqual(""),await G(n,"{escape}");const t=await o.queryByText("Option 1");R(t).toBeNull()},tests:[bo,go]}),Do=async o=>{const n=await o.queryByText("+2");await E(n),await io(async()=>{const t=await A(document.body,"dialog");R(t).toBeInTheDocument()})},xo=to({tests:[Do]}),B=({src:o,type:n,size:t,name:l,position:i})=>e.jsxs("div",{className:"dropdown-stories-styles_inline-container",children:[e.jsx(co,{size:t,src:o,type:n},l),e.jsxs("span",{className:"dropdown-stories-styles_name",children:[l,e.jsx("span",{children:i})]})]});B.__docgenInfo={description:"",methods:[],displayName:"OptionRenderer"};const qo=()=>e.jsxs(uo,{title:"Dev tip",children:["For more details about dropdowns APIs for displaying correctly inside"," ",e.jsx(d,{page:"Components/Dialog/Dialog",size:d.sizes.SMALL,children:"Dialogs,"})," ",e.jsx(d,{page:"Components/Modal",size:d.sizes.SMALL,children:"Modals"})," ","and other popovers click"," ",e.jsx(d,{page:"Technical patterns/Dropdowns inside pop overs",story:"Modal with damaged dropdown",size:d.sizes.SMALL,children:"here"}),"."]}),q=()=>new Promise(o=>{setTimeout(()=>{const n=[{id:"1",name:"Yossi Saadi"},{id:"2",name:"Shahar Zilberman"},{id:"3",name:"Tal Koren"},{id:"4",name:"Meirav Ron"},{id:"5",name:"Yael Bein"}];o({json:()=>Promise.resolve(n)})},1e3)}),z=(o=100)=>{const n=[];for(let t=0;t<o;t++)n.push({value:t,label:`Item ${t}`});return n};try{z.displayName="generateItems",z.__docgenInfo={description:"",displayName:"generateItems",props:{}}}catch{}const K=ro({component:s,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),fo={title:"Components/Dropdown [Deprecated]",component:s,argTypes:K.argTypes,decorators:K.decorators},Oo=o=>{const n=a.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsx("div",{style:{height:"150px"},children:e.jsx(s,{options:n,...o})})},c={render:Oo.bind({}),args:{placeholder:"Placeholder text here",className:"dropdown-stories-styles_spacing"},parameters:{docs:{liveEdit:{isEnabled:!1}}},name:"Overview",play:yo},u={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"Small",size:"small",className:"dropdown-stories-styles_spacing"}),e.jsx(s,{placeholder:"Medium",size:"medium",className:"dropdown-stories-styles_spacing"}),e.jsx(s,{placeholder:"Large",size:"large",className:"dropdown-stories-styles_spacing"})]})},m={render:()=>{const o=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]);return e.jsxs(p,{direction:"row",children:[e.jsx(s,{defaultValue:[o[0]],options:o,disabled:!0,className:"dropdown-stories-styles_spacing"}),e.jsx(s,{multi:!0,defaultValue:[o[0],o[1]],options:o,disabled:!0,className:"dropdown-stories-styles_spacing"})]})}},h={render:()=>{const o=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]);return e.jsxs(p,{direction:"row",children:[e.jsx(s,{defaultValue:[o[0]],options:o,readOnly:!0,className:"dropdown-stories-styles_spacing"}),e.jsx(s,{multi:!0,defaultValue:[o[0],o[1]],options:o,readOnly:!0,className:"dropdown-stories-styles_spacing"})]})}},w={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{placeholder:"Left to right (default)",className:"dropdown-stories-styles_spacing"}),e.jsx(s,{placeholder:"מימין לשמאל",className:"dropdown-stories-styles_spacing",rtl:!0})]}),name:"RTL"},v={render:()=>{const o=a.useMemo(()=>[{value:"Rotem",label:"Rotem Dekel"},{value:"Hadas",label:"Hadas Farhi"},{value:"Netta",label:"Netta Muller"},{value:"Dor",label:"Dor Yehuda"}],[]);return e.jsxs(p,{wrap:!0,gap:"medium",children:[e.jsx(r,{description:"Single line",vertical:!0,children:e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{placeholder:"Single line multi state",defaultValue:[o[0]],options:o,multi:!0,className:"dropdown-stories-styles_with-chips"})})}),e.jsx(r,{description:"Multiple lines",vertical:!0,children:e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{placeholder:"Multiple line multi state",defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"})})}),e.jsx(r,{description:"Mandatory default values",vertical:!0,headerStyle:{width:190},children:e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips",withMandatoryDefaultOptions:!0})})}),e.jsx(r,{description:"Hidden options list",vertical:!0,headerStyle:{width:190},children:e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{defaultValue:[...o],options:o,multi:!0,className:"dropdown-stories-styles_with-chips"})})})]})},play:xo,parameters:{docs:{liveEdit:{scope:{StoryDescription:r}}}},name:"Multi-choice with different states"},b={render:()=>{const o=async n=>{try{return(await(await q()).json()).filter(i=>i.name.toLowerCase().includes(n.toLowerCase())).map(i=>({label:i.name,value:i.id}))}catch(t){console.error("Error fetching user data:",t)}return[]};return e.jsx("div",{style:{width:"400px"},children:e.jsx(s,{asyncOptions:o,placeholder:"Async options",cacheOptions:!0,defaultOptions:!0})})},parameters:{docs:{liveEdit:{scope:{fakeFetchUsers:q}}}}},g={render:()=>{const o=a.useMemo(()=>[{value:"Rotem",label:"Rotem Dekel",leftAvatar:F},{value:"Hadas",label:"Hadas Farhi",leftAvatar:T},{value:"Netta",label:"Netta Muller",leftAvatar:L}],[]);return e.jsxs(p,{gap:"small",children:[e.jsx(r,{vertical:!0,description:"Single value",children:e.jsx("div",{children:e.jsx(s,{defaultValue:[o[0]],options:o,className:"dropdown-stories-styles_with-chips"})})}),e.jsx(r,{vertical:!0,description:"Multiple values",children:e.jsx("div",{children:e.jsx(s,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"})})})]})},parameters:{docs:{liveEdit:{scope:{person1:F,person2:T,person3:L,StoryDescription:r}}}},name:"Dropdown with avatar"},y={render:()=>{const o=a.useMemo(()=>[{value:"email",label:"Email",leftIcon:U},{value:"attach",label:"Attach",leftIcon:H}],[]);return e.jsxs(p,{gap:"small",children:[e.jsx(r,{vertical:!0,description:"Single value",children:e.jsx("div",{children:e.jsx(s,{defaultValue:[o[0]],options:o,className:"dropdown-stories-styles_with-chips"})})}),e.jsx(r,{vertical:!0,description:"Multiple values",children:e.jsx("div",{children:e.jsx(s,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"})})})]})},parameters:{docs:{liveEdit:{scope:{Email:U,Attach:H,StoryDescription:r}}}},name:"Dropdown with icon"},D={render:()=>{const o=a.useMemo(()=>[{value:"Rotem",label:"Rotem Dekel",chipColor:"negative"},{value:"Hadas",label:"Hadas Farhi",chipColor:"positive"},{value:"Netta",label:"Netta Muller",chipColor:"primary"}],[]);return e.jsx(r,{vertical:!0,children:e.jsx("div",{children:e.jsx(s,{defaultValue:[o[0]],options:o,multi:!0,multiline:!0,className:"dropdown-stories-styles_with-chips"})})})},parameters:{docs:{liveEdit:{scope:{StoryDescription:r}}}},name:"Dropdown with chip colors"},x={render:()=>{const o=a.useMemo(()=>[{value:"Option 1",label:"Option 1",tooltipProps:{content:"Description for option 1"}},{value:"Option 2",label:"Option 2",tooltipProps:{content:"Description for option 2"}}],[]);return e.jsx(r,{vertical:!0,children:e.jsx("div",{children:e.jsx(s,{placeholder:"Placeholder text here",options:o,className:"dropdown-stories-styles_with-chips"})})})},parameters:{docs:{liveEdit:{scope:{StoryDescription:r}}}},name:"Dropdown with tooltips on items"},f={render:()=>{const o=a.useMemo(()=>[{value:"Dor Yehuda",label:"Hadas Farhi",src:F,type:"img",size:"small",name:"Dor Yehuda",position:"(Full Stack Developer)"},{value:"No",label:"Rotem Dekel",src:L,type:"img",size:"small",name:"Rotem Dekel",position:"(Product Designer)"},{value:"Yes",label:"Netta Muller",src:T,type:"img",size:"small",name:"Netta Muller",position:"(Brand Designer)"}],[]);return e.jsx(s,{defaultValue:[o[0]],options:o,multi:!0,placeholder:"Dropdown with chips",optionRenderer:B,className:"dropdown-stories-styles_with-chips"})},parameters:{docs:{liveEdit:{scope:{person1:F,person2:T,person3:L,OptionRenderer:B}}}},name:"Dropdown with chips"},O={render:()=>{const[o,n]=a.useState(""),t=a.useMemo(()=>[{value:"Red",label:"Red"},{value:"Orange",label:"Orange"},{value:"Yellow",label:"Yellow"},{value:"Green",label:"Green"},{value:"Blue",label:"Blue"},{value:"Indigo",label:"Indigo"},{value:"Violet",label:"Violet"}],[]),l=a.useMemo(()=>o?t.filter(k=>k.label.toLowerCase().includes(o.toLowerCase())):t,[t,o]),i=k=>n(k);return e.jsx(s,{options:l,multi:!0,placeholder:"Select colors",className:"dropdown-stories-styles_with-chips",onInputChange:i})},name:"Searchable dropdown"},S={render:()=>{const o=a.useCallback(({label:t,color:l})=>e.jsx(P,{text:t,color:l}),[]),n=a.useMemo(()=>[{value:"success",label:"Success",color:P.colors.POSITIVE},{value:"failed",label:"Failed",color:P.colors.NEGATIVE},{value:"in progress",label:"In progress"}],[]);return e.jsx(s,{placeholder:"Placeholder text here",options:n,defaultValue:[n[0]],className:"dropdown-stories-styles_big-spacing",optionRenderer:o,valueRenderer:o})},name:"Dropdown with labels"},M={render:()=>{const o=a.useMemo(()=>z(300),[]);return e.jsx(s,{options:o,isVirtualized:!0,className:"dropdown-stories-styles_with-chips"})},name:"Virtualized dropdown"},N={render:()=>{const o=a.useMemo(()=>[{value:"Sometimes",label:"Sometimes"},{value:"No",label:"No"},{value:"Yes",label:"Yes"}],[]);return e.jsxs("div",{children:[e.jsx("h5",{className:"dropdown-stories-styles_title",children:"Are you usually a Dark mode person?"}),e.jsx(s,{defaultValue:[o[0]],placeholder:"Placeholder text here",options:o,className:"dropdown-stories-styles_big-spacing"})]})},name:"Dropdown inside a form"},j={render:()=>{const o=a.useMemo(()=>[{label:"Group 1",options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]},{label:"Group 2",options:[{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}]}],[]),n=a.useMemo(()=>[{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"}]},{options:[{value:"3",label:"Option 3"},{value:"4",label:"Option 4"}]}],[]);return e.jsxs(p,{gap:p.gaps.LARGE,children:[e.jsx("div",{children:e.jsx(s,{placeholder:"Groups with group title",options:o,className:"dropdown-stories-styles_big-spacing"})}),e.jsx("div",{children:e.jsx(s,{placeholder:"Groups with group divider",options:n,withGroupDivider:!0,className:"dropdown-stories-styles_big-spacing"})})]})},name:"Dropdown with groups"},_={render:()=>{const o=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),[n,t]=a.useState(!1),l=a.useCallback(()=>{t(!1)},[t]),i={width:"350px",height:"200px",overflow:"auto"};return e.jsxs(p,{gap:"large",children:[e.jsxs(wo,{style:i,children:[e.jsx(Y,{}),e.jsx(vo,{marginTop:"medium",marginBottom:"xxl",children:e.jsx(s,{placeholder:"Dropdown inside DialogContentContainer",options:o,menuPosition:"fixed"})})]}),e.jsxs("div",{children:[e.jsx(ao,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(mo,{title:"Modal with dropdown",show:n,onClose:l,children:e.jsx(ho,{children:e.jsx(s,{placeholder:"Dropdown",options:o,menuPosition:"fixed"})})})]})]})},parameters:{docs:{liveEdit:{scope:{ModalExampleContent:Y}}}},name:"Dropdown inside popover"},C={render:()=>{const[o,n]=a.useState(!1),t=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]),l=a.useCallback(()=>{n(!0),setTimeout(()=>{n(!1)},1e3)},[]);return e.jsx(s,{placeholder:"Type to start loading",options:t,isLoading:o,loadingMessage:()=>"Loading options...",className:"dropdown-stories-styles_big-spacing",onInputChange:l})},name:"Dropdown with loading"},V={render:()=>{const o=a.useRef(),n=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]),t=a.useCallback(()=>{o.current.select.focus()},[]);return e.jsxs(p,{direction:"row",children:[e.jsx(s,{placeholder:"Dropdown with ref",options:n,ref:o,className:"dropdown-stories-styles_spacing"}),e.jsx(ao,{onClick:t,className:"dropdown-stories-styles_button",children:"Focus dropdown input"})]})},name:"Dropdown with ref"},I={render:()=>{const o=a.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],[]);return e.jsxs(p,{gap:"large",children:[e.jsx(s,{placeholder:"Tab selects value",options:o,className:"dropdown-stories-styles_big-spacing"}),e.jsx(s,{placeholder:"Tab does not select value",options:o,tabSelectsValue:!1,className:"dropdown-stories-styles_big-spacing"})]})},name:"Dropdown value selection"};var $,Z,J;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  name: "Overview",
  play: overviewPlaySuite
}`,...(J=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,X,ee;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <>
      <Dropdown placeholder="Small" size="small" className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="Medium" size="medium" className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="Large" size="large" className="dropdown-stories-styles_spacing" />
    </>
}`,...(ee=(X=u.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var oe,ne,se;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ae,re;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var le,ie,pe;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <>
      <Dropdown placeholder="Left to right (default)" className="dropdown-stories-styles_spacing" />
      <Dropdown placeholder="מימין לשמאל" className="dropdown-stories-styles_spacing" rtl />
    </>,
  name: "RTL"
}`,...(pe=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var de,ce,ue;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,he,we;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(we=(he=b.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var ve,be,ge;g.parameters={...g.parameters,docs:{...(ve=g.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=(be=g.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var ye,De,xe;y.parameters={...y.parameters,docs:{...(ye=y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(xe=(De=y.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var fe,Oe,Se;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Se=(Oe=D.parameters)==null?void 0:Oe.docs)==null?void 0:Se.source}}};var Me,Ne,je;x.parameters={...x.parameters,docs:{...(Me=x.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(je=(Ne=x.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var _e,Ce,Ve;f.parameters={...f.parameters,docs:{...(_e=f.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ve=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var Ie,Ee,Re;O.parameters={...O.parameters,docs:{...(Ie=O.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Fe,Le,Te;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Te=(Le=S.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var Ae,ke,Pe;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => generateItems(300), []);
    return <Dropdown options={options} isVirtualized className="dropdown-stories-styles_with-chips" />;
  },
  name: "Virtualized dropdown"
}`,...(Pe=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var We,Be,ze;N.parameters={...N.parameters,docs:{...(We=N.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(ze=(Be=N.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var Ge,Ye,He;j.parameters={...j.parameters,docs:{...(Ge=j.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(He=(Ye=j.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var Ue,qe,Ke;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};var $e,Ze,Je;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Je=(Ze=C.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Qe,Xe,eo;V.parameters={...V.parameters,docs:{...(Qe=V.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(eo=(Xe=V.parameters)==null?void 0:Xe.docs)==null?void 0:eo.source}}};var oo,no,so;I.parameters={...I.parameters,docs:{...(oo=I.parameters)==null?void 0:oo.docs,source:{originalSource:`{
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
}`,...(so=(no=I.parameters)==null?void 0:no.docs)==null?void 0:so.source}}};const So=["Overview","Sizes","Disabled","Readonly","Rtl","MultiChoiceWithDifferentStates","AsyncDropdown","DropdownWithAvatar","DropdownWithIcon","DropdownWithChipColors","DropdownWithTooltipsOnItems","DropdownWithChips","SearchableDropdown","DropdownWithLabels","VirtualizedDropdown","DropdownInsideAForm","DropdownWithGroups","DropdownInsidePopover","DropdownWithLoading","DropdownWithRef","DropdownValueSelection"],Ko=Object.freeze(Object.defineProperty({__proto__:null,AsyncDropdown:b,Disabled:m,DropdownInsideAForm:N,DropdownInsidePopover:_,DropdownValueSelection:I,DropdownWithAvatar:g,DropdownWithChipColors:D,DropdownWithChips:f,DropdownWithGroups:j,DropdownWithIcon:y,DropdownWithLabels:S,DropdownWithLoading:C,DropdownWithRef:V,DropdownWithTooltipsOnItems:x,MultiChoiceWithDifferentStates:v,Overview:c,Readonly:h,Rtl:w,SearchableDropdown:O,Sizes:u,VirtualizedDropdown:M,__namedExportsOrder:So,default:fo},Symbol.toStringTag,{value:"Module"}));export{b as A,Ko as D,v as M,c as O,h as R,u as S,qo as T,M as V,m as a,w as b,g as c,y as d,D as e,x as f,f as g,O as h,S as i,N as j,j as k,_ as l,C as m,V as n,I as o};
