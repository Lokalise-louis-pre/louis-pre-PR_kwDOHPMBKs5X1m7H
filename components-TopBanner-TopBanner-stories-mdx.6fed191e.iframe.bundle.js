"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[1893],{"./node_modules/@lokalise/styled/dist/tokens/modifier.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>f});const f=(i,e)=>t=>("function"==typeof i?i(t):t[i])?e:void 0},"./node_modules/@lokalise/styled/dist/tokens/variants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>e});const e=(t,a,c)=>n=>a["function"==typeof t?t(n):n[t]??c]},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$4:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_,oG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./src/components/TopBanner/TopBanner.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,centeredCloseButton:()=>centeredCloseButton,default:()=>TopBanner_stories,error:()=>error,info:()=>info,onClose:()=>onClose,topBannerLink:()=>topBannerLink,warning:()=>warning});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),blocks=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),theme=__webpack_require__("./src/utils/theme/index.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"TopBanner__Container",componentId:"sc-14b7ndq-0"})(["font-family:",";padding:",";display:grid;grid-template-columns:1fr auto;column-gap:",";align-items:flex-start;",";",";"],(0,theme.S3)("font.family.default"),(0,theme.W0)(4),(0,theme.W0)(3),(0,modifier.c)((({alignItems})=>"center"===alignItems),styled_components_browser_esm.iv`
			align-items: center;
		`),(0,variants.o)("styleStatus",{error:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.danger")};
		`,warning:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.warning")};
		`,info:styled_components_browser_esm.iv`
			background-color: ${(0,theme.S3)("color.background.info")};
		`})),Content=styled_components_browser_esm.ZP.div.withConfig({displayName:"TopBanner__Content",componentId:"sc-14b7ndq-1"})(["",";color:",";display:flex;align-items:center;justify-content:center;flex-wrap:wrap;column-gap:",";"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.text.default"),(0,theme.W0)(1)),TopBannerLink=(0,styled_components_browser_esm.ZP)(Pressable.s).withConfig({displayName:"TopBanner__TopBannerLink",componentId:"sc-14b7ndq-2"})([""," color:",";text-decoration:underline;min-width:fit-content;border:none;background:none;&:hover,&:visited,&:link,&:active,&:active:hover{text-decoration:underline;color:",";}"],(0,theme.cp)("body.small.default"),(0,theme.S3)("color.text.default"),(0,theme.S3)("color.text.default"));TopBannerLink.displayName="TopBannerLink";var Close=__webpack_require__("./src/foundations/icons/Close.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TopBanner=({status="warning",align="top",onClose,children,...props})=>(0,jsx_runtime.jsxs)(Container,{alignItems:align,styleStatus:status,...props,children:[(0,jsx_runtime.jsx)(Content,{children}),"function"==typeof onClose&&(0,jsx_runtime.jsx)(IconButton.h,{ariaLabel:"Close",onClick:onClose,children:(0,jsx_runtime.jsx)(Close.x,{})})]});TopBanner.displayName="TopBanner",TopBanner.displayName="TopBanner";try{TopBanner.displayName="TopBanner",TopBanner.__docgenInfo={description:"",displayName:"TopBanner",props:{status:{defaultValue:{value:"warning"},description:"Changes background color.",name:"status",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},align:{defaultValue:{value:"top"},description:"Aligns the content and the close button.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"top"'}]}},onClose:{defaultValue:null,description:"Allows to close the banner.",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TopBanner/TopBanner.tsx#TopBanner"]={docgenInfo:TopBanner.__docgenInfo,name:"TopBanner",path:"src/components/TopBanner/TopBanner.tsx#TopBanner"})}catch(__react_docgen_typescript_loader_error){}const Template=({onCloseFunction,...topBannerArgs})=>(0,jsx_runtime.jsx)(TopBanner,{...topBannerArgs,onClose:onCloseFunction?(0,dist.aD)("onClose"):void 0});const warning=Template.bind({});warning.storyName="Warning",warning.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},warning.parameters={storySource:{source:'({\n  onCloseFunction,\n  ...topBannerArgs\n}) => {\n  return <TopBanner {...topBannerArgs} onClose={onCloseFunction ? action("onClose") : undefined} />;\n}'}};const info=Template.bind({});info.storyName="Info",info.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},info.parameters={storySource:{source:'({\n  onCloseFunction,\n  ...topBannerArgs\n}) => {\n  return <TopBanner {...topBannerArgs} onClose={onCloseFunction ? action("onClose") : undefined} />;\n}'}};const error=Template.bind({});error.storyName="Error",error.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},error.parameters={storySource:{source:'({\n  onCloseFunction,\n  ...topBannerArgs\n}) => {\n  return <TopBanner {...topBannerArgs} onClose={onCloseFunction ? action("onClose") : undefined} />;\n}'}};const onClose=Template.bind({});onClose.storyName="onClose",onClose.args={children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",onCloseFunction:!0},onClose.parameters={storySource:{source:'({\n  onCloseFunction,\n  ...topBannerArgs\n}) => {\n  return <TopBanner {...topBannerArgs} onClose={onCloseFunction ? action("onClose") : undefined} />;\n}'}};const topBannerLink=Template.bind({});topBannerLink.storyName="TopBannerLink",topBannerLink.args={children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(TopBannerLink,{children:"A special link"})]},topBannerLink.parameters={storySource:{source:'({\n  onCloseFunction,\n  ...topBannerArgs\n}) => {\n  return <TopBanner {...topBannerArgs} onClose={onCloseFunction ? action("onClose") : undefined} />;\n}'}};const centeredCloseButton=Template.bind({});centeredCloseButton.storyName="Centered Close Button",centeredCloseButton.args={children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(TopBannerLink,{children:"A special link"})],onCloseFunction:!0,align:"center"},centeredCloseButton.parameters={storySource:{source:'({\n  onCloseFunction,\n  ...topBannerArgs\n}) => {\n  return <TopBanner {...topBannerArgs} onClose={onCloseFunction ? action("onClose") : undefined} />;\n}'}};const componentMeta={title:"Components/TopBanner",component:TopBanner,subcomponents:{TopBannerLink},args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["warning","info","error","onClose","topBannerLink","centeredCloseButton"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(blocks.h_,{title:"Components/TopBanner",component:TopBanner,subcomponents:{TopBannerLink},args:{onCloseFunction:!1},argTypes:{onCloseFunction:{name:"Pass onClose function?",control:{type:"boolean"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"topbanner",children:"TopBanner"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"TopBanner is used to display messages on the top of the page. It takes the full width of the page."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"TopBanner exports 2 components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TopBanner"}),": Main component."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"TopBannerLink"}),": Link that is meant to be used within ",(0,jsx_runtime.jsx)(_components.code,{children:"TopBanner"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { TopBanner, TopBannerLink } from '@lokalise/louis';\n\nexport default () => (\n\t<TopBanner>\n\t\t<span>This is the message</span>\n\t\t<TopBannerLink href=\"/some-page\">Link to some page</TopBannerLink>\n\t</TopBanner>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(blocks.$4,{of:TopBanner,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"status",children:"Status"}),"\n",(0,jsx_runtime.jsxs)(blocks.Xz,{withSource:"open",children:[(0,jsx_runtime.jsx)(blocks.oG,{name:"Warning",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"warning"},children:Template.bind({})}),(0,jsx_runtime.jsx)(blocks.oG,{name:"Info",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"info"},children:Template.bind({})}),(0,jsx_runtime.jsx)(blocks.oG,{name:"Error",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",status:"error"},children:Template.bind({})})]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"onclose",children:"onClose"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(blocks.oG,{name:"onClose",args:{children:"Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",onCloseFunction:!0},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"topbannerlink",children:"TopBannerLink"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(blocks.oG,{name:"TopBannerLink",args:{children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(TopBannerLink,{children:"A special link"})]},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"centered-close-button",children:"Centered Close Button"}),"\n",(0,jsx_runtime.jsx)(blocks.Xz,{withSource:"open",children:(0,jsx_runtime.jsx)(blocks.oG,{name:"Centered Close Button",args:{children:["Please, note! This is a global notification about something that has occurred in the system. A system is a group of interacting or interrelated elements that act according to a set of rules to form a unified whole.",(0,jsx_runtime.jsx)(TopBannerLink,{children:"A special link"})],onCloseFunction:!0,align:"center"},children:Template.bind({})})})]})}}};const TopBanner_stories=componentMeta},"./src/components/IconButton/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),variants=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/variants.js"),modifier=__webpack_require__("./node_modules/@lokalise/styled/dist/tokens/modifier.js"),theme=__webpack_require__("./src/utils/theme/index.ts"),Pressable=__webpack_require__("./src/components/Pressable/index.tsx");const variantColorStyles=styled_components_browser_esm.iv`
	${(0,variants.o)("appearance",{primary:styled_components_browser_esm.iv`
			padding: 6px;
			font-size: 20px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.secondary.hover")};
				color: ${(0,theme.S3)("color.text.link.hover")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.secondary.hover")};
				color: ${(0,theme.S3)("color.text.link.hover")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.secondary.hover")};
				color: ${(0,theme.S3)("color.text.link.hover")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.active")};
					color: ${(0,theme.S3)("color.text.active")};
				`)}
		`,secondary:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(1)};
			font-size: 16px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.tertiary.hover")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.tertiary.hover")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.action.tertiary.hover")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.active")};
					color: ${(0,theme.S3)("color.text.active")};
				`)}
		`,verified:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(1)};
			font-size: 16px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.warning")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.border.warning")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.warning")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.warning")};
					color: ${(0,theme.S3)("color.text.default")};
				`)}
		`,reviewed:styled_components_browser_esm.iv`
			padding: ${(0,theme.W0)(1)};
			font-size: 16px;
			color: ${(0,theme.S3)("color.text.default")};

			// hover
			&:hover:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.success")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// pressed
			&:active:not([disabled]),
			&:focus:active:not([disabled]) {
				background-color: ${(0,theme.S3)("color.border.success")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// focus
			&:focus-visible:not([disabled]) {
				background-color: ${(0,theme.S3)("color.background.success")};
				color: ${(0,theme.S3)("color.text.default")};
			}

			// activated
			${(0,modifier.c)("active",styled_components_browser_esm.iv`
					background-color: ${(0,theme.S3)("color.background.success")};
					color: ${(0,theme.S3)("color.text.default")};
				`)}
		`})}
