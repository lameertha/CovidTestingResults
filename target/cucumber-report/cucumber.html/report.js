$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/covidtestresults/resources/featureFile/covidtest.feature");
formatter.feature({
  "line": 1,
  "name": "Covid Testing Functionality",
  "description": "",
  "id": "covid-testing-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 90740300,
  "error_message": "java.lang.NullPointerException\r\n\tat uk.co.covidtestresults.browserSelector.BrowserSelector.selectBrowser(BrowserSelector.java:17)\r\n\tat uk.co.covidtestresults.cucumber.Hooks.openBrowser(Hooks.java:25)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 2,
  "name": "As a Tester I want to find out the covid results successfully",
  "description": "",
  "id": "covid-testing-functionality;as-a-tester-i-want-to-find-out-the-covid-results-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Im using  covid samples for testing",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Im waiting for results",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "If I got negative results Just inform customer about their Situation.",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "If I got positive results I Will contact customer",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Advised them go to google",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Advised them to  search \"https://www.nhs.uk/conditions/coronavirus-covid-19/testing/test-results/positive-test-result/\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "should I get all covid results sucessfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.imUsingCovidSamplesForTesting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.imWaitingForResults()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.ifIGotNegativeResultsJustInformCustomerAboutTheirSituation()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.ifIGotPositiveResultsIWillContactCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.advisedThemGoToGoogle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.nhs.uk/conditions/coronavirus-covid-19/testing/test-results/positive-test-result/",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.advisedThemToSearch(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.shouldIGetAllCovidResultsSucessfully()"
});
formatter.result({
  "status": "skipped"
});
});