package librarymanager.librarymanager.controller;

import jakarta.validation.Valid;
import librarymanager.librarymanager.entity.Book;
import librarymanager.librarymanager.request.BookRequest;
import librarymanager.librarymanager.request.LibraryRequest;
import librarymanager.librarymanager.response.BookResponse;
import librarymanager.librarymanager.response.LibraryResponse;
import librarymanager.librarymanager.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/libraries")
public class LibraryController {
    @Autowired
    LibraryService libraryService;
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/{libraryId}/books")
    public BookResponse addBook(@PathVariable long libraryId, @Valid @RequestBody BookRequest bookRequest){
        return new BookResponse(libraryService.addBookToLibrary(libraryId, bookRequest));
    }
    @GetMapping("/{libraryId}/books")
    public List<BookResponse> getAllBooksFromLibrary(@PathVariable long libraryId){
        List<Book> books = libraryService.getAllBooks(libraryId);
        List<BookResponse> bookResponses = new ArrayList<>();
        for (Book book: books){
            bookResponses.add(new BookResponse(book));
        }
        return bookResponses;
    }

    @GetMapping()
    public List<LibraryResponse> getAllLibraries(){
        List<LibraryResponse> libraryResponses = new ArrayList<>();
        libraryService.getAllLibraries().forEach(library -> libraryResponses.add(new LibraryResponse(library)));
        return libraryResponses;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping()
    public LibraryResponse addLibrary(@Valid @RequestBody LibraryRequest libraryRequest){
        return libraryService.addLibrary(libraryRequest);
    }
}
