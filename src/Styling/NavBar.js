import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;

        &:hover{
            color: white;
        }
    }
`;

export default function NavBar() {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href='/todo'>Todo</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
        
            // <NavBar expand="lg">
            //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
            //     <Navbar.Collapse id="basic-navbar-nav">
            //         <Nav className="mr-auto">
            //             <Nav.Item>
            //                 <Nav.Link href="/todo">Todo</Nav.Link>
            //             </Nav.Item>
            //             <Nav.Item>
            //                 <Nav.Link href="/about">About</Nav.Link>
            //             </Nav.Item>
            //         </Nav>
            //     </Navbar.Collapse>
            // </NavBar>
    )
}
