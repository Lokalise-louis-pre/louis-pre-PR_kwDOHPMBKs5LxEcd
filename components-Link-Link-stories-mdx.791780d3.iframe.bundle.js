"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[9691],{"./node_modules/@storybook/addon-docs/blocks.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_dist_esm_blocks__WEBPACK_IMPORTED_MODULE_2__.ArgsTable,Xz:()=>_dist_esm_blocks__WEBPACK_IMPORTED_MODULE_2__.Canvas,h_:()=>_dist_esm_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,hv:()=>_dist_esm_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsContext,oG:()=>_dist_esm_blocks__WEBPACK_IMPORTED_MODULE_2__.Story});var util_deprecate__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/util-deprecate/browser.js"),util_deprecate__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(util_deprecate__WEBPACK_IMPORTED_MODULE_0__),ts_dedent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/ts-dedent/esm/index.js"),_dist_esm_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js");util_deprecate__WEBPACK_IMPORTED_MODULE_0___default()((()=>{}),ts_dedent__WEBPACK_IMPORTED_MODULE_1__.C`
    Importing from '@storybook/addon-docs/blocks' is deprecated, import directly from '@storybook/addon-docs' instead:
    
    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-scoped-blocks-imports
`)()},"./src/components/Link/Link.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,asButton:()=>asButton,asLink:()=>asLink,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabledButton:()=>disabledButton});__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/blocks.js"),_Link__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Link/Link.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Template=args=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_Link__WEBPACK_IMPORTED_MODULE_4__.r,_extends({},args,{mdxType:"Link"}));Template.displayName="Template";const layoutProps={Template};function MDXContent({components,...props}){return(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,{title:"Components/Link",component:_Link__WEBPACK_IMPORTED_MODULE_4__.r,parameters:{controls:{sort:"requiredFirst"}},argTypes:{onClick:{action:""}},mdxType:"Meta"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h1",{id:"link"},"Link"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#props"},"Props")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("a",{parentName:"li",href:"#examples"},"Examples"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"overview"},"Overview"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("p",null,"Link is meant to render either a link or a button that looks like a link."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"installation"},"Installation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @lokalise/louis\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"usage"},"Usage"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Link } from \'@lokalise/louis\';\n\nexport default () => (\n    <Link href="https://lokalise.com/" rel="noreferrer" target="_blank">\n        This link goes to https://lokalise.com\n    </Link>\n);\n')),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"props"},"Props"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.$4,{sort:"requiredFirst",mdxType:"ArgsTable"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h2",{id:"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"as-link"},"As Link"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{name:"As Link",args:{href:"https://docs.lokalise.com/",target:"_blank",children:"This link goes to https://docs.lokalise.com"},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"as-button"},"As Button"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{name:"As Button",args:{children:"Add Term"},mdxType:"Story"},Template.bind({}))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)("h3",{id:"disabled-button"},"Disabled Button"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Xz,{withSource:"open",mdxType:"Canvas"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.oG,{name:"Disabled Button",args:{children:"Disabled Term",disabled:!0},mdxType:"Story"},Template.bind({}))))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const asLink=Template.bind({});asLink.storyName="As Link",asLink.args={href:"https://docs.lokalise.com/",target:"_blank",children:"This link goes to https://docs.lokalise.com"},asLink.parameters={storySource:{source:"args => <Link {...args} />"}};const asButton=Template.bind({});asButton.storyName="As Button",asButton.args={children:"Add Term"},asButton.parameters={storySource:{source:"args => <Link {...args} />"}};const disabledButton=Template.bind({});disabledButton.storyName="Disabled Button",disabledButton.args={children:"Disabled Term",disabled:!0},disabledButton.parameters={storySource:{source:"args => <Link {...args} />"}};const componentMeta={title:"Components/Link",parameters:{controls:{sort:"requiredFirst"}},component:_Link__WEBPACK_IMPORTED_MODULE_4__.r,argTypes:{onClick:{action:""}},includeStories:["asLink","asButton","disabledButton"]},mdxStoryNameToKey={"As Link":"asLink","As Button":"asButton","Disabled Button":"disabledButton"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.aT,{mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.kt)(MDXContent,null))};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","asLink","asButton","disabledButton"]},"./src/components/Link/Link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),_utils_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/styles/link.ts"),_utils_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/theme/index.ts"),_Pressable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Pressable/index.tsx");const Link=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.ZP)(_Pressable__WEBPACK_IMPORTED_MODULE_1__.s).withConfig({displayName:"Link",componentId:"sc-gfg66s-0"})(["",";",""],_utils_styles__WEBPACK_IMPORTED_MODULE_2__.J,(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_3__.c)((_ref=>{let{href}=_ref;return!href}),_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv`
			&:disabled {
				cursor: not-allowed;
				color: ${(0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__.$_)("content.disabled")};
			}
		`));Link.displayName="Link"},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button.withConfig({displayName:"Pressable__Root",componentId:"sc-1gn6gwf-0"})(["cursor:pointer;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pressable=(0,react.forwardRef)(((_ref,ref)=>{let{children,...props}=_ref;return(props=>void 0!==props.href)(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})}));Pressable.displayName="Pressable";try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/styles/link.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>withLinkStyle});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/theme/index.ts");const withLinkStyle=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.iv)(["cursor:pointer;font-size:inherit;font-weight:inherit;line-height:inherit;color:",";transition:color ",";background-color:transparent;padding:0;border:none;font-family:",";&:hover,&:focus{color:",";}&:active{color:",";}&:active:hover{color:",";}"],(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.idle"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.YJ)(),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.I8)("default"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.hover"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.pressed"),(0,_theme__WEBPACK_IMPORTED_MODULE_1__.$_)("interactive.primary.pressedHover"))},"./src/utils/theme/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$_:()=>color,I8:()=>fontFamily,W0:()=>spacing,W5:()=>zIndex,YJ:()=>transitionTime,cp:()=>typography,q0:()=>radius});var _lokalise_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/generateHelpers.js"),_foundations_themes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/foundations/themes/index.ts");const{colors:color,space:spacing,fonts:fontFamily,radii:radius,transitionTime,typography,zIndices:zIndex}=(0,_lokalise_styled__WEBPACK_IMPORTED_MODULE_0__.i)(_foundations_themes__WEBPACK_IMPORTED_MODULE_1__.n.light,{spacingName:"space",objectKeys:["typography"]})},"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0}}]);
//# sourceMappingURL=components-Link-Link-stories-mdx.791780d3.iframe.bundle.js.map