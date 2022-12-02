package librarymanager.librarymanager.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Books")
@Setter
@Getter
public class Book {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String author;
    @Column(nullable = false)
    private String isbn;
    @Column(nullable = false)
    private boolean available;
}
