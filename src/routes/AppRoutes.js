import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "../views/Principal";
import { ClientesCrear } from "../views/ClientesCrear";
import { ClientesConsultar } from "../views/ClientesConsultar";
import { UsuariosCrear } from "../views/UsuariosCrear";
import { UsuariosActualizar } from "../views/UsuariosActualizar";
import { PlanCrear } from "../views/PlanCrear";
import { PagoRegistrar } from "../views/PagoRegistrar";
import { PagosConsultar } from "../views/PagosConsultar";
import { PlanActualizar } from "../views/PlanActualizar";
import { Inicio } from "../views/Inicio";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />}/>
                <Route path="/principal" element={<Principal />}/>
                <Route path="/clientes-crear" element={<ClientesCrear />}/>
                <Route path="/clientes-consultar" element={<ClientesConsultar />}/>
                <Route path="/usuarios-crear" element={<UsuariosCrear />}/>
                <Route path="/usuarios-actualizar" element={<UsuariosActualizar />}/>
                <Route path="/plan-crear" element={<PlanCrear />}/>
                <Route path="/pago-registrar" element={<PagoRegistrar/>}/>
                <Route path="/pago-consultar" element={<PagosConsultar/>}/>
                <Route path="/plan-actualizar" element={<PlanActualizar/>}/>
            </Routes>
        </BrowserRouter>
    );
};