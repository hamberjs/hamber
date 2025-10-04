export default {
	warnings: [
		{
			code: 'css-unused-selector',
			message: 'Unused CSS selector "article > *"',
			frame: `
			1: <style>
			2:   article > * {
			     ^
			3:     font-size: 36px;
			4:   }`,
			pos: 9,
			start: { character: 9, column: 1, line: 2 },
			end: { character: 20, column: 12, line: 2 }
		},
		{
			code: 'css-unused-selector',
			message: 'Unused CSS selector "article *"',
			frame: `
			4:   }
			5:
			6:   article * {
			     ^
			7:     font-size: 36px;
			8:   }`,
			pos: 48,
			start: { character: 48, column: 1, line: 6 },
			end: { character: 57, column: 10, line: 6 }
		},
		{
			code: 'css-unused-selector',
			message: 'Unused CSS selector ".article > *"',
			frame: `
			 8:   }
			 9:
			10:   .article > * {
			      ^
			11:     font-size: 48px;
			12:   }`,
			pos: 84,
			start: { character: 84, column: 1, line: 10 },
			end: { character: 96, column: 13, line: 10 }
		}
	]
};
