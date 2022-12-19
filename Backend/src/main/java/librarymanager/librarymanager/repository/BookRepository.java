package librarymanager.librarymanager.repository;

import librarymanager.librarymanager.entity.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
    List<Book> findByLibraryId(long id);


    // findByLibraryNameLike(String name);
    //q: method that gets me all books from a library that has a name like something
    //a:
    // List<Book> findByLibraryIdAAndBookLike(long libraryId, String name);

    //q: method that gets me all books from a library that has a name like something
    //a:


}
