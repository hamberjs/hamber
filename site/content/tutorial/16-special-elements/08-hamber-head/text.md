---
title: <hamber:head>
---

The `<hamber:head>` element allows you to insert elements inside the `<head>` of your document:

```html
<hamber:head>
	<link rel="stylesheet" href="/tutorial/dark-theme.css">
</hamber:head>
```

> In server-side rendering (SSR) mode, contents of `<hamber:head>` are returned separately from the rest of your HTML.
