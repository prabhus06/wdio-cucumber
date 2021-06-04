class ActionHelper {
	launchBrowserUrl(urlToLaunch) {
		browser.url(urlToLaunch)
	}

	pause(seconds) {
		browser.pause(seconds * 1000)
	}

	waitForElement(element, waitTimeInSeconds) {
		element.waitForDisplayed(waitTimeInSeconds * 1000)
	}

	clearText(element) {
		element.waitForDisplayed()
		element.clearValue()
	}

	click(element) {
		element.waitForDisplayed()
		element.click()
	}

	setValue(element, value) {
		element.waitForDisplayed()
		element.setValue(value)
	}

	getText(element) {
		element.waitForDisplayed()
		return element.getText()
	}

	isDisplayed(element) {
		element.waitForDisplayed()
		return element.isDisplayed()
	}

	isExisting(element) {
        element.waitForDisplayed();
        return element.isExisting();
    }

	getPageTitle(pageTitle) {
		browser.waitUntil(
			function () {
				return browser.getTitle() === pageTitle
			},
			10000,
			'title is not displayed after the given time'
		)
		return browser.getTitle()
	}
}

module.exports = new ActionHelper()
