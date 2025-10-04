---
title: <hamber:element>
---

Sometimes we don't know in advance what kind of DOM element to render. `<hamber:element>` comes in handy here. Instead of a sequence of `if` blocks...

```html
{#if selected === 'h1'}
	<h1>I'm a h1 tag</h1>
{:else if selected === 'h3'}
	<h3>I'm a h3 tag</h3>
{:else if selected === 'p'}
	<p>I'm a p tag</p>
{/if}
```

...we can have a single dynamic component:

```html
<hamber:element this={selected}>I'm a {selected} tag</hamber:element>
```

The `this` value can be any string, or a falsy value — if it's falsy, no element is rendered.
