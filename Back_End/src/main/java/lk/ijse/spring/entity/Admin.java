/**
 * @author :Hansaka Malshan
 * created 10/26/2023---3:10 AM
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
public class Admin {
    @Id
    private String adminId;
    private String name;
    private String contact;
    private String email;
    private String username;
    private String password;


}
