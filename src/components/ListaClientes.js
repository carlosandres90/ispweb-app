import React, { useContext } from 'react';
import '../styles/listaclientes.css';
import { DatosContexto } from './DatosContexto';

const ListaClientes = () => {
  const { clientes } = useContext(DatosContexto);

  return (
    <div class='lista-clientes'>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>
            {cliente.cedula} - {cliente.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaClientes;
