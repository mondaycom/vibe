import{j as e}from"./jsx-runtime-B8889x5w.js";const l=({data:a})=>e.jsx("tr",{children:a.map((n,t)=>e.jsx("td",{children:n},t))});l.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const p=({item:a})=>e.jsx("th",{title:a,children:a});p.__docgenInfo={description:"",methods:[],displayName:"TableHeadItem",props:{item:{required:!0,tsType:{name:"string"},description:""}}};const c="_tableWrapper_1pov0_1",b="_table_1pov0_1",s={tableWrapper:c,table:b},m=({theadData:a,tbodyData:n})=>e.jsx("div",{className:s.tableWrapper,children:e.jsxs("table",{className:s.table,children:[e.jsx("thead",{children:e.jsx("tr",{children:a.map(t=>e.jsx(p,{item:t},t))})}),e.jsx("tbody",{children:n.map(t=>e.jsx(l,{data:t.items},t.id))})]})});m.__docgenInfo={description:"",methods:[],displayName:"TokenTable",props:{theadData:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},tbodyData:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  items: string[];
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:"TableBody[]"},description:""}}};const u={component:m,title:"Components/TokenTable"},r={args:{theadData:["Token","Value"],tbodyData:[{id:"1",items:["--token-1","#111"]},{id:"2",items:["--token-2","#222"]}]}};var o,i,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    theadData: ['Token', 'Value'],
    tbodyData: [{
      id: '1',
      items: ['--token-1', '#111']
    }, {
      id: '2',
      items: ['--token-2', '#222']
    }]
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const y=["Overview"],g=Object.freeze(Object.defineProperty({__proto__:null,Overview:r,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{r as O,g as T};
