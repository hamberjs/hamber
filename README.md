# Hamber

The magical disappearing UI framework.

---

## Example usage

```js
import * as hamber from 'hamber';

const { js, css, ast } = hamber.compile(source, {
	// the target module format – defaults to 'es' (ES2015 modules), can
	// also be 'amd', 'cjs', 'umd', 'iife' or 'eval'
	format: 'umd',

	// the filename of the source file, used in e.g. generating sourcemaps
	filename: 'MyComponent.html',

	// the name of the constructor. Required for 'iife' and 'umd' output,
	// but otherwise mostly useful for debugging. Defaults to 'HamberComponent'
	name: 'MyComponent',

	// for 'amd' and 'umd' output, you can optionally specify an AMD module ID
	amd: {
		id: 'my-component'
	},

	// custom error/warning handlers. By default, errors will throw, and
	// warnings will be printed to the console. Where applicable, the
	// error/warning object will have `pos`, `loc` and `frame` properties
	onerror: err => {
		console.error( err.message );
	},

	onwarn: warning => {
		console.warn( warning.message );
	}
});
```


## API

The Hamber compiler exposes the following API:

* `compile(source [, options]) => { js, css, ast }` - Compile the component with the given options (see below). Returns an object containing the compiled JavaScript, a sourcemap, an AST and transformed CSS.
* `create(source [, options]) => function` - Compile the component and return the component itself.
* `preprocess(source, options) => Promise` — Preprocess a source file, e.g. to use PostCSS or CoffeeScript
* `VERSION` - The version of this copy of the Hamber compiler as a string, `'x.x.x'`.

### Compiler options

The Hamber compiler optionally takes a second argument, an object of configuration options:

| | **Values** | **Description** | **Default** |
|---|---|---|---|
| `generate` | `'dom'`, `'ssr'`, `false` | Whether to generate JavaScript code intended for use on the client (`'dom'`), or for use in server-side rendering (`'ssr'`). If `false`, component will be parsed and validated but no code will be emitted | `'dom'` |
| `dev` | `true`, `false` | Whether to enable run-time checks in the compiled component. These are helpful during development, but slow your component down. | `false` |
| `css` | `true`, `false` | Whether to include code to inject your component's styles into the DOM. | `true` |
| `hydratable` | `true`, `false` | Whether to support hydration on the compiled component. | `false` |
| `customElement` | `true`, `false`, `{ tag, props }` | Whether to compile this component to a custom element. If `tag`/`props` are passed, compiles to a custom element and overrides the values exported by the component. | `false` |
| `bind` | `boolean` | If `false`, disallows `bind:` directives | `true` |
| | | |
| `shared` | `true`, `false`, `string` | Whether to import various helpers from a shared external library. When you have a project with multiple components, this reduces the overall size of your JavaScript bundle, at the expense of having immediately-usable component. You can pass a string of the module path to use, or `true` will import from `'hamber/shared.js'`. | `false` |
| `legacy` | `true`, `false` | Ensures compatibility with very old browsers, at the cost of some extra code. | `false` |
| | | |
| `format` | `'es'`, `'amd'`, `'cjs'`, `'umd'`, `'iife'`, `'eval'` | The format to output in the compiled component.<br>`'es'` - ES6/ES2015 module, suitable for consumption by a bundler<br>`'amd'` - AMD module<br>`'cjs'` - CommonJS module<br>`'umd'` - UMD module<br>`'iife'` - IIFE-wrapped function defining a global variable, suitable for use directly in browser<br>`'eval'` - standalone function, suitable for passing to `eval()` | `'es'` for `generate: 'dom'`<br>`'cjs'` for `generate: 'ssr'` |
| `name` | `string` | The name of the constructor in the compiled component. | `'HamberComponent'` |
| `filename` | `string` | The filename to use in sourcemaps and compiler error and warning messages. | `'HamberComponent.html'` |
| `amd`.`id` | `string` | The AMD module ID to use for the `'amd'` and `'umd'` output formats. | `undefined` |
| `globals` | `object`, `function` | When outputting to the `'umd'`, `'iife'` or `'eval'` formats, an object or function mapping the names of imported dependencies to the names of global variables. | `{}` |
| `preserveComments` | `boolean` | Include comments in rendering. Currently, only applies to SSR rendering | `false` |
| | | |
| `onwarn` | `function` | Specify a callback for when Hamber encounters a non-fatal warning while compiling the component. Passed two arguments: the warning object, and another function that is Hamber's default onwarn handling. | (warning is logged to console) |

### Preprocessor options

`hamber.preprocess` returns a Promise that resolves to an object with a `toString` method (other properties will be added in future). It takes an options object with `markup`, `style` or `script` properties:

```js
const processed = await hamber.preprocess(source, {
	markup: ({ content }) => {
		// `content` is the entire component string
		return { code: '...', map: {...} };
	},

	style: ({ content, attributes }) => {
		// `content` is what's inside the <style> element, if present
		// `attributes` is a map of attributes on the element
		if (attributes.type !== 'text/scss') return;
		return { code: '...', map: {...} };
	},

	script: ({ content, attributes }) => {
		// `content` is what's inside the <script> element, if present
		// `attributes` is a map of attributes on the element
		if (attributes.type !== 'text/coffeescript') return;
		return { code: '...', map: {...} };
	}
});
```

The `style` and `script` preprocessors will run *after* the `markup` preprocessor. Each preprocessor can return a) nothing (in which case no transformation takes place), b) a `{ code, map }` object, or c) a Promise that resolves to a) or b). Note that sourcemaps are currently discarded, but will be used in future versions of Hamber.

## Example/starter repos

* [hamberjs/template](https://github.com/hamberjs/template) — the 'official' starter template
* [hamberjs/template-webpack](https://github.com/hamberjs/template-webpack) — using webpack for bundling

## Development

Pull requests are encouraged and always welcome. [Pick an issue](https://github.com/hamberjs/hamber/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) and help us out!

To install and work on Hamber locally:

```bash
git clone git@github.com:hamberjs/hamber.git
cd hamber
npm install
npm run dev
```

The compiler is written in [TypeScript](https://www.typescriptlang.org/), but don't let that put you off — it's basically just JavaScript with type annotations. You'll pick it up in no time. If you're using an editor other than [VSCode](https://code.visualstudio.com/) you may need to install a plugin in order to get syntax highlighting and code hints etc.

### Linking to a Live Project

You can make changes locally to Hamber and test it against any Hamber project. You can also use a [default template](https://github.com/hamberjs/template) for development. Instruction on setup are found in that project repository.

From your project:

```bash
cd ~/path/to/your-hamber-project
npm install ~/path/to/hamber
```

And you should be good to test changes locally.

To undo this and link to the official latest Hamber release, just run:

```bash
npm install hamber@latest
```

## License

[MIT](LICENSE)
