package librarymanager.librarymanager.service;

import librarymanager.librarymanager.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryService {
    @Autowired
    LibraryRepository libraryRepository;
}
