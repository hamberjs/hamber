---
title: Making an app
---

This tutorial is designed to get you familiar with the process of writing components. But at some point, you'll want to start writing components in the comfort of your own text editor.

First, you'll need to integrate Hamber with a build tool. We recommend using [HamberKit](https://hamberjs-kit.web.app)

```bash
npm create hamber@latest myapp
```

<!--
NOTE: Removed until we have better place for setting-up-your-editor guide.
If your editor does not have a Hamber plugin then you can follow [this guide](/blog/setting-up-your-editor) to configure your text editor to treat `.hamber` files the same as `.html` for the sake of syntax highlighting. -->

Then, once you've got your project set up, using Hamber components is easy. The compiler turns each component into a regular JavaScript class — just import it and instantiate with `new`:

```js
import App from './App.hamber';

const app = new App({
	target: document.body,
	props: {
		// we'll learn about props later
		answer: 42
	}
});
```

You can then interact with `app` using the [component API](/docs#run-time-client-side-component-api) if you need to.
