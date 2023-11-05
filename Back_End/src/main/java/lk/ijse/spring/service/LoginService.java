package lk.ijse.spring.service;

import lk.ijse.spring.dto.LoginDTO;

public interface LoginService {

    void saveLogin (LoginDTO dto);

    LoginDTO loginToSystem(String username);


}
