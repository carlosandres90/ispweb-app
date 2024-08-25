import React, { useState } from "react";
import '../styles/busquedacedula.css';
import '../styles/mensajes.css';
import { useBuscarPorUsuario } from "../hooks/useBuscarPorUsuario";

const BusquedaUsuario = ({ setSelectedUser }) => {
    
    
    const [codigo, setCodigo] = useState('');
    const { loading, error, buscarUsuarioPorCodigo } = useBuscarPorUsuario();

    const handleSearch = (e) => {
        e.preventDefault();
        buscarUsuarioPorCodigo(codigo).then((usuario) => {
            setSelectedUser(usuario);
        });
      }; 


    return (
        <div className="container-busqueda-cedula">
            <form className="form-busqueda-cedula" onSubmit = {handleSearch}>
                <div class="form-group-BC">
                    <label class="label-BC" for="usuarioB">USUARIO:</label>
                    <input 
                        class="input-BC" 
                        type="text" 
                        id="usuarioB" 
                        name="usuarioB" 
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        required />
                </div>
                <button class="button-BC" type="submit">BUSCAR</button>
            </form>
            {loading && <h1 className="mensaje-error">Cargando...</h1>}
            {error && <h1 className="mensaje-error">{error}</h1>}

        </div>
    );
}

export default BusquedaUsuario;