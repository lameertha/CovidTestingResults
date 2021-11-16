package uk.co.covidtestresults.basePage;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/* Created
 * by Lamee */public class BasePage {
    public static WebDriver driver;

    public BasePage() {
        PageFactory.initElements(driver, this);
        PropertyConfigurator.configure(System.getProperty("user.dir")+"src\\test\\java\\uk\\co\\covidtestresults\\resources\\propertiesFile\\log4j.properties");

    }
}
