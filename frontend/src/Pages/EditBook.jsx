import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EditBook() {
    const {Id} = useParams();
    //const id = this.props.match.params.Id;
    const [book, setBook] = useState([]);
    const getBook = () => {
        axios.get("http://localhost:8080/api/books/" + Id)
        .then((response) => {
            setBook(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    useEffect(() => {
        getBook();
    }, []);
    return(
        <p>{book.title}</p>
    )
}
export default EditBook;