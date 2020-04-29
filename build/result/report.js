$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/PokemonSearch.feature");
formatter.feature({
  "name": "Search Pokemon",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search Pikachu",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input search \"Pikachu\" on home page and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userInputSearchOnHomePageAndPressEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see article with title \"Pikachu\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@class\u003d\u0027roundy\u0027]//a[@title\u003d\u0027List of PokÃ©mon by National PokÃ©dex number\u0027]/span\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JONATHANTHEODOR\u0027, ip: \u0027172.20.10.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\JONATH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:55962}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 00abadc94605f55ee909387f639d32ec\n*** Element info: {Using\u003dxpath, value\u003d//table[@class\u003d\u0027roundy\u0027]//a[@title\u003d\u0027List of PokÃ©mon by National PokÃ©dex number\u0027]/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat demo.pages.ArticlePage.getTitle(ArticlePage.java:9)\r\n\tat demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(PokemonStepDefinition.java:24)\r\n\tat ✽.User see article with title \"Pikachu\" on article page(file:///C:/Users/Jonathan%20Theodoric/IdeaProjects/Web_JonathanTheodoric/src/test/resources/features/PokemonSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Bulbasaur",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input search \"Bulbasaur\" on home page and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userInputSearchOnHomePageAndPressEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see article with title \"Bulbasaur\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@class\u003d\u0027roundy\u0027]//a[@title\u003d\u0027List of PokÃ©mon by National PokÃ©dex number\u0027]/span\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JONATHANTHEODOR\u0027, ip: \u0027172.20.10.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\JONATH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2c6da1315264a91f275fc4593267d4b4\n*** Element info: {Using\u003dxpath, value\u003d//table[@class\u003d\u0027roundy\u0027]//a[@title\u003d\u0027List of PokÃ©mon by National PokÃ©dex number\u0027]/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat demo.pages.ArticlePage.getTitle(ArticlePage.java:9)\r\n\tat demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(PokemonStepDefinition.java:24)\r\n\tat ✽.User see article with title \"Bulbasaur\" on article page(file:///C:/Users/Jonathan%20Theodoric/IdeaProjects/Web_JonathanTheodoric/src/test/resources/features/PokemonSearch.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Eevee",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input search \"Eevee\" on home page and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userInputSearchOnHomePageAndPressEnter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see article with title \"Eevee\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//table[@class\u003d\u0027roundy\u0027]//a[@title\u003d\u0027List of PokÃ©mon by National PokÃ©dex number\u0027]/span\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JONATHANTHEODOR\u0027, ip: \u0027172.20.10.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\JONATH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56196}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 97522ccfe49489b887b30304b00c54e6\n*** Element info: {Using\u003dxpath, value\u003d//table[@class\u003d\u0027roundy\u0027]//a[@title\u003d\u0027List of PokÃ©mon by National PokÃ©dex number\u0027]/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat demo.pages.ArticlePage.getTitle(ArticlePage.java:9)\r\n\tat demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(PokemonStepDefinition.java:24)\r\n\tat ✽.User see article with title \"Eevee\" on article page(file:///C:/Users/Jonathan%20Theodoric/IdeaProjects/Web_JonathanTheodoric/src/test/resources/features/PokemonSearch.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});