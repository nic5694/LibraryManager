/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "../Components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import BookList from "../Components/BookList";
import { toast } from 'react-toastify';
function Home() {
  const [library, setLibrary] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const failed = (argument) => toast.error(argument);
  const getLibraryList = () => {
    axios
      .get("http://localhost:8080/api/libraries")
      .then((response) => {
        setLibrary(response.data);
      })
      .catch((error) => {
        failed(error.message)
      });
  };


  const libraryNavBar = () => {
    if(selectedId === ""){
      return (
        <NavBar bg="light" library={true} showAddLinks={true} id={selectedId} />
      );
    } else {
    return <NavBar bg="light" library={true} showAddLinks={false} id={selectedId} />
    }
  } 
  useEffect(() => {
    getLibraryList();
    setTitle("Welcome Library Admin")
  }, [])

  const showBooks = () => {
    if(selectedId !== ""){
    return (
      <BookList libraryId={selectedId} />
    );
  }
  };

  useEffect(() => {
    showBooks();
    libraryNavBar();
    if(selectedId !== "")
      setTitle("Select a book")
  }, [selectedId, libraryNavBar]);

  const handleChange = (event) => {
    setSelectedId(event.target.value);
    setShow(true);
  };
    return (
        <div>
          {libraryNavBar()}
          <div className="header">
            <h1 className="titles">{title}</h1>

            <select className="libraryListDropdown" name="libraryList" id="libraryList" onChange={handleChange}>
              <option value="">Select Library</option>
              {library.map((item) => {
                return <option key={item.id} value={item.id}>{"Library : " + item.name}</option>;
              })}
            </select>
          </div>
          {show && showBooks()}
        </div>
      );
  
}

export default Home;
