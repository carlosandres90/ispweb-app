import React from "react";
import '../styles/crearclientes.css';

function CrearClientes(){
    return (
        <div class="form-container">
            <h1>CREACIÓN DE CLIENTES</h1>
            <form>
                <div class="form-group">
                    <label for="apellidos">APELLIDOS:</label>
                    <input type="text" id="apellidos" name="apellidos" required />
                </div>
                <div class="form-group">
                    <label for="nombres">NOMBRES:</label>
                    <input type="text" id="nombres" name="nombres" required />
                </div>
                <div class="form-group">
                    <label for="cedula">CÉDULA:</label>
                    <input type="text" id="cedula" name="cedula" required />
                </div>
                <div class="form-group">
                    <label for="direccion">DIRECCIÓN:</label>
                    <input type="text" id="direccion" name="direccion" required />
                </div>
                <div class="form-group">
                    <label for="telefono">TELÉFONO:</label>
                    <input type="tel" id="telefono" name="telefono" required />
                </div>
                <button type="submit">INGRESAR</button>
            </form>
        </div>
    );
}

export default CrearClientes;