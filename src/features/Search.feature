Feature: Google search
    @wip
    Scenario: As a user, I can search for a key word

        Given I am on the google page
        When I enter "Selenium Webdriver" into the search box
        And  I click the search button
        Then I should see a list of search results