import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
function AddBook(){
    const {libraryId} = useParams();
    const [library, setLibrary] = useState([]);
    const loadLibraries = () => {
        axios.get("http://localhost:8080/api/libraries/" + libraryId)
            .then(response => {
                setLibrary(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        loadLibraries();
    }, [])
    const PostBook = (event) => {
        event.preventDefault();
        const book = {
            title: event.target[0].value,
            author: event.target[1].value,
            isbn: event.target[2].value,
            available: event.target[3].checked,
            library: library[0]
            }
            axios.post("http://localhost:8080/api/books", book)
                .then(response => {
                    console.log(response.data);
                    added();
                })
                .catch(error => {
                    console.log(error);
                    failed();
                })
            }
    const added = () => toast.success("Succefully Added Book!");
    const failed = () => toast.error("Failed to Add Book!");
    return(
        <div className="addBookContainer">
            <NavBar />
            <div className="addBookHeader">
                <h1>Add Book</h1>
            </div>
            <form onSubmit={PostBook}>
                <input type="text" placeholder="Book Title" />
                <input type="text" placeholder="Author" />
                <input type="text" placeholder="ISBN" />
                <input type="checkbox" name="available"/>
                <label for="available">Available</label>
                <button type="submit">Add Book</button>
            </form>
        </div>
    )
}
export default AddBook;