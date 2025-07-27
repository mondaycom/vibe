import{j as s}from"./jsx-runtime-B8889x5w.js";import{c as d}from"./index-De0AmtSO.js";import{V as m}from"./visual-description--lVm38Sg.js";const u="_colorDescription_x1vnx_1",_="_withBorder_x1vnx_4",t={colorDescription:u,withBorder:_},a=({colorName:r,description:e,withBorder:p})=>{const l=s.jsx("div",{className:d(t.colorDescription,{[t.withBorder]:p}),style:{backgroundColor:`var(--${r})`}});return s.jsx(m,{title:r,description:e,ariaLabel:e,children:l})};a.__docgenInfo={description:"",methods:[],displayName:"ColorDescription",props:{colorName:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},withBorder:{required:!0,tsType:{name:"boolean"},description:""}}};const h={component:a,title:"Components/ColorDescription"},o={args:{colorName:"sb-positive-color",description:"This is a description",withBorder:!1}};var i,n,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    colorName: 'sb-positive-color',
    description: 'This is a description',
    withBorder: false
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const v=["Overview"],w=Object.freeze(Object.defineProperty({__proto__:null,Overview:o,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{w as C,o as O};
