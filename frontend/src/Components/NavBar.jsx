import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
function NavBar(props) {
    const [buttons, setButtons] = useState([]);
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Library Center</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                    {buttons.map((item) => {
                         return item
                         })}
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;