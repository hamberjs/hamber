---
title: <hamber:window>
---

Just as you can add event listeners to any DOM element, you can add event listeners to the `window` object with `<hamber:window>`.

On line 11, add the `keydown` listener:

```html
<hamber:window on:keydown={handleKeydown}/>
```

> As with DOM elements, you can add [event modifiers](/tutorial/event-modifiers) like `preventDefault`.
