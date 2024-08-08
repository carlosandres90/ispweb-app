import React from "react";
import '../styles/crearclientes.css';

function CrearClientes(){
    return (
        <div class="form-container-CrC">
            <form class="form-CrC">
                <div class="form-group-CrC">
                    <label class="label-CrC" for="apellidos">APELLIDOS:</label>
                    <input class="input-CrC" type="text" id="apellidos" name="apellidos" required />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="nombres">NOMBRES:</label>
                    <input class="input-CrC" type="text" id="nombres" name="nombres" required />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="cedula">CÉDULA:</label>
                    <input class="input-CrC" type="text" id="cedula" name="cedula" required />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="direccion">DIRECCIÓN:</label>
                    <input class="input-CrC" type="text" id="direccion" name="direccion" required />
                </div>
                <div class="form-group-CrC">
                    <label class="label-CrC" for="telefono">TELÉFONO:</label>
                    <input class="input-CrC" type="tel" id="telefono" name="telefono" required />
                </div>
                <button class="button-CrC" type="submit">INGRESAR</button>
            </form>
        </div>
    );
}

export default CrearClientes;