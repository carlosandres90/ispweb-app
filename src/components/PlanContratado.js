import React, { useEffect, useState } from "react";
import '../styles/datosusuarioact.css';

function PlanContratado({ usuario }) {
    const [selectedPlan, setSelectedPlan] = useState(usuario.plan || '');
    const [precio, setPrecio] = useState(usuario.precio || '');
    const [planes, setPlanes] = useState([]);

    // Efecto para establecer el plan y el precio del usuario actual
    useEffect(() => {
        if (usuario) {
            setSelectedPlan(usuario.plan || '');
            setPrecio(usuario.precio || '');
        }
    }, [usuario]);  // Esto asegura que se actualicen los valores cuando cambia el usuario


    useEffect(() => {
        // Función para obtener la lista de planes disponibles desde la API
        const obtenerPlanesDisponibles = async () => {
            try {
                const response = await fetch('http://192.168.100.141:3001/planes');
                const data = await response.json();
                setPlanes(data); // Almacena los planes en el estado
            } catch (error) {
                console.error('Error obteniendo los planes:', error);
            }
        };

        obtenerPlanesDisponibles();  // Llama a la función para obtener los planes disponibles
    }, []);

    // Maneja el cambio en el select de plan y actualiza el estado de plan y precio
    const handlePlanChange = (e) => {
        const planSeleccionado = planes.find(p => p.anchobanda === e.target.value);
        setSelectedPlan(planSeleccionado.anchobanda);
        setPrecio(planSeleccionado.precio); // Ajusta el estado del precio basado en el plan seleccionado
    };

    return (
        <div className="form-container-DUA">
            <h2>SERVICIO CONTRATADO</h2>
            <form className="form-DUA">
                <div className="form-group-DUA">
                    <label className="label-DUA" htmlFor="plan">PLAN:</label>
                    <select
                        className="select-DUA"
                        id="plan"
                        name="plan"
                        value={selectedPlan}
                        onChange={handlePlanChange}
                    >
                        {planes.map(planItem => (
                            <option key={planItem.id} value={planItem.anchobanda}>
                                {planItem.anchobanda}
                            </option>
                        ))}
                    </select>
                    <label className="label-Precio-DUA" htmlFor="precio">PRECIO:</label>
                    <input 
                        className="input-Precio-DUA" 
                        type="text" 
                        id="precio" 
                        name="precio" 
                        value={precio} 
                        onChange={(e) => setPrecio(e.target.value)}  // Permite la edición manual del precio
                        required
                    />
                </div>
                <div className="form-group-DUA">
                    <label className="label-DUA" htmlFor="direccion">DIRECCIÓN:</label>
                    <input 
                        className="input-dir-DUA" 
                        type="text" 
                        id="direccion" 
                        name="direccion" 
                        value={usuario.direccion} 
                        required
                    />
                </div>
                <div className="form-group-DUA">
                    <label className="label-DUA" htmlFor="estado">ESTADO:</label>
                    <select className="select-estado-DUA" id="estado" name="estado">
                        <option value="ACTIVO">ACTIVO</option>
                        <option value="INACTIVO">INACTIVO</option>
                    </select>
                </div>
                <div className="form-group-DUA">
                    <label className="label-DUA" htmlFor="motivo">MOTIVO:</label>
                    <input className="input-dir-DUA" type="text" id="motivo" name="motivo" required/>
                </div>
                <button className="button-act-DUA" type="submit">ACTUALIZAR</button>
            </form>
        </div>
    );
}

export default PlanContratado;