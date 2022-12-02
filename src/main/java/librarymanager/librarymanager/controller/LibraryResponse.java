package librarymanager.librarymanager.controller;

import jakarta.validation.Valid;
import librarymanager.librarymanager.request.BookRequest;
import librarymanager.librarymanager.response.BookResponse;
import librarymanager.librarymanager.service.LibraryService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/libraries")
public class LibraryResponse {
    LibraryService libraryService;
    @PostMapping("/{libraryId}/books")
    public BookResponse addBook(@PathVariable long libraryId, @Valid @RequestBody BookRequest bookRequest){
        return new BookResponse(libraryService.addBookToLibrary(libraryId, bookRequest));
    }
}
