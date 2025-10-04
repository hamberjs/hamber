# Hamber changelog

## 3.59.2

* Fix escaping `<textarea bind:value={...}>` values in SSR
* Handle dynamic values in `a11y-autocomplete-valid`
* Add `ResizeObserver` bindings `contentRect`/`contentBoxSize`/`borderBoxSize`/`devicePixelContentBoxSize`
* Add `devicePixelRatio` binding for `<hamber:window>`
* Add `fullscreenElement` and `visibilityState` bindings for `<hamber:document>`
* Add `a11y-autocomplete-valid` warning
* Fix handling of `width`/`height` attributes when spreading
* Fix updating of interpolated `style:` directive when using spread
* Remove `style:` directive property when value is `undefined`
* Fix type of `VERSION` compiler export
* Relax `a11y-no-redundant-roles` warning
* Handle nested array rest destructuring
* Add `bind:innerText` for `contenteditable` elements
* Add support for CSS `@container` queries
* Respect `preserveComments` in DOM output
* Allow use of `document` for `target` in typings
* Add `a11y-interactive-supports-focus` warning
* Fix equality check when updating dynamic text
* Relax `a11y-no-noninteractive-element-to-interactive-role` warning
* Properly handle microdata attributes
* Prevent name collision when using computed destructuring variables
* Fix escaping `<textarea value={...}>` values in SSR
* Add `<hamber:document>`
* Add a11y `no-noninteractive-element-to-interactive-role`
* Stop intro transition from triggering incorrectly
* Support computed and literal properties when destructuring objects in the template
* Give `style:` directive precedence over `style=` attribute
* Select `<option>` with `selected` attribute when initial state is `undefined`
* Prevent derived store callbacks after store is unsubscribed from
* Account for `bind:group` members being spread across multiple control flow blocks
* Revert buggy reactive statement optimization
* Support CSS units in the `fly` and `blur` transitions
* Add `|stopImmediatePropagation` event modifier
* Add `axis` parameter to `slide` transition
* Add `readonly` utility to convert `writable` store to readonly
* Add `readyState` binding for media elements
* Generate valid automatic component names when the filename contains only special characters
* Add `naturalWidth` and `naturalHeight` bindings
* Support `<!-- hamber-ignore ... -->` on components
* Add a11y warnings:
	* `aria-activedescendant-has-tabindex`: checks that elements with `aria-activedescendant` have a `tabindex`
	* `role-supports-aria-props`: checks that the (implicit) element role supports the given aria attributes
* Add `data-hamberkit-replacestate` and `data-hamberkit-keepfocus` attribute typings
* Compute node dimensions immediately before crossfading
* Fix potential infinite invalidate loop with `<hamber:component>`
* Ensure `bind:offsetHeight` updates initially
* Don't set selected options if value is unbound or not passed
* Validate component `:global()` selectors
* Improve warnings:
	* Make `noreferrer` warning less zealous
	* Omit a11y warnings on `<video aria-hidden="true">`
	* Omit a11y warnings on `<hamber:element>`
	* Detect unused empty attribute CSS selectors
	* Omit "no child content" warning on elements with `aria-label`
