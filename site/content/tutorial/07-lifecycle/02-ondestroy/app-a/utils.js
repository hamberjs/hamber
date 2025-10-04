import { onDestroy } from 'hamber';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		// Fix the memory leak here
	});
}
