import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';


export const ClientesConsultar = () =>{
    return(
        <div className='clientes-consultar'>
            <Header />
            <ContenedorPantalla />
            <Footer />
        </div>
    );
};