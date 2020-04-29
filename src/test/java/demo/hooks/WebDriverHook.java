package demo.hooks;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import demo.webdriver.WebDriverInstance;

public class WebDriverHook {

    @Before
    public void initializeWebdriver(){
        WebDriverInstance.initialize();
    }

    @After
    public void quitWebdrver(){
        WebDriverInstance.quit();
    }
}
