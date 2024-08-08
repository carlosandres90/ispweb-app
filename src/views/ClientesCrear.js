import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import CrearClientes from '../components/CrearClientes';
import TituloCrC from '../components/TituloCrC';

export const ClientesCrear = () =>{
    return(
        <div className='clientes-crear'>
            <Header />
            <ContenedorPantalla />
            <TituloCrC />
            <CrearClientes />
            <Footer />
        </div>
    );
};