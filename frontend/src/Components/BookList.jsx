import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";


/*
 <Form><input onChange={handleChange} placeholder={"Search for a book"} type={text} name="query"/></Form>


 const handleChange = {(event) => {
        let query = event.target.value;
        axios.get(`http://localhost:8080/api/libraries/${id}/books/search/query?query=${query}`)
        .then(response => {

        })
      }}
*/



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
                        <div className="bookLink" key={item.id}>
                            <Link className="link" to={`/EditBook/${item.id}`}>
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