* Check value equality for `<input type="search">` and `<input type="url">`
* Do not select a disabled `<option>` by default when the initial bound value is undefined
* Handle `{@html}` tags inside `<template>` tags
* Ensure `afterUpdate` is not called after `onDestroy`
* Improve handling of `inert` attribute
* Reduce use of template literals in SSR output for better performance
* Ensure `<input>` value persists when swapping elements with spread attributes in an `{#each}` block
* Simplify generated code for reactive statements if dependencies are all static
* Fix race condition on `<hamber:element>` with transitions
* Allow assigning to a property of a `const` when destructuring
* Match browser behavior for decoding malformed HTML entities
* Ensure `trusted-types` CSP compatibility for Web Components
* Optimise `<hamber:element>` output code for static tag and static attribute
* Don't throw when calling unsubscribing from a store twice
* Clear inputs when `bind:group` value is set to `undefined`
* Fix handling of nested arrays with keyed `{#each}` containing a non-keyed `{#each}`
* Fix `draw` transition with delay showing a dot at the beginning of the path
* Fix infinity runtime call stack when propagating bindings
* Fix static `<hamber:element>` optimization in production mode
* Fix `hamber-ignore` comment breaking named slot
* Revert change to prevent running init binding unnecessarily
* Fix adding duplicate event listeners with `<hamber:element on:event>`
* Improve detection of promises that are also functions
* Avoid mutating spread component props during SSR
* Add missing typing for global `part` attribute
* Add missing `submitter` property to `on:submit` event type
* Add `hamber/elements` for HTML/Hamber typings
* Pass `options.direction` argument to custom transition functions
* Support fallback a11y WAI-ARIA roles
* Prevent running init binding unnecessarily
* Allow updating variables from `@const` declared function
* Do not emit `a11y-no-noninteractive-tabindex` warning if element has a `tabpanel`
* Fix escaping SSR'd values in `style:` directive
* Fix exception in `rel=` attribute check with dynamic values
* Do not emit deprecation warnings for `css` compiler options for now
* Make compiler run in browser again
* Upgrade `tslib`
* Check whether `parentNode` exists before removing child
* Upgrade various dependencies, notably `css-tree` to `2.2.1`
* Extend `css` compiler option with `'external' | 'injected' | 'none'` settings and deprecate old `true | false` values
* Throw compile-time error when attempting to update `const` variable
* Warn when using `<a target="_blank">` without `rel="noreferrer"`
* Support `style:foo|important` modifier
* Fix hydration regression with `{@html}` and components in `<hamber:head>`
* Add a11y warnings:
	* `a11y-click-events-have-key-events`: check if click event is accompanied by key events
	* `a11y-no-noninteractive-tabindex`: check for tabindex on non-interactive elements
* Warn when two-way binding to `{...rest}` object in `{#each}` block
* Support `--style-props` on `<hamber:component>`
* Supports nullish values for component event handlers
* Supports SVG elements with `<hamber:element>`
* Treat `inert` as boolean attribute
* Support `--style-props` for SVG components
* Fix false positive dev warnings about unset props when they are bound
* Fix hydration with `{@html}` and components in `<hamber:head>`
* Support scoped style for `<hamber:element>`
* Improve error message for invalid value for `<hamber:component this={...}>`
* Improve error message when using logic blocks or tags at invalid location
* Warn instead of throwing error if `<hamber:element>` is a void tag
* Supports custom elements in `<hamber:element>`
* Fix calling component unmount if a component is mounted and then immediately unmounted
* Do not generate `a11y-role-has-required-aria-props` warning when elements match their semantic role
* Improve performance of custom element data setting in `<hamber:element>`
* Add all global objects and functions as known globals
* Fix regression with style manager
* Add a11y warnings:
	* `a11y-incorrect-aria-attribute-type`: check ARIA state and property values
	* `a11y-no-abstract-role`: check that ARIA roles are non-abstract
	* `a11y-no-interactive-element-to-noninteractive-role`: check for non-interactive roles used on interactive elements
	* `a11y-role-has-required-aria-props`: check that elements with `role` attribute have all required attributes for that role
* Add `ComponentEvents` convenience type
* Add `HamberPreprocessor` utility type
* Enhance action typings
* Remove empty stylesheets created from transitions
* Make `a11y-label-has-associated-control` warning check all descendants for input control
* Only show lowercase component name warnings for non-HTML/SVG elements
* Disallow invalid CSS selectors starting with a combinator
* Use `Node.parentNode` instead of `Node.parentElement` for legacy browser support
* Handle arrow function on `<slot>` inside `<hamber:fragment>`
* Improve parsing speed when encountering large blocks of whitespace
* Fix `class:` directive updates in aborted/restarted transitions

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
