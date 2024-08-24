import React, { useState } from "react";
import '../styles/busquedacedula.css';
import '../styles/mensajes.css';
import { useBuscarPorCedula } from "../hooks/useBuscarPorCedula";


const BusquedaCedula = ({ setSelectedClient }) => {

    const [cedula, setCedula] = useState('');

    const { loading, error, buscarClientePorCedula } = useBuscarPorCedula();

    const handleSearch = (e) => {
        e.preventDefault();
        buscarClientePorCedula(cedula).then((cliente) => {
            setSelectedClient(cliente);
        });
      }; 

    return (
        <div className="container-busqueda-cedula">
            <form className="form-busqueda-cedula" onSubmit={handleSearch}>
                <div class="form-group-BC">
                    <label class="label-BC" for="cedulaB">CEDULA:</label>
                    <input 
                        class="input-BC" 
                        type="text" 
                        id="cedulaB" 
                        name="cedulaB" 
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        required 
                    />
                </div>
                <button class="button-BC" type="submit">BUSCAR</button>
            </form>

            {loading && <h1 className="mensaje-error">Cargando...</h1>}
            {error && <h1 className="mensaje-error">{error}</h1>}
        </div>
    );
}

export default BusquedaCedula;