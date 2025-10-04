import { writable, derived } from 'hamber/store';

export const name = writable('world');

export const greeting = derived(
	name,
	$name => `Hello ${$name}!`
);
