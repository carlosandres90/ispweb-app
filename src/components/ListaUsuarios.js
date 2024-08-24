import React, { useEffect, useState } from 'react';
import '../styles/listausuarios.css';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error('Error fetching clientes:', error));
  }, []);

  return (
    <div class='lista-clientes scroll-container'>
      <table class = 'tabla-usuarios'>
            <thead>
                <tr>
                    <th class="adjust-to-text">CÓDIGO USUARIO</th>
                    <th class="adjust-to-text">PLAN</th>
                    <th class="adjust-to-text">PRECIO</th>
                    <th class="adjust-to-text">DIRECCIÓN</th>
                    <th class="adjust-to-text">ESTADO</th>
                </tr>
            </thead>
            <tbody>
            {usuarios.map(usuario => (
                <tr key={usuario.id} >
                    <td class="adjust-to-text">{usuario.codigo}</td>
                    <td class="adjust-to-text">{usuario.plan}</td>
                    <td class="adjust-to-text">{usuario.precio}</td>
                    <td>{usuario.direccion}</td>
                    <td class="adjust-to-text">{usuario.cedula}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
};

export default ListaUsuarios;