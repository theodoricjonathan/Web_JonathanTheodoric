package demo.hooks;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import demo.webdriver.WebDriverInstance;

public class WebDriverHook {

    @Before (value = "@Web")
    public void initializeWebdriver(){
        WebDriverInstance.initialize();
    }

    @After (value = "@Web")
    public void quitWebdrver(){
        WebDriverInstance.quit();
    }
}
