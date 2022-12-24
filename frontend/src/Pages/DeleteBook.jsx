import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function DeleteBook () {
  const [bookList, setBookList] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  const getAllbooks = () => {
    axios.get("http://localhost:8080/api/libraries/1/books")
      .then(response => {
        setBookList(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getAllbooks();
  }, []);

  const deleteBook = (bookId) => {
    console.log("delete called");
    console.log(bookId);
    axios.delete("http://localhost:8080/api/books/" + bookId)
      .then(response => {
        getAllbooks();
        success();
        window.location.href = "/";
      })
      .catch(error => {
        failed();
        console.log(error);
      })
  }

  const handleChange = (event) => {
    setSelectedId(event.target.value);
  }
  
  const success = () => {toast.success("Sucefully deleted book}", {position: toast.POSITION.TOP_RIGHT})};
  const failed = () => {toast.error("Failed to delete book", {position: toast.POSITION.TOP_RIGHT})};
  return (
    <div className="deleteBookContainer">
      <div className="deleteBookHeader">
        <h1>Delete Book</h1>
      </div>
      <select name="bookList" id="bookList" value={selectedId} onChange={handleChange}>
        {bookList.map((item) => {
          return (
            <option value={item.id}>
              {"Title: " + item.title + " Author: " + item.author + " ISBN: " + item.isbn}
            </option>
          );
        })}
      </select>
      <button type="submit" onClick={() => deleteBook(1)}>Delete Book</button>
      <ToastContainer />
    </div>
  )
}
export default DeleteBook;