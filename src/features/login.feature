Feature: Login Function

    Scenario: As a user, I can log into the secure area

        Given I am on the login page
        When I login with "PAYM Legal Owner User" credentials
        Then I should be displayed with dashboard page