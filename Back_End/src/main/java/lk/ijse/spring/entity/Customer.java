/**
 * @author :Hansaka Malshan
 * created 10/26/2023---3:09 AM
 */
package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String customerId;
    private String name;
    private String address;
    private String contactNo;
    private String email;
    private String nicNo;
    private String licenceNo;
    private String userName;
    private String password;
    private String nicFrontImage;
    private String nicBackImage;
    private String licenceImage;




    @OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
    private List<Rent>rents =new ArrayList<Rent>();
}
