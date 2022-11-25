# Hamber changelog

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
