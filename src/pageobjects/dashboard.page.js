const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Dashboard extends Page {
	/**
	 * define selectors using getter methods
	 */
	get txtLandingGreeting() {
		return $('#at_landing_greeting');
	}
}

module.exports = new Dashboard();
