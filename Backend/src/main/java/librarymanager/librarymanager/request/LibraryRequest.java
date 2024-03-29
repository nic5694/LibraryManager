package librarymanager.librarymanager.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LibraryRequest {
    @NotNull
    private long id;
    @NotBlank
    private String name;
    @NotBlank
    private String phone;
    @NotNull @Valid
    private AddressRequest address;
}
