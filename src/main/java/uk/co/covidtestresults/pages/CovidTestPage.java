package uk.co.covidtestresults.pages;

import org.openqa.selenium.firefox.FirefoxDriver;

/* Created
 * by Lamee */
public class CovidTestPage {
    private static FirefoxDriver driver;
    boolean covidTestResult=false;


    public static void main(String[] args) {
        CovidTestPage covidTestPage=new CovidTestPage();
        if(covidTestPage.covidTestResult) {
            System.out.println("Inform to the customer results is Negative ");
        } else {
            System.out.println("Inform to the customer results is positive and search https://www.gov.uk/get-coronavirus-test for more information ");
        }
        System.setProperty("webdriver.gecko.driver",  "driver\\geckodriver.exe");

        driver = new FirefoxDriver();
        driver.get("https://www.gov.uk/get-coronavirus-test");
    }


}
