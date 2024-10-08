import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import TituloAcU from '../components/TituloAcU';
import BusquedaUsuario from '../components/BusquedaUsuario';
import PlanContratado from '../components/PlanContratado';
import DatosClientesActualizar from '../components/DatosClientesActualizar';


export const UsuariosActualizar = () =>{

    const [selectedUser, setSelectedUser] = useState(null);

    return(
        <div className='clientes-consultar'>
            <Header />
            <ContenedorPantalla />
            <TituloAcU />
            <BusquedaUsuario setSelectedUser={setSelectedUser}/>
            {selectedUser && <DatosClientesActualizar usuario={selectedUser} />}
            {selectedUser && <PlanContratado usuario={selectedUser} />}
            <Footer />
        </div>
    );
};