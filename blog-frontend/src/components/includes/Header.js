import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link, useHistory} from "react-router-dom";

const Header = () => {
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('user-info'));
    function logout() {
        localStorage.clear()
        history.push('/register')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>My Blog</Navbar.Brand>
                <Nav className="mr-auto nav-bar-wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/addblog">Add Blog</Link>
                                <Link to="/bloglist">Blog List</Link>
                            

                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                                <Link to="/blogs">All article</Link>
                                <Link to="/search">Search Article</Link>
                            </>
                    }
                </Nav>
                {
                    localStorage.getItem('user-info') ?
                        <Nav className="pr-5">
                            <NavDropdown title={user && user.name} className="pr-5">
                                <NavDropdown.Item onClick={logout} >Logout</NavDropdown.Item>
                                <NavDropdown.Item><Link to={'/profile/'+user.id}>Profile</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }

            </Navbar>
        </div>
    );
};

export default Header;
