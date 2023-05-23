import React from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

export const HeaderNav = () => {
    return (
        <Nav>
            <Link to={'/me'} className={'nav-link'}>
                Обо мне
            </Link>
            <Link to={'/'} className={'nav-link'}>
                Все посты
            </Link>
        </Nav>
    );
};
