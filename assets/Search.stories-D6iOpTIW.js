import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{S as r}from"./Search-Dt3fTcuH.js";import{D as v}from"./DialogContentContainer-CTtMW4dm.js";import{C as y}from"./Combobox-eKkE5Yki.js";import{F as z}from"./Flex-2Q04fxOc.js";import{I as E}from"./IconButton-SLIdttAP.js";import{r as w}from"./createComponentTemplate-Y0VTmW_y.js";import{r as c}from"./Wand-Cv7iNunW.js";import{c as I}from"./createStoryMetaSettingsDecorator-Dxrg_MSB.js";const l=I({component:r,iconPropNamesArray:["searchIconName","clearIconName"]}),W=w(r),A={title:"Components/Search",component:r,argTypes:l.argTypes,decorators:l.decorators},i=o=>e.jsx("div",{style:{width:320},children:e.jsx(o,{})}),a={render:W.bind({}),args:{placeholder:"Placeholder text here"},decorators:[i],parameters:{docs:{liveEdit:{isEnabled:!1}}}},t={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"Small",size:"small"}),e.jsx(r,{placeholder:"Medium",size:"medium"}),e.jsx(r,{placeholder:"Large",size:"large"})]}),decorators:[o=>e.jsx(z,{direction:"column",justify:"start",gap:"medium",children:e.jsx(o,{})}),i],parameters:{docs:{liveEdit:{scope:{Search:r}}}}},s={render:()=>e.jsx(r,{placeholder:"Search with icon",renderAction:e.jsx(E,{icon:c,ariaLabel:"Filter results",size:"small"})}),decorators:[i],parameters:{docs:{liveEdit:{scope:{Search:r,FilterIcon:c}}}}},d=[{id:"1",label:"Cheese Cake"},{id:"2",label:"Muffin"},{id:"3",label:"Cookie"},{id:"4",label:"Cup cake"},{id:"5",label:"Banana lottie"}],n={render:()=>e.jsx(y,{placeholder:"Placeholder text here",options:d,size:"small",optionLineHeight:28}),decorators:[o=>e.jsx(v,{children:e.jsx(o,{})}),i],parameters:{docs:{liveEdit:{scope:{options:d}}}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,x,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var g,b,j;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var f,F,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(F=n.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};const _=["Overview","Sizes","WithAdditionalAction","FilterInCombobox"],H=Object.freeze(Object.defineProperty({__proto__:null,FilterInCombobox:n,Overview:a,Sizes:t,WithAdditionalAction:s,__namedExportsOrder:_,default:A},Symbol.toStringTag,{value:"Module"}));export{n as F,a as O,H as S,s as W,t as a};
