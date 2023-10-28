/**
 * @author :Hansaka Malshan
 * created 10/26/2023---2:59 AM
 */
package lk.ijse.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"lk.ijse.spring.controller","lk.ijse.spring.advicer"})
public class WebAppConfig {

    public WebAppConfig() {
        System.out.println("WebAppConfig : Instantiated");
    }
}
