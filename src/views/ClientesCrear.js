import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import CrearClientes from '../components/CrearClientes';

export const ClientesCrear = () =>{
    return(
        <div className='clientes-crear'>
            <Header />
            <ContenedorPantalla />
            <CrearClientes />
            <Footer />
        </div>
    );
};