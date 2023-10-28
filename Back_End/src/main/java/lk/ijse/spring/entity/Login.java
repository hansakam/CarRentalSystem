/**
 * @author :Hansaka Malshan
 * created 10/26/2023---3:11 AM
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
public class Login {
    @Id
    private String loginId;
    private String role;
    private String username;
    private String password;



}
