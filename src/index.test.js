import {expect} from 'chai'
import jsdom from 'jsdom'
import fs from 'fs'

describe('The basic test', () => {
	it ('should pass', () => {
			expect(true).to.equal(true);
	})
})

describe ('index.html', () => {
	it ('should load the bundle.js file', (done) => {
		const index = fs.readFileSync('./src/index.html', "utf-8");
		jsdom.env(index, (err, window) => {
				const scripts = window.document.getElementsByTagName('script');

				const element = Array.prototype.find.call(scripts, function(el) {
					return el.getAttribute('src') === 'bundle.js';
				});
				expect(element).to.exist;
				done();
				window.close();
		});
	});
})
