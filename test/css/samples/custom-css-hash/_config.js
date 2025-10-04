export default {
	compileOptions: {
		filename: 'src/components/FooSwitcher.hamber',
		cssHash({ hash, css, name, filename }) {
			const minFilename = filename
				.split('/')
				.map(i => i.charAt(0).toLowerCase())
				.join('');
			return `hb-${name}-${minFilename}-${hash(css)}`;
		}
	}
};
