import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import BusquedaCedula from '../components/BusquedaCedula';
import TituloCrU from '../components/TituloCrU';
import DatosClientesUsuario from '../components/DatosClientesUsuario';
import DatosUsuario from '../components/DatosUsuario';


export const UsuariosCrear = () =>{

    const [selectedClient, setSelectedClient] = useState(null);

    return(
        <div className='clientes-consultar'>
            <Header />
            <ContenedorPantalla />
            <TituloCrU />
            <BusquedaCedula setSelectedClient={setSelectedClient}/>
            {selectedClient && <DatosClientesUsuario cliente={selectedClient} />}
            {selectedClient && <DatosUsuario cliente={selectedClient} />}
            
            <Footer />
        </div>
    );
};