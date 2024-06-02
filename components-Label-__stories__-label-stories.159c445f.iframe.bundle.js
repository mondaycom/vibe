"use strict";(globalThis.webpackChunkmonday_ui_react_core=globalThis.webpackChunkmonday_ui_react_core||[]).push([[3731],{"./src/components/Label/__stories__/label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Celebration:()=>Celebration,Clickable:()=>Clickable,Colors:()=>Colors,Kinds:()=>Kinds,Overview:()=>Overview,SecondaryLabel:()=>SecondaryLabel,Sizes:()=>Sizes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Label_stories_label_stories});var react=__webpack_require__("../../node_modules/react/index.js"),Label=__webpack_require__("./src/components/Label/Label.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),createStoryMetaSettingsDecorator=__webpack_require__("./src/storybook/functions/createStoryMetaSettingsDecorator.ts"),function_utils=__webpack_require__("./src/utils/function-utils.ts"),createComponentTemplate=__webpack_require__("../storybook-blocks/dist/src/functions/createComponentTemplate.js"),multiple_story_elements_wrapper=__webpack_require__("../storybook-blocks/dist/src/components/multiple-story-elements-wrapper/multiple-story-elements-wrapper.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),label_stories=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Label/__stories__/label.stories.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(label_stories.A,options);label_stories.A&&label_stories.A.locals&&label_stories.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var metaSettings=(0,createStoryMetaSettingsDecorator.B)({component:Label.A,enumPropNamesArray:["kind","color"]});const Label_stories_label_stories={title:"Data display/Label",component:Label.A,argTypes:metaSettings.argTypes,decorators:metaSettings.decorators};var withGrid=function withGrid(Story){return(0,jsx_runtime.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 180px)",marginInlineStart:"30px",marginTop:"10px",gap:"50px",width:"100%"},children:(0,jsx_runtime.jsx)(Story,{})})};withGrid.displayName="withGrid";var Overview={render:(0,createComponentTemplate.M)(Label.A).bind({}),name:"Overview",args:{text:"New"},parameters:{chromatic:{pauseAnimationAtEnd:!0},docs:{liveEdit:{isEnabled:!1}}}},Kinds={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group monday-storybook-label_states-gap",children:[(0,jsx_runtime.jsx)(Label.A,{text:"New"}),"Fill"]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_group monday-storybook-label_states-gap",children:[(0,jsx_runtime.jsx)(Label.A,{text:"New",kind:Label.A.kinds.LINE}),"Outline"]})]})},name:"Kinds",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},Sizes={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Label.A,{text:"New"}),(0,jsx_runtime.jsx)(Label.A,{text:"New",size:"small"})]})},decorators:[withGrid],name:"Sizes",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},Colors={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Label.A,{text:"New"}),(0,jsx_runtime.jsx)(Label.A,{text:"New",color:Label.A.colors.NEGATIVE}),(0,jsx_runtime.jsx)(Label.A,{text:"New",color:Label.A.colors.POSITIVE}),(0,jsx_runtime.jsx)(Label.A,{text:"New",color:Label.A.colors.DARK}),(0,jsx_runtime.jsx)(Label.A,{text:"New",kind:Label.A.kinds.LINE}),(0,jsx_runtime.jsx)(Label.A,{text:"New",color:Label.A.colors.NEGATIVE,kind:Label.A.kinds.LINE}),(0,jsx_runtime.jsx)(Label.A,{text:"New",color:Label.A.colors.POSITIVE,kind:Label.A.kinds.LINE}),(0,jsx_runtime.jsx)(Label.A,{text:"New",color:Label.A.colors.DARK,kind:Label.A.kinds.LINE})]})},decorators:[withGrid],name:"Colors",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},Clickable={render:function render(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Label.A,{text:"New",onClick:function_utils.tE}),(0,jsx_runtime.jsx)(Label.A,{text:"New",kind:Label.A.kinds.LINE,onClick:function_utils.tE})]})},decorators:[withGrid],name:"Clickable",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},SecondaryLabel={render:function render(){return(0,jsx_runtime.jsxs)(multiple_story_elements_wrapper.A,{className:"monday-storybook-label_column-block",children:[(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_article",children:[(0,jsx_runtime.jsx)("h5",{className:"monday-storybook-label_title",children:"Gannt"}),(0,jsx_runtime.jsx)(Label.A,{text:"New",kind:Label.A.kinds.LINE}),(0,jsx_runtime.jsx)("p",{children:"Plan, track and present your projects visually using the Gannt chart"})]}),(0,jsx_runtime.jsxs)("div",{className:"monday-storybook-label_article",children:[(0,jsx_runtime.jsx)("h5",{className:"monday-storybook-label_title",children:"Apps"}),(0,jsx_runtime.jsx)(Label.A,{text:"New",kind:Label.A.kinds.LINE}),(0,jsx_runtime.jsx)("p",{children:"Enhance your dashboard with widgets built on the monday apps framework"})]})]})},name:"Secondary label",parameters:{chromatic:{pauseAnimationAtEnd:!0}}},Celebration={render:function render(){var _useState2=_slicedToArray((0,react.useState)(!1),2),animate=_useState2[0],setAnimate=_useState2[1];return(0,react.useEffect)((function(){setTimeout((function(){setAnimate(!1)}),500)}),[animate]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Label.A,{text:"New",kind:Label.A.kinds.LINE,celebrationAnimation:animate,isAnimationDisabled:!0}),(0,jsx_runtime.jsx)(Button.A,{size:Button.A.sizes.SMALL,kind:Button.A.kinds.TERTIARY,onClick:function onClick(){return setAnimate(!0)},children:"Click to celebrate"})]})},parameters:{chromatic:{pauseAnimationAtEnd:!0}}};Overview.parameters={...Overview.parameters,docs:{...Overview.parameters?.docs,source:{originalSource:'{\n  render: labelTemplate.bind({}),\n  name: "Overview",\n  args: {\n    text: "New"\n  },\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    },\n    docs: {\n      liveEdit: {\n        isEnabled: false\n      }\n    }\n  }\n}',...Overview.parameters?.docs?.source}}},Kinds.parameters={...Kinds.parameters,docs:{...Kinds.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <div className="monday-storybook-label_group monday-storybook-label_states-gap">\n        <Label text="New" />\n        Fill\n      </div>\n      <div className="monday-storybook-label_group monday-storybook-label_states-gap">\n        <Label text="New" kind={Label.kinds.LINE} />\n        Outline\n      </div>\n    </>,\n  name: "Kinds",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Kinds.parameters?.docs?.source}}},Sizes.parameters={...Sizes.parameters,docs:{...Sizes.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Label text="New" />\n      <Label text="New" size="small" />\n    </>,\n  decorators: [withGrid],\n  name: "Sizes",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Sizes.parameters?.docs?.source}}},Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Label text="New" />\n      <Label text="New" color={Label.colors.NEGATIVE} />\n      <Label text="New" color={Label.colors.POSITIVE} />\n      <Label text="New" color={Label.colors.DARK} />\n      <Label text="New" kind={Label.kinds.LINE} />\n      <Label text="New" color={Label.colors.NEGATIVE} kind={Label.kinds.LINE} />\n      <Label text="New" color={Label.colors.POSITIVE} kind={Label.kinds.LINE} />\n      <Label text="New" color={Label.colors.DARK} kind={Label.kinds.LINE} />\n    </>,\n  decorators: [withGrid],\n  name: "Colors",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Colors.parameters?.docs?.source}}},Clickable.parameters={...Clickable.parameters,docs:{...Clickable.parameters?.docs,source:{originalSource:'{\n  render: () => <>\n      <Label text="New" onClick={NOOP} />\n      <Label text="New" kind={Label.kinds.LINE} onClick={NOOP} />\n    </>,\n  decorators: [withGrid],\n  name: "Clickable",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Clickable.parameters?.docs?.source}}},SecondaryLabel.parameters={...SecondaryLabel.parameters,docs:{...SecondaryLabel.parameters?.docs,source:{originalSource:'{\n  render: () => <MultipleStoryElementsWrapper className="monday-storybook-label_column-block">\n      <div className="monday-storybook-label_article">\n        <h5 className="monday-storybook-label_title">Gannt</h5>\n        <Label text="New" kind={Label.kinds.LINE} />\n        <p>Plan, track and present your projects visually using the Gannt chart</p>\n      </div>\n      <div className="monday-storybook-label_article">\n        <h5 className="monday-storybook-label_title">Apps</h5>\n        <Label text="New" kind={Label.kinds.LINE} />\n        <p>Enhance your dashboard with widgets built on the monday apps framework</p>\n      </div>\n    </MultipleStoryElementsWrapper>,\n  name: "Secondary label",\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...SecondaryLabel.parameters?.docs?.source}}},Celebration.parameters={...Celebration.parameters,docs:{...Celebration.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [animate, setAnimate] = useState(false);\n    useEffect(() => {\n      setTimeout(() => {\n        setAnimate(false);\n      }, 500);\n    }, [animate]);\n    return <>\n        <Label text="New" kind={Label.kinds.LINE} celebrationAnimation={animate} isAnimationDisabled />\n        <Button size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY} onClick={() => setAnimate(true)}>\n          Click to celebrate\n        </Button>\n      </>;\n  },\n  parameters: {\n    chromatic: {\n      pauseAnimationAtEnd: true\n    }\n  }\n}',...Celebration.parameters?.docs?.source}}};const __namedExportsOrder=["Overview","Kinds","Sizes","Colors","Clickable","SecondaryLabel","Celebration"]},"../storybook-blocks/dist/src/functions/createComponentTemplate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>r});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function r(r){return function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(r,Object.assign({},e))}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[15].use[3]!./src/components/Label/__stories__/label.stories.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".monday-storybook-label_group{display:flex;flex-direction:column;align-items:flex-start;gap:40px;margin:25px 176px 25px 30px}.monday-storybook-label_block{display:flex;flex-direction:column;align-items:center;gap:14px}.monday-storybook-label_inline-block{display:flex;gap:10px}.monday-storybook-label_article{display:block;width:300px}.monday-storybook-label_column-block{display:flex;flex-direction:column;column-gap:25px}.monday-storybook-label_title{display:inline;padding-right:8px}.monday-storybook-label_bad-lable{border-radius:var(--sb-border-radius-small)}.monday-storybook-label_bad-lable div{border:none}.monday-storybook-label_bad-lable span{color:var(--sb-text-color-on-primary)}.monday-storybook-label_purple{background-color:var(--sb-color-purple)}.monday-storybook-label_pink{background-color:var(--sb-color-sofia_pink)}.monday-storybook-label_states-gap{gap:24px}","",{version:3,sources:["webpack://./src/components/Label/__stories__/label.stories.scss"],names:[],mappings:"AACE,8BACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,QAAA,CACA,2BAAA,CAGF,8BACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CAGF,qCACE,YAAA,CACA,QAAA,CAGF,gCACE,aAAA,CACA,WAAA,CAGF,qCACE,YAAA,CACA,qBAAA,CACA,eAAA,CAGF,8BACE,cAAA,CACA,iBAAA,CAGF,kCACE,2CAAA,CACA,sCACE,WAAA,CAEF,uCACE,qCAAA,CAIJ,+BACE,uCAAA,CAGF,6BACE,2CAAA,CAGF,mCACE,QAAA",sourcesContent:[".monday-storybook-label {\n  &_group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 40px;\n    margin: 25px 176px 25px 30px;\n  }\n\n  &_block {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 14px;\n  }\n\n  &_inline-block {\n    display: flex;\n    gap: 10px;\n  }\n\n  &_article {\n    display: block;\n    width: 300px;\n  }\n\n  &_column-block {\n    display: flex;\n    flex-direction: column;\n    column-gap: 25px;\n  }\n\n  &_title {\n    display: inline;\n    padding-right: 8px;\n  }\n\n  &_bad-lable {\n    border-radius: var(--sb-border-radius-small);\n    div {\n      border: none;\n    }\n    span {\n      color: var(--sb-text-color-on-primary);\n    }\n  }\n\n  &_purple {\n    background-color: var(--sb-color-purple);\n  }\n\n  &_pink {\n    background-color: var(--sb-color-sofia_pink);\n  }\n\n  &_states-gap {\n    gap: 24px;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);