import{j as e}from"./jsx-runtime-DDzbWKUH.js";import{r as n}from"./index-Hemj67b4.js";import{M as s}from"./MultiStepIndicator-BhJ9k-Bk.js";import{r as R}from"./createComponentTemplate-Y0VTmW_y.js";import{t as S}from"./Upgrade-Jax58DJ-.js";const H={title:"Components/MultiStepIndicator",component:s},W=R(s),i={render:W.bind({}),name:"Overview",args:{steps:[{key:"FULFILLED",status:"fulfilled",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"},{key:"PENDING",status:"pending",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"},{key:"PENDING-2",status:"pending",titleText:"Everything you can do with Monday",subtitleText:"Subtitle"}]},parameters:{docs:{liveEdit:{isEnabled:!1}}}},l={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Vertical",e.jsx(s,{textPlacement:"vertical",steps:t}),"Horizontal",e.jsx(s,{steps:t})]})}},r={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Primary",e.jsx(s,{steps:t,type:"primary"}),"Success",e.jsx(s,{steps:t,type:"success"}),"Danger",e.jsx(s,{steps:t,type:"danger"}),"Dark",e.jsx(s,{steps:t,type:"dark"})]})}},u={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Regular",e.jsx(s,{steps:t,size:"regular"}),"Compact",e.jsx(s,{steps:t,size:"compact"})]})}},a={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Fulfilled title",subtitleText:"Fulfilled subtitle"},{key:"ACTIVE",status:"active",titleText:"Active title",subtitleText:"Active subtitle"},{key:"PENDING",status:"pending",titleText:"Pending title",subtitleText:"Pending subtitle"}],[]);return e.jsxs("div",{children:["Default (check)",e.jsx(s,{steps:t}),"Number instead of icon",e.jsx(s,{steps:t,isFulfilledStepDisplayNumber:!0}),"Custom",e.jsx(s,{steps:t,fulfilledStepIcon:S})]})},parameters:{docs:{liveEdit:{scope:{Upgrade:S}}}}},p={render:()=>{const t=n.useMemo(()=>[{key:"PENDING",status:"pending",titleText:"First step title",subtitleText:"First subtitle"},{key:"PENDING-2",status:"pending",titleText:"Second step title",subtitleText:"Second subtitle"},{key:"PENDING-3",status:"pending",titleText:"Third step title",subtitleText:"Third subtitle"}],[]),[C,z]=n.useState(t);return n.useEffect(()=>{const V=o=>{const c=o.findIndex(_=>_.status!=="fulfilled");if(c===-1)return t;const x=[...o],T=x[c];return T.status==="pending"?x[c]={...T,status:"active"}:x[c]={...T,status:"fulfilled"},x},O=setInterval(()=>{z(o=>V(o))},2e3);return()=>{clearInterval(O)}},[t]),e.jsx(s,{steps:C})}},d={render:()=>{const t=n.useMemo(()=>[{key:"FULFILLED",status:"fulfilled",titleText:"Step 1",subtitleText:"Learn how to use monday CRM"},{key:"PENDING",status:"pending",titleText:"Step 2",subtitleText:"Integrate your email"},{key:"PENDING-3",status:"pending",titleText:"Step 3",subtitleText:"Import your data"}],[]);return e.jsx(s,{steps:t,textPlacement:"vertical"})}};var m,b,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: multiStepIndicatorTemplate.bind({}),
  name: "Overview",
  args: {
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
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var I,f,g;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <MultiStepIndicator textPlacement="vertical" steps={steps} />
        Horizontal
        <MultiStepIndicator steps={steps} />
      </div>;
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,E,N;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <MultiStepIndicator steps={steps} type="primary" />
        Success
        <MultiStepIndicator steps={steps} type="success" />
        Danger
        <MultiStepIndicator steps={steps} type="danger" />
        Dark
        <MultiStepIndicator steps={steps} type="dark" />
      </div>;
  }
}`,...(N=(E=r.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var F,k,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        <MultiStepIndicator steps={steps} size="regular" />
        Compact
        <MultiStepIndicator steps={steps} size="compact" />
      </div>;
  }
}`,...(P=(k=u.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var D,M,L;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
        <MultiStepIndicator steps={steps} />
        Number instead of icon
        <MultiStepIndicator steps={steps} isFulfilledStepDisplayNumber={true} />
        Custom
        <MultiStepIndicator steps={steps} fulfilledStepIcon={Upgrade} />
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
}`,...(L=(M=a.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var A,h,G;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    return <MultiStepIndicator steps={steps} />;
  }
}`,...(G=(h=p.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var j,U,w;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    return <MultiStepIndicator steps={steps} textPlacement="vertical" />;
  }
}`,...(w=(U=d.parameters)==null?void 0:U.docs)==null?void 0:w.source}}};const q=["Overview","Placements","Types","Sizes","FulfilledIcons","TransitionAnimation","MultiStepWizard"],Y=Object.freeze(Object.defineProperty({__proto__:null,FulfilledIcons:a,MultiStepWizard:d,Overview:i,Placements:l,Sizes:u,TransitionAnimation:p,Types:r,__namedExportsOrder:q,default:H},Symbol.toStringTag,{value:"Module"}));export{a as F,Y as M,i as O,l as P,u as S,r as T,p as a,d as b};
