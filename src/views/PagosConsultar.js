import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import BusquedaUsuario from '../components/BusquedaUsuario';

import ConsultarPago from '../components/ConsultarPagos';
import TituloCnP from '../components/TituloCnP';

export const PagosConsultar = () =>{

    const [selectedUser, setSelectedUser] = useState(null);

    return(
        <div className='pago-consultar'>
            <Header />
            <ContenedorPantalla />
            <TituloCnP />
            <BusquedaUsuario setSelectedUser={setSelectedUser}/>
            {selectedUser && <ConsultarPago usuario={selectedUser} />}
            <Footer />
        </div>
    );
};