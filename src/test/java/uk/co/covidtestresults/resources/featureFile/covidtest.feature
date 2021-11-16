Feature: Covid Testing Functionality
  Scenario: As a Tester I want to find out the covid results successfully
Given Im using  covid samples for testing
    When Im waiting for results
    And If I got negative results Just inform customer about their Situation.
    And If I got positive results I Will contact customer
    And Advised them go to google
  And Advised them to  search "https://www.nhs.uk/conditions/coronavirus-covid-19/testing/test-results/positive-test-result/"
    Then should I get all covid results sucessfully.

