import React from 'react';
import {Container, Navbar} from "react-bootstrap";
import {HeaderNav} from "../header-nav/header-nav";

export const MyHeader = () => {
    return (
        <Navbar bg="dark" variant={"dark"} expand="xxl">
            <Container>
                <Navbar.Brand href="/">Mitra</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <HeaderNav/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
