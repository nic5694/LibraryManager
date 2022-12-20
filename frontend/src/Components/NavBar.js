import { Container, Nav } from "react-bootstrap";

function Navbar() {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Library Center</Navbar.Brand>
            </Container>
        </Navbar>
    )
}
export default Navbar;