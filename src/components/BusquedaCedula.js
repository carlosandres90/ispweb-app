import React, { useState } from "react";
import '../styles/busquedacedula.css';
import '../styles/mensajes.css';
import { useBuscarPorCedula } from "../hooks/useBuscarPorCedula";


const BusquedaCedula = ({ setSelectedClient }) => {

    const [cedula, setCedula] = useState('');
    

    const { loading, error, buscarClientePorCedula } = useBuscarPorCedula();

    const validarEntrada = () => {
        let errores = [];

        // Validar cédula (exactamente 10 dígitos)
        if (!/^\d{10}$/.test(cedula)) {
            errores.push("La cédula debe contener exactamente 10 dígitos.");
        }

        if (errores.length > 0) {
            alert("Errores en el formulario:\n" + errores.join("\n"));
        }

        return errores.length === 0;
    };

    const limpiarEntrada = (str) => {
        return str.replace(/[<>{}]/g, ""); // Elimina caracteres potencialmente peligrosos
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!validarEntrada()) {
            return;
        }
        buscarClientePorCedula(limpiarEntrada(cedula)).then((cliente) => {
            setSelectedClient(cliente);
        });
      }; 

    return (
        <div className="container-busqueda-cedula">
            <form className="form-busqueda-cedula" onSubmit={handleSearch}>
                <div className="form-group-BC">
                    <label className="label-BC" htmlFor="cedulaB">CEDULA:</label>
                    <input 
                        className="input-BC" 
                        type="number" 
                        id="cedulaB" 
                        name="cedulaB" 
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                        required 
                    />
                </div>
                <button className="button-BC" type="submit">BUSCAR</button>
            </form>
            
            {loading && <h1 className="mensaje-error">Cargando...</h1>}
            {error && <h1 className="mensaje-error">{error}</h1>}
        </div>
    );
}

export default BusquedaCedula;