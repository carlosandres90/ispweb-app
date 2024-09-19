import React from 'react';
import Login from '../components/Login';
import ContenedorPantalla from '../components/ContenedorPantallas';

export const Inicio = () =>{
    return(
        <div className='inicio'>
            <Login />
            <ContenedorPantalla />
        </div>
    );
};