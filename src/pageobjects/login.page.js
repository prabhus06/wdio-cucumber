const Page = require('./page');
const ActionHelper = require('./../lib/actionHelpers');
const LoginPageData = require('../data/test.data.js');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
	/**
	 * define selectors using getter methods
	 */
	get inputUsername() {
		return $('#capture_signIn_traditionalSignIn_emailAddress');
	}
	get inputPassword() {
		return $('#capture_signIn_traditionalSignIn_password');
	}
	get btnSubmit() {
		return $('#eeidLoginButton');
	}
	get btnAccceptCookies() {
		return $('//a[@class="call"]');
	}
	get iframe() {
		return $('//iframe[@title="TrustArc Cookie Consent Manager"]');
	}

	/**
	 * a method to encapsule automation code to interact with the page
	 * e.g. to login using username and password
	 */
	login(usertype) {
		ActionHelper.setValue(this.inputUsername, LoginPageData[usertype]);
		ActionHelper.setValue(this.inputPassword, LoginPageData['password']);
		ActionHelper.click(this.btnSubmit);
	}

	open() {
		return super.open('https://id.ee.co.uk/id/login');
	}

	clickAcceptCookies() {
		ActionHelper.switchToIframe(this.iframe);
		ActionHelper.click(this.btnAccceptCookies);
	}
}

module.exports = new LoginPage();
