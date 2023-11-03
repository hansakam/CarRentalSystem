/**
 * @author :Hansaka Malshan
 * created 11/3/2023---7:00 AM
 */
package lk.ijse.spring.controller;

import lk.ijse.spring.dto.RentDTO;
import lk.ijse.spring.service.RentService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/addRent")
@CrossOrigin
public class RentController {
    @Autowired
    RentService service;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping()
    public ResponseUtil saveBooking(@RequestBody RentDTO dto){
        service.bookingCar(dto);
        System.out.println(dto);
        return new ResponseUtil("200","Admin added",dto);
    }

    //    @PostMapping(path = "/addBooking", consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
//    public ResponseUtil saveBooking(RentDTO dto, @RequestPart("imgBankSlip") MultipartFile file1) {
//
//        try {
//            String projectPath = new File(this.getClass().getProtectionDomain().getCodeSource().getLocation().toURI()).getParentFile().getParentFile().getAbsolutePath();
//            File uploadsDir = new File(projectPath + "/uploads");
//            uploadsDir.mkdir();
//            file1.transferTo(new File(uploadsDir.getAbsolutePath() + "/" + file1.getOriginalFilename()));
//
//            dto.setBankSlip("uploads/" + file1.getOriginalFilename());
//            service.bookingCar(dto);
//
//        }catch (IOException | URISyntaxException e){
//            return new ResponseUtil("Ok", "Successfully Saved", dto);
//
//        }
//        return new ResponseUtil("Ok", "Successfully Saved", dto);
//
//    }
    @GetMapping
    public ResponseUtil getAllRentRequest(){
        List<RentDTO> allRentRequest = service.rentRequest();
        return new ResponseUtil("Ok","ok",allRentRequest);
    }
}
