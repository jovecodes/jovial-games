import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Navbar.css'

function JovialNavbar() {
    return (
        <Navbar expand="lg" className="JovialNavbar">
            <Container>
                <Navbar.Brand href="/#" className="JovialNavbar">Jovial</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#/games" className="JovialNavbar">Games</Nav.Link>
                        <Nav.Link href="/#/engine" className="JovialNavbar">Engine</Nav.Link>
                        <Nav.Link href="/#/music" className="JovialNavbar">Music</Nav.Link>
                        <Nav.Link href="/#/jove" className="JovialNavbar">Jove</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default JovialNavbar;
