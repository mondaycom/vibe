import{j as e}from"./jsx-runtime-lwGtIXvq.js";const i=({data:t})=>e.jsx("tr",{children:t.map((o,a)=>e.jsx("td",{children:o},a))});try{tokentablerow.displayName="tokentablerow",tokentablerow.__docgenInfo={description:"",displayName:"tokentablerow",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"string[]"}}}}}catch{}const c=({item:t})=>e.jsx("th",{title:t,children:t});try{tokentableheaditem.displayName="tokentableheaditem",tokentableheaditem.__docgenInfo={description:"",displayName:"tokentableheaditem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"string"}}}}}catch{}const p="_tableWrapper_1pov0_1",m="_table_1pov0_1",n={tableWrapper:p,table:m},b=({theadData:t,tbodyData:o})=>e.jsx("div",{className:n.tableWrapper,children:e.jsxs("table",{className:n.table,children:[e.jsx("thead",{children:e.jsx("tr",{children:t.map(a=>e.jsx(c,{item:a},a))})}),e.jsx("tbody",{children:o.map(a=>e.jsx(i,{data:a.items},a.id))})]})});try{tokentable.displayName="tokentable",tokentable.__docgenInfo={description:"",displayName:"tokentable",props:{theadData:{defaultValue:null,description:"",name:"theadData",required:!0,type:{name:"string[]"}},tbodyData:{defaultValue:null,description:"",name:"tbodyData",required:!0,type:{name:"TableBody[]"}}}}}catch{}const _={component:b,title:"Storybook Blocks/TokenTable"},r={args:{theadData:["Token","Value"],tbodyData:[{id:"1",items:["--token-1","#111"]},{id:"2",items:["--token-2","#222"]}]}};var l,d,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const u=["Overview"],k=Object.freeze(Object.defineProperty({__proto__:null,Overview:r,__namedExportsOrder:u,default:_},Symbol.toStringTag,{value:"Module"}));export{r as O,k as T};
