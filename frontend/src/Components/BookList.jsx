import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
function BookList (props) {
    const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
    useEffect(() => {
        const fetchBooks = () => {
         axios.get("http://localhost:8080/api/libraries/" + props.libraryId + "/books")
         .then ((response) => {
            setBooks(response.data);
         }).catch ((error) => {
            setError(error);
          })
        }
        fetchBooks();
      }, [props.libraryId]);
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
    return (
        <div className="bookListContainer">
            <div className="bookItemContainer">
                {books.map((item) => {
                    return(
                        <div key={item.id}>
                            <Link to={`/EditBook/${item.id}`}>
                                <BookItem 
                                key={item} 
                                item={item} 
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default BookList;