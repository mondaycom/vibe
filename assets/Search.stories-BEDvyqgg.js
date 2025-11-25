import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{c as z}from"./createStoryMetaSettingsDecorator-CRof__7T.js";import{S as r}from"./Search-1tqW-CcQ.js";import{r as A}from"./createComponentTemplate-B08h-OOW.js";import{r as c}from"./Wand-CS0YeGd1.js";import{F as v}from"./Flex-Bimzf4jb.js";import{I as w}from"./IconButton-H10RwFPB.js";import{D as C}from"./DialogContentContainer-BBTL4acN.js";import{C as y}from"./Combobox-D8ZxhiU_.js";const l=z({component:r,iconPropNamesArray:["searchIconName","clearIconName"]}),E=A(r),I={title:"Components/Search",component:r,argTypes:l.argTypes,decorators:l.decorators},n=a=>e.jsx("div",{style:{width:320},children:e.jsx(a,{})}),i={render:E.bind({}),args:{id:"overview-search",inputAriaLabel:"Search input",placeholder:"Placeholder text here"},decorators:[n],parameters:{docs:{liveEdit:{isEnabled:!1}}}},o={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{id:"sizes-small",inputAriaLabel:"Small search input",placeholder:"Small",size:"small"}),e.jsx(r,{id:"sizes-medium",inputAriaLabel:"Medium search input",placeholder:"Medium",size:"medium"}),e.jsx(r,{id:"sizes-large",inputAriaLabel:"Large search input",placeholder:"Large",size:"large"})]}),decorators:[a=>e.jsx(v,{direction:"column",justify:"start",gap:"medium",children:e.jsx(a,{})}),n],parameters:{docs:{liveEdit:{scope:{Search:r}}}}},t={render:()=>e.jsx(r,{id:"search-with-action",inputAriaLabel:"Search with filter action",placeholder:"Search with icon",renderAction:e.jsx(w,{id:"filter-action-button",icon:c,ariaLabel:"Filter results",size:"small"})}),decorators:[n],parameters:{docs:{liveEdit:{scope:{Search:r,FilterIcon:c}}}}},d=[{id:"1",label:"Cheese Cake"},{id:"2",label:"Muffin"},{id:"3",label:"Cookie"},{id:"4",label:"Cup cake"},{id:"5",label:"Banana lottie"}],s={render:()=>e.jsx(y,{id:"filter-combobox",searchInputAriaLabel:"Filter options",placeholder:"Placeholder text here",options:d,size:"small",optionLineHeight:28}),decorators:[a=>e.jsx(C,{children:e.jsx(a,{})}),n],parameters:{docs:{liveEdit:{scope:{options:d}}}}};var p,m,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: searchTemplate.bind({}),
  args: {
    id: "overview-search",
    inputAriaLabel: "Search input",
    placeholder: "Placeholder text here"
  },
  decorators: [withFixedWidth],
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,b,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <Search id="sizes-small" inputAriaLabel="Small search input" placeholder="Small" size="small" />
      <Search id="sizes-medium" inputAriaLabel="Medium search input" placeholder="Medium" size="medium" />
      <Search id="sizes-large" inputAriaLabel="Large search input" placeholder="Large" size="large" />
    </>,
  decorators: [Story => <Flex direction="column" justify="start" gap="medium">
        <Story />
      </Flex>, withFixedWidth],
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Search
        }
      }
    }
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,g,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Search id="search-with-action" inputAriaLabel="Search with filter action" placeholder="Search with icon" renderAction={<IconButton id="filter-action-button" icon={FilterIcon} ariaLabel="Filter results" size="small" />} />,
  decorators: [withFixedWidth],
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Search,
          FilterIcon
        }
      }
    }
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var F,L,j;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Combobox id="filter-combobox" searchInputAriaLabel="Filter options" placeholder="Placeholder text here" options={options} size="small" optionLineHeight={28} />,
  decorators: [Story => <DialogContentContainer>
        <Story />
      </DialogContentContainer>, withFixedWidth],
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          options
        }
      }
    }
  }
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};const W=["Overview","Sizes","WithAdditionalAction","FilterInCombobox"],H=Object.freeze(Object.defineProperty({__proto__:null,FilterInCombobox:s,Overview:i,Sizes:o,WithAdditionalAction:t,__namedExportsOrder:W,default:I},Symbol.toStringTag,{value:"Module"}));export{s as F,i as O,H as S,t as W,o as a};
