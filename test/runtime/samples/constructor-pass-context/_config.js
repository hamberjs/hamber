export default {
	async test({ assert, target, window }) {
		const Component = require('./Component.hamber').default;

		const called = [];
		const component = new Component({
			target,
			context: new Map([
				['key', 'hamber'],
				['fn', (value) => called.push(value)]
			])
		});
		assert.htmlEqual(target.innerHTML, '<div>hamber</div><button></button>');

		const button = target.querySelector('button');
		await button.dispatchEvent(new window.MouseEvent('click'));

		assert.deepEqual(called, ['hello world']);

		component.$destroy();
	},
	test_ssr({ assert }) {
		const Component = require('./Component.hamber').default;

		const called = [];
		const { html } = Component.render(undefined, { context: new Map([
			['key', 'hamber'],
			['fn', (value) => called.push(value)]
		]) });
		assert.htmlEqual(html, '<div>hamber</div><button></button>');
	}
};
