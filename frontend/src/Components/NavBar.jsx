import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { Form } from "react-router-dom";
import App from '/Users/nicho/Documents/GitHub/LibraryManager/frontend/src/App.css'
function NavBar(props) {
    let library = props.library;
    let id = props.id;
    let showAddLinks = props.showAddLinks;
    console.log(id)
    const deleteLibrary = () => {
        axios.delete("http://localhost:8080/api/libraries/"  + id)
        .then(response => {
            console.log(response)
            window.location.href = "/";
            sucessfullyDeleted();
        })
        .catch(error => {
            console.log(error)
            failedToDelete();
        })
    }
    const deleteBook = () => {
        axios.delete("http://localhost:8080/api/books/" + id)
          .then(response => {
            window.history.back();
            console.log(response)
            sucessfullyDeleted();
          })
          .catch(error => {
            console.log(error);
            failedToDelete();
          })
      }
      const determineNav = () => {
        if(showAddLinks && library)
        return <Nav.Link href="/AddLibrary">Add Library</Nav.Link>
        else if(id !== "" && library)
        return (<><Nav.Link href={`/AddBook/${id}`}>Add Book</Nav.Link><Button onClick={deleteLibrary}>Delete Library</Button></>);
        else if(id !== "" && !library && showAddLinks)
        return <Button onClick={deleteBook}>Delete Book</Button>
        else return null
      }
      
      const sucessfullyDeleted = toast.success(`Successfully deleted ${library ? "library" : "book"}`, {position: "top-right"});
      const failedToDelete = toast.error(`Failed to delete ${library ? "library" : "book"}`, {position: "top-right"});
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
    <ToastContainer />
        </div>
      );
}
export default NavBar;