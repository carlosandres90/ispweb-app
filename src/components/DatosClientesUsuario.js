import React from "react";
import '../styles/datosclientes.css';

const DatosClientesUsuario = ({ cliente }) => {

    if(!cliente){
        return (
            <div class="form-container-CnC">
            <h2> Debe ingresar una cedula </h2>
        </div>
        );
    }

    return (
        <div class="form-container-CnC">
            <h2>DATOS DEL CLIENTE</h2>
            <form class="form-CnC">
                <div class="form-group-CnC">
                    <label class="label-CnC" for="apellidos">APELLIDOS:</label>
                    <input class="input-CnC" type="text" id="apellidos" name="apellidos" value={cliente.apellido} required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="nombres">NOMBRES:</label>
                    <input class="input-CnC" type="text" id="nombres" name="nombres" value={cliente.nombre} required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="cedula">CÉDULA:</label>
                    <input class="input-CnC" type="text" id="cedula" name="cedula" value={cliente.cedula} required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="direccion">DIRECCIÓN:</label>
                    <input class="input-CnC" type="text" id="direccion" name="direccion" value={cliente.direccion} required disabled/>
                </div>
                <div class="form-group-CnC">
                    <label class="label-CnC" for="telefono">TELÉFONO:</label>
                    <input class="input-CnC" type="tel" id="telefono" name="telefono" value={cliente.telefono} required disabled/>
                </div>
            </form>
        </div>
    );
}

export default DatosClientesUsuario;