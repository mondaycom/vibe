import{r as t,R as n}from"./index-Hemj67b4.js";import{M as g,L as w}from"./LegacyModal-CR-Zo8KL.js";import{D as o}from"./Dropdown-wtr36BWv.js";import{M as c}from"./ModalExampleContent-Br0uGe_r.js";import{B as m}from"./Box-CI4IQ3Nw.js";import{F as I}from"./Flex-DIvs4XZj.js";import{D as h}from"./Tooltip-C_-kbcOd.js";import{B as r}from"./Button-DEM-Hn8V.js";import{D as v}from"./DialogContentContainer-CjdfO6CD.js";const F={title:"Technical Patterns/Dropdowns inside pop-overs"},p=()=>{const[a,e]=t.useState(!1),i=t.useCallback(()=>{e(!1)},[e]),l=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}];return n.createElement("div",null,n.createElement(r,{onClick:()=>e(!0)},"Open Modal"),n.createElement(g,{title:"Modal with dropdown",show:a,onClose:i},n.createElement(w,null,n.createElement(o,{options:l}))))},s=()=>{const[a,e]=t.useState(!1),i=t.useCallback(()=>{e(!1)},[e]),l=t.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),O={width:"350px",height:"200px",overflow:"auto"},b=[{name:"preventOverflow",options:{mainAxis:!1}}];return n.createElement(I,{gap:"large"},n.createElement(v,{style:O},n.createElement(c,null),n.createElement(m,{marginTop:"medium",marginBottom:"xxl"},n.createElement(o,{placeholder:"Dropdown inside DialogContentContainer",options:l,menuPosition:o.menuPositions.FIXED}))),n.createElement("div",null,n.createElement(r,{onClick:()=>e(!0)},"Open Modal"),n.createElement(g,{title:"Modal with dropdown",show:a,onClose:i},n.createElement(w,null,n.createElement(o,{placeholder:"Dropdown",options:l,menuPosition:o.menuPositions.FIXED})))),n.createElement(h,{modifiers:b,showTrigger:["click"],hideTrigger:["click"],content:n.createElement(v,{style:O},n.createElement(c,null),n.createElement(m,{marginTop:"medium",marginBottom:"xxl"},n.createElement(o,{placeholder:"Dropdown",options:l,menuPosition:o.menuPositions.FIXED})))},n.createElement(r,{kind:"primary",color:"negative"},"Popup Dialog")))},u=()=>{const[a,e]=t.useState(!1),i=t.useCallback(()=>{e(!1)},[e]),l=t.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),O=[{name:"preventOverflow",options:{mainAxis:!1}}],b={width:"350px",height:"200px",overflow:"auto"};return n.createElement(I,{gap:"large"},n.createElement(v,{style:b},n.createElement(c,null),n.createElement(m,{marginTop:"medium",marginBottom:"xxl"},n.createElement(o,{placeholder:"Dropdown inside DialogContentContainer",options:l,insideOverflowContainer:!0}))),n.createElement("div",null,n.createElement(r,{onClick:()=>e(!0)},"Open Modal"),n.createElement(g,{title:"Modal with dropdown",show:a,onClose:i},n.createElement(w,null,n.createElement(o,{options:l,insideOverflowContainer:!0})))),n.createElement(h,{modifiers:O,showTrigger:["click"],hideTrigger:["click"],content:n.createElement(v,{style:b},n.createElement(c,null),n.createElement(m,{marginTop:"medium",marginBottom:"xxl"},n.createElement(o,{placeholder:"Dropdown",options:l,insideOverflowContainer:!0})))},n.createElement(r,{color:"negative"},"Popup Dialog")))},d=()=>{const a=t.useMemo(()=>[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"},{value:"4",label:"Option 4"},{value:"5",label:"Option 5"},{value:"6",label:"Option 6"},{value:"7",label:"Option 7"},{value:"8",label:"Option 8"},{value:"9",label:"Option 9"},{value:"10",label:"Option 10"},{value:"11",label:"Option 11"},{value:"12",label:"Option 12"},{value:"13",label:"Option 13"},{value:"14",label:"Option 14"},{value:"15",label:"Option 15"}],[]),e={width:"300px",height:"200px",overflow:"auto"},i=n.createElement(v,{style:e},n.createElement(c,null),n.createElement(m,{marginTop:"medium",marginBottom:"xxl"},n.createElement(o,{placeholder:"Dropdown",options:a,insideOverflowWithTransformContainer:!0})));return n.createElement(h,{content:i,hideTrigger:"clickoutside",showTrigger:"click"},n.createElement(r,null,"Popup Dialog"))};var C,D,f;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const options: DropdownOption[] = [{
    value: "1",
    label: "Option 1"
  }, {
    value: "2",
    label: "Option 2"
  }, {
    value: "3",
    label: "Option 3"
  }, {
    value: "4",
    label: "Option 4"
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }];
  return <div>
      <Button onClick={() => setShow(true)}>Open Modal</Button>
      <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
        <ModalContent>
          <Dropdown options={options} />
        </ModalContent>
      </Modal>
    </div>;
}`,...(f=(D=p.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var x,E,M;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const options: DropdownOption[] = useMemo(() => [{
    value: "1",
    label: "Option 1"
  }, {
    value: "2",
    label: "Option 2"
  }, {
    value: "3",
    label: "Option 3"
  }, {
    value: "4",
    label: "Option 4"
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }], []);
  const dialogStyle: React.CSSProperties = {
    width: "350px",
    height: "200px",
    overflow: "auto"
  };
  const modifiers = [{
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  }];
  return <Flex gap="large">
      <DialogContentContainer style={dialogStyle}>
        <ModalExampleContent />
        <Box marginTop="medium" marginBottom="xxl">
          <Dropdown placeholder="Dropdown inside DialogContentContainer" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
        </Box>
      </DialogContentContainer>
      <div>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
          <ModalContent>
            <Dropdown placeholder="Dropdown" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
          </ModalContent>
        </Modal>
      </div>
      <Dialog modifiers={modifiers} showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer style={dialogStyle}>
            <ModalExampleContent />
            <Box marginTop="medium" marginBottom="xxl">
              <Dropdown placeholder="Dropdown" options={options} menuPosition={Dropdown.menuPositions.FIXED} />
            </Box>
          </DialogContentContainer>}>
        <Button kind="primary" color="negative">
          Popup Dialog
        </Button>
      </Dialog>
    </Flex>;
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var S,B,T;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [show, setShow] = useState<boolean>(false);
  const closeModal = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const options: DropdownOption[] = useMemo(() => [{
    value: "1",
    label: "Option 1"
  }, {
    value: "2",
    label: "Option 2"
  }, {
    value: "3",
    label: "Option 3"
  }, {
    value: "4",
    label: "Option 4"
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }], []);
  const modifiers = [{
    name: "preventOverflow",
    options: {
      mainAxis: false
    }
  }];
  const dialogStyle: React.CSSProperties = {
    width: "350px",
    height: "200px",
    overflow: "auto"
  };
  return <Flex gap="large">
      <DialogContentContainer style={dialogStyle}>
        <ModalExampleContent />
        <Box marginTop="medium" marginBottom="xxl">
          <Dropdown placeholder="Dropdown inside DialogContentContainer" options={options} insideOverflowContainer />
        </Box>
      </DialogContentContainer>
      <div>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal title="Modal with dropdown" show={show} onClose={closeModal}>
          <ModalContent>
            <Dropdown options={options} insideOverflowContainer />
          </ModalContent>
        </Modal>
      </div>
      <Dialog modifiers={modifiers} showTrigger={["click"]} hideTrigger={["click"]} content={<DialogContentContainer style={dialogStyle}>
            <ModalExampleContent />
            <Box marginTop="medium" marginBottom="xxl">
              <Dropdown placeholder="Dropdown" options={options} insideOverflowContainer />
            </Box>
          </DialogContentContainer>}>
        <Button color="negative">Popup Dialog</Button>
      </Dialog>
    </Flex>;
}`,...(T=(B=u.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var k,y,P;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const options: DropdownOption[] = useMemo(() => [{
    value: "1",
    label: "Option 1"
  }, {
    value: "2",
    label: "Option 2"
  }, {
    value: "3",
    label: "Option 3"
  }, {
    value: "4",
    label: "Option 4"
  }, {
    value: "5",
    label: "Option 5"
  }, {
    value: "6",
    label: "Option 6"
  }, {
    value: "7",
    label: "Option 7"
  }, {
    value: "8",
    label: "Option 8"
  }, {
    value: "9",
    label: "Option 9"
  }, {
    value: "10",
    label: "Option 10"
  }, {
    value: "11",
    label: "Option 11"
  }, {
    value: "12",
    label: "Option 12"
  }, {
    value: "13",
    label: "Option 13"
  }, {
    value: "14",
    label: "Option 14"
  }, {
    value: "15",
    label: "Option 15"
  }], []);
  const dialogStyle: React.CSSProperties = {
    width: "300px",
    height: "200px",
    overflow: "auto"
  };
  const secondDialogContent = <DialogContentContainer style={dialogStyle}>
      <ModalExampleContent />
      <Box marginTop="medium" marginBottom="xxl">
        <Dropdown placeholder="Dropdown" options={options} insideOverflowWithTransformContainer />
      </Box>
    </DialogContentContainer>;
  return <Dialog content={secondDialogContent} hideTrigger="clickoutside" showTrigger="click">
      <Button>Popup Dialog</Button>
    </Dialog>;
}`,...(P=(y=d.parameters)==null?void 0:y.docs)==null?void 0:P.source}}};const _=["ModalWithDamagedDropdown","MenuPosition","InsideOverflowContainer","InsideOverflowWithTransformContainer"],H=Object.freeze(Object.defineProperty({__proto__:null,InsideOverflowContainer:u,InsideOverflowWithTransformContainer:d,MenuPosition:s,ModalWithDamagedDropdown:p,__namedExportsOrder:_,default:F},Symbol.toStringTag,{value:"Module"}));export{H as D,u as I,p as M,s as a,d as b};
