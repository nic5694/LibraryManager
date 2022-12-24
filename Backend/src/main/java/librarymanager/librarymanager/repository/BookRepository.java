package librarymanager.librarymanager.repository;

import librarymanager.librarymanager.entity.Book;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    List<Book> findByLibraryId(long id);



    @Query(value = "SELECT b FROM Book b WHERE b.library.id = :libraryId AND (b.title LIKE %:query% OR b.author " +
            "LIKE %:query% OR b.isbn LIKE %:query%)")
    List<Book> findAllByLibraryIdAndSearchQuery(@Param("libraryId") Long libraryId, @Param("query") String query);
}
    // void deleteBookById(long id);


    // findByLibraryNameLike(String name);
    //q: method that gets me all books from a library that has a name like something
    //a:
    // List<Book> findByLibraryIdAAndBookLike(long libraryId, String name);

    //q: method that gets me all books from a library that has a name like something
    //a:



