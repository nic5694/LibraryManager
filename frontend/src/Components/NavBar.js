import { Navbar, Container, NavLink } from "react-bootstrap";
function NavBar() {
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Library Center</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;