import { Container, Nav } from "react-bootstrap";

function Navbar() {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Library Manager</Navbar.Brand>
            </Container>
        </Navbar>
    )
}