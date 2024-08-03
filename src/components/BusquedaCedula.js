import React from "react";
import '../styles/busquedacedula.css';

function BusquedaCedula(){
    return (
        <div className="container-busqueda-cedula">
            <form className="form-busqueda-cedula">
                <div class="form-group-BC">
                    <label class="label-BC" for="cedulaB">CEDULA:</label>
                    <input class="input-BC" type="text" id="cedulaB" name="cedulaB" required />
                </div>
                <button class="button-BC" type="submit">BUSCAR</button>
            </form>
        </div>
    );
}

export default BusquedaCedula;