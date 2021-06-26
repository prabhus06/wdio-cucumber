import { Given, When, Then } from '@cucumber/cucumber'

import SearchPage from '../pageobjects/search.page'
import ResultsPage from '../pageobjects/results.page'

Given(/^I am on the google page$/, () => {
	SearchPage.open()
})

When(/^I enter "([^"]*)" into the search box$/, arg1 => {
	SearchPage.search(arg1)
})

When(/^I click the search button$/, () => {
	SearchPage.clickSubmitButton()
})

Then(/^I should see a list of search results$/, () => {
	expect(ResultsPage.searchResults).toBeExisting()
})
