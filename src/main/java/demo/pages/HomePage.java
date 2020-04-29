package demo.pages;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class HomePage {
    public void openHomePage(){ WebDriverInstance.driver.get("http://bulbapedia.bulbagarden.net/wiki/Main_Page"); }

    public void inputSearch(String keyword){
        WebElement inputSearch = WebDriverInstance.driver.findElement(By.id("searchInput"));
        inputSearch.sendKeys(keyword);
    }

    public void clickSearch(String keyword){
        WebElement inputSearch = WebDriverInstance.driver.findElement(By.id("searchInput"));
        inputSearch.sendKeys();
    }
}
