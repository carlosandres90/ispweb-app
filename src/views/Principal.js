import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorInicio from '../components/ContenedorInicio';
import Bienvenidos from '../components/Bienvenidos';

export const Principal = () =>{
    return(
        <div className='principal'>
            <Header />
            <Bienvenidos />
            <ContenedorInicio />
            <Footer />
        </div>
    );
};