const fs = require('fs');
const path = require('path');

export function test({ assert, js }) {
	assert.deepEqual(js.map.sources, ['input.hamber']);
	assert.deepEqual(js.map.sourcesContent, [
		fs.readFileSync(path.join(__dirname, 'input.hamber'), 'utf-8')
	]);
}
