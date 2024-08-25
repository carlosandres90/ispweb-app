import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import BusquedaUsuario from '../components/BusquedaUsuario';

import RegistrarPago from '../components/RegistrarPago';
import TituloRp from '../components/TituloRp';

export const PagoRegistrar = () =>{

    const [selectedUser, setSelectedUser] = useState(null);

    return(
        <div className='pago-registrar'>
            <Header />
            <ContenedorPantalla />
            <TituloRp />
            <BusquedaUsuario setSelectedUser={setSelectedUser}/>
            {selectedUser && <RegistrarPago usuario={selectedUser} />}
            <Footer />
        </div>
    );
};