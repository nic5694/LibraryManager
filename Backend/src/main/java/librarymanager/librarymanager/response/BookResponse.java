package librarymanager.librarymanager.response;

import librarymanager.librarymanager.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BookResponse {
    private String title;
    private String author;
    private String isbn;
    private boolean available;
    private LibraryResponse library;

    public BookResponse(Book book){
        title = book.getTitle();
        author = book.getAuthor();
        isbn = book.getIsbn();
        available = book.getAvailable();
        library = new LibraryResponse(book.getLibrary());
    }
}
