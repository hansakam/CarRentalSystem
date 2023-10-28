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
public class Car {
    @Id
    private String reggistrationNo;
    private String brand;
    private String type;
    private int NoOfPassengers;
    private String transmissionType;
    private String fuelType;
    private String color;
    private double dailyRate;
    private double monthlyRate;
    private double lossDamageWaiver;
    private double priceForExtraKm;
    private double freeMileage;
    private String status;
    private String frontViewImage;
    private String backView;
    private String sideView;
    private String internalView;

}
