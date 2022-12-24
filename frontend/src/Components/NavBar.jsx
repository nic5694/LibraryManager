import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
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
        })
        .catch(error => {
            console.log(error)
        })
    }
    const deleteBook = () => {
        axios.delete("http://localhost:8080/api/books/" + id)
          .then(response => {
            window.history.back();
            console.log(response)
          })
          .catch(error => {
            console.log(error);
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