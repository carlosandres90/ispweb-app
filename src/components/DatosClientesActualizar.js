import React from "react";
import '../styles/datosclientes.css';

function DatosClientesActualizar(){
    return (
        <div class="form-container-CnC">
            <h2>DATOS DEL CLIENTE</h2>
            <form class="form-CnC">
                <div class="form-group-CnC">
                    <label class="label-CnC" for="apellidos">APELLIDOS:</label>
                    <input class="input-CnC" type="text" id="apellidos" name="apellidos" required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="nombres">NOMBRES:</label>
                    <input class="input-CnC" type="text" id="nombres" name="nombres" required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="cedula">CÉDULA:</label>
                    <input class="input-CnC" type="text" id="cedula" name="cedula" required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="direccion">DIRECCIÓN:</label>
                    <input class="input-CnC" type="text" id="direccion" name="direccion" required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="telefono">TELÉFONO:</label>
                    <input class="input-CnC" type="tel" id="telefono" name="telefono" required/>
                </div>
            </form>
        </div>
    );
}

export default DatosClientesActualizar;