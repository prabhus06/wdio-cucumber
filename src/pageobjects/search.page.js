const ActionHelper = require('./../lib/actionHelpers');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get inputUsername() {
		return $('#username')
	}
	get inputPassword() {
		return $('#password')
	}
	get btnSubmit() {
		return $('button[type="submit"]')
	}
	get agreeTerms() {
		return $('#L2AGLb')
	}
	get searchField() {
		return $('[name="q"]')
	}
	get clickSearchButton() {
		return $('[name="btnK"]')
	}

	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to login using username and password
	 */
	login(username, password) {
		this.inputUsername.setValue(username)
		this.inputPassword.setValue(password)
		this.btnSubmit.click()
	}

	/**
	 * overwrite specifc options to adapt it to page object
	 */
	open() {
		return super.open('https://google.com/')
	}

	search(item) {
		if (this.agreeTerms.isDisplayed()) {
			ActionHelper.click(this.agreeTerms)
		}
		ActionHelper.setValue(this.searchField, item)
	}

	clickSubmitButton() {
		ActionHelper.click(this.clickSearchButton)
	}
}

module.exports = new SearchPage();
