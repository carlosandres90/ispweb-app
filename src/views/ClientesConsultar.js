import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContenedorPantalla from '../components/ContenedorPantallas';
import DatosClientes from '../components/DatosClientes';
import TituloCnC from '../components/TituloCnC';
import BusquedaCedula from '../components/BusquedaCedula';
import ListaUsuarios from '../components/ListaUsuarios';


export const ClientesConsultar = () =>{

    const [selectedClient, setSelectedClient] = useState(null);

    return(
        <div className='clientes-consultar'>
            <Header />
            <ContenedorPantalla />
            <TituloCnC />
            <BusquedaCedula setSelectedClient={setSelectedClient}/>
            {selectedClient && <DatosClientes cliente={selectedClient} />}
            <ListaUsuarios />
            <Footer />
        </div>
    );
};