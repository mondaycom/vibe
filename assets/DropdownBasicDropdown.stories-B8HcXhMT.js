import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as a,R as S}from"./index-CTZeEbLr.js";import{c as he}from"./createStoryMetaSettingsDecorator-DHxXl1St.js";import{p as A}from"./person1-D9Wcho68.js";import{p as D}from"./person3-BX6ktRh1.js";import{p as E}from"./person2-D4QHDNDB.js";import{b as be}from"./index-2tdOESSL.js";import{E as O}from"./Email-BmMi5Ll_.js";import{F as ve}from"./index.esm-XHNhqDsf.js";import{D as l}from"./Dropdown-BM7CT3n5.js";import{F as t}from"./Flex-CikfezJC.js";import{T as s}from"./Text-B9A6RG_q.js";const z=he({component:l,actionPropsArray:["onMenuOpen","onMenuClose","onFocus","onBlur","onChange","openMenuOnFocus","onOptionRemove","onOptionSelect","onClear","onInputChange","onKeyDown"]}),xe={title:"Components/Dropdown/Basic dropdown",component:l,argTypes:z.argTypes,decorators:z.decorators},ge=n=>{const r=a.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsx("div",{style:{height:"150px",width:"300px"},children:e.jsx(l,{options:r,label:"Label",helperText:"Helper text",...n})})},d={render:ge.bind({}),args:{id:"overview-dropdown","aria-label":"Overview dropdown",placeholder:"Placeholder text here",clearAriaLabel:"Clear"},parameters:{docs:{liveEdit:{isEnabled:!1}}}},p={render:()=>{const n=a.useMemo(()=>[{value:1,label:"Option 1"},{value:2,label:"Option 2"},{value:3,label:"Option 3"}],[]);return e.jsxs(t,{gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"sizes-large","aria-label":"Large dropdown",options:n,placeholder:"Placeholder text here",label:"Label",size:"large",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"sizes-medium","aria-label":"Medium dropdown",options:n,placeholder:"Placeholder text here",label:"Label",size:"medium",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"sizes-small","aria-label":"Small dropdown",options:n,placeholder:"Placeholder text here",label:"Label",size:"small",clearAriaLabel:"Clear"})})]})}},u={render:()=>e.jsxs(t,{direction:"row",gap:"medium",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-default","aria-label":"Default dropdown",options:[],placeholder:"Default",clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-disabled","aria-label":"Disabled dropdown",options:[],placeholder:"Disabled",disabled:!0,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-error","aria-label":"Error dropdown",options:[],placeholder:"Error",error:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"states-readonly","aria-label":"Readonly dropdown",options:[],placeholder:"Readonly",readOnly:!0,clearAriaLabel:"Clear"})})]})]})},c={render:()=>{const n=a.useMemo(()=>[{value:"1",label:"Chip one"},{value:"2",label:"Chip two"},{value:"3",label:"Chip three"},{value:"4",label:"Chip four"}],[]);return e.jsxs(t,{gap:"large",align:"start",justify:"start",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Single line with hidden options"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(l,{id:"multi-select-single-line","aria-label":"Multi select single line",placeholder:"Single line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Multiple lines"}),e.jsx("div",{style:{width:"350px",marginBottom:"50px"},children:e.jsx(l,{id:"multi-select-multiline","aria-label":"Multi select multiple lines",placeholder:"Multiple line multi state",defaultValue:[n[0],n[1],n[2]],options:n,multi:!0,multiline:!0,clearAriaLabel:"Clear"})})]})]})}},m={render:()=>{const n=a.useMemo(()=>[{value:"email",label:"Email",startElement:{type:"icon",value:O}},{value:"attach",label:"Attach",startElement:{type:"icon",value:be}}],[]),r=a.useMemo(()=>[{value:"Julia",label:"Julia Martinez",startElement:{type:"avatar",value:A}},{value:"Sophia",label:"Sophia Johnson",startElement:{type:"avatar",value:E}},{value:"Marco",label:"Marco DiAngelo",startElement:{type:"avatar",value:D}}],[]);return e.jsxs(t,{gap:"large",align:"start",justify:"start",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Single value"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"icon-single","aria-label":"Icon options",defaultValue:n[0],options:n,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"avatar-single","aria-label":"Avatar options",defaultValue:r[0],options:r,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Multiple values"}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"icon-multi","aria-label":"Icon options multi",defaultValue:[n[0]],options:n,multi:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px",marginBottom:"10px"},children:e.jsx(l,{id:"avatar-multi","aria-label":"Avatar options multi",defaultValue:[r[0]],options:r,multi:!0,clearAriaLabel:"Clear"})})]})]})},parameters:{docs:{liveEdit:{scope:{person1:A,person2:E,person3:D}}}}},h={render:()=>{const n=a.useMemo(()=>[{value:"Item 1",label:"Item 1"},{value:"Item 2",label:"Item 2"},{value:"Item 3",label:"Item 3"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"searchable-basic","aria-label":"Searchable",placeholder:"Search an item",options:n,searchable:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})}},b={render:()=>{const n=a.useMemo(()=>[{label:"Category 1",options:[{value:"1",label:"Item 1"},{value:"2",label:"Item 2"},{value:"3",label:"Item 3"}]},{label:"Category 2",options:[{value:"4",label:"Item 1"},{value:"5",label:"Item 2"},{value:"6",label:"Item 3"}]}],[]),r=a.useMemo(()=>[{options:[{value:"1",label:"Item 1"},{value:"2",label:"Item 2"},{value:"3",label:"Item 3"}]},{options:[{value:"4",label:"Item 1"},{value:"5",label:"Item 2"}]}],[]);return e.jsxs(t,{gap:"medium",align:"start",justify:"start",children:[e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by divider"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"groups-divider","aria-label":"Group by divider",placeholder:"Group by divider",options:r,withGroupDivider:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by category"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"groups-category","aria-label":"Group by category",placeholder:"Group by category",options:n,maxMenuHeight:170,clearAriaLabel:"Clear"})})]}),e.jsxs(t,{direction:"column",gap:"medium",children:[e.jsx(s,{children:"Group by category title sticky"}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"groups-sticky","aria-label":"Group by category title sticky",placeholder:"Group by category title sticky",options:n,stickyGroupTitle:!0,maxMenuHeight:170,clearAriaLabel:"Clear"})})]})]})}},v={render:()=>{const n=a.useMemo(()=>[{value:"icon",label:"Item with icon",startElement:{type:"icon",value:O}},{value:"avatar",label:"Item with avatar",startElement:{type:"avatar",value:A}},{value:"indent",label:"Item with insert",startElement:{type:"indent"}}],[]),r=a.useMemo(()=>[{value:"endIcon",label:"Item with icon",endElement:{type:"icon",value:O}},{value:"hintText",label:"Item with hint text",endElement:{type:"suffix",value:"⌘C"}}],[]);return e.jsxs(t,{gap:"large",children:[e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"item-start-element",placeholder:"Start element",options:n,label:"Start element",required:!0,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"item-end-element",placeholder:"End element",options:r,label:"End element",required:!0,clearAriaLabel:"Clear"})})]})}},x={render:()=>{const n=a.useMemo(()=>[{value:"Option 1",label:"Label"},{value:"Option 2",label:"Label"},{value:"Option 3",label:"Label"},{value:"Option 4",label:"Label"},{value:"Option 5",label:"Label"},{value:"Option 6",label:"Label"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"hide-selected-items",placeholder:"Placeholder text here",options:n,defaultValue:[n[0],n[2],n[3]],label:"Label",required:!0,multi:!0,showSelectedOptions:!1,clearAriaLabel:"Clear"})})}},g={render:()=>{const n=a.useMemo(()=>[{value:"Option 1",label:"Tooltip",tooltipProps:{content:"This is a title message for further information will appear here."}},{value:"Option 2",label:"Chip",tooltipProps:{content:"This is a title message for further information will appear here."}},{value:"Option 3",label:"Button"}],[]);return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{id:"with-tooltips","aria-label":"With tooltips",placeholder:"Placeholder text here",options:n,clearAriaLabel:"Clear"})})}},w={render:()=>{const n=a.useMemo(()=>[{options:Array.from({length:1e3},(j,i)=>({value:`option-${i+1}`,label:`Option ${i+1}`}))}],[]),r=a.useMemo(()=>Array.from({length:10},(j,i)=>({label:`Group ${i+1}`,options:Array.from({length:100},(C,y)=>({value:`group-${i+1}-option-${y+1}`,label:`Group ${i+1} - Option ${y+1}`}))})),[]),M=a.useCallback(({children:j})=>{const i=[],C=L=>{S.Children.forEach(L,o=>{var f,I;S.isValidElement(o)&&(o.type==="li"||(f=o.props)!=null&&f.role?i.push(o):(I=o.props)!=null&&I.children&&C(o.props.children))})};if(C(j),i.length===0)return e.jsx("div",{children:"No options available"});const y=40,ce=200,me=a.useCallback(({index:L,style:o})=>{const f=i[L];return e.jsx("div",{style:o,children:f})},[i]);return e.jsx(ve,{height:ce,width:"100%",itemCount:i.length,itemSize:y,overscanCount:5,children:me})},[]);return e.jsxs(t,{gap:"large",align:"start",children:[e.jsx("div",{style:{width:"350px"},children:e.jsx(l,{id:"virtualized",placeholder:"Search",options:n,label:"Virtualized",menuRenderer:M,searchable:!0,maxMenuHeight:250,clearAriaLabel:"Clear"})}),e.jsx("div",{style:{width:"350px"},children:e.jsx(l,{id:"grouped-virtualized",placeholder:"Search",options:r,label:"Grouped Virtualized",menuRenderer:M,searchable:!0,maxMenuHeight:250,clearAriaLabel:"Clear"})})]})},name:"Virtualized Dropdown"};var F,T,G;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(G=(T=d.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var R,V,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(V=p.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var P,W,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(W=u.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var k,$,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=($=c.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var q,J,N;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(N=(J=m.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var K,Q,U;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,le;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(le=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ae,te,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,oe,se;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var de,pe,ue;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const we=["Overview","Sizes","States","MultiSelect","DropdownWithIconOrAvatar","Searchable","DropdownWithGroups","DropdownItemWithElements","DropdownHideSelectedItems","DropdownWithTooltips","DropdownWithVirtualization"],ze=Object.freeze(Object.defineProperty({__proto__:null,DropdownHideSelectedItems:x,DropdownItemWithElements:v,DropdownWithGroups:b,DropdownWithIconOrAvatar:m,DropdownWithTooltips:g,DropdownWithVirtualization:w,MultiSelect:c,Overview:d,Searchable:h,Sizes:p,States:u,__namedExportsOrder:we,default:xe},Symbol.toStringTag,{value:"Module"}));export{ze as D,c as M,d as O,p as S,u as a,m as b,h as c,b as d,v as e,x as f,g,w as h};
