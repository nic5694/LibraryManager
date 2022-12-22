import axios from "axios";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";
function BookList (props) {
    const [bookList, setBookList] = useState([]);

    const getBookListFromApi = () => {
        let libraryId = props.libraryId;
        axios.get("http://localhost:8080/api/" + libraryId + "/books")
            .then(response => {
                setBookList(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    };
    useEffect(() => {getBookListFromApi()}, []);
    return (
        <div className="bookListContainer">
            <div className="bookItemContainer">
                {bookList.map((item) => {
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