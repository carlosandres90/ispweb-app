import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorInicio from '../components/ContenedorInicio';

export const Principal = () =>{
    return(
        <div className='principal'>
            <Header />
            <ContenedorInicio />
            <Footer />
        </div>
    );
};