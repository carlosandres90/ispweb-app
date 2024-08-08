import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import TituloAcU from '../components/TituloAcU';
import BusquedaUsuario from '../components/BusquedaUsuario';
import PlanContratado from '../components/PlanContratado';
import DatosClientesActualizar from '../components/DatosClientesActualizar';


export const UsuariosActualizar = () =>{

    return(
        <div className='clientes-consultar'>
            <Header />
            <ContenedorPantalla />
            <TituloAcU />
            <BusquedaUsuario />
            <DatosClientesActualizar />
            <PlanContratado />
            <Footer />
        </div>
    );
};