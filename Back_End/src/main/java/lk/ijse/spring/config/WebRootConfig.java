/**
 * @author :Hansaka Malshan
 * created 10/26/2023---2:59 AM
 */
package lk.ijse.spring.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebRootConfig {

    public WebRootConfig() {
        System.out.println("WebRootConfig");
    }
}
