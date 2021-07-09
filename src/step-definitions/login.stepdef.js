const { Given, When } = require('@cucumber/cucumber');

const LoginPage = require('../pageobjects/login.page');

Given(/^I am on the login page$/, () => {
	LoginPage.open();
	LoginPage.clickAcceptCookies();
});

When(/^I login with "([^"]*)" credentials$/, (arg1) => {
	LoginPage.login(arg1);
});
