import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import CrearPlan from '../components/CrearPlan';
import TituloCrP from '../components/TituloCrP';

export const PlanCrear = () =>{
    return(
        <div className='plan-crear'>
            <Header />
            <ContenedorPantalla />
            <TituloCrP />           
            <CrearPlan />
            <Footer />
        </div>
    );
};