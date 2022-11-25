# Hamber

## What is Hamber?

Hamber is a new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM.

Learn more at the [Hamber website](https://hamberjs.web.app).


## Development

Pull requests are encouraged and always welcome. [Pick an issue](https://github.com/hamberjs/hamber/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) and help us out!

To install and work on Hamber locally:

```bash
git clone git@github.com:hamberjs/hamber.git
cd hamber
npm install
```

To build the compiler, and all the other modules included in the package:

```bash
npm run build
```

To watch for changes and continually rebuild the package (this is useful if you're using [npm link](https://docs.npmjs.com/cli/link.html) to test out changes in a project locally):

```bash
npm run dev
```

The compiler is written in [TypeScript](https://www.typescriptlang.org/), but don't let that put you off — it's basically just JavaScript with type annotations. You'll pick it up in no time. If you're using an editor other than [VSCode](https://code.visualstudio.com/) you may need to install a plugin in order to get syntax highlighting and code hints etc.


## License

[MIT](LICENSE)
