import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as a,R as D}from"./index-CTZeEbLr.js";import{c as ge}from"./createStoryMetaSettingsDecorator-Bbe8Ja5t.js";import{p as O}from"./person1-D9Wcho68.js";import{p as E}from"./person3-BX6ktRh1.js";import{p as F}from"./person2-D4QHDNDB.js";import{b as we}from"./index-DXCg-GMl.js";import{E as M}from"./Settings-DHIMnErx.js";import{F as ye}from"./index.esm-XHNhqDsf.js";import{D as l}from"./Dropdown-B24-3d8M.js";import{F as t}from"./Flex-D71YaKrR.js";import{T as s}from"./Text-BbBbmSYg.js";const z=ge({component:l,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),fe={title:"Components/Dropdown/Basic dropdown",component:l,argTypes:z.argTypes,decorators:z.decorators},je=n=>{const r=a.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsx("div",{style:{height:"150px",width:"300px"},children:e.jsx(l,{options:r,label:"Label",helperText:"Helper text",...n})})},d={render:je.bind({}),args:{id:"overview-dropdown","aria-label":"Overview dropdown",placeholder:"Placeholder text here",clearAriaLabel:"Clear"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},p={render:()=>{const n=a.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsxs(t,{gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"sizes-large","aria-label":"Large dropdown",options:n,placeholder:"Placeholder text here",label:"Label",size:"large",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"sizes-medium","aria-label":"Medium dropdown",options:n,placeholder:"Placeholder text here",label:"Label",size:"medium",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"sizes-small","aria-label":"Small dropdown",options:n,placeholder:"Placeholder text here",label:"Label",size:"small",clearAriaLabel:"Clear"})})]})}},u={render:()=>e.jsxs(t,{direction:"row",gap:"medium",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-default","aria-label":"Default dropdown",options:[],placeholder:"Default",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-disabled","aria-label":"Disabled dropdown",options:[],placeholder:"Disabled",disabled:!0,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-error","aria-label":"Error dropdown",options:[],placeholder:"Error",error:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-readonly","aria-label":"Readonly dropdown",options:[],placeholder:"Readonly",readOnly:!0,clearAriaLabel:"Clear"})})]})]})},c={render:()=>{const n=a.useMemo(()=>[{value:"1",label:"Chip one"},{value:"2",label:"Chip two"},{value:"3",label:"Chip three"},{value:"4",label:"Chip four"}],[]);return e.jsxs(t,{gap:"large",align:"start",justify:"start",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Single line with hidden options"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(l,{id:"multi-select-single-line","aria-label":"Multi select single line",placeholder:"Single line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Multiple lines"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(l,{id:"multi-select-multiline","aria-label":"Multi select multiple lines",placeholder:"Multiple line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,multiline:!0,clearAriaLabel:"Clear"})})]})]})}},m={render:()=>{const n=a.useMemo(()=>[{value:"1",label:"Owner",removable:!1},{value:"2",label:"Chip two"},{value:"3",label:"Chip three"},{value:"4",label:"Chip four"}],[]);return e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Set removable: false on an option to keep its chip from being removed."}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(l,{id:"multi-select-non-removable","aria-label":"Multi select with a non-removable option",placeholder:"Select options",defaultValue:[n[0],n[1]],options:n,multi:!0,clearAriaLabel:"Clear"})})]})}},h={render:()=>{const n=a.useMemo(()=>[{value:"email",label:"Email",startElement:{type:"icon",value:M}},{value:"attach",label:"Attach",startElement:{type:"icon",value:we}}],[]),r=a.useMemo(()=>[{value:"Julia",label:"Julia Martinez",startElement:{type:"avatar",value:O}},{value:"Sophia",label:"Sophia Johnson",startElement:{type:"avatar",value:F}},{value:"Marco",label:"Marco DiAngelo",startElement:{type:"avatar",value:E}}],[]);return e.jsxs(t,{gap:"large",align:"start",justify:"start",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Single value"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"icon-single","aria-label":"Icon options",defaultValue:n[0],options:n,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"avatar-single","aria-label":"Avatar options",defaultValue:r[0],options:r,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Multiple values"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"icon-multi","aria-label":"Icon options multi",defaultValue:[n[0]],options:n,multi:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"avatar-multi","aria-label":"Avatar options multi",defaultValue:[r[0]],options:r,multi:!0,clearAriaLabel:"Clear"})})]})]})},parameters:{docs:{liveEdit:{scope:{person1:O,person2:F,person3:E}}}}},b={render:()=>{const n=a.useMemo(()=>[{value:"Item 1",label:"Item 1"},{value:"Item 2",label:"Item 2"},{value:"Item 3",label:"Item 3"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"searchable-basic","aria-label":"Searchable",placeholder:"Search an item",options:n,searchable:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})}},v={render:()=>{const n=a.useMemo(()=>[{label:"Category 1",options:[{value:"1",label:"Item 1"},{value:"2",label:"Item 2"},{value:"3",label:"Item 3"}]},{label:"Category 2",options:[{value:"4",label:"Item 1"},{value:"5",label:"Item 2"},{value:"6",label:"Item 3"}]}],[]),r=a.useMemo(()=>[{options:[{value:"1",label:"Item 1"},{value:"2",label:"Item 2"},{value:"3",label:"Item 3"}]},{options:[{value:"4",label:"Item 1"},{value:"5",label:"Item 2"}]}],[]);return e.jsxs(t,{gap:"medium",align:"start",justify:"start",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by divider"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"groups-divider","aria-label":"Group by divider",placeholder:"Group by divider",options:r,withGroupDivider:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by category"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"groups-category","aria-label":"Group by category",placeholder:"Group by category",options:n,maxMenuHeight:170,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by category title sticky"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"groups-sticky","aria-label":"Group by category title sticky",placeholder:"Group by category title sticky",options:n,stickyGroupTitle:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})]})]})}},x={render:()=>{const n=a.useMemo(()=>[{value:"icon",label:"Item with icon",startElement:{type:"icon",value:M}},{value:"avatar",label:"Item with avatar",startElement:{type:"avatar",value:O}},{value:"indent",label:"Item with insert",startElement:{type:"indent"}}],[]),r=a.useMemo(()=>[{value:"endIcon",label:"Item with icon",endElement:{type:"icon",value:M}},{value:"hintText",label:"Item with hint text",endElement:{type:"suffix",value:"⌘C"}}],[]);return e.jsxs(t,{gap:"large",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"item-start-element",placeholder:"Start element",options:n,label:"Start element",required:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"item-end-element",placeholder:"End element",options:r,label:"End element",required:!0,clearAriaLabel:"Clear"})})]})}},g={render:()=>{const n=a.useMemo(()=>[{value:"Option 1",label:"Label"},{value:"Option 2",label:"Label"},{value:"Option 3",label:"Label"},{value:"Option 4",label:"Label"},{value:"Option 5",label:"Label"},{value:"Option 6",label:"Label"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"hide-selected-items",placeholder:"Placeholder text here",options:n,defaultValue:[n[0],n[2],n[3]],label:"Label",required:!0,multi:!0,showSelectedOptions:!1,clearAriaLabel:"Clear"})})}},w={render:()=>{const n=a.useMemo(()=>[{value:"Option 1",label:"Tooltip",tooltipProps:{content:"This is a title message for further information will appear here."}},{value:"Option 2",label:"Chip",tooltipProps:{content:"This is a title message for further information will appear here."}},{value:"Option 3",label:"Button"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"with-tooltips","aria-label":"With tooltips",placeholder:"Placeholder text here",options:n,clearAriaLabel:"Clear"})})}},y={render:()=>{const n=a.useMemo(()=>[{options:Array.from({length:1e3},(C,i)=>({value:`option-${i+1}`,label:`Option ${i+1}`}))}],[]),r=a.useMemo(()=>Array.from({length:10},(C,i)=>({label:`Group ${i+1}`,options:Array.from({length:100},(L,f)=>({value:`group-${i+1}-option-${f+1}`,label:`Group ${i+1} - Option ${f+1}`}))})),[]),I=a.useCallback(({children:C})=>{const i=[],L=A=>{D.Children.forEach(A,o=>{var j,S;D.isValidElement(o)&&(o.type==="li"||(j=o.props)!=null&&j.role?i.push(o):(S=o.props)!=null&&S.children&&L(o.props.children))})};if(L(C),i.length===0)return e.jsx("div",{children:"No options available"});const f=40,ve=200,xe=a.useCallback(({index:A,style:o})=>{const j=i[A];return e.jsx("div",{style:o,children:j})},[i]);return e.jsx(ye,{height:ve,width:"100%",itemCount:i.length,itemSize:f,overscanCount:5,children:xe})},[]);return e.jsxs(t,{gap:"large",align:"start",children:[e.jsx("div",{style:{width:"350px"},children:e.jsx(l,{id:"virtualized",placeholder:"Search",options:n,label:"Virtualized",menuRenderer:I,searchable:!0,maxMenuHeight:250,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px"},children:e.jsx(l,{id:"grouped-virtualized",placeholder:"Search",options:r,label:"Grouped Virtualized",menuRenderer:I,searchable:!0,maxMenuHeight:250,clearAriaLabel:"Clear"})})]})},name:"Virtualized Dropdown"};var T,G,R;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: dropdownTemplate.bind({}),
  args: {
    id: "overview-dropdown",
    "aria-label": "Overview dropdown",
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
}`,...(R=(G=d.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var V,H,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: 1,
      label: "Option 1"
    }, {
      value: 2,
      label: "Option 2"
    }, {
      value: 3,
      label: "Option 3"
    }], []);
    return <Flex gap="medium">
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="sizes-large" aria-label="Large dropdown" options={options} placeholder="Placeholder text here" label="Label" size="large" clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="sizes-medium" aria-label="Medium dropdown" options={options} placeholder="Placeholder text here" label="Label" size="medium" clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="sizes-small" aria-label="Small dropdown" options={options} placeholder="Placeholder text here" label="Label" size="small" clearAriaLabel="Clear" />
        </div>
      </Flex>;
  }
}`,...(B=(H=p.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var P,k,W;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Flex direction="row" gap="medium">
      <Flex direction="column" gap="medium">
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-default" aria-label="Default dropdown" options={[]} placeholder="Default" clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-disabled" aria-label="Disabled dropdown" options={[]} placeholder="Disabled" disabled clearAriaLabel="Clear" />
        </div>
      </Flex>
      <Flex direction="column" gap="medium">
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-error" aria-label="Error dropdown" options={[]} placeholder="Error" error clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="states-readonly" aria-label="Readonly dropdown" options={[]} placeholder="Readonly" readOnly clearAriaLabel="Clear" />
        </div>
      </Flex>
    </Flex>
}`,...(W=(k=u.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var $,_,N;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "1",
      label: "Chip one"
    }, {
      value: "2",
      label: "Chip two"
    }, {
      value: "3",
      label: "Chip three"
    }, {
      value: "4",
      label: "Chip four"
    }], []);
    return <Flex gap="large" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Single line with hidden options</Text>
          <div style={{
          width: "350px",
          marginBottom: "50px"
        }}>
            <Dropdown id="multi-select-single-line" aria-label="Multi select single line" placeholder="Single line multi state" defaultValue={[options[0], options[1], options[2]]} options={options} multi clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple lines</Text>
          <div style={{
          width: "350px",
          marginBottom: "50px"
        }}>
            <Dropdown id="multi-select-multiline" aria-label="Multi select multiple lines" placeholder="Multiple line multi state" defaultValue={[options[0], options[1], options[2]]} options={options} multi multiline clearAriaLabel="Clear" />
          </div>
        </Flex>
      </Flex>;
  }
}`,...(N=(_=c.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var q,J,K;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "1",
      label: "Owner",
      removable: false
    }, {
      value: "2",
      label: "Chip two"
    }, {
      value: "3",
      label: "Chip three"
    }, {
      value: "4",
      label: "Chip four"
    }], []);
    return <Flex direction="column" gap="medium">
        <Text>Set removable: false on an option to keep its chip from being removed.</Text>
        <div style={{
        width: "350px",
        marginBottom: "50px"
      }}>
          <Dropdown id="multi-select-non-removable" aria-label="Multi select with a non-removable option" placeholder="Select options" defaultValue={[options[0], options[1]]} options={options} multi clearAriaLabel="Clear" />
        </div>
      </Flex>;
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const optionsIcons: any = useMemo(() => [{
      value: "email",
      label: "Email",
      startElement: {
        type: "icon",
        value: Email
      }
    }, {
      value: "attach",
      label: "Attach",
      startElement: {
        type: "icon",
        value: Attach
      }
    }], []);
    const optionsAvatar: any = useMemo(() => [{
      value: "Julia",
      label: "Julia Martinez",
      startElement: {
        type: "avatar",
        value: person1
      }
    }, {
      value: "Sophia",
      label: "Sophia Johnson",
      startElement: {
        type: "avatar",
        value: person2
      }
    }, {
      value: "Marco",
      label: "Marco DiAngelo",
      startElement: {
        type: "avatar",
        value: person3
      }
    }], []);
    return <Flex gap="large" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Single value</Text>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown id="icon-single" aria-label="Icon options" defaultValue={optionsIcons[0]} options={optionsIcons} clearAriaLabel="Clear" />
          </div>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown id="avatar-single" aria-label="Avatar options" defaultValue={optionsAvatar[0]} options={optionsAvatar} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Multiple values</Text>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown id="icon-multi" aria-label="Icon options multi" defaultValue={[optionsIcons[0]]} options={optionsIcons} multi clearAriaLabel="Clear" />
          </div>
          <div style={{
          width: "350px",
          marginBottom: "10px"
        }}>
            <Dropdown id="avatar-multi" aria-label="Avatar options multi" defaultValue={[optionsAvatar[0]]} options={optionsAvatar} multi clearAriaLabel="Clear" />
          </div>
        </Flex>
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
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "Item 1",
      label: "Item 1"
    }, {
      value: "Item 2",
      label: "Item 2"
    }, {
      value: "Item 3",
      label: "Item 3"
    }], []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown id="searchable-basic" aria-label="Searchable" placeholder={"Search an item"} options={options} searchable maxMenuHeight={170} clearAriaLabel="Clear" />
      </div>;
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,le,ae;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      label: "Category 1",
      options: [{
        value: "1",
        label: "Item 1"
      }, {
        value: "2",
        label: "Item 2"
      }, {
        value: "3",
        label: "Item 3"
      }]
    }, {
      label: "Category 2",
      options: [{
        value: "4",
        label: "Item 1"
      }, {
        value: "5",
        label: "Item 2"
      }, {
        value: "6",
        label: "Item 3"
      }]
    }], []);
    const optionsWithoutGroupLabel = useMemo(() => [{
      options: [{
        value: "1",
        label: "Item 1"
      }, {
        value: "2",
        label: "Item 2"
      }, {
        value: "3",
        label: "Item 3"
      }]
    }, {
      options: [{
        value: "4",
        label: "Item 1"
      }, {
        value: "5",
        label: "Item 2"
      }]
    }], []);
    return <Flex gap="medium" align="start" justify="start">
        <Flex direction="column" gap="medium">
          <Text>Group by divider</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown id="groups-divider" aria-label="Group by divider" placeholder="Group by divider" options={optionsWithoutGroupLabel} withGroupDivider maxMenuHeight={170} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown id="groups-category" aria-label="Group by category" placeholder="Group by category" options={options} maxMenuHeight={170} clearAriaLabel="Clear" />
          </div>
        </Flex>
        <Flex direction="column" gap="medium">
          <Text>Group by category title sticky</Text>
          <div style={{
          width: "300px"
        }}>
            <Dropdown id="groups-sticky" aria-label="Group by category title sticky" placeholder="Group by category title sticky" options={options} stickyGroupTitle maxMenuHeight={170} clearAriaLabel="Clear" />
          </div>
        </Flex>
      </Flex>;
  }
}`,...(ae=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var te,re,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const startOptions: DropdownOption<Record<string, unknown>>[] = useMemo(() => [{
      value: "icon",
      label: "Item with icon",
      startElement: {
        type: "icon",
        value: Email
      }
    }, {
      value: "avatar",
      label: "Item with avatar",
      startElement: {
        type: "avatar",
        value: person1
      }
    }, {
      value: "indent",
      label: "Item with insert",
      startElement: {
        type: "indent"
      }
    }], []);
    const endOptions: DropdownOption<Record<string, unknown>>[] = useMemo(() => [{
      value: "endIcon",
      label: "Item with icon",
      endElement: {
        type: "icon",
        value: Email
      }
    }, {
      value: "hintText",
      label: "Item with hint text",
      endElement: {
        type: "suffix",
        value: "⌘C"
      }
    }], []);
    return <Flex gap="large">
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="item-start-element" placeholder={"Start element"} options={startOptions} label="Start element" required clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "300px"
      }}>
          <Dropdown id="item-end-element" placeholder={"End element"} options={endOptions} label="End element" required clearAriaLabel="Clear" />
        </div>
      </Flex>;
  }
}`,...(ie=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,se,de;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      value: "Option 1",
      label: "Label"
    }, {
      value: "Option 2",
      label: "Label"
    }, {
      value: "Option 3",
      label: "Label"
    }, {
      value: "Option 4",
      label: "Label"
    }, {
      value: "Option 5",
      label: "Label"
    }, {
      value: "Option 6",
      label: "Label"
    }], []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown id="hide-selected-items" placeholder={"Placeholder text here"} options={options} defaultValue={[options[0], options[2], options[3]]} label="Label" required multi showSelectedOptions={false} clearAriaLabel="Clear" />
      </div>;
  }
}`,...(de=(se=g.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var pe,ue,ce;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const optionsWithTooltips = useMemo(() => [{
      value: "Option 1",
      label: "Tooltip",
      tooltipProps: {
        content: "This is a title message for further information will appear here."
      }
    }, {
      value: "Option 2",
      label: "Chip",
      tooltipProps: {
        content: "This is a title message for further information will appear here."
      }
    }, {
      value: "Option 3",
      label: "Button"
    }], []);
    return <div style={{
      width: "300px"
    }}>
        <Dropdown id="with-tooltips" aria-label="With tooltips" placeholder={"Placeholder text here"} options={optionsWithTooltips} clearAriaLabel="Clear" />
      </div>;
  }
}`,...(ce=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var me,he,be;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const options = useMemo(() => [{
      options: Array.from({
        length: 1000
      }, (_, index) => ({
        value: \`option-\${index + 1}\`,
        label: \`Option \${index + 1}\`
      }))
    }], []);
    const groupedOptions = useMemo(() => Array.from({
      length: 10
    }, (_, groupIndex) => ({
      label: \`Group \${groupIndex + 1}\`,
      options: Array.from({
        length: 100
      }, (_, optionIndex) => ({
        value: \`group-\${groupIndex + 1}-option-\${optionIndex + 1}\`,
        label: \`Group \${groupIndex + 1} - Option \${optionIndex + 1}\`
      }))
    })), []);
    const virtualizedMenuRenderer = useCallback(({
      children
    }: {
      children: React.ReactNode;
    }) => {
      const flattenedOptions: React.ReactElement[] = [];
      const flattenOptions = (reactNode: React.ReactNode) => {
        React.Children.forEach(reactNode, childElement => {
          if (React.isValidElement(childElement)) {
            if (childElement.type === "li" || childElement.props?.role) {
              flattenedOptions.push(childElement);
            } else if (childElement.props?.children) {
              flattenOptions(childElement.props.children);
            }
          }
        });
      };
      flattenOptions(children);
      if (flattenedOptions.length === 0) {
        return <div>No options available</div>;
      }
      const itemHeight = 40;
      const containerHeight = 200;

      // Row renderer that preserves original elements with all their downshift props
      const VirtualizedRow = useCallback(({
        index,
        style
      }: {
        index: number;
        style: React.CSSProperties;
      }) => {
        const option = flattenedOptions[index];
        return <div style={style}>{option}</div>;
      }, [flattenedOptions]);
      return <List height={containerHeight} width="100%" itemCount={flattenedOptions.length} itemSize={itemHeight} overscanCount={5}>
          {VirtualizedRow}
        </List>;
    }, []);
    return <Flex gap="large" align="start">
        <div style={{
        width: "350px"
      }}>
          <Dropdown id="virtualized" placeholder="Search" options={options} label="Virtualized" menuRenderer={virtualizedMenuRenderer} searchable maxMenuHeight={250} clearAriaLabel="Clear" />
        </div>
        <div style={{
        width: "350px"
      }}>
          <Dropdown id="grouped-virtualized" placeholder="Search" options={groupedOptions} label="Grouped Virtualized" menuRenderer={virtualizedMenuRenderer} searchable maxMenuHeight={250} clearAriaLabel="Clear" />
        </div>
      </Flex>;
  },
  name: "Virtualized Dropdown"
}`,...(be=(he=y.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};const Ce=["Overview","Sizes","States","MultiSelect","NonRemovableOptions","DropdownWithIconOrAvatar","Searchable","DropdownWithGroups","DropdownItemWithElements","DropdownHideSelectedItems","DropdownWithTooltips","DropdownWithVirtualization"],Re=Object.freeze(Object.defineProperty({__proto__:null,DropdownHideSelectedItems:g,DropdownItemWithElements:x,DropdownWithGroups:v,DropdownWithIconOrAvatar:h,DropdownWithTooltips:w,DropdownWithVirtualization:y,MultiSelect:c,NonRemovableOptions:m,Overview:d,Searchable:b,Sizes:p,States:u,__namedExportsOrder:Ce,default:fe},Symbol.toStringTag,{value:"Module"}));export{Re as D,c as M,m as N,d as O,p as S,u as a,h as b,b as c,v as d,x as e,g as f,w as g,y as h};
