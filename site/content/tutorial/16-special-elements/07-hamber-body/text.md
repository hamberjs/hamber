---
title: <hamber:body>
---

Similar to `<hamber:window>` and `<hamber:document>`, the `<hamber:body>` element allows you to listen for events that fire on `document.body`. This is useful with the `mouseenter` and `mouseleave` events, which don't fire on `window`.

Add the `mouseenter` and `mouseleave` handlers to the `<hamber:body>` tag:

```html
<hamber:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
/>
```
