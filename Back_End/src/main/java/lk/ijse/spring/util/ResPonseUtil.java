/**
 * @author :Hansaka Malshan
 * created 10/26/2023---4:12 AM
 */
package lk.ijse.spring.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class ResPonseUtil {
    private String code;
    private String message;
    private Object data;
}
