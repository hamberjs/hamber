# Hamber changelog

## 3.49.0

* Improve performance of string escaping during SSR
* Add `ComponentType` and `ComponentProps` convenience types
* Add support for CSS `@layer`
* Export `CompileOptions` from `hamber/compiler`
* Fix DOM-less components not being properly destroyed
* Fix `class:` directive updates with `<hamber:element>`
* Harden attribute escaping during SSR

## 3.24.0

* Support nullish coalescing (`??`) and optional chaining (`?.`) operators
* Support `import.meta`
* Fix only setting `<input>` values when they're changed when there are spread attributes
* Fix placement of `{@html}` when used at the root of a slot, at the root of a component, or in `<hamber:head>`
* Fix certain handling of two-way bound `contenteditable` elements
* Fix handling of `import`ed value that is used as a store and is also mutated
* Do not display `a11y-missing-content` warning on elements with `contenteditable` bindings
* Fix handling of `this` in inline function expressions in the template
* Fix collapsing HTML with static content
* Prevent use of `$store` at compile time when top-level `store` has been shadowed
* Update `<select>` with one-way `value` binding when the available `<option>`s change
* Fix published `tweened` types so the `.set()` and `.update()` options are optional
* Fix contextual `bind:this` inside `{#each}` block
* Preprocess self-closing `<script>` and `<style>` tags
* Fix types for animation- and transition-related param objects so each param is optional

## 3.2.0

* Improve `spring` animations, and add `hard`/`soft` options
* Expose `parse` and `walk` functions
* Support array/object rest in `each` block destructuring patterns
* Use `setAttribute` to change `form` property on form elements
* Fix a11y warning when `<figcaption>` is non-direct descendant of `<figure>`
* Squelch erroneous 'empty block' warnings
* Fix IE9/10 error with `insertBefore`
* Prevent `$$scope` from being spread onto an element
* Resubscribe to stores that are assigned to in `<script>`
* Allow reactive declarations to depend on `const` variables
* Trigger store changes on UpdateExpression
* Squelch missing prop warning if variable is initialised
* Add `alert`, `confirm` and `prompt` to known globals
* Allow store subscribe functions to return an object with an `unsubscribe` method, providing native RxJS support
* Prevent text input cursor jumping in Safari
* Allow assignments to member expressions
* Prevent mutually dependent functions causing an infinite during hoisting
* Reuse scheduler promise instead of creating new one each time
* Various site/docs fixes

## 3.0.0

* Everything
