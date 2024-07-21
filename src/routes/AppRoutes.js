import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "../views/Principal";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />}/>
            </Routes>
        </BrowserRouter>
    );
};