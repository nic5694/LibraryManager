package librarymanager.librarymanager.response;


import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String street;
    private String city;
    private String province;
    private String country;
    private String postalCode;

    public AddressResponse(Address address){
        street = address.getStreet();
        city = address.getCity();
        province = address.getProvince();
        country = address.getCountry();
        postalCode = address.getPostalCode();
    }
}
