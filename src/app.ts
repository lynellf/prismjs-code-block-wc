import Prism from 'prismjs'
import { styles } from './css'

class CodeBlock extends HTMLElement {
	code: string | null
	codeElement: HTMLElement
	componentStyle: HTMLStyleElement
	languageClassName = ''
	language: string
	preElement: HTMLPreElement
	shadow: ShadowRoot
	styledCode = ''
	constructor() {
		super()
		const languageAttr = this.getAttribute('language')
		const content = this.textContent
		const hasContent = content!.trim().length
		this.shadow = this.attachShadow({ mode: 'open' })
		this.language = languageAttr ? languageAttr : 'javascript'
		this.preElement = document.createElement('pre')
		this.codeElement = document.createElement('code')
		this.componentStyle = document.createElement('style')
		this.code = hasContent ? content : 'var error = "No code found."'
		this.main()
	}

	setLanguageClassName = (language: string) => {
		this.languageClassName = `language-${language}`
		return language
	}
	// todo: set languages in a config file
	selectLanguage = () => {
		const { setLanguageClassName, language } = this
		const languageAttrValue = language!.toLowerCase()
		const languageBase = Prism.languages
		type TOptions = { [key: string]: () => string }
		const languageClassNameOptions: TOptions = {
			clike: () => setLanguageClassName('clike'),
			cs: () => setLanguageClassName('cs'),
			csharp: () => setLanguageClassName('cs'),
			css: () => setLanguageClassName('css'),
			dotnet: () => setLanguageClassName('cs'),
			git: () => setLanguageClassName('git'),
			go: () => setLanguageClassName('go'),
			graphql: () => setLanguageClassName('graphql'),
			html: () => setLanguageClassName('html'),
			java: () => setLanguageClassName('java'),
			javascript: () => setLanguageClassName('javascript'),
			js: () => setLanguageClassName('javascript'),
			json: () => setLanguageClassName('json'),
			jsx: () => setLanguageClassName('jsx'),
			markup: () => setLanguageClassName('markup'),
			php: () => setLanguageClassName('php'),
			pug: () => setLanguageClassName('pug'),
			python: () => setLanguageClassName('python'),
			react: () => setLanguageClassName('jsx'),
			sass: () => setLanguageClassName('scss'),
			sql: () => setLanguageClassName('sql'),
			svg: () => setLanguageClassName('markup'),
			tsx: () => setLanguageClassName('tsx'),
			typescript: () => setLanguageClassName('ts'),
			xml: () => setLanguageClassName('markup')
		}
		const prismLanguageSrcCode: any = {
			clike: languageBase.clike,
			cs: languageBase.csharp,
			css: languageBase.css,
			git: languageBase.git,
			go: languageBase.go,
			graphql: languageBase.graphql,
			java: languageBase.java,
			javascript: languageBase.javascript,
			json: languageBase.json,
			jsx: languageBase.jsx,
			markup: languageBase.markup,
			php: languageBase.php,
			pug: languageBase.pug,
			python: languageBase.python,
			sass: languageBase.scss,
			sql: languageBase.sql,
			tsx: languageBase.tsx,
			typescript: languageBase.typescript
		}
		// Set language class
		const languageClassName = languageClassNameOptions[languageAttrValue]()
		const prismLanguage = prismLanguageSrcCode[languageClassName]
		this.styledCode = Prism.highlight(this.code, prismLanguage, languageClassName)
	}

	clearCode = () => {
		this.innerHTML = ''
	}

	injectCode = () => {
		const { styledCode: code, languageClassName: className } = this
		this.preElement.className = className
		this.codeElement.className = className
		this.componentStyle.textContent = styles
		this.codeElement.innerHTML = code
	}

	appendCode = () => {
		const { preElement, codeElement, componentStyle, shadow } = this
		shadow.appendChild(componentStyle)
		preElement.appendChild(codeElement)
		shadow.appendChild(preElement)
	}

	main = () => {
		const { injectCode, selectLanguage, clearCode, appendCode } = this
		clearCode()
		selectLanguage()
		injectCode()
		appendCode()
	}
}

customElements.define('code-block', CodeBlock)
export default CodeBlock
