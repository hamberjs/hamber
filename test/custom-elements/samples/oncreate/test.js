import * as assert from 'assert';
import './main.hamber';

export default function (target) {
	target.innerHTML = '<my-app prop/>';
	const el = target.querySelector('my-app');

	assert.ok(el.wasCreated);
	assert.ok(el.propsInitialized);
}
