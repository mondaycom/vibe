import{R as e}from"./index-Hemj67b4.js";import{S as r}from"./Search-CLpGEDce.js";import{D as v}from"./DialogContentContainer-BmCeWtAc.js";import{C as y}from"./Combobox-DztnK2A3.js";import{F as z}from"./Flex-pz2uwxlA.js";import{I as w}from"./IconButton-DqT-Lx4F.js";import{r as I}from"./createComponentTemplate-Y0VTmW_y.js";import{r as c}from"./Wand-Cv7iNunW.js";import{c as W}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const l=W({component:r,iconPropNamesArray:["searchIconName","clearIconName"]}),A=I(r),_={title:"Components/Search",component:r,argTypes:l.argTypes,decorators:l.decorators},i=o=>e.createElement("div",{style:{width:320}},e.createElement(o,null)),t={render:A.bind({}),args:{placeholder:"Placeholder text here"},decorators:[i],parameters:{docs:{liveEdit:{isEnabled:!1}}}},a={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{placeholder:"Small",size:"small"}),e.createElement(r,{placeholder:"Medium",size:"medium"}),e.createElement(r,{placeholder:"Large",size:"large"})),decorators:[o=>e.createElement(z,{direction:"column",justify:"start",gap:"medium"},e.createElement(o,null)),i],parameters:{docs:{liveEdit:{scope:{Search:r}}}}},n={render:()=>e.createElement(r,{placeholder:"Search with icon",renderAction:e.createElement(w,{icon:c,ariaLabel:"Filter results",size:"small"})}),decorators:[i],parameters:{docs:{liveEdit:{scope:{Search:r,FilterIcon:c}}}}},d=[{id:"1",label:"Cheese Cake"},{id:"2",label:"Muffin"},{id:"3",label:"Cookie"},{id:"4",label:"Cup cake"},{id:"5",label:"Banana lottie"}],s={render:()=>e.createElement(y,{placeholder:"Placeholder text here",options:d,size:"small",optionLineHeight:28}),decorators:[o=>e.createElement(v,null,e.createElement(o,null)),i],parameters:{docs:{liveEdit:{scope:{options:d}}}}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: searchTemplate.bind({}),
  args: {
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
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,S,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <>
      <Search placeholder="Small" size="small" />
      <Search placeholder="Medium" size="medium" />
      <Search placeholder="Large" size="large" />
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
}`,...(g=(S=a.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var E,b,f;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Search placeholder="Search with icon" renderAction={<IconButton icon={FilterIcon} ariaLabel="Filter results" size="small" />} />,
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
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,F,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Combobox placeholder="Placeholder text here" options={options} size="small" optionLineHeight={28} />,
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
}`,...(C=(F=s.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const L=["Overview","Sizes","WithAdditionalAction","FilterInCombobox"],H=Object.freeze(Object.defineProperty({__proto__:null,FilterInCombobox:s,Overview:t,Sizes:a,WithAdditionalAction:n,__namedExportsOrder:L,default:_},Symbol.toStringTag,{value:"Module"}));export{s as F,t as O,H as S,n as W,a};
