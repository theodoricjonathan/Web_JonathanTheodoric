package demo.pages;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class ArticlePage {
    public String getTitle(){
        WebElement titleArticle = WebDriverInstance.driver.findElement(By.xpath("[@class='roundy']"));
        String title = titleArticle.getText();
        return title;
    }
}
