import React from "react";
import '../styles/datosclientes.css';

const DatosClientesUsuario = ({ cliente }) => {

    if(!cliente){
        return (
            <div className="form-container-CnC">
            <h2> Debe ingresar una cedula </h2>
        </div>
        );
    }

    return (
        <div className="form-container-CnC">
            <h2>DATOS DEL CLIENTE</h2>
            <form className="form-CnC">
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="apellidos">APELLIDOS:</label>
                    <input className="input-CnC" type="text" id="apellidos" name="apellidos" value={cliente.apellido} required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="nombres">NOMBRES:</label>
                    <input className="input-CnC" type="text" id="nombres" name="nombres" value={cliente.nombre} required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="cedula">CÉDULA:</label>
                    <input className="input-CnC" type="text" id="cedula" name="cedula" value={cliente.cedula} required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="direccion">DIRECCIÓN:</label>
                    <input className="input-CnC" type="text" id="direccion" name="direccion" value={cliente.direccion} required disabled/>
                </div>
                <div className="form-group-CnC">
                    <label className="label-CnC" htmlFor="telefono">TELÉFONO:</label>
                    <input className="input-CnC" type="tel" id="telefono" name="telefono" value={cliente.numeroTelefono} required disabled/>
                </div>
            </form>
        </div>
    );
}

export default DatosClientesUsuario;