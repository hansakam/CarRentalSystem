/**
 * @author :Hansaka Malshan
 * created 10/26/2023---3:20 AM
 */
package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {

    private String id;
    private String name;
    private String address;
    private int contact;
    private String email;
    private String nicNo;
    private String nicFrontImg;
    private String nicBackImg;
    private String licenceNo;
    private String licenceImg;
    private String userName;
    private String password;
}
