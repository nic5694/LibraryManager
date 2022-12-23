package librarymanager.librarymanager.response;


import librarymanager.librarymanager.entity.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AddressResponse {
    private long id;
    private String street;
    private String city;
    private String province;
    private String country;
    private String postalCode;

    public AddressResponse(Address address){
        id = address.getId();
        street = address.getStreet();
        city = address.getCity();
        postalCode = address.getPostalCode();
        province = address.getProvince();
        country = address.getCountry();
    }
}
