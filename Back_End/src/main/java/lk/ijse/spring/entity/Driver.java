/**
 * @author :Hansaka Malshan
 * created 10/26/2023---3:09 AM
 */
package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Driver {
    @Id
    private String licenceNo;
    private String name;
    private String contactNo;
    private String nicNo;
    private String username;
    private String password;
    private String email;
    private String availability;


}
