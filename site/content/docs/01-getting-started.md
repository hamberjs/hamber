---
title: Getting started
---

---

To try Hamber in an interactive online environment you can try [the REPL](https://hamberjs.web.app/repl).

To create a project locally we recommend using [HamberKit](https://hamberjs-kit.web.app/), the official application framework from the Hamber team:
```
npm create hamber@latest myapp
cd myapp
npm install
npm run dev
```

HamberKit will handle calling [the Hamber compiler](https://www.npmjs.com/package/hamber) to convert your `.hamber` files into `.js` files that create the DOM and `.css` files that style it. It also provides all the other pieces you need to build a web application such as a development server, routing, and deployment.

The Hamber team maintains a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=hamberjs.hamber-vscode).
