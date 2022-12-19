package librarymanager.librarymanager.controller;

import jakarta.validation.Valid;
import librarymanager.librarymanager.request.BookRequest;
import librarymanager.librarymanager.response.BookResponse;
import librarymanager.librarymanager.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    private BookService bookService;

    //write me a method to get a specific book by id
    @RequestMapping("/{bookId}")
    public BookResponse getBook(@PathVariable long bookId){
        return new BookResponse(bookService.getBook(bookId));
    }
    @RequestMapping()
    public List<BookResponse> getAllBooks(){
        List<BookResponse> bookResponseList = new ArrayList<>();
        bookService.getAllBooks().forEach(book -> bookResponseList.add(new BookResponse(book)));
        return bookResponseList;
    }

    @PutMapping("/{bookId}")
    public BookResponse updateBook(@PathVariable long bookId,@Valid @RequestBody BookRequest bookRequest){
        return new BookResponse(bookService.updateBook(bookId, bookRequest));
    }

    @DeleteMapping("/{bookId}")
    public void deleteBook(@PathVariable long bookId){
        bookService.deleteBook(bookId);
    }



}
