package librarymanager.librarymanager.entity;

import jakarta.persistence.*;
import librarymanager.librarymanager.request.BookRequest;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
/*
TODO make the boolean Boolean and not null so it can be validated
 */
@Entity
@Table(name = "Books")
@Setter
@Getter
@NoArgsConstructor
public class Book {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String author;
    @Column(nullable = false)
    private String isbn;
    @Column(nullable = false)
    private Boolean available;
    @ManyToOne(optional = false, cascade = CascadeType.ALL)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "library_id")
    private Library library;

    public Book(BookRequest bookRequest){
        title = bookRequest.getTitle();
        author = bookRequest.getAuthor();
        isbn = bookRequest.getIsbn();
        available = bookRequest.getAvailable();
        library = new Library(bookRequest.getLibrary());
    }
}
