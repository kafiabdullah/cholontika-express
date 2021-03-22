import React, { useContext } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import './Header.css'
import firebase from '../../config/firebase';
import Home from '../Home/Home';


const Header = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className='header-nav'>
            <Navbar expand="lg" className="container">
                <Navbar.Brand href="/" className='nav-name'>Cholontika Express</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" component={Home}>Home</Nav.Link>
                        <Nav.Link href="/destination/:destName">Destination</Nav.Link>
                        <Nav.Link href="">Blog</Nav.Link>
                        <Nav.Link href="">Contact</Nav.Link>

                        {currentUser &&
                            <>
                                <Button>{currentUser.displayName}</Button>
                                <Button className="ml-2" color="inherit" onClick={() => firebase.auth().signOut()}>Logout</Button>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;