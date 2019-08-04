# Prismjs Code-Block Web Component

## What is this?
A basic configuration of [Prismjs](https://prismjs.com/) as a web component. To keep the bundle-size modest, not every language is included. Just some of my favorites, or those I'm interested in. Furthermore, only one stylesheet is included.

### Languages Included

Language | Language Attribute Name
---|:---: 
C-Like | clike
C# | cs or csharp or dotnet
CSS | css
Git | git
Go | go
GraphQl | graphql
HTML | html or markup or xml or svg
Java | java
JavaScript | javascript or js
JSON | json
PHP | php
Pug | pug
Python | python
React | jsx or react
Sass (SCSS) | scss or sass
SQL | sql
TypeScript React | tsx


### How to use?

__head Element__
```html
<script src="codeBlockProd.min.js" defer></script>
```

__Body Element__
```html
<code-block language="JavaScript">
    // JavaScript array and loop
          var array = [1, 2, 3];
          array.forEach(item =&gt; {
          console.log(item);
          });
</code-block>
```
__React__
```jsx
import React from 'react'

function App() {
	const code = `
    // JavaScript array and loop
    var array = [1, 2, 3];
    array.forEach(item =&gt; {
    console.log(item);
    });
  `
	return (
		<div className="App">
			<h1>Hello World</h1>
			<code-block language="JavaScript">{code}</code-block>
		</div>
	)
}
```

### Recomended Usage
For whatever reason, a user may view a page with this web component with JavaScript disabled. Or the user may use an ancient web browser. A good fallback involves retaining a pre/code element combination alongside some styling.

```html
<code-block language="JavaScript">
    <pre style="background-color: black; color: white;">
      <code>
          // JavaScript array and loop
          var array = [1, 2, 3];
          array.forEach(item =&gt; {
          console.log(item);
          });
      </code>
    </pre>
</code-block>
```

### Further Customization
Languages and plugins are defined within webpack.common.js

Additional languages will become available within the Prisim module.

The language class names are defined as key-value pairs within the web component. Append any additional languages using the same pattern defined below.

```typescript
const languageClassNameOptions: TOptions = {
  clike: () => setLanguageClassName('clike'),
  //... language class names ...
  xml: () => setLanguageClassName('markup')
}
const prismLanguageSrcCode: any = {
  clike: languageBase.clike,
  // ... languages ...
  typescript: languageBase.typescript
}
```

### Style Customization
Styles can be overridden inside of the css.ts file to match whichever theme of your choice.

## Wish-list
 + Unit testing of any kind
 + Additional attribute for theme/style choice
 + Proper tsc checking with Webpack watch (Build should fail if tsc fails)
