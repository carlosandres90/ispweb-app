import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import ActualizarPlan from '../components/ActualizarPlan';
import TituloAcPl from '../components/TituloAcPl';

export const PlanActualizar = () =>{
    return(
        <div className='plan-actualizar'>
            <Header />
            <ContenedorPantalla />
            <TituloAcPl />           
            <ActualizarPlan />
            <Footer />
        </div>
    );
};