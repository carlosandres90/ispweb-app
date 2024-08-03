import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import DatosClientes from '../components/DatosClientes';
import Titulo from '../components/TituloPantallas';
import BusquedaCedula from '../components/BusquedaCedula';


export const ClientesConsultar = () =>{
    return(
        <div className='clientes-consultar'>
            <Header />
            <ContenedorPantalla />
            <Titulo />
            <DatosClientes />
            <BusquedaCedula />
            <Footer />
        </div>
    );
};