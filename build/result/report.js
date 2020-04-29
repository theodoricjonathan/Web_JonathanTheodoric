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
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat demo.pages.HomePage.openHomePage(HomePage.java:9)\r\n\tat demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage(PokemonStepDefinition.java:16)\r\n\tat ✽.User open bulbapedia home page(file:///C:/Users/Jonathan%20Theodoric/IdeaProjects/Web_JonathanTheodoric/src/test/resources/features/PokemonSearch.feature:3)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User input search \"Pikachu\" on home page and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userInputSearchOnHomePageAndPressEnter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see article with title \"Pikachu\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search Bulbasaur",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat demo.pages.HomePage.openHomePage(HomePage.java:9)\r\n\tat demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage(PokemonStepDefinition.java:16)\r\n\tat ✽.User open bulbapedia home page(file:///C:/Users/Jonathan%20Theodoric/IdeaProjects/Web_JonathanTheodoric/src/test/resources/features/PokemonSearch.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User input search \"Bulbasaur\" on home page and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userInputSearchOnHomePageAndPressEnter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see article with title \"Bulbasaur\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search Eevee",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open bulbapedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat demo.pages.HomePage.openHomePage(HomePage.java:9)\r\n\tat demo.steps.PokemonStepDefinition.userOpenBulbapediaHomePage(PokemonStepDefinition.java:16)\r\n\tat ✽.User open bulbapedia home page(file:///C:/Users/Jonathan%20Theodoric/IdeaProjects/Web_JonathanTheodoric/src/test/resources/features/PokemonSearch.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User input search \"Eevee\" on home page and press enter",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userInputSearchOnHomePageAndPressEnter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see article with title \"Eevee\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.PokemonStepDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});