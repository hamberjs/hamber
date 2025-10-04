export default {
	html: '<div class=" hamber-x1o6ra"></div>',

	test({ assert, component, target }) {
		const div = target.querySelector('div');

		component.testName = null;
		assert.equal(div.className, ' hamber-x1o6ra');

		component.testName = undefined;
		assert.equal(div.className, ' hamber-x1o6ra');

		component.testName = undefined + '';
		assert.equal(div.className, 'undefined hamber-x1o6ra');

		component.testName = null + '';
		assert.equal(div.className, 'null hamber-x1o6ra');

		component.testName = 1;
		assert.equal(div.className, '1 hamber-x1o6ra');

		component.testName = 0;
		assert.equal(div.className, '0 hamber-x1o6ra');

		component.testName = false;
		assert.equal(div.className, 'false hamber-x1o6ra');

		component.testName = true;
		assert.equal(div.className, 'true hamber-x1o6ra');

		component.testName = {};
		assert.equal(div.className, '[object Object] hamber-x1o6ra');

		component.testName = '';
		assert.equal(div.className, ' hamber-x1o6ra');

		component.testName = 'testClassName';
		assert.equal(div.className, 'testClassName hamber-x1o6ra');
	}
};
