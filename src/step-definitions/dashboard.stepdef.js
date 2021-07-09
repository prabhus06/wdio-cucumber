const { Then } = require('@cucumber/cucumber');

const Dashboard = require('../pageobjects/dashboard.page');

Then(/^I should be displayed with dashboard page$/, () => {
	expect(Dashboard.txtLandingGreeting).toBeExisting();
});
