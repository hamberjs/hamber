import * as path from 'path';

export default {
	compileOptions: {
		dev: true
	},

	test({ assert, target }) {
		const h1 = target.querySelector('h1');
		const p = target.querySelector('p');

		assert.deepEqual(h1.__hamber_meta.loc, {
			file: path.relative(process.cwd(), path.resolve(__dirname, 'main.hamber')),
			line: 4,
			column: 0,
			char: 53
		});

		assert.deepEqual(p.__hamber_meta.loc, {
			file: path.relative(process.cwd(), path.resolve(__dirname, 'Foo.hamber')),
			line: 1,
			column: 1,
			char: 7
		});
	}
};
