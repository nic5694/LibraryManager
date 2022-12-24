/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
function NavBar(props) {
    let library = props.library;
    let id = props.id;
    let showAddLinks = props.showAddLinks;
    const deleteLibrarySucess = () => toast.success("Successfully deleted the library",{
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
    const deleteBookSuccess = () => toast.success("Successfully deleted the book",{
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    const deleteBookFail = () => toast.error("Failed to deleted the book",{
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
    const deleteLibraryFail = () => toast.error("Failed to deleted the book",{
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    });
   

    const deleteLibrary = () => {
      console.log("deletelibrary call")
        axios.delete("http://localhost:8080/api/libraries/"  + id)
        .then(response => {
          deleteLibrarySucess();
        })
        .catch(error => {
            deleteLibraryFail();
        })
    }
    const deleteBook = () => {
        axios.delete("http://localhost:8080/api/books/" + id)
          .then(response => {
            deleteBookSuccess();
          })
          .catch(error => {
            deleteBookFail();
          })
      }
      const determineNav = () => {
        if(showAddLinks && library)
        return <Nav.Link href="/AddLibrary">Add Library</Nav.Link>
        else if(id !== "" && library)
        return <><Nav.Link href={`/AddBook/${id}`}>Add Book</Nav.Link><Button onClick={deleteLibrary}>Delete Library</Button></>
        else if(id !== "" && !library && showAddLinks)
        return <Button onClick={deleteBook}>Delete Book</Button>
        else return null
      }
      
     
     
      useEffect(() => {
        determineNav();
      }, [library, id])
      return (
        <div>
    <Navbar bg="light" expand="lg">

      <Container>
        <Navbar.Brand href="/">Library Center</Navbar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
       
        {determineNav()}
      </Container>
    </Navbar>
 
        </div>
      );
}
export default NavBar;