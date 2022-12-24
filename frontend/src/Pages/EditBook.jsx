import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import DeleteBtn from "../Components/DeleteBtn";
import NavBar from "../Components/NavBar";
function EditBook() {
    const {Id} = useParams();
    const [book, setBook] = useState([]);
    const [formValues, setFormValues] = useState({
        title: '',
        author: '',
        available: null,
        isbn: '',
        library: {}
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
    const handleUpdate = (event) => {
        event.preventDefault();
        
        putBook();
    }
    const putBook = () => {
        console.log(formValues);
        axios.put("http://localhost:8080/api/books/" + Id, formValues)
        .then((response) => {
            if(response.status === 200)
                updated();
        })
        .catch((error) => {
            failed();
        })
    }
    useEffect(() => {
        getBook();
        bookNavBar();
    }, []);
    useEffect(() => {
        setFormValues({
            title: book.title,
            author: book.author,
            available: book.available, //see what this takes like to pass to the chekcbox for the value also allow modify on the values its being annoying
            isbn: book.isbn,
            library: book.library 
    })
    }, [book]);
    function handleChange(event) {
        setFormValues({
          ...formValues,
          [event.target.name]: event.target.value
        });
      }
    const updated = () => toast.success("Succefully Updated the Book!");
    const failed = () => toast.error("Failed to Add Book!");
    const bookNavBar = () => {
        if(Id === ""){
          return (
            <NavBar bg="light" library={false} id={Id} />
          );
        } else {
        return <NavBar bg="light" library={false} id={Id} />
        }
      } 
    return(
        <div>
            {bookNavBar()}
            <form onSubmit={handleUpdate}>
                <label for="title">Title</label>
                <input type="text" value={formValues.title} name="Title" onChange={handleChange} />
                <label for="author">Author</label>
                <input type="text" value={formValues.author} name="Author" onChange={handleChange}/>
                <label for="isbn">ISBN</label>
                <input type="text" value={formValues.isbn} name="ISBN" onChange={handleChange}/>
                <label for="available">Available</label>
                <input type="checkbox" value={formValues.available} onChange={handleChange}name="available"/>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default EditBook;