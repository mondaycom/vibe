import{j as e}from"./jsx-runtime-lwGtIXvq.js";import{r as n}from"./index-CTZeEbLr.js";import{r as R}from"./createComponentTemplate-B08h-OOW.js";import{t as T}from"./Upgrade-CC_w3yRG.js";import{M as s}from"./MultiStepIndicator-_Dg8QdCe.js";const H={title:"Components/MultiStepIndicator",component:s},W=R(s),i={render:W.bind({}),name:"Overview",args:{id:"overview-multi-step",steps:[{key:"FULFILLED",status:"fulfilled",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"},{key:"PENDING",status:"pending",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"},{key:"PENDING-2",status:"pending",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"}]},parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Vertical",e.jsx(s,{id:"placements-vertical",textPlacement:"vertical",steps:t}),"Horizontal",e.jsx(s,{id:"placements-horizontal",steps:t})]})}},r={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Primary",e.jsx(s,{id:"types-primary",steps:t,type:"primary"}),"Success",e.jsx(s,{id:"types-success",steps:t,type:"success"}),"Danger",e.jsx(s,{id:"types-danger",steps:t,type:"danger"}),"Dark",e.jsx(s,{id:"types-dark","aria-label":"Dark type multi-step indicator",steps:t,type:"dark"})]})}},a={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Regular",e.jsx(s,{id:"sizes-regular",steps:t,size:"regular"}),"Compact",e.jsx(s,{id:"sizes-compact",steps:t,size:"compact"})]})}},u={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Default (check)",e.jsx(s,{id:"icons-default",steps:t}),"Number instead of icon",e.jsx(s,{id:"icons-numbers",steps:t,isFulfilledStepDisplayNumber:!0}),"Custom",e.jsx(s,{id:"icons-custom",steps:t,fulfilledStepIcon:T})]})},parameters:{docs:{liveEdit:{scope:{Upgrade:T}}}}},d={render:()=>{const t=n.useMemo(()=>[{key:"PENDING",status:"pending",titleText:"First step title",subtitleText:"First subtitle"},{key:"PENDING-2",status:"pending",titleText:"Second step title",subtitleText:"Second subtitle"},{key:"PENDING-3",status:"pending",titleText:"Third step title",subtitleText:"Third subtitle"}],[]),[z,C]=n.useState(t);return n.useEffect(()=>{const V=o=>{const c=o.findIndex(_=>_.status!=="fulfilled");if(c===-1)return t;const x=[...o],m=x[c];return m.status==="pending"?x[c]={...m,status:"active"}:x[c]={...m,status:"fulfilled"},x},O=setInterval(()=>{C(o=>V(o))},2e3);return()=>{clearInterval(O)}},[t]),e.jsx(s,{id:"transition-animation",steps:z})}},p={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Step 1",subtitleText:"Learn how to use monday CRM"},{key:"PENDING",status:"pending",titleText:"Step 2",subtitleText:"Integrate your email"},{key:"PENDING-3",status:"pending",titleText:"Step 3",subtitleText:"Import your data"}],[]);return e.jsx(s,{id:"multi-step-wizard",steps:t,textPlacement:"vertical"})}};var S,y,b;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: multiStepIndicatorTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-multi-step",
    steps: [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Everything you can do with Monday",
      subtitleText: "Subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Everything you can do with Monday",
      subtitleText: "Subtitle"
    }, {
      key: "PENDING-2",
      status: "pending",
      titleText: "Everything you can do with Monday",
      subtitleText: "Subtitle"
    }]
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
}`,...(b=(y=i.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,I,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending title",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Vertical
        <MultiStepIndicator id="placements-vertical" textPlacement="vertical" steps={steps} />
        Horizontal
        <MultiStepIndicator id="placements-horizontal" steps={steps} />
      </div>;
  }
}`,...(g=(I=l.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var v,E,k;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending title",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Primary
        <MultiStepIndicator id="types-primary" steps={steps} type="primary" />
        Success
        <MultiStepIndicator id="types-success" steps={steps} type="success" />
        Danger
        <MultiStepIndicator id="types-danger" steps={steps} type="danger" />
        Dark
        <MultiStepIndicator id="types-dark" aria-label="Dark type multi-step indicator" steps={steps} type="dark" />
      </div>;
  }
}`,...(k=(E=r.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var N,F,P;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Regular
        <MultiStepIndicator id="sizes-regular" steps={steps} size="regular" />
        Compact
        <MultiStepIndicator id="sizes-compact" steps={steps} size="compact" />
      </div>;
  }
}`,...(P=(F=a.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var D,M,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Fulfilled title",
      subtitleText: "Fulfilled subtitle"
    }, {
      key: "ACTIVE",
      status: "active",
      titleText: "Active title",
      subtitleText: "Active subtitle"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Pending title",
      subtitleText: "Pending subtitle"
    }], []);
    return <div>
        Default (check)
        <MultiStepIndicator id="icons-default" steps={steps} />
        Number instead of icon
        <MultiStepIndicator id="icons-numbers" steps={steps} isFulfilledStepDisplayNumber={true} />
        Custom
        <MultiStepIndicator id="icons-custom" steps={steps} fulfilledStepIcon={Upgrade} />
      </div>;
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: {
          Upgrade
        }
      }
    }
  }
}`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var h,A,w;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const initialSteps = useMemo<Step[]>(() => [{
      key: "PENDING",
      status: "pending",
      titleText: "First step title",
      subtitleText: "First subtitle"
    }, {
      key: "PENDING-2",
      status: "pending",
      titleText: "Second step title",
      subtitleText: "Second subtitle"
    }, {
      key: "PENDING-3",
      status: "pending",
      titleText: "Third step title",
      subtitleText: "Third subtitle"
    }], []);
    const [steps, setSteps] = useState<Step[]>(initialSteps);
    useEffect(() => {
      const getNextStepsState = (currentSteps: Step[]): Step[] => {
        const currentStepIndex = currentSteps.findIndex(step => step.status !== "fulfilled");
        if (currentStepIndex === -1) {
          return initialSteps;
        }
        const newSteps = [...currentSteps];
        const stepToUpdate = newSteps[currentStepIndex];
        if (stepToUpdate.status === "pending") {
          newSteps[currentStepIndex] = {
            ...stepToUpdate,
            status: "active"
          };
        } else {
          newSteps[currentStepIndex] = {
            ...stepToUpdate,
            status: "fulfilled"
          };
        }
        return newSteps;
      };
      const interval = setInterval(() => {
        setSteps(prevSteps => getNextStepsState(prevSteps));
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    }, [initialSteps]);
    return <MultiStepIndicator id="transition-animation" steps={steps} />;
  }
}`,...(w=(A=d.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var G,j,U;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const steps: Step[] = useMemo(() => [{
      key: "FULFILLED",
      status: "fulfilled",
      titleText: "Step 1",
      subtitleText: "Learn how to use monday CRM"
    }, {
      key: "PENDING",
      status: "pending",
      titleText: "Step 2",
      subtitleText: "Integrate your email"
    }, {
      key: "PENDING-3",
      status: "pending",
      titleText: "Step 3",
      subtitleText: "Import your data"
    }], []);
    return <MultiStepIndicator id="multi-step-wizard" steps={steps} textPlacement="vertical" />;
  }
}`,...(U=(j=p.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};const q=["Overview","Placements","Types","Sizes","FulfilledIcons","TransitionAnimation","MultiStepWizard"],Y=Object.freeze(Object.defineProperty({__proto__:null,FulfilledIcons:u,MultiStepWizard:p,Overview:i,Placements:l,Sizes:a,TransitionAnimation:d,Types:r,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{u as F,Y as M,i as O,l as P,a as S,r as T,d as a,p as b};
