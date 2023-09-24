import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'

function JovialNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="home">Jovial</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="games">Games</Nav.Link>
                        <Nav.Link href="engine">Engine</Nav.Link>
                        <Nav.Link href="music">Music</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function App() {
    return (
        <div className="App">
            <JovialNavbar />
            <header className="App-header">
                <h1>
                    Jovial Games
                </h1>
            </header>
        </div>
    );
}

export default App;
