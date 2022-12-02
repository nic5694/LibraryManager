package librarymanager.librarymanager.service;

import librarymanager.librarymanager.entity.Book;
import librarymanager.librarymanager.entity.Library;
import librarymanager.librarymanager.exception.RessourceNotFoundException;
import librarymanager.librarymanager.repository.BookRepository;
import librarymanager.librarymanager.repository.LibraryRepository;
import librarymanager.librarymanager.request.BookRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryService {
    @Autowired
    LibraryRepository libraryRepository;

    @Autowired
    BookRepository bookRepository;
    public Book addBookToLibrary(long libraryId, BookRequest bookRequest){
         Library library = libraryRepository.findById(libraryId).orElseThrow(()-> new RessourceNotFoundException("Library not found"));
         Book bookToBeAdded = new Book(bookRequest);
         bookToBeAdded.setLibrary(library);
         return bookRepository.save(bookToBeAdded);
    }
}
