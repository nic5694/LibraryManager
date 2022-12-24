/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
            library: library
        }        
        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
        event.target[3].checked = false;
            axios.post("http://localhost:8080/api/libraries/" + libraryId + "/books", book)
                .then(response => {
                    added();
                })
                .catch(error => {
                    console.log(error);
                    failed();
                })
            }
    const added = () => toast.success("Successfully Added Book to the library");
    const failed = () => toast.error("Failed to Add Book to the library",);
    return(
        <div className="addBookContainer">
            <NavBar />
            <div className="addBookHeader">
                <h1 className="titles">Add Book</h1>
            </div>
            <div className="formContainer">
            <form onSubmit={PostBook}>
                <div className="formChildContainer">
                <div className="formRow">
                    <div className="formField">
                        <label className="labelStyle">Title:</label>
                <input type="text" required={true} name="title" placeholder="Book Title" />
                </div>
                <div className="formField">
                    <label className="labelStyle">Author:</label>
                <input type="text" required={true} placeholder="Author" />
                </div>
                </div>
                <div className="formRow">
                    <div className="formField">
                        <label className="labelStyle">ISBN:</label>
                <input type="text" required={true} placeholder="ISBN" />
                </div>
                <div className="formField">
                <label className="labelStyle">Available:</label>
                <input type="checkbox" name="available"/>
                </div>
                </div>
                <div className="formRow">
                <div className="formField">
                <button type="submit">Add Book</button>
                </div>
                </div>
                </div>
            </form>
            </div>
            
        </div>
    )
}
export default AddBook;