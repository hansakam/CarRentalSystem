package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {

    void saveCustomer(CustomerDTO dto);

    void updateCarAvailability(String rentId, String option);

    List<CustomerDTO> getAllCustomers();


}
