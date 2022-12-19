package librarymanager.librarymanager.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AddressRequest {
    @NotBlank
    private String street;
    @NotBlank
    private String city;
    @NotBlank
    private String province;
    @NotBlank
    private String postalCode;
    @NotBlank
    private String country;
}
