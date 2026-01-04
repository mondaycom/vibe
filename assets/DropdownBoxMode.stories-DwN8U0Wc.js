import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as n}from"./index-CTZeEbLr.js";import{c as k}from"./createStoryMetaSettingsDecorator-BOvb12cd.js";import{p as c}from"./person1-D9Wcho68.js";import{p as b}from"./person2-D4QHDNDB.js";import{p as u}from"./person3-BX6ktRh1.js";import{p as m}from"./person4-BP0PoOnj.js";import{D as a}from"./Dropdown-z9lsCzbv.js";import{l as J}from"./Email-TZY0cRuW.js";import{c as W,d as _}from"./index-uCO9J26T.js";import{D as z}from"./DialogContentContainer-BeKFb57x.js";import{B as H}from"./Button-DdCAlhCu.js";import{F as p}from"./Flex-DIp2zxrn.js";import{T as v}from"./Text-DxGBAgI1.js";const x=k({component:a,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),N={title:"Components/Dropdown [New]/Dropdown box mode",component:a,argTypes:x.argTypes,decorators:x.decorators},G=l=>{const I=n.useMemo(()=>[{value:1,label:"Label"},{value:2,label:"Label"},{value:3,label:"Label"},{value:4,label:"Label"},{value:5,label:"Label"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{id:"box-mode-overview",ariaLabel:"Box mode overview",options:I,label:"Label",placeholder:"Placeholder text here",helperText:"Helper text",searchable:!0,boxMode:!0,clearAriaLabel:"Clear"})})},o={render:G.bind({}),args:{id:"overview-dropdown",ariaLabel:"Overview dropdown",placeholder:"Placeholder text here",clearAriaLabel:"Clear"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>{const l=n.useMemo(()=>[{value:1,label:"Label"},{value:2,label:"Label"},{value:3,label:"Label"},{value:4,label:"Label"},{value:5,label:"Label"},{value:6,label:"Label"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{id:"box-mode-default-state",ariaLabel:"Box mode default state",options:l,label:"Label",placeholder:"Placeholder text",helperText:"Helper text",searchable:!0,boxMode:!0,clearAriaLabel:"Clear"})})}},r={render:()=>{const l=n.useMemo(()=>[{value:1,label:"Label"},{value:2,label:"Label"},{value:3,label:"Label"},{value:4,label:"Label"},{value:5,label:"Label"},{value:6,label:"Label"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsxs(z,{children:[e.jsx(a,{id:"box-mode-dialog",ariaLabel:"Box mode inside dialog",options:l,placeholder:"Placeholder text",searchable:!0,boxMode:!0,clearAriaLabel:"Clear"}),e.jsx(H,{style:{width:"100%"},kind:"secondary",size:"small",children:"Edit"})]})})}},i={render:()=>{const l=n.useMemo(()=>[{value:1,label:"Label"},{value:2,label:"Label"},{value:3,label:"Label"},{value:4,label:"Label"},{value:5,label:"Label"}],[]);return e.jsxs(p,{gap:"large",align:"start",wrap:!0,children:[e.jsxs(p,{direction:"column",gap:"medium",children:[e.jsx(v,{type:"text1",weight:"bold",children:"Single line with hidden options"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{id:"box-mode-multi-single-line",ariaLabel:"Box mode multi select single line",options:l,placeholder:"Placeholder text",searchable:!0,multi:!0,boxMode:!0,clearAriaLabel:"Clear"})})]}),e.jsxs(p,{direction:"column",gap:"medium",children:[e.jsx(v,{type:"text1",weight:"bold",children:"Multiple lines"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{id:"box-mode-multi-multiline",ariaLabel:"Box mode multi select multiple lines",options:l,placeholder:"Placeholder text",searchable:!0,multi:!0,multiline:!0,boxMode:!0,clearAriaLabel:"Clear"})})]})]})}},s={render:()=>{const l=n.useMemo(()=>[{value:"email",label:"Email",startElement:{type:"icon",value:J}},{value:"send",label:"Send",startElement:{type:"icon",value:W}},{value:"mobile",label:"Mobile",startElement:{type:"icon",value:_}},{value:"notification",label:"Send notification"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(a,{id:"box-mode-with-icons",ariaLabel:"Box mode with icons",options:l,label:"Notify via",placeholder:"You can choose multiple options",searchable:!0,multi:!0,boxMode:!0,clearAriaLabel:"Clear"})})}},d={render:()=>{const l=n.useMemo(()=>[{label:"Suggested people",options:[{value:"Matt",label:"Matt Gaman",startElement:{type:"avatar",value:c}},{value:"Jennifer",label:"Jennifer Lawrence",startElement:{type:"avatar",value:b}},{value:"Emma",label:"Emma Stone",startElement:{type:"avatar",value:u}},{value:"Johnny",label:"Johnny Depp",startElement:{type:"avatar",value:m}}]}],[]);return e.jsx(p,{gap:"large",align:"start",wrap:!0,children:e.jsx("div",{style:{width:"350px"},children:e.jsx(a,{id:"box-mode-people-picker",ariaLabel:"Box mode people picker",options:l,label:"Person",placeholder:"Search for people",searchable:!0,boxMode:!0,multi:!0,clearAriaLabel:"Clear"})})})},parameters:{docs:{liveEdit:{scope:{person1:c,person2:b,person3:u,person4:m}}}}};var h,L,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: dropdownTemplate.bind({}),
  args: {
    id: "overview-dropdown",
    ariaLabel: "Overview dropdown",
    placeholder: "Placeholder text here",
    clearAriaLabel: "Clear"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var g,y,M;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: 1,
      label: "Label"
    }, {
      value: 2,
      label: "Label"
    }, {
      value: 3,
      label: "Label"
    }, {
      value: 4,
      label: "Label"
    }, {
      value: 5,
      label: "Label"
    }, {
      value: 6,
      label: "Label"
    }], []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown id="box-mode-default-state" ariaLabel="Box mode default state" options={options} label="Label" placeholder="Placeholder text" helperText="Helper text" searchable boxMode clearAriaLabel="Clear" />
      </div>;
  }
}`,...(M=(y=t.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var f,E,S;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: 1,
      label: "Label"
    }, {
      value: 2,
      label: "Label"
    }, {
      value: 3,
      label: "Label"
    }, {
      value: 4,
      label: "Label"
    }, {
      value: 5,
      label: "Label"
    }, {
      value: 6,
      label: "Label"
    }], []);
    return <div style={{
      width: "300px"
    }}>
        <DialogContentContainer>
          <Dropdown id="box-mode-dialog" ariaLabel="Box mode inside dialog" options={options} placeholder="Placeholder text" searchable boxMode clearAriaLabel="Clear" />
          <Button style={{
          width: "100%"
        }} kind="secondary" size="small">
            Edit
          </Button>
        </DialogContentContainer>
      </div>;
  }
}`,...(S=(E=r.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var j,C,D;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: 1,
      label: "Label"
    }, {
      value: 2,
      label: "Label"
    }, {
      value: 3,
      label: "Label"
    }, {
      value: 4,
      label: "Label"
    }, {
      value: 5,
      label: "Label"
    }], []);
    return <Flex gap="large" align="start" wrap>
        <Flex direction="column" gap="medium">
          <Text type="text1" weight="bold">
            Single line with hidden options
          </Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown id="box-mode-multi-single-line" ariaLabel="Box mode multi select single line" options={options} placeholder="Placeholder text" searchable multi boxMode clearAriaLabel="Clear" />
          </div>
        </Flex>

        <Flex direction="column" gap="medium">
          <Text type="text1" weight="bold">
            Multiple lines
          </Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown id="box-mode-multi-multiline" ariaLabel="Box mode multi select multiple lines" options={options} placeholder="Placeholder text" searchable multi multiline boxMode clearAriaLabel="Clear" />
          </div>
        </Flex>
      </Flex>;
  }
}`,...(D=(C=i.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var P,B,A;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const optionsWithIcons: any = useMemo(() => [{
      value: "email",
      label: "Email",
      startElement: {
        type: "icon",
        value: Email
      }
    }, {
      value: "send",
      label: "Send",
      startElement: {
        type: "icon",
        value: Send
      }
    }, {
      value: "mobile",
      label: "Mobile",
      startElement: {
        type: "icon",
        value: Mobile
      }
    }, {
      value: "notification",
      label: "Send notification"
    }], []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown id="box-mode-with-icons" ariaLabel="Box mode with icons" options={optionsWithIcons} label="Notify via" placeholder="You can choose multiple options" searchable multi boxMode clearAriaLabel="Clear" />
      </div>;
  }
}`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var O,T,F;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const peopleOptions: any = useMemo(() => [{
      label: "Suggested people",
      options: [{
        value: "Matt",
        label: "Matt Gaman",
        startElement: {
          type: "avatar",
          value: person1
        }
      }, {
        value: "Jennifer",
        label: "Jennifer Lawrence",
        startElement: {
          type: "avatar",
          value: person2
        }
      }, {
        value: "Emma",
        label: "Emma Stone",
        startElement: {
          type: "avatar",
          value: person3
        }
      }, {
        value: "Johnny",
        label: "Johnny Depp",
        startElement: {
          type: "avatar",
          value: person4
        }
      }]
    }], []);
    return <Flex gap="large" align="start" wrap>
        <div style={{
        width: "350px"
      }}>
          <Dropdown id="box-mode-people-picker" ariaLabel="Box mode people picker" options={peopleOptions} label="Person" placeholder="Search for people" searchable boxMode multi clearAriaLabel="Clear" />
        </div>
      </Flex>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          person1,
          person2,
          person3,
          person4
        }
      }
    }
  }
}`,...(F=(T=d.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};const R=["Overview","DefaultState","InsideADialog","MultiSelect","WithIcons","PeoplePicker"],te=Object.freeze(Object.defineProperty({__proto__:null,DefaultState:t,InsideADialog:r,MultiSelect:i,Overview:o,PeoplePicker:d,WithIcons:s,__namedExportsOrder:R,default:N},Symbol.toStringTag,{value:"Module"}));export{te as D,r as I,i as M,o as O,d as P,s as W,t as a};
