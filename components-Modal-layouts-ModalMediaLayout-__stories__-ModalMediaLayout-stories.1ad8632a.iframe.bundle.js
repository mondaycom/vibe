"use strict";(globalThis.webpackChunk_vibe_core=globalThis.webpackChunk_vibe_core||[]).push([[8301,3501],{"./src/components/Modal/Modal/__stories__/Modal.stories.helpers.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DG:()=>ModalTip,p1:()=>withOpenedModalPreview});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_Button_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Button/Button.tsx"),_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_vibe_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../icons/dist/react/Fullscreen.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../storybook-blocks/dist/src/components/tip/tip.js"),vibe_storybook_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../storybook-blocks/dist/src/components/storybook-link/storybook-link.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Modal/Modal/__stories__/Modal.stories.module.scss"),_helpers_typesciptCssModulesHelper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/typesciptCssModulesHelper.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var OpenedModalPreview=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,ref){var onOpenModalClick=_ref.onOpenModalClick,isDocsView=_ref.isDocsView,isFullView=_ref.isFullView,_ref$size=_ref.size,size=void 0===_ref$size?"small":_ref$size,showFullPreviewButton=_ref.showFullPreviewButton,onFullPreviewClick=_ref.onFullPreviewClick,modal=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",_objectSpread(_objectSpread({className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__.A.preview,_defineProperty({},(0,_helpers_typesciptCssModulesHelper__WEBPACK_IMPORTED_MODULE_4__.g)(_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__.A,size),isDocsView)),ref},isDocsView&&!isFullView&&{"data-no-autofocus":!0}),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.A,{onClick:onOpenModalClick,children:"Open Modal"}),modal,showFullPreviewButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__.A,{wrapperClassName:_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__.A.fullPreviewButtonWrapper,className:_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_2__.A.fullPreviewButton,kind:"secondary",icon:_vibe_icons__WEBPACK_IMPORTED_MODULE_7__.A,color:"primary",onClick:onFullPreviewClick,ariaLabel:"Open modal in full preview mode"})]}))})),useRemoveModalScrollLock=function useRemoveModalScrollLock(show,isDocsView,isFullView){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){show&&document.body.attributes.getNamedItem("data-scroll-locked")&&isDocsView&&!isFullView&&requestAnimationFrame((function(){document.body.attributes.removeNamedItem("data-scroll-locked"),document.documentElement.addEventListener("wheel",(function(e){e.stopImmediatePropagation()}),!0)}))}),[show,isDocsView,isFullView])};function withOpenedModalPreview(Story,_ref2){var size=_ref2.size,isDocsView=_ref2.isDocsView,allowFullViewInDocs=_ref2.allowFullViewInDocs,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!0),2),show=_useState2[0],setShow=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),isFullView=_useState4[0],setFullView=_useState4[1];useRemoveModalScrollLock(show,isDocsView,isFullView);var _useState6=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),2),modalContainer=_useState6[0],setModalContainer=_useState6[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(OpenedModalPreview,{size,onOpenModalClick:function onOpenModalClick(){setShow(!0),setFullView(!1)},isDocsView,isFullView,showFullPreviewButton:allowFullViewInDocs&&isDocsView&&!isFullView&&show,onFullPreviewClick:function onFullPreviewClick(){setShow(!1),setFullView(!0),setTimeout((function(){return setShow(!0)}),250)},ref:function ref(element){element&&isDocsView&&!isFullView&&setModalContainer(element)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Story,{show,setShow,container:isFullView?document.body:modalContainer})})}withOpenedModalPreview.displayName="withOpenedModalPreview";var ModalTip=function ModalTip(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{marginTop:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_8__.A,{children:["Since the modal is used for short and non-frequent tasks, consider using the main flow for common tasks. For creating a popover positioned next to other components, like customized menus, check out our"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(vibe_storybook_components__WEBPACK_IMPORTED_MODULE_9__.A,{page:"Popover/Dialog",size:vibe_storybook_components__WEBPACK_IMPORTED_MODULE_9__.A.sizes.SMALL,children:"Dialog"})," ","component."]})})};ModalTip.displayName="ModalTip";try{OpenedModalPreview.displayName="OpenedModalPreview",OpenedModalPreview.__docgenInfo={description:"",displayName:"OpenedModalPreview",props:{onOpenModalClick:{defaultValue:null,description:"",name:"onOpenModalClick",required:!0,type:{name:"() => void"}},isDocsView:{defaultValue:null,description:"",name:"isDocsView",required:!1,type:{name:"boolean"}},isFullView:{defaultValue:null,description:"",name:"isFullView",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"small"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},showFullPreviewButton:{defaultValue:null,description:"",name:"showFullPreviewButton",required:!1,type:{name:"boolean"}},onFullPreviewClick:{defaultValue:null,description:"",name:"onFullPreviewClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal/__stories__/Modal.stories.helpers.tsx#OpenedModalPreview"]={docgenInfo:OpenedModalPreview.__docgenInfo,name:"OpenedModalPreview",path:"src/components/Modal/Modal/__stories__/Modal.stories.helpers.tsx#OpenedModalPreview"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Modal/Modal/__stories__/Modal.stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Modal-stories-module_largeComponentRule{height:fit-content !important;width:fit-content;padding:var(--sb-spacing-large)}.Modal-stories-module_preview{padding-inline-start:32px;padding-block-start:40px;height:100vh;width:100%;container-type:inline-size}.Modal-stories-module_preview .Modal-stories-module_fullPreviewButtonWrapper{position:absolute;right:8px;top:8px;z-index:10001}.Modal-stories-module_preview .Modal-stories-module_fullPreviewButton{background:var(--sb-dark-background-color)}.Modal-stories-module_preview .Modal-stories-module_fullPreviewButton:hover{background:linear-gradient(to right, var(--sb-primary-background-hover-color), var(--sb-primary-background-hover-color)),linear-gradient(to right, var(--sb-dark-background-color), var(--sb-dark-background-color)) !important}.Modal-stories-module_preview.Modal-stories-module_small{height:360px}.Modal-stories-module_preview.Modal-stories-module_medium{height:416px}.Modal-stories-module_preview.Modal-stories-module_large{height:530px}.Modal-stories-module_preview [aria-modal][role=dialog][class*=sizeSmall]{--modal-max-height: 50%;--modal-width: 480px}.Modal-stories-module_preview [aria-modal][role=dialog][class*=sizeMedium]{--modal-max-height: 80%;--modal-width: 580px}.Modal-stories-module_preview [aria-modal][role=dialog][class*=sizeLarge]{--modal-max-height: 80%;--modal-width: 840px}","",{version:3,sources:["webpack://./src/components/Modal/Modal/__stories__/Modal.stories.module.scss"],names:[],mappings:"AAAA,yCACE,6BAAA,CACA,iBAAA,CACA,+BAAA,CAGF,8BACE,yBAAA,CACA,wBAAA,CACA,YAAA,CACA,UAAA,CACA,0BAAA,CAEA,6EACE,iBAAA,CACA,SAAA,CACA,OAAA,CACA,aAAA,CAGF,sEACE,0CAAA,CAEA,4EACE,+NAAA,CASJ,yDACE,YAAA,CAGF,0DACE,YAAA,CAGF,yDACE,YAAA,CASA,0EACE,uBAAA,CACA,oBAAA,CAGF,2EACE,uBAAA,CACA,oBAAA,CAGF,0EACE,uBAAA,CACA,oBAAA",sourcesContent:['.largeComponentRule {\n  height: fit-content !important;\n  width: fit-content;\n  padding: var(--sb-spacing-large);\n}\n\n.preview {\n  padding-inline-start: 32px;\n  padding-block-start: 40px;\n  height: 100vh;\n  width: 100%;\n  container-type: inline-size;\n\n  .fullPreviewButtonWrapper {\n    position: absolute;\n    right: 8px;\n    top: 8px;\n    z-index: 10001;\n  }\n\n  .fullPreviewButton {\n    background: var(--sb-dark-background-color);\n\n    &:hover {\n      background: linear-gradient(\n          to right,\n          var(--sb-primary-background-hover-color),\n          var(--sb-primary-background-hover-color)\n        ),\n        linear-gradient(to right, var(--sb-dark-background-color), var(--sb-dark-background-color)) !important;\n    }\n  }\n\n  &.small {\n    height: 360px;\n  }\n\n  &.medium {\n    height: 416px;\n  }\n\n  &.large {\n    height: 530px;\n  }\n\n  /**\n    * The following css is to override the default dimensions of the modal component\n    * this is necessary because in the documentation, we\'re "trapping" the modal component inside the preview component\n    * so the modal component width and height be relative to the preview component and not the viewport\n   */\n  [aria-modal][role="dialog"] {\n    &[class*="sizeSmall"] {\n      --modal-max-height: 50%;\n      --modal-width: 480px;\n    }\n\n    &[class*="sizeMedium"] {\n      --modal-max-height: 80%;\n      --modal-width: 580px;\n    }\n\n    &[class*="sizeLarge"] {\n      --modal-max-height: 80%;\n      --modal-width: 840px;\n    }\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={largeComponentRule:"Modal-stories-module_largeComponentRule",preview:"Modal-stories-module_preview",fullPreviewButtonWrapper:"Modal-stories-module_fullPreviewButtonWrapper",fullPreviewButton:"Modal-stories-module_fullPreviewButton",small:"Modal-stories-module_small",medium:"Modal-stories-module_medium",large:"Modal-stories-module_large"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Modal/Modal/__stories__/Modal.stories.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[16].use[3]!./src/components/Modal/Modal/__stories__/Modal.stories.module.scss"),options={};options.styleTagTransform=_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A,options);const __WEBPACK_DEFAULT_EXPORT__=_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A&&_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals?_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_16_use_1_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_16_use_3_Modal_stories_module_scss__WEBPACK_IMPORTED_MODULE_6__.A.locals:void 0}}]);