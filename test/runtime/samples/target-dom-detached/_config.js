export default {
	skip_if_ssr: true,
	compileOptions: {
		cssHash: () => 'hamber-xyz'
	},
	async test({ assert, component, window }) {
		assert.htmlEqual(
			window.document.head.innerHTML,
			'<style id="hamber-xyz">div.hamber-xyz{color:red}</style>'
		);
		assert.htmlEqual(
			component.div.innerHTML,
			'<div class="hamber-xyz">Hello World</div>'
		);
	}
};
