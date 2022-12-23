import { Navbar, Container, Nav } from "react-bootstrap";
function NavBar() {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/Home">Library Center</Navbar.Brand>
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/AddBook">Add Book</Nav.Link>
                    <Nav.Link href="/DeleteBook">Delete Book</Nav.Link>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;