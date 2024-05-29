import utils from './utils';

describe('test utils', () => {
  test('should correctly format exactly one second', () => {
		const milliseconds = 1000;
		const expectedOutput = '00:01';
		expect(utils.formatTime(milliseconds)).toBe(expectedOutput);
	});

  test('should correctly format exactly one minute', () => {
		const milliseconds = 60000;
		const expectedOutput = '01:00';
		expect(utils.formatTime(milliseconds)).toBe(expectedOutput);
	});

  test('should correctly format exactly one hour', () => {
		const milliseconds = 3600000;
		const expectedOutput = '01:00:00';
		expect(utils.formatTime(milliseconds)).toBe(expectedOutput);
	});
})

describe('formatDate function', () => {
	test('should show a random date', () => {
		const input = '2023-04-05T12:00:00.000Z';
		const expectedOutput = '5/4/2023';
		expect(utils.formatDate(input)).toBe(expectedOutput);
	});

	test('should show the first day of the year', () => {
		const input = '2023-01-01T00:00:00.000Z';
		const expectedOutput = '1/1/2023';
		expect(utils.formatDate(input)).toBe(expectedOutput);
	});

	test('should show the last day of the year', () => {
		const input = '2023-12-30T23:00:00.000Z';
		const expectedOutput = '31/12/2023';
		expect(utils.formatDate(input)).toBe(expectedOutput);
	});
});

describe('formatDescription function', () => {
	it('should wrap text without URLs into paragraphs', () => {
		const description = 'This is text with no URL.';
		const expectedOutput =
			'<p class="mb-2">This is text with no URL.</p>';
		expect(utils.formatDescription(description)).toBe(expectedOutput);
	});

	it('should convert a single URL into a clickable link', () => {
		const description = 'Check this out for more fun: https://examplefun.com';
		const expectedOutput =
			'<p class="mb-2">Check this out for more fun: <a href="https://examplefun.com" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://examplefun.com</a></p>';
		expect(utils.formatDescription(description)).toBe(expectedOutput);
	});

	it('should convert multiple URLs into clickable links', () => {
		const description =
			'Visit https://examplefun.com and https://another-site-more-fun.net for more info.';
		const expectedOutput =
			'<p class="mb-2">Visit <a href="https://examplefun.com" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://examplefun.com</a> and <a href="https://another-site-more-fun.net" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://another-site-more-fun.net</a> for more info.</p>';
		expect(utils.formatDescription(description)).toBe(expectedOutput);
	});

	it('should convert line breaks into paragraphs', () => {
		const description = 'First paragraph.\nSecond paragraph.';
		const expectedOutput =
			'<p class="mb-2">First paragraph.</p><p class="mb-2">Second paragraph.</p>';
		expect(utils.formatDescription(description)).toBe(expectedOutput);
	});

	it('should handle a mix of URLs and line breaks correctly', () => {
		const description =
			'First paragraph.\nCheck https://example.com\nSecond paragraph.';
		const expectedOutput =
			'<p class="mb-2">First paragraph.</p><p class="mb-2">Check <a href="https://example.com" target="_blank" rel="noopener noreferrer" class="text-blue-700">https://example.com</a></p><p class="mb-2">Second paragraph.</p>';
		expect(utils.formatDescription(description)).toBe(expectedOutput);
	});
});