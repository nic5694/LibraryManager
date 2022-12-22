import { Navbar, Container, Nav } from "react-bootstrap";
function NavBar() {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Library Center</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;