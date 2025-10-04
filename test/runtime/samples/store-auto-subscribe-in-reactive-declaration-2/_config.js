export default {
	html: `
		<div>Hello World</div>
		<div>Hello World</div>
	`,

	async test({ assert, component, target }) {
		await component.update_value('Hi Hamber');

		assert.htmlEqual(target.innerHTML, `
			<div>Hi Hamber</div>
			<div>Hi Hamber</div>
		`);
	}
};
