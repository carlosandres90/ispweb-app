import React from "react";
import '../styles/busquedacedula.css';

function BusquedaUsuario(){
    return (
        <div className="container-busqueda-cedula">
            <form className="form-busqueda-cedula">
                <div class="form-group-BC">
                    <label class="label-BC" for="usuarioB">USUARIO:</label>
                    <input class="input-BC" type="text" id="usuarioB" name="usuarioB" required />
                </div>
                <button class="button-BC" type="submit">BUSCAR</button>
            </form>
        </div>
    );
}

export default BusquedaUsuario;