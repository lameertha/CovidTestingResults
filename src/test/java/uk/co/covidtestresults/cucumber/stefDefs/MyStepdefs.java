package uk.co.covidtestresults.cucumber.stefDefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.covidtestresults.pages.CovidTestPage;

/* Created
 * by Lamee */public class MyStepdefs extends CovidTestPage {
    @Given("^Im using  covid samples for testing$")
    public void imUsingCovidSamplesForTesting() {
        new CovidTestPage();
        imUsingCovidSamplesForTesting();

    }

    @When("^Im waiting for results$")
    public void imWaitingForResults() {
        imWaitingForResults();
    }

    @And("^If I got negative results Just inform customer about their Situation\\.$")
    public void ifIGotNegativeResultsJustInformCustomerAboutTheirSituation() {
        ifIGotNegativeResultsJustInformCustomerAboutTheirSituation();
    }

    @And("^If I got positive results I Will contact customer and advised them to  search \"([^\"]*)\"$")
    public void ifIGotPositiveResultsIWillContactCustomerAndAdvisedThemToSearch(String arg0) throws Throwable {
        ifIGotPositiveResultsIWillContactCustomerAndAdvisedThemToSearch("Positive");
        throw new PendingException();
    }

    @Then("^should I get all covid results sucessfully\\.$")
    public void shouldIGetAllCovidResultsSucessfully() {
        shouldIGetAllCovidResultsSucessfully();
    }

    @And("^If I got positive results I Will contact customer$")
    public void ifIGotPositiveResultsIWillContactCustomer() {
        ifIGotPositiveResultsIWillContactCustomer();
    }

    @And("^Advised them go to google$")
    public void advisedThemGoToGoogle() {
        advisedThemGoToGoogle();
    }

    @And("^Advised them to  search \"([^\"]*)\"$")
    public void advisedThemToSearch(String link) throws Throwable {
        advisedThemToSearch("https://www.gov.uk/get-coronavirus-test");
    }
}