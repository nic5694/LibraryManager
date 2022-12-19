package librarymanager.librarymanager.service;

import librarymanager.librarymanager.entity.Book;
import librarymanager.librarymanager.exception.RessourceNotFoundException;
import librarymanager.librarymanager.repository.BookRepository;
import librarymanager.librarymanager.request.BookRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Book getBook(long bookId){
        return bookRepository.findById(bookId).orElseThrow(()-> new RessourceNotFoundException("Book id not found"));
    }
    public Book updateBook(long bookId, BookRequest bookRequest){
        if(bookRepository.existsById(bookId)){
            Book bookToBeAdded = new Book(bookRequest);
            bookToBeAdded.setId(bookId);
            return bookRepository.save(bookToBeAdded);
        }
        else{
            throw new RessourceNotFoundException("Book id not found");
        }
    }

    public void deleteBook(long bookId){
        if(bookRepository.existsById(bookId)){
            bookRepository.deleteById(bookId);
        }
        else {
            throw new RessourceNotFoundException("Book id not found");
        }
    }

    public List<Book> getAllBooks() {
        ArrayList<Book> books = new ArrayList<>();
        bookRepository.findAll().forEach(books::add);
        return books;
    }
}
