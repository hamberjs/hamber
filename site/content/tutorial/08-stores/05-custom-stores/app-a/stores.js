import { writable } from 'hamber/store';

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		increment: () => {},
		decrement: () => {},
		reset: () => {}
	};
}

export const count = createCount();
