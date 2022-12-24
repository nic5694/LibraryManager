import NavBar from "../Components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import BookList from "../Components/BookList";
import DeleteBtn from "../Components/DeleteBtn";

function Home() {
  const [library, setLibrary] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [show, setShow] = useState(false);

  const getLibraryList = () => {
    axios
      .get("http://localhost:8080/api/libraries")
      .then((response) => {
        setLibrary(response.data);
      })
      .catch((error) => {
        console.log(error);
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
  }, [selectedId]);//needs to refresh */

  const handleChange = (event) => {
    setSelectedId(event.target.value);
    setShow(true);
  };
    return (
        <div>
          {libraryNavBar()}
          <div className="header">
            <h1>Welcome Library Admin</h1>
            <select name="libraryList" id="libraryList" onChange={handleChange}>
              <option value="">Select Library</option>
              {library.map((item) => {
                return <option value={item.id}>{"Library : " + item.name}</option>;
              })}
            </select>
          </div>
          {show && showBooks()}
        </div>
      );
  
}

export default Home;
