export default {
	skip_if_ssr: true,
	skip_if_hydrate_from_ssr: true,
	compileOptions: {
		dev: true
	},
	error: 'this={...} of <hamber:component> should specify a Hamber component.'
};
