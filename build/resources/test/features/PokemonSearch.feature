Feature: Search Pokemon
  Scenario: Search Pikachu
    Given User open bulbapedia home page
    When User input search "Pikachu" on home page and press enter
    Then User see article with title "Pikachu" on article page

  Scenario: Search Bulbasaur
    Given User open bulbapedia home page
    When User input search "Bulbasaur" on home page and press enter
    Then User see article with title "Bulbasaur" on article page

  Scenario: Search Eevee
    Given User open bulbapedia home page
    When User input search "Eevee" on home page and press enter
    Then User see article with title "Eevee" on article page