/**
 * @author :Hansaka Malshan
 * created 10/28/2023---7:21 PM
 */
package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo repo;

    @Autowired
    ModelMapper mapper;

    public void saveCustomer(CustomerDTO dto) {
        if (repo.existsById(dto.getCustomerId())){
            throw new RuntimeException(dto.getCustomerId()+"Customer Is already Added !");
        }

        repo.save( mapper.map(dto, Customer.class));

    }

    public void deleteCustomer(String id) {

    }

    public List<CustomerDTO> getAllCustomer() {
        return null;
    }

    public CustomerDTO findCustomer(String id) {
        return null;
    }

    public void updateCustomer(CustomerDTO dto) {

    }
}
