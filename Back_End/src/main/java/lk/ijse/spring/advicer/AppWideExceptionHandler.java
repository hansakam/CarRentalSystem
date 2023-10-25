/**
 * @author :Hansaka Malshan
 * created 10/26/2023---4:10 AM
 */
package lk.ijse.spring.advicer;

import lk.ijse.spring.util.ResPonseUtil;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@CrossOrigin
public class AppWideExceptionHandler {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler({RuntimeException.class})
    public ResPonseUtil handleExeception(RuntimeException e){
        return new ResPonseUtil("error",e.getMessage(),"");

    }
}
