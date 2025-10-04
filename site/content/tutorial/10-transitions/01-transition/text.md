---
title: The transition directive
---

We can make more appealing user interfaces by gracefully transitioning elements into and out of the DOM. Hamber makes this very easy with the `transition` directive.

First, import the `fade` function from `hamber/transition`...

```html
<script>
	import { fade } from 'hamber/transition';
	let visible = true;
</script>
```

...then add it to the `<p>` element:

```html
<p transition:fade>Fades in and out</p>
```
