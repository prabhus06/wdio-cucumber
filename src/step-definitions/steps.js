const { Given, When, Then } = require('@cucumber/cucumber');

const SearchPage = require('../pageobjects/search.page');
const ResultsPage = require('../pageobjects/results.page');

const pages = {
    search: SearchPage
}

Given(/^I am on the google page$/, () => {
	SearchPage.open();
})

When(/^I enter "([^"]*)" into the search box$/, arg1 => {
	SearchPage.search(arg1);
})

When(/^I click the search button$/, () => {
	SearchPage.clickSubmitButton()
})

Then(/^I should see a list of search results$/, () => {
	expect(ResultsPage.searchResults).toBeExisting()
})