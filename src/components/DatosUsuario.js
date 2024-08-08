import React from "react";
import '../styles/datosusuario.css';

function DatosUsuario(){
    return (
        <div class="form-container-DU">
            <h2>DATOS DEL USUARIO</h2>
            <form class="form-DU">
                <div class="form-group-DU">
                    <label class="label-DU" for="codigo">CODIGO:</label>
                    <input class="input-DU" type="text" id="codigo" name="codigo" required/>
                </div>
                <div class="form-group-DU">
                    <label class="label-DU" for="plan">PLAN:</label>
                    <select class="select-DU" id="options" name="options">
                        <option value="20M">20 Mbps</option>
                        <option value="30M">30 Mbps</option>
                        <option value="40M">40 Mbps</option>
                        <option value="50M">50 Mbps</option>
                    </select>
                    <label class="label-Precio-DU" for="precio">PRECIO:</label>
                    <input class="input-Precio-DU" type="text" id="precio" name="precio" required/>
                </div>
                <div class="form-group-DU">
                    <label class="label-DU" for="direccion">DIRECCIÓN:</label>
                    <input class="input-dir-DU" type="text" id="direccion" name="direccion" required/>
                </div>
                <button class="button-DU" type="submit">INGRESAR</button>
            </form>
        </div>
    );
}

export default DatosUsuario;