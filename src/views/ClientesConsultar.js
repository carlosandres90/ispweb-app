import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import DatosClientes from '../components/DatosClientes';
import TituloCnC from '../components/TituloCnC';
import BusquedaCedula from '../components/BusquedaCedula';


export const ClientesConsultar = () =>{
    return(
        <div className='clientes-consultar'>
            <Header />
            <ContenedorPantalla />
            <TituloCnC />
            <DatosClientes />
            <BusquedaCedula />
            <Footer />
        </div>
    );
};