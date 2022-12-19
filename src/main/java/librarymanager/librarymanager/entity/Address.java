package librarymanager.librarymanager.entity;

import jakarta.persistence.*;
import librarymanager.librarymanager.request.AddressRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "Adresses")
@Setter
@Getter
@NoArgsConstructor
public class Address {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String street;
    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private String province;
    @Column(name = "postal_code", nullable = false)
    private String postalCode;

    @Column(nullable = false)
    private String country;

    public Address(AddressRequest addressRequest){
        street = addressRequest.getStreet();
        city = addressRequest.getCity();
        province = addressRequest.getProvince();
        postalCode = addressRequest.getPostalCode();
        country = addressRequest.getCountry();
    }
}
