package librarymanager.librarymanager.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "libraries")
@Setter
@Getter
public class Library {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String phone;
    @OneToOne(cascade = CascadeType.ALL)
    private Address address;
    }
