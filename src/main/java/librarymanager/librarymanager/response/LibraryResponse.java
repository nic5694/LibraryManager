package librarymanager.librarymanager.response;

import librarymanager.librarymanager.entity.Library;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LibraryResponse {
    private String name;
    private String phone;
    private AddressResponse address;

    public LibraryResponse(Library library){
        name = library.getName();
        phone = library.getPhone();
        address = new AddressResponse(library.getAddress());
    }
}