`,Container=(0,styled_components_browser_esm.ZP)(Pressable.s).withConfig({displayName:"IconButton__Container",componentId:"sc-1cxbr1d-0"})(["display:inline-flex;align-items:center;background-color:transparent;transition:background-color ",",color ",";border:0;border-radius:",";text-decoration:none;"," &:disabled{cursor:not-allowed;color:",";","}"],(0,theme.S3)("transition.default"),(0,theme.S3)("transition.default"),(0,theme.S3)("radius.m"),variantColorStyles,(0,theme.S3)("color.text.disabled"),(0,modifier.c)("isLoading",styled_components_browser_esm.iv`
				color: initial;
				cursor: auto;
				${variantColorStyles}
			`));var LoadingSign=__webpack_require__("./src/foundations/icons/LoadingSign/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconButton=(0,react.forwardRef)((({appearance="secondary",ariaLabel,loading=!1,children,...rest},ref)=>(0,jsx_runtime.jsx)(Container,{ref,appearance,"aria-label":ariaLabel,isLoading:loading,disabled:"disabled"in rest&&rest.disabled||loading,...rest,children:loading?(0,jsx_runtime.jsx)(LoadingSign.X,{"aria-busy":"true","aria-live":"polite",ariaLabel:"Loading"}):children})));IconButton.displayName="IconButton";try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{appearance:{defaultValue:{value:"secondary"},description:"Changes the button appearance.",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"verified"'},{value:'"reviewed"'}]}},active:{defaultValue:null,description:"Toggles the active state of the button.",name:"active",required:!1,type:{name:"boolean"}},ariaLabel:{defaultValue:null,description:"Adds accessibility label.",name:"ariaLabel",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"Toggles disabled state of the button.",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Toggles the loading icon within the button.",name:"loading",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Displays Icon component in the button.",name:"children",required:!1,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Pressable});var react=__webpack_require__("./node_modules/react/index.js");const Root=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.button.withConfig({displayName:"Pressable__Root",componentId:"sc-1gn6gwf-0"})(["cursor:pointer;"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const isAnchor=props=>void 0!==props.href,Pressable=(0,react.forwardRef)((({children,...props},ref)=>isAnchor(props)?(0,jsx_runtime.jsx)(Root,{as:"a",...props,ref,children}):(0,jsx_runtime.jsx)(Root,{type:"button",...props,ref,children})));Pressable.displayName="Pressable";try{isAnchor.displayName="Pressable",isAnchor.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Close.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Close});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Close=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M15.3071 4.16677C15.1713 4.16998 15.0423 4.22676 14.9483 4.32473L9.99993 9.2731L5.05156 4.32473C5.00365 4.27539 4.94632 4.23616 4.88297 4.20937C4.81962 4.18258 4.75154 4.16878 4.68276 4.16878C4.58046 4.1688 4.48049 4.19935 4.39564 4.25651C4.3108 4.31367 4.24494 4.39484 4.20649 4.48964C4.16803 4.58444 4.15874 4.68856 4.17979 4.78867C4.20085 4.88879 4.25129 4.98034 4.32467 5.05163L9.27303 9.99999L4.32467 14.9484C4.27533 14.9957 4.23595 15.0525 4.20881 15.1152C4.18168 15.178 4.16735 15.2456 4.16665 15.314C4.16596 15.3824 4.17891 15.4502 4.20477 15.5135C4.23062 15.5768 4.26884 15.6344 4.3172 15.6827C4.36556 15.7311 4.42309 15.7693 4.4864 15.7952C4.54972 15.821 4.61756 15.834 4.68595 15.8333C4.75434 15.8326 4.8219 15.8182 4.88468 15.7911C4.94746 15.764 5.00419 15.7246 5.05156 15.6753L9.99993 10.7269L14.9483 15.6753C14.9957 15.7246 15.0524 15.764 15.1152 15.7911C15.178 15.8182 15.2455 15.8326 15.3139 15.8333C15.3823 15.834 15.4501 15.821 15.5134 15.7952C15.5768 15.7693 15.6343 15.7311 15.6826 15.6827C15.731 15.6344 15.7692 15.5768 15.7951 15.5135C15.8209 15.4502 15.8339 15.3824 15.8332 15.314C15.8325 15.2456 15.8182 15.178 15.791 15.1152C15.7639 15.0525 15.7245 14.9957 15.6752 14.9484L10.7268 9.99999L15.6752 5.05163C15.7499 4.97988 15.8013 4.88722 15.8224 4.78579C15.8436 4.68437 15.8337 4.57891 15.7939 4.48325C15.7541 4.38759 15.6863 4.30618 15.5994 4.24971C15.5125 4.19323 15.4106 4.16432 15.3071 4.16677Z"})});Close.displayName="Close";try{Close.displayName="Close",Close.__docgenInfo={description:"",displayName:"Close",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Close.tsx#Close"]={docgenInfo:Close.__docgenInfo,name:"Close",path:"src/foundations/icons/Close.tsx#Close"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/LoadingSign/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LoadingSign});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rectangle=({rotation,begin})=>(0,jsx_runtime.jsx)("g",{transform:`rotate(${rotation} 10 10)`,children:(0,jsx_runtime.jsx)("rect",{x:"9",y:"3",rx:"1",ry:"1.232",width:"2",height:"4.4",children:(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:`${begin}s`,repeatCount:"indefinite"})})});Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{rotation:{defaultValue:null,description:"",name:"rotation",required:!0,type:{name:"number"}},begin:{defaultValue:null,description:"",name:"begin",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}var SvgIcon=__webpack_require__("./src/foundations/icons/SvgIcon.tsx");const LoadingSign=props=>(0,jsx_runtime.jsxs)(SvgIcon.l,{...props,children:[(0,jsx_runtime.jsx)(Rectangle,{rotation:0,begin:-.875}),(0,jsx_runtime.jsx)(Rectangle,{rotation:45,begin:-.75}),(0,jsx_runtime.jsx)(Rectangle,{rotation:90,begin:-.625}),(0,jsx_runtime.jsx)(Rectangle,{rotation:135,begin:-.5}),(0,jsx_runtime.jsx)(Rectangle,{rotation:180,begin:-.375}),(0,jsx_runtime.jsx)(Rectangle,{rotation:225,begin:-.25}),(0,jsx_runtime.jsx)(Rectangle,{rotation:270,begin:-.125}),(0,jsx_runtime.jsx)(Rectangle,{rotation:315,begin:0})]});LoadingSign.displayName="LoadingSign";try{LoadingSign.displayName="LoadingSign",LoadingSign.__docgenInfo={description:"",displayName:"LoadingSign",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/index.tsx#LoadingSign"]={docgenInfo:LoadingSign.__docgenInfo,name:"LoadingSign",path:"src/foundations/icons/LoadingSign/index.tsx#LoadingSign"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const commonStyles=styled_components_browser_esm.iv`
	pointer-events: all;
	box-sizing: border-box;
	color: var(--louis-svgicon-color);
	fill: currentColor;
	font-size: var(--louis-svgicon-size);
`,SvgRoot=styled_components_browser_esm.ZP.svg.withConfig({displayName:"icons__SvgRoot",componentId:"sc-4ot8tf-0"})(["",";width:1em;height:1em;"],commonStyles);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reservedKeywords=["currentColor","inherit"],colorDefaults={color:"inherit",fill:"currentColor",stroke:void 0},SvgIcon=({color="inherit",size="inherit",ariaLabel,children,...props})=>{return(0,jsx_runtime.jsx)(SvgRoot,{style:{"--louis-svgicon-color":(colorType="color",inputColor=color,inputColor&&!reservedKeywords.includes(inputColor)?inputColor:colorDefaults[colorType]),"--louis-svgicon-size":size},...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children});var colorType,inputColor};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-TopBanner-TopBanner-stories-mdx.6fed191e.iframe.bundle.js.map