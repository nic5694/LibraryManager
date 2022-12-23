package librarymanager.librarymanager.entity;

import jakarta.persistence.*;
import librarymanager.librarymanager.request.LibraryRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "Libraries")
@Setter
@Getter
@NoArgsConstructor
public class Library {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String phone;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;

    public Library(LibraryRequest libraryRequest){
        id = libraryRequest.getId();
        name = libraryRequest.getName();
        phone = libraryRequest.getPhone();
        address = new Address(libraryRequest.getAddress());
    }
    }

