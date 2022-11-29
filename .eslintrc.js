module.exports = {
	root: true,
	extends: '@hamberjs',
	settings: {
		'import/core-modules': [
			'hamber',
			'hamber/internal',
			'hamber/store',
			'hamber/easing',
			'estree'
		],
		'hamber3/compiler': require('./compiler')
	}
};
