import React, { useState } from "react";
import '../styles/busquedacedula.css';
import '../styles/mensajes.css';
import { useBuscarPorUsuario } from "../hooks/useBuscarPorUsuario";

const BusquedaUsuario = ({ setSelectedUser }) => {
    
    
    const [codigo, setCodigo] = useState('');
    const { loading, error, buscarUsuarioPorCodigo } = useBuscarPorUsuario();

    const validarEntrada = () => {
        let errores = [];

        // Validar codigo del usuario que se buscará (sin caracteres especiales peligrosos)
        if (!/^[a-zA-Z0-9\s,.-]+$/.test(codigo)) {
            errores.push("El código contiene caracteres inválidos.");
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
        buscarUsuarioPorCodigo(limpiarEntrada(codigo)).then((usuario) => {
            setSelectedUser(usuario);
        });
      }; 


    return (
        <div className="container-busqueda-cedula">
            <form className="form-busqueda-cedula" onSubmit = {handleSearch}>
                <div className="form-group-BC">
                    <label className="label-BC" htmlFor="usuarioB">USUARIO:</label>
                    <input 
                        className="input-BC" 
                        type="text" 
                        id="usuarioB" 
                        name="usuarioB" 
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        required />
                </div>
                <button className="button-BC" type="submit">BUSCAR</button>
            </form>
            {loading && <h1 className="mensaje-error">Cargando...</h1>}
            {error && <h1 className="mensaje-error">{error}</h1>}

        </div>
    );
}

export default BusquedaUsuario;