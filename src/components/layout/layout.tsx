import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../header/index.";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};
