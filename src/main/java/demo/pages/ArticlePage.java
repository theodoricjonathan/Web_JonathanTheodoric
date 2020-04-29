package demo.pages;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class ArticlePage {
    public String getTitle(){
        WebElement titleArticle = WebDriverInstance.driver.findElement(By.xpath("//big//a/span"));
        String title = titleArticle.getText();
        return title;
    }
}
