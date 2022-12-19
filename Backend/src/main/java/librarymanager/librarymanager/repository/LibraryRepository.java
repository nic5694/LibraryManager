package librarymanager.librarymanager.repository;

import librarymanager.librarymanager.entity.Library;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LibraryRepository extends CrudRepository<Library, Long> {

}
