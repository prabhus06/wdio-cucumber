const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultsPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get searchResults() {
		return $('h1=Search Results')
	}
}

module.exports = new ResultsPage();
