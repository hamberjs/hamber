export default {
	skip_if_ssr: true,
	compileOptions: {
		cssHash: () => 'hamber-xyz'
	},
	async test({ assert, component, window }) {
		assert.htmlEqual(window.document.head.innerHTML, '');
		assert.htmlEqual(component.div.shadowRoot.innerHTML, `
			<style id="hamber-xyz">div.hamber-xyz{color:red}</style>
			<div class="hamber-xyz">Hello World</div>
		`);
	}
};
