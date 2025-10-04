export default {
	compileOptions: {
		dev: true
	},
	props: {
		tag: 'br'
	},
	warnings: ['<hamber:element this="br"> is self-closing and cannot have content.']
};
