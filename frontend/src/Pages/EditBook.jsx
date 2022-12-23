import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
function EditBook() {
    const {Id} = useParams();
    //const id = this.props.match.params.Id;
    const [book, setBook] = useState([]);
    const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        available: null,
        isbn: ''
    });

    const getBook = () => {
        axios.get("http://localhost:8080/api/books/" + Id)
        .then((response) => {
            setBook(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const putBook = () => {
        axios.put("http://localhost:8080/api/books/" + Id)
        .then((response) => {
            if(response.status === 201)
                added();
        })
        .catch((error) => {
            failed();
        })
    }
    useEffect(() => {
        getBook();
    }, []);
    useEffect(() => {
        setFormValues({
            title: book.title,
            author: book.author,
            available: book.available, //see what this takes like to pass to the chekcbox for the vlaue
            isbn: book.isbn
        })
    }, [book]);
    function handleChange(event) {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value,
        });
      }
    const added = () => toast.success("Succefully Updated the Book!");
    const failed = () => toast.error("Failed to Add Book!");
    return(
        <div>
            <form onSubmit={putBook}>
                <input type="text" value={formValues.title} onChange={handleChange} />
                <input type="text" value={formValues.author} onChange={handleChange} />
                <input type="text" value={formValues.isbn} onChange={handleChange} />
                <input type="checkbox" value={formValues.available} onChange={handleChange} name="available"/>
                <label for="available">Available</label>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}
export default EditBook;