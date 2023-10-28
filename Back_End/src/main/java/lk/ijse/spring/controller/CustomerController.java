/**
 * @author :Hansaka Malshan
 * created 10/28/2023---7:55 PM
 */
package lk.ijse.spring.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    public CustomerController() {
        System.out.println("CustomerController : Instantiated");
    }
}
