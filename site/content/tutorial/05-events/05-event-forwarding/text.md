---
title: Event forwarding
---

Unlike DOM events, component events don't *bubble*. If you want to listen to an event on some deeply nested component, the intermediate components must *forward* the event.

In this case, we have the same `App.hamber` and `Inner.hamber` as in the [previous chapter](/tutorial/component-events), but there's now an `Outer.hamber` component that contains `<Inner/>`.

One way we could solve the problem is adding `createEventDispatcher` to `Outer.hamber`, listening for the `message` event, and creating a handler for it:

```html
<script>
	import Inner from './Inner.hamber';
	import { createEventDispatcher } from 'hamber';

	const dispatch = createEventDispatcher();

	function forward(event) {
		dispatch('message', event.detail);
	}
</script>

<Inner on:message={forward}/>
```

But that's a lot of code to write, so Hamber gives us an equivalent shorthand — an `on:message` event directive without a value means 'forward all `message` events'.

```html
<script>
	import Inner from './Inner.hamber';
</script>

<Inner on:message/>
```
