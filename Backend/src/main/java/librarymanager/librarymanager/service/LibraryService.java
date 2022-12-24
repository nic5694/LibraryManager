package librarymanager.librarymanager.service;

import librarymanager.librarymanager.entity.Book;
import librarymanager.librarymanager.entity.Library;
import librarymanager.librarymanager.exception.RessourceNotFoundException;
import librarymanager.librarymanager.repository.BookRepository;
import librarymanager.librarymanager.repository.LibraryRepository;
import librarymanager.librarymanager.request.BookRequest;
import librarymanager.librarymanager.request.LibraryRequest;
import librarymanager.librarymanager.response.LibraryResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LibraryService {
    @Autowired
    LibraryRepository libraryRepository;

    @Autowired
    BookRepository bookRepository;
    public Book addBookToLibrary(long libraryId, BookRequest bookRequest){
         Library library = libraryRepository.findById(libraryId).orElseThrow(()-> new RessourceNotFoundException("Library id not found"));
         Book bookToBeAdded = new Book(bookRequest);
         bookToBeAdded.setLibrary(library);
         return bookRepository.save(bookToBeAdded);
    }
    public List<Book> getAllBooks(long libraryId){
        return bookRepository.findByLibraryId(libraryId);
    }

    public LibraryResponse addLibrary(LibraryRequest libraryRequest){
        Library library = new Library(libraryRequest);
        libraryRepository.save(library);
        return new LibraryResponse(library);
    }

    public List<Library> getAllLibraries(){
        ArrayList<Library> libraryList = new ArrayList<>();
        libraryRepository.findAll().forEach(libraryList::add);
        return libraryList;
    }

    public Library getLibrary(long libraryId){
        return libraryRepository.findById(libraryId).orElseThrow(()-> new RessourceNotFoundException("Library id not found"));
    }

    public void deleteLibraryById(long libraryId){
        if(libraryRepository.existsById(libraryId))
            libraryRepository.deleteById(libraryId);
        else
            throw new RessourceNotFoundException("Library id not found");
    }

}
