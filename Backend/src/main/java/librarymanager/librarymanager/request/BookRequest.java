package librarymanager.librarymanager.request;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BookRequest {
    @NotNull
    private long id;
    @NotBlank
    private String title;
    @NotBlank
    private String Author;
    @NotBlank
    private String isbn;
    @NotNull
    private Boolean available;
    @Valid @NotNull
    private LibraryRequest library;
}
