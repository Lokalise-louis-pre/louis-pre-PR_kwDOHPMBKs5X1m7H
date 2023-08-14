"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[5584],{"./node_modules/@lokalise/styled/dist/hooks/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>s});const s=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Fg},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),react_default=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}static{this.defaultProps={children:void 0}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}}},"./src/foundations/designTokens/typography/typography.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>typography});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),dist_react=__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),useTheme=__webpack_require__("./node_modules/@lokalise/styled/dist/hooks/useTheme.js"),Code=__webpack_require__("./src/components/Code/Code.tsx"),theme=__webpack_require__("./src/utils/theme/index.ts");const TypographyTable=styled_components_browser_esm.ZP.table.withConfig({displayName:"storiesUtils__TypographyTable",componentId:"sc-zq60x3-0"})(["background:",";color:",";"],(0,theme.S3)("color.background.surface.default"),(0,theme.S3)("color.text.default")),TypographyBodyCell=styled_components_browser_esm.ZP.td.withConfig({displayName:"storiesUtils__TypographyBodyCell",componentId:"sc-zq60x3-1"})(["padding:10px 10px 10px 0;"]),TypographyHeadCell=styled_components_browser_esm.ZP.th.withConfig({displayName:"storiesUtils__TypographyHeadCell",componentId:"sc-zq60x3-2"})(["text-align:left;font-family:var(--sb-theme-font-family-default);"]),Typography=()=>{const typographyEntries=[],traverseTypography=(obj,parentKeys)=>{Object.entries(obj).forEach((([key,typographyValue])=>{if(null!==typographyValue&&"object"==typeof typographyValue)traverseTypography(typographyValue,[...parentKeys,key]);else{const typographyObject={key:parentKeys.join("."),typographyValue:obj},typographyKey=JSON.stringify(typographyObject);typographyEntries.some((h=>JSON.stringify(h)===typographyKey))||typographyEntries.push(typographyObject)}}))};return traverseTypography((0,useTheme.F)().typography,[]),(0,jsx_runtime.jsxs)(TypographyTable,{children:[(0,jsx_runtime.jsx)("thead",{children:(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(TypographyHeadCell,{children:"Token"}),(0,jsx_runtime.jsx)(TypographyHeadCell,{children:"Value"}),(0,jsx_runtime.jsx)(TypographyHeadCell,{children:"Sample"})]})}),(0,jsx_runtime.jsx)("tbody",{children:typographyEntries.map((({key,typographyValue})=>(0,jsx_runtime.jsxs)("tr",{children:[(0,jsx_runtime.jsx)(TypographyBodyCell,{children:(0,jsx_runtime.jsxs)(Code.E,{children:["typography('",key,"')"]})}),(0,jsx_runtime.jsx)(TypographyBodyCell,{children:(0,jsx_runtime.jsx)(Code.E,{children:Object.entries(typographyValue).map((([k,v])=>null===v||"object"==typeof v?null:(0,jsx_runtime.jsxs)("span",{children:[k,": ",v.toString(),(0,jsx_runtime.jsx)("br",{})]},k)))})}),(0,jsx_runtime.jsx)(TypographyBodyCell,{children:(0,jsx_runtime.jsx)("span",{style:typographyValue,children:"Lorem Ipsum"})})]},key)))})]})};Typography.displayName="Typography";try{TypographyBodyCell.displayName="TypographyBodyCell",TypographyBodyCell.__docgenInfo={description:"",displayName:"TypographyBodyCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTableDataCellElement | null) => void) | RefObject<HTMLTableDataCellElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/designTokens/typography/storiesUtils.tsx#TypographyBodyCell"]={docgenInfo:TypographyBodyCell.__docgenInfo,name:"TypographyBodyCell",path:"src/foundations/designTokens/typography/storiesUtils.tsx#TypographyBodyCell"})}catch(__react_docgen_typescript_loader_error){}try{TypographyHeadCell.displayName="TypographyHeadCell",TypographyHeadCell.__docgenInfo={description:"",displayName:"TypographyHeadCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTableHeaderCellElement | null) => void) | RefObject<HTMLTableHeaderCellElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/designTokens/typography/storiesUtils.tsx#TypographyHeadCell"]={docgenInfo:TypographyHeadCell.__docgenInfo,name:"TypographyHeadCell",path:"src/foundations/designTokens/typography/storiesUtils.tsx#TypographyHeadCell"})}catch(__react_docgen_typescript_loader_error){}const typography=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",h2:"h2",p:"p",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Foundations/Design Tokens/Typography"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"typography",children:"Typography"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#typography-options",children:"Typography Options"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["At Lokalise we use Graphik typeface internally, and it is ",(0,jsx_runtime.jsx)(_components.strong,{children:"NOT bundled"})," in Louis by default due to legal requirements. Please purchase it from their ",(0,jsx_runtime.jsx)(_components.a,{href:"https://type.today/en/Graphik",target:"_blank",rel:"nofollow noopener noreferrer",children:"website"})," in case you need it."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you'd like to install a custom font family, please see the ",(0,jsx_runtime.jsx)(dist_react.Z,{kind:"Overview/Theming",children:"Custom Fonts"})," section for more information in Theming."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { typography } from '@lokalise/louis';\nimport { styled } from '@lokalise/styled';\n\nconst Heading1 = styled.h1`\n\t${typography('heading.1')}\n`;\n\nexport const MyComponent = () => <Heading1>My Heading</Heading1>;\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/UI-Library?node-id=5398%3A21831",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Typography"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"typography-options",children:"Typography Options"}),"\n",(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)(Typography,{})})]})}}}}]);