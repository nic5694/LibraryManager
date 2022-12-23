import axios from "axios";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";
function BookList (props) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    useEffect(() => {
        const fetchBooks = async () => {
          setLoading(true);
          try {
            const response = await axios.get(`http://localhost:8080/api/books?libraryId=${props.libraryId}`);
            setBooks(response.data);
          } catch (error) {
            setError(error);
          }
          setLoading(false);
        };
    
        fetchBooks();
      }, [props.libraryId]);
      
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }
    return (
        <div className="bookListContainer">
            <div className="bookItemContainer">
                {books.map((item) => {
                    return <BookItem 
                    key={item} 
                    item={item} 
                    />
                })}
            </div>
        </div>
    )
}
export default BookList;