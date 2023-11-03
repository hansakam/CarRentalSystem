/**
 * @author :Hansaka Malshan
 * created 11/3/2023---6:23 AM
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
public class RentDTO {
    private String rentId;
    private String date;
    private String pickupDate;
    private String returnDate;
    private String pickUpVenue;
    private String returnVenue;
    //private String lossDamageWaiver;
    private String bankSlip;
    private String status;

    private CarDTO car;
    private CustomerDTO customer;
    private DriverDTO driver;
}
