import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "../views/Principal";
import { ClientesCrear } from "../views/ClientesCrear";
import { ClientesConsultar } from "../views/ClientesConsultar";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />}/>
                <Route path="/clientes-crear" element={<ClientesCrear />}/>
                <Route path="/clientes-consultar" element={<ClientesConsultar />}/>
            </Routes>
        </BrowserRouter>
    );
};