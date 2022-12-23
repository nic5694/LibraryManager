import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
function AddBook(props){
    const [libraries, setLibraries] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const loadLibraries = () => {
        axios.get("http://localhost:8080/api/libraries")
            .then(response => {
                setLibraries(response.data);
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
            library: libraries[selectedId]//need to check w address
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
    const handleChange = (event) => {
        setSelectedId(event.target.value);
      };
    const added = () => toast.success("Succefully Added Book!");
    const failed = () => toast.error("Failed to Add Book!");
    return(
        <div className="addBookContainer">
            <NavBar />
            <div className="addBookHeader">
                <h1>Add Book</h1>
                <select name="libraryList" id="libraryList" onChange={handleChange}>
                <option value="">Select Library</option>
              {libraries.map((item) => { return <option value={item.id}>{"Library : " + item.name}</option>;})}
            </select>
